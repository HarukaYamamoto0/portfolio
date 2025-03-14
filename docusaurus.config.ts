import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { stripIndent } from "common-tags";

const config: Config = {
  title: "HarukaYamamoto0 Blog",
  tagline: "I'm just a programmer in search of my evolution",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://harukadev.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "HarukaYamamoto0", // Usually your GitHub org/user name.
  projectName: "portfolio", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pt-br",
    locales: ["en", "pt-br"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
        calendar: "gregory",
      },
      "pt-br": {
        label: "Português",
        direction: "ltr",
        htmlLang: "pt-br",
        calendar: "gregory",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/HarukaYamamoto0/portfolio",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        pages: {
          path: "src/pages",
          routeBasePath: "",
          include: ["**/*.{js,jsx,ts,tsx,md,mdx}"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
          mdxPageComponent: "@theme/MDXPage",
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },
        docs: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/banner-for-meta-tags.jpg",
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "HarukaYamamoto0",
      logo: {
        alt: "My Site",
        src: "img/cube.svg",
      },
      items: [
        {
          label: "Projects",
          to: "/projects",
          position: "left",
        },
        {
          label: "Blog",
          to: "/blog",
          position: "left",
        },
        {
          type: "localeDropdown",
          position: "right",
          queryString: "?persistLocale=true",
        },
        {
          href: "https://github.com/HarukaYamamoto0",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Projects",
          items: [
            {
              label: "TabNews",
              href: "https://github.com/HarukaYamamoto0/tabnews-app",
            },
            {
              label: "Basner",
              href: "https://github.com/HarukaYamamoto0/Basner",
            },
            {
              label: "Luminit",
              href: "https://github.com/HarukaYamamoto0/Luminit",
            },
            {
              label: "Merope",
              href: "https://github.com/HarukaYamamoto0/Merope",
            },
          ],
        },
        {
          title: "My Social Networks",
          items: [
            {
              label: "TabNews",
              href: "https://www.tabnews.com.br/HarukaYamamoto0",
            },
            {
              label: "Discord",
              href: "https://discord.com/users/822819247146663936",
            },
            {
              label: "Email",
              href: "mailto:harukayamamotodev@gmail.com",
            },
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/in/harukayamamoto0",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Projects",
              to: "/projects",
            },
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/HarukaYamamoto0/",
            },
          ],
        },
      ],
      copyright: "Copyright © 2024 HarukaYamamoto0, Built with Docusaurus.",
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  customFields: {
    nickname: "HarukaYamamoto0",
    meta: {
      title: "HarukaYamamoto0 - haruka.dev",
      description: stripIndent`
      I'm just a programmer looking to evolve.
      Check out my website to see my blog, portfolio and other cool stuff`,
    },
  },
};

export default config;
