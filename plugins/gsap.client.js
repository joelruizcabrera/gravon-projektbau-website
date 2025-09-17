import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

export default defineNuxtPlugin(() => {
    if (process.client) {
        gsap.registerPlugin(ScrollTrigger, TextPlugin)

        // Global GSAP configuration
        gsap.defaults({
            duration: 1,
            ease: "power2.out"
        })

        // Set up global scroll trigger defaults
        ScrollTrigger.defaults({
            toggleActions: "play none none reverse",
            start: "top 80%",
            end: "bottom 20%"
        })

        // Provide GSAP globally
        return {
            provide: {
                gsap,
                ScrollTrigger
            }
        }
    }
})