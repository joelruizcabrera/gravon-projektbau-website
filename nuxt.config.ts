export default defineNuxtConfig({
    devtools: { enabled: true },
    compatibilityDate: '2025-09-18',

    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content',
        '@nuxtjs/i18n',
        '@vueuse/nuxt'
    ],

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
        locales: ['de', 'en'],
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
                { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' }
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
                                availableLanguage: ['German', 'English']
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
            gtag: {
                id: process.env.NUXT_GTAG_ID
            }
        }
    },

    // Nitro configuration
    nitro: {
        prerender: {
            routes: [
                '/',
                '/services',
                '/projects',
                '/about',
                '/contact',
                '/privacy',
                '/terms',
                '/imprint',
                '/en',
                '/en/services',
                '/en/projects',
                '/en/about',
                '/en/contact',
                '/en/privacy',
                '/en/terms',
                '/en/imprint'
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

    // Security headers
    routeRules: {
        '/': { prerender: true },
        '/services': { prerender: true },
        '/projects': { prerender: true },
        '/about': { prerender: true },
        '/contact': { prerender: true },
        '/privacy': { headers: { 'X-Robots-Tag': 'noindex' } },
        '/terms': { headers: { 'X-Robots-Tag': 'noindex' } },
        '/imprint': { headers: { 'X-Robots-Tag': 'noindex' } },
        '/admin/**': { headers: { 'X-Robots-Tag': 'noindex' } },
        '/api/**': { cors: true }
    }
})