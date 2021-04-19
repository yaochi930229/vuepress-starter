module.exports = {
  head: [["link", { rel: "icon", href: "/ts-logo.jpg" }]],
  base: "/vuepress-starter/",
  dest: "dist",
  title: "TypeScript 入门",
  description: "学习使用 TypeScript",
  themeConfig: {
    sidebar: [
      {
        title: "初识 TypeScript",
        collapsable: false,
        children: ["chapter1/01_初识TS"],
      },
    ],
    nav: [
      {
        text: "TypeScript 笔记",
        link: "/chapter1/01_初识TS",
      },
    ],
  },
};