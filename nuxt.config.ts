export default defineNuxtConfig({
    devtools: { enabled: true },
    compatibilityDate: '2025-09-18',

    modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@nuxtjs/i18n', // WICHTIG: @nuxtjs/sitemap NICHT verwenden - wir nutzen unsere manuelle API
    '@vueuse/nuxt', '@nuxt/image'],

    // Internationalization configuration
    i18n: {
        locales: [
            {
                code: 'de',
                language: 'de-DE',
                name: 'Deutsch',
                file: 'de.json'
            },
            {
                code: 'en',
                language: 'en-US',
                name: 'English',
                file: 'en.json'
            },
            {
                code: 'es',
                language: 'es-ES',
                name: 'Español',
                file: 'es.json'
            }
        ],
        defaultLocale: 'de',
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

    // Content configuration
    content: {
        locales: ['de', 'en', 'es'],
        defaultLocale: 'de',
        markdown: {
            anchorLinks: false,
            toc: {
                depth: 3,
                searchDepth: 3
            }
        }
    },

    // CSS configuration
    css: ['~/assets/css/main.css'],

    // App configuration
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
                    name: 'description',
                    content: 'GRAVON Projektbau - Ihr Partner für schlüsselfertige Projekte mit Substanz. Generalunternehmen für Bau- und Immobilienprojekte.'
                },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'theme-color', content: '#f59e0b' },
                { property: 'og:site_name', content: 'GRAVON Projektbau' },
                { property: 'og:type', content: 'website' },
                { property: 'og:locale', content: 'de_DE' },
                { property: 'og:locale:alternate', content: 'en_US' },
                { property: 'og:locale:alternate', content: 'es_ES' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:site', content: '@gravon_bau' },
                { name: 'robots', content: 'index, follow' },
                { name: 'author', content: 'GRAVON Projektbau GmbH' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
                { rel: 'manifest', href: '/site.webmanifest' },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com',
                    crossorigin: 'anonymous'
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com',
                    crossorigin: 'anonymous'
                },
                {
                    rel: 'preload',
                    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
                    as: 'style',
                    onload: "this.onload=null;this.rel='stylesheet'"
                }
            ],
            script: [
                {
                    type: 'application/ld+json',
                    innerHTML: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        name: 'GRAVON Projektbau GmbH',
                        url: 'https://gravon-projektbau.de',
                        logo: 'https://gravon-projektbau.de/images/logo.png',
                        description: 'Generalunternehmen für Bau- und Immobilienprojekte',
                        address: {
                            '@type': 'PostalAddress',
                            streetAddress: 'Musterstraße 123',
                            addressLocality: 'Frankfurt am Main',
                            postalCode: '60311',
                            addressCountry: 'DE'
                        },
                        contactPoint: [
                            {
                                '@type': 'ContactPoint',
                                telephone: '+49-69-123-456-789',
                                contactType: 'customer service',
                                email: 'info@gravon.de',
                                areaServed: 'DE',
                                availableLanguage: ['German', 'English', 'Spanish']
                            }
                        ],
                        foundingDate: '1998',
                        numberOfEmployees: '50+',
                        serviceArea: 'Deutschland',
                        sameAs: [
                            'https://www.linkedin.com/company/gravon-projektbau',
                            'https://www.xing.com/companies/gravonprojektbau'
                        ]
                    })
                }
            ]
        }
    },

    // Runtime configuration
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://gravon-projektbau.de',
            gtagId: process.env.NUXT_GTAG_ID
        }
    },

    // Nitro configuration für statische Generierung - ALLE 3 SPRACHEN
    nitro: {
        prerender: {
            routes: [
                // Deutsche Seiten (Default-Locale ohne Präfix)
                '/',
                '/services',
                '/projects',
                '/about',
                '/contact',
                '/privacy',
                '/terms',
                '/imprint',

                // Englische Seiten
                '/en',
                '/en/services',
                '/en/projects',
                '/en/about',
                '/en/contact',
                '/en/privacy',
                '/en/terms',
                '/en/imprint',

                // SPANISCHE SEITEN (KRITISCH - diese waren vorher nicht da!)
                '/es',
                '/es/services',
                '/es/projects',
                '/es/about',
                '/es/contact',
                '/es/privacy',
                '/es/terms',
                '/es/imprint'
            ]
        },
        compressPublicAssets: true
    },

    // Build configuration
    build: {
        transpile: ['gsap']
    },

    // Optimization
    webpack: {
        optimization: {
            splitChunks: {
                layouts: true,
                pages: true,
                commons: true
            }
        },
    },

    // Experimental features
    experimental: {
        payloadExtraction: false,
        viewTransition: true
    },

    // TypeScript configuration
    typescript: {
        strict: true,
        typeCheck: true
    },

    // Vite configuration
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/scss/variables.scss" as *;'
                }
            }
        },
        optimizeDeps: {
            include: ['gsap']
        },
        server: {
            fs: {
                strict: false
            }
        }
    },

    // Router configuration
    router: {
        options: {
            scrollBehaviorType: 'smooth'
        }
    },

    // Route Rules - ALLE 3 SPRACHEN
    routeRules: {
        // Deutsche Hauptseiten
        '/': { prerender: true },
        '/services': { prerender: true },
        '/projects': { prerender: true },
        '/about': { prerender: true },
        '/contact': { prerender: true },

        // Englische Seiten
        '/en': { prerender: true },
        '/en/services': { prerender: true },
        '/en/projects': { prerender: true },
        '/en/about': { prerender: true },
        '/en/contact': { prerender: true },

        // SPANISCHE SEITEN (NEU!)
        '/es': { prerender: true },
        '/es/services': { prerender: true },
        '/es/projects': { prerender: true },
        '/es/about': { prerender: true },
        '/es/contact': { prerender: true },

        // Legal-Seiten mit noindex (alle Sprachen)
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

        // Sitemap explizit prerendern
        '/sitemap.xml': {
            prerender: false,
            headers: {
                'Content-Type': 'application/xml; charset=utf-8',
                'Cache-Control': 'public, max-age=86400'
            }
        },

        // Admin und API blockieren
        '/admin/**': { headers: { 'X-Robots-Tag': 'noindex' } },
        '/api/**': { cors: true },

        '/**': {
            headers: {
                'Content-Security-Policy': [
                    "default-src 'self'",
                    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
                    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                    "font-src 'self' https://fonts.gstatic.com",
                    "img-src 'self' data: https:",
                    "connect-src 'self' https://www.google-analytics.com",
                    "frame-ancestors 'none'",
                    "base-uri 'self'",
                    "object-src 'none'"
                ].join('; '),
                'X-Frame-Options': 'DENY',
                'X-Content-Type-Options': 'nosniff',
                'Referrer-Policy': 'strict-origin-when-cross-origin',
                'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
            }
        }
    },
    image: {
        format: ['webp'],
        quality: 85,
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
        }
    },
})