export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    const { $i18n } = useNuxtApp()

    // Only load Google Analytics in production and if gtag ID is provided
    if (process.client && config.public.gtag?.id && process.env.NODE_ENV === 'production') {
        const gtagId = config.public.gtag.id

        // Load Google Analytics script
        const script = document.createElement('script')
        script.async = true
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`
        document.head.appendChild(script)

        // Initialize gtag
        window.dataLayer = window.dataLayer || []
        function gtag() { dataLayer.push(arguments) }
        window.gtag = gtag

        gtag('js', new Date())
        gtag('config', gtagId, {
            // Enhanced tracking settings
            send_page_view: false, // We'll handle page views manually
            custom_map: {
                custom_parameter_1: 'language'
            },
            // Cookie settings for GDPR compliance
            anonymize_ip: true,
            cookie_flags: 'max-age=7200;secure;samesite=strict'
        })

        // Track initial page view
        gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            language: $i18n.locale.value,
            content_group1: 'GRAVON Website'
        })

        // Provide global tracking functions
        return {
            provide: {
                gtag: {
                    // Track page views
                    trackPageView: (url, title) => {
                        gtag('event', 'page_view', {
                            page_title: title || document.title,
                            page_location: url || window.location.href,
                            language: $i18n.locale.value,
                            content_group1: 'GRAVON Website'
                        })
                    },

                    // Track events
                    trackEvent: (eventName, parameters = {}) => {
                        gtag('event', eventName, {
                            language: $i18n.locale.value,
                            ...parameters
                        })
                    },

                    // Track conversions
                    trackConversion: (conversionId, parameters = {}) => {
                        gtag('event', 'conversion', {
                            send_to: conversionId,
                            language: $i18n.locale.value,
                            ...parameters
                        })
                    },

                    // Track form submissions
                    trackFormSubmission: (formName, formLocation = '') => {
                        gtag('event', 'form_submit', {
                            form_name: formName,
                            form_location: formLocation,
                            language: $i18n.locale.value,
                            content_group1: 'Contact Forms'
                        })
                    },

                    // Track file downloads
                    trackDownload: (fileName, fileType = '') => {
                        gtag('event', 'file_download', {
                            file_name: fileName,
                            file_type: fileType,
                            language: $i18n.locale.value
                        })
                    },

                    // Track outbound links
                    trackOutboundLink: (url, linkText = '') => {
                        gtag('event', 'click', {
                            event_category: 'outbound',
                            event_label: url,
                            link_text: linkText,
                            language: $i18n.locale.value
                        })
                    },

                    // Track scroll depth
                    trackScrollDepth: (percentage) => {
                        gtag('event', 'scroll', {
                            event_category: 'engagement',
                            event_label: `${percentage}%`,
                            value: percentage,
                            language: $i18n.locale.value
                        })
                    },

                    // Track user timing
                    trackTiming: (timingCategory, timingVar, timingValue, timingLabel = '') => {
                        gtag('event', 'timing_complete', {
                            name: timingVar,
                            value: timingValue,
                            event_category: timingCategory,
                            event_label: timingLabel,
                            language: $i18n.locale.value
                        })
                    }
                }
            }
        }
    }

    // Return empty functions if analytics is disabled
    return {
        provide: {
            gtag: {
                trackPageView: () => {},
                trackEvent: () => {},
                trackConversion: () => {},
                trackFormSubmission: () => {},
                trackDownload: () => {},
                trackOutboundLink: () => {},
                trackScrollDepth: () => {},
                trackTiming: () => {}
            }
        }
    }
})