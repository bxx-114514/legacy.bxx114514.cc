import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/navigation",
  "/comments",
  {
    text: "分类",
    icon: "folder",
    prefix: "posts/",
    children: [
      {
        text: "文章分类",
        children: [
          {
            text: "所有文章",
            link: "/posts/"
          },
          {
            text: "i 鸣相关",
            link: "/posts/iming/"
          },
          {
            text: "仙舟联盟",
            link: "/posts/xzlm/"
          },
          {
            text: "《原神》和媒体",
            link: "/posts/genshinimpact-media/"
          },
          {
            text: "AC",
            link: "/posts/ibili-blog/"
          },
          {
            text: "i 鬼",
            link: "/posts/igui/"
          }
        ]
      }
    ]
  },
  "/intro",
  {
    text: "订阅",
    icon: "rss",
    children: [
      {
        text: "RSS",
        link: "https://legacy.bxx114514.cc/rss.xml"
      },
      {
        text: "Atom",
        link: "https://legacy.bxx114514.cc/atom.xml"
      },
      {
        text: "Feed",
        link: "https://legacy.bxx114514.cc/feed.json"
      },
      {
        text: "Sitemap",
        link: "https://legacy.bxx114514.cc/sitemap.xml"
      },
    ]
  },
]);
