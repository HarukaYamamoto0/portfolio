import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "harukadev",
  tagline: "Why commit suicide when you can program?",
  favicon: "/img/cube.svg",

  future: { v4: true },
  url: "https://harukadev.com",
  baseUrl: "/",

  organizationName: "harukadev",
  projectName: "portfolio",

  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: {
          showReadingTime: true,
          blogSidebarTitle: "All articles",
          blogSidebarCount: "ALL",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",

          blogTitle: "Oh My Blog",
          blogDescription:
            "All my articles that I've ever created are here. I wish I had a library...",
          postsPerPage: 10,
          feedOptions: {
            title: "Oh My Blog",
            description:
              "All my articles that I've ever created are here. I wish I had a library...",
            xslt: true,
            type: "all",
            copyright: `© ${new Date().getFullYear()} HarukaYamamoto0 — crafted with caffeine & code.`,
          },
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // GOTH aesthetic dark-only setup
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    // Minimalist Navbar
    navbar: {
      title: "HarukaYamamoto0",
      logo: {
        alt: "HarukaYamamoto0 cube logo",
        src: "img/cube.svg",
        width: 32,
        height: 32,
      },
      hideOnScroll: true,
      items: [
        { to: "/projects", label: "Projects", position: "left" },
        { to: "/blog", label: "Blog", position: "left" },
        { to: "/aboutme", label: "About Me", position: "left" },
        {
          href: "https://github.com/HarukaYamamoto0",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    headTags: [
      {
        tagName: "link",
        attributes: {
          rel: "preload",
          href: "/fonts/inter/Inter_18pt-Regular.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
      },
      {
        tagName: "link",
        attributes: {
          rel: "preload",
          href: "/fonts/jetbrains-mono/JetBrainsMono-Regular.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
      },
    ],

    // Lean and elegant footer
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
              label: "Linko",
              href: "https://github.com/HarukaYamamoto0/Linko",
            },
            {
              label: "Alcyone",
              href: "https://github.com/HarukaYamamoto0/alcyone",
            },
          ],
        },
        {
          title: "My Social Networks",
          items: [
            {
              label: "Linkedin",
              href: "https://www.linkedin.com/in/harukayamamoto0",
            },
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
            {
              label: "About Me",
              to: "/aboutme",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} HarukaYamamoto0 — crafted with caffeine & code.`,
    },

    // Prism + code highlighting
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["kotlin", "bash", "json", "bash"],
    },

    // Social sharing **/
    image: "img/og-image.png",

    // Meta aesthetic — gradients and glow
    metadata: [
      { name: "theme-color", content: "#0a0a0a" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "HarukaYamamoto0 — Android & Backend" },
      {
        name: "twitter:description",
        content: "Kotlin, Compose, and backend alchemy.",
      },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
