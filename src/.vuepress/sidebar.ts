import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/guide/": [
    {
      text: "使用指南",
      icon: "book",
      children: [
        "/guide/",
        "/guide/ncm-music",
        "/guide/pyislandPyside6",
        "/guide/tauri-island",
        "/guide/eisland",
        "/guide/features",
      ],
    },
    {
      text: "github教程~",
      icon: "book",
      children: [
        "/guide/github/connect.md",
        "/guide/github/accounts.md",
        "/guide/github/functions.md",
        "/guide/github/issues.md",
      ],
    },
  ],
  "/develop/": [
    {
      text: "开发指南",
      icon: "code",
      children: [
        "/develop/",
        "/develop/contribution",
      ],
    },
  ],
  "/branches/": [
    {
      text: "分支版本",
      icon: "code-branch",
      children: [
        "/branches/",
        "/branches/pyislandPyside6",
        "/branches/pyislandQT",
        "/branches/tauri-island",
        "/branches/pyisland-wanku",
        "/branches/eisland"
      ],
    },
  ],
});
