// GENERATED FILE - do not edit by hand.
// Source: haibot/protocol.catalog.json
// Regenerate with: node scripts/gen-protocol-catalog-js.js
(function() {
  'use strict';

  var catalog = {
      "catalogVersion": 1,
      "generatorVersion": "protocolgen/v1",
      "fingerprint": "sha256:9ca478aab4d87594d2ffff5097cb64f5d2e75811d5a2171d121e554ae622ba79",
      "protobufPackage": "KKSG",
      "rpcs": [
        {
          "name": "AcquireShop",
          "packetId": 30221,
          "requestType": "KKSG.AcquireShopArg",
          "responseType": "KKSG.AcquireShopRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "AcquireShopGroup",
          "packetId": 30220,
          "requestType": "KKSG.AcquireShopGroupArg",
          "responseType": "KKSG.AcquireShopGroupRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "AddLevelExstring",
          "packetId": 62860,
          "requestType": "KKSG.AddLevelExstringArg",
          "responseType": "KKSG.AddLevelExstringRes",
          "connection": "game",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "BatchQueryFriend",
          "packetId": 4679,
          "requestType": "KKSG.BatchQueryFriendArg",
          "responseType": "KKSG.BatchQueryFriendRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "BatchQueryTeam",
          "packetId": 9079,
          "requestType": "KKSG.BatchQueryTeamArg",
          "responseType": "KKSG.BatchQueryTeamRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "BatchTouchShopItem",
          "packetId": 62318,
          "requestType": "KKSG.BatchTouchShopItemArg",
          "responseType": "KKSG.BatchTouchShopItemRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "BattleOperation",
          "packetId": 43697,
          "requestType": "KKSG.BattleOperationArg",
          "responseType": "KKSG.BattleOperationRes",
          "connection": "game",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "BuyFatigue",
          "packetId": 45072,
          "requestType": "KKSG.BuyFatigueArg",
          "responseType": "KKSG.BuyFatigueRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "unsupported",
            "reasons": [
              "nested_message"
            ]
          }
        },
        {
          "name": "CastUnitedSkill",
          "packetId": 21367,
          "requestType": "KKSG.CastUnitedSkillArg",
          "responseType": "KKSG.CastUnitedSkillRes",
          "connection": "game",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "ChangeScene",
          "packetId": 52041,
          "requestType": "KKSG.ChangeSceneArg",
          "responseType": "KKSG.ChangeSceneRes",
          "connection": "gate",
          "timeoutMs": 10000,
          "callSupport": {
            "status": "unsupported",
            "reasons": [
              "nested_message"
            ]
          }
        },
        {
          "name": "ChapterOperation",
          "packetId": 34099,
          "requestType": "KKSG.ChapterOperationArg",
          "responseType": "KKSG.ChapterOperationRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "ChatQueryChannel",
          "packetId": 21102,
          "requestType": "KKSG.ChatQueryChannelArg",
          "responseType": "KKSG.ChatQueryChannelRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "ChatQueryMessage",
          "packetId": 32240,
          "requestType": "KKSG.ChatQueryMessageArg",
          "responseType": "KKSG.ChatQueryMessageRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "ChatSelectChannel",
          "packetId": 13316,
          "requestType": "KKSG.ChatSelectChannelArg",
          "responseType": "KKSG.ChatSelectChannelRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "ChatSendMessage",
          "packetId": 12672,
          "requestType": "KKSG.ChatSendMessageArg",
          "responseType": "KKSG.ChatSendMessageRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "CheckCD",
          "packetId": 56714,
          "requestType": "KKSG.CheckCDArg",
          "responseType": "KKSG.CheckCDRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "CheckTutorial",
          "packetId": 57057,
          "requestType": "KKSG.CheckTutorialArg",
          "responseType": "KKSG.CheckTutorialRes",
          "connection": "game",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "DoodadPick",
          "packetId": 46776,
          "requestType": "KKSG.DoodadPickArg",
          "responseType": "KKSG.DoodadPickRes",
          "connection": "game",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "EquipOperation",
          "packetId": 33098,
          "requestType": "KKSG.EquipOperationArg",
          "responseType": "KKSG.EquipOperationRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "unsupported",
            "reasons": [
              "map"
            ]
          }
        },
        {
          "name": "FetchServerList",
          "packetId": 17808,
          "requestType": "KKSG.FetchServerListArg",
          "responseType": "KKSG.FetchServerListRes",
          "connection": "login",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "unsupported",
            "reasons": [
              "nested_message"
            ]
          }
        },
        {
          "name": "FetchServerTime",
          "packetId": 34590,
          "requestType": "KKSG.FetchServerTimeArg",
          "responseType": "KKSG.FetchServerTimeRes",
          "connection": "gate",
          "timeoutMs": 2000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "GMCommand",
          "packetId": 61899,
          "requestType": "KKSG.GMCommandArg",
          "responseType": "KKSG.GMCommandRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "GachaOperationNew",
          "packetId": 29116,
          "requestType": "KKSG.GachaOperationArg",
          "responseType": "KKSG.GachaOperationRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "GetFriendTeamInviteList",
          "packetId": 60070,
          "requestType": "KKSG.GetFriendTeamInviteListArg",
          "responseType": "KKSG.GetFriendTeamInviteListRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "GetProfile",
          "packetId": 20607,
          "requestType": "KKSG.GetProfileArg",
          "responseType": "KKSG.GetProfileRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "GetVivoxToken",
          "packetId": 26749,
          "requestType": "KKSG.GetVivoxTokenArg",
          "responseType": "KKSG.GetVivoxTokenRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "GuildCheckIn",
          "packetId": 2910,
          "requestType": "KKSG.GuildCheckInArg",
          "responseType": "KKSG.GuildCheckInRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "InspireOperation",
          "packetId": 10333,
          "requestType": "KKSG.InspireOperationArg",
          "responseType": "KKSG.InspireOperationRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "unsupported",
            "reasons": [
              "map"
            ]
          }
        },
        {
          "name": "ItemOpt",
          "packetId": 52064,
          "requestType": "KKSG.ItemOptArg",
          "responseType": "KKSG.ItemOptRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "JumpCutscene",
          "packetId": 26449,
          "requestType": "KKSG.JumpCutsceneArg",
          "responseType": "KKSG.JumpCutsceneRes",
          "connection": "game",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "LevelTrigger",
          "packetId": 59027,
          "requestType": "KKSG.LevelTriggerArg",
          "responseType": "KKSG.LevelTriggerRes",
          "connection": "game",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "LikePlayer",
          "packetId": 51735,
          "requestType": "KKSG.LikePlayerArg",
          "responseType": "KKSG.LikePlayerRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "LikeSceneTeamMember",
          "packetId": 9683,
          "requestType": "KKSG.LikeSceneTeamMemberArg",
          "responseType": "KKSG.LikeSceneTeamMemberRes",
          "connection": "game",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "LoadedNextScene",
          "packetId": 63480,
          "requestType": "KKSG.LoadedNextSceneArg",
          "responseType": "KKSG.LoadedNextSceneRes",
          "connection": "game",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "LoadedScene",
          "packetId": 36964,
          "requestType": "KKSG.LoadedSceneArg",
          "responseType": "KKSG.LoadedSceneRes",
          "connection": "game",
          "timeoutMs": 300000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "LoginGameSession",
          "packetId": 57714,
          "requestType": "KKSG.LoginGameSessionArg",
          "responseType": "KKSG.LoginGameSessionRes",
          "connection": "game",
          "timeoutMs": 2000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "LoginReconnect",
          "packetId": 38110,
          "requestType": "KKSG.LoginReconnectArg",
          "responseType": "KKSG.LoginReconnectRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "LoginReq",
          "packetId": 52076,
          "requestType": "KKSG.LoginReqArg",
          "responseType": "KKSG.LoginReqRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "unsupported",
            "reasons": [
              "nested_message"
            ]
          }
        },
        {
          "name": "LogoutGameSession",
          "packetId": 15223,
          "requestType": "KKSG.LogoutGameSessionArg",
          "responseType": "KKSG.LogoutGameSessionRes",
          "connection": "game",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "LogoutReq",
          "packetId": 37649,
          "requestType": "KKSG.LogoutReqArg",
          "responseType": "KKSG.LogoutReqRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "MailHint",
          "packetId": 34346,
          "requestType": "KKSG.MailHintArg",
          "responseType": "KKSG.MailHintRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "MailOp",
          "packetId": 41687,
          "requestType": "KKSG.MailOpArg",
          "responseType": "KKSG.MailOpRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "MoneyExchange",
          "packetId": 20697,
          "requestType": "KKSG.MoneyExchangeArg",
          "responseType": "KKSG.MoneyExchangeRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "OpFriend",
          "packetId": 6324,
          "requestType": "KKSG.OpFriendArg",
          "responseType": "KKSG.OpFriendRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "unsupported",
            "reasons": [
              "nested_message"
            ]
          }
        },
        {
          "name": "OpGuild",
          "packetId": 672,
          "requestType": "KKSG.OpGuildArg",
          "responseType": "KKSG.OpGuildRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "unsupported",
            "reasons": [
              "nested_message"
            ]
          }
        },
        {
          "name": "OpTeam",
          "packetId": 42406,
          "requestType": "KKSG.OpTeamArg",
          "responseType": "KKSG.OpTeamRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "unsupported",
            "reasons": [
              "nested_message"
            ]
          }
        },
        {
          "name": "PartnerOperation",
          "packetId": 35298,
          "requestType": "KKSG.PartnerOperationArg",
          "responseType": "KKSG.PartnerOperationRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "unsupported",
            "reasons": [
              "map"
            ]
          }
        },
        {
          "name": "PartnerTeamOperation",
          "packetId": 34822,
          "requestType": "KKSG.PartnerTeamOperationArg",
          "responseType": "KKSG.PartnerTeamOperationRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "PrepareSecurityConn",
          "packetId": 29447,
          "requestType": "KKSG.PrepareSecurityConnArg",
          "responseType": "KKSG.PrepareSecurityConnRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "unsupported",
            "reasons": [
              "bytes"
            ]
          }
        },
        {
          "name": "ProveGroundOp",
          "packetId": 48049,
          "requestType": "KKSG.ProveGroundOpArg",
          "responseType": "KKSG.ProveGroundOpRes",
          "connection": "game",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "PurchaseShopItem",
          "packetId": 34225,
          "requestType": "KKSG.PurchaseShopItemArg",
          "responseType": "KKSG.PurchaseShopItemRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "QueryFriendPrivateChat",
          "packetId": 14984,
          "requestType": "KKSG.QueryFriendPrivateChatArg",
          "responseType": "KKSG.QueryFriendPrivateChatRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "QueryGachaInfo",
          "packetId": 7243,
          "requestType": "KKSG.QueryGachaInfoArg",
          "responseType": "KKSG.QueryGachaInfoRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "QueryLoading",
          "packetId": 7595,
          "requestType": "KKSG.QueryLoadingArg",
          "responseType": "KKSG.QueryLoadingRes",
          "connection": "game",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "QueryQuest",
          "packetId": 55786,
          "requestType": "KKSG.QueryQuestArg",
          "responseType": "KKSG.QueryQuestRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "QuerySelfGuild",
          "packetId": 41224,
          "requestType": "KKSG.QuerySelfGuildArg",
          "responseType": "KKSG.QuerySelfGuildRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "QueryTeam",
          "packetId": 46202,
          "requestType": "KKSG.QueryTeamArg",
          "responseType": "KKSG.QueryTeamRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "QueryTeamBattleStatis",
          "packetId": 55025,
          "requestType": "KKSG.QueryTeamBattleStatisArg",
          "responseType": "KKSG.QueryTeamBattleStatisRes",
          "connection": "game",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "QuestReward",
          "packetId": 28635,
          "requestType": "KKSG.QuestRewardArg",
          "responseType": "KKSG.QuestRewardRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "ReceiveTeamLevelAward",
          "packetId": 16516,
          "requestType": "KKSG.ReceiveTeamLevelAwardArg",
          "responseType": "KKSG.ReceiveTeamLevelAwardRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "RecommendFriend",
          "packetId": 46575,
          "requestType": "KKSG.RecommendFriendArg",
          "responseType": "KKSG.RecommendFriendRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "RecommendGuild",
          "packetId": 46286,
          "requestType": "KKSG.RecommendGuildArg",
          "responseType": "KKSG.RecommendGuildRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "ReconnectGameSession",
          "packetId": 10276,
          "requestType": "KKSG.ReconnectSceneGSArg",
          "responseType": "KKSG.ReconnectSceneGSRes",
          "connection": "game",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "ReconnectQueryTeam",
          "packetId": 26395,
          "requestType": "KKSG.ReconnectQueryTeamArg",
          "responseType": "KKSG.ReconnectQueryTeamRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "ReconnectRole",
          "packetId": 41855,
          "requestType": "KKSG.ReconnectRoleArg",
          "responseType": "KKSG.ReconnectRoleRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "unsupported",
            "reasons": [
              "nested_message"
            ]
          }
        },
        {
          "name": "Report",
          "packetId": 60197,
          "requestType": "KKSG.ReportArg",
          "responseType": "KKSG.ReportRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "ReportPlayer",
          "packetId": 19981,
          "requestType": "KKSG.ReportPlayerArg",
          "responseType": "KKSG.ReportPlayerRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "ReportVoice",
          "packetId": 43889,
          "requestType": "KKSG.ReportVoiceArg",
          "responseType": "KKSG.ReportVoiceRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "SceneContinueChange",
          "packetId": 20385,
          "requestType": "KKSG.SceneContinueChangeArg",
          "responseType": "KKSG.SceneContinueChangeRes",
          "connection": "game",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "SearchPlayerForFriend",
          "packetId": 19090,
          "requestType": "KKSG.SearchPlayerForFriendArg",
          "responseType": "KKSG.SearchPlayerForFriendRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "SelectBD",
          "packetId": 28008,
          "requestType": "KKSG.SelectBDArg",
          "responseType": "KKSG.SelectBDRes",
          "connection": "game",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "SelectRole",
          "packetId": 27389,
          "requestType": "KKSG.SelectRoleArg",
          "responseType": "KKSG.SelectRoleRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "ServerTime",
          "packetId": 35118,
          "requestType": "KKSG.ServerTimeC2G",
          "responseType": "KKSG.ServerTimeG2C",
          "connection": "game",
          "timeoutMs": 2000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "SetBattleSpeedRate",
          "packetId": 1446,
          "requestType": "KKSG.SetBattleSpeedRateArg",
          "responseType": "KKSG.SetBattleSpeedRateRes",
          "connection": "game",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "SetBattleState",
          "packetId": 36109,
          "requestType": "KKSG.SetBattleStateArg",
          "responseType": "KKSG.SetBattleStateRes",
          "connection": "game",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "SetChatQuickMessage",
          "packetId": 14688,
          "requestType": "KKSG.ChatQuickMessage",
          "responseType": "KKSG.SetChatQuickMessageRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "unsupported",
            "reasons": [
              "map"
            ]
          }
        },
        {
          "name": "SkillOp",
          "packetId": 10672,
          "requestType": "KKSG.SkillOpArg",
          "responseType": "KKSG.SkillOpRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "StartSecurityConn",
          "packetId": 58761,
          "requestType": "KKSG.StartSecurityConnArg",
          "responseType": "KKSG.StartSecurityConnRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "unsupported",
            "reasons": [
              "bytes"
            ]
          }
        },
        {
          "name": "Sweep",
          "packetId": 3546,
          "requestType": "KKSG.SweepArg",
          "responseType": "KKSG.SweepRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "SwitchCombatRole",
          "packetId": 8975,
          "requestType": "KKSG.SwitchCombatRoleArg",
          "responseType": "KKSG.SwitchCombatRoleRes",
          "connection": "game",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "TaskTrace",
          "packetId": 54977,
          "requestType": "KKSG.TaskTraceArg",
          "responseType": "KKSG.TaskTraceRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "Teleport",
          "packetId": 23339,
          "requestType": "KKSG.TeleportArg",
          "responseType": "KKSG.TeleportRes",
          "connection": "game",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "TouchShopItem",
          "packetId": 37226,
          "requestType": "KKSG.TouchShopItemArg",
          "responseType": "KKSG.TouchShopItemRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "TransferLocation",
          "packetId": 51249,
          "requestType": "KKSG.TransferLocationArg",
          "responseType": "KKSG.TransferLocationRes",
          "connection": "game",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "UnlockTeleportPoint",
          "packetId": 52187,
          "requestType": "KKSG.UnlockTeleportPointArg",
          "responseType": "KKSG.UnlockTeleportPointRes",
          "connection": "game",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "UpdatePlayerSetting",
          "packetId": 42971,
          "requestType": "KKSG.UpdatePlayerSettingArg",
          "responseType": "KKSG.UpdatePlayerSettingRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "unsupported",
            "reasons": [
              "nested_message"
            ]
          }
        },
        {
          "name": "UpdateProfile",
          "packetId": 47719,
          "requestType": "KKSG.UpdateProfileArg",
          "responseType": "KKSG.UpdateProfileRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        },
        {
          "name": "UpdateTutorial",
          "packetId": 57552,
          "requestType": "KKSG.UpdateTutorialArg",
          "responseType": "KKSG.UpdateTutorialRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "unsupported",
            "reasons": [
              "nested_message"
            ]
          }
        },
        {
          "name": "UseItem",
          "packetId": 35595,
          "requestType": "KKSG.UseItemArg",
          "responseType": "KKSG.UseItemRes",
          "connection": "gate",
          "timeoutMs": 5000,
          "callSupport": {
            "status": "supported"
          }
        }
      ],
      "protocols": [
        {
          "name": "AIDebugNtf",
          "packetId": 29400,
          "messageType": "KKSG.AIDebugData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "AddExpNtf",
          "packetId": 35286,
          "messageType": "KKSG.AddExpInfo",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "AllAttributeChangeNotify",
          "packetId": 52777,
          "messageType": "KKSG.AllAttributeChangeNotifyData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "AllBuffsChangeNtf",
          "packetId": 22183,
          "messageType": "KKSG.AllBuffsChangeData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "AttributeChangeNotify",
          "packetId": 1163,
          "messageType": "KKSG.ChangedAttribute",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "BDSelectorNtf",
          "packetId": 505,
          "messageType": "KKSG.BDSelectorNtfData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "BattleGroupChangeNtf",
          "packetId": 43171,
          "messageType": "KKSG.BattleGroupChangeData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "BattleResultActionNtf",
          "packetId": 25860,
          "messageType": "KKSG.BattleResultActionNtf",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "BattleResultNtf",
          "packetId": 47535,
          "messageType": "KKSG.BattleResultData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "BattleStateNtf",
          "packetId": 8368,
          "messageType": "KKSG.BattleStateNtf",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "BuffChangeNtf",
          "packetId": 109,
          "messageType": "KKSG.BuffChangeData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "BulletClearNotify",
          "packetId": 26434,
          "messageType": "KKSG.BulletClear",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "BulletTargetNtf",
          "packetId": 30042,
          "messageType": "KKSG.BulletTarget",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "CDChangeNtf",
          "packetId": 62850,
          "messageType": "KKSG.CDChangeNtf",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "CDFixNtf",
          "packetId": 39654,
          "messageType": "KKSG.CDFixNtf",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "ChangeMapNtf",
          "packetId": 29172,
          "messageType": "KKSG.ChangeMapData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "CharpterStarBattleMsg",
          "packetId": 61882,
          "messageType": "KKSG.ChapterStarMsg",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "CheckMapLoadReady",
          "packetId": 35067,
          "messageType": "KKSG.CheckMapLoadReadyData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "ClientGMCommand",
          "packetId": 26161,
          "messageType": "KKSG.GMCommandArg",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "CombatRoleNtf",
          "packetId": 45155,
          "messageType": "KKSG.CombatRoleNtfData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "ConcentrateFireNtf",
          "packetId": 47802,
          "messageType": "KKSG.ConcentrateFireNtfData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "CorrectPosition",
          "packetId": 43449,
          "messageType": "KKSG.CorrectPositionData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "CutsceneJumpNtf",
          "packetId": 26684,
          "messageType": "KKSG.CutsceneData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "DeathNtf",
          "packetId": 12320,
          "messageType": "KKSG.DeathNtf",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "DoodadPickedNtf",
          "packetId": 15616,
          "messageType": "KKSG.DoodadPickedNtfData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "DynamicWallNtf",
          "packetId": 11984,
          "messageType": "KKSG.DynamicWallNtfData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "EQuestNtf",
          "packetId": 5281,
          "messageType": "KKSG.EQuestNtfData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "EnemyChangeStageNtf",
          "packetId": 60219,
          "messageType": "KKSG.EnemyChangeStageData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "EnterGameSessionNotify",
          "packetId": 64211,
          "messageType": "KKSG.EnterGameSessionNotify",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "EnttSyncTest",
          "packetId": 14358,
          "messageType": "KKSG.EnttSyncTest",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "EnvQueryPositionDebugNtf",
          "packetId": 61846,
          "messageType": "KKSG.EnvQueryPositionDebugNtf",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "FaceOperationReq",
          "packetId": 4526,
          "messageType": "KKSG.FaceInfo",
          "direction": "client_to_server",
          "connection": "game"
        },
        {
          "name": "FatigueBuyInfoChangeNtf",
          "packetId": 417,
          "messageType": "KKSG.FatigueBuyInfo",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "FatigueRecoverNotify",
          "packetId": 9943,
          "messageType": "KKSG.FatigueRecoverNotifyData",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "FightGroupChangeNtf",
          "packetId": 52007,
          "messageType": "KKSG.FightGroupChangeNtf",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "FriendChangeSyncClientNtf",
          "packetId": 30333,
          "messageType": "KKSG.FriendChangeSyncClientData",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "GMGetAttrsNtf",
          "packetId": 12829,
          "messageType": "KKSG.GMGetAttrsNtfData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "GuildChangeSyncClientNtf",
          "packetId": 13578,
          "messageType": "KKSG.GuildChangeSyncClientData",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "HSErrorNotify",
          "packetId": 9406,
          "messageType": "KKSG.ErrorInfo",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "HintNotify",
          "packetId": 750,
          "messageType": "KKSG.HintNotifyData",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "HintOperation",
          "packetId": 958,
          "messageType": "KKSG.HintOpData",
          "direction": "client_to_server",
          "connection": "gate"
        },
        {
          "name": "HobbyTimeChangeNtf",
          "packetId": 62922,
          "messageType": "KKSG.HobbyTimeChangeNtfData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "ItemChangeNtf",
          "packetId": 21113,
          "messageType": "KKSG.ItemChangeNtfData",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "LevelScriptNotice",
          "packetId": 39208,
          "messageType": "KKSG.LevelScriptNoticeData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "LevelTriggerNtf",
          "packetId": 27229,
          "messageType": "KKSG.LevelTriggerNtfData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "LoadGroupNtf",
          "packetId": 49785,
          "messageType": "KKSG.LoadGroupNtfData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "LoadableGroupNtf",
          "packetId": 57531,
          "messageType": "KKSG.LoadableGroupNtfData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "LoadingSceneNtf",
          "packetId": 62667,
          "messageType": "KKSG.LoadingSceneNtf",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "LoadingSceneStepNtf",
          "packetId": 52033,
          "messageType": "KKSG.LoadingSceneStepNtf",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "LoadingSceneStepReport",
          "packetId": 29194,
          "messageType": "KKSG.LoadingSceneStepReport",
          "direction": "client_to_server",
          "connection": "game"
        },
        {
          "name": "LoginChallenge",
          "packetId": 56630,
          "messageType": "KKSG.LoginChallenge",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "MarqueeNotify",
          "packetId": 17340,
          "messageType": "KKSG.MarqueeNofityData",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "MoveOperationReq",
          "packetId": 5191,
          "messageType": "KKSG.MoveInfo",
          "direction": "client_to_server",
          "connection": "game"
        },
        {
          "name": "ObtainItemNtf",
          "packetId": 49030,
          "messageType": "KKSG.ObtainItemData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "PlatColliderSwitch",
          "packetId": 9318,
          "messageType": "KKSG.PlatColliderSwitchNtf",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "PresentChangeNtf",
          "packetId": 53493,
          "messageType": "KKSG.PresentChangeNtf",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "ProjectDamageNtf",
          "packetId": 6940,
          "messageType": "KKSG.ProjectDamageData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "ProjectNotSkillDamageNtf",
          "packetId": 51656,
          "messageType": "KKSG.ProjectNotSkillDamageData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "QuestInfoNtf",
          "packetId": 1276,
          "messageType": "KKSG.QuestInfo",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "RefreshPartnerNtf",
          "packetId": 64534,
          "messageType": "KKSG.RefreshPartner",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "RefreshPartnerTeamDataNtf",
          "packetId": 57253,
          "messageType": "KKSG.RefreshPartnerTeamData",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "RenameNtf",
          "packetId": 36866,
          "messageType": "KKSG.RenameData",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "ReportAWSLatency",
          "packetId": 37984,
          "messageType": "KKSG.ReportAWSLatency",
          "direction": "client_to_server",
          "connection": "gate"
        },
        {
          "name": "ReportServerLatency",
          "packetId": 49300,
          "messageType": "KKSG.ReportServerLatency",
          "direction": "client_to_server",
          "connection": "gate"
        },
        {
          "name": "RequireAction",
          "packetId": 19417,
          "messageType": "KKSG.RequireActionData",
          "direction": "client_to_server",
          "connection": "game"
        },
        {
          "name": "RoleCombatGroupNtf",
          "packetId": 3447,
          "messageType": "KKSG.RoleCombatGroupNtfData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "RoleLevelUpNtf",
          "packetId": 40052,
          "messageType": "KKSG.RoleLevelUpNtfData",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "RoleStateCD",
          "packetId": 1794,
          "messageType": "KKSG.RoleStateCD",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "RunGroupNtf",
          "packetId": 15841,
          "messageType": "KKSG.RunGroupNtfData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "SceneFrameFixNtf",
          "packetId": 11023,
          "messageType": "KKSG.SceneFrameFixNtfData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "SessionCloseNtf",
          "packetId": 9378,
          "messageType": "KKSG.SessionCloseNtf",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "SkillSlotNtf",
          "packetId": 21947,
          "messageType": "KKSG.SkillSlotNtf",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "SkillTargetNtf",
          "packetId": 5242,
          "messageType": "KKSG.SkillTarget",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "SlotSync",
          "packetId": 2043,
          "messageType": "KKSG.SkillDataUnit",
          "direction": "client_to_server",
          "connection": "game"
        },
        {
          "name": "SquadDebugNtf",
          "packetId": 63730,
          "messageType": "KKSG.SquadDebugData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "StageInfoChangeNtf",
          "packetId": 15587,
          "messageType": "KKSG.StageInfo",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "SvrSkillBeginNtf",
          "packetId": 3313,
          "messageType": "KKSG.SvrSkillBgnData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "SvrSkillEndNtf",
          "packetId": 31632,
          "messageType": "KKSG.SvrSkillEndData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "SwitchRoleNtf",
          "packetId": 8789,
          "messageType": "KKSG.SwitchRoleNtf",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "SyncClientChatMessageNtf",
          "packetId": 17866,
          "messageType": "KKSG.ChannelChatMessage",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "SyncEQuest",
          "packetId": 41766,
          "messageType": "KKSG.SyncEQuestData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "SyncLevelState",
          "packetId": 46930,
          "messageType": "KKSG.SyncLevelStateData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "SyncLoadingStep",
          "packetId": 15972,
          "messageType": "KKSG.SyncLoadingStep",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "SyncMapLoadDataNtf",
          "packetId": 14954,
          "messageType": "KKSG.SyncMapLoadDataNtfData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "SyncMoveAheadTypeNtf",
          "packetId": 50284,
          "messageType": "KKSG.SyncMoveAheadTypeData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "SyncMoveNotify",
          "packetId": 37615,
          "messageType": "KKSG.StepMoveData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "SyncPunishNtf",
          "packetId": 45873,
          "messageType": "KKSG.PunishNtfData",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "SyncSceneTeamLikeNtf",
          "packetId": 63713,
          "messageType": "KKSG.SyncSceneTeamLikeData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "SyncStepNotify",
          "packetId": 46616,
          "messageType": "KKSG.StepSyncInfo",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "SyncTeamBattleInfoNtf",
          "packetId": 9792,
          "messageType": "KKSG.SyncTeamBattleInfoData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "SystemOpenNtf",
          "packetId": 58713,
          "messageType": "KKSG.SystemOpenNtf",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "TaskInfoNtf",
          "packetId": 23527,
          "messageType": "KKSG.TaskData",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "TaskInfoNtfGs",
          "packetId": 16202,
          "messageType": "KKSG.TaskData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "TaskTraceNtf",
          "packetId": 1126,
          "messageType": "KKSG.TaskTraceData",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "TeamChangeSyncClientNtf",
          "packetId": 29359,
          "messageType": "KKSG.TeamChangeSyncClient",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "TimerNtf",
          "packetId": 29797,
          "messageType": "KKSG.TimerNtfData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "TriggerNtf",
          "packetId": 18427,
          "messageType": "KKSG.TriggerNtfData",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "UnitAppearanceNtf",
          "packetId": 62269,
          "messageType": "KKSG.UnitAppearanceNtf",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "UnitBindNtf",
          "packetId": 54225,
          "messageType": "KKSG.UnitBindNtf",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "UnitDisAppearanceNtf",
          "packetId": 31775,
          "messageType": "KKSG.UnitDisAppearanceNtf",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "UnitFeatureTagNtf",
          "packetId": 2306,
          "messageType": "KKSG.UnitFeatureTagNtf",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "UnitStateTagNtf",
          "packetId": 47320,
          "messageType": "KKSG.UnitStateTagNtf",
          "direction": "server_to_client",
          "connection": "game"
        },
        {
          "name": "UpdateExtraNtf",
          "packetId": 33556,
          "messageType": "KKSG.RoleExtraInfo",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "UpdatePlayerSettingNtf",
          "packetId": 18899,
          "messageType": "KKSG.PlayerSetting",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "UpdateProfileNtf",
          "packetId": 7552,
          "messageType": "KKSG.UpdateProfileData",
          "direction": "server_to_client",
          "connection": "gate"
        },
        {
          "name": "UpdateRoleAllInfo",
          "packetId": 2670,
          "messageType": "KKSG.RoleAllInfo",
          "direction": "server_to_client",
          "connection": "gate"
        }
      ],
      "messages": [
        {
          "fullName": "KKSG.AIData",
          "fields": [
            {
              "name": "sightid",
              "jsonName": "sightid",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.AIDebugData",
          "fields": [
            {
              "name": "uid",
              "jsonName": "uid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "type",
              "jsonName": "type",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "pos",
              "jsonName": "pos",
              "number": 3,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.Vec3",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "rot",
              "jsonName": "rot",
              "number": 4,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "shapetype",
              "jsonName": "shapetype",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "shape",
              "jsonName": "shape",
              "number": 6,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.Vec3",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.AWSLatencyData",
          "fields": [
            {
              "name": "region",
              "jsonName": "region",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.AWSRegion",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "latency",
              "jsonName": "latency",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.AWSLatencyList",
          "fields": [
            {
              "name": "datas",
              "jsonName": "datas",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.AWSLatencyData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "roleid",
              "jsonName": "roleid",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.AccountInfo",
          "fields": [
            {
              "name": "account",
              "jsonName": "account",
              "number": 1,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "roleid",
              "jsonName": "roleid",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.AcquireShopArg",
          "fields": [
            {
              "name": "ShopID",
              "jsonName": "ShopID",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.AcquireShopGroupArg",
          "fields": [
            {
              "name": "GroupID",
              "jsonName": "GroupID",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.AcquireShopGroupRes",
          "fields": [
            {
              "name": "Err",
              "jsonName": "Err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Briefs",
              "jsonName": "Briefs",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.ShopBrief",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.AcquireShopRes",
          "fields": [
            {
              "name": "Err",
              "jsonName": "Err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Shop",
              "jsonName": "Shop",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.ShopDetail",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.AdaptiveRecData",
          "fields": [
            {
              "name": "hp_ratio",
              "jsonName": "hpRatio",
              "number": 1,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "attack_ratio",
              "jsonName": "attackRatio",
              "number": 2,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "time_vec",
              "jsonName": "timeVec",
              "number": 3,
              "kind": "float",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "lefthp_vec",
              "jsonName": "lefthpVec",
              "number": 4,
              "kind": "float",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "time_exp_vec",
              "jsonName": "timeExpVec",
              "number": 5,
              "kind": "float",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "lefthp_exp_vec",
              "jsonName": "lefthpExpVec",
              "number": 6,
              "kind": "float",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.AddExpInfo",
          "fields": [
            {
              "name": "partnerid",
              "jsonName": "partnerid",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "exp",
              "jsonName": "exp",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.AddLevelExstringArg",
          "fields": [
            {
              "name": "exstring",
              "jsonName": "exstring",
              "number": 1,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.AddLevelExstringRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.AffixData",
          "fields": [
            {
              "name": "id",
              "jsonName": "id",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "attrid",
              "jsonName": "attrid",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "attrvalue",
              "jsonName": "attrvalue",
              "number": 3,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.AllAttributeChangeNotifyData",
          "fields": [
            {
              "name": "attrlist",
              "jsonName": "attrlist",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.ChangedAttribute",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.AllBuffsChangeData",
          "fields": [
            {
              "name": "datas",
              "jsonName": "datas",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.BuffChangeData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.AllEquipInfo",
          "fields": [
            {
              "name": "equiplist",
              "jsonName": "equiplist",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.AllEquipInfo.EquiplistEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.AllSkillData",
          "fields": [
            {
              "name": "id2skill",
              "jsonName": "id2skill",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.AllSkillData.Id2skillEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            },
            {
              "name": "break_level",
              "jsonName": "breakLevel",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "recommend_id",
              "jsonName": "recommendId",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.AppendData",
          "fields": [
            {
              "name": "partnerid",
              "jsonName": "partnerid",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "status",
              "jsonName": "status",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "inspiration",
              "jsonName": "inspiration",
              "number": 3,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.InspirationData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "equip",
              "jsonName": "equip",
              "number": 4,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.EquipData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ArrayEle",
          "fields": [
            {
              "name": "_float",
              "jsonName": "Float",
              "number": 1,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "_bool",
              "jsonName": "Bool",
              "number": 2,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "_vec3",
              "jsonName": "Vec3",
              "number": 3,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.Vec3",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "_uint",
              "jsonName": "Uint",
              "number": 4,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "_str",
              "jsonName": "Str",
              "number": 5,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "_int",
              "jsonName": "Int",
              "number": 6,
              "kind": "int32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.Attribute",
          "fields": [
            {
              "name": "attrID",
              "jsonName": "attrID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "attrValue",
              "jsonName": "attrValue",
              "number": 2,
              "kind": "double",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BDInfo",
          "fields": [
            {
              "name": "BDID",
              "jsonName": "BDID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "BDLevel",
              "jsonName": "BDLevel",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BDSelectorNtfData",
          "fields": [
            {
              "name": "bds",
              "jsonName": "bds",
              "number": 1,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.BDInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "type",
              "jsonName": "type",
              "number": 2,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.BDSelectorType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "triggerID",
              "jsonName": "triggerID",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BagInfo",
          "fields": [
            {
              "name": "itemlist",
              "jsonName": "itemlist",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.Item",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BagItemidHistory",
          "fields": [
            {
              "name": "itemidlist",
              "jsonName": "itemidlist",
              "number": 1,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "itemcount",
              "jsonName": "itemcount",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.BagItemidHistory.ItemcountEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BatchQueryFriendArg",
          "fields": [
            {
              "name": "isinit",
              "jsonName": "isinit",
              "number": 1,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "isreconnect",
              "jsonName": "isreconnect",
              "number": 2,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "type",
              "jsonName": "type",
              "number": 3,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.FriendRelationType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "isplayer",
              "jsonName": "isplayer",
              "number": 4,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "roleids",
              "jsonName": "roleids",
              "number": 5,
              "kind": "uint64",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "shouldclear",
              "jsonName": "shouldclear",
              "number": 6,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BatchQueryFriendRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "friends",
              "jsonName": "friends",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.FriendData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "rewardednum",
              "jsonName": "rewardednum",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "recentchats",
              "jsonName": "recentchats",
              "number": 4,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.FriendRecentChat",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BatchQueryTeamArg",
          "fields": [
            {
              "name": "type",
              "jsonName": "type",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.BatchQueryTeamType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "sceneid",
              "jsonName": "sceneid",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "teamids",
              "jsonName": "teamids",
              "number": 3,
              "kind": "uint64",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BatchQueryTeamRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "teams",
              "jsonName": "teams",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.TeamInfo",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "assemblies",
              "jsonName": "assemblies",
              "number": 3,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.BatchQueryTeamRes.AssembliesEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BatchTouchShopItemArg",
          "fields": [
            {
              "name": "ShopID",
              "jsonName": "ShopID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "ShopItemIDs",
              "jsonName": "ShopItemIDs",
              "number": 2,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BatchTouchShopItemRes",
          "fields": [
            {
              "name": "ShopItemIDs",
              "jsonName": "ShopItemIDs",
              "number": 1,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BattleCombatExp",
          "fields": [
            {
              "name": "PartnerID",
              "jsonName": "PartnerID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "lastlevel",
              "jsonName": "lastlevel",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "lastexp",
              "jsonName": "lastexp",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "currentlevel",
              "jsonName": "currentlevel",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "currentexp",
              "jsonName": "currentexp",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "partertype",
              "jsonName": "partertype",
              "number": 6,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.CombatRoleType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BattleGroupChangeData",
          "fields": [
            {
              "name": "unit",
              "jsonName": "unit",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "group",
              "jsonName": "group",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BattleOperationArg",
          "fields": [
            {
              "name": "OpID",
              "jsonName": "OpID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BattleOperationRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BattleResultActionNtf",
          "fields": [
            {
              "name": "sceneuid",
              "jsonName": "sceneuid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "combat_roleid",
              "jsonName": "combatRoleid",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "sceneid",
              "jsonName": "sceneid",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BattleResultData",
          "fields": [
            {
              "name": "iswin",
              "jsonName": "iswin",
              "number": 1,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "battletime",
              "jsonName": "battletime",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "rank",
              "jsonName": "rank",
              "number": 3,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.BattleRoleData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "has_next",
              "jsonName": "hasNext",
              "number": 4,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "sceneid",
              "jsonName": "sceneid",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "teamdata",
              "jsonName": "teamdata",
              "number": 6,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.SceneTeamBattleResInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "fail_reason",
              "jsonName": "failReason",
              "number": 7,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.FailReason",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BattleReward",
          "fields": [
            {
              "name": "rewardlist",
              "jsonName": "rewardlist",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.Item",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BattleRoleData",
          "fields": [
            {
              "name": "roleid",
              "jsonName": "roleid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "expchange",
              "jsonName": "expchange",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.BattleRoleExp",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "combatinfo",
              "jsonName": "combatinfo",
              "number": 3,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.BattleCombatExp",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "reward",
              "jsonName": "reward",
              "number": 4,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.BattleReward",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "elitedata",
              "jsonName": "elitedata",
              "number": 5,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.EliteData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "oldelitedata",
              "jsonName": "oldelitedata",
              "number": 6,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.EliteData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "firstpass",
              "jsonName": "firstpass",
              "number": 7,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "skillid",
              "jsonName": "skillid",
              "number": 8,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BattleRoleExp",
          "fields": [
            {
              "name": "lastlevel",
              "jsonName": "lastlevel",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "lastexp",
              "jsonName": "lastexp",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "currentlevel",
              "jsonName": "currentlevel",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "currentexp",
              "jsonName": "currentexp",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "vitemshow",
              "jsonName": "vitemshow",
              "number": 5,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.VItemChangeShow",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BattleStateInfo",
          "fields": [
            {
              "name": "uid",
              "jsonName": "uid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "is_battle_state",
              "jsonName": "isBattleState",
              "number": 2,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "present_id",
              "jsonName": "presentId",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BattleStateNtf",
          "fields": [
            {
              "name": "roleid",
              "jsonName": "roleid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "units",
              "jsonName": "units",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.BattleStateInfo",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BgipData",
          "fields": [
            {
              "name": "Freeze_Currency",
              "jsonName": "FreezeCurrency",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.BgipData.FreezeCurrencyEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            },
            {
              "name": "unfreeze_currency",
              "jsonName": "unfreezeCurrency",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BuffAddData",
          "fields": [
            {
              "name": "id",
              "jsonName": "id",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "level",
              "jsonName": "level",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "stack",
              "jsonName": "stack",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "lefttime",
              "jsonName": "lefttime",
              "number": 4,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "totaltime",
              "jsonName": "totaltime",
              "number": 5,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "addtime",
              "jsonName": "addtime",
              "number": 6,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "flag",
              "jsonName": "flag",
              "number": 7,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "caster",
              "jsonName": "caster",
              "number": 8,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BuffChangeData",
          "fields": [
            {
              "name": "uid",
              "jsonName": "uid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "type",
              "jsonName": "type",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "add",
              "jsonName": "add",
              "number": 3,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.BuffAddData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "remove",
              "jsonName": "remove",
              "number": 4,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.BuffRemoveData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "update",
              "jsonName": "update",
              "number": 5,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.BuffAddData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "instant",
              "jsonName": "instant",
              "number": 6,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.BuffInstantData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "reason",
              "jsonName": "reason",
              "number": 7,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BuffInstantData",
          "fields": [
            {
              "name": "id",
              "jsonName": "id",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "level",
              "jsonName": "level",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "stack",
              "jsonName": "stack",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "flag",
              "jsonName": "flag",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BuffRemoveData",
          "fields": [
            {
              "name": "id",
              "jsonName": "id",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BulletClear",
          "fields": [
            {
              "name": "BulletID",
              "jsonName": "BulletID",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "PosX",
              "jsonName": "PosX",
              "number": 2,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "PosY",
              "jsonName": "PosY",
              "number": 3,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "PosZ",
              "jsonName": "PosZ",
              "number": 4,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Imm",
              "jsonName": "Imm",
              "number": 5,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "EndType",
              "jsonName": "EndType",
              "number": 6,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "TargetID",
              "jsonName": "TargetID",
              "number": 7,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BulletTarget",
          "fields": [
            {
              "name": "BulletID",
              "jsonName": "BulletID",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "TargetID",
              "jsonName": "TargetID",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BuyFatigueArg",
          "fields": [
            {
              "name": "buytype",
              "jsonName": "buytype",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.FatigueBuyType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "items",
              "jsonName": "items",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.ItemBrief",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BuyFatigueRes",
          "fields": [
            {
              "name": "error",
              "jsonName": "error",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.BuyInfo",
          "fields": [
            {
              "name": "fatigue",
              "jsonName": "fatigue",
              "number": 1,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.FatigueBuyInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.CDChangeNtf",
          "fields": [
            {
              "name": "type",
              "jsonName": "type",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "uid",
              "jsonName": "uid",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "skill",
              "jsonName": "skill",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "cd_set",
              "jsonName": "cdSet",
              "number": 4,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "cd_change",
              "jsonName": "cdChange",
              "number": 5,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.CDFixNtf",
          "fields": [
            {
              "name": "uid",
              "jsonName": "uid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "is_fixed",
              "jsonName": "isFixed",
              "number": 2,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.CardPoolGachaInfo",
          "fields": [
            {
              "name": "type",
              "jsonName": "type",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.CardPoolType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "drawCount",
              "jsonName": "drawCount",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "drawDailyCount",
              "jsonName": "drawDailyCount",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "isUpItemGuaranteed",
              "jsonName": "isUpItemGuaranteed",
              "number": 4,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "ssrProgress",
              "jsonName": "ssrProgress",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "srProgress",
              "jsonName": "srProgress",
              "number": 6,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "ssr_gained_count",
              "jsonName": "ssrGainedCount",
              "number": 7,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.CardPoolGachaInfo.SsrGainedCountEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            },
            {
              "name": "lastSSRGained_tempUse",
              "jsonName": "lastSSRGainedTempUse",
              "number": 8,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.PullResult",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.CastUnitedSkillArg",
          "fields": [
            {
              "name": "carriedPlayerID",
              "jsonName": "carriedPlayerID",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.CastUnitedSkillRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ChangeMapData",
          "fields": [
            {
              "name": "mapdata",
              "jsonName": "mapdata",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.MapLoadData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ChangeSceneArg",
          "fields": [
            {
              "name": "is_login",
              "jsonName": "isLogin",
              "number": 1,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "scene_id",
              "jsonName": "sceneId",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "team",
              "jsonName": "team",
              "number": 3,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.TeamData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "map_id",
              "jsonName": "mapId",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "latency",
              "jsonName": "latency",
              "number": 5,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.AWSLatencyList",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "teleportID",
              "jsonName": "teleportID",
              "number": 6,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ChangeSceneRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ChangedAttribute",
          "fields": [
            {
              "name": "UID",
              "jsonName": "UID",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "nowtime",
              "jsonName": "nowtime",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "attrID",
              "jsonName": "attrID",
              "number": 3,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "attrValue",
              "jsonName": "attrValue",
              "number": 4,
              "kind": "double",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "CasterID",
              "jsonName": "CasterID",
              "number": 5,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "param1",
              "jsonName": "param1",
              "number": 6,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "changetype",
              "jsonName": "changetype",
              "number": 7,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.AttrChangeType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "skillid",
              "jsonName": "skillid",
              "number": 8,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "skilltoken",
              "jsonName": "skilltoken",
              "number": 9,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "buffid",
              "jsonName": "buffid",
              "number": 10,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "bufflevel",
              "jsonName": "bufflevel",
              "number": 11,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ChannelChatMessage",
          "fields": [
            {
              "name": "channeltype",
              "jsonName": "channeltype",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ChatChannelType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "channelid",
              "jsonName": "channelid",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "messagelist",
              "jsonName": "messagelist",
              "number": 3,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.ChatMessage",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "remain",
              "jsonName": "remain",
              "number": 4,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "privatechatroles",
              "jsonName": "privatechatroles",
              "number": 5,
              "kind": "uint64",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ChapterData",
          "fields": [
            {
              "name": "chapterid",
              "jsonName": "chapterid",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "progressrewards",
              "jsonName": "progressrewards",
              "number": 2,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "isplayed",
              "jsonName": "isplayed",
              "number": 3,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ChapterInfo",
          "fields": [
            {
              "name": "chapterlist",
              "jsonName": "chapterlist",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.ChapterData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ChapterOperationArg",
          "fields": [
            {
              "name": "op",
              "jsonName": "op",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ChapterOpType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "chapterid",
              "jsonName": "chapterid",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "progressid",
              "jsonName": "progressid",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ChapterOperationRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "itemlist",
              "jsonName": "itemlist",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.ItemBrief",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "progresslist",
              "jsonName": "progresslist",
              "number": 3,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ChapterStarMsg",
          "fields": [
            {
              "name": "type",
              "jsonName": "type",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "value",
              "jsonName": "value",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ChatBannedData",
          "fields": [
            {
              "name": "type",
              "jsonName": "type",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ChatChannelType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "expired_time",
              "jsonName": "expiredTime",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "punish_id",
              "jsonName": "punishId",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ChatMessage",
          "fields": [
            {
              "name": "chatid",
              "jsonName": "chatid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "roleid",
              "jsonName": "roleid",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "content",
              "jsonName": "content",
              "number": 3,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "rolebrief",
              "jsonName": "rolebrief",
              "number": 4,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.RoleBriefInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "assemblyinfo",
              "jsonName": "assemblyinfo",
              "number": 5,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.TeamAssemblyInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "type",
              "jsonName": "type",
              "number": 6,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ChatMessageType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ChatQueryChannelArg",
          "fields": []
        },
        {
          "fullName": "KKSG.ChatQueryChannelRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "channelstatus",
              "jsonName": "channelstatus",
              "number": 2,
              "kind": "bytes",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "bytes"
                ]
              }
            },
            {
              "name": "maxchannelid",
              "jsonName": "maxchannelid",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ChatQueryMessageArg",
          "fields": [
            {
              "name": "channeltype",
              "jsonName": "channeltype",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ChatChannelType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "channelid",
              "jsonName": "channelid",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "startid",
              "jsonName": "startid",
              "number": 3,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "limit",
              "jsonName": "limit",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "forward",
              "jsonName": "forward",
              "number": 5,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ChatQueryMessageRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "channelmessage",
              "jsonName": "channelmessage",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.ChannelChatMessage",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ChatQuickMessage",
          "fields": [
            {
              "name": "channeltype",
              "jsonName": "channeltype",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ChatChannelType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "message",
              "jsonName": "message",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.ChatQuickMessage.MessageEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            },
            {
              "name": "optype",
              "jsonName": "optype",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ChatQuickMessageEntry",
          "fields": [
            {
              "name": "preset",
              "jsonName": "preset",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "customstr",
              "jsonName": "customstr",
              "number": 2,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ChatQuickMessageList",
          "fields": [
            {
              "name": "quickmessagelist",
              "jsonName": "quickmessagelist",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.ChatQuickMessage",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ChatSelectChannelArg",
          "fields": [
            {
              "name": "channelid",
              "jsonName": "channelid",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ChatSelectChannelRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "channelmessage",
              "jsonName": "channelmessage",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.ChannelChatMessage",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ChatSendMessageArg",
          "fields": [
            {
              "name": "channeltype",
              "jsonName": "channeltype",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ChatChannelType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "channelid",
              "jsonName": "channelid",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "content",
              "jsonName": "content",
              "number": 3,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ChatSendMessageRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "chatid",
              "jsonName": "chatid",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.CheckCDArg",
          "fields": [
            {
              "name": "type",
              "jsonName": "type",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.CheckCDType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "target_list",
              "jsonName": "targetList",
              "number": 2,
              "kind": "uint64",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.CheckCDRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "last_time_list",
              "jsonName": "lastTimeList",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.CheckCDRes.LastTimeListEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.CheckMapLoadReadyData",
          "fields": []
        },
        {
          "fullName": "KKSG.CheckTutorialArg",
          "fields": [
            {
              "name": "tutorialExstring",
              "jsonName": "tutorialExstring",
              "number": 1,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "sendExstrings",
              "jsonName": "sendExstrings",
              "number": 2,
              "kind": "string",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.CheckTutorialRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ClientSDKInfo",
          "fields": [
            {
              "name": "deviceToken",
              "jsonName": "deviceToken",
              "number": 1,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "contextProperties",
              "jsonName": "contextProperties",
              "number": 2,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.CombatRoleNtfData",
          "fields": [
            {
              "name": "partner",
              "jsonName": "partner",
              "number": 1,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.UnitAppearanceData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "isAdd",
              "jsonName": "isAdd",
              "number": 2,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "op",
              "jsonName": "op",
              "number": 3,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.CombatRoleGroupOp",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ConcentrateFireNtfData",
          "fields": [
            {
              "name": "bds",
              "jsonName": "bds",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.BDInfo",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.CorrectPositionData",
          "fields": [
            {
              "name": "uid",
              "jsonName": "uid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "pos_x",
              "jsonName": "posX",
              "number": 2,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "pos_y",
              "jsonName": "posY",
              "number": 3,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "pos_z",
              "jsonName": "posZ",
              "number": 4,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "face",
              "jsonName": "face",
              "number": 5,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "bTransfer",
              "jsonName": "bTransfer",
              "number": 6,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.CutsceneData",
          "fields": [
            {
              "name": "roleid",
              "jsonName": "roleid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "jump",
              "jsonName": "jump",
              "number": 2,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.CutsceneState",
          "fields": [
            {
              "name": "on",
              "jsonName": "on",
              "number": 1,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "name",
              "jsonName": "name",
              "number": 2,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "plotID",
              "jsonName": "plotID",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.DamageCasterInfo",
          "fields": [
            {
              "name": "isrole",
              "jsonName": "isrole",
              "number": 1,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "damagetype",
              "jsonName": "damagetype",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "damagesource",
              "jsonName": "damagesource",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.DamageDebugInfo",
          "fields": [
            {
              "name": "attr_list",
              "jsonName": "attrList",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.DamageDebugInfo.AttrListEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            },
            {
              "name": "param_list",
              "jsonName": "paramList",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.DamageDebugInfo.ParamListEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            },
            {
              "name": "skilldmg_vals",
              "jsonName": "skilldmgVals",
              "number": 3,
              "kind": "double",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "skilldmg_ratios",
              "jsonName": "skilldmgRatios",
              "number": 4,
              "kind": "double",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.DamageResult",
          "fields": [
            {
              "name": "Result",
              "jsonName": "Result",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Value",
              "jsonName": "Value",
              "number": 2,
              "kind": "double",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Flag",
              "jsonName": "Flag",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "IsTargetDead",
              "jsonName": "IsTargetDead",
              "number": 4,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "CasterEffectFlag",
              "jsonName": "CasterEffectFlag",
              "number": 5,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "TargetEffectFlag",
              "jsonName": "TargetEffectFlag",
              "number": 6,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "ShieldValue",
              "jsonName": "ShieldValue",
              "number": 7,
              "kind": "double",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.DbFriendGiftData",
          "fields": [
            {
              "name": "time",
              "jsonName": "time",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "isrewarded",
              "jsonName": "isrewarded",
              "number": 2,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "rewardtime",
              "jsonName": "rewardtime",
              "number": 3,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.DbFriendRelationData",
          "fields": [
            {
              "name": "relationtype",
              "jsonName": "relationtype",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.FriendRelationType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "personaldata",
              "jsonName": "personaldata",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.FriendPersonalData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "sharedata",
              "jsonName": "sharedata",
              "number": 3,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.FriendShareData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "extrarelationtypes",
              "jsonName": "extrarelationtypes",
              "number": 4,
              "kind": "enum",
              "cardinality": "repeated",
              "typeName": "KKSG.FriendExtraRelationType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.DbGuildApplyData",
          "fields": [
            {
              "name": "roleid",
              "jsonName": "roleid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "guildid",
              "jsonName": "guildid",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "time",
              "jsonName": "time",
              "number": 3,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.DbGuildBriefData",
          "fields": [
            {
              "name": "guildid",
              "jsonName": "guildid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "level",
              "jsonName": "level",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "leaderid",
              "jsonName": "leaderid",
              "number": 3,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "membernum",
              "jsonName": "membernum",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "settings",
              "jsonName": "settings",
              "number": 5,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.GuildSettingsData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.DbGuildMemberData",
          "fields": [
            {
              "name": "roleid",
              "jsonName": "roleid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "memberrank",
              "jsonName": "memberrank",
              "number": 2,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.GuildMemberRankType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "jointime",
              "jsonName": "jointime",
              "number": 3,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "total_actscore",
              "jsonName": "totalActscore",
              "number": 4,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.DbGuildMemberData.TotalActscoreEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            },
            {
              "name": "week_actscore",
              "jsonName": "weekActscore",
              "number": 5,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.DbGuildMemberData.WeekActscoreEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            },
            {
              "name": "actscore_weekno",
              "jsonName": "actscoreWeekno",
              "number": 6,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.DbRoleGuildBriefData",
          "fields": [
            {
              "name": "guildid",
              "jsonName": "guildid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "lastleavetime",
              "jsonName": "lastleavetime",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.DeathNtf",
          "fields": [
            {
              "name": "uid",
              "jsonName": "uid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "killer",
              "jsonName": "killer",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "killer_skill",
              "jsonName": "killerSkill",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.DestructibleOutLook",
          "fields": [
            {
              "name": "id",
              "jsonName": "id",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "stages",
              "jsonName": "stages",
              "number": 2,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "templateID",
              "jsonName": "templateID",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "rotationWithoutY",
              "jsonName": "rotationWithoutY",
              "number": 4,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.Vec4",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "triggerObject",
              "jsonName": "triggerObject",
              "number": 5,
              "kind": "float",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.DoodadOutlook",
          "fields": [
            {
              "name": "itemID",
              "jsonName": "itemID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "fromGroup",
              "jsonName": "fromGroup",
              "number": 2,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.FightGroupType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "pickerUID",
              "jsonName": "pickerUID",
              "number": 3,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "randomBuffIndex",
              "jsonName": "randomBuffIndex",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "fromUID",
              "jsonName": "fromUID",
              "number": 5,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "showCurve",
              "jsonName": "showCurve",
              "number": 6,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.DoodadPickArg",
          "fields": [
            {
              "name": "uid",
              "jsonName": "uid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.DoodadPickRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.DoodadPickedNtfData",
          "fields": [
            {
              "name": "doodadUid",
              "jsonName": "doodadUid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "pickerUid",
              "jsonName": "pickerUid",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.DoorState",
          "fields": [
            {
              "name": "name",
              "jsonName": "name",
              "number": 1,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "isOn",
              "jsonName": "isOn",
              "number": 2,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "platuid",
              "jsonName": "platuid",
              "number": 3,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "groupID",
              "jsonName": "groupID",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "mapID",
              "jsonName": "mapID",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.DynamicWall",
          "fields": [
            {
              "name": "name",
              "jsonName": "name",
              "number": 1,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "leftdown",
              "jsonName": "leftdown",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.Vec3",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "rightup",
              "jsonName": "rightup",
              "number": 3,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.Vec3",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "height",
              "jsonName": "height",
              "number": 4,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "shape",
              "jsonName": "shape",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "circlePos",
              "jsonName": "circlePos",
              "number": 6,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.Vec3",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "circleRadius",
              "jsonName": "circleRadius",
              "number": 7,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "passFlag",
              "jsonName": "passFlag",
              "number": 8,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.PassFlag",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "fx",
              "jsonName": "fx",
              "number": 9,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.DynamicWallNtfData",
          "fields": [
            {
              "name": "name",
              "jsonName": "name",
              "number": 1,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "enable",
              "jsonName": "enable",
              "number": 2,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "info",
              "jsonName": "info",
              "number": 3,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.DynamicWall",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "id",
              "jsonName": "id",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "shape",
              "jsonName": "shape",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "selfpos",
              "jsonName": "selfpos",
              "number": 6,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.Vec3",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "platuid",
              "jsonName": "platuid",
              "number": 7,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.EQuestNtfData",
          "fields": [
            {
              "name": "taskID",
              "jsonName": "taskID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "op",
              "jsonName": "op",
              "number": 2,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.EQuestOpType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "groupID",
              "jsonName": "groupID",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.EliteData",
          "fields": [
            {
              "name": "stars",
              "jsonName": "stars",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.EnemyChangeStageData",
          "fields": [
            {
              "name": "uid",
              "jsonName": "uid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "stage",
              "jsonName": "stage",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.EnemyOutLook",
          "fields": [
            {
              "name": "doodadOutLook",
              "jsonName": "doodadOutLook",
              "number": 1,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.DoodadOutlook",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "destructibleOutLook",
              "jsonName": "destructibleOutLook",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.DestructibleOutLook",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.EnterGameSessionNotify",
          "fields": [
            {
              "name": "game_session_id",
              "jsonName": "gameSessionId",
              "number": 1,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "player_session_id",
              "jsonName": "playerSessionId",
              "number": 2,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "game_session_token",
              "jsonName": "gameSessionToken",
              "number": 3,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "ip",
              "jsonName": "ip",
              "number": 4,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "port",
              "jsonName": "port",
              "number": 5,
              "kind": "int32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "gs_key",
              "jsonName": "gsKey",
              "number": 6,
              "kind": "bytes",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "bytes"
                ]
              }
            },
            {
              "name": "convid",
              "jsonName": "convid",
              "number": 7,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.EnttSyncTest",
          "fields": [
            {
              "name": "id",
              "jsonName": "id",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "x",
              "jsonName": "x",
              "number": 2,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "y",
              "jsonName": "y",
              "number": 3,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "z",
              "jsonName": "z",
              "number": 4,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "face",
              "jsonName": "face",
              "number": 5,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "r",
              "jsonName": "r",
              "number": 6,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.EnvQueryPositionDebugData",
          "fields": [
            {
              "name": "pos",
              "jsonName": "pos",
              "number": 1,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.Vec3",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "score",
              "jsonName": "score",
              "number": 2,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "distSelf",
              "jsonName": "distSelf",
              "number": 3,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "scoreSelf",
              "jsonName": "scoreSelf",
              "number": 4,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "distTarget",
              "jsonName": "distTarget",
              "number": 5,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "scoreTarget",
              "jsonName": "scoreTarget",
              "number": 6,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.EnvQueryPositionDebugNtf",
          "fields": [
            {
              "name": "self",
              "jsonName": "self",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "target",
              "jsonName": "target",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "positions",
              "jsonName": "positions",
              "number": 3,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.EnvQueryPositionDebugData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "resultIdx",
              "jsonName": "resultIdx",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.EquipData",
          "fields": [
            {
              "name": "level",
              "jsonName": "level",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "exp",
              "jsonName": "exp",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "mainaffix",
              "jsonName": "mainaffix",
              "number": 3,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.AffixData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "subaffix",
              "jsonName": "subaffix",
              "number": 4,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.AffixData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.EquipOperationArg",
          "fields": [
            {
              "name": "opt",
              "jsonName": "opt",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.EquipOptType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "partnerid",
              "jsonName": "partnerid",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "equipuid",
              "jsonName": "equipuid",
              "number": 3,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "slot",
              "jsonName": "slot",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "swallowitems",
              "jsonName": "swallowitems",
              "number": 5,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.EquipOperationArg.SwallowitemsEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.EquipOperationRes",
          "fields": [
            {
              "name": "error",
              "jsonName": "error",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "equipitem",
              "jsonName": "equipitem",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.Item",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "returnitems",
              "jsonName": "returnitems",
              "number": 3,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.ItemBrief",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ErrorInfo",
          "fields": [
            {
              "name": "errorno",
              "jsonName": "errorno",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "param64",
              "jsonName": "param64",
              "number": 2,
              "kind": "uint64",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "paramstr",
              "jsonName": "paramstr",
              "number": 3,
              "kind": "string",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ExploreInfo",
          "fields": [
            {
              "name": "finished_root_quest_ids",
              "jsonName": "finishedRootQuestIds",
              "number": 1,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.FaceInfo",
          "fields": [
            {
              "name": "face",
              "jsonName": "face",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "pitch",
              "jsonName": "pitch",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.FatigueBuyInfo",
          "fields": [
            {
              "name": "MoneyBuyCount",
              "jsonName": "MoneyBuyCount",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "LastMoneyBuyTime",
              "jsonName": "LastMoneyBuyTime",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.FatigueRecoverNotifyData",
          "fields": [
            {
              "name": "nextRecoverTime",
              "jsonName": "nextRecoverTime",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.FetchServerListArg",
          "fields": [
            {
              "name": "type",
              "jsonName": "type",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.LoginType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "password_data",
              "jsonName": "passwordData",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.LoginPasswordData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.FetchServerListRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "server_list",
              "jsonName": "serverList",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.ServerListInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "password_token",
              "jsonName": "passwordToken",
              "number": 3,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "helpshift_token",
              "jsonName": "helpshiftToken",
              "number": 4,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "regions",
              "jsonName": "regions",
              "number": 5,
              "kind": "enum",
              "cardinality": "repeated",
              "typeName": "KKSG.AWSRegion",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.FetchServerTimeArg",
          "fields": []
        },
        {
          "fullName": "KKSG.FetchServerTimeRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "time",
              "jsonName": "time",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "time_zone",
              "jsonName": "timeZone",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.FightGroupChangeNtf",
          "fields": [
            {
              "name": "uid",
              "jsonName": "uid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "fightgroup",
              "jsonName": "fightgroup",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.FormationInfo",
          "fields": [
            {
              "name": "data",
              "jsonName": "data",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.TeamData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "currentTeam",
              "jsonName": "currentTeam",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.FriendChangeSyncClientData",
          "fields": [
            {
              "name": "type",
              "jsonName": "type",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.FriendSyncType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "frienddata",
              "jsonName": "frienddata",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.FriendData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.FriendData",
          "fields": [
            {
              "name": "roleid",
              "jsonName": "roleid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "rolebrief",
              "jsonName": "rolebrief",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.RoleBriefInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "relation",
              "jsonName": "relation",
              "number": 3,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.DbFriendRelationData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "giftgiven",
              "jsonName": "giftgiven",
              "number": 4,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.DbFriendGiftData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "giftrecved",
              "jsonName": "giftrecved",
              "number": 5,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.DbFriendGiftData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "onlinedata",
              "jsonName": "onlinedata",
              "number": 6,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.RoleSummaryDataOnline",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "roleprofile",
              "jsonName": "roleprofile",
              "number": 7,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.ProfileData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.FriendPersonalData",
          "fields": [
            {
              "name": "alias",
              "jsonName": "alias",
              "number": 1,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "time",
              "jsonName": "time",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.FriendRecentChat",
          "fields": [
            {
              "name": "roleid",
              "jsonName": "roleid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "lastchattime",
              "jsonName": "lastchattime",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "lastreadtime",
              "jsonName": "lastreadtime",
              "number": 3,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "lastchatmsg",
              "jsonName": "lastchatmsg",
              "number": 4,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.ChatMessage",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "frienddata",
              "jsonName": "frienddata",
              "number": 5,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.FriendData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.FriendShareData",
          "fields": [
            {
              "name": "friendship",
              "jsonName": "friendship",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "time",
              "jsonName": "time",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "friendshipmap",
              "jsonName": "friendshipmap",
              "number": 3,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.FriendShareData.FriendshipmapEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.GMCommandArg",
          "fields": [
            {
              "name": "cmd",
              "jsonName": "cmd",
              "number": 1,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "args",
              "jsonName": "args",
              "number": 2,
              "kind": "string",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.GMCommandRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "msg",
              "jsonName": "msg",
              "number": 2,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.GMGetAttrsNtfData",
          "fields": [
            {
              "name": "uid",
              "jsonName": "uid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "attrlist",
              "jsonName": "attrlist",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.GMGetAttrsNtfData.AttrlistEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.GachaEntry",
          "fields": [
            {
              "name": "CardPoolID",
              "jsonName": "CardPoolID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "time",
              "jsonName": "time",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "result",
              "jsonName": "result",
              "number": 3,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.PullResult",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.GachaInfo",
          "fields": [
            {
              "name": "cardPoolInfos",
              "jsonName": "cardPoolInfos",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.CardPoolGachaInfo",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.GachaOperationArg",
          "fields": [
            {
              "name": "cardPoolID",
              "jsonName": "cardPoolID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "type",
              "jsonName": "type",
              "number": 2,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.GachaType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.GachaOperationRes",
          "fields": [
            {
              "name": "results",
              "jsonName": "results",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.PullResult",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "err",
              "jsonName": "err",
              "number": 2,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.GetFriendTeamInviteListArg",
          "fields": [
            {
              "name": "teamid",
              "jsonName": "teamid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.GetFriendTeamInviteListRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "friends",
              "jsonName": "friends",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.FriendData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.GetProfileArg",
          "fields": [
            {
              "name": "roleid",
              "jsonName": "roleid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.GetProfileRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "brief",
              "jsonName": "brief",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.RoleBriefInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "profile",
              "jsonName": "profile",
              "number": 3,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.ProfileData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.GetVivoxTokenArg",
          "fields": [
            {
              "name": "channel_type",
              "jsonName": "channelType",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.VoiceChannelType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "action",
              "jsonName": "action",
              "number": 2,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.VivoxAction",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "target_roleid",
              "jsonName": "targetRoleid",
              "number": 3,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "expire_time",
              "jsonName": "expireTime",
              "number": 4,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.GetVivoxTokenRes",
          "fields": [
            {
              "name": "error",
              "jsonName": "error",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "token",
              "jsonName": "token",
              "number": 2,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "from_username",
              "jsonName": "fromUsername",
              "number": 3,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "target_username",
              "jsonName": "targetUsername",
              "number": 4,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "channelname",
              "jsonName": "channelname",
              "number": 5,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "from_user_uri",
              "jsonName": "fromUserUri",
              "number": 6,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "target_user_uri",
              "jsonName": "targetUserUri",
              "number": 7,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "channel_uri",
              "jsonName": "channelUri",
              "number": 8,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "action",
              "jsonName": "action",
              "number": 9,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.GroupInfo",
          "fields": [
            {
              "name": "groupID",
              "jsonName": "groupID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "loadable",
              "jsonName": "loadable",
              "number": 2,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.GuildChangeSyncClientData",
          "fields": [
            {
              "name": "type",
              "jsonName": "type",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.GuildSyncType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "guilddata",
              "jsonName": "guilddata",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.GuildData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.GuildCheckInArg",
          "fields": []
        },
        {
          "fullName": "KKSG.GuildCheckInRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "result",
              "jsonName": "result",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.RoleGuildCheckInResult",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.GuildData",
          "fields": [
            {
              "name": "guildbrief",
              "jsonName": "guildbrief",
              "number": 1,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.DbGuildBriefData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "guildmembers",
              "jsonName": "guildmembers",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.GuildData.GuildmembersEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            },
            {
              "name": "guildapplys",
              "jsonName": "guildapplys",
              "number": 3,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.GuildData.GuildapplysEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            },
            {
              "name": "roleid2extra",
              "jsonName": "roleid2extra",
              "number": 4,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.GuildData.Roleid2extraEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.GuildRoleExtraData",
          "fields": [
            {
              "name": "brief",
              "jsonName": "brief",
              "number": 1,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.RoleBriefInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.GuildSettingsData",
          "fields": [
            {
              "name": "guildname",
              "jsonName": "guildname",
              "number": 1,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "isneedapproval",
              "jsonName": "isneedapproval",
              "number": 2,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.HintNotifyData",
          "fields": [
            {
              "name": "hintUids",
              "jsonName": "hintUids",
              "number": 1,
              "kind": "uint64",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "hintDatas",
              "jsonName": "hintDatas",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.SysHintData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.HintOpData",
          "fields": [
            {
              "name": "hintUids",
              "jsonName": "hintUids",
              "number": 1,
              "kind": "uint64",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "hintOps",
              "jsonName": "hintOps",
              "number": 2,
              "kind": "enum",
              "cardinality": "repeated",
              "typeName": "KKSG.SystemHintOpCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.HobbyTimeChangeNtfData",
          "fields": [
            {
              "name": "Day",
              "jsonName": "Day",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Stage",
              "jsonName": "Stage",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "RestTime",
              "jsonName": "RestTime",
              "number": 3,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.IdempotencyEntry",
          "fields": [
            {
              "name": "key",
              "jsonName": "key",
              "number": 1,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "ttl",
              "jsonName": "ttl",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.InspirationData",
          "fields": [
            {
              "name": "level",
              "jsonName": "level",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "exp",
              "jsonName": "exp",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "surmount",
              "jsonName": "surmount",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "refine",
              "jsonName": "refine",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "id",
              "jsonName": "id",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.InspireOperationArg",
          "fields": [
            {
              "name": "opt",
              "jsonName": "opt",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.InspireOpt",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "inspireguid",
              "jsonName": "inspireguid",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "partnerid",
              "jsonName": "partnerid",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "consumeitems",
              "jsonName": "consumeitems",
              "number": 4,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.InspireOperationArg.ConsumeitemsEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.InspireOperationRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "inspire",
              "jsonName": "inspire",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.Item",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "returnitems",
              "jsonName": "returnitems",
              "number": 3,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.ItemBrief",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.Item",
          "fields": [
            {
              "name": "guid",
              "jsonName": "guid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "id",
              "jsonName": "id",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "count",
              "jsonName": "count",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "flag",
              "jsonName": "flag",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "appenddata",
              "jsonName": "appenddata",
              "number": 5,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.AppendData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "obtaintime",
              "jsonName": "obtaintime",
              "number": 6,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ItemBrief",
          "fields": [
            {
              "name": "itemid",
              "jsonName": "itemid",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "itemcount",
              "jsonName": "itemcount",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "groupid",
              "jsonName": "groupid",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ItemChangeData",
          "fields": [
            {
              "name": "NewItems",
              "jsonName": "NewItems",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.Item",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "ChangeItems",
              "jsonName": "ChangeItems",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.Item",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "RemoveItems",
              "jsonName": "RemoveItems",
              "number": 3,
              "kind": "uint64",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "VItemIDList",
              "jsonName": "VItemIDList",
              "number": 4,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "VItemCountList",
              "jsonName": "VItemCountList",
              "number": 5,
              "kind": "uint64",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ItemChangeNtfData",
          "fields": [
            {
              "name": "BagChange",
              "jsonName": "BagChange",
              "number": 1,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.ItemChangeData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ItemOptArg",
          "fields": [
            {
              "name": "opt_type",
              "jsonName": "optType",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ItemOptType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "item_uid",
              "jsonName": "itemUid",
              "number": 2,
              "kind": "uint64",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ItemOptRes",
          "fields": [
            {
              "name": "error",
              "jsonName": "error",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.JumpCutsceneArg",
          "fields": [
            {
              "name": "isJump",
              "jsonName": "isJump",
              "number": 1,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.JumpCutsceneRes",
          "fields": [
            {
              "name": "cutsceneState",
              "jsonName": "cutsceneState",
              "number": 1,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "csName",
              "jsonName": "csName",
              "number": 2,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "err",
              "jsonName": "err",
              "number": 3,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "plotID",
              "jsonName": "plotID",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LangDictData",
          "fields": [
            {
              "name": "dict",
              "jsonName": "dict",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.LangDictData.DictEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LevelNotice",
          "fields": [
            {
              "name": "scriptName",
              "jsonName": "scriptName",
              "number": 1,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "data",
              "jsonName": "data",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.PinData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "index",
              "jsonName": "index",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "bind_plat",
              "jsonName": "bindPlat",
              "number": 4,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "groupid",
              "jsonName": "groupid",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "mapid",
              "jsonName": "mapid",
              "number": 6,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "debug_graphid",
              "jsonName": "debugGraphid",
              "number": 7,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "debug_nodeid",
              "jsonName": "debugNodeid",
              "number": 8,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LevelSaveInfo",
          "fields": [
            {
              "name": "triggerObjectInfos",
              "jsonName": "triggerObjectInfos",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.LevelSaveInfo.TriggerObjectInfosEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            },
            {
              "name": "explore",
              "jsonName": "explore",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.ExploreInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "unlocked_teleport",
              "jsonName": "unlockedTeleport",
              "number": 3,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "destructible_info",
              "jsonName": "destructibleInfo",
              "number": 4,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.RoleDestructibleInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LevelScriptNoticeData",
          "fields": [
            {
              "name": "notices",
              "jsonName": "notices",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.LevelNotice",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LevelStateData",
          "fields": [
            {
              "name": "notices",
              "jsonName": "notices",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.LevelNotice",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "doorstates",
              "jsonName": "doorstates",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.DoorState",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "tasks",
              "jsonName": "tasks",
              "number": 3,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.TaskData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "cutscene",
              "jsonName": "cutscene",
              "number": 4,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.CutsceneState",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "loadData",
              "jsonName": "loadData",
              "number": 5,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.MapLoadData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "leveltimeleft",
              "jsonName": "leveltimeleft",
              "number": 6,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "battleStopReasons",
              "jsonName": "battleStopReasons",
              "number": 7,
              "kind": "enum",
              "cardinality": "repeated",
              "typeName": "KKSG.BattleStopReason",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "BattleViewBitState",
              "jsonName": "BattleViewBitState",
              "number": 8,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "changedTriggers",
              "jsonName": "changedTriggers",
              "number": 9,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.LevelSaveInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "uncheckedTutorialExstring",
              "jsonName": "uncheckedTutorialExstring",
              "number": 10,
              "kind": "string",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "groupids",
              "jsonName": "groupids",
              "number": 11,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LevelTriggerArg",
          "fields": [
            {
              "name": "id",
              "jsonName": "id",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "eventID",
              "jsonName": "eventID",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LevelTriggerNtfData",
          "fields": [
            {
              "name": "roleID",
              "jsonName": "roleID",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "triggerID",
              "jsonName": "triggerID",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "eventID",
              "jsonName": "eventID",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LevelTriggerRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LikePlayerArg",
          "fields": [
            {
              "name": "roleid",
              "jsonName": "roleid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LikePlayerRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "like_num",
              "jsonName": "likeNum",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LikeSceneTeamMemberArg",
          "fields": [
            {
              "name": "roleid",
              "jsonName": "roleid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LikeSceneTeamMemberRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LoadGroupNtfData",
          "fields": [
            {
              "name": "groupID",
              "jsonName": "groupID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "is_load",
              "jsonName": "isLoad",
              "number": 2,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LoadableGroupNtfData",
          "fields": [
            {
              "name": "infos",
              "jsonName": "infos",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.GroupInfo",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "isInit",
              "jsonName": "isInit",
              "number": 2,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LoadedNextSceneArg",
          "fields": []
        },
        {
          "fullName": "KKSG.LoadedNextSceneRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "data",
              "jsonName": "data",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.LoadedSceneData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LoadedSceneArg",
          "fields": [
            {
              "name": "roleid",
              "jsonName": "roleid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "scene_uid",
              "jsonName": "sceneUid",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LoadedSceneData",
          "fields": [
            {
              "name": "partners",
              "jsonName": "partners",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.UnitAppearanceData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "sceneid",
              "jsonName": "sceneid",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "mapid",
              "jsonName": "mapid",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "battling_roleid",
              "jsonName": "battlingRoleid",
              "number": 4,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LoadedSceneRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "partners",
              "jsonName": "partners",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.UnitAppearanceData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "reconnect_scene_data",
              "jsonName": "reconnectSceneData",
              "number": 3,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.ReconnectSceneData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "state",
              "jsonName": "state",
              "number": 4,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.SceneState",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "battle_uid",
              "jsonName": "battleUid",
              "number": 5,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LoadingSceneNtf",
          "fields": [
            {
              "name": "sceneid",
              "jsonName": "sceneid",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "sceneuid",
              "jsonName": "sceneuid",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "mapid",
              "jsonName": "mapid",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "timeline",
              "jsonName": "timeline",
              "number": 4,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.LoadingSceneStartTimeline",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "partnerids",
              "jsonName": "partnerids",
              "number": 5,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "steps",
              "jsonName": "steps",
              "number": 6,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.LoadingSceneStepData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "time_delay",
              "jsonName": "timeDelay",
              "number": 7,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LoadingSceneStartTimeline",
          "fields": [
            {
              "name": "name",
              "jsonName": "name",
              "number": 1,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "plotID",
              "jsonName": "plotID",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LoadingSceneStepData",
          "fields": [
            {
              "name": "roleid",
              "jsonName": "roleid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "step",
              "jsonName": "step",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "partnerid",
              "jsonName": "partnerid",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "is_robot",
              "jsonName": "isRobot",
              "number": 4,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "partner_level",
              "jsonName": "partnerLevel",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "pos_index",
              "jsonName": "posIndex",
              "number": 6,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LoadingSceneStepNtf",
          "fields": [
            {
              "name": "roles",
              "jsonName": "roles",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.LoadingSceneStepData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LoadingSceneStepReport",
          "fields": [
            {
              "name": "sceneuid",
              "jsonName": "sceneuid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "step",
              "jsonName": "step",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LoginChallenge",
          "fields": [
            {
              "name": "challenge",
              "jsonName": "challenge",
              "number": 1,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LoginGameSessionArg",
          "fields": [
            {
              "name": "game_session_id",
              "jsonName": "gameSessionId",
              "number": 1,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "player_session_id",
              "jsonName": "playerSessionId",
              "number": 2,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "game_session_token",
              "jsonName": "gameSessionToken",
              "number": 3,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "use_kcp",
              "jsonName": "useKcp",
              "number": 4,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LoginGameSessionRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "gs_reconnect_token",
              "jsonName": "gsReconnectToken",
              "number": 2,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LoginPasswordData",
          "fields": [
            {
              "name": "account",
              "jsonName": "account",
              "number": 1,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "password",
              "jsonName": "password",
              "number": 2,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LoginReconnectArg",
          "fields": [
            {
              "name": "is_login_reconnect",
              "jsonName": "isLoginReconnect",
              "number": 1,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LoginReconnectData",
          "fields": [
            {
              "name": "mapid",
              "jsonName": "mapid",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "sceneid",
              "jsonName": "sceneid",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "sceneuid",
              "jsonName": "sceneuid",
              "number": 3,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LoginReconnectRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "role_data",
              "jsonName": "roleData",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.RoleAllInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "game_session",
              "jsonName": "gameSession",
              "number": 3,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.EnterGameSessionNotify",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LoginReqArg",
          "fields": [
            {
              "name": "account",
              "jsonName": "account",
              "number": 1,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "token",
              "jsonName": "token",
              "number": 2,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "serverid",
              "jsonName": "serverid",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "sdkinfo",
              "jsonName": "sdkinfo",
              "number": 4,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.ClientSDKInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "os",
              "jsonName": "os",
              "number": 5,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ClientOS",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "version",
              "jsonName": "version",
              "number": 6,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "timezone",
              "jsonName": "timezone",
              "number": 7,
              "kind": "int32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LoginReqRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "info",
              "jsonName": "info",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.AccountInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "login_reconnect_data",
              "jsonName": "loginReconnectData",
              "number": 3,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.LoginReconnectData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "server_time",
              "jsonName": "serverTime",
              "number": 4,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "ping_type",
              "jsonName": "pingType",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "punish",
              "jsonName": "punish",
              "number": 6,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.PunishNtfData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LogoutGameSessionArg",
          "fields": []
        },
        {
          "fullName": "KKSG.LogoutGameSessionRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.LogoutReqArg",
          "fields": []
        },
        {
          "fullName": "KKSG.LogoutReqRes",
          "fields": []
        },
        {
          "fullName": "KKSG.Mail",
          "fields": [
            {
              "name": "uid",
              "jsonName": "uid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "id",
              "jsonName": "id",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "serial",
              "jsonName": "serial",
              "number": 3,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "read",
              "jsonName": "read",
              "number": 4,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "accept",
              "jsonName": "accept",
              "number": 5,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "item_info",
              "jsonName": "itemInfo",
              "number": 6,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.MailItemInfo",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "title",
              "jsonName": "title",
              "number": 7,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "sender",
              "jsonName": "sender",
              "number": 8,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "desc",
              "jsonName": "desc",
              "number": 9,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "create_time",
              "jsonName": "createTime",
              "number": 10,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "end_time",
              "jsonName": "endTime",
              "number": 11,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "send_begin_time",
              "jsonName": "sendBeginTime",
              "number": 12,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "send_end_time",
              "jsonName": "sendEndTime",
              "number": 13,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "keep_time",
              "jsonName": "keepTime",
              "number": 14,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "del_now",
              "jsonName": "delNow",
              "number": 15,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "star",
              "jsonName": "star",
              "number": 16,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.MailHintArg",
          "fields": []
        },
        {
          "fullName": "KKSG.MailHintRes",
          "fields": [
            {
              "name": "hint",
              "jsonName": "hint",
              "number": 1,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "err",
              "jsonName": "err",
              "number": 2,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.MailItemInfo",
          "fields": [
            {
              "name": "item_id",
              "jsonName": "itemId",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "count",
              "jsonName": "count",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "generated",
              "jsonName": "generated",
              "number": 3,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.MailOpArg",
          "fields": [
            {
              "name": "op",
              "jsonName": "op",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.MailOp",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "mail_uid",
              "jsonName": "mailUid",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "limit",
              "jsonName": "limit",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.MailOpRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "mail_list",
              "jsonName": "mailList",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.Mail",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "succ_uids",
              "jsonName": "succUids",
              "number": 3,
              "kind": "uint64",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.MapLoadData",
          "fields": [
            {
              "name": "mapID",
              "jsonName": "mapID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "show",
              "jsonName": "show",
              "number": 2,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "sceneID",
              "jsonName": "sceneID",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.MarqueeNofityData",
          "fields": [
            {
              "name": "tasks",
              "jsonName": "tasks",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.MarqueeTask",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "delete_ids",
              "jsonName": "deleteIds",
              "number": 2,
              "kind": "uint64",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.MarqueeTask",
          "fields": [
            {
              "name": "msg_id",
              "jsonName": "msgId",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "interval",
              "jsonName": "interval",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "display_count",
              "jsonName": "displayCount",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "lang_dict",
              "jsonName": "langDict",
              "number": 4,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.LangDictData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "update_at",
              "jsonName": "updateAt",
              "number": 5,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.MoneyExchangeArg",
          "fields": [
            {
              "name": "from",
              "jsonName": "from",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "to",
              "jsonName": "to",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "exchange_count",
              "jsonName": "exchangeCount",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.MoneyExchangeRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.MoveInfo",
          "fields": [
            {
              "name": "Common",
              "jsonName": "Common",
              "number": 1,
              "kind": "int32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "posx",
              "jsonName": "posx",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "posy",
              "jsonName": "posy",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "posz",
              "jsonName": "posz",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "desx",
              "jsonName": "desx",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "desy",
              "jsonName": "desy",
              "number": 6,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "desz",
              "jsonName": "desz",
              "number": 7,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "hash",
              "jsonName": "hash",
              "number": 8,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "direction",
              "jsonName": "direction",
              "number": 9,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "loc_posx",
              "jsonName": "locPosx",
              "number": 10,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "loc_posy",
              "jsonName": "locPosy",
              "number": 11,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "loc_posz",
              "jsonName": "locPosz",
              "number": 12,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "loc_desx",
              "jsonName": "locDesx",
              "number": 13,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "loc_desy",
              "jsonName": "locDesy",
              "number": 14,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "loc_desz",
              "jsonName": "locDesz",
              "number": 15,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "joyx",
              "jsonName": "joyx",
              "number": 16,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "joyy",
              "jsonName": "joyy",
              "number": 17,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "joyz",
              "jsonName": "joyz",
              "number": 18,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ObtainItemData",
          "fields": [
            {
              "name": "roleid",
              "jsonName": "roleid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "itemlist",
              "jsonName": "itemlist",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.Item",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "show_type",
              "jsonName": "showType",
              "number": 3,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.UIShowType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.OpFriendArg",
          "fields": [
            {
              "name": "type",
              "jsonName": "type",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.OpFriendType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "roleids",
              "jsonName": "roleids",
              "number": 2,
              "kind": "uint64",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "extraroleids",
              "jsonName": "extraroleids",
              "number": 3,
              "kind": "uint64",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "chatmessage",
              "jsonName": "chatmessage",
              "number": 4,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.ChatSendMessageArg",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.OpFriendRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "id2err",
              "jsonName": "id2err",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.OpFriendRes.Id2errEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            },
            {
              "name": "id2frienddata",
              "jsonName": "id2frienddata",
              "number": 3,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.OpFriendRes.Id2frienddataEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            },
            {
              "name": "extraerr",
              "jsonName": "extraerr",
              "number": 4,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "extraid2err",
              "jsonName": "extraid2err",
              "number": 5,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.OpFriendRes.Extraid2errEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.OpGuildArg",
          "fields": [
            {
              "name": "type",
              "jsonName": "type",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.OpGuildType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "guildid",
              "jsonName": "guildid",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "roleids",
              "jsonName": "roleids",
              "number": 3,
              "kind": "uint64",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "settings",
              "jsonName": "settings",
              "number": 4,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.GuildSettingsData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.OpGuildRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "id2err",
              "jsonName": "id2err",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.OpGuildRes.Id2errEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.OpTeamArg",
          "fields": [
            {
              "name": "type",
              "jsonName": "type",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.OpTeamType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "teamid",
              "jsonName": "teamid",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "sceneid",
              "jsonName": "sceneid",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "targetroleid",
              "jsonName": "targetroleid",
              "number": 4,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "condition",
              "jsonName": "condition",
              "number": 5,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.TeamJoinCondition",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "isonlyinvite",
              "jsonName": "isonlyinvite",
              "number": 6,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "partnerid",
              "jsonName": "partnerid",
              "number": 7,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "robotnum",
              "jsonName": "robotnum",
              "number": 8,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "chatmessage",
              "jsonName": "chatmessage",
              "number": 9,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.ChatSendMessageArg",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "debugstr",
              "jsonName": "debugstr",
              "number": 10,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "source",
              "jsonName": "source",
              "number": 11,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.OpTeamSourceType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "isfriend",
              "jsonName": "isfriend",
              "number": 12,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "matchsource",
              "jsonName": "matchsource",
              "number": 13,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.TeamMatchSourceType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.OpTeamRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "teamid",
              "jsonName": "teamid",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "time",
              "jsonName": "time",
              "number": 3,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "sceneid",
              "jsonName": "sceneid",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.OwnPartnerInfo",
          "fields": [
            {
              "name": "partners",
              "jsonName": "partners",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.OwnPartnerInfo.PartnersEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.PartnerData",
          "fields": [
            {
              "name": "partner_id",
              "jsonName": "partnerId",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "level",
              "jsonName": "level",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "star",
              "jsonName": "star",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "exp",
              "jsonName": "exp",
              "number": 4,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "flag",
              "jsonName": "flag",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "roletype",
              "jsonName": "roletype",
              "number": 6,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.CombatRoleType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "inspireuid",
              "jsonName": "inspireuid",
              "number": 7,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "skills",
              "jsonName": "skills",
              "number": 8,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.AllSkillData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "partnerpoint",
              "jsonName": "partnerpoint",
              "number": 9,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "equipinfo",
              "jsonName": "equipinfo",
              "number": 10,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.AllEquipInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.PartnerOperationArg",
          "fields": [
            {
              "name": "opt",
              "jsonName": "opt",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.PartnerOperationType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "partnerid",
              "jsonName": "partnerid",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "consumeitems",
              "jsonName": "consumeitems",
              "number": 3,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.PartnerOperationArg.ConsumeitemsEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            },
            {
              "name": "flag",
              "jsonName": "flag",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.PartnerOperationRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "partnerdata",
              "jsonName": "partnerdata",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.PartnerData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "returnitems",
              "jsonName": "returnitems",
              "number": 3,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.ItemBrief",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.PartnerTeamOperationArg",
          "fields": [
            {
              "name": "opt",
              "jsonName": "opt",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.PartnerTeamOPType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "teamid",
              "jsonName": "teamid",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "teamMember",
              "jsonName": "teamMember",
              "number": 3,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "newname",
              "jsonName": "newname",
              "number": 4,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "switch_teamid",
              "jsonName": "switchTeamid",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.PartnerTeamOperationRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.PassFlag",
          "fields": [
            {
              "name": "walltype",
              "jsonName": "walltype",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Forward",
              "jsonName": "Forward",
              "number": 2,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Backward",
              "jsonName": "Backward",
              "number": 3,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.PinArray",
          "fields": [
            {
              "name": "type",
              "jsonName": "type",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.PinType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "ele",
              "jsonName": "ele",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.ArrayEle",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.PinData",
          "fields": [
            {
              "name": "pinName",
              "jsonName": "pinName",
              "number": 1,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "type",
              "jsonName": "type",
              "number": 2,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.PinType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "_float",
              "jsonName": "Float",
              "number": 3,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "_bool",
              "jsonName": "Bool",
              "number": 4,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "_vec3",
              "jsonName": "Vec3",
              "number": 5,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.Vec3",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "_uint",
              "jsonName": "Uint",
              "number": 6,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "_str",
              "jsonName": "Str",
              "number": 7,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "_int",
              "jsonName": "Int",
              "number": 8,
              "kind": "int32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "_array",
              "jsonName": "Array",
              "number": 9,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.PinArray",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.PlatColliderSwitchNtf",
          "fields": [
            {
              "name": "uid",
              "jsonName": "uid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "disabled",
              "jsonName": "disabled",
              "number": 2,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.PlayerSetting",
          "fields": [
            {
              "name": "setting_map",
              "jsonName": "settingMap",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.PlayerSetting.SettingMapEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.PosData",
          "fields": [
            {
              "name": "x",
              "jsonName": "x",
              "number": 1,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "y",
              "jsonName": "y",
              "number": 2,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "z",
              "jsonName": "z",
              "number": 3,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "dir",
              "jsonName": "dir",
              "number": 4,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.PosDataUInt",
          "fields": [
            {
              "name": "x",
              "jsonName": "x",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "y",
              "jsonName": "y",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "z",
              "jsonName": "z",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "face",
              "jsonName": "face",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.PrepareSecurityConnArg",
          "fields": [
            {
              "name": "cRandomStr",
              "jsonName": "cRandomStr",
              "number": 1,
              "kind": "bytes",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "bytes"
                ]
              }
            },
            {
              "name": "type",
              "jsonName": "type",
              "number": 2,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.InitSecureConnType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.PrepareSecurityConnRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "isswitchon",
              "jsonName": "isswitchon",
              "number": 2,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "sRandomStr",
              "jsonName": "sRandomStr",
              "number": 3,
              "kind": "bytes",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "bytes"
                ]
              }
            },
            {
              "name": "keyGenAlgo",
              "jsonName": "keyGenAlgo",
              "number": 4,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ShareKeyGenAlgo",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "encryptAlgo",
              "jsonName": "encryptAlgo",
              "number": 5,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.EncryptAlgo",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.PresentChangeNtf",
          "fields": [
            {
              "name": "uid",
              "jsonName": "uid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "present_id",
              "jsonName": "presentId",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ProfileData",
          "fields": [
            {
              "name": "like_num",
              "jsonName": "likeNum",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "self_liked",
              "jsonName": "selfLiked",
              "number": 2,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "signature",
              "jsonName": "signature",
              "number": 3,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "activities",
              "jsonName": "activities",
              "number": 4,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.RoleActivity",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "partner_data",
              "jsonName": "partnerData",
              "number": 5,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.PartnerData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "partner_num",
              "jsonName": "partnerNum",
              "number": 6,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "enhancement_num",
              "jsonName": "enhancementNum",
              "number": 7,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "achievement_num",
              "jsonName": "achievementNum",
              "number": 8,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "battle_record",
              "jsonName": "battleRecord",
              "number": 9,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "rank",
              "jsonName": "rank",
              "number": 10,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "check_time_list",
              "jsonName": "checkTimeList",
              "number": 11,
              "kind": "uint64",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "item_info",
              "jsonName": "itemInfo",
              "number": 12,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.ProfileData.ItemInfoEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            },
            {
              "name": "setting",
              "jsonName": "setting",
              "number": 13,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ProjectDamageData",
          "fields": [
            {
              "name": "Targets",
              "jsonName": "Targets",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.TargetHurtInfo",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "Caster",
              "jsonName": "Caster",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "SkillID",
              "jsonName": "SkillID",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "HitPoint",
              "jsonName": "HitPoint",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "HitIndex",
              "jsonName": "HitIndex",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "combo",
              "jsonName": "combo",
              "number": 6,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "HitPos",
              "jsonName": "HitPos",
              "number": 7,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.PosData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "SkillToken",
              "jsonName": "SkillToken",
              "number": 8,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ProjectNotSkillDamageData",
          "fields": [
            {
              "name": "Target",
              "jsonName": "Target",
              "number": 1,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.TargetHurtInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "Caster",
              "jsonName": "Caster",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "BuffID",
              "jsonName": "BuffID",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "BuffLevel",
              "jsonName": "BuffLevel",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "CasterInfo",
              "jsonName": "CasterInfo",
              "number": 5,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.DamageCasterInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "SkillToken",
              "jsonName": "SkillToken",
              "number": 6,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ProveGroundOpArg",
          "fields": [
            {
              "name": "mob_tid",
              "jsonName": "mobTid",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "mob_settings",
              "jsonName": "mobSettings",
              "number": 2,
              "kind": "enum",
              "cardinality": "repeated",
              "typeName": "KKSG.ProveGroundSetting",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "option_id",
              "jsonName": "optionId",
              "number": 3,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ProveGroundSetting",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "option_state",
              "jsonName": "optionState",
              "number": 4,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "op",
              "jsonName": "op",
              "number": 5,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ProveGroundOpCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ProveGroundOpRes",
          "fields": [
            {
              "name": "result",
              "jsonName": "result",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.PullResult",
          "fields": [
            {
              "name": "partnerID",
              "jsonName": "partnerID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "extraItems",
              "jsonName": "extraItems",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.Item",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "itemID",
              "jsonName": "itemID",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "type",
              "jsonName": "type",
              "number": 4,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.GachaResultType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "result",
              "jsonName": "result",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "is_new",
              "jsonName": "isNew",
              "number": 6,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.PunishNtfData",
          "fields": [
            {
              "name": "punish_id",
              "jsonName": "punishId",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "expired_time",
              "jsonName": "expiredTime",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "chat_banned_list",
              "jsonName": "chatBannedList",
              "number": 3,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.ChatBannedData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "rename_data",
              "jsonName": "renameData",
              "number": 4,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.RenameData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.PurchaseShopItemArg",
          "fields": [
            {
              "name": "ShopID",
              "jsonName": "ShopID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "ShopItemID",
              "jsonName": "ShopItemID",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Count",
              "jsonName": "Count",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.PurchaseShopItemRes",
          "fields": [
            {
              "name": "Err",
              "jsonName": "Err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "ShopID",
              "jsonName": "ShopID",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "ShopItemID",
              "jsonName": "ShopItemID",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "NewStock",
              "jsonName": "NewStock",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "NewItemTID",
              "jsonName": "NewItemTID",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "NewItemUID",
              "jsonName": "NewItemUID",
              "number": 6,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "NewItemCount",
              "jsonName": "NewItemCount",
              "number": 7,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.QueryFriendPrivateChatArg",
          "fields": [
            {
              "name": "roleid",
              "jsonName": "roleid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "startid",
              "jsonName": "startid",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "isread",
              "jsonName": "isread",
              "number": 3,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.QueryFriendPrivateChatRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "channelmsg",
              "jsonName": "channelmsg",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.ChannelChatMessage",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.QueryGachaInfoArg",
          "fields": [
            {
              "name": "cardPoolType",
              "jsonName": "cardPoolType",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.CardPoolType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "page",
              "jsonName": "page",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.QueryGachaInfoRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "records",
              "jsonName": "records",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.GachaEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.QueryLoadingArg",
          "fields": []
        },
        {
          "fullName": "KKSG.QueryLoadingRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "loading_ntf",
              "jsonName": "loadingNtf",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.LoadingSceneNtf",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.QueryQuestArg",
          "fields": [
            {
              "name": "type",
              "jsonName": "type",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.QuestType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.QueryQuestRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "quest",
              "jsonName": "quest",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.QuestInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.QuerySelfGuildArg",
          "fields": [
            {
              "name": "type",
              "jsonName": "type",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.QuerySelfGuildType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.QuerySelfGuildRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "guilddata",
              "jsonName": "guilddata",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.GuildData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "roleguildinfo",
              "jsonName": "roleguildinfo",
              "number": 3,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.RoleGuildInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.QueryTeamArg",
          "fields": [
            {
              "name": "teamid",
              "jsonName": "teamid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.QueryTeamBattleStatisArg",
          "fields": []
        },
        {
          "fullName": "KKSG.QueryTeamBattleStatisRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "mvp",
              "jsonName": "mvp",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "memberstatis",
              "jsonName": "memberstatis",
              "number": 3,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.QueryTeamBattleStatisRes.MemberstatisEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.QueryTeamRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "teaminfo",
              "jsonName": "teaminfo",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.TeamInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.QuestData",
          "fields": [
            {
              "name": "ID",
              "jsonName": "ID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "progress",
              "jsonName": "progress",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "state",
              "jsonName": "state",
              "number": 3,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.QuestState",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.QuestInfo",
          "fields": [
            {
              "name": "chapter",
              "jsonName": "chapter",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.QuestData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "chapter_id",
              "jsonName": "chapterId",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "daily",
              "jsonName": "daily",
              "number": 3,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.QuestData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "active_val",
              "jsonName": "activeVal",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "daily_reset",
              "jsonName": "dailyReset",
              "number": 5,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "daily_login",
              "jsonName": "dailyLogin",
              "number": 6,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "total_active_cnt",
              "jsonName": "totalActiveCnt",
              "number": 7,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "chapter_begin_time",
              "jsonName": "chapterBeginTime",
              "number": 8,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "daily_begin_time",
              "jsonName": "dailyBeginTime",
              "number": 9,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.QuestRewardArg",
          "fields": [
            {
              "name": "id",
              "jsonName": "id",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "type",
              "jsonName": "type",
              "number": 2,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.QuestRewardType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.QuestRewardRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "reward_list",
              "jsonName": "rewardList",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.ItemBrief",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ReceiveTeamLevelAwardArg",
          "fields": [
            {
              "name": "opt",
              "jsonName": "opt",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.TeamLevelOpt",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "team_level",
              "jsonName": "teamLevel",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "id",
              "jsonName": "id",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ReceiveTeamLevelAwardRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "item_list",
              "jsonName": "itemList",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.ItemBrief",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RecommendFriendArg",
          "fields": [
            {
              "name": "type",
              "jsonName": "type",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.RecommendFriendType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RecommendFriendRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "roles",
              "jsonName": "roles",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.FriendData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RecommendGuildArg",
          "fields": []
        },
        {
          "fullName": "KKSG.RecommendGuildRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "guilds",
              "jsonName": "guilds",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.GuildData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "roleguildinfo",
              "jsonName": "roleguildinfo",
              "number": 3,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.RoleGuildInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ReconnectQueryTeamArg",
          "fields": [
            {
              "name": "reason",
              "jsonName": "reason",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ReconnectQueryTeamRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "teaminfo",
              "jsonName": "teaminfo",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.TeamInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "matchinfo",
              "jsonName": "matchinfo",
              "number": 3,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.RoleTeamMatchInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "chatmessage",
              "jsonName": "chatmessage",
              "number": 4,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.ChatQueryMessageRes",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ReconnectRoleArg",
          "fields": [
            {
              "name": "login",
              "jsonName": "login",
              "number": 1,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.LoginReqArg",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "hs_reconnect_token",
              "jsonName": "hsReconnectToken",
              "number": 2,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ReconnectRoleRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "new_session",
              "jsonName": "newSession",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "role_data",
              "jsonName": "roleData",
              "number": 3,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.RoleAllInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "game_session_info",
              "jsonName": "gameSessionInfo",
              "number": 4,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.EnterGameSessionNotify",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "server_time",
              "jsonName": "serverTime",
              "number": 5,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "ping_type",
              "jsonName": "pingType",
              "number": 6,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ReconnectSceneData",
          "fields": [
            {
              "name": "sceneuid",
              "jsonName": "sceneuid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "selfs",
              "jsonName": "selfs",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.UnitAppearanceData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "others",
              "jsonName": "others",
              "number": 3,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.UnitAppearanceData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "self_battle_uid",
              "jsonName": "selfBattleUid",
              "number": 4,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "levelstate",
              "jsonName": "levelstate",
              "number": 5,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.LevelStateData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "resultdata",
              "jsonName": "resultdata",
              "number": 6,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.BattleResultData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "self_sync",
              "jsonName": "selfSync",
              "number": 7,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.StepSyncData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "noticemsg",
              "jsonName": "noticemsg",
              "number": 8,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.ChapterStarMsg",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "partner_list",
              "jsonName": "partnerList",
              "number": 9,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.TeamData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ReconnectSceneGSArg",
          "fields": [
            {
              "name": "role_scene_state",
              "jsonName": "roleSceneState",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.RoleSceneState",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "sceneid",
              "jsonName": "sceneid",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "sceneuid",
              "jsonName": "sceneuid",
              "number": 3,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "mapid",
              "jsonName": "mapid",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "gs_reconnect_token",
              "jsonName": "gsReconnectToken",
              "number": 5,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "game_session_id",
              "jsonName": "gameSessionId",
              "number": 6,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "player_session_id",
              "jsonName": "playerSessionId",
              "number": 7,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ReconnectSceneGSRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "scene_data",
              "jsonName": "sceneData",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.ReconnectSceneData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "loading_ntf",
              "jsonName": "loadingNtf",
              "number": 3,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.LoadingSceneNtf",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RefreshPartner",
          "fields": [
            {
              "name": "opt",
              "jsonName": "opt",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.RefreshPartnerType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "refreshdata",
              "jsonName": "refreshdata",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.PartnerData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "isPartnerPointChange",
              "jsonName": "isPartnerPointChange",
              "number": 3,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RefreshPartnerTeamData",
          "fields": [
            {
              "name": "team",
              "jsonName": "team",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.TeamData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "currentTeam",
              "jsonName": "currentTeam",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RenameData",
          "fields": [
            {
              "name": "name",
              "jsonName": "name",
              "number": 1,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "reason",
              "jsonName": "reason",
              "number": 2,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ReportAWSLatency",
          "fields": [
            {
              "name": "datas",
              "jsonName": "datas",
              "number": 1,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.AWSLatencyList",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ReportArg",
          "fields": [
            {
              "name": "type",
              "jsonName": "type",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ReportType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "sub_task_id",
              "jsonName": "subTaskId",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ReportPlayerArg",
          "fields": [
            {
              "name": "reporteeid",
              "jsonName": "reporteeid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "category",
              "jsonName": "category",
              "number": 2,
              "kind": "enum",
              "cardinality": "repeated",
              "typeName": "KKSG.EReportCategory",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "comment",
              "jsonName": "comment",
              "number": 3,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ReportPlayerRes",
          "fields": [
            {
              "name": "error",
              "jsonName": "error",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "last_report_time",
              "jsonName": "lastReportTime",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ReportRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ReportServerLatency",
          "fields": [
            {
              "name": "hall_latencies",
              "jsonName": "hallLatencies",
              "number": 1,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "gs_latencies",
              "jsonName": "gsLatencies",
              "number": 2,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ReportVoiceArg",
          "fields": [
            {
              "name": "type",
              "jsonName": "type",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.VoiceChannelType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "history",
              "jsonName": "history",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "target_id",
              "jsonName": "targetId",
              "number": 3,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ReportVoiceRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "last_report_time",
              "jsonName": "lastReportTime",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RequireActionData",
          "fields": [
            {
              "name": "Pos",
              "jsonName": "Pos",
              "number": 1,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.PosDataUInt",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RoleActivity",
          "fields": [
            {
              "name": "time",
              "jsonName": "time",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "activity",
              "jsonName": "activity",
              "number": 2,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RoleAllInfo",
          "fields": [
            {
              "name": "brief",
              "jsonName": "brief",
              "number": 1,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.RoleBriefInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "virItem",
              "jsonName": "virItem",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.VirtualItem",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "bag",
              "jsonName": "bag",
              "number": 3,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.BagInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "stage",
              "jsonName": "stage",
              "number": 4,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.StageInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "ownpartner",
              "jsonName": "ownpartner",
              "number": 5,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.OwnPartnerInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "extra",
              "jsonName": "extra",
              "number": 6,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.RoleExtraInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "task",
              "jsonName": "task",
              "number": 7,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.TaskInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "chapter",
              "jsonName": "chapter",
              "number": 8,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.ChapterInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "system",
              "jsonName": "system",
              "number": 9,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.SystemInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "buyInfo",
              "jsonName": "buyInfo",
              "number": 10,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.BuyInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "gacha",
              "jsonName": "gacha",
              "number": 11,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.GachaInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "level",
              "jsonName": "level",
              "number": 12,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.LevelSaveInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "formation",
              "jsonName": "formation",
              "number": 13,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.FormationInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "idhistory",
              "jsonName": "idhistory",
              "number": 14,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.BagItemidHistory",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "Stats",
              "jsonName": "Stats",
              "number": 15,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.RoleStatsInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "quest",
              "jsonName": "quest",
              "number": 16,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.QuestInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "idempotency",
              "jsonName": "idempotency",
              "number": 17,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.RoleIdempotencyInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "quickmessage",
              "jsonName": "quickmessage",
              "number": 18,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.ChatQuickMessageList",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "profile",
              "jsonName": "profile",
              "number": 19,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.ProfileData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "setting",
              "jsonName": "setting",
              "number": 20,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.PlayerSetting",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "shopInfo",
              "jsonName": "shopInfo",
              "number": 21,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.RoleShopInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "punish",
              "jsonName": "punish",
              "number": 22,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.RolePunishInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RoleBriefInfo",
          "fields": [
            {
              "name": "roleid",
              "jsonName": "roleid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "account",
              "jsonName": "account",
              "number": 2,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "name",
              "jsonName": "name",
              "number": 3,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "level",
              "jsonName": "level",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "loginTimes",
              "jsonName": "loginTimes",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "hallpos",
              "jsonName": "hallpos",
              "number": 6,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.PosData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "uid",
              "jsonName": "uid",
              "number": 7,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "avatar",
              "jsonName": "avatar",
              "number": 8,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "login_time",
              "jsonName": "loginTime",
              "number": 9,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "logout_time",
              "jsonName": "logoutTime",
              "number": 10,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "avatar_frame",
              "jsonName": "avatarFrame",
              "number": 11,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "card",
              "jsonName": "card",
              "number": 12,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "chat_bubble",
              "jsonName": "chatBubble",
              "number": 13,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "avatar_expired",
              "jsonName": "avatarExpired",
              "number": 14,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "avatar_frame_expired",
              "jsonName": "avatarFrameExpired",
              "number": 15,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "card_expired",
              "jsonName": "cardExpired",
              "number": 16,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "chat_bubble_expired",
              "jsonName": "chatBubbleExpired",
              "number": 17,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "teamlevel",
              "jsonName": "teamlevel",
              "number": 18,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.TeamLevelData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "sdk_info",
              "jsonName": "sdkInfo",
              "number": 19,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.ClientSDKInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RoleCombatGroupNtfData",
          "fields": [
            {
              "name": "partners",
              "jsonName": "partners",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.UnitAppearanceData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "currentRoleID",
              "jsonName": "currentRoleID",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RoleDestructibleInfo",
          "fields": [
            {
              "name": "last_drop_time",
              "jsonName": "lastDropTime",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "drop_times_in_day",
              "jsonName": "dropTimesInDay",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RoleExtraInfo",
          "fields": [
            {
              "name": "nextfatiguerecovertime",
              "jsonName": "nextfatiguerecovertime",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "adaptive",
              "jsonName": "adaptive",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.SceneAdaptiveInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "month_rename_count",
              "jsonName": "monthRenameCount",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "last_rename_time",
              "jsonName": "lastRenameTime",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "chat_banned_list",
              "jsonName": "chatBannedList",
              "number": 5,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.ChatBannedData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "bgip",
              "jsonName": "bgip",
              "number": 6,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.BgipData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "drop_limit",
              "jsonName": "dropLimit",
              "number": 7,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.RoleExtraInfo.DropLimitEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            },
            {
              "name": "teamlevel",
              "jsonName": "teamlevel",
              "number": 8,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.TeamLevelData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "hallpos",
              "jsonName": "hallpos",
              "number": 9,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.PosData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RoleGuildCheckInResult",
          "fields": [
            {
              "name": "guildid",
              "jsonName": "guildid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "rewardids",
              "jsonName": "rewardids",
              "number": 2,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "selectrewardid",
              "jsonName": "selectrewardid",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "checkintime",
              "jsonName": "checkintime",
              "number": 4,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "rewardlevel",
              "jsonName": "rewardlevel",
              "number": 5,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.GuildCheckInRewardLevel",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RoleGuildInfo",
          "fields": [
            {
              "name": "roleguildbrief",
              "jsonName": "roleguildbrief",
              "number": 1,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.DbRoleGuildBriefData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "applys",
              "jsonName": "applys",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.RoleGuildInfo.ApplysEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            },
            {
              "name": "lastresult",
              "jsonName": "lastresult",
              "number": 3,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.RoleGuildCheckInResult",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RoleIdempotencyInfo",
          "fields": [
            {
              "name": "entries",
              "jsonName": "entries",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.IdempotencyEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RoleLevelUpNtfData",
          "fields": [
            {
              "name": "level",
              "jsonName": "level",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "vitem_show",
              "jsonName": "vitemShow",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.VItemChangeShow",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RolePunishInfo",
          "fields": [
            {
              "name": "chat_banned_list",
              "jsonName": "chatBannedList",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.ChatBannedData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RoleShopInfo",
          "fields": [
            {
              "name": "ShopItemInfos",
              "jsonName": "ShopItemInfos",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.RoleShopInfo.ShopItemInfosEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            },
            {
              "name": "CurrencyCost",
              "jsonName": "CurrencyCost",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.RoleShopInfo.CurrencyCostEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RoleShopItemInfo",
          "fields": [
            {
              "name": "ShopItemID",
              "jsonName": "ShopItemID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Touched",
              "jsonName": "Touched",
              "number": 2,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "LastPurchaseTime",
              "jsonName": "LastPurchaseTime",
              "number": 3,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Stock",
              "jsonName": "Stock",
              "number": 4,
              "kind": "int32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "TotalBought",
              "jsonName": "TotalBought",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RoleStateCD",
          "fields": [
            {
              "name": "switchcd",
              "jsonName": "switchcd",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "roleid",
              "jsonName": "roleid",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RoleStatsInfo",
          "fields": [
            {
              "name": "last_login_time",
              "jsonName": "lastLoginTime",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "last_logout_time",
              "jsonName": "lastLogoutTime",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "total_login_days",
              "jsonName": "totalLoginDays",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "login_count_today",
              "jsonName": "loginCountToday",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "keep_login_days",
              "jsonName": "keepLoginDays",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "max_keep_login",
              "jsonName": "maxKeepLogin",
              "number": 6,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "online_times",
              "jsonName": "onlineTimes",
              "number": 7,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "last_update_time",
              "jsonName": "lastUpdateTime",
              "number": 8,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "last_levelup_time",
              "jsonName": "lastLevelupTime",
              "number": 9,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "timeused_levelup",
              "jsonName": "timeusedLevelup",
              "number": 10,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "login_total_time",
              "jsonName": "loginTotalTime",
              "number": 11,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "last_login_duration",
              "jsonName": "lastLoginDuration",
              "number": 12,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RoleSummaryDataOnline",
          "fields": [
            {
              "name": "sceneid",
              "jsonName": "sceneid",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "teamid",
              "jsonName": "teamid",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "teamscenelist",
              "jsonName": "teamscenelist",
              "number": 3,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "sessionid",
              "jsonName": "sessionid",
              "number": 4,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RoleSysAutoMailData",
          "fields": [
            {
              "name": "record",
              "jsonName": "record",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.RoleSysAutoMailData.RecordEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RoleSysHintData",
          "fields": [
            {
              "name": "SystemHint",
              "jsonName": "SystemHint",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.RoleSysHintData.SystemHintEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RoleSysOpenData",
          "fields": [
            {
              "name": "SystemOpened",
              "jsonName": "SystemOpened",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.RoleSysOpenData.SystemOpenedEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RoleTeamMatchInfo",
          "fields": [
            {
              "name": "ismatch",
              "jsonName": "ismatch",
              "number": 1,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "begintime",
              "jsonName": "begintime",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RoleTutorialData",
          "fields": [
            {
              "name": "tutorialBits",
              "jsonName": "tutorialBits",
              "number": 1,
              "kind": "bytes",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "bytes"
                ]
              }
            },
            {
              "name": "tutorial_ctx",
              "jsonName": "tutorialCtx",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.TutorialCtxData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.RunGroupNtfData",
          "fields": [
            {
              "name": "groupID",
              "jsonName": "groupID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "is_run",
              "jsonName": "isRun",
              "number": 2,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SceneAdaptiveInfo",
          "fields": [
            {
              "name": "group_enemy",
              "jsonName": "groupEnemy",
              "number": 1,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.AdaptiveRecData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "boss",
              "jsonName": "boss",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.AdaptiveRecData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SceneContinueChangeArg",
          "fields": [
            {
              "name": "type",
              "jsonName": "type",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.SceneChangeType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SceneContinueChangeRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SceneFinishList",
          "fields": [
            {
              "name": "finishdata",
              "jsonName": "finishdata",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.SceneFinishList.FinishdataEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            },
            {
              "name": "type",
              "jsonName": "type",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SceneFrameFixNtfData",
          "fields": [
            {
              "name": "stopScene",
              "jsonName": "stopScene",
              "number": 1,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "reason",
              "jsonName": "reason",
              "number": 2,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.SceneFrameFixReason",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "excludeUnits",
              "jsonName": "excludeUnits",
              "number": 3,
              "kind": "uint64",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "speedRate",
              "jsonName": "speedRate",
              "number": 4,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SceneTeamBattleResInfo",
          "fields": [
            {
              "name": "mvprole",
              "jsonName": "mvprole",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "leaderid",
              "jsonName": "leaderid",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "likeinfo",
              "jsonName": "likeinfo",
              "number": 3,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.SceneTeamLikeInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "members",
              "jsonName": "members",
              "number": 4,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.SceneTeamBattleResInfo.MembersEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SceneTeamLikeInfo",
          "fields": [
            {
              "name": "memberslikeinfo",
              "jsonName": "memberslikeinfo",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.SceneTeamLikeInfo.MemberslikeinfoEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SceneTeamMemberLikeInfo",
          "fields": [
            {
              "name": "likenum",
              "jsonName": "likenum",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "record",
              "jsonName": "record",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.SceneTeamMemberLikeInfo.RecordEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SearchPlayerForFriendArg",
          "fields": [
            {
              "name": "uid",
              "jsonName": "uid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "name",
              "jsonName": "name",
              "number": 2,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SearchPlayerForFriendRes",
          "fields": [
            {
              "name": "roles",
              "jsonName": "roles",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.FriendData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SelectBDArg",
          "fields": [
            {
              "name": "index",
              "jsonName": "index",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SelectBDRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SelectRoleArg",
          "fields": []
        },
        {
          "fullName": "KKSG.SelectRoleRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "roleinfo",
              "jsonName": "roleinfo",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.RoleAllInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "hs_reconnect_token",
              "jsonName": "hsReconnectToken",
              "number": 3,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ServerInfo",
          "fields": [
            {
              "name": "id",
              "jsonName": "id",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "ip",
              "jsonName": "ip",
              "number": 2,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "port",
              "jsonName": "port",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "name",
              "jsonName": "name",
              "number": 4,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "state",
              "jsonName": "state",
              "number": 5,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ServerState",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "env",
              "jsonName": "env",
              "number": 6,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ServerEnvType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ServerListInfo",
          "fields": [
            {
              "name": "servers",
              "jsonName": "servers",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.ServerInfo",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "last_server_id",
              "jsonName": "lastServerId",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ServerTimeC2G",
          "fields": []
        },
        {
          "fullName": "KKSG.ServerTimeG2C",
          "fields": [
            {
              "name": "error",
              "jsonName": "error",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "seconds",
              "jsonName": "seconds",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SessionCloseNtf",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SetBattleSpeedRateArg",
          "fields": [
            {
              "name": "speedrate",
              "jsonName": "speedrate",
              "number": 1,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "restartSkill",
              "jsonName": "restartSkill",
              "number": 2,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "stopreason",
              "jsonName": "stopreason",
              "number": 3,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.BattleStopReason",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "skilltarget",
              "jsonName": "skilltarget",
              "number": 4,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SetBattleSpeedRateRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "speedrate",
              "jsonName": "speedrate",
              "number": 2,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "elitedata",
              "jsonName": "elitedata",
              "number": 3,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.EliteData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SetBattleStateArg",
          "fields": [
            {
              "name": "is_battling",
              "jsonName": "isBattling",
              "number": 1,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SetBattleStateRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SetChatQuickMessageRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ShopBrief",
          "fields": [
            {
              "name": "ShopID",
              "jsonName": "ShopID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "HasNewArrivals",
              "jsonName": "HasNewArrivals",
              "number": 2,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "OnSaleEnd",
              "jsonName": "OnSaleEnd",
              "number": 3,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "RestockStamp",
              "jsonName": "RestockStamp",
              "number": 4,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ShopDetail",
          "fields": [
            {
              "name": "ID",
              "jsonName": "ID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "RestockStamp",
              "jsonName": "RestockStamp",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "OnSaleEnd",
              "jsonName": "OnSaleEnd",
              "number": 3,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Items",
              "jsonName": "Items",
              "number": 4,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.ShopItem",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.ShopItem",
          "fields": [
            {
              "name": "ID",
              "jsonName": "ID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Item",
              "jsonName": "Item",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Count",
              "jsonName": "Count",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Currency",
              "jsonName": "Currency",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Cost",
              "jsonName": "Cost",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Stock",
              "jsonName": "Stock",
              "number": 6,
              "kind": "int32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "NextRestock",
              "jsonName": "NextRestock",
              "number": 7,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Available",
              "jsonName": "Available",
              "number": 8,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "OnSaleEnd",
              "jsonName": "OnSaleEnd",
              "number": 9,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "IsNew",
              "jsonName": "IsNew",
              "number": 10,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SkillData",
          "fields": [
            {
              "name": "id",
              "jsonName": "id",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "level",
              "jsonName": "level",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SkillDataUnit",
          "fields": [
            {
              "name": "SkillID",
              "jsonName": "SkillID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Target",
              "jsonName": "Target",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "ManualFace",
              "jsonName": "ManualFace",
              "number": 3,
              "kind": "int32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Slot",
              "jsonName": "Slot",
              "number": 4,
              "kind": "int32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "SlotStatus",
              "jsonName": "SlotStatus",
              "number": 5,
              "kind": "int32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "TriggerID",
              "jsonName": "TriggerID",
              "number": 6,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Pos",
              "jsonName": "Pos",
              "number": 7,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.PosDataUInt",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SkillOpArg",
          "fields": [
            {
              "name": "type",
              "jsonName": "type",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.SkillOpType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "partnerid",
              "jsonName": "partnerid",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "skillid",
              "jsonName": "skillid",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "recommend_id",
              "jsonName": "recommendId",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SkillOpRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "point_used",
              "jsonName": "pointUsed",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SkillRunningData",
          "fields": [
            {
              "name": "id",
              "jsonName": "id",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "level",
              "jsonName": "level",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "cd",
              "jsonName": "cd",
              "number": 3,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SkillSlotNtf",
          "fields": [
            {
              "name": "uid",
              "jsonName": "uid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "slot",
              "jsonName": "slot",
              "number": 2,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "skill",
              "jsonName": "skill",
              "number": 3,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "type",
              "jsonName": "type",
              "number": 4,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.SkillChangeType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SkillTarget",
          "fields": [
            {
              "name": "HosterID",
              "jsonName": "HosterID",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "TargetID",
              "jsonName": "TargetID",
              "number": 2,
              "kind": "uint64",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SquadDebugData",
          "fields": [
            {
              "name": "members",
              "jsonName": "members",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.SquadMemberDebugData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "weights",
              "jsonName": "weights",
              "number": 2,
              "kind": "float",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "leftTokens",
              "jsonName": "leftTokens",
              "number": 3,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "cdTokens",
              "jsonName": "cdTokens",
              "number": 4,
              "kind": "float",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SquadMemberDebugData",
          "fields": [
            {
              "name": "uid",
              "jsonName": "uid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "factors",
              "jsonName": "factors",
              "number": 2,
              "kind": "float",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "hasToken",
              "jsonName": "hasToken",
              "number": 3,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "tokenType",
              "jsonName": "tokenType",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "isRanged",
              "jsonName": "isRanged",
              "number": 5,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.StageFinishData",
          "fields": [
            {
              "name": "daycount",
              "jsonName": "daycount",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "eliteInfo",
              "jsonName": "eliteInfo",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.EliteData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "totalcount",
              "jsonName": "totalcount",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "type",
              "jsonName": "type",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.StageInfo",
          "fields": [
            {
              "name": "type2list",
              "jsonName": "type2list",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.StageInfo.Type2listEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            },
            {
              "name": "type2data",
              "jsonName": "type2data",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.StageInfo.Type2dataEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.StartSecurityConnArg",
          "fields": [
            {
              "name": "encryptedKey",
              "jsonName": "encryptedKey",
              "number": 1,
              "kind": "bytes",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "bytes"
                ]
              }
            },
            {
              "name": "type",
              "jsonName": "type",
              "number": 2,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.InitSecureConnType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.StartSecurityConnRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.StepMoveData",
          "fields": [
            {
              "name": "EntityID",
              "jsonName": "EntityID",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Stoppage",
              "jsonName": "Stoppage",
              "number": 2,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Face",
              "jsonName": "Face",
              "number": 3,
              "kind": "int32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "posx",
              "jsonName": "posx",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "posz",
              "jsonName": "posz",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.StepProgress",
          "fields": [
            {
              "name": "curr",
              "jsonName": "curr",
              "number": 1,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "target",
              "jsonName": "target",
              "number": 2,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "end_time",
              "jsonName": "endTime",
              "number": 3,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "check_suceess",
              "jsonName": "checkSuceess",
              "number": 4,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "uimode",
              "jsonName": "uimode",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.StepSyncData",
          "fields": [
            {
              "name": "EntityID",
              "jsonName": "EntityID",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "ScriptID",
              "jsonName": "ScriptID",
              "number": 2,
              "kind": "int32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Common",
              "jsonName": "Common",
              "number": 3,
              "kind": "int32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Velocity",
              "jsonName": "Velocity",
              "number": 4,
              "kind": "int32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "SkillCommon",
              "jsonName": "SkillCommon",
              "number": 5,
              "kind": "int32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "ConditionSeq",
              "jsonName": "ConditionSeq",
              "number": 6,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "posx",
              "jsonName": "posx",
              "number": 7,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "posz",
              "jsonName": "posz",
              "number": 8,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "posy",
              "jsonName": "posy",
              "number": 9,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "HitCommon",
              "jsonName": "HitCommon",
              "number": 10,
              "kind": "int32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "SwitchSeq",
              "jsonName": "SwitchSeq",
              "number": 11,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "SeedCode",
              "jsonName": "SeedCode",
              "number": 12,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "ActionRatio",
              "jsonName": "ActionRatio",
              "number": 13,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "HitFromID",
              "jsonName": "HitFromID",
              "number": 14,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "HitFromHash",
              "jsonName": "HitFromHash",
              "number": 15,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "ScriptVersion",
              "jsonName": "ScriptVersion",
              "number": 16,
              "kind": "int32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "WhileSeq",
              "jsonName": "WhileSeq",
              "number": 17,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "SkillTarget",
              "jsonName": "SkillTarget",
              "number": 18,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Passive",
              "jsonName": "Passive",
              "number": 19,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "face",
              "jsonName": "face",
              "number": 20,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.StepSyncInfo",
          "fields": [
            {
              "name": "DataList",
              "jsonName": "DataList",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.StepSyncData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "StepFrame",
              "jsonName": "StepFrame",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SubTask",
          "fields": [
            {
              "name": "sub_task_id",
              "jsonName": "subTaskId",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "progress",
              "jsonName": "progress",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "target",
              "jsonName": "target",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SvrSkillBgnData",
          "fields": [
            {
              "name": "Caster",
              "jsonName": "Caster",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Skill",
              "jsonName": "Skill",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Target",
              "jsonName": "Target",
              "number": 3,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Index",
              "jsonName": "Index",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SvrSkillEndData",
          "fields": [
            {
              "name": "Caster",
              "jsonName": "Caster",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Skill",
              "jsonName": "Skill",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "LastBulletIdx",
              "jsonName": "LastBulletIdx",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Index",
              "jsonName": "Index",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SweepArg",
          "fields": [
            {
              "name": "sceneid",
              "jsonName": "sceneid",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "sweepcount",
              "jsonName": "sweepcount",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SweepRes",
          "fields": [
            {
              "name": "error",
              "jsonName": "error",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "droplist",
              "jsonName": "droplist",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.ItemBrief",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "sweepexp",
              "jsonName": "sweepexp",
              "number": 3,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.BattleRoleExp",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "realsweepcount",
              "jsonName": "realsweepcount",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SwitchCombatRoleArg",
          "fields": [
            {
              "name": "uid",
              "jsonName": "uid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SwitchCombatRoleRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SwitchRoleNtf",
          "fields": [
            {
              "name": "is_to_other",
              "jsonName": "isToOther",
              "number": 1,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "leave_uid",
              "jsonName": "leaveUid",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "enter_uid",
              "jsonName": "enterUid",
              "number": 3,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "target",
              "jsonName": "target",
              "number": 4,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "enter_data",
              "jsonName": "enterData",
              "number": 5,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.UnitAppearanceData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SyncEQuestData",
          "fields": [
            {
              "name": "stepID",
              "jsonName": "stepID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "steps",
              "jsonName": "steps",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.StepProgress",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SyncLevelStateData",
          "fields": [
            {
              "name": "state",
              "jsonName": "state",
              "number": 1,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.LevelStateData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SyncLoadingStep",
          "fields": [
            {
              "name": "ones",
              "jsonName": "ones",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.SyncLoadingStepOne",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SyncLoadingStepOne",
          "fields": [
            {
              "name": "rolename",
              "jsonName": "rolename",
              "number": 1,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "servername",
              "jsonName": "servername",
              "number": 2,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "serverid",
              "jsonName": "serverid",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "step",
              "jsonName": "step",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "partnerid",
              "jsonName": "partnerid",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "roleuid",
              "jsonName": "roleuid",
              "number": 6,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "isrobot",
              "jsonName": "isrobot",
              "number": 7,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SyncMapLoadDataNtfData",
          "fields": [
            {
              "name": "mapdata",
              "jsonName": "mapdata",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.MapLoadData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SyncMoveAheadTypeData",
          "fields": [
            {
              "name": "client_move_ahead",
              "jsonName": "clientMoveAhead",
              "number": 1,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "uid",
              "jsonName": "uid",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SyncSceneTeamLikeData",
          "fields": [
            {
              "name": "source",
              "jsonName": "source",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "target",
              "jsonName": "target",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SyncTeamBattleInfoData",
          "fields": [
            {
              "name": "battleinfo",
              "jsonName": "battleinfo",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.SyncTeamBattleInfoData.BattleinfoEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SysHintData",
          "fields": [
            {
              "name": "system",
              "jsonName": "system",
              "number": 1,
              "kind": "int32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "uid",
              "jsonName": "uid",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "state",
              "jsonName": "state",
              "number": 3,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.SystemHintState",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "hinttype",
              "jsonName": "hinttype",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SysOpenData",
          "fields": [
            {
              "name": "openTime",
              "jsonName": "openTime",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SystemInfo",
          "fields": [
            {
              "name": "tutorialBits",
              "jsonName": "tutorialBits",
              "number": 1,
              "kind": "bytes",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "bytes"
                ]
              }
            },
            {
              "name": "SystemOpened",
              "jsonName": "SystemOpened",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.SystemInfo.SystemOpenedEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            },
            {
              "name": "tutorial_ctx",
              "jsonName": "tutorialCtx",
              "number": 3,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.TutorialCtxData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "SystemHint",
              "jsonName": "SystemHint",
              "number": 4,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.SystemInfo.SystemHintEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            },
            {
              "name": "hintNewIndex",
              "jsonName": "hintNewIndex",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "tutorial",
              "jsonName": "tutorial",
              "number": 6,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.RoleTutorialData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "open_data",
              "jsonName": "openData",
              "number": 7,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.RoleSysOpenData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "hint_data",
              "jsonName": "hintData",
              "number": 8,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.RoleSysHintData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "auto_mail",
              "jsonName": "autoMail",
              "number": 9,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.RoleSysAutoMailData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.SystemOpenNtf",
          "fields": [
            {
              "name": "system_id",
              "jsonName": "systemId",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TargetHurtInfo",
          "fields": [
            {
              "name": "UnitID",
              "jsonName": "UnitID",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Result",
              "jsonName": "Result",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.DamageResult",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "HurtPart",
              "jsonName": "HurtPart",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "debug_info",
              "jsonName": "debugInfo",
              "number": 4,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.DamageDebugInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "ExtraDamageCount",
              "jsonName": "ExtraDamageCount",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TaskData",
          "fields": [
            {
              "name": "task_id",
              "jsonName": "taskId",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "status",
              "jsonName": "status",
              "number": 2,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.TaskStatus",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "sub_tasks",
              "jsonName": "subTasks",
              "number": 3,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.SubTask",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TaskInfo",
          "fields": [
            {
              "name": "tasks",
              "jsonName": "tasks",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.TaskData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "trace_id",
              "jsonName": "traceId",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "finish_tasks",
              "jsonName": "finishTasks",
              "number": 3,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TaskTraceArg",
          "fields": [
            {
              "name": "trace_id",
              "jsonName": "traceId",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TaskTraceData",
          "fields": [
            {
              "name": "trace_id",
              "jsonName": "traceId",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TaskTraceRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TeamAssemblyInfo",
          "fields": [
            {
              "name": "teamid",
              "jsonName": "teamid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "sceneid",
              "jsonName": "sceneid",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "teamsize",
              "jsonName": "teamsize",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "message",
              "jsonName": "message",
              "number": 4,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "time",
              "jsonName": "time",
              "number": 5,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TeamChangeSyncClient",
          "fields": [
            {
              "name": "type",
              "jsonName": "type",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.TeamSyncType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "teaminfo",
              "jsonName": "teaminfo",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.TeamInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "roleid",
              "jsonName": "roleid",
              "number": 3,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "rolelist",
              "jsonName": "rolelist",
              "number": 4,
              "kind": "uint64",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "source",
              "jsonName": "source",
              "number": 5,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.OpTeamSourceType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TeamData",
          "fields": [
            {
              "name": "name",
              "jsonName": "name",
              "number": 1,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "partnerID",
              "jsonName": "partnerID",
              "number": 2,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TeamInfo",
          "fields": [
            {
              "name": "teamid",
              "jsonName": "teamid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "sceneid",
              "jsonName": "sceneid",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "leaderid",
              "jsonName": "leaderid",
              "number": 3,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "updatetime",
              "jsonName": "updatetime",
              "number": 4,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "members",
              "jsonName": "members",
              "number": 5,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.TeamInfo.MembersEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            },
            {
              "name": "joincondition",
              "jsonName": "joincondition",
              "number": 6,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.TeamJoinCondition",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "teamstate",
              "jsonName": "teamstate",
              "number": 7,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.TeamStateType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "isonlyinvite",
              "jsonName": "isonlyinvite",
              "number": 8,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "assembletime",
              "jsonName": "assembletime",
              "number": 9,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TeamJoinCondition",
          "fields": [
            {
              "name": "level_min",
              "jsonName": "levelMin",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TeamLevelData",
          "fields": [
            {
              "name": "teamlevel_data",
              "jsonName": "teamlevelData",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.TeamLevelData.TeamlevelDataEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TeamMemberBattleBuffData",
          "fields": [
            {
              "name": "id",
              "jsonName": "id",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "level",
              "jsonName": "level",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "uid",
              "jsonName": "uid",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "lefttime",
              "jsonName": "lefttime",
              "number": 4,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "stack",
              "jsonName": "stack",
              "number": 5,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TeamMemberBattleInfo",
          "fields": [
            {
              "name": "isrobot",
              "jsonName": "isrobot",
              "number": 1,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "battlestate",
              "jsonName": "battlestate",
              "number": 2,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.TeamMemberBattleStateType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "roleid",
              "jsonName": "roleid",
              "number": 3,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "maxhp",
              "jsonName": "maxhp",
              "number": 4,
              "kind": "double",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "hppercent",
              "jsonName": "hppercent",
              "number": 5,
              "kind": "double",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "name",
              "jsonName": "name",
              "number": 6,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "robotname",
              "jsonName": "robotname",
              "number": 7,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "partnerid",
              "jsonName": "partnerid",
              "number": 8,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "buffdata",
              "jsonName": "buffdata",
              "number": 9,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.TeamMemberBattleBuffData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "power",
              "jsonName": "power",
              "number": 10,
              "kind": "double",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "position",
              "jsonName": "position",
              "number": 11,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "shield",
              "jsonName": "shield",
              "number": 12,
              "kind": "double",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "ctrlstateid",
              "jsonName": "ctrlstateid",
              "number": 13,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TeamMemberBattleStatis",
          "fields": [
            {
              "name": "isrobot",
              "jsonName": "isrobot",
              "number": 1,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "roleid",
              "jsonName": "roleid",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "name",
              "jsonName": "name",
              "number": 3,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "robotname",
              "jsonName": "robotname",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "damage",
              "jsonName": "damage",
              "number": 5,
              "kind": "double",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "hurt",
              "jsonName": "hurt",
              "number": 6,
              "kind": "double",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "treat",
              "jsonName": "treat",
              "number": 7,
              "kind": "double",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "partnerid",
              "jsonName": "partnerid",
              "number": 8,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "partnerlevel",
              "jsonName": "partnerlevel",
              "number": 9,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "position",
              "jsonName": "position",
              "number": 10,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TeamMemberInfo",
          "fields": [
            {
              "name": "isrobot",
              "jsonName": "isrobot",
              "number": 1,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "icon",
              "jsonName": "icon",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "roleid",
              "jsonName": "roleid",
              "number": 3,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "robotid",
              "jsonName": "robotid",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "name",
              "jsonName": "name",
              "number": 5,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "robotname",
              "jsonName": "robotname",
              "number": 6,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "level",
              "jsonName": "level",
              "number": 7,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "jointime",
              "jsonName": "jointime",
              "number": 8,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "partner",
              "jsonName": "partner",
              "number": 9,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.TeamRolePartnerData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "state",
              "jsonName": "state",
              "number": 10,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.TeamMemberStateType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "position",
              "jsonName": "position",
              "number": 11,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "issessionclosed",
              "jsonName": "issessionclosed",
              "number": 12,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "isfatiguelow",
              "jsonName": "isfatiguelow",
              "number": 13,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "vivoxuseruri",
              "jsonName": "vivoxuseruri",
              "number": 14,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "joinsource",
              "jsonName": "joinsource",
              "number": 15,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.TeamJoinSourceType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "clientsdk",
              "jsonName": "clientsdk",
              "number": 16,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.ClientSDKInfo",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "account",
              "jsonName": "account",
              "number": 17,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TeamRolePartnerData",
          "fields": [
            {
              "name": "partnerid",
              "jsonName": "partnerid",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "level",
              "jsonName": "level",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TeleportArg",
          "fields": [
            {
              "name": "teleportID",
              "jsonName": "teleportID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TeleportRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TimelineBindData",
          "fields": [
            {
              "name": "timelineBindMap",
              "jsonName": "timelineBindMap",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.TimelineBindData.TimelineBindMapEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            },
            {
              "name": "plotid2order",
              "jsonName": "plotid2order",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.TimelineBindData.Plotid2orderEntry",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "map"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TimerNtfData",
          "fields": [
            {
              "name": "type",
              "jsonName": "type",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.TimerType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "timeleft_sec",
              "jsonName": "timeleftSec",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TouchShopItemArg",
          "fields": [
            {
              "name": "ShopID",
              "jsonName": "ShopID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "ShopItemID",
              "jsonName": "ShopItemID",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TouchShopItemRes",
          "fields": [
            {
              "name": "ShopItemID",
              "jsonName": "ShopItemID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Touched",
              "jsonName": "Touched",
              "number": 2,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "Err",
              "jsonName": "Err",
              "number": 3,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TransferLocationArg",
          "fields": [
            {
              "name": "locationid",
              "jsonName": "locationid",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "teleportID",
              "jsonName": "teleportID",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TransferLocationRes",
          "fields": [
            {
              "name": "error",
              "jsonName": "error",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TriggerEventInfo",
          "fields": [
            {
              "name": "repeatCount",
              "jsonName": "repeatCount",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "eventID",
              "jsonName": "eventID",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TriggerNtfData",
          "fields": [
            {
              "name": "triggerID",
              "jsonName": "triggerID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "repeatCount",
              "jsonName": "repeatCount",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "roleID",
              "jsonName": "roleID",
              "number": 3,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TriggerObjectInfo",
          "fields": [
            {
              "name": "state",
              "jsonName": "state",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.TriggerObjectStateType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "events",
              "jsonName": "events",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.TriggerEventInfo",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.TutorialCtxData",
          "fields": [
            {
              "name": "cur_tutorial",
              "jsonName": "curTutorial",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "cur_step",
              "jsonName": "curStep",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.UnitAppearanceData",
          "fields": [
            {
              "name": "type",
              "jsonName": "type",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "uid",
              "jsonName": "uid",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "templateid",
              "jsonName": "templateid",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "fightgroup",
              "jsonName": "fightgroup",
              "number": 4,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "isdead",
              "jsonName": "isdead",
              "number": 5,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "pos",
              "jsonName": "pos",
              "number": 6,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.PosData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "attr",
              "jsonName": "attr",
              "number": 7,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.Attribute",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "buffs",
              "jsonName": "buffs",
              "number": 8,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.BuffAddData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "role",
              "jsonName": "role",
              "number": 9,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.UnitAppearanceDataRole",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "hostid",
              "jsonName": "hostid",
              "number": 10,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "ecs_state",
              "jsonName": "ecsState",
              "number": 11,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "battlegroup",
              "jsonName": "battlegroup",
              "number": 12,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "state_tags",
              "jsonName": "stateTags",
              "number": 13,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "enemyOutLook",
              "jsonName": "enemyOutLook",
              "number": 14,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.EnemyOutLook",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "waveIndex",
              "jsonName": "waveIndex",
              "number": 15,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "timelineBindData",
              "jsonName": "timelineBindData",
              "number": 16,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.TimelineBindData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "bind_id",
              "jsonName": "bindId",
              "number": 17,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "bind_type",
              "jsonName": "bindType",
              "number": 18,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "final_hostid",
              "jsonName": "finalHostid",
              "number": 19,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "waveID",
              "jsonName": "waveID",
              "number": 20,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "disable_plat_collider",
              "jsonName": "disablePlatCollider",
              "number": 21,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "ai",
              "jsonName": "ai",
              "number": 22,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.AIData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "presentid",
              "jsonName": "presentid",
              "number": 23,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "boss_stage",
              "jsonName": "bossStage",
              "number": 24,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "feature_tags",
              "jsonName": "featureTags",
              "number": 25,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "level",
              "jsonName": "level",
              "number": 26,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "level_group_id",
              "jsonName": "levelGroupId",
              "number": 27,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.UnitAppearanceDataRole",
          "fields": [
            {
              "name": "roleid",
              "jsonName": "roleid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "partnerid",
              "jsonName": "partnerid",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "level",
              "jsonName": "level",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "switch_type",
              "jsonName": "switchType",
              "number": 4,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.RoleSwitchType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "partner_type",
              "jsonName": "partnerType",
              "number": 5,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.CombatRoleType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "skills",
              "jsonName": "skills",
              "number": 6,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "client_move_ahead",
              "jsonName": "clientMoveAhead",
              "number": 7,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "allskills",
              "jsonName": "allskills",
              "number": 8,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.SkillRunningData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            },
            {
              "name": "is_batte_state",
              "jsonName": "isBatteState",
              "number": 9,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "is_independent",
              "jsonName": "isIndependent",
              "number": 10,
              "kind": "bool",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.UnitAppearanceNtf",
          "fields": [
            {
              "name": "appear_list",
              "jsonName": "appearList",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.UnitAppearanceData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.UnitBindNtf",
          "fields": [
            {
              "name": "binder",
              "jsonName": "binder",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "bindee",
              "jsonName": "bindee",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "type",
              "jsonName": "type",
              "number": 3,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.UnitDisAppearanceData",
          "fields": [
            {
              "name": "uid",
              "jsonName": "uid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.UnitDisAppearanceNtf",
          "fields": [
            {
              "name": "disappear_list",
              "jsonName": "disappearList",
              "number": 1,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.UnitDisAppearanceData",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.UnitFeatureTagNtf",
          "fields": [
            {
              "name": "uid",
              "jsonName": "uid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "tags",
              "jsonName": "tags",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.UnitStateTagNtf",
          "fields": [
            {
              "name": "uid",
              "jsonName": "uid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "tags",
              "jsonName": "tags",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.UnlockTeleportPointArg",
          "fields": [
            {
              "name": "teleportID",
              "jsonName": "teleportID",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.UnlockTeleportPointRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.UpdatePlayerSettingArg",
          "fields": [
            {
              "name": "setting",
              "jsonName": "setting",
              "number": 1,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.PlayerSetting",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.UpdatePlayerSettingRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.UpdateProfileArg",
          "fields": [
            {
              "name": "type",
              "jsonName": "type",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ProfileItemType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "id",
              "jsonName": "id",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "content",
              "jsonName": "content",
              "number": 3,
              "kind": "string",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "extra",
              "jsonName": "extra",
              "number": 4,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.UpdateProfileData",
          "fields": [
            {
              "name": "type",
              "jsonName": "type",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ProfileItemType",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "data",
              "jsonName": "data",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.ProfileData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.UpdateProfileRes",
          "fields": [
            {
              "name": "err",
              "jsonName": "err",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.UpdateTutorialArg",
          "fields": [
            {
              "name": "tutorial_id",
              "jsonName": "tutorialId",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "tutorial_ctx",
              "jsonName": "tutorialCtx",
              "number": 2,
              "kind": "message",
              "cardinality": "singular",
              "typeName": "KKSG.TutorialCtxData",
              "hasPresence": true,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.UpdateTutorialRes",
          "fields": [
            {
              "name": "result",
              "jsonName": "result",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.UseItemArg",
          "fields": [
            {
              "name": "guid",
              "jsonName": "guid",
              "number": 1,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "count",
              "jsonName": "count",
              "number": 2,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "index_selected",
              "jsonName": "indexSelected",
              "number": 3,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "count_selected",
              "jsonName": "countSelected",
              "number": 4,
              "kind": "uint32",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.UseItemRes",
          "fields": [
            {
              "name": "error",
              "jsonName": "error",
              "number": 1,
              "kind": "enum",
              "cardinality": "singular",
              "typeName": "KKSG.ErrorCode",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "boxRwds_show",
              "jsonName": "boxRwdsShow",
              "number": 2,
              "kind": "message",
              "cardinality": "repeated",
              "typeName": "KKSG.Item",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "unsupported",
                "reasons": [
                  "nested_message"
                ]
              }
            }
          ]
        },
        {
          "fullName": "KKSG.VItemChangeShow",
          "fields": [
            {
              "name": "id",
              "jsonName": "id",
              "number": 1,
              "kind": "uint32",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "oldValue",
              "jsonName": "oldValue",
              "number": 2,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "newValue",
              "jsonName": "newValue",
              "number": 3,
              "kind": "uint64",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.Vec3",
          "fields": [
            {
              "name": "x",
              "jsonName": "x",
              "number": 1,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "y",
              "jsonName": "y",
              "number": 2,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "z",
              "jsonName": "z",
              "number": 3,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.Vec4",
          "fields": [
            {
              "name": "x",
              "jsonName": "x",
              "number": 1,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "y",
              "jsonName": "y",
              "number": 2,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "z",
              "jsonName": "z",
              "number": 3,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            },
            {
              "name": "w",
              "jsonName": "w",
              "number": 4,
              "kind": "float",
              "cardinality": "singular",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        },
        {
          "fullName": "KKSG.VirtualItem",
          "fields": [
            {
              "name": "items",
              "jsonName": "items",
              "number": 1,
              "kind": "int64",
              "cardinality": "repeated",
              "hasPresence": false,
              "proto3Optional": false,
              "support": {
                "status": "supported"
              }
            }
          ]
        }
      ],
      "enums": [
        {
          "fullName": "KKSG.AWSRegion",
          "values": [
            {
              "name": "AWSRegion_ENone",
              "number": 0
            },
            {
              "name": "us_east_1",
              "number": 1
            },
            {
              "name": "us_east_2",
              "number": 2
            },
            {
              "name": "us_west_1",
              "number": 3
            },
            {
              "name": "us_west_2",
              "number": 4
            },
            {
              "name": "ca_central_1",
              "number": 5
            },
            {
              "name": "sa_east_1",
              "number": 6
            },
            {
              "name": "eu_central_1",
              "number": 7
            },
            {
              "name": "eu_west_1",
              "number": 8
            },
            {
              "name": "eu_west_2",
              "number": 9
            },
            {
              "name": "eu_west_3",
              "number": 10
            },
            {
              "name": "eu_south_1",
              "number": 11
            },
            {
              "name": "eu_north_1",
              "number": 12
            },
            {
              "name": "me_south_1",
              "number": 13
            },
            {
              "name": "af_south_1",
              "number": 14
            },
            {
              "name": "ap_northeast_1",
              "number": 15
            },
            {
              "name": "ap_northeast_2",
              "number": 16
            },
            {
              "name": "ap_northeast_3",
              "number": 17
            },
            {
              "name": "ap_southeast_1",
              "number": 18
            },
            {
              "name": "ap_southeast_2",
              "number": 19
            },
            {
              "name": "ap_southeast_5",
              "number": 20
            },
            {
              "name": "ap_southeast_7",
              "number": 21
            },
            {
              "name": "ap_south_1",
              "number": 22
            },
            {
              "name": "ap_east_1",
              "number": 23
            }
          ]
        },
        {
          "fullName": "KKSG.AntiAliasingOption",
          "values": [
            {
              "name": "AntiAliasingOption_ENone",
              "number": 0
            },
            {
              "name": "AAOFF",
              "number": 1
            },
            {
              "name": "FXAA",
              "number": 2
            },
            {
              "name": "TAA",
              "number": 3
            },
            {
              "name": "STP",
              "number": 4
            }
          ]
        },
        {
          "fullName": "KKSG.AttrChangeType",
          "values": [
            {
              "name": "AttrChangeTypeNone",
              "number": 0
            },
            {
              "name": "AttrChangeTypeRecovry",
              "number": 1
            },
            {
              "name": "AttrChangeTypeBuff",
              "number": 2
            },
            {
              "name": "AttrChangeTypeSkill",
              "number": 3
            },
            {
              "name": "AttrChangeTypeTimeOut",
              "number": 4
            },
            {
              "name": "AttrChangeTypeGM",
              "number": 5
            },
            {
              "name": "AttrChangeTypeDelay",
              "number": 6
            },
            {
              "name": "AttrChangeTypeDamage",
              "number": 7
            }
          ]
        },
        {
          "fullName": "KKSG.BDSelectorType",
          "values": [
            {
              "name": "BDSelectorType_ENone",
              "number": 0
            },
            {
              "name": "Type_BD_Chest",
              "number": 1
            },
            {
              "name": "Type_BD_Shop",
              "number": 2
            }
          ]
        },
        {
          "fullName": "KKSG.BatchQueryTeamType",
          "values": [
            {
              "name": "BatchQueryTeamType_ENone",
              "number": 0
            },
            {
              "name": "BatchQueryTeam_Default",
              "number": 1
            },
            {
              "name": "BatchQueryTeam_Assemble",
              "number": 2
            }
          ]
        },
        {
          "fullName": "KKSG.BattleStopReason",
          "values": [
            {
              "name": "BattleStopReason_ENone",
              "number": 0
            },
            {
              "name": "BattleStopReason_Tutorial",
              "number": 1
            },
            {
              "name": "BattleStopReason_GamePause",
              "number": 2
            },
            {
              "name": "BattleStopReason_ShowMap",
              "number": 3
            }
          ]
        },
        {
          "fullName": "KKSG.CardPoolType",
          "values": [
            {
              "name": "CardPoolType_ENone",
              "number": 0
            },
            {
              "name": "CardPool_Newbee",
              "number": 1
            },
            {
              "name": "CardPool_Normal",
              "number": 2
            },
            {
              "name": "CardPool_Event",
              "number": 3
            },
            {
              "name": "CardPool_Weapon",
              "number": 4
            }
          ]
        },
        {
          "fullName": "KKSG.ChapterOpType",
          "values": [
            {
              "name": "ChapterOpType_ENone",
              "number": 0
            },
            {
              "name": "Chapter_ClaimRewards",
              "number": 1
            },
            {
              "name": "Chapter_FirstNotice",
              "number": 2
            }
          ]
        },
        {
          "fullName": "KKSG.ChatChannelType",
          "values": [
            {
              "name": "ChatChannelType_ENone",
              "number": 0
            },
            {
              "name": "ChatChannel_World",
              "number": 1
            },
            {
              "name": "ChatChannel_Team",
              "number": 2
            },
            {
              "name": "ChatChannel_TeamAssemble",
              "number": 3
            },
            {
              "name": "ChatChannel_Union",
              "number": 4
            },
            {
              "name": "ChatChanel_FriendPrivate",
              "number": 99
            },
            {
              "name": "ChatChannel_All",
              "number": 999
            }
          ]
        },
        {
          "fullName": "KKSG.ChatMessageType",
          "values": [
            {
              "name": "TChatMsgDefault",
              "number": 0
            },
            {
              "name": "TChatMsgFriendHello",
              "number": 1
            }
          ]
        },
        {
          "fullName": "KKSG.CheckCDType",
          "values": [
            {
              "name": "CheckCDType_ENone",
              "number": 0
            },
            {
              "name": "CheckCDReportPlayer",
              "number": 1
            },
            {
              "name": "CheckCDReportTeamVoice",
              "number": 2
            }
          ]
        },
        {
          "fullName": "KKSG.ClientOS",
          "values": [
            {
              "name": "ClientOS_ENone",
              "number": 0
            },
            {
              "name": "CLIENT_IOS",
              "number": 1
            },
            {
              "name": "CLIENT_ANDROID",
              "number": 2
            }
          ]
        },
        {
          "fullName": "KKSG.CombatRoleGroupOp",
          "values": [
            {
              "name": "CombatRoleGroupOp_ENone",
              "number": 0
            },
            {
              "name": "Group_Op_Add",
              "number": 1
            },
            {
              "name": "Group_Op_Rem",
              "number": 2
            },
            {
              "name": "Group_Op_Update",
              "number": 3
            }
          ]
        },
        {
          "fullName": "KKSG.CombatRoleType",
          "values": [
            {
              "name": "CombatRole_NULL",
              "number": 0
            },
            {
              "name": "CombatRole_LevelInit",
              "number": 1
            },
            {
              "name": "CombatRole_LevelAdd",
              "number": 2
            },
            {
              "name": "CombatRole_LevelForce",
              "number": 3
            },
            {
              "name": "CombatRole_Owned",
              "number": 4
            },
            {
              "name": "CombatRole_Hall",
              "number": 5
            }
          ]
        },
        {
          "fullName": "KKSG.DamageDebugParam",
          "values": [
            {
              "name": "DamageDebugParam_ENone",
              "number": 0
            },
            {
              "name": "Attack_Param",
              "number": 1
            },
            {
              "name": "Defence_Param",
              "number": 2
            },
            {
              "name": "Level_Suppress",
              "number": 3
            },
            {
              "name": "CriticalStrike_Ratio",
              "number": 4
            },
            {
              "name": "Defence_DecDamage",
              "number": 5
            },
            {
              "name": "Sum_DamageResist",
              "number": 6
            },
            {
              "name": "Attr_DamageResist",
              "number": 7
            },
            {
              "name": "Front_DamageResist",
              "number": 8
            },
            {
              "name": "Weakness_Restrain_DamageResist",
              "number": 9
            },
            {
              "name": "Team_DamageResist",
              "number": 10
            },
            {
              "name": "BkVulner_Ratio",
              "number": 11
            },
            {
              "name": "DefenceArg_Value",
              "number": 12
            },
            {
              "name": "Attacker_IgnoreDef_Ratio",
              "number": 13
            },
            {
              "name": "Sum_DamageAdd",
              "number": 14
            },
            {
              "name": "DmgType_DamageAdd",
              "number": 15
            },
            {
              "name": "DmgSource_DamageAdd",
              "number": 16
            },
            {
              "name": "State_DamageAdd",
              "number": 17
            },
            {
              "name": "BackAttack_DamageAdd",
              "number": 18
            },
            {
              "name": "Level_SuppressArg_Value",
              "number": 19
            },
            {
              "name": "Target_Caster_LevelDiff",
              "number": 20
            },
            {
              "name": "CriticalStrike_Triggered",
              "number": 21
            },
            {
              "name": "ModeBkDec_Of_Target",
              "number": 22
            },
            {
              "name": "ModeBkDec_Of_Caster_Skill",
              "number": 23
            },
            {
              "name": "AllDef_Of_Target",
              "number": 24
            },
            {
              "name": "Target_Level",
              "number": 25
            },
            {
              "name": "Caster_Level",
              "number": 26
            },
            {
              "name": "Weakness_Restrain_ModeBk",
              "number": 27
            },
            {
              "name": "Power_Recover_Value",
              "number": 28
            },
            {
              "name": "Passive_Skill_Ratio",
              "number": 29
            },
            {
              "name": "Global_DotDmgRatio",
              "number": 30
            },
            {
              "name": "Crit_Switch",
              "number": 31
            },
            {
              "name": "CtrlEffect_Switch",
              "number": 32
            },
            {
              "name": "Def_Switch",
              "number": 33
            },
            {
              "name": "DmgResist_Switch",
              "number": 34
            },
            {
              "name": "DmgReduce_Switch",
              "number": 35
            },
            {
              "name": "SummonedDmg_AddRatio",
              "number": 36
            },
            {
              "name": "Global_BreakHandleRatio",
              "number": 37
            },
            {
              "name": "Passive_Skill_Ratio_Damage",
              "number": 38
            },
            {
              "name": "Passive_Skill_Ratio_Mode",
              "number": 39
            },
            {
              "name": "Passive_Skill_Ratio_Power",
              "number": 40
            }
          ]
        },
        {
          "fullName": "KKSG.EQuestOpType",
          "values": [
            {
              "name": "EQuestOpType_ENone",
              "number": 0
            },
            {
              "name": "EQuest_Take",
              "number": 1
            },
            {
              "name": "EQuest_Finish",
              "number": 2
            },
            {
              "name": "EQuest_Fail",
              "number": 3
            },
            {
              "name": "Equest_Ntf_Cannot_Take",
              "number": 4
            }
          ]
        },
        {
          "fullName": "KKSG.EReportCategory",
          "values": [
            {
              "name": "EReportCategory_AFK",
              "number": 0
            },
            {
              "name": "EReportCategory_Cheating",
              "number": 1
            },
            {
              "name": "EReportCategory_Commendation",
              "number": 2
            },
            {
              "name": "EReportCategory_Exploiting",
              "number": 3
            },
            {
              "name": "EReportCategory_Griefing",
              "number": 4
            },
            {
              "name": "EReportCategory_HateSpeech",
              "number": 5
            },
            {
              "name": "EReportCategory_InappropriateUsername",
              "number": 6
            },
            {
              "name": "EReportCategory_VerbalAbuse",
              "number": 7
            },
            {
              "name": "EReportCategory_Scamming",
              "number": 8
            },
            {
              "name": "EReportCategory_Spamming",
              "number": 9
            },
            {
              "name": "EReportCategory_TeamKilling",
              "number": 10
            },
            {
              "name": "EReportCategory_Other",
              "number": 11
            }
          ]
        },
        {
          "fullName": "KKSG.EncryptAlgo",
          "values": [
            {
              "name": "EncryptAlgo_ENone",
              "number": 0
            },
            {
              "name": "AES256",
              "number": 1
            }
          ]
        },
        {
          "fullName": "KKSG.EnterSceneType",
          "values": [
            {
              "name": "ENTER_SCENE_NULL",
              "number": 0
            },
            {
              "name": "ENTER_SCENE_SELECT_ROLE",
              "number": 1
            },
            {
              "name": "ENTER_SCENE_SWITCH",
              "number": 2
            }
          ]
        },
        {
          "fullName": "KKSG.EntityCategory",
          "values": [
            {
              "name": "Category_Role",
              "number": 0
            },
            {
              "name": "Category_Enemy",
              "number": 1
            },
            {
              "name": "Category_Neutral",
              "number": 2
            },
            {
              "name": "Category_Robot",
              "number": 3
            },
            {
              "name": "Category_Others",
              "number": 4
            }
          ]
        },
        {
          "fullName": "KKSG.EntityFeature",
          "values": [
            {
              "name": "EntityFeature_ENone",
              "number": 0
            },
            {
              "name": "Feature_NoTarget",
              "number": 1
            },
            {
              "name": "Feature_NoHit",
              "number": 2
            },
            {
              "name": "Feature_NoEnterFight",
              "number": 3
            },
            {
              "name": "Feature_NoDropDetection",
              "number": 4
            }
          ]
        },
        {
          "fullName": "KKSG.EntitySpecies",
          "values": [
            {
              "name": "EntitySpecies_ENone",
              "number": 0
            },
            {
              "name": "Species_Boss",
              "number": 1
            },
            {
              "name": "Species_Opposer",
              "number": 2
            },
            {
              "name": "Species_Elite",
              "number": 6
            },
            {
              "name": "Species_Role",
              "number": 10
            },
            {
              "name": "Species_Spawn",
              "number": 11
            },
            {
              "name": "Species_Doodad",
              "number": 14
            },
            {
              "name": "Species_Destructible",
              "number": 18
            },
            {
              "name": "Species_MovablePlat",
              "number": 19
            }
          ]
        },
        {
          "fullName": "KKSG.EquipOptType",
          "values": [
            {
              "name": "EquipOptType_ENone",
              "number": 0
            },
            {
              "name": "Wear",
              "number": 1
            },
            {
              "name": "TakeOff",
              "number": 2
            },
            {
              "name": "TakeOffAll",
              "number": 3
            },
            {
              "name": "Enhance",
              "number": 4
            },
            {
              "name": "EQUIP_LOCK",
              "number": 5
            },
            {
              "name": "EQUIP_UNLOCK",
              "number": 6
            }
          ]
        },
        {
          "fullName": "KKSG.ErrorCode",
          "values": [
            {
              "name": "ERR_SUCCESS",
              "number": 0
            },
            {
              "name": "ERR_UNKNOWN",
              "number": 1
            },
            {
              "name": "ERR_FAILED",
              "number": 2
            },
            {
              "name": "ERR_TIMEOUT",
              "number": 3
            },
            {
              "name": "ERR_INVALID_REQUEST",
              "number": 4
            },
            {
              "name": "ERR_HANDLE_DELAY",
              "number": 5
            },
            {
              "name": "ERR_LOADED_LEAVE",
              "number": 6
            },
            {
              "name": "ERR_LOADED_NOTMATCH",
              "number": 7
            },
            {
              "name": "ERR_SCENECLIENT_SYN",
              "number": 8
            },
            {
              "name": "ERR_LEAVE_ROLE_NULL",
              "number": 9
            },
            {
              "name": "ERR_ENTER_SCENE_FAILED",
              "number": 10
            },
            {
              "name": "ERR_BAG_FULL",
              "number": 11
            },
            {
              "name": "ERR_ITEM_OWN_NUM_LIMIT",
              "number": 12
            },
            {
              "name": "ERR_SCENE_NOTOPEN",
              "number": 13
            },
            {
              "name": "ERR_SCENE_TODYCOUNTLIMIT",
              "number": 14
            },
            {
              "name": "ERR_SCENE_LEVELREQ",
              "number": 15
            },
            {
              "name": "ERR_SCENE_NEED_PRESCENE",
              "number": 16
            },
            {
              "name": "ERR_ITEM_NOT_ENOUGH",
              "number": 17
            },
            {
              "name": "ERR_LOGIN_FAILED",
              "number": 18
            },
            {
              "name": "ERR_GS_CLOSED",
              "number": 19
            },
            {
              "name": "ERR_MAX_LEVEL_REACHED",
              "number": 20
            },
            {
              "name": "ERR_DIAMOND_LACK",
              "number": 21
            },
            {
              "name": "ERR_COIN_NOT_ENOUGH",
              "number": 22
            },
            {
              "name": "ERR_PARTNER_NOTEXIST",
              "number": 23
            },
            {
              "name": "ERR_MAX_STAR_REACHED",
              "number": 24
            },
            {
              "name": "ERR_TEAMID_DOESNOT_EXIST",
              "number": 25
            },
            {
              "name": "ERR_CANNOT_SWITCH_TO_EMPTY_TEAM",
              "number": 26
            },
            {
              "name": "ERR_FORBID_ALLTEAM_EMPTY",
              "number": 27
            },
            {
              "name": "ERR_NEWNAME_MAXLENGTH",
              "number": 28
            },
            {
              "name": "ERR_CHAPTERCHEST_ALREADY_FETCHED",
              "number": 29
            },
            {
              "name": "ERR_PROVE_GROUND_MONSTER_ID_INVALID",
              "number": 30
            },
            {
              "name": "ERR_PROVE_GROUND_OPTION_INVALID",
              "number": 31
            },
            {
              "name": "ERR_PROVE_GROUND_OP_INVALID",
              "number": 32
            },
            {
              "name": "ERR_OUT_OF_RANGE",
              "number": 33
            },
            {
              "name": "ERR_RECONNECT_ROLE_FAILED",
              "number": 34
            },
            {
              "name": "ERR_RECONNECT_SCENE_FAILED",
              "number": 35
            },
            {
              "name": "ERR_RECONNECT_ROLE_RETRY",
              "number": 36
            },
            {
              "name": "ERR_RECONNECT_SCENE_RETRY",
              "number": 37
            },
            {
              "name": "ERR_LOGIN_RELOGIN",
              "number": 38
            },
            {
              "name": "ERR_LOGIN_PASSWORD_INVALID",
              "number": 39
            },
            {
              "name": "ERR_LOGIN_ACCOUNT_INVALID",
              "number": 40
            },
            {
              "name": "ERR_FATIGUE_BUY_TIMES_LACK",
              "number": 41
            },
            {
              "name": "ERR_FATIGUE_BUY_ALREADY_MAX",
              "number": 42
            },
            {
              "name": "ERR_FATIGUE_BUY_OVER_FLOW",
              "number": 43
            },
            {
              "name": "ERR_FATIGUE_BUY_ITEM_ERROR",
              "number": 44
            },
            {
              "name": "ERR_FATIGUE_BUY_ITEM_LACK",
              "number": 45
            },
            {
              "name": "ERR_INSTANCE_NOTFINISH",
              "number": 46
            },
            {
              "name": "ERR_SWEEP_NOT_THREE_STAR",
              "number": 47
            },
            {
              "name": "ERR_ITEM_NOT_EXIST",
              "number": 48
            },
            {
              "name": "ERR_ACCOUNT_DATA_FAILED",
              "number": 49
            },
            {
              "name": "ERR_ROLE_DATA_FAILED",
              "number": 50
            },
            {
              "name": "ERR_INVALID_TRIGGER",
              "number": 51
            },
            {
              "name": "ERR_ROLE_DEAD",
              "number": 52
            },
            {
              "name": "ERR_EXCEED_MAX_COUNT",
              "number": 53
            },
            {
              "name": "ERR_ROLE_LEVEL_LESS",
              "number": 54
            },
            {
              "name": "ERR_TEAM_OP_TEAM_FAILED",
              "number": 55
            },
            {
              "name": "ERR_TEAM_TEAM_IS_LOCKED",
              "number": 56
            },
            {
              "name": "ERR_TEAM_ALREADY_IN_TEAM",
              "number": 57
            },
            {
              "name": "ERR_TEAM_NOT_MATCH_TEAM_CONDITION",
              "number": 58
            },
            {
              "name": "ERR_TEAM_NOT_IN_TEAM",
              "number": 59
            },
            {
              "name": "ERR_TEAM_TEAM_NOT_EXIST",
              "number": 60
            },
            {
              "name": "ERR_TEAM_TEAM_IS_FULL",
              "number": 61
            },
            {
              "name": "ERR_TEAM_DUPLICATE_TEAMID",
              "number": 62
            },
            {
              "name": "ERR_TEAM_SCENEID_NOT_MATCH",
              "number": 63
            },
            {
              "name": "ERR_TEAM_NOT_TEAM_LEADER",
              "number": 64
            },
            {
              "name": "ERR_TEAM_TARGET_ROLE_INVALID",
              "number": 65
            },
            {
              "name": "ERR_TEAM_CONDITION_PARAM_INVALID",
              "number": 66
            },
            {
              "name": "ERR_TEAM_IS_IN_PVE_MATCHING",
              "number": 67
            },
            {
              "name": "ERR_TEAM_IS_NOT_PVE_MATCHING",
              "number": 68
            },
            {
              "name": "ERR_TEAM_CAN_NOT_OP_SELF",
              "number": 69
            },
            {
              "name": "ERR_TEAM_N0_TEAMID",
              "number": 70
            },
            {
              "name": "ERR_TEAM_NO_ROLE_IN_HALL",
              "number": 71
            },
            {
              "name": "ERR_TEAM_TEAMLIST_CONFIG_ERR",
              "number": 72
            },
            {
              "name": "ERR_TEAM_BATCH_QUERY_FAIL",
              "number": 73
            },
            {
              "name": "ERR_TEAM_TEAM_STATE_NOT_IN_NORMAL",
              "number": 74
            },
            {
              "name": "ERR_TEAM_TEAM_STATE_NOT_IN_VOTING",
              "number": 75
            },
            {
              "name": "ERR_TEAM_TARGET_NOT_IN_TEAM",
              "number": 76
            },
            {
              "name": "ERR_TEAM_ROLE_ALREADY_CONFIRMED",
              "number": 77
            },
            {
              "name": "ERR_TEAM_PARTNER_ALREADY_SELECTED",
              "number": 78
            },
            {
              "name": "ERR_TEAM_PARTNER_NOT_ENOUGH",
              "number": 79
            },
            {
              "name": "ERR_TEAM_CHANGE_SCENEID_FAIL",
              "number": 80
            },
            {
              "name": "ERR_TEAM_QUERY_TEAM_BATTLE_FAIL",
              "number": 81
            },
            {
              "name": "ERR_TEAM_QUERY_TEAM_STATIS_FAIL",
              "number": 82
            },
            {
              "name": "ERR_TEAM_PARAM_TEAMID_WRONG",
              "number": 83
            },
            {
              "name": "ERR_TEAM_PARTNER_NOT_EXIST",
              "number": 84
            },
            {
              "name": "ERR_TEAM_ADD_ROBOT_FAIL",
              "number": 85
            },
            {
              "name": "ERR_TEAM_LIKE_FAIL",
              "number": 86
            },
            {
              "name": "ERR_TEAM_CUR_SCENE_CAN_NOT_OP_TEAM",
              "number": 87
            },
            {
              "name": "ERR_TEAM_MEMBER_STATE_NOT_IN_NORMAL",
              "number": 88
            },
            {
              "name": "ERR_TEAM_MEMBER_NOT_CHANGING_PARTNER",
              "number": 89
            },
            {
              "name": "ERR_TEAM_IS_EMPTY",
              "number": 90
            },
            {
              "name": "ERR_TEAM_MEMBER_NOT_IN_MATCH",
              "number": 91
            },
            {
              "name": "ERR_TEAM_ID_GEN_OVER_SECOND_MAX",
              "number": 92
            },
            {
              "name": "ERR_TEAM_LINK_SEND_FAIL",
              "number": 93
            },
            {
              "name": "ERR_TEAM_SCENELIST_CONFIG_ERR",
              "number": 94
            },
            {
              "name": "ERR_TEAM_IILEGAL_ENTER_SCENE",
              "number": 95
            },
            {
              "name": "ERR_TEAM_HS_TS_INFO_NOT_MATCH",
              "number": 96
            },
            {
              "name": "ERR_TEAM_OP_TEAM_IN_CD",
              "number": 97
            },
            {
              "name": "ERR_TEAM_MEMBER_IN_CHANGING_PARTNER",
              "number": 98
            },
            {
              "name": "ERR_TEAM_MEMBER_FATIGUE_NOT_ENOUGH",
              "number": 99
            },
            {
              "name": "ERR_TEAM_TEAM_STATE_IN_BATTLE",
              "number": 100
            },
            {
              "name": "ERR_TEAM_MEMBER_STATE_IN_BATTLE",
              "number": 101
            },
            {
              "name": "ERR_TEAM_NOT_REACH_MIN_BATTLE_SIZE",
              "number": 102
            },
            {
              "name": "ERR_RECONNECT_ROLE_NOTEXIST",
              "number": 103
            },
            {
              "name": "ERR_SCENE_NOFATIGUE",
              "number": 104
            },
            {
              "name": "ERR_LOGIN_FORBIDDEN",
              "number": 105
            },
            {
              "name": "ERR_CHAT_CHANNEL_FULL",
              "number": 106
            },
            {
              "name": "ERR_CHAT_CONTENT_TOO_LONG",
              "number": 107
            },
            {
              "name": "ERR_CHAT_CHANNEL_NOT_EXIST",
              "number": 108
            },
            {
              "name": "ERR_SYSTEM_NOT_OPEN",
              "number": 109
            },
            {
              "name": "ERR_CHAT_SEND_MESSAGE_CD",
              "number": 110
            },
            {
              "name": "ERR_SCENE_NOACCEPT_TASKID",
              "number": 111
            },
            {
              "name": "ERR_SCENE_NOFINISH_TASKID",
              "number": 112
            },
            {
              "name": "ERR_MAIL_NOT_READ",
              "number": 113
            },
            {
              "name": "ERR_MAIL_NOT_EXIST",
              "number": 114
            },
            {
              "name": "ERR_MAIL_READED",
              "number": 115
            },
            {
              "name": "ERR_MAIL_NO_ATTACHMENT",
              "number": 116
            },
            {
              "name": "ERR_MAIL_REWARDED",
              "number": 117
            },
            {
              "name": "ERR_MAIL_PARAM_INVALID",
              "number": 118
            },
            {
              "name": "ERR_MAIL_CONF",
              "number": 119
            },
            {
              "name": "ERR_MAIL_EXIST",
              "number": 120
            },
            {
              "name": "ERR_MAIL_NOT_READY",
              "number": 121
            },
            {
              "name": "ERR_MAIL_HAS_ATTACHMENT",
              "number": 122
            },
            {
              "name": "ERR_MAIL_NOT_ANY_DELETE",
              "number": 123
            },
            {
              "name": "ERR_GACHA_INVALID_POOL_ID",
              "number": 124
            },
            {
              "name": "ERR_GACHA_INVALID_GACHA_TYPE",
              "number": 125
            },
            {
              "name": "ERR_GACHA_OUT_OF_TIME",
              "number": 126
            },
            {
              "name": "ERR_GACHA_END_OF_HISTORY",
              "number": 127
            },
            {
              "name": "ERR_GACHA_EXCEED_DAILY_LIMIT",
              "number": 128
            },
            {
              "name": "ERR_GACHA_LACK_OF_ITEM",
              "number": 129
            },
            {
              "name": "ERR_ITEM_ADD_BY_MAIL_WHEN_BAG_FULL",
              "number": 130
            },
            {
              "name": "ERR_LOGIN_SET_ONLINE_FAILED",
              "number": 131
            },
            {
              "name": "ERR_LOGIN_VERIFY_FAILED",
              "number": 132
            },
            {
              "name": "ERR_LOGIN_RECONNECT_FAILED",
              "number": 133
            },
            {
              "name": "ERR_LOGIN_RELOGIN_FAILED",
              "number": 134
            },
            {
              "name": "ERR_LOGIN_HALL_CLOSE",
              "number": 135
            },
            {
              "name": "ERR_LOGIN_GS_CLOSE",
              "number": 136
            },
            {
              "name": "ERR_HALL_CLOSED",
              "number": 137
            },
            {
              "name": "ERR_SCENE_CREATE_FAILED",
              "number": 138
            },
            {
              "name": "ERR_LOGIN_REQ_EXIST",
              "number": 139
            },
            {
              "name": "ERR_GS_NOT_AVAILABLE",
              "number": 140
            },
            {
              "name": "ERR_ACCOUNT_FLOW_EXIST",
              "number": 141
            },
            {
              "name": "ERR_SELECT_ROLE_EXIST",
              "number": 142
            },
            {
              "name": "ERR_SELECT_ROLE_FAILED",
              "number": 143
            },
            {
              "name": "ERR_SCENE_STATE_INVALID",
              "number": 144
            },
            {
              "name": "ERR_SCENE_CHANGING",
              "number": 145
            },
            {
              "name": "ERR_SCENE_CREATE_EXIST",
              "number": 146
            },
            {
              "name": "ERR_LEAVE_SCENE_FAILED",
              "number": 147
            },
            {
              "name": "ERR_FRIEND_FRIEND_IS_FULL",
              "number": 148
            },
            {
              "name": "ERR_FRIEND_BLOCK_IS_FULL",
              "number": 149
            },
            {
              "name": "ERR_FRIEND_INVITE_RECVED_IS_FULL",
              "number": 150
            },
            {
              "name": "ERR_FRIEND_RELATION_NOT_EXIST",
              "number": 151
            },
            {
              "name": "ERR_FRIEND_RELATION_ALREADY_EXIST",
              "number": 152
            },
            {
              "name": "ERR_FRIEND_GIFT_NOT_EXIST",
              "number": 153
            },
            {
              "name": "ERR_FRIEND_GIFT_IN_CD",
              "number": 154
            },
            {
              "name": "ERR_FRIEND_LOCKED",
              "number": 155
            },
            {
              "name": "ERR_FRIEND_ROLE_NOT_FOUND",
              "number": 156
            },
            {
              "name": "ERR_EQUIP_PARTNERLEVEL_LIMIT",
              "number": 157
            },
            {
              "name": "ERR_EQUIP_MAXLEVEL",
              "number": 158
            },
            {
              "name": "ERR_EQUIP_SLOT_MISMATCH",
              "number": 159
            },
            {
              "name": "ERR_QUEST_NOT_EXIST",
              "number": 160
            },
            {
              "name": "ERR_QUEST_NOT_FINISH",
              "number": 161
            },
            {
              "name": "ERR_QUEST_ALREADY_REWARD",
              "number": 162
            },
            {
              "name": "ERR_QUEST_REWARD_TARGET",
              "number": 163
            },
            {
              "name": "ERR_QUEST_REWARD_ITEM",
              "number": 164
            },
            {
              "name": "ERR_QUEST_DAILY_ACTIVE",
              "number": 165
            },
            {
              "name": "ERR_QUEST_DAILY_ACTIVE_MAX",
              "number": 166
            },
            {
              "name": "ERR_FRIEND_SERVER_BUSY",
              "number": 167
            },
            {
              "name": "ERR_FRIEND_ALREADY_FRIEND",
              "number": 168
            },
            {
              "name": "ERR_FREIND_ALREADY_RECVINVITE",
              "number": 169
            },
            {
              "name": "ERR_FRIEND_ALREADY_BLOCK",
              "number": 170
            },
            {
              "name": "ERR_FRIEND_ALREADY_BLOCKED",
              "number": 171
            },
            {
              "name": "ERR_FRIEND_NOT_FRIEND",
              "number": 172
            },
            {
              "name": "ERR_FRIEND_NOT_RECVINVITE",
              "number": 173
            },
            {
              "name": "ERR_FRIEND_NOT_BLOCK",
              "number": 174
            },
            {
              "name": "ERR_FRIEND_FATIGUE_MAX",
              "number": 175
            },
            {
              "name": "ERR_FRIEND_ADD_FATIGUE_ERROR",
              "number": 176
            },
            {
              "name": "ERR_FRIEND_CLIENT_PARAM_ERROR",
              "number": 177
            },
            {
              "name": "ERR_FRIEND_DATA_NOT_READY",
              "number": 178
            },
            {
              "name": "ERR_TEAM_INV_TARGET_IN_BATTLE",
              "number": 179
            },
            {
              "name": "ERR_FREIND_RS_FETCH_FAILED",
              "number": 180
            },
            {
              "name": "ERR_FRIEND_DB_FETCH_FAILED",
              "number": 181
            },
            {
              "name": "ERR_FRIEND_CAN_NOT_OP_SELF",
              "number": 182
            },
            {
              "name": "ERR_FRIEND_PRIVATE_CHAT_ERROR",
              "number": 183
            },
            {
              "name": "ERR_FRIEND_ALREADY_SENDINVITE",
              "number": 184
            },
            {
              "name": "ERR_FRIEND_OP_IN_CD",
              "number": 185
            },
            {
              "name": "ERR_TEAM_INV_NOT_INVITED",
              "number": 186
            },
            {
              "name": "ERR_FRIEND_CONFIG_ERROR",
              "number": 187
            },
            {
              "name": "ERR_FRIEND_ACCEPT_GITF_MAX",
              "number": 188
            },
            {
              "name": "ERR_CHAT_BANNED",
              "number": 189
            },
            {
              "name": "ERR_QUEST_DAILY_REWARD_TIME",
              "number": 190
            },
            {
              "name": "ERR_FRIEND_TARGET_FRIEND_FULL",
              "number": 191
            },
            {
              "name": "ERR_FRIEND_SEND_INVITE_MAX",
              "number": 192
            },
            {
              "name": "ERR_TEAM_INV_TARGET_IN_TEAM",
              "number": 193
            },
            {
              "name": "ERR_TEAM_INV_TARGET_GENERAL_ERROR",
              "number": 194
            },
            {
              "name": "ERR_TEAM_OP_TYPE_NOT_SUPPORT",
              "number": 195
            },
            {
              "name": "ERR_FRIEND_OP_TYPE_NOT_SUPPORT",
              "number": 196
            },
            {
              "name": "ERR_FRIEND_LOAD_CHAT_RECORD_FAIL",
              "number": 197
            },
            {
              "name": "ERR_FREEZE_CURRENCY_3",
              "number": 198
            },
            {
              "name": "ERR_NOT_HALL",
              "number": 199
            },
            {
              "name": "ERR_MAIL_IDEMPOTENCE",
              "number": 200
            },
            {
              "name": "ERR_DDB_BUSY",
              "number": 201
            },
            {
              "name": "ERR_SHOP_NOT_ONSALE",
              "number": 202
            },
            {
              "name": "ERR_SHOP_NOT_ENOUGH_STOCK",
              "number": 203
            },
            {
              "name": "ERR_QUERYLOADING_NOTEXIST",
              "number": 204
            },
            {
              "name": "ERR_QUERYLOADING_FAILED",
              "number": 205
            },
            {
              "name": "ERR_SCENE_CREATE_TIMEOUT",
              "number": 206
            },
            {
              "name": "ERR_SCENE_CHANGE_TIMEOUT",
              "number": 207
            },
            {
              "name": "ERR_FRIEND_RECVER_ALREADY_SUCCESS",
              "number": 208
            },
            {
              "name": "ERR_FRIEND_REDIS_ERROR",
              "number": 209
            },
            {
              "name": "ERR_FRIEND_ALREADY_FOCUS",
              "number": 210
            },
            {
              "name": "ERR_FRIEND_FRIENDSHIP_LOW",
              "number": 211
            },
            {
              "name": "ERR_FRIEND_NO_FOCUS",
              "number": 212
            },
            {
              "name": "ERR_TELEPORT_UNLOCK",
              "number": 213
            },
            {
              "name": "ERR_FRIEND_STRANGER_CHAT_FORBIDDEN",
              "number": 214
            },
            {
              "name": "ERR_TEAM_INV_STRANGER_FORBIDDEN",
              "number": 215
            },
            {
              "name": "ERR_REWARD_CLAIMED",
              "number": 216
            },
            {
              "name": "ERR_SENSITIVE_WORD",
              "number": 217
            },
            {
              "name": "ERR_REPORT_IN_CD",
              "number": 218
            },
            {
              "name": "ERR_LOGIN_SERVER_MAINTENANCE",
              "number": 219
            },
            {
              "name": "ERR_TEAM_INV_TARGET_LEVEL_LIMIT",
              "number": 220
            },
            {
              "name": "ERR_LOGIN_VERSION_TOO_OLD",
              "number": 221
            },
            {
              "name": "ERR_LOGOUT_MAINTENANCE",
              "number": 222
            },
            {
              "name": "ERR_LOGOUT_PUNISHED",
              "number": 223
            }
          ]
        },
        {
          "fullName": "KKSG.FailReason",
          "values": [
            {
              "name": "FailReason_ENone",
              "number": 0
            },
            {
              "name": "Fail_Default",
              "number": 1
            },
            {
              "name": "Fail_Role_AllDie",
              "number": 2
            },
            {
              "name": "Fail_Target_Partner_Die",
              "number": 3
            },
            {
              "name": "Fail_GM",
              "number": 4
            }
          ]
        },
        {
          "fullName": "KKSG.FatigueBuyType",
          "values": [
            {
              "name": "FatigueBuyType_ENone",
              "number": 0
            },
            {
              "name": "BUY_FATIGUE_BY_MONEY",
              "number": 1
            },
            {
              "name": "BUY_FATIGUE_BY_ITEM",
              "number": 2
            }
          ]
        },
        {
          "fullName": "KKSG.FightGroupType",
          "values": [
            {
              "name": "FightEnemy",
              "number": 0
            },
            {
              "name": "FightRole",
              "number": 1
            },
            {
              "name": "FightNeutral",
              "number": 2
            },
            {
              "name": "FightHostility",
              "number": 3
            },
            {
              "name": "FightDummy",
              "number": 10
            }
          ]
        },
        {
          "fullName": "KKSG.FriendExtraRelationType",
          "values": [
            {
              "name": "FriendExtraRelationType_ENone",
              "number": 0
            },
            {
              "name": "FriendExtraRelation_Focusing",
              "number": 1
            },
            {
              "name": "FriendExtraRelation_Focused",
              "number": 2
            }
          ]
        },
        {
          "fullName": "KKSG.FriendRelationType",
          "values": [
            {
              "name": "FriendRelationType_ENone",
              "number": 0
            },
            {
              "name": "FriendRelation_Friend",
              "number": 1
            },
            {
              "name": "FriendRelation_Block",
              "number": 2
            },
            {
              "name": "FriendRelation_Blocked",
              "number": 3
            },
            {
              "name": "FriendRelation_SendInvite",
              "number": 4
            },
            {
              "name": "FriendRelation_RecvInvite",
              "number": 5
            },
            {
              "name": "FriendRelation_RecentChat",
              "number": 6
            },
            {
              "name": "FriendRelation_BlockBlocked",
              "number": 7
            }
          ]
        },
        {
          "fullName": "KKSG.FriendShipType",
          "values": [
            {
              "name": "FriendShipType_ENone",
              "number": 0
            },
            {
              "name": "FriendShip_Chat",
              "number": 1
            },
            {
              "name": "FriendShip_Gift",
              "number": 2
            },
            {
              "name": "FriendShip_Team",
              "number": 3
            }
          ]
        },
        {
          "fullName": "KKSG.FriendSyncType",
          "values": [
            {
              "name": "FriendSyncType_ENone",
              "number": 0
            },
            {
              "name": "FriendSync_NewFriend",
              "number": 1
            },
            {
              "name": "FriendSync_NewInvite",
              "number": 2
            },
            {
              "name": "FriendSync_NewGift",
              "number": 3
            },
            {
              "name": "FriendSync_FocusOnline",
              "number": 4
            },
            {
              "name": "FriendSync_Blocked",
              "number": 5
            },
            {
              "name": "FriendSync_DelFriend",
              "number": 6
            }
          ]
        },
        {
          "fullName": "KKSG.GachaResultType",
          "values": [
            {
              "name": "GachaResultType_ENone",
              "number": 0
            },
            {
              "name": "GachaResultType_Hero",
              "number": 1
            },
            {
              "name": "GachaResultType_Item",
              "number": 2
            },
            {
              "name": "GachaResultType_Total",
              "number": 3
            }
          ]
        },
        {
          "fullName": "KKSG.GachaType",
          "values": [
            {
              "name": "GachaType_ENone",
              "number": 0
            },
            {
              "name": "GachaType_OnePull",
              "number": 1
            },
            {
              "name": "GachaType_TenPull",
              "number": 2
            }
          ]
        },
        {
          "fullName": "KKSG.GraphicsPresetOption",
          "values": [
            {
              "name": "GraphicsPresetOption_ENone",
              "number": 0
            },
            {
              "name": "PowerSaving",
              "number": 1
            },
            {
              "name": "Smooth",
              "number": 2
            },
            {
              "name": "Standard",
              "number": 3
            },
            {
              "name": "Extreme",
              "number": 4
            },
            {
              "name": "Custom",
              "number": 5
            }
          ]
        },
        {
          "fullName": "KKSG.GuildActivityScoreType",
          "values": [
            {
              "name": "GuildActivityScoreType_ENone",
              "number": 0
            },
            {
              "name": "GuildActivityScore_CheckIn",
              "number": 1
            }
          ]
        },
        {
          "fullName": "KKSG.GuildCheckInRewardLevel",
          "values": [
            {
              "name": "GuildCheckInRewardLevel_ENone",
              "number": 0
            },
            {
              "name": "GuildCheckInRewardLevel_Small",
              "number": 1
            },
            {
              "name": "GuildCheckInRewardLevel_Medium",
              "number": 2
            },
            {
              "name": "GuildCheckInRewardLevel_Big",
              "number": 3
            }
          ]
        },
        {
          "fullName": "KKSG.GuildMemberRankType",
          "values": [
            {
              "name": "GuildMemberRankType_ENone",
              "number": 0
            },
            {
              "name": "GuildMemberRank_Leader",
              "number": 1
            },
            {
              "name": "GuildMemberRank_Normal",
              "number": 2
            },
            {
              "name": "GuildMemberRank_Captain",
              "number": 3
            }
          ]
        },
        {
          "fullName": "KKSG.GuildSyncType",
          "values": [
            {
              "name": "GuildSyncType_ENone",
              "number": 0
            },
            {
              "name": "GuildSync_Create",
              "number": 1
            },
            {
              "name": "GuildSync_Join",
              "number": 2
            },
            {
              "name": "GuildSync_NewApply",
              "number": 3
            },
            {
              "name": "GuildSync_Leave",
              "number": 4
            },
            {
              "name": "GuildSync_Loaded",
              "number": 5
            },
            {
              "name": "GuildSync_LeaderLogin",
              "number": 6
            },
            {
              "name": "GuildSync_ChangeSettings",
              "number": 7
            }
          ]
        },
        {
          "fullName": "KKSG.InitSecureConnType",
          "values": [
            {
              "name": "InitSecureConnType_ENone",
              "number": 0
            },
            {
              "name": "InitSecureConn_Login",
              "number": 1
            },
            {
              "name": "InitSecureConn_ReconnectRole",
              "number": 2
            }
          ]
        },
        {
          "fullName": "KKSG.InspireOpt",
          "values": [
            {
              "name": "InspireOpt_ENone",
              "number": 0
            },
            {
              "name": "INSPIRE_WEAR",
              "number": 1
            },
            {
              "name": "INSPIRE_TAKEOFF",
              "number": 2
            },
            {
              "name": "INSPIRE_LEVELUP",
              "number": 3
            },
            {
              "name": "INSPIRE_SURMOUNT",
              "number": 4
            },
            {
              "name": "INSPIRE_REFINE",
              "number": 5
            },
            {
              "name": "INSPIRE_LOCK",
              "number": 6
            },
            {
              "name": "INSPIRE_UNLOCK",
              "number": 7
            }
          ]
        },
        {
          "fullName": "KKSG.ItemOptType",
          "values": [
            {
              "name": "ItemOptType_ENone",
              "number": 0
            },
            {
              "name": "CLEAR_NEW_FLAG",
              "number": 1
            }
          ]
        },
        {
          "fullName": "KKSG.ItemType",
          "values": [
            {
              "name": "ItemType_ENone",
              "number": 0
            },
            {
              "name": "ITEM_TYPE_VIRTUAL",
              "number": 10
            },
            {
              "name": "ITEM_TYPE_EXP",
              "number": 11
            },
            {
              "name": "ITEM_TYPE_FATIGUE",
              "number": 12
            },
            {
              "name": "ITEM_TYPE_INSPIRE_EXP",
              "number": 13
            },
            {
              "name": "ITEM_TYPE_INSPIRE_SURMOUNT",
              "number": 14
            },
            {
              "name": "ITEM_TYPE_SKILL_BREAK",
              "number": 15
            },
            {
              "name": "ITEM_TYPE_SKILL",
              "number": 16
            },
            {
              "name": "ITEM_TYPE_PARTNER_FRAGMENT",
              "number": 17
            },
            {
              "name": "ITEM_TYPE_PARTNER",
              "number": 18
            },
            {
              "name": "ITEM_TYPE_STATIONARY_TREASURE_BOX",
              "number": 20
            },
            {
              "name": "ITEM_TYPE_RANDOM_TREASURE_BOX",
              "number": 21
            },
            {
              "name": "ITEM_TYPE_OPTIONAL_TREASURE_BOX",
              "number": 22
            },
            {
              "name": "ITEM_TYPE_EQUIPMENT",
              "number": 23
            },
            {
              "name": "ITEM_TYPE_EQUIPFRAGMENT",
              "number": 24
            },
            {
              "name": "ITEM_TYPE_EQUIP_EXP",
              "number": 25
            },
            {
              "name": "ITEM_TYPE_EQUIPMENT_SET",
              "number": 26
            },
            {
              "name": "ITEM_TYPE_MATERIAL",
              "number": 30
            },
            {
              "name": "ITEM_TYPE_AVATAR",
              "number": 31
            },
            {
              "name": "ITEM_TYPE_AVATAR_FRAME",
              "number": 32
            },
            {
              "name": "ITEM_TYPE_NAME_CARD",
              "number": 33
            },
            {
              "name": "ITEM_TYPE_CHAT_BUBBLE",
              "number": 34
            },
            {
              "name": "ITEM_TYPE_PLOT",
              "number": 40
            },
            {
              "name": "ITEM_TYPE_INSPIRE",
              "number": 50
            }
          ]
        },
        {
          "fullName": "KKSG.JoystickControlMode",
          "values": [
            {
              "name": "JoystickControlMode_ENone",
              "number": 0
            },
            {
              "name": "JoystickSmart",
              "number": 1
            },
            {
              "name": "JoystickFixed",
              "number": 2
            }
          ]
        },
        {
          "fullName": "KKSG.LeaveSceneType",
          "values": [
            {
              "name": "LeaveSceneType_ENone",
              "number": 0
            },
            {
              "name": "LEAVE_SCENE_NULL",
              "number": 1
            },
            {
              "name": "LEAVE_SCENE_CHANGESCENE",
              "number": 2
            },
            {
              "name": "LEAVE_SCENE_LOGOUT",
              "number": 3
            }
          ]
        },
        {
          "fullName": "KKSG.LoginType",
          "values": [
            {
              "name": "LoginType_ENone",
              "number": 0
            },
            {
              "name": "LOGIN_PASSWORD",
              "number": 1
            },
            {
              "name": "LOGIN_SDK",
              "number": 2
            }
          ]
        },
        {
          "fullName": "KKSG.MailOp",
          "values": [
            {
              "name": "MailOp_ENone",
              "number": 0
            },
            {
              "name": "MAIL_PULL",
              "number": 1
            },
            {
              "name": "MAIL_READ",
              "number": 2
            },
            {
              "name": "MAIL_REWARD",
              "number": 3
            },
            {
              "name": "MAIL_REWARDALL",
              "number": 4
            },
            {
              "name": "MAIL_DELETE",
              "number": 5
            },
            {
              "name": "MAIL_DELETEALL",
              "number": 6
            },
            {
              "name": "MAIL_ADD",
              "number": 7
            },
            {
              "name": "MAIL_STAR",
              "number": 8
            },
            {
              "name": "MAIL_UNSTAR",
              "number": 9
            }
          ]
        },
        {
          "fullName": "KKSG.MailType",
          "values": [
            {
              "name": "MAIL_NONE",
              "number": 0
            },
            {
              "name": "MAIL_SYSTEM",
              "number": 1
            },
            {
              "name": "MAIL_GLOBAL",
              "number": 2
            }
          ]
        },
        {
          "fullName": "KKSG.OpFriendType",
          "values": [
            {
              "name": "OpFriendType_ENone",
              "number": 0
            },
            {
              "name": "OpFriend_SendInvite",
              "number": 1
            },
            {
              "name": "OpFriend_Accept",
              "number": 2
            },
            {
              "name": "OpFriend_Block",
              "number": 3
            },
            {
              "name": "OpFriend_DelFriend",
              "number": 4
            },
            {
              "name": "OpFriend_SendGift",
              "number": 5
            },
            {
              "name": "OpFriend_AcceptGift",
              "number": 6
            },
            {
              "name": "OpFriend_DelBlock",
              "number": 7
            },
            {
              "name": "OpFriend_Reject",
              "number": 10
            },
            {
              "name": "OpFriend_OneKeyGift",
              "number": 11
            },
            {
              "name": "OpFriend_PrivateChat",
              "number": 12
            },
            {
              "name": "OpFriend_DelPrivateChat",
              "number": 13
            },
            {
              "name": "OpFriend_ReadPrivateChat",
              "number": 14
            },
            {
              "name": "OpFriend_Focus",
              "number": 15
            },
            {
              "name": "OpFriend_CancelFocus",
              "number": 16
            }
          ]
        },
        {
          "fullName": "KKSG.OpGuildType",
          "values": [
            {
              "name": "OpGuildType_ENone",
              "number": 0
            },
            {
              "name": "OpGuild_Create",
              "number": 1
            },
            {
              "name": "OpGuild_Join",
              "number": 2
            },
            {
              "name": "OpGuild_RejectApply",
              "number": 4
            },
            {
              "name": "OpGuild_Leave",
              "number": 5
            },
            {
              "name": "OpGuild_SendApply",
              "number": 6
            },
            {
              "name": "OpGuild_ChangeMemberRank",
              "number": 7
            },
            {
              "name": "OpGuild_AcceptApply_One",
              "number": 8
            },
            {
              "name": "OpGuild_AcceptApply_Many",
              "number": 9
            },
            {
              "name": "OpGuild_Kick",
              "number": 10
            }
          ]
        },
        {
          "fullName": "KKSG.OpTeamSourceType",
          "values": [
            {
              "name": "OpTeamSourceType_ENone",
              "number": 0
            },
            {
              "name": "OpTeamSource_TeamMatch",
              "number": 2
            }
          ]
        },
        {
          "fullName": "KKSG.OpTeamType",
          "values": [
            {
              "name": "OpTeamType_ENone",
              "number": 0
            },
            {
              "name": "OpTeam_Create",
              "number": 1
            },
            {
              "name": "OpTeam_Join",
              "number": 2
            },
            {
              "name": "OpTeam_Accept",
              "number": 3
            },
            {
              "name": "OpTeam_Leave",
              "number": 4
            },
            {
              "name": "OpTeam_KickMember",
              "number": 6
            },
            {
              "name": "OpTeam_StartGame",
              "number": 7
            },
            {
              "name": "OpTeam_AgreeGame",
              "number": 8
            },
            {
              "name": "OpTeam_RefuseGame",
              "number": 9
            },
            {
              "name": "OpTeam_PVEMatch",
              "number": 10
            },
            {
              "name": "OpTeam_PVECancelMatch",
              "number": 11
            },
            {
              "name": "OpTeam_ChangePartner",
              "number": 12
            },
            {
              "name": "OpTeam_StartChangePartner",
              "number": 13
            },
            {
              "name": "OpTeam_CancelChangePartner",
              "number": 14
            },
            {
              "name": "OpTeam_ChangeSceneId",
              "number": 15
            },
            {
              "name": "OpTeam_Assemble",
              "number": 16
            },
            {
              "name": "OpTeam_CheckIllegalEnterScene",
              "number": 17
            },
            {
              "name": "OpTeam_SendChat",
              "number": 18
            },
            {
              "name": "OpTeam_SendInvite",
              "number": 19
            },
            {
              "name": "OpTeam_RejectInvite",
              "number": 21
            },
            {
              "name": "OpTeam_RecvInvite",
              "number": 22
            },
            {
              "name": "OpTeam_TestDebug",
              "number": 106
            }
          ]
        },
        {
          "fullName": "KKSG.PartnerOperationType",
          "values": [
            {
              "name": "PartnerOperationType_ENone",
              "number": 0
            },
            {
              "name": "Partner_UpLevel",
              "number": 1
            },
            {
              "name": "Partner_UpStar",
              "number": 2
            },
            {
              "name": "Partner_SetFlag",
              "number": 3
            }
          ]
        },
        {
          "fullName": "KKSG.PartnerTeamOPType",
          "values": [
            {
              "name": "PartnerTeamOPType_ENone",
              "number": 0
            },
            {
              "name": "PartenrTeam_ResetTeam",
              "number": 1
            },
            {
              "name": "PartenrTeam_SwitchTeam",
              "number": 2
            },
            {
              "name": "PartenrTeam_EditTeamName",
              "number": 3
            },
            {
              "name": "PartenrTeam_ResetAndSwitch",
              "number": 4
            }
          ]
        },
        {
          "fullName": "KKSG.PinType",
          "values": [
            {
              "name": "PinType_ENone",
              "number": 0
            },
            {
              "name": "PinType_Float",
              "number": 1
            },
            {
              "name": "PinType_Bool",
              "number": 2
            },
            {
              "name": "PinType_Vec3",
              "number": 3
            },
            {
              "name": "PinType_UINT64",
              "number": 4
            },
            {
              "name": "PinType_Str",
              "number": 5
            },
            {
              "name": "PinType_Int",
              "number": 6
            },
            {
              "name": "PinType_Array",
              "number": 7
            }
          ]
        },
        {
          "fullName": "KKSG.PlayerSettingType",
          "values": [
            {
              "name": "GraphicsPreset",
              "number": 0
            },
            {
              "name": "GraphicsImageQuality",
              "number": 1
            },
            {
              "name": "GraphicsShadowEffects",
              "number": 2
            },
            {
              "name": "GraphicsSceneEffects",
              "number": 3
            },
            {
              "name": "GraphicsFrameEffects",
              "number": 4
            },
            {
              "name": "GraphicsVerticalSync",
              "number": 5
            },
            {
              "name": "GraphicsMotionBlur",
              "number": 6
            },
            {
              "name": "GraphicsReflections",
              "number": 7
            },
            {
              "name": "GraphicsAntiAliasing",
              "number": 8
            },
            {
              "name": "AudioMasterVolume",
              "number": 9
            },
            {
              "name": "AudioMusicVolume",
              "number": 10
            },
            {
              "name": "AudioSFXVolume",
              "number": 11
            },
            {
              "name": "AudioVoiceVolume",
              "number": 12
            },
            {
              "name": "CombatCameraSensitivity",
              "number": 13
            },
            {
              "name": "CombatCameraDistanceNormal",
              "number": 14
            },
            {
              "name": "CombatCameraDistanceCombat",
              "number": 15
            },
            {
              "name": "CombatCameraDistanceParty",
              "number": 16
            },
            {
              "name": "CombatCameraFollow",
              "number": 17
            },
            {
              "name": "CombatDamageFloatsSelf",
              "number": 18
            },
            {
              "name": "CombatDamageFloatsTeammates",
              "number": 19
            },
            {
              "name": "CombatTeammateEffectTransparency",
              "number": 20
            },
            {
              "name": "CombatJoystickControlMode",
              "number": 21
            },
            {
              "name": "SocialShareActivity",
              "number": 22
            },
            {
              "name": "SocialShareCollection",
              "number": 23
            },
            {
              "name": "SocialShareBattleRecords",
              "number": 24
            },
            {
              "name": "ExtraClientWaterMark",
              "number": 25
            },
            {
              "name": "SocialStrangerChatEnabled",
              "number": 26
            },
            {
              "name": "SocialStrangerTeamEnabled",
              "number": 27
            }
          ]
        },
        {
          "fullName": "KKSG.ProfileItemType",
          "values": [
            {
              "name": "ProfileItemType_ENone",
              "number": 0
            },
            {
              "name": "Avatar",
              "number": 1
            },
            {
              "name": "Avatar_Frame",
              "number": 2
            },
            {
              "name": "Card",
              "number": 3
            },
            {
              "name": "Chat_Bubble",
              "number": 4
            },
            {
              "name": "Name",
              "number": 5
            },
            {
              "name": "Signature",
              "number": 6
            },
            {
              "name": "Like_Num",
              "number": 7
            },
            {
              "name": "Activity",
              "number": 8
            },
            {
              "name": "Partner_Data",
              "number": 9
            },
            {
              "name": "Partner_Num",
              "number": 10
            },
            {
              "name": "Enhancement_Num",
              "number": 11
            },
            {
              "name": "Achievement_Num",
              "number": 12
            },
            {
              "name": "Battle_Record",
              "number": 13
            },
            {
              "name": "Rank",
              "number": 14
            }
          ]
        },
        {
          "fullName": "KKSG.ProfileSettingMask",
          "values": [
            {
              "name": "ShareActivity",
              "number": 0
            },
            {
              "name": "ShowCollection",
              "number": 1
            },
            {
              "name": "ShowBattleRecords",
              "number": 2
            }
          ]
        },
        {
          "fullName": "KKSG.ProveGroundOpCode",
          "values": [
            {
              "name": "ProveGroundOpCode_ENone",
              "number": 0
            },
            {
              "name": "ProveGround_OP_Mob",
              "number": 1
            },
            {
              "name": "ProveGround_OP_KillAll",
              "number": 2
            },
            {
              "name": "ProveGround_OP_Reset",
              "number": 3
            },
            {
              "name": "ProveGround_OP_Change_Setting",
              "number": 4
            }
          ]
        },
        {
          "fullName": "KKSG.ProveGroundSetting",
          "values": [
            {
              "name": "ProveGroundSetting_ENone",
              "number": 0
            },
            {
              "name": "ProveGround_Infinite_Power",
              "number": 1
            },
            {
              "name": "ProveGround_Infinite_CD",
              "number": 2
            },
            {
              "name": "ProveGround_Invincible",
              "number": 3
            },
            {
              "name": "ProveGround_AI_Enable",
              "number": 4
            },
            {
              "name": "ProveGround_ModeBK_Enable",
              "number": 5
            }
          ]
        },
        {
          "fullName": "KKSG.QuerySelfGuildType",
          "values": [
            {
              "name": "QuerySelfGuildType_ENone",
              "number": 0
            },
            {
              "name": "QuerySelfGuild_Member",
              "number": 1
            },
            {
              "name": "QuerySelfGuild_Apply",
              "number": 2
            },
            {
              "name": "QuerySelfGuild_Brief",
              "number": 3
            },
            {
              "name": "QuerySelfGuild_CheckIn",
              "number": 4
            }
          ]
        },
        {
          "fullName": "KKSG.QuestRewardType",
          "values": [
            {
              "name": "QuestRewardType_ENone",
              "number": 0
            },
            {
              "name": "QUEST_TARGET_TASK",
              "number": 1
            },
            {
              "name": "QUEST_TARGET",
              "number": 2
            },
            {
              "name": "QUEST_DAYLY_TASK",
              "number": 3
            },
            {
              "name": "QUEST_DAYLY",
              "number": 4
            }
          ]
        },
        {
          "fullName": "KKSG.QuestState",
          "values": [
            {
              "name": "QUEST_LOCKED",
              "number": 0
            },
            {
              "name": "QUEST_ACTIVE",
              "number": 1
            },
            {
              "name": "QUEST_COMPLETED",
              "number": 2
            },
            {
              "name": "QUEST_REWARDED",
              "number": 3
            }
          ]
        },
        {
          "fullName": "KKSG.QuestType",
          "values": [
            {
              "name": "QuestType_ENone",
              "number": 0
            },
            {
              "name": "QuestTarget",
              "number": 1
            },
            {
              "name": "QuestDaily",
              "number": 2
            }
          ]
        },
        {
          "fullName": "KKSG.RecommendFriendType",
          "values": [
            {
              "name": "RecommendFriendType_ENone",
              "number": 0
            },
            {
              "name": "RecommendFriend_Pull",
              "number": 1
            },
            {
              "name": "RecommendFriend_Refresh",
              "number": 2
            }
          ]
        },
        {
          "fullName": "KKSG.RefreshPartnerType",
          "values": [
            {
              "name": "RefreshPartnerType_ENone",
              "number": 0
            },
            {
              "name": "AddPartner",
              "number": 1
            },
            {
              "name": "DeletePartner",
              "number": 2
            },
            {
              "name": "RefreshPartnerData",
              "number": 3
            }
          ]
        },
        {
          "fullName": "KKSG.ReportType",
          "values": [
            {
              "name": "ReportType_ENone",
              "number": 0
            },
            {
              "name": "REPORT_TASK",
              "number": 1
            }
          ]
        },
        {
          "fullName": "KKSG.RoleSceneState",
          "values": [
            {
              "name": "ROLE_SENE_NULL",
              "number": 0
            },
            {
              "name": "ROLE_SCENE_LOADING",
              "number": 1
            },
            {
              "name": "ROLE_SCENE_LOADED",
              "number": 2
            },
            {
              "name": "ROLE_SCENE_IN",
              "number": 3
            },
            {
              "name": "ROLE_SCENE_LEAVE",
              "number": 4
            }
          ]
        },
        {
          "fullName": "KKSG.RoleSwitchType",
          "values": [
            {
              "name": "RoleSwitchType_ENone",
              "number": 0
            },
            {
              "name": "RoleSwitch_Roll",
              "number": 1
            },
            {
              "name": "RoleSwitch_BeHit",
              "number": 2
            },
            {
              "name": "RoleSwitch_Dead",
              "number": 3
            },
            {
              "name": "RoleSwitch_Level",
              "number": 4
            },
            {
              "name": "RoleSwitch_LevelForce",
              "number": 5
            },
            {
              "name": "RoleSwitch_Hall",
              "number": 6
            },
            {
              "name": "RoleSwitch_Team",
              "number": 7
            },
            {
              "name": "RoleSwitch_Skill",
              "number": 8
            },
            {
              "name": "RoleSwitch_Independent",
              "number": 9
            },
            {
              "name": "RoleSwitch_IndependentLeave",
              "number": 10
            }
          ]
        },
        {
          "fullName": "KKSG.SceneChangeType",
          "values": [
            {
              "name": "SceneChangeType_ENone",
              "number": 0
            },
            {
              "name": "SceneChange_Hall",
              "number": 1
            },
            {
              "name": "SceneChange_Continue",
              "number": 2
            },
            {
              "name": "SceneChange_Teleport",
              "number": 3
            }
          ]
        },
        {
          "fullName": "KKSG.SceneFrameFixReason",
          "values": [
            {
              "name": "SceneFrameFixReason_ENone",
              "number": 0
            },
            {
              "name": "FrameFix_StopScene",
              "number": 1
            },
            {
              "name": "FrameFix_LevelRatio",
              "number": 2
            },
            {
              "name": "FrameFix_UnitedSkill",
              "number": 3
            }
          ]
        },
        {
          "fullName": "KKSG.SceneState",
          "values": [
            {
              "name": "SceneState_ENone",
              "number": 0
            },
            {
              "name": "SCENE_INIT",
              "number": 1
            },
            {
              "name": "SCENE_LOADING",
              "number": 2
            },
            {
              "name": "SCENE_READY",
              "number": 3
            },
            {
              "name": "SCENE_RUNNING",
              "number": 4
            },
            {
              "name": "SCENE_END",
              "number": 5
            },
            {
              "name": "SCENE_OVER",
              "number": 6
            }
          ]
        },
        {
          "fullName": "KKSG.SceneType",
          "values": [
            {
              "name": "SceneType_ENone",
              "number": 0
            },
            {
              "name": "SCENE_HALL",
              "number": 1
            },
            {
              "name": "SCENE_MAINSTORY",
              "number": 2
            },
            {
              "name": "SCENE_ELITE",
              "number": 3
            },
            {
              "name": "SCENE_INSPIRATION_SOLO",
              "number": 10
            },
            {
              "name": "SCENE_INSPIRATION_GROUP",
              "number": 11
            },
            {
              "name": "SCENE_EXP_SLO",
              "number": 12
            },
            {
              "name": "SCENE_EXP_GROUP",
              "number": 13
            },
            {
              "name": "SCENE_EQUIP_SLO",
              "number": 14
            },
            {
              "name": "SCENE_EQUIP_GROUP",
              "number": 15
            },
            {
              "name": "SCENE_EXPLORE",
              "number": 16
            },
            {
              "name": "SCENE_TUTORIAL",
              "number": 17
            },
            {
              "name": "SCENE_CHALLENGE_SUPREME",
              "number": 18
            },
            {
              "name": "SCENE_HOBBY_01",
              "number": 19
            },
            {
              "name": "SCENE_PROVE_GROUND",
              "number": 99
            },
            {
              "name": "SCENE_LOGIN",
              "number": 100
            }
          ]
        },
        {
          "fullName": "KKSG.ServerEnvType",
          "values": [
            {
              "name": "SERVER_ENV_PROD",
              "number": 0
            },
            {
              "name": "SERVER_ENV_TEST",
              "number": 1
            }
          ]
        },
        {
          "fullName": "KKSG.ServerState",
          "values": [
            {
              "name": "SERVER_STATE_ONLINE",
              "number": 0
            },
            {
              "name": "SERVER_STATE_MAINTENANCE",
              "number": 1
            }
          ]
        },
        {
          "fullName": "KKSG.ShareKeyGenAlgo",
          "values": [
            {
              "name": "ShareKeyGenAlgo_ENone",
              "number": 0
            },
            {
              "name": "SHA512",
              "number": 1
            }
          ]
        },
        {
          "fullName": "KKSG.SkillChangeType",
          "values": [
            {
              "name": "SkillChangeMove",
              "number": 0
            },
            {
              "name": "SkillChangeBusrt",
              "number": 1
            },
            {
              "name": "SkillChangeTrans",
              "number": 2
            },
            {
              "name": "SkillChangeBuff",
              "number": 10
            },
            {
              "name": "SkillChangeQTE",
              "number": 11
            }
          ]
        },
        {
          "fullName": "KKSG.SkillOpType",
          "values": [
            {
              "name": "SkillOpType_ENone",
              "number": 0
            },
            {
              "name": "Skill_LevelUp",
              "number": 1
            },
            {
              "name": "Skill_LevelDown",
              "number": 2
            },
            {
              "name": "Skill_Break",
              "number": 3
            },
            {
              "name": "Skill_Reset",
              "number": 4
            },
            {
              "name": "Skill_Recommend",
              "number": 5
            }
          ]
        },
        {
          "fullName": "KKSG.SkillTypeEnum",
          "values": [
            {
              "name": "SkillTypePassive",
              "number": 0
            },
            {
              "name": "SkillTypeAttack",
              "number": 1
            },
            {
              "name": "SkillTypeXuli",
              "number": 2
            },
            {
              "name": "SkillTypeSmall",
              "number": 3
            },
            {
              "name": "SkillTypeQTE",
              "number": 4
            },
            {
              "name": "SkillTypeUltra",
              "number": 5
            },
            {
              "name": "SkillTypeDash",
              "number": 6
            },
            {
              "name": "SkillTypeDashA",
              "number": 7
            },
            {
              "name": "SkillTypeLimitDash",
              "number": 8
            },
            {
              "name": "SkillTypeForceDash",
              "number": 9
            },
            {
              "name": "SkillTypeSwitchQTE",
              "number": 10
            },
            {
              "name": "SkillTypeSwitch",
              "number": 11
            },
            {
              "name": "SkillTypeDisSwitch",
              "number": 12
            },
            {
              "name": "SkillTypeBaoQi",
              "number": 13
            },
            {
              "name": "SkillTypeAttackVirtual",
              "number": 14
            },
            {
              "name": "SkillTypeHook",
              "number": 17
            },
            {
              "name": "SkillTypeExecute",
              "number": 18
            },
            {
              "name": "SkillTypeCharge",
              "number": 19
            },
            {
              "name": "SkillTypeDestruction",
              "number": 20
            }
          ]
        },
        {
          "fullName": "KKSG.SpecialTeamID",
          "values": [
            {
              "name": "SpecialTeamID_ENone",
              "number": 0
            },
            {
              "name": "TemporaryTeam",
              "number": 10
            },
            {
              "name": "TeamMaxSize",
              "number": 11
            }
          ]
        },
        {
          "fullName": "KKSG.SwitchSceneType",
          "values": [
            {
              "name": "ChangeScene_NULL",
              "number": 0
            },
            {
              "name": "ChangeScene_Client",
              "number": 1
            },
            {
              "name": "ChangeScene_GS",
              "number": 2
            },
            {
              "name": "ChangeScene_Team",
              "number": 3
            },
            {
              "name": "ChangeScene_World",
              "number": 4
            },
            {
              "name": "ChangeScene_Match",
              "number": 5
            }
          ]
        },
        {
          "fullName": "KKSG.SystemHintOpCode",
          "values": [
            {
              "name": "SystemHintOpCode_ENone",
              "number": 0
            },
            {
              "name": "SYSTEM_HINT_OP_VIEW",
              "number": 1
            }
          ]
        },
        {
          "fullName": "KKSG.SystemHintState",
          "values": [
            {
              "name": "SystemHintState_ENone",
              "number": 0
            },
            {
              "name": "SYSTEM_HINT_NOT_VIEWED",
              "number": 1
            },
            {
              "name": "SYSTEM_HINT_VIEWED",
              "number": 2
            },
            {
              "name": "SYSTEM_HINT_REMOVED",
              "number": 3
            }
          ]
        },
        {
          "fullName": "KKSG.SystemIDEnum",
          "values": [
            {
              "name": "SystemIDEnum_ENone",
              "number": 0
            },
            {
              "name": "System_Chapter",
              "number": 10
            },
            {
              "name": "System_Chapter_Normal",
              "number": 11
            },
            {
              "name": "System_Chapter_Hard",
              "number": 12
            },
            {
              "name": "System_Character",
              "number": 100
            },
            {
              "name": "System_Inspiration",
              "number": 101
            },
            {
              "name": "System_SkillTalent",
              "number": 102
            },
            {
              "name": "System_LevelUp",
              "number": 103
            },
            {
              "name": "System_Equip",
              "number": 104
            },
            {
              "name": "System_UpStar",
              "number": 105
            },
            {
              "name": "System_Target",
              "number": 111
            },
            {
              "name": "System_Daily",
              "number": 112
            },
            {
              "name": "System_Teleport",
              "number": 201
            }
          ]
        },
        {
          "fullName": "KKSG.TaskStatus",
          "values": [
            {
              "name": "UNINIT",
              "number": 0
            },
            {
              "name": "IN_PROGRESS",
              "number": 1
            },
            {
              "name": "COMPLETED",
              "number": 2
            },
            {
              "name": "REWARDED",
              "number": 3
            },
            {
              "name": "TASK_FAILED",
              "number": 4
            }
          ]
        },
        {
          "fullName": "KKSG.TeamJoinSourceType",
          "values": [
            {
              "name": "TeamJoinSourceType_ENone",
              "number": 0
            },
            {
              "name": "TeamJoinSource_Create",
              "number": 1
            },
            {
              "name": "TeamJoinSource_Manual",
              "number": 2
            },
            {
              "name": "TeamJoinSource_FriendInvite",
              "number": 3
            },
            {
              "name": "TeamJoinSource_Match",
              "number": 4
            }
          ]
        },
        {
          "fullName": "KKSG.TeamLevelOpt",
          "values": [
            {
              "name": "TeamLevelOpt_ENone",
              "number": 0
            },
            {
              "name": "TeamLevel_Reward",
              "number": 1
            },
            {
              "name": "TeamLevel_Effect",
              "number": 2
            }
          ]
        },
        {
          "fullName": "KKSG.TeamMatchSourceType",
          "values": [
            {
              "name": "TeamMatchSourceType_ENone",
              "number": 0
            },
            {
              "name": "TeamMatchSource_Dungeon",
              "number": 1
            },
            {
              "name": "TeamMatchSource_Lobby",
              "number": 2
            }
          ]
        },
        {
          "fullName": "KKSG.TeamMemberBattleStateType",
          "values": [
            {
              "name": "TeamMemberBattleStateType_ENone",
              "number": 0
            },
            {
              "name": "TeamMemberBattleState_Normal",
              "number": 1
            },
            {
              "name": "TeamMemberBattleState_Dead",
              "number": 2
            },
            {
              "name": "TeamMemberBattleState_LeaveBattle",
              "number": 3
            },
            {
              "name": "TeamMemberBattleState_SessionClose",
              "number": 4
            }
          ]
        },
        {
          "fullName": "KKSG.TeamMemberStateType",
          "values": [
            {
              "name": "TeamMemberStateType_ENone",
              "number": 0
            },
            {
              "name": "TeamMemberState_Normal",
              "number": 1
            },
            {
              "name": "TeamMemberState_ChangingPartner",
              "number": 2
            },
            {
              "name": "TeamMemberState_AgreedGame",
              "number": 3
            },
            {
              "name": "TeamMemberState_LoadingScene",
              "number": 5
            },
            {
              "name": "TeamMemberState_InBattle",
              "number": 6
            }
          ]
        },
        {
          "fullName": "KKSG.TeamStateType",
          "values": [
            {
              "name": "TeamStateType_ENone",
              "number": 0
            },
            {
              "name": "TeamState_Invalid",
              "number": 1
            },
            {
              "name": "TeamState_Normal",
              "number": 2
            },
            {
              "name": "TeamState_Voting",
              "number": 3
            },
            {
              "name": "TeamState_LoadingScene",
              "number": 4
            },
            {
              "name": "TeamState_InBattle",
              "number": 5
            },
            {
              "name": "TeamState_ChangingSceneId",
              "number": 6
            },
            {
              "name": "TeamState_SceneEnd",
              "number": 7
            }
          ]
        },
        {
          "fullName": "KKSG.TeamSyncType",
          "values": [
            {
              "name": "TeamSyncType_ENone",
              "number": 0
            },
            {
              "name": "TeamSync_TeamCreate",
              "number": 1
            },
            {
              "name": "TeamSync_TeamDisband",
              "number": 2
            },
            {
              "name": "TeamSync_MemberJoin",
              "number": 3
            },
            {
              "name": "TeamSync_MemberLeave",
              "number": 4
            },
            {
              "name": "TeamSync_LeaderChange",
              "number": 5
            },
            {
              "name": "TeamSync_BeKicked",
              "number": 6
            },
            {
              "name": "TeamSync_StartGame",
              "number": 7
            },
            {
              "name": "TeamSync_RefuseGame",
              "number": 8
            },
            {
              "name": "TeamSync_StartGameTimeOut",
              "number": 9
            },
            {
              "name": "TeamSync_AgreeGame",
              "number": 10
            },
            {
              "name": "TeamSync_StartChangePartner",
              "number": 11
            },
            {
              "name": "TeamSync_ChangePartner",
              "number": 12
            },
            {
              "name": "TeamSync_CancelChangePartner",
              "number": 13
            },
            {
              "name": "TeamSync_ChangeSceneId",
              "number": 14
            },
            {
              "name": "TeamSync_FatigueChange",
              "number": 15
            },
            {
              "name": "TeamSync_Reconnect",
              "number": 16
            },
            {
              "name": "TeamSync_BackToHall",
              "number": 17
            },
            {
              "name": "TeamSync_LeaveBattleScene",
              "number": 18
            },
            {
              "name": "TeamSync_ClearRobot",
              "number": 19
            },
            {
              "name": "TeamSync_SceneTeamEmpty",
              "number": 20
            },
            {
              "name": "TeamSync_SceneEnd",
              "number": 21
            },
            {
              "name": "TeamSync_StartBattle",
              "number": 22
            },
            {
              "name": "TeamSync_EnterSceneFail",
              "number": 23
            },
            {
              "name": "TeamSync_Assemble",
              "number": 24
            },
            {
              "name": "TeamSync_RejectInvite",
              "number": 25
            },
            {
              "name": "TeamSync_RecvInvite",
              "number": 27
            }
          ]
        },
        {
          "fullName": "KKSG.ThreeChoiceOption",
          "values": [
            {
              "name": "ThreeChoiceOption_ENone",
              "number": 0
            },
            {
              "name": "OptionLow",
              "number": 1
            },
            {
              "name": "OptionMedium",
              "number": 2
            },
            {
              "name": "OptionHigh",
              "number": 3
            }
          ]
        },
        {
          "fullName": "KKSG.TimerType",
          "values": [
            {
              "name": "TimerType_ENone",
              "number": 0
            },
            {
              "name": "Timer_LevelTimeLimit",
              "number": 1
            }
          ]
        },
        {
          "fullName": "KKSG.TriggerObjectStateType",
          "values": [
            {
              "name": "TriggerObjectStateType_ENone",
              "number": 0
            },
            {
              "name": "TriggerObjectState_Null",
              "number": 1
            }
          ]
        },
        {
          "fullName": "KKSG.UIShowType",
          "values": [
            {
              "name": "UIShowType_ENone",
              "number": 0
            },
            {
              "name": "SHOW_POPVIEW_TYPE",
              "number": 1
            },
            {
              "name": "SHOW_UNFOLD_TYPE",
              "number": 2
            },
            {
              "name": "SHOW_IMPORTANT_TYPE",
              "number": 3
            }
          ]
        },
        {
          "fullName": "KKSG.UnitStateType",
          "values": [
            {
              "name": "UNIT_STATE_FREEZE",
              "number": 0
            },
            {
              "name": "UNIT_STATE_PUPPET",
              "number": 1
            },
            {
              "name": "UNIT_STATE_DONT_SHOW_BAN_ICON",
              "number": 2
            },
            {
              "name": "UNIT_STATE_NOINPUT",
              "number": 3
            }
          ]
        },
        {
          "fullName": "KKSG.UpdateRoleTeamType",
          "values": [
            {
              "name": "UpdateRoleTeamType_ENone",
              "number": 0
            },
            {
              "name": "UpdateRoleTeam_Kick",
              "number": 1
            },
            {
              "name": "UpdateRoleTeam_KeepAlive",
              "number": 2
            },
            {
              "name": "UpdateRoleTeam_ChangeSceneId",
              "number": 3
            },
            {
              "name": "UpdateRoleTeam_SendInvite",
              "number": 4
            }
          ]
        },
        {
          "fullName": "KKSG.VivoxAction",
          "values": [
            {
              "name": "VivoxAction_ENone",
              "number": 0
            },
            {
              "name": "VivoxAction_Login",
              "number": 1
            },
            {
              "name": "VivoxAction_Join",
              "number": 2
            },
            {
              "name": "VivoxAction_JoinMuted",
              "number": 3
            },
            {
              "name": "VivoxAction_Kick",
              "number": 4
            },
            {
              "name": "VivoxAction_Mute",
              "number": 5
            },
            {
              "name": "VivoxAction_Trxn",
              "number": 6
            }
          ]
        },
        {
          "fullName": "KKSG.VoiceChannelType",
          "values": [
            {
              "name": "VoiceChannel_All",
              "number": 0
            },
            {
              "name": "VoiceChannel_World",
              "number": 1
            },
            {
              "name": "VoiceChannel_Team",
              "number": 2
            },
            {
              "name": "VoiceChannel_Guild",
              "number": 3
            }
          ]
        }
      ]
    };
  if (typeof window !== 'undefined') {
    window.b3e = window.b3e || {};
    window.b3e.protocolCatalog = catalog;
  }

  angular
    .module('app')
    .value('protocolCatalogData', catalog);
})();
