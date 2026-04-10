---
title: tauri-island
icon: sitemap
order: 1
---
:::warning
该文档待提交图片教程
:::
# tauri-island
本文档为tauri-island分支教程,功能介绍见[tauri-island](/branches/tauri-island.html)

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
支持三种捕获方式,**歌词捕获流程从上到下,失败则尝试下一方式**
### 1.smtc流派提取
:::warning
该方式仅支持网易云音乐
:::
该捕获方式命中率百分百,如果无法获取到歌词请考虑网易云版本;
#### 开启方式:
- 安装插件,[教程点我](/guide/ncm-music.html)
- 设置中开启本功能 名称为"SMTC命中(网易云)"

### 2.内置rust api
源码实现见[lyricify-lyrics-provider-rs](https://github.com/cXp1r/lyricify-lyrics-provider-rs)
流程:进程匹配对应api,通过smtc信息搜索并获取歌词
**原生支持 汽水音乐,网易云音乐,QQ音乐. 暂不支持酷狗音乐(时间轴失效)**
:::tip
如果 **原生支持** 中的播放器**时间轴,歌词切换失效**,那么可以考虑**更新**播放器
:::
#### 开启方式:
- 设置中开启本功能 名称为"Rust API"
### 3.聚合api搜索
兜底的,只能凑合看了
#### 开启方式:
- 默认开启,无需操作



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
