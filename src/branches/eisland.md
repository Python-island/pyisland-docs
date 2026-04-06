---
title: eIsland
icon: star
order: 5
---

# eIsland

::: info
**eIsland** 是一个基于 Electron + React + TypeScript 构建的 Apple Dynamic Island 风格 Windows 桌面小组件，专注于实时显示天气、歌词、计时器、系统工具快捷操作等功能。
:::

## 技术栈

- **Electron**: 跨平台桌面应用框架
- **React 19**: UI 组件库
- **TypeScript**: 类型安全的前端开发
- **Vite**: 快速构建工具
- **TailwindCSS**: 原子化 CSS 框架

## 功能列表

### 核心功能

- ✅ 胶囊状悬浮窗设计（Dynamic Island 风格）
- ✅ 实时时间显示
- ✅ 鼠标悬浮展开/移开收缩动画
- ✅ 系统托盘集成

### 媒体功能

- ✅ 歌词显示（支持多平台）
- ✅ 媒体控制（上一曲/播放/下一曲）
- ✅ SMTC (System Media Transport Controls) 集成

### 实用功能

- ✅ 天气实时显示
- ✅ 计时器功能
- ✅ 快捷启动工具
- ✅ 倒数日管理
- ✅ 剪贴板监控
- ✅ 全局快捷键支持

### 系统功能

- ✅ WiFi 连接/断开通知
- ✅ 蓝牙设备连接通知
- ✅ 电池状态监控

## 界面预览

### 1. 总览界面

总览界面展示天气、时间、快捷操作入口。

### 2. 歌曲界面

歌曲界面显示当前播放音乐的歌词和播放控制。

### 3. 快捷启动编辑界面

支持自定义添加常用应用和工具快捷方式。

### 4. 倒数日编辑界面

可自定义目标日期，显示距目标的倒计时。

### 5. 设置界面

提供主题、快捷键、通知等个性化配置选项。

## 项目结构

```
eIsland/
├── src/
│   ├── main/                # 主进程代码
│   ├── preload/            # 预加载脚本
│   ├── renderer/            # 渲染进程 (React)
│   │   ├── components/      # React 组件
│   │   ├── styles/          # 样式文件
│   │   └── utils/           # 工具函数
│   └── shared/              # 共享类型定义
├── resources/
│   └── icon/                # 应用图标
├── scripts/                 # 构建脚本
├── electron-builder.json    # 打包配置
├── electron.vite.config.ts  # Vite 配置
├── package.json
└── tsconfig.json
```

## 安装运行

```bash
# 克隆仓库
git clone https://github.com/JNTMTMTM/eIsland.git
cd eIsland

# 安装依赖
npm install

# 开发模式
npm run dev

# 构建安装包
npm run package
```

构建产物位于 `dist/` 目录，包含可执行的 `.exe` 安装包。

## 构建产物

| 类型 | 路径 |
|------|------|
| 安装包 | `dist/` 目录下的 `.exe` 文件 |

## 适用人群

::: tip
- 追求现代化 UI 设计的用户
- 喜欢 Electron + React 技术栈的开发者
- 需要灵动岛风格桌面小组件的用户
:::

## 许可证

::: info
本项目采用 **GNU General Public License v3.0 (GPLv3)** 或更高版本发布。

根据 GPLv3 第 7 节(b) 款，添加了有限的附加条款，要求在所有副本、修改版本以及程序显示的 Appropriate Legal Notices 中保留以下作者署名信息：

- Copyright (C) 2026-present JNTMTMTM (https://github.com/JNTMTMTM)
- Copyright (C) 2026-present pyisland.com (https://pyisland.com)
:::

## 特点对比

| 特性 | pyisland-wanku | tauri-island | eIsland |
|------|----------------|--------------|---------|
| 性能 | 较快 | 极快 | 快 |
| 技术栈 | Python + PySide6 | Rust + Tauri 2 | Electron + React |
| UI 风格 | iOS 仿真 | 原生高效 | 现代 Web 风格 |
| 安装包大小 | 较大 | 极小 | 中等 |
| 可扩展性 | 高 | 中 | 高 |

## 相关链接

- [GitHub 仓库](https://github.com/JNTMTMTM/eIsland)
- [PyIsland 官网](https://pyisland.com)