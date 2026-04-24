---
title: tauri-island
icon: sitemap
order: 1
---
:::warning
该文档待提交图片教程
:::
# tauri-island
本文档为 **tauri-island(高性能)** 分支教程,功能介绍见[tauri-island](/branches/tauri-island.html)

## 展开触发
页面结构
:::info
|名称|操作|备注|
|---|---|---|
|默认|覆盖展开|鼠标移至**最上方**时展开,拖动**回弹**|
|音乐|单点查看详情|**仅在**捕获到音乐播放时支持切换|
|Ai|单点展开聊天|需要在**设置里面配置**,[下文有介绍](#ai-配置)|
:::

**切换页面都是双击切换,如默认页至ai页,默认页至音乐页**

## 歌词捕获
源码实现见[lyricify-lyrics-provider-rs](https://github.com/cXp1r/lyricify-lyrics-provider-rs)
流程:进程匹配对应api,通过smtc信息搜索并获取歌词
**原生支持** *汽水音乐,QQ音乐* **插件支持** *网易云音乐* **暂不支持** *酷狗音乐(无时间轴)*
:::tip
如果 **原生支持** 中的播放器**时间轴,歌词切换失效**,那么可以考虑**更新**播放器
:::




## 黑名单设置
:::warning
该功能依赖win32api,可能被杀毒软件爆毒
必须精确到进程名字
:::
可根据进程实现自动隐藏防挡
默认会识别主流浏览器防挡

## 日志&配置路径
硬编码路径:%appdata%\dynamic-island

:::tip
如需反馈bug,请提供路径**%appdata%\dynamic-island\log**下最后一篇日志
例:island_1775838435105.log,**结尾数字越大说明越新**
:::

## AI 配置

:::tip 提示
AI 部分兼容 OpenAI API 接入设计
:::

:::tip 提供商
千问、智谱都是支持的，笔者采用qwen
:::
