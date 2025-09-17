export default defineNuxtConfig({
    devtools: { enabled: true },

    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content',
        '@nuxtjs/i18n',
        '@vueuse/nuxt'
    ],

    i18n: {
        locales: [
            {
                code: 'de',
                iso: 'de-DE',
                name: 'Deutsch',
                file: 'de.json'
            },
            {
                code: 'en',
                iso: 'en-US',
                name: 'English',
                file: 'en.json'
            }
        ],
        defaultLocale: 'de',
        langDir: 'locales/',
        strategy: 'prefix_except_default',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root'
        }
    },

    content: {
        locales: ['de', 'en'],
        defaultLocale: 'de'
    },

    css: ['~/assets/css/main.css'],

    app: {
        head: {
            title: 'GRAVON Projektbau - Planen. Bauen. Vollenden.',
            htmlAttrs: {
                lang: 'de'
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'GRAVON Projektbau - Ihr Partner für schlüsselfertige Projekte mit Substanz. Generalunternehmen für Bau- und Immobilienprojekte.'
                },
                { name: 'format-detection', content: 'telephone=no' },
                { property: 'og:site_name', content: 'GRAVON Projektbau' },
                { property: 'og:type', content: 'website' },
                { name: 'twitter:card', content: 'summary_large_image' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
            ]
        }
    },

    nitro: {
        prerender: {
            routes: ['/sitemap.xml']
        }
    },

    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.gravon.de'
        }
    }
})