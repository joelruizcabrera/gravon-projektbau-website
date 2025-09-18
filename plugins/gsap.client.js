// plugins/gsap.client.js
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

export default defineNuxtPlugin(() => {
    if (process.client) {
        // Register plugins
        gsap.registerPlugin(ScrollTrigger, TextPlugin)

        // Global GSAP configuration
        gsap.defaults({
            duration: 1,
            ease: "power2.out"
        })

        // Set up ScrollTrigger defaults
        ScrollTrigger.defaults({
            toggleActions: "play none none reverse",
            start: "top 80%",
            end: "bottom 20%",
            invalidateOnRefresh: true,
            refreshPriority: -90
        })

        // Enhanced refresh handling
        const router = useRouter()
        let refreshTimeout

        router.afterEach(() => {
            // Clear existing timeout
            clearTimeout(refreshTimeout)

            // Delay refresh to ensure DOM is ready
            refreshTimeout = setTimeout(() => {
                if (process.client) {
                    ScrollTrigger.refresh()

                    // Additional check for hydration
                    if (document.readyState === 'complete') {
                        setTimeout(() => ScrollTrigger.refresh(), 100)
                    }
                }
            }, 100)
        })

        // Handle window resize with debouncing
        let resizeTimer
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer)
            resizeTimer = setTimeout(() => {
                if (ScrollTrigger) {
                    ScrollTrigger.refresh()
                }
            }, 250)
        })

        // Handle static generation issues
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(() => {
                    if (ScrollTrigger) {
                        ScrollTrigger.refresh()
                    }
                }, 200)
            })
        }

        // Global animation utilities with error handling
        const animationUtils = {
            // Safe initialization wrapper
            safeInit: (callback) => {
                try {
                    if (process.client && gsap && ScrollTrigger) {
                        callback()
                    }
                } catch (error) {
                    console.warn('GSAP Animation Error:', error)
                }
            },

            // Fade in animation
            fadeIn: (selector, options = {}) => {
                return animationUtils.safeInit(() => {
                    const elements = gsap.utils.toArray(selector)
                    if (!elements.length) return

                    return gsap.fromTo(elements,
                        {
                            opacity: 0,
                            y: options.y || 30
                        },
                        {
                            opacity: 1,
                            y: 0,
                            duration: options.duration || 1,
                            stagger: options.stagger || 0.1,
                            ease: options.ease || "power3.out",
                            scrollTrigger: {
                                trigger: elements[0],
                                start: options.start || "top 85%",
                                toggleActions: "play none none reverse",
                                ...options.scrollTrigger
                            }
                        }
                    )
                })
            },

            // Counter animation with better error handling
            counter: (selector, options = {}) => {
                return animationUtils.safeInit(() => {
                    const elements = document.querySelectorAll(selector)

                    elements.forEach(element => {
                        const target = parseInt(element.dataset.target)
                        if (target && !isNaN(target)) {
                            gsap.to(element, {
                                innerText: target,
                                duration: options.duration || 2,
                                ease: options.ease || "power2.out",
                                roundProps: "innerText",
                                scrollTrigger: {
                                    trigger: element,
                                    start: "top 90%",
                                    toggleActions: "play none none none",
                                    ...options.scrollTrigger
                                }
                            })
                        }
                    })
                })
            },

            // Slide animations
            slideInFromLeft: (selector, options = {}) => {
                return animationUtils.safeInit(() => {
                    const elements = gsap.utils.toArray(selector)
                    if (!elements.length) return

                    return gsap.fromTo(elements,
                        { x: -50, opacity: 0 },
                        {
                            x: 0,
                            opacity: 1,
                            duration: options.duration || 1,
                            ease: options.ease || "power3.out",
                            stagger: options.stagger || 0.1,
                            scrollTrigger: {
                                trigger: elements[0],
                                start: options.start || "top 80%",
                                toggleActions: "play none none reverse",
                                ...options.scrollTrigger
                            }
                        }
                    )
                })
            },

            slideInFromRight: (selector, options = {}) => {
                return animationUtils.safeInit(() => {
                    const elements = gsap.utils.toArray(selector)
                    if (!elements.length) return

                    return gsap.fromTo(elements,
                        { x: 50, opacity: 0 },
                        {
                            x: 0,
                            opacity: 1,
                            duration: options.duration || 1,
                            ease: options.ease || "power3.out",
                            stagger: options.stagger || 0.1,
                            scrollTrigger: {
                                trigger: elements[0],
                                start: options.start || "top 80%",
                                toggleActions: "play none none reverse",
                                ...options.scrollTrigger
                            }
                        }
                    )
                })
            },

            // Scale animation
            scaleIn: (selector, options = {}) => {
                return animationUtils.safeInit(() => {
                    const elements = gsap.utils.toArray(selector)
                    if (!elements.length) return

                    return gsap.fromTo(elements,
                        { scale: 0.9, opacity: 0 },
                        {
                            scale: 1,
                            opacity: 1,
                            duration: options.duration || 1,
                            ease: options.ease || "back.out(1.7)",
                            stagger: options.stagger || 0.1,
                            scrollTrigger: {
                                trigger: elements[0],
                                start: options.start || "top 80%",
                                toggleActions: "play none none reverse",
                                ...options.scrollTrigger
                            }
                        }
                    )
                })
            },

            // Kill all animations for cleanup
            killAll: () => {
                if (ScrollTrigger) {
                    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
                }
                if (gsap) {
                    gsap.killTweensOf("*")
                }
            }
        }

        // Provide GSAP globally with safe access
        return {
            provide: {
                gsap,
                ScrollTrigger,
                animationUtils
            }
        }
    }
})