export default defineNuxtRouteMiddleware((to) => {
    const { $i18n } = useNuxtApp()
    const config = useRuntimeConfig()
    const baseUrl = config.public.siteUrl

    // Skip SEO processing for admin routes, API routes, or assets
    if (to.path.startsWith('/admin') || to.path.startsWith('/api') || to.path.includes('.')) {
        return
    }

    // Get current locale
    const locale = $i18n.locale.value
    const isDefaultLocale = locale === 'de'

    // Generate canonical URL
    const canonicalPath = isDefaultLocale ? to.path : to.path.replace(`/${locale}`, '')
    const canonicalUrl = `${baseUrl}${canonicalPath}`

    // Generate alternate language URLs
    const alternateUrls = $i18n.locales.value.map(loc => ({
        hreflang: loc.code,
        href: loc.code === 'de' ? `${baseUrl}${canonicalPath}` : `${baseUrl}/${loc.code}${canonicalPath}`
    }))

    // Add x-default for main language
    alternateUrls.push({
        hreflang: 'x-default',
        href: canonicalUrl
    })

    // Set SEO meta tags
    useSeoMeta({
        // Canonical URL
        canonical: canonicalUrl,

        // Open Graph
        ogUrl: canonicalUrl,
        ogType: 'website',
        ogSiteName: 'GRAVON Projektbau',
        ogLocale: locale === 'de' ? 'de_DE' : 'en_US',

        // Twitter Card
        twitterCard: 'summary_large_image',
        twitterSite: '@gravon_bau',
        twitterCreator: '@gravon_bau',

        // Additional meta tags
        robots: {
            index: !to.path.includes('/admin') && !to.path.includes('/privacy') && !to.path.includes('/terms') && !to.path.includes('/imprint'),
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1
            }
        },

        // Schema.org data
        publisher: 'GRAVON Projektbau GmbH',
        author: 'GRAVON Projektbau GmbH',

        // Geo tags for local SEO
        geoRegion: 'DE-HE',
        geoPlacename: 'Frankfurt am Main',
        geoPosition: '50.1109;8.6821'
    })

    // Set HTML lang attribute
    useHead({
        htmlAttrs: {
            lang: locale
        },

        // Alternate language links
        link: alternateUrls.map(alt => ({
            rel: 'alternate',
            hreflang: alt.hreflang,
            href: alt.href
        })).concat([
            // Preconnect to external domains for performance
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
            { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },

            // PWA manifest
            { rel: 'manifest', href: '/site.webmanifest' },

            // Favicons
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }
        ]),

        // Additional meta tags
        meta: [
            // Theme color
            { name: 'theme-color', content: '#f59e0b' },
            { name: 'msapplication-TileColor', content: '#f59e0b' },

            // Mobile optimization
            { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
            { name: 'format-detection', content: 'telephone=no' },

            // Security headers
            { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
            { 'http-equiv': 'X-Frame-Options', content: 'DENY' },
            { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' },

            // Cache control for static assets
            { 'http-equiv': 'Cache-Control', content: 'public, max-age=31536000' },

            // Company information for local SEO
            { name: 'business:contact_data:street_address', content: 'Musterstraße 123' },
            { name: 'business:contact_data:locality', content: 'Frankfurt am Main' },
            { name: 'business:contact_data:postal_code', content: '60311' },
            { name: 'business:contact_data:country_name', content: 'Deutschland' },
            { name: 'business:contact_data:phone_number', content: '+49 69 123 456 789' },
            { name: 'business:contact_data:email', content: 'info@gravon-projektbau.de' },
            { name: 'business:contact_data:website', content: 'https://gravon-projektbau.de' }
        ]
    })

    // Performance monitoring
    if (process.client) {
        // Track page load time
        window.addEventListener('load', () => {
            const navigation = performance.getEntriesByType('navigation')[0]
            if (navigation) {
                const loadTime = navigation.loadEventEnd - navigation.loadEventStart

                // Track with analytics if available
                if (window.gtag) {
                    window.gtag('event', 'timing_complete', {
                        name: 'page_load_time',
                        value: Math.round(loadTime),
                        event_category: 'performance',
                        event_label: to.path
                    })
                }
            }
        })

        // Track Core Web Vitals
        if ('web-vital' in window) {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (window.gtag) {
                        window.gtag('event', entry.name, {
                            event_category: 'web_vitals',
                            value: Math.round(entry.value),
                            event_label: to.path
                        })
                    }
                }
            })

            observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
        }
    }
})