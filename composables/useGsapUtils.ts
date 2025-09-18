// composables/useGsapUtils.ts
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

interface GSAPAnimationOptions {
    duration?: number
    delay?: number
    ease?: string
    stagger?: number
    y?: number
    x?: number
    opacity?: number
    scale?: number
    start?: string
    end?: string
    scrollTrigger?: object
}

export const useGsapUtils = () => {
    const isInitialized = ref(false)
    const isReady = ref(false)

    let gsap: any = null
    let ScrollTrigger: any = null
    let animationUtils: any = null

    // Safe GSAP initialization
    const initializeGSAP = async () => {
        if (!process.client) {
            isReady.value = true
            return
        }

        try {
            // Wait for Nuxt app to be ready
            const nuxtApp = useNuxtApp()

            // Wait for GSAP plugin to be loaded
            let attempts = 0
            const maxAttempts = 50

            const waitForGSAP = (): Promise<void> => {
                return new Promise((resolve) => {
                    const checkGSAP = () => {
                        if (nuxtApp.$gsap && nuxtApp.$ScrollTrigger && nuxtApp.$animationUtils) {
                            gsap = nuxtApp.$gsap
                            ScrollTrigger = nuxtApp.$ScrollTrigger
                            animationUtils = nuxtApp.$animationUtils
                            isInitialized.value = true
                            isReady.value = true
                            resolve()
                        } else if (attempts < maxAttempts) {
                            attempts++
                            setTimeout(checkGSAP, 100)
                        } else {
                            console.warn('GSAP failed to initialize after maximum attempts')
                            isReady.value = true
                            resolve()
                        }
                    }
                    checkGSAP()
                })
            }

            await waitForGSAP()

            // Additional setup after GSAP is ready
            if (isInitialized.value) {
                setupGlobalSettings()
            }

        } catch (error) {
            console.warn('GSAP initialization error:', error)
            isReady.value = true
        }
    }

    // Setup global GSAP settings
    const setupGlobalSettings = () => {
        if (!gsap || !ScrollTrigger) return

        try {
            // Enhanced ScrollTrigger configuration for static builds
            ScrollTrigger.config({
                autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load,resize',
                ignoreMobileResize: true
            })

            // Handle page visibility for better performance
            if (typeof document !== 'undefined') {
                document.addEventListener('visibilitychange', () => {
                    if (!document.hidden && ScrollTrigger) {
                        ScrollTrigger.refresh()
                    }
                })
            }

        } catch (error) {
            console.warn('GSAP global settings error:', error)
        }
    }

    // Safe animation executor
    const safeAnimate = (callback: () => void) => {
        if (!isInitialized.value || !gsap) {
            console.warn('GSAP not initialized, skipping animation')
            return
        }

        try {
            callback()
        } catch (error) {
            console.warn('GSAP animation error:', error)
        }
    }

    // Enhanced animation methods
    const fadeIn = (selector: string, options: GSAPAnimationOptions = {}) => {
        return safeAnimate(() => {
            if (!animationUtils) return
            return animationUtils.fadeIn(selector, options)
        })
    }

    const slideInFromLeft = (selector: string, options: GSAPAnimationOptions = {}) => {
        return safeAnimate(() => {
            if (!animationUtils) return
            return animationUtils.slideInFromLeft(selector, options)
        })
    }

    const slideInFromRight = (selector: string, options: GSAPAnimationOptions = {}) => {
        return safeAnimate(() => {
            if (!animationUtils) return
            return animationUtils.slideInFromRight(selector, options)
        })
    }

    const scaleIn = (selector: string, options: GSAPAnimationOptions = {}) => {
        return safeAnimate(() => {
            if (!animationUtils) return
            return animationUtils.scaleIn(selector, options)
        })
    }

    const animateCounter = (selector: string, options: GSAPAnimationOptions = {}) => {
        return safeAnimate(() => {
            if (!animationUtils) return
            return animationUtils.counter(selector, options)
        })
    }

    // Timeline creation with error handling
    const createTimeline = (options: object = {}) => {
        if (!isInitialized.value || !gsap) {
            console.warn('GSAP not initialized, cannot create timeline')
            return null
        }

        try {
            return gsap.timeline(options)
        } catch (error) {
            console.warn('Timeline creation error:', error)
            return null
        }
    }

    // Scroll trigger creation with enhanced error handling
    const createScrollTrigger = (options: object) => {
        if (!isInitialized.value || !ScrollTrigger) {
            console.warn('ScrollTrigger not initialized')
            return null
        }

        try {
            return ScrollTrigger.create(options)
        } catch (error) {
            console.warn('ScrollTrigger creation error:', error)
            return null
        }
    }

    // Batch animations for better performance
    const batchAnimate = (
        selector: string,
        animationType: 'fadeIn' | 'slideIn' | 'scaleIn' = 'fadeIn',
        options: GSAPAnimationOptions = {}
    ) => {
        if (!isInitialized.value) return

        return safeAnimate(() => {
            const elements = document.querySelectorAll(selector)
            if (!elements.length) return

            elements.forEach((element, index) => {
                const delay = (options.delay || 0) + (index * (options.stagger || 0.1))

                switch (animationType) {
                    case 'fadeIn':
                        fadeIn(element as any, { ...options, delay })
                        break
                    case 'slideIn':
                        slideInFromLeft(element as any, { ...options, delay })
                        break
                    case 'scaleIn':
                        scaleIn(element as any, { ...options, delay })
                        break
                }
            })
        })
    }

    // Refresh ScrollTrigger with debouncing
    const refreshScrollTrigger = (() => {
        let timeout: NodeJS.Timeout
        return () => {
            if (!ScrollTrigger) return

            clearTimeout(timeout)
            timeout = setTimeout(() => {
                try {
                    ScrollTrigger.refresh()
                } catch (error) {
                    console.warn('ScrollTrigger refresh error:', error)
                }
            }, 100)
        }
    })()

    // Cleanup all animations
    const cleanup = () => {
        if (!isInitialized.value) return

        try {
            if (ScrollTrigger) {
                ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
            }
            if (gsap) {
                gsap.killTweensOf('*')
            }
        } catch (error) {
            console.warn('Cleanup error:', error)
        }
    }

    // Lifecycle management
    onMounted(async () => {
        await initializeGSAP()
    })

    onUnmounted(() => {
        cleanup()
    })

    // Public API
    return {
        // State
        isReady,
        isInitialized,

        // Core methods
        initializeGSAP,
        safeAnimate,

        // Animation methods
        fadeIn,
        slideInFromLeft,
        slideInFromRight,
        scaleIn,
        animateCounter,
        batchAnimate,

        // Advanced methods
        createTimeline,
        createScrollTrigger,
        refreshScrollTrigger,

        // Cleanup
        cleanup,

        // Direct access (when needed)
        gsap: computed(() => gsap),
        ScrollTrigger: computed(() => ScrollTrigger),
        animationUtils: computed(() => animationUtils)
    }
}

// Static generation helper
export const useStaticGSAP = () => {
    const isSSR = process.server
    const isStatic = process.env.NODE_ENV === 'production' && process.static

    const shouldAnimate = computed(() => {
        return !isSSR && (process.client || !isStatic)
    })

    const conditionalAnimate = (callback: () => void) => {
        if (shouldAnimate.value) {
            nextTick(callback)
        }
    }

    return {
        shouldAnimate,
        conditionalAnimate,
        isSSR,
        isStatic
    }
}