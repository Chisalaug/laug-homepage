# LAUG的小屋

## 项目简介

LAUG的小屋是 laug（千咲酱）的个人主页，使用 Next.js 14 构建，包含 B站最新作品、GitHub 项目、旅行摄影、自我介绍、推荐UP主和联系方式。整站静态生成，支持二次元 / 专业双主题、欢迎页、滚动与卡片动效。

- SEO 标题：`LAUG的小屋`
- 全静态导出：`output: "export"`
- 不使用服务端 API、Route Handler 或 Server Action
- 不配置远程图片域名，所有内容图片位于 `public/images`
- 所有网页外链在新窗口打开，并带有 `rel="noopener noreferrer"`

## 技术栈

- Next.js 14（App Router）
- React 18
- Tailwind CSS 3
- Framer Motion 11
- next-themes 0.4
- TypeScript

## 本地运行

```bash
npm install
npm run dev
```

打开 <http://localhost:3000>。

## 本地构建

```bash
npm run build
```

静态产物会生成到 `out/`。项目没有服务端接口，`out/` 可以直接部署到任意静态托管。

可选地本地预览静态产物：

```bash
python -m http.server 4173 --directory out
```

然后访问 <http://127.0.0.1:4173>。

## Vercel 部署步骤

1. 将项目推送到 GitHub。确保仓库根目录能看到 `package.json`，且 `public/images` 完整。
2. 登录 [Vercel](https://vercel.com)，选择 **Add New → Project**，导入对应 GitHub 仓库。
3. 使用默认的 **Next.js** Framework Preset：
   - Root Directory：`.`（仓库根目录）
   - Install Command：`npm install`
   - Build Command：`npm run build`
   - Output Directory：留空，Vercel 会自动识别静态导出结果；若界面要求填写，填 `out`
   - Environment Variables：不需要
4. 点击 **Deploy**，等待构建完成。
5. 打开 Vercel 域名，检查首页、`/images` 图片、B站外链和移动端展示。

> 本项目使用 `output: "export"`，不需要 Vercel Serverless Functions。

## 手机 GitHub 上传注意事项

> 一句话：不要上传 `node_modules` 和 `.next`；必须保留 `package-lock.json`、`public/images`、所有源码和配置文件。

- **不要上传 `node_modules` 和 `.next`**：它们是依赖与构建缓存，体积大且可在 Vercel 重新生成。
- **必须保留 `package-lock.json`**，确保 Vercel 使用的依赖版本一致。
- **必须保留完整的 `public/images`**，不能漏掉 `photography/photo-1.jpg` 到 `photo-6.jpg`、视频封面、头像和 `icon.svg`。
- **必须上传所有源码**：`app/`、`components/`、`lib/`。
- **必须上传所有配置文件**：`package.json`、`next.config.mjs`、`tailwind.config.ts`、`postcss.config.mjs`、`tsconfig.json`、`.gitignore`。
- `out/`、`.next/` 和 `node_modules/` 都是生成物，可以不传；但源码、配置与图片必须完整。
- 使用 GitHub 网页或手机客户端上传后，先检查仓库根目录是否有 `package.json`，再导入 Vercel。

## 素材映射表

| 源文件 | 项目路径 | 用途 |
| --- | --- | --- |
| `图片素材/touxiang.jpg` | `public/images/touxiang.jpg` | 欢迎页背景与头像、自我介绍 |
| `图片素材/封面1.jpg` | `public/images/cover1.jpg` | 视频《你醒了？现在是2024年》封面 |
| `图片素材/封面2.jpg` | `public/images/cover2.jpg` | 视频《为什么你看动漫会哭啊...》封面 |
| `图片素材/封面3.jpg` | `public/images/cover3.jpg` | 视频《回到你梦开始的地方》封面 |
| `图片素材/GitHub头像.png` | `public/images/github-avatar.png` | GitHub 主页与项目卡片 |
| `图片素材/摄影模块/Camera_XHS_1792985570976notes_pre_post_1040g3k831uqagmj52ab05p653qr2p3la6egmai0.jpg` | `public/images/photography/photo-1.jpg` | 旅拍作品 1 |
| `图片素材/摄影模块/Camera_XHS_1792985576414notes_pre_post_1040g3k831uqagmj52a9g5p653qr2p3labj6plrg.jpg` | `public/images/photography/photo-2.jpg` | 旅拍作品 2 |
| `图片素材/摄影模块/Camera_XHS_1792985578668notes_pre_post_1040g3k831uqagmj52a905p653qr2p3lanvqvor8.jpg` | `public/images/photography/photo-3.jpg` | 旅拍作品 3 |
| `图片素材/摄影模块/Image_1792985336030_102.jpg` | `public/images/photography/photo-4.jpg` | 旅拍作品 4 |
| `图片素材/摄影模块/Image_1792985384073_53.jpg` | `public/images/photography/photo-5.jpg` | 旅拍作品 5 |
| `图片素材/摄影模块/IMG_20261026_113208.jpg` | `public/images/photography/photo-6.jpg` | 旅拍作品 6 |
| 项目图标 | `public/images/icon.svg` | 浏览器图标 |

所有素材只做了复制与重命名，未修改原始图片。`github-avatar.png` 的实际编码为 JPEG，但浏览器可正常显示；按“不修改素材”的要求保留原文件。

## 项目结构

```text
app/
  globals.css              主题、布局、动画与 reduced-motion 样式
  layout.tsx               根布局、next-themes、SEO 元数据
  page.tsx                 静态首页入口
components/
  home-experience.tsx      欢迎页 → 主页流程
  welcome-screen.tsx       全屏欢迎页与主题入口
  home-page.tsx            主页六个内容模块
  external-link-card.tsx   视频 / 项目卡片动画与外链跳转
  copy-button.tsx          QQ / QQ群复制按钮
  photography-gallery.tsx  随机摄影网格
  lightbox.tsx             摄影灯箱
  theme-switcher.tsx       二次元 / 专业主题切换
  site-header.tsx          顶部导航
  section-reveal.tsx       滚动进入动画
  section-heading.tsx      模块标题
  theme-provider.tsx       next-themes Provider
  icons.tsx                内联 SVG 图标
lib/
  site.ts                  外链、视频、项目、友链、联系方式和图片路径
  utils.ts                 通用工具
public/images/             所有内容图片
```

## 内容与行为

- 每次打开页面先显示欢迎页；两个按钮分别进入二次元主题和专业主题。
- 顶部主题切换只改变视觉样式，不返回欢迎页；两套主题正文内容完全一致。
- 主题通过 next-themes 持久化到 localStorage。
- 视频和项目卡片点击后先播放缩放/展开动画，再打开目标外链。
- 摄影模块每次页面加载随机排列 6 张图片，点击打开灯箱。
- QQ、QQ群号码可一键复制。
- 所有动画尊重 `prefers-reduced-motion`。
- 移动端无横向滚动，图片自适应容器。

## 外链清单

- B站主页：<https://b23.tv/c9zpmaL>
- 视频 1：<https://b23.tv/B19pOl7>
- 视频 2：<https://b23.tv/XjYWsMS>
- 视频 3：<https://b23.tv/8FYuhgh>
- GitHub：<https://github.com/Chisalaug>
- 项目：<https://github.com/Chisalaug/dsh-codex-boot-guide>
- 友链：<https://b23.tv/djTvxZd>、<https://b23.tv/JRJDUuR>、<https://b23.tv/vqLxGAw>、<https://b23.tv/7mvEQQz>
- YouTube：<https://youtube.com/@jl-3-v9q?si=CuUm15UXGBHzoXxy>
