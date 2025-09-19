<template>
  <div>
    <!-- Hero Section -->
    <Hero />

    <!-- Services Section -->
    <Services />

    <!-- Projects Section -->
    <Projects />

    <!-- Stats Section -->
    <Statistics></Statistics>

    <!-- About Section -->
    <About />

    <!-- Contact Section -->
    <Contact />
  </div>
</template>

<script setup>
import Statistics from "~/components/Statistics.vue";

const { t } = useI18n()

// Access GSAP utilities safely
const nuxtApp = useNuxtApp()
const { $gsap, $ScrollTrigger, $animationUtils } = nuxtApp

// SEO Configuration
useHead({
  title: t('meta.home.title'),
  meta: [
    {
      name: 'description',
      content: t('meta.home.description')
    },
    {
      property: 'og:title',
      content: t('meta.home.title')
    },
    {
      property: 'og:description',
      content: t('meta.home.description')
    },
    {
      property: 'og:image',
      content: '/images/og-image.jpg'
    },
    {
      property: 'og:url',
      content: 'https://gravon-projektbau.de'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: t('meta.home.title')
    },
    {
      name: 'twitter:description',
      content: t('meta.home.description')
    },
    {
      name: 'twitter:image',
      content: '/images/og-image.jpg'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://gravon-projektbau.de'
    }
  ]
})

// Page-level animations and initialization
const initializePageAnimations = () => {
  if (!process.client || !$animationUtils) return

  try {
    // Page entrance animation
    $animationUtils.safeInit(() => {
      // Animate page sections sequentially
      const sections = ['.hero-section', '.services-section', '.projects-section', '.about-section', '.contact-section']

      sections.forEach((selector, index) => {
        const element = document.querySelector(selector)
        if (element) {
          $gsap.set(element, { opacity: 0, y: 30 })
          $gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          })
        }
      })
    })

    // Initialize section-specific animations
    initializeSectionAnimations()

  } catch (error) {
    console.warn('Page animation initialization error:', error)
  }
}

const initializeSectionAnimations = () => {
  if (!$animationUtils) return

  try {
    // Generic card animations
    $animationUtils.fadeIn('.service-card', {
      duration: 0.8,
      stagger: 0.15,
      start: 'top 80%'
    })

    $animationUtils.fadeIn('.project-card', {
      duration: 0.8,
      stagger: 0.12,
      start: 'top 80%'
    })

    $animationUtils.scaleIn('.team-member', {
      duration: 0.6,
      stagger: 0.1,
      start: 'top 85%'
    })

    // Counter animations
    $animationUtils.counter('.counter', {
      duration: 2,
      scrollTrigger: {
        start: 'top 90%'
      }
    })

  } catch (error) {
    console.warn('Section animation initialization error:', error)
  }
}

const handlePageVisibility = () => {
  if (!process.client) return

  // Handle page visibility changes
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && $ScrollTrigger) {
      // Refresh ScrollTrigger when page becomes visible
      setTimeout(() => {
        $ScrollTrigger.refresh()
      }, 100)
    }
  })
}

const handleRouteTransition = () => {
  const router = useRouter()

  router.beforeEach(() => {
    // Clean up any running animations before route change
    if ($animationUtils && $animationUtils.killAll) {
      $animationUtils.killAll()
    }
  })
}

// Lifecycle management
onMounted(() => {
  if (!process.client) return

  // Wait for full DOM and hydration
  nextTick(() => {
    // Initial delay to ensure all components are mounted
    setTimeout(() => {
      initializePageAnimations()
      handlePageVisibility()
      handleRouteTransition()
    }, 150)

    // Additional initialization after images load
    window.addEventListener('load', () => {
      setTimeout(() => {
        if ($ScrollTrigger) {
          $ScrollTrigger.refresh()
        }
      }, 200)
    })
  })
})

onBeforeUnmount(() => {
  if (!process.client) return

  // Clean up animations
  try {
    if ($animationUtils && $animationUtils.killAll) {
      $animationUtils.killAll()
    }

    if ($ScrollTrigger) {
      $ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  } catch (error) {
    console.warn('Cleanup error:', error)
  }
})

// Handle SSG/SPA transitions
if (process.client) {
  // Additional hydration handling
  const handleHydration = () => {
    if (window.__NUXT__ && window.__NUXT__.state) {
      // Page has been hydrated, safe to initialize animations
      setTimeout(() => {
        if ($ScrollTrigger) {
          $ScrollTrigger.refresh()
        }
        initializePageAnimations()
      }, 100)
    }
  }

  // Watch for hydration completion
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', handleHydration)
  } else {
    handleHydration()
  }
}
</script>

<style scoped>
/* Page-level optimizations */
div {
  contain: layout style paint;
}

/* Ensure smooth rendering during initialization */
.hero-section,
.services-section,
.projects-section,
.about-section,
.contact-section {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/* Fallback for when JavaScript is disabled */
@media (scripting: none) {
  .hero-section,
  .services-section,
  .projects-section,
  .about-section,
  .contact-section {
    opacity: 1 !important;
    transform: none !important;
  }
}

/* Performance optimizations */
@supports (content-visibility: auto) {
  .services-section,
  .projects-section,
  .about-section {
    content-visibility: auto;
    contain-intrinsic-size: 600px;
  }
}
</style>