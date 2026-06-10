/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: 'Guide',
      items: [
        'guide/concepts',
        'guide/node-types',
        'guide/custom-nodes',
        'guide/import-export',
      ],
    },
    'changelog',
  ],
};

module.exports = sidebars;
