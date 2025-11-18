import {themes as prismThemes} from "prism-react-renderer";
import type {Config} from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const siteName = "HarukaYamamoto0";
const siteUrl = "https://harukadev.com";
const siteDescription =
    "Android & backend developer. Kotlin, Jetpack Compose, Ktor/Node.js. Articles about code, architecture, and real-world projects.";

const config: Config = {
    title: siteName,
    tagline: "Android & backend developer — Kotlin, Compose & Ktor/Node.js",
    favicon: "/img/cube.svg",

    future: {v4: true},
    url: siteUrl,
    baseUrl: "/",

    organizationName: "HarukaYamamoto0",
    projectName: "portfolio",

    onBrokenLinks: "warn",
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

                    blogTitle: "Oh My Blog — Android & Backend",
                    blogDescription:
                        "Technical articles about Android, Kotlin, Jetpack Compose, Ktor, Node.js, architecture and backend development.",
                    postsPerPage: 10,
                    feedOptions: {
                        title: "Oh My Blog — Android & Backend",
                        description:
                            "RSS feed of articles about Android, Kotlin, Jetpack Compose, Ktor, Node.js, architecture and backend development.",
                        xslt: true,
                        type: "all",
                        copyright: `© ${new Date().getFullYear()} HarukaYamamoto0 — crafted with caffeine & code.`,
                    },
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
                sitemap: {
                    changefreq: "weekly",
                    priority: 0.7,
                    ignorePatterns: ["/tags/**"],
                    filename: "sitemap.xml",
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
                {to: "/projects", label: "Projects", position: "left"},
                {to: "/blog", label: "Blog", position: "left"},
                {to: "/aboutme", label: "About Me", position: "left"},
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
                            label: "TabNews App",
                            href: "https://github.com/HarukaYamamoto0/tabnews-app",
                        },
                        {
                            label: "Alcyone",
                            href: "https://github.com/HarukaYamamoto0/alcyone",
                        },
                        {
                            label: "Linko",
                            href: "https://github.com/HarukaYamamoto0/Linko",
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

        // Social sharing (Open Graph default image)
        image: "/img/og-image.png",

        metadata: [
            {name: "theme-color", content: "#0a0a0a"},
            {name: "description", content: siteDescription},
            {
                name: "keywords",
                content:
                    "Android developer, backend developer, Kotlin, Jetpack Compose, Ktor, Node.js, REST APIs, clean architecture, software engineering blog",
            },
            {name: "author", content: "HarukaYamamoto0"},
            // Open Graph
            {property: "og:site_name", content: siteName},
            {property: "og:type", content: "website"},
            {property: "og:title", content: `${siteName} — Android & Backend`},
            {property: "og:description", content: siteDescription},
            {property: "og:url", content: siteUrl},
            {property: "og:image", content: `${siteUrl}/img/og-image.png`},
            // Twitter
            {name: "twitter:card", content: "summary_large_image"},
            {
                name: "twitter:title",
                content: `${siteName} — Android & Backend`,
            },
            {
                name: "twitter:description",
                content: siteDescription,
            },
            {name: "twitter:image", content: `${siteUrl}/img/og-image.png`},
            {name: "twitter:creator", content: "@HarukaYamamoto0"},
            {name: "twitter:site", content: "@HarukaYamamoto0"},
        ],
    } satisfies Preset.ThemeConfig,
};

export default config;
