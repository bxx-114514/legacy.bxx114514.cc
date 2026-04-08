import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

const isNetlify = process.env.NETLIFY_CNAME;

export default hopeTheme({
  hostname: isNetlify ? 'https://bxx114514.netlify.app' : 'https://bxx-114514.github.io/',

  author: {
    name: "천화(天華)SRSH",
    url: "https://bxx114514.cc/",
  },

  logo: "/logo.png",

  repo: "bxx-114514/bxx-114514.github.io",

  docsDir: "src",
  docsRepo: "bxx-114514/bxx-114514.github.io",
  docsBranch: "main",

  fullscreen: true,

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "Powered by VuePress-Theme-Hope",
  displayFooter: true,

  // 博客相关
  blog: {
    avatar: "/Citlali.jpg",
    name: "천화(天華)SRSH",
    description: "新的节奏若要萌芽，它的大脑须是死的。",
    intro: "/intro.html",
    medias: {
      BiliBili: "https://space.bilibili.com/626140137",
      Email: "mailto:bxx-114514@outlook.com",
      Telegram: "https://t.me/bxx_114514",
      QQ: "https://qm.qq.com/q/1uKRrF0dba",
      GitHub: "https://github.com/bxx-114514",
      Gmail: "mailto:tzhong072@gmail.com",
      Instagram: "https://www.instagram.com/bxx_114514/",
      Twitter: "https://x.com/bxx_114514",
      Weibo: "https://weibo.com/u/7847016698",
      XiaoHongShu: "https://www.xiaohongshu.com/user/profile/67f387fa000000000d009f9d",
      Youtube: "https://www.youtube.com/@bxx-ii4514",
      VuePressThemeHope: {
        icon: "https://theme-hope-assets.vuejs.press/logo.svg",
        link: "https://theme-hope.vuejs.press/zh/",
      },
    },
  },

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": {
        hint: "Password: 1234",
        password: "1234",
      },
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    alert: true,
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    hint: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // 取消注释它们如果你需要 TeX 支持
    // math: {
    //   // 启用前安装 katex
    //   type: "katex",
    //   // 或者安装 mathjax-full
    //   type: "mathjax",
    // },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    // 在启用之前安装 chart.js
    // chartjs: true,

    // insert component easily

    // 在启用之前安装 echarts
    // echarts: true,

    // 在启用之前安装 flowchart.ts
    // flowchart: true,

    // 在启用之前安装 mermaid
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // 在启用之前安装 @vue/repl
    // vuePlayground: true,

    // 在启用之前安装 sandpack-vue3
    // sandpack: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,
    search: true,
    seo: true,
    pwa: true,
    feed: {
      rss: true,
      atom: true,
      json: true,
    },

    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    comment: {
      provider: "Waline",
      serverURL: "https://bxx-waline.netlify.app/.netlify/functions/comment",
      dark: "auto",
      reaction: true,
      requiredMeta: ["nick", "mail"],
      emoji: [
        "https://unpkg.com/@waline/emojis@1.1.0/bmoji",
        "https://unpkg.com/@waline/emojis@1.1.0/weibo",
        "https://unpkg.com/@waline/emojis@1.1.0/alus",
        "https://unpkg.com/@waline/emojis@1.1.0/bilibili",
        "https://unpkg.com/@waline/emojis@1.1.0/qq",
        "https://unpkg.com/@waline/emojis@1.1.0/tieba",
        "https://unpkg.com/@waline/emojis@1.1.0/tw-emoji",
        "https://unpkg.com/@waline/emojis@1.4.0/hoyoverse-hi3",
        "https://emoji.shojo.cn/bili/webp/乖巧宝宝",
        "https://emoji.shojo.cn/bili/webp/乖巧宝宝%20清凉一夏",
        "https://emoji.shojo.cn/bili/webp/原神",
        "https://emoji.shojo.cn/bili/webp/原神-须弥",
        "https://emoji.shojo.cn/bili/webp/原神·巡林奇遇",
        "https://emoji.shojo.cn/bili/webp/崩坏：星穹铁道",
        "https://emoji.shojo.cn/bili/webp/崩坏3",
        "https://emoji.shojo.cn/bili/webp/崩坏3·光辉矢愿",
        "https://emoji.shojo.cn/bili/webp/崩坏3·天穹流星",
        "https://emoji.shojo.cn/bili/webp/崩坏3·终焉归始",
        "https://emoji.shojo.cn/bili/webp/崩坏3·雷鸣彻空",
        "https://emoji.shojo.cn/bili/webp/崩坏学园2",
        "https://emoji.shojo.cn/bili/webp/明日方舟",
        "https://emoji.shojo.cn/bili/webp/明日方舟音律联觉",
        "https://emoji.shojo.cn/bili/webp/明日方舟·音律联觉-灯下定影",
        "https://emoji.shojo.cn/bili/webp/我的世界",
        "https://emoji.shojo.cn/bili/webp/罗小黑战记",
        "https://emoji.shojo.cn/bili/webp/2233娘",
      ],
    },

    // comment: {
      // 选择一个评论服务
      // provider: "Giscus",
      // 服务选项
      // repo: "bxx-114514/bxx-114514.github.io",
      // repoId: "R_kgDOP7K8Qg",
      // category: "Announcements",
      // categoryId: "DIC_kwDOP7K8Qs4CwLTE"
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
