export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'de',
    fallbackLocale: 'de',
    strategy: 'prefix_except_default',

    // Number formats
    numberFormats: {
        de: {
            currency: {
                style: 'currency',
                currency: 'EUR',
                notation: 'standard'
            },
            decimal: {
                style: 'decimal',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            },
            percent: {
                style: 'percent',
                useGrouping: false
            }
        },
        en: {
            currency: {
                style: 'currency',
                currency: 'EUR',
                notation: 'standard'
            },
            decimal: {
                style: 'decimal',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            },
            percent: {
                style: 'percent',
                useGrouping: false
            }
        },
        es: {
            currency: {
                style: 'currency',
                currency: 'EUR',
                notation: 'standard'
            },
            decimal: {
                style: 'decimal',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            },
            percent: {
                style: 'percent',
                useGrouping: false
            }
        }
    },

    // Date time formats
    datetimeFormats: {
        de: {
            short: {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            },
            long: {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long'
            }
        },
        en: {
            short: {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            },
            long: {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long'
            }
        },
        es: {
            short: {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            },
            long: {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long'
            }
        },
    },

    // Message compilation options
    messageCompiler: {
        strictMessage: false,
        escapeHtml: true
    },

    // Missing key handling
    missing: (locale: string, key: string) => {
        console.warn(`Missing translation for key "${key}" in locale "${locale}"`)
        return key
    },

    // Pluralization rules
    pluralRules: {
        de: (choice: number, choicesLength: number) => {
            if (choice === 0) return 0
            if (choice === 1) return 1
            return 2
        },
        en: (choice: number, choicesLength: number) => {
            if (choice === 0) return 0
            if (choice === 1) return 1
            return 2
        },
        es: (choice: number, choicesLength: number) => {
            if (choice === 0) return 0
            if (choice === 1) return 1
            return 2
        }
    },

    // Global properties
    globalInjection: true,

    // Performance optimization
    lazy: true,
    langDir: 'locales/',

    // SEO enhancements
    seo: true,

    // Detection options
    detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        redirectOn: 'root',
        alwaysRedirect: false,
        fallbackLocale: 'de'
    }
}))