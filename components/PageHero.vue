<template>
  <section
      :class="[
      'page-hero-section relative flex items-center justify-center overflow-hidden',
      heightClass,
      textAlign
    ]"
  >
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <NuxtImg
          :src="backgroundImage"
          :alt="`${title} - GRAVON Projektbau`"
          width="1920"
          height="1080"
          format="webp"
          :loading="priority === 'high' ? 'eager' : 'lazy'"
          :fetchpriority="priority"
          class="w-full h-full object-cover"
          :style="{
          contentVisibility: 'visible',
          containIntrinsicSize: '1920px 1080px'
        }"
      />
      <!-- Overlay -->
      <div
          :class="[
          'absolute inset-0',
          overlayClass
        ]"
      ></div>
    </div>

    <!-- Animated Background Elements (nur bei showShapes) -->
    <div
        v-if="showShapes"
        class="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <div class="floating-shape w-16 h-16 bg-yellow-400 rounded-full opacity-20 absolute top-1/4 left-1/4 gsap-fade"></div>
      <div class="floating-shape w-20 h-20 bg-blue-400 rounded-full opacity-15 absolute top-3/4 right-1/4 gsap-fade"></div>
      <div class="floating-shape w-12 h-12 bg-white rounded-full opacity-25 absolute top-1/2 right-1/3 gsap-fade"></div>
    </div>

    <!-- Breadcrumbs (optional) -->
    <div
        v-if="showBreadcrumbs"
        class="absolute top-8 left-0 right-0 z-20"
    >
      <div class="container mx-auto px-4 lg:px-8">
        <nav class="breadcrumbs gsap-animate" aria-label="Breadcrumb">
          <ol class="flex items-center space-x-2 text-sm text-white/80">
            <li>
              <NuxtLinkLocale :to="{path: '/'}" class="hover:text-white transition-colors">
                {{ $t('nav.home') }}
              </NuxtLinkLocale>
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-white">{{ title }}</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 container mx-auto px-4 lg:px-8 text-white">
      <div :class="contentClass">
        <!-- Badge (optional) -->
        <div
            v-if="badge"
            class="page-hero-badge gsap-animate mb-6"
        >
          <span class="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
            {{ badge }}
          </span>
        </div>

        <!-- Title -->
        <h1 :class="titleClass">
          <span
              v-for="(word, index) in titleWords"
              :key="index"
              class="page-hero-title-word inline-block"
              :style="`animation-delay: ${index * 0.1}s`"
          >
            {{ word }}&nbsp;
          </span>
        </h1>

        <!-- Subtitle -->
        <p
            v-if="subtitle"
            :class="subtitleClass"
        >
          {{ subtitle }}
        </p>

        <!-- CTA Buttons -->
        <div
            v-if="buttons && buttons.length > 0"
            class="page-hero-cta flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <component
              v-for="(button, index) in buttons"
              :key="index"
              :is="button.to ? NuxtLink : 'button'"
              :to="button.to ? button.to : undefined"
              @click="button.onClick"
              :class="[
                  'px-8 py-4 font-semibold transition-all duration-300 uppercase tracking-wide nav-link',
                  button.variant === 'primary'
                    ? 'bg-yellow-500 text-black hover:bg-yellow-400 hover:scale-105'
                    : 'border-2 border-white bg-transparent text-white hover:bg-white hover:text-gray-900 hover:scale-105'
              ]"
          >
            {{ button.text }}
            <svg
                v-if="button.icon"
                class="w-5 h-5 ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  :d="button.iconPath || 'M17 8l4 4m0 0l-4 4m4-4H3'"
              ></path>
            </svg>
          </component>
        </div>

        <!-- Stats (optional) -->
        <div
            v-if="stats && stats.length > 0"
            class="page-hero-stats mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          <div
              v-for="stat in stats"
              :key="stat.label"
              class="text-center stat-item gsap-scale"
          >
            <div
                class="text-3xl lg:text-4xl font-bold text-yellow-500 mb-2 counter"
                :data-target="stat.value"
            >
              0
            </div>
            <div class="text-sm uppercase tracking-wide text-gray-300">
              {{ $t(stat.label) }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator (nur bei full height) -->
    <div
        v-if="height === 'full' && showScrollIndicator"
        class="page-hero-scroll absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
    >
      <div class="flex flex-col items-center gsap-animate">
        <span class="text-sm uppercase tracking-wide mb-2">
          {{ $t('hero.scroll') }}
        </span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import NuxtLink from "#app/components/nuxt-link.js";

const props = defineProps({
  // Content Props
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  badge: {
    type: String,
    default: ''
  },

  // Visual Props
  backgroundImage: {
    type: String,
    default: '/images/frankfurt-skyline.jpg'
  },
  overlay: {
    type: String,
    default: 'dark',
    validator: (value) => ['dark', 'light', 'gradient', 'none'].includes(value)
  },
  height: {
    type: String,
    default: 'medium',
    validator: (value) => ['full', 'large', 'medium', 'small'].includes(value)
  },
  textAlign: {
    type: String,
    default: 'center',
    validator: (value) => ['left', 'center', 'right'].includes(value)
  },
  priority: {
    type: String,
    default: 'auto',
    validator: (value) => ['high', 'low', 'auto'].includes(value)
  },

  // Feature Props
  showBreadcrumbs: {
    type: Boolean,
    default: false
  },
  showShapes: {
    type: Boolean,
    default: false
  },
  showScrollIndicator: {
    type: Boolean,
    default: false
  },

  // Interactive Props
  buttons: {
    type: Array,
    default: () => []
  },
  stats: {
    type: Array,
    default: () => []
  }
})

const { $gsap, $ScrollTrigger, $animationUtils } = useNuxtApp()
const localePath = useLocalePath()

// Computed Properties
const titleWords = computed(() => {
  return props.title.split(' ')
})

const heightClass = computed(() => {
  switch (props.height) {
    case 'full': return 'min-h-screen'
    case 'large': return 'min-h-[80vh] py-20'
    case 'medium': return 'min-h-[60vh] py-16'
    case 'small': return 'min-h-[40vh] py-12'
    default: return 'min-h-[60vh] py-16'
  }
})

const overlayClass = computed(() => {
  switch (props.overlay) {
    case 'dark': return 'bg-gradient-to-r from-gray-900/80 to-gray-900/60'
    case 'light': return 'bg-gradient-to-r from-white/20 to-white/10'
    case 'gradient': return 'bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-gray-900/90'
    case 'none': return ''
    default: return 'bg-gradient-to-r from-gray-900/80 to-gray-900/60'
  }
})

const contentClass = computed(() => {
  const base = 'max-w-5xl mx-auto'
  return props.textAlign === 'center'
      ? `${base} text-center`
      : props.textAlign === 'left'
          ? `${base} text-left`
          : `${base} text-right`
})

const titleClass = computed(() => {
  const baseSize = props.height === 'full'
      ? 'text-4xl lg:text-6xl xl:text-7xl'
      : 'text-3xl lg:text-5xl xl:text-6xl'

  return `page-hero-title ${baseSize} font-bold mb-6 leading-tight`
})

const subtitleClass = computed(() => {
  const baseSize = props.height === 'full'
      ? 'text-xl lg:text-2xl'
      : 'text-lg lg:text-xl'

  return `page-hero-subtitle ${baseSize} max-w-3xl mx-auto font-light`
})

// Animation Methods
const initAnimations = () => {
  if (!$gsap || !$ScrollTrigger) {
    console.warn('GSAP or ScrollTrigger not loaded')
    return
  }

  // Main timeline for hero animations
  const heroTL = $gsap.timeline({
    delay: 0.2,
    onComplete: () => {
      // Floating shapes animation (if enabled)
      if (props.showShapes) {
        $gsap.to('.floating-shape', {
          y: '+=15',
          rotation: '+=8',
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: {
            each: 0.3,
            from: 'random'
          }
        })
      }

      // Scroll indicator bounce (if shown)
      if (props.showScrollIndicator) {
        $gsap.to('.page-hero-scroll', {
          y: '+=8',
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        })
      }
    }
  })

  // Badge animation
  if (props.badge) {
    heroTL.from('.page-hero-badge', {
      duration: 0.6,
      y: 20,
      opacity: 0,
      ease: 'power2.out'
    })
  }

  // Title words animation
  heroTL.from('.page-hero-title-word', {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.1,
    ease: 'power3.out'
  })

  // Subtitle animation
  if (props.subtitle) {
    heroTL.from('.page-hero-subtitle', {
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: 'power2.out'
    }, '-=0.5')
  }

  // Buttons animation
  if (props.buttons && props.buttons.length > 0) {
    heroTL.from('.page-hero-cta', {
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: 'power2.out'
    }, '-=0.3')
  }

  // Stats animation
  if (props.stats && props.stats.length > 0) {
    heroTL.from('.page-hero-stats', {
      duration: 0.6,
      y: 20,
      opacity: 0,
      ease: 'power2.out'
    }, '-=0.2')

    // Counter animation with delay
    setTimeout(() => {
      if ($animationUtils) {
        $animationUtils.counter('.counter', {
          duration: 2.5,
          delay: 0
        })
      }
    }, 1500)
  }

  // Auto-animate common GSAP classes
  setTimeout(() => {
    $animationUtils.fadeInUp('.gsap-animate')
    $animationUtils.scaleIn('.gsap-scale')

    // Fade animations
    $gsap.from('.gsap-fade', {
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power2.out'
    })
  }, 100)
}

// Lifecycle
onMounted(() => {
  setTimeout(() => {
    initAnimations()
  }, 100)
})

onUnmounted(() => {
  if ($ScrollTrigger) {
    $ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }
})
</script>

<style scoped>
.page-hero-section {
  transform: translateZ(0);
  backface-visibility: hidden;
}

.page-hero-title-word {
  display: inline-block;
}

.floating-shape {
  will-change: transform, opacity;
}

/* Performance für mobile */
@media (max-width: 768px) {
  .page-hero-title {
    font-size: 2.5rem !important;
  }

  .page-hero-subtitle {
    font-size: 1.125rem !important;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .floating-shape,
  .page-hero-scroll {
    animation: none !important;
  }
}
</style>