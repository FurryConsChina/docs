import { defineConfig } from "blume";
import { googleAnalytics } from "blume/analytics";
import { openapi } from "blume/reference";
import { orama } from "blume/search";

export default defineConfig({
  title: "兽展日历文档",
  description:
    "兽展日历开放平台文档、项目动态与品牌资料，帮助开发者快速接入中国兽展数据。",
  logo: {
    image: "/logo.svg",
    text: "兽展日历·文档",
    href: "/",
  },
  content: {
    root: ".",
    include: ["docs/**/*.{md,mdx}", "blog/**/*.{md,mdx}"],
  },
  reference: [
    openapi({
      route: "/docs",
      sources: [
        {
          label: "开发文档",
          spec: "https://api.furrycons.cn/open/docs/openapi.json",
          overlays: ["./overlays/production.yaml"],
          seoDescriptionSuffix: false,
        },
      ],
    }),
  ],
  github: {
    owner: "FurCoder",
    repo: "furry-event-china-docs",
    branch: "main",
  },
  i18n: {
    defaultLocale: "zh-CN",
    locales: [
      {
        code: "zh-CN",
        label: "简体中文",
      },
    ],
    hideDefaultLocalePrefix: true,
  },
  lastModified: "git",
  feedback: false,
  dateFormat: {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Asia/Shanghai",
  },
  theme: {
    accent: {
      light: "#ef5b68",
      dark: "#ff8490",
    },
    action: "#e94859",
    radius: "lg",
    mode: "system",
  },
  navigation: {
    tabs: [
      { label: "开发文档", path: "/docs", icon: "book-open" },
      { label: "博客", path: "/blog", icon: "newspaper" },
    ],
    featured: [
      {
        label: "兽展日历",
        href: "https://www.furrycons.cn",
        icon: "calendar",
      },
      {
        label: "开放平台",
        href: "https://dashboard.furrycons.cn",
        icon: "layout-dashboard",
      },
      {
        label: "开发者反馈群",
        href: "https://qm.qq.com/q/Q59CdSxP0S",
        icon: "message-circle",
      },
    ],
    sidebar: {
      display: "group",
    },
  },
  search: orama(),
  analytics: [googleAnalytics({ id: "G-SBEQ5GHN20" })],
  markdown: {
    imageZoom: true,
    code: {
      icons: true,
      wrap: false,
    },
  },
  agents: {
    llmsTxt: true,
  },
  seo: {
    og: { enabled: true },
    rss: { enabled: true, types: ["blog"] },
    sitemap: true,
    robots: true,
    structuredData: true,
  },
  deployment: {
    site: "https://docs.furrycons.cn",
  },
  redirects: [
    { from: "/docs/intro", to: "/docs", status: 308 },
    { from: "/docs/api/event/list", to: "/docs/活动/list-open-events", status: 308 },
    { from: "/docs/api/event/recent", to: "/docs/活动/list-recent-open-events", status: 308 },
    { from: "/docs/api/event/detail", to: "/docs/活动/get-open-event", status: 308 },
    { from: "/docs/api/event/recent_old", to: "/docs/legacy/recent", status: 308 },
    { from: "/reference", to: "/docs", status: 308 },
    { from: "/reference/活动/list-open-events", to: "/docs/活动/list-open-events", status: 308 },
    { from: "/reference/活动/list-recent-open-events", to: "/docs/活动/list-recent-open-events", status: 308 },
    { from: "/reference/活动/get-open-event", to: "/docs/活动/get-open-event", status: 308 },
    { from: "/reference/组织/get-open-organization", to: "/docs/组织/get-open-organization", status: 308 },
  ],
});
