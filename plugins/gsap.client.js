import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

export default defineNuxtPlugin(() => {
    if (process.client) {
        // Register plugins
        gsap.registerPlugin(ScrollTrigger, TextPlugin)

        // Fallback für no-js
        document.documentElement.classList.add('no-js')

        // Global GSAP configuration
        gsap.defaults({
            duration: 1,
            ease: "power2.out"
        })

        // ScrollTrigger defaults
        ScrollTrigger.defaults({
            toggleActions: "play none none reverse",
            start: "top 85%",
            end: "bottom 15%",
            invalidateOnRefresh: true,
            refreshPriority: -90
        })

        // Refresh ScrollTrigger on route changes
        const router = useRouter()
        router.afterEach(() => {
            nextTick(() => {
                ScrollTrigger.refresh()
            })
        })

        // Handle window resize with debounce
        let resizeTimer
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer)
            resizeTimer = setTimeout(() => {
                ScrollTrigger.refresh()
            }, 150)
        })

        // Enhanced animation utilities
        const animationUtils = {
            // Fade in from bottom
            fadeInUp: (selector, options = {}) => {
                return gsap.fromTo(selector,
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
                            trigger: selector,
                            start: options.start || "top 85%",
                            toggleActions: "play none none reverse",
                            ...options.scrollTrigger
                        }
                    }
                )
            },

            // Staggered card animations
            staggerCards: (selector, options = {}) => {
                return gsap.fromTo(selector,
                    {
                        opacity: 0,
                        y: 50,
                        scale: 0.95
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: options.duration || 0.8,
                        stagger: options.stagger || 0.15,
                        ease: options.ease || "back.out(1.7)",
                        scrollTrigger: {
                            trigger: selector,
                            start: options.start || "top 80%",
                            toggleActions: "play none none reverse",
                            ...options.scrollTrigger
                        }
                    }
                )
            },

            // Counter animation
            counter: (selector, options = {}) => {
                const elements = document.querySelectorAll(selector)
                elements.forEach(element => {
                    const target = parseInt(element.dataset.target)
                    if (target) {
                        gsap.fromTo(element,
                            { innerText: 0 },
                            {
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
                            }
                        )
                    }
                })
            },

            // Slide in from left
            slideInFromLeft: (selector, options = {}) => {
                return gsap.fromTo(selector,
                    { x: -50, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: options.duration || 1,
                        ease: options.ease || "power3.out",
                        stagger: options.stagger || 0.1,
                        scrollTrigger: {
                            trigger: selector,
                            start: options.start || "top 80%",
                            toggleActions: "play none none reverse",
                            ...options.scrollTrigger
                        }
                    }
                )
            },

            // Slide in from right
            slideInFromRight: (selector, options = {}) => {
                return gsap.fromTo(selector,
                    { x: 50, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: options.duration || 1,
                        ease: options.ease || "power3.out",
                        stagger: options.stagger || 0.1,
                        scrollTrigger: {
                            trigger: selector,
                            start: options.start || "top 80%",
                            toggleActions: "play none none reverse",
                            ...options.scrollTrigger
                        }
                    }
                )
            },

            // Scale in animation
            scaleIn: (selector, options = {}) => {
                return gsap.fromTo(selector,
                    { scale: 0.9, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: options.duration || 1,
                        ease: options.ease || "back.out(1.7)",
                        stagger: options.stagger || 0.1,
                        scrollTrigger: {
                            trigger: selector,
                            start: options.start || "top 80%",
                            toggleActions: "play none none reverse",
                            ...options.scrollTrigger
                        }
                    }
                )
            },

            // Text reveal animation
            textReveal: (selector, options = {}) => {
                return gsap.fromTo(selector,
                    {
                        opacity: 0,
                        y: 50,
                        clipPath: "inset(100% 0 0 0)"
                    },
                    {
                        opacity: 1,
                        y: 0,
                        clipPath: "inset(0% 0 0 0)",
                        duration: options.duration || 1.2,
                        ease: options.ease || "power3.out",
                        stagger: options.stagger || 0.1,
                        scrollTrigger: {
                            trigger: selector,
                            start: options.start || "top 85%",
                            toggleActions: "play none none reverse",
                            ...options.scrollTrigger
                        }
                    }
                )
            }
        }

        // Auto-initialize common animations
        const initAutoAnimations = () => {
            // Auto-animate elements with GSAP classes
            setTimeout(() => {
                animationUtils.fadeInUp('.gsap-animate')
                animationUtils.slideInFromLeft('.gsap-slide-left')
                animationUtils.slideInFromRight('.gsap-slide-right')
                animationUtils.scaleIn('.gsap-scale')

                // Fade animations
                gsap.fromTo('.gsap-fade',
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration: 1,
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: '.gsap-fade',
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                )
            }, 100)
        }

        // Initialize auto animations on page load
        if (document.readyState === 'complete') {
            initAutoAnimations()
        } else {
            window.addEventListener('load', initAutoAnimations)
        }

        // Provide GSAP globally
        return {
            provide: {
                gsap,
                ScrollTrigger,
                animationUtils
            }
        }
    }
})