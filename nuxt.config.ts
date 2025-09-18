// nuxt.config.ts - Vereinfachte Version zur Fehlerbehebung
export default defineNuxtConfig({
    devtools: { enabled: true },

    // Enhanced modules configuration
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@vueuse/nuxt', '@nuxtjs/sitemap'],

    // CSS Configuration
    css: [
        '~/assets/css/main.css'
    ],

    experimental: {
        payloadExtraction: false,
        viewTransition: true
    },

    // Enhanced i18n configuration
    i18n: {
        defaultLocale: 'de',
        locales: [
            {
                code: 'de',
                iso: 'de-DE',
                name: 'Deutsch',
                file: 'de.json',
                dir: 'ltr'
            },
            {
                code: 'en',
                iso: 'en-US',
                name: 'English',
                file: 'en.json',
                dir: 'ltr'
            },
            {
                code: 'es',
                iso: 'es-ES',
                name: 'Español',
                file: 'es.json',
                dir: 'ltr'
            }
        ],
        lazy: true,
        langDir: 'locales/',
        strategy: 'prefix_except_default',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
            alwaysRedirect: false,
            fallbackLocale: 'de'
        },
        compilation: {
            strictMessage: false
        },
        vueI18n: './i18n.config.ts'
    },

    // Enhanced app configuration
    app: {
        head: {
            htmlAttrs: {
                lang: 'de'
            },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'GRAVON Projektbau - Plan. Build. Complete.',
            meta: [
                { name: 'description', content: 'GRAVON Projektbau - Ihr zuverlässiger Partner für schlüsselfertige Projekte mit Substanz.' },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'theme-color', content: '#f59e0b' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' }
            ],
            script: [
                {
                    type: 'text/javascript',
                    src: 'https://cdn.consentmanager.net/delivery/autoblocking/ed0afd57427d4.js',
                    'data-cmp-ab': '1',
                    'data-cmp-host': 'a.delivery.consentmanager.net',
                    'data-cmp-cdn': 'cdn.consentmanager.net',
                    'data-cmp-codesrc': '16'
                }
            ]
        }
    },

    // Enhanced runtime configuration
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://gravon-projektbau.de',
            gtag: {
                id: process.env.NUXT_GTAG_ID || ''
            }
        }
    },

    // Enhanced build configuration for better static generation
    nitro: {
        prerender: {
            routes: [
                '/',
                '/en',
                '/services',
                '/en/services',
                '/es/services',
                '/projects',
                '/en/projects',
                '/es/projects',
                '/about',
                '/en/about',
                '/es/about',
                '/contact',
                '/en/contact',
                '/es/contact',
                '/imprint',
                '/en/imprint',
                '/es/imprint',
                '/privacy',
                '/en/privacy',
                '/es/privacy',
                '/terms',
                '/en/terms',
                '/es/terms',
                '/sitemap.xml'
            ],
            crawlLinks: true
        },
        compressPublicAssets: true,
    },

    // Enhanced SSR configuration
    ssr: true,

    // Build optimization
    build: {
        transpile: ['gsap'] // Ensure GSAP is properly transpiled
    },

    // Simplified Vite configuration
    vite: {
        css: {
            devSourcemap: true
        },
        optimizeDeps: {
            include: ['gsap', 'vue-router'],
        },
        server: {
            fs: {
                strict: false,
            }
        }
    },

    // TypeScript configuration
    typescript: {
        strict: false,
        typeCheck: false
    },

    // Plugin configuration
    plugins: [
        '~/plugins/gsap.client.js',
        '~/plugins/gtag.client.js',
        '~/plugins/accessibility.client.js'
    ],

    // Security headers
    routeRules: {
        // Hauptseiten prerendern
        '/': { prerender: true },
        '/services': { prerender: true },
        '/projects': { prerender: true },
        '/about': { prerender: true },
        '/contact': { prerender: true },

        // Englische Seiten prerendern
        '/en': { prerender: true },
        '/en/services': { prerender: true },
        '/en/projects': { prerender: true },
        '/en/about': { prerender: true },
        '/en/contact': { prerender: true },

        // Spanische Seiten prerendern
        '/es': { prerender: true },
        '/es/services': { prerender: true },
        '/es/projects': { prerender: true },
        '/es/about': { prerender: true },
        '/es/contact': { prerender: true },

        // Legal-Seiten mit noindex
        '/privacy': {
            prerender: true,
            headers: { 'X-Robots-Tag': 'noindex' }
        },
        '/terms': {
            prerender: true,
            headers: { 'X-Robots-Tag': 'noindex' }
        },
        '/imprint': {
            prerender: true,
            headers: { 'X-Robots-Tag': 'noindex' }
        },
        '/en/privacy': {
            prerender: true,
            headers: { 'X-Robots-Tag': 'noindex' }
        },
        '/en/terms': {
            prerender: true,
            headers: { 'X-Robots-Tag': 'noindex' }
        },
        '/en/imprint': {
            prerender: true,
            headers: { 'X-Robots-Tag': 'noindex' }
        },
        '/es/privacy': {
            prerender: true,
            headers: { 'X-Robots-Tag': 'noindex' }
        },
        '/es/terms': {
            prerender: true,
            headers: { 'X-Robots-Tag': 'noindex' }
        },
        '/es/imprint': {
            prerender: true,
            headers: { 'X-Robots-Tag': 'noindex' }
        },

        // KRITISCH: Sitemap statisch generieren
        '/sitemap.xml': {
            prerender: true,
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'max-age=86400' // 24 Stunden Cache
            }
        },

        // Admin und API-Bereiche blockieren
        '/admin/**': { headers: { 'X-Robots-Tag': 'noindex' } },
        '/api/**': { cors: true }
    },

    router: {
        options: {
            scrollBehaviorType: 'smooth'
        }
    },

    // Development configuration
    devServer: {
        port: 3000,
        host: '0.0.0.0'
    },

    // Compatibility configuration
    compatibilityDate: '2024-11-01'
})