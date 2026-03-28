import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/guide/": [
    {
      text: "使用指南",
      icon: "book",
      children: [
        "/guide/",
        "/guide/pyislandPyside6",
        "/guide/tauri-island",
        "/guide/features",
      ],
    },
  ],
  "/develop/": [
    {
      text: "开发指南",
      icon: "code",
      children: [
        "/develop/architecture",
        "/develop/contribution",
      ],
    },
  ],
  "/branches/": [
    {
      text: "分支版本",
      icon: "code-branch",
      children: [
        "/branches/overview",
        "/branches/pyislandPyside6",
        "/branches/pyislandQT",
        "/branches/tauri-island",
        "/branches/pyisland-wanku"
      ],
    },
  ],
});
