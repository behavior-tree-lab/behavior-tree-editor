# 设计草案：节点参数 Schema 与引脚式编辑

> 状态：**草案 / 待评审**　·　分支：`feat/node-pins`　·　目标读者：维护者
>
> 配套文档：`behavior-tree/design/ai-friendly-editing.md`（DSL 方向）。本文是它的
> **可视化对应物**——同一个根问题的两种解法，最终应收敛到同一个"节点定义"事实源。

## 1. 背景：为什么要做这个

连续数小时的踩坑（子树 category 丢失、composite 无 category 不连线、坐标/camera
对不上、Probability 无 child、OpFriend 的 op 只能填数字 `1`、ItemOpt 参数为空导致
超时……）**根因只有一个**：

> 编辑器的 JSON 是为"编辑器自己读写"设计的序列化格式，带一堆**隐含契约**
> （category 决定连线、参数名/类型由节点决定、坐标/camera/UUID）。人或脚本一旦
> 直接编辑这个格式，必然漏掉某个隐含字段。

当前节点参数用 `b3-key-table`（通用键值表）编辑——它**不知道**一个节点有哪些参数、
每个参数是什么类型、枚举有哪些取值。于是：

- `FriendOp` 的 `op` 只能手填 `1`，看不出是 "SendInvite"。
- `Probability` 该有 `probability`（float），却被填成 `p`（string）。
- 漏填、错填、类型错，编辑器和运行时都不报错，跑起来才超时/panic。

**核心主张**：给每个节点一份 **schema（参数元信息）**，编辑器据此把参数渲染成
**带类型的表单/引脚**（枚举→下拉框、数字→数字框、节点引用→连线）。这就是 UE 蓝图
引脚的本质——**让节点的"形状"由定义驱动，而不是让用户裸填 JSON**。

## 2. 目标与非目标

**目标**
1. 每个节点类型声明它的参数：`name / type / 默认值 / 枚举可选值 / 说明`。
2. 属性面板按 schema 渲染：枚举下拉、数字框、布尔开关、字符串框。
3. 校验：缺必填、类型不符、枚举非法 → 编辑器即时标红，不等到运行时。
4. schema 是**单一事实源**，运行时和编辑器都从它派生，杜绝"参数名/category 漂移"。

**非目标（本阶段不做）**
- 不做完整的"数据引脚连线传值"（节点 A 的输出连到节点 B 的输入）。那是更大的
  图模型改造，留待 schema 落地、价值验证后再评估。
- 不改运行时的 tick 语义。

## 3. Schema 从哪来（关键决策）

运行时（Go）的节点才是参数的**真正定义方**——`FriendOp.Initialize` 里
`btprops.Int(cfg, "op", ...)` 就规定了它读 `op`。所以 schema 应该**贴近运行时节点**，
最好能从运行时导出，避免两处维护漂移。

三个候选：

| 方案 | 做法 | 取舍 |
|------|------|------|
| **A. 手写 JSON schema** | 每个节点写一份 `{name, params:[...]}` JSON，编辑器加载 | 简单直接；但又多一处要和 Go 代码同步维护 |
| **B. Go 节点导出 schema** | 节点实现一个 `Schema()` 方法，用一个命令导出成 JSON 给编辑器 | 事实源唯一（Go），不漂移；要给每个节点加方法 |
| **C. 注解/反射生成** | 从 Go 结构体 tag 或 btprops 调用里提取 | 最自动；实现复杂，btprops 是运行时调用难静态提取 |

**倾向 B**：和 `ai-friendly-editing.md` 选 "Go 为事实源、cmd 工具导出" 一致。一个
`cmd/btschema`（或复用 btc）扫描注册的节点，输出 `nodes.schema.json`，编辑器加载它
来渲染表单。枚举值可从 protobuf 的枚举定义取（如 `OpFriendType`）。

## 4. 分阶段落地（每步独立可验证）

**阶段 0（先做，最便宜，立刻止血）——校验器**
独立工具：输入 marvel.b3，输出报告。检查：引用完整性、category 合法（composite/
decorator/action/tree）、参数名是否被节点认识、decorator 恰好 1 子。**不需要 schema
就能挡住本次大半的坑**，且能接住手写/AI 生成的坏树。

**阶段 1——节点 schema 定义 + 导出**
按方案 B，为节点声明参数 schema，导出 `nodes.schema.json`。先覆盖高频节点
（FriendOp/ItemOpt/Probability/Wait/...）。

**阶段 2——属性面板按 schema 渲染**
`propertiespanel` 读 schema：枚举→`<select>`、数字→`number`、布尔→checkbox。
替换裸 `b3-key-table`。这一步直接解决"op 填数字看不懂"。

**阶段 3——即时校验**
面板上按 schema 标红非法参数；导出/保存前整树校验。

**阶段 4（可选，远期）——数据引脚连线**
真正的 UE 式引脚：节点带输入/输出引脚，黑板变量/上游结果通过连线喂入参数
（如 RecommendFriend 的结果连到 FriendOp 的 targets）。需要图模型扩展，单独评估。

## 5. 与 DSL 方向的关系

`ai-friendly-editing.md` 的 DSL（文本）和本文的引脚（可视化）**共用同一个 schema/
节点定义事实源**：

- schema 定义了"一个节点长什么样" → DSL 转换器用它做强校验、引脚 UI 用它渲染。
- 两条路最终都指向：**人/AI 不再裸编辑带隐含契约的 JSON**。

建议：**先做阶段 0 校验器**（两个方向都用得上、最便宜），再按需推进 schema。

## 6. 待决问题

- schema 事实源选 A/B/C？（倾向 B：Go 导出）
- 枚举值怎么拿到中文/可读标签（protobuf OriginalName vs 自定义 label）？
- 阶段 4 的数据引脚要不要做、值不值得？（取决于操作类节点对"上游数据"的依赖有多普遍）

---

*本文为设计草案，供评审。方向确认后再进入实现。先评审：阶段顺序对不对、schema
事实源选哪个。*
