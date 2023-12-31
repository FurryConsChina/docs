import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "FEC·兽展日历 文档",
  tagline: "Who is your favorite fearless hero?🎵",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.furryeventchina.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "FurCoder", // Usually your GitHub org/user name.
  projectName: "furry-event-china-docs", // Usually your repo name.

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
      title: "FEC Docs",
      logo: {
        alt: "FEC Logo",
        src: "https://images.furryeventchina.com/logo_800x800.png",
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
          href: "https://github.com/FurCoder/furry-event-china-docs",
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
              label: "FEC·兽展日历 国际站",
              to: "https://www.furryeventchina.com",
            },
            {
              label: "FEC·兽展日历 大陆站",
              to: "https://www.furrycons.cn",
            },
          ],
        },
        {
          title: "社区",
          items: [
            // {
            //   label: "Stack Overflow",
            //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
            // },
            {
              label: "Discord",
              href: "https://discord.gg/5k8S56c3Xp",
            },
            // {
            //   label: "Twitter",
            //   href: "https://twitter.com/docusaurus",
            // },
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
              href: "https://github.com/FurCoder/furry-event-china-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FurryEventChina, Inc. Built with Docusaurus、🍜 and ❤️。`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
