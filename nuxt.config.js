require("dotenv").config();

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    target: "static",
    head: {
        title: "chill club - listen to music and chill",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { name: "robots", content: "index, follow" },
            {
                hid: "description",
                name: "description",
                content: "select your mood and listen to songs that fit your mood",
            },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["@/assets/styles/main.scss"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: false,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        "@nuxtjs/eslint-module",
        // https://go.nuxtjs.dev/stylelint
        "@nuxtjs/stylelint-module",
        "@nuxtjs/style-resources",
        "@nuxtjs/pwa",
        "@nuxtjs/svg",
        [
            "@nuxtjs/google-analytics",
            {
                id: process.env.GOOGLE_ID,
            },
        ],
    ],
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        "@nuxtjs/sitemap",
        [
            "nuxt-font-loader-strategy",
            {
                ignoreLighthouse: true,
                ignoredEffectiveTypes: ["2g", "slow-2g"],
                fonts: [
                    // Font
                    {
                        fileExtensions: ["woff2", "woff"],
                        fontFamily: "RobotoSlab",
                        fontFaces: [
                            // Font-Face
                            {
                                preload: true,
                                src: "@/assets/fonts/RobotoSlab-Regular",
                                fontWeight: 400,
                                fontStyle: "normal",
                            },
                        ],
                    },
                ],
            },
        ],
    ],

    sitemap: {
        hostname: "https://chill-club.vercel.app/",
        gzip: true,
    },
    // module settings
    styleResources: {
        scss: ["@/assets/styles/_query.scss"],
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        minimize: true,
        optimizeCSS: true,
        html: {
            minify: {
                collapseBooleanAttributes: true,
                decodeEntities: true,
                minifyCSS: true,
                minifyJS: true,
                processConditionalComments: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                trimCustomFragments: true,
                useShortDoctype: true,
                preserveLineBreaks: false,
                collapseWhitespace: true,
            },
        },
    },
};
