// @ts-check
const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Behavior3 Editor',
  tagline: 'A visual editor for designing Behavior Trees',
  favicon: 'img/favicon.ico',

  url: 'https://henrytien.github.io',
  baseUrl: '/behavior-tree-editor/',

  organizationName: 'henrytien',
  projectName: 'behavior-tree-editor',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // SEO: generate sitemap
  trailingSlash: false,

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'behavior tree, behavior3, game AI, editor, behavior tree editor, AI, agent, finite state machine',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'henrytien',
      },
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/henrytien/behavior-tree-editor/edit/master/website/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        gtag: undefined,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'description', content: 'Behavior3 Editor is an open source visual tool to create and design Behavior Trees for games, simulations and robotics. Maintained fork with bug fixes and new features.'},
        {property: 'og:image', content: 'https://henrytien.github.io/behavior-tree-editor/img/og-image.png'},
      ],
      navbar: {
        title: 'Behavior3 Editor',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mainSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/henrytien/behavior-tree-editor',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // Algolia DocSearch — uncomment after receiving keys from:
      // https://docsearch.algolia.com/apply/
      //
      // algolia: {
      //   appId: 'YOUR_APP_ID',
      //   apiKey: 'YOUR_SEARCH_API_KEY',
      //   indexName: 'behavior-tree-editor',
      //   contextualSearch: true,
      //   searchPagePath: 'search',
      // },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Introduction', to: '/docs/' },
              { label: 'Getting Started', to: '/docs/getting-started' },
            ],
          },
          {
            title: 'Project',
            items: [
              { label: 'GitHub', href: 'https://github.com/henrytien/behavior-tree-editor' },
              { label: 'Issues', href: 'https://github.com/henrytien/behavior-tree-editor/issues' },
              { label: 'Releases', href: 'https://github.com/henrytien/behavior-tree-editor/releases' },
            ],
          },
        ],
        copyright: `Copyright ${new Date().getFullYear()} henrytien. Originally created by Renato de Pontes Pereira. Built with Docusaurus.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
        additionalLanguages: ['json', 'bash', 'javascript', 'python'],
      },
    }),
};

module.exports = config;
