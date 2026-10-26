export type ThemeName = "anime" | "professional";

export const THEME_STORAGE_KEY = "laug-home-theme";

export const SITE = {
  name: "LAUG的小屋",
  shortName: "LAUG.ROOM",
  description:
    "LAUG的小屋——laug（千咲酱）的个人主页，记录动漫、科技数码、旅行摄影与最新作品。",
} as const;

export const IMAGES = {
  avatar: "/images/touxiang.jpg",
  cover1: "/images/cover1.jpg",
  cover2: "/images/cover2.jpg",
  cover3: "/images/cover3.jpg",
  githubAvatar: "/images/github-avatar.png",
} as const;

export const LINKS = {
  bilibili: "https://b23.tv/c9zpmaL",
  github: "https://github.com/Chisalaug",
  githubProject: "https://github.com/Chisalaug/dsh-codex-boot-guide",
  youtube: "https://youtube.com/@jl-3-v9q?si=CuUm15UXGBHzoXxy",
} as const;

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const PHOTOS: Photo[] = [
  {
    src: "/images/photography/photo-1.jpg",
    alt: "旅行摄影作品 1",
    width: 1440,
    height: 1920,
  },
  {
    src: "/images/photography/photo-2.jpg",
    alt: "旅行摄影作品 2",
    width: 1440,
    height: 1920,
  },
  {
    src: "/images/photography/photo-3.jpg",
    alt: "旅行摄影作品 3",
    width: 1440,
    height: 1920,
  },
  {
    src: "/images/photography/photo-4.jpg",
    alt: "旅行摄影作品 4",
    width: 1600,
    height: 2133,
  },
  {
    src: "/images/photography/photo-5.jpg",
    alt: "旅行摄影作品 5",
    width: 1080,
    height: 1440,
  },
  {
    src: "/images/photography/photo-6.jpg",
    alt: "旅行摄影作品 6",
    width: 1596,
    height: 2124,
  },
];

export type Video = {
  title: string;
  views: string;
  href: string;
  cover: string;
  coverAlt: string;
};

export const VIDEOS: Video[] = [
  {
    title: "你醒了？现在是2024年",
    views: "50万",
    href: "https://b23.tv/B19pOl7",
    cover: "/images/cover1.jpg",
    coverAlt: "视频封面：你醒了？现在是2024年",
  },
  {
    title: "为什么你看动漫会哭啊...",
    views: "233万",
    href: "https://b23.tv/XjYWsMS",
    cover: "/images/cover2.jpg",
    coverAlt: "视频封面：为什么你看动漫会哭啊...",
  },
  {
    title: "回到你梦开始的地方",
    views: "148万",
    href: "https://b23.tv/8FYuhgh",
    cover: "/images/cover3.jpg",
    coverAlt: "视频封面：回到你梦开始的地方",
  },
];

export const GITHUB_PROFILE = {
  name: "Chisalaug",
  avatar: "/images/github-avatar.png",
  avatarAlt: "Chisalaug 的 GitHub 头像",
  href: "https://github.com/Chisalaug",
} as const;

export const GITHUB_PROJECT = {
  title: "DSH Codex 启动动画移植指南",
  description: "DSH Codex 启动动画移植指南（DSH 用 GPT 启动动画）",
  href: "https://github.com/Chisalaug/dsh-codex-boot-guide",
  image: "/images/github-avatar.png",
  imageAlt: "DSH Codex 启动动画移植指南项目",
} as const;

export const FRIENDS = [
  { name: "玖宇yu", href: "https://b23.tv/djTvxZd" },
  { name: "薛定谔の哆啦酱", href: "https://b23.tv/JRJDUuR" },
  { name: "晨叶梦春", href: "https://b23.tv/vqLxGAw" },
  { name: "学姐圆", href: "https://b23.tv/7mvEQQz" },
] as const;

export const CONTACT = {
  qq: "2930836472",
  email: "yanzuw100@gmail.com",
  youtube: "https://youtube.com/@jl-3-v9q?si=CuUm15UXGBHzoXxy",
  qqGroup: "1070072593",
} as const;

export const INTRO =
  "你好呀，我是 laug，也可以叫我千咲酱。平时喜欢动漫，也喜欢折腾科技数码产品，偶尔带着相机去旅游摄影，把路上的光影和风景随手记下来。目前是一名动漫区UP主，正在慢慢把喜欢的事情做好。希望这间小屋能让你感到轻松，也欢迎常来坐坐。";

export const NAV_ITEMS = [
  { id: "bilibili", label: "B站" },
  { id: "github", label: "GitHub" },
  { id: "photography", label: "旅拍" },
  { id: "about", label: "关于" },
  { id: "friends", label: "友链" },
  { id: "contact", label: "联系" },
] as const;
