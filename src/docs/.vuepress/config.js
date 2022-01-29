module.exports = {
  title: "Paulina Szymaszek",
  description: "My personal page",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "../docs",

  themeConfig: {
    search: false,
    navbar: false,
    lastUpdated: "Last Updated",
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: (md) => {
      md.use(require("markdown-it-katex"));
    },
  },
};
