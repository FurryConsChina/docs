import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "兽展日历 文档",
  tagline: "Who is your favorite fearless hero?🎵",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.furrycons.cn",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: "FurryConsChina", // Usually your GitHub org/user name.
  // projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: "最近文章",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-SBEQ5GHN20",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "FCC Docs",
      logo: {
        alt: "FCC Logo",
        src: "https://images.furrycons.cn/logo_800x800.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "文档",
        },
        { to: "/blog", label: "博客", position: "left" },
        {
          href: "https://github.com/FurryConsChina/docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "任意门",
          items: [
            {
              label: "兽展日历",
              to: "https://www.furrycons.cn",
            },
          ],
        },
        {
          title: "社区",
          items: [
            {
              label: "QQ群 630572929",
              href: "https://qm.qq.com/q/yIpHnyHg5y",
            },
            {
              label: "Discord",
              href: "https://discord.gg/5k8S56c3Xp",
            },
          ],
        },
        {
          title: "更多",
          items: [
            // {
            //   label: "Blog",
            //   to: "/blog",
            // },
            {
              label: "GitHub",
              href: "https://github.com/FurryConsChina",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FurryConsChina, Inc. Built with Docusaurus、🍜 and ❤️。`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["json"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
