// nuxt.config.ts
export default defineNuxtConfig({
    devtools: { enabled: true },

    // Enhanced modules configuration
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        '@vueuse/nuxt'
    ],

    // CSS Configuration
    css: [
        '~/assets/css/main.css'
    ],

    // Enhanced i18n configuration with better static generation support
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
            }
        ],
        lazy: true,
        langDir: 'locales',
        strategy: 'prefix_except_default',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
            alwaysRedirect: false,
            fallbackLocale: 'de'
        },
        compilation: {
            strictMessage: false,
            escapeHtml: false
        },
        // Improved static generation
        precompile: {
            strictMessage: false
        }
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
                { name: 'theme-color', content: '#f59e0b' },
                { name: 'msapplication-TileColor', content: '#f59e0b' },
                { property: 'og:site_name', content: 'GRAVON Projektbau' },
                { property: 'og:type', content: 'website' },
                { name: 'robots', content: 'index, follow' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
                { rel: 'manifest', href: '/site.webmanifest' },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' }
            ]
        },
        // Page transition configuration
        pageTransition: {
            name: 'page',
            mode: 'out-in'
        },
        // Layout transition
        layoutTransition: {
            name: 'layout',
            mode: 'out-in'
        }
    },

    // Enhanced runtime configuration
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.gravon.de',
            gtag: {
                id: process.env.NUXT_GTAG_ID || ''
            },
            // GSAP configuration flags
            gsap: {
                enableScrollTrigger: true,
                refreshOnResize: true,
                refreshDelay: 100
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
                '/projects',
                '/en/projects',
                '/about',
                '/en/about',
                '/contact',
                '/en/contact',
                '/imprint',
                '/en/imprint',
                '/privacy',
                '/en/privacy',
                '/terms',
                '/en/terms'
            ],
            crawlLinks: true
        },
        // Better static asset handling
        storage: {
            redis: {
                driver: 'redis',
                // Configure if using Redis for caching
            }
        }
    },

    // Enhanced SSR configuration for better hydration
    ssr: true,

    // Experimental features for better performance
    experimental: {
        payloadExtraction: false, // Better for static generation
        renderJsonPayloads: true,
        typedPages: true
    },

    // Enhanced build optimization
    build: {
        transpile: ['gsap'], // Ensure GSAP is properly transpiled
        analyze: process.env.ANALYZE === 'true'
    },

    // Vite configuration for better development and build
    vite: {
        css: {
            devSourcemap: true
        },
        build: {
            cssCodeSplit: true,
            rollupOptions: {
                output: {
                    manualChunks: {
                        'gsap': ['gsap'],
                        'vendor': ['vue', 'vue-router']
                    }
                }
            }
        },
        optimizeDeps: {
            include: ['gsap', 'gsap/ScrollTrigger', 'gsap/TextPlugin']
        }
    },

    // TypeScript configuration
    typescript: {
        strict: false, // Set to true for stricter type checking
        typeCheck: false // Enable for type checking during development
    },

    // Enhanced router options
    router: {
        options: {
            scrollBehaviorType: 'smooth'
        }
    },

    // Plugin configuration
    plugins: [
        '~/plugins/gsap.client.js',
        '~/plugins/gtag.client.js',
        '~/plugins/accessibility.client.js'
    ],

    // Enhanced hooks for better static generation
    hooks: {
        // Better handling of GSAP in static generation
        'render:route': (url, result, context) => {
            // Inject GSAP initialization for static pages
            if (result.html) {
                result.html = result.html.replace(
                    '</head>',
                    `
          <script>
            // Prevent FOUC for GSAP animations
            document.documentElement.style.visibility = 'visible';
            // Initialize scroll behavior
            if (typeof window !== 'undefined') {
              window.scrollTo = window.scrollTo || function(x, y) {
                window.scrollX = x;
                window.scrollY = y;
              };
            }
          </script>
          </head>`
                )
            }
        },

        // Optimize static generation
        'nitro:build:before': () => {
            console.log('🚀 Optimizing static generation for GSAP compatibility')
        },

        // Post-build optimizations
        'nitro:build:public-assets': (nitro) => {
            console.log('📦 Static assets generated successfully')
        }
    },

    // Enhanced webpack configuration for legacy support
    webpack: {
        extractCSS: true,
        optimization: {
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vendor: {
                        name: 'vendor',
                        test: /[\\/]node_modules[\\/]/,
                        chunks: 'all'
                    },
                    gsap: {
                        name: 'gsap',
                        test: /[\\/]node_modules[\\/]gsap[\\/]/,
                        chunks: 'all',
                        priority: 10
                    }
                }
            }
        }
    },

    // Security headers
    routeRules: {
        '/**': {
            headers: {
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'DENY',
                'X-XSS-Protection': '1; mode=block',
                'Referrer-Policy': 'strict-origin-when-cross-origin',
                'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
            }
        },
        // Specific rules for static assets
        '/images/**': {
            headers: {
                'Cache-Control': 'public, max-age=31536000, immutable'
            }
        },
        '/js/**': {
            headers: {
                'Cache-Control': 'public, max-age=31536000, immutable'
            }
        },
        '/css/**': {
            headers: {
                'Cache-Control': 'public, max-age=31536000, immutable'
            }
        }
    },

    // Development configuration
    devServer: {
        port: 3000,
        host: '0.0.0.0'
    },

    // Compatibility configuration
    compatibilityDate: '2025-09-18'
})