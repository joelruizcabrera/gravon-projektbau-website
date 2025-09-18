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
            // Verbesserungen für Performance
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

        // Handle window resize
        let resizeTimer
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer)
            resizeTimer = setTimeout(() => {
                ScrollTrigger.refresh()
            }, 250)
        })

        // Global animation utilities
        const animationUtils = {
            // Fade in animation
            fadeIn: (selector, options = {}) => {
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
            },

            // Slide animations
            slideInFromLeft: (selector, options = {}) => {
                return gsap.fromTo(selector,
                    { x: -50, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: options.duration || 1,
                        ease: options.ease || "power3.out",
                        scrollTrigger: {
                            trigger: selector,
                            start: options.start || "top 80%",
                            ...options.scrollTrigger
                        }
                    }
                )
            },

            slideInFromRight: (selector, options = {}) => {
                return gsap.fromTo(selector,
                    { x: 50, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: options.duration || 1,
                        ease: options.ease || "power3.out",
                        scrollTrigger: {
                            trigger: selector,
                            start: options.start || "top 80%",
                            ...options.scrollTrigger
                        }
                    }
                )
            },

            // Scale animation
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
                            ...options.scrollTrigger
                        }
                    }
                )
            }
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