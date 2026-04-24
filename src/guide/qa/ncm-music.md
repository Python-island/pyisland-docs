---
title: 歌词识别
icon: mdi:music
order: 1
---

# ncm-music
:::tip
本项目**代码**所有音乐功能**均未违反音乐厂商条款**,**也与厂商无关**
:::

## 歌词识别无效
- 支持该功能的分支: **eisland**,**tauri-island**
- 高精度匹配: 
  qq音乐
  汽水音乐
  网易云音乐
  酷狗音乐(开发中)
- 低精度匹配
  Apple Music
  Spotify
  酷我音乐
- 解决办法: ***网易云音乐用户请按照下文安装插件***
### 网易云歌词显示插件安装
点击[BetterNCM](https://std.microblock.cc/betterncm)下载
:::tip 提示
图片可以点击放大查看
:::
![官网](/ncm-music/1.png)
<div style="display:flex; align-items:center; gap:20px;">

  <div style="flex:1;">
    打开<strong>betterncm_installer.exe</strong>文件,详见右图
    <br>
    点击<strong>安装</strong>
    <br>
    安装成功后自动弹出网易云音乐界面
    

  </div>

  <img 
    src="/ncm-music/2.png" 
    style="width:320px; box-shadow:0 4px 12px rgba(0,0,0,0.1);" 
  />
  

</div>


<br>
<br>

<div style="display:flex; align-items:center; gap:20px;">

  <div style="flex:1;">
    回到<strong>网易云音乐</strong>，打开 BetterNCM 插件管理页面
    <br>
    安装InfLink-rs插件
  </div>

  <div style="display:flex; flex-direction:column; gap:10px;">
    <img src="/ncm-music/4.png" style="width:360px;padding-bottom:10px" />
    <div style="width:360px;border-top:1px solid black;padding-bottom:10px"></div>
    <img src="/ncm-music/5.png" style="width:360px;" />
  </div>

</div>


#### 若网易云插件市场一直转圈,请看此处
可能是指向了旧的仓库地址,点击[此处](https://github.com/cXp1r/betterncm_fix/releases/tag/v0.1.0)后查看指引下载并允许betterncm_fix.exe实现修复,

### 检查SMTC协议
如果还是识别不到,需要考虑使用[SMTCBox](https://github.com/cXp1r/SMTCBox-rs/releases/tag/v26.1.0)判断SMTC协议是否正常

## 歌词显示有延迟
正常现象,0延迟不可能通过合法途径实现
同时,tauri分支在前奏时,不会显示后面的歌词,也不会显示曲目元信息
