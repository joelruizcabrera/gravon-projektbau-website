<template>
  <div>
    <!-- Page Hero Section -->
    <section class="page-hero-section relative flex items-center justify-center overflow-hidden min-h-[60vh] py-16">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <NuxtImg
            src="/images/frankfurt-skyline.jpg"
            alt="Unsere Leistungen - GRAVON Projektbau"
            class="w-full h-full object-cover"
            loading="lazy"
            width="1920"
            height="1080"
        />
        <!-- Overlay -->
        <div class="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
      </div>

      <!-- Breadcrumbs -->
      <div class="absolute top-8 left-0 right-0 z-20">
        <div class="container mx-auto px-4 lg:px-8">
          <nav class="breadcrumbs gsap-animate" aria-label="Breadcrumb">
            <ol class="flex items-center space-x-2 text-sm text-white/80">
              <li>
                <NuxtLink :to="localePath('/')" class="hover:text-white transition-colors">
                  {{ $t('nav.home') }}
                </NuxtLink>
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-white">{{ $t('services.title') }}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- Main Content -->
      <div class="relative z-10 container mx-auto px-4 lg:px-8 text-white">
        <div class="max-w-5xl mx-auto text-center">
          <!-- Title -->
          <h1 class="page-hero-title text-3xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span v-for="(word, index) in $t('services.title').split(' ')"
                  :key="index"
                  class="page-hero-title-word inline-block"
                  :style="{ animationDelay: `${index * 0.1}s` }">
              {{ word }}&nbsp;
            </span>
          </h1>

          <!-- Subtitle -->
          <p class="page-hero-subtitle text-lg lg:text-xl max-w-3xl mx-auto font-light mb-8">
            {{ $t('services.subtitle') }}
          </p>

          <!-- CTA Button -->
          <div class="page-hero-cta flex justify-center">
            <NuxtLink
                :to="localePath('/contact')"
                class="px-8 py-4 font-semibold transition-all duration-300 uppercase tracking-wide bg-yellow-500 text-black hover:bg-yellow-400 hover:scale-105 rounded-lg inline-flex items-center"
            >
              {{ $t('services.requestQuote') }}
              <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Overview -->
    <section class="section-container py-20 bg-white">
      <!-- Section Header -->
      <div class="container mx-auto px-4 lg:px-8 text-center max-w-4xl mx-auto mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6 gsap-animate">
          {{ $t('services.title') }}
        </h2>
        <p class="text-xl text-gray-600 max-w-4xl mx-auto gsap-animate">
          {{ $t('services.subtitle') }}
        </p>
      </div>

      <!-- Service Cards Grid -->
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8">
          <div
              v-for="(service, index) in serviceOverview"
              :key="index"
              class="universal-card group relative overflow-hidden transition-all duration-300 bg-white rounded-2xl shadow-lg p-6 gsap-scale card-hover"
          >
            <!-- Icon -->
            <div class="flex-shrink-0 mb-4">
              <div class="flex items-center justify-center rounded-2xl transition-all duration-300 w-12 h-12 bg-yellow-500 group-hover:bg-yellow-400 group-hover:scale-110">
                <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.iconPath"></path>
                </svg>
              </div>
            </div>

            <!-- Content -->
            <h3 class="font-bold text-gray-900 mb-3 transition-colors duration-300 text-xl group-hover:text-yellow-600">
              {{ $t(service.title) }}
            </h3>

            <p class="text-gray-600 mb-4 text-base">
              {{ $t(service.description) }}
            </p>

            <!-- Features List -->
            <ul class="space-y-2 mb-4">
              <li
                  v-for="(feature, featureIndex) in service.features"
                  :key="featureIndex"
                  class="flex items-start text-sm text-gray-700"
              >
                <svg class="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                {{ $t(feature) }}
              </li>
            </ul>

            <!-- Action Button -->
            <div class="flex items-center justify-between mt-auto pt-4">
              <button
                  @click="openServiceModal(service)"
                  class="px-4 py-2 bg-yellow-500 text-black text-sm font-medium rounded-lg hover:bg-yellow-600 transition-colors duration-200 service-learn-more-btn"
              >
                {{ $t('services.learnMore') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Services -->
    <section class="section-container py-20 bg-gray-50">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="space-y-20">
          <div
              v-for="(service, index) in detailedServices"
              :key="index"
              class="grid lg:grid-cols-2 gap-16 items-center"
              :class="{ 'lg:grid-flow-col-dense': index % 2 === 1 }"
          >
            <!-- Content -->
            <div class="gsap-slide-left" :class="{ 'lg:col-start-2': index % 2 === 1 }">
              <div class="universal-card group relative overflow-hidden transition-all duration-300 bg-white rounded-2xl shadow-none border border-gray-100 p-8 gsap-scale card-hover">
                <!-- Icon -->
                <div class="flex-shrink-0 mb-4">
                  <div class="flex items-center justify-center rounded-2xl transition-all duration-300 w-16 h-16 bg-yellow-500 group-hover:bg-yellow-400 group-hover:scale-110">
                    <svg class="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.iconPath"></path>
                    </svg>
                  </div>
                </div>

                <!-- Content -->
                <h3 class="font-bold text-gray-900 mb-3 transition-colors duration-300 text-2xl group-hover:text-yellow-600">
                  {{ $t(service.title) }}
                </h3>

                <p class="text-gray-600 mb-4 text-lg">
                  {{ $t(service.longDescription) }}
                </p>

                <!-- Features List -->
                <ul class="space-y-2 mb-4">
                  <li
                      v-for="(feature, featureIndex) in service.detailedFeatures"
                      :key="featureIndex"
                      class="flex items-start text-sm text-gray-700"
                  >
                    <svg class="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    {{ $t(feature) }}
                  </li>
                </ul>

                <!-- Actions -->
                <div class="flex items-center justify-between mt-auto pt-4">
                  <NuxtLink
                      :to="localePath('/contact')"
                      class="px-4 py-2 bg-yellow-500 text-black text-sm font-medium rounded-lg hover:bg-yellow-600 transition-colors duration-200"
                  >
                    {{ $t('services.requestQuote') }}
                  </NuxtLink>
                  <button
                      class="text-gray-500 hover:text-yellow-600 transition-colors duration-200"
                      @click="openServiceModal(service)"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Image -->
            <div class="gsap-slide-right" :class="{ 'lg:col-start-1 lg:row-start-1': index % 2 === 1 }">
              <NuxtImg
                  :src="service.image"
                  :alt="$t(service.title)"
                  class="w-full rounded-2xl shadow-2xl"
                  loading="lazy"
                  width="600"
                  height="400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Modal -->
    <Teleport to="body">
      <div
          v-if="selectedService"
          class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 service-modal"
          @click.self="closeServiceModal"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="selectedService ? `modal-title-${selectedService.title}` : ''"
      >
        <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div class="p-8">
            <!-- Header -->
            <div class="flex justify-between items-start mb-6">
              <div>
                <h2
                    :id="selectedService ? `modal-title-${selectedService.title}` : ''"
                    class="text-3xl font-bold text-gray-900 mb-2"
                >
                  {{ selectedService ? $t(selectedService.title) : '' }}
                </h2>
                <p class="text-gray-600">
                  {{ selectedService ? $t(selectedService.longDescription) : '' }}
                </p>
              </div>
              <button
                  @click="closeServiceModal"
                  class="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
                  aria-label="Modal schließen"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Content -->
            <div v-if="selectedService" class="space-y-6">
              <!-- Features -->
              <div>
                <h3 class="text-xl font-semibold mb-4">{{ $t('services.included') }}</h3>
                <div class="grid md:grid-cols-2 gap-3">
                  <div
                      v-for="(feature, index) in selectedService.detailedFeatures"
                      :key="index"
                      class="flex items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <div class="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg class="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <span class="text-gray-700 text-sm">{{ $t(feature) }}</span>
                  </div>
                </div>
              </div>

              <!-- CTA -->
              <div class="mt-6 pt-6 border-t border-gray-200">
                <NuxtLink
                    :to="localePath('/contact')"
                    class="w-full px-8 py-4 bg-yellow-500 text-black text-center font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-200 block"
                    @click="closeServiceModal"
                >
                  {{ $t('services.requestQuote') }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
const { $gsap, $ScrollTrigger, $animationUtils } = useNuxtApp()
const localePath = useLocalePath()
const { t: $t } = useI18n()

// Meta
useHead({
  title: $t('services.title'),
  meta: [
    { name: 'description', content: $t('services.subtitle') }
  ]
})

// Reactive data
const selectedService = ref(null)

// Service overview data
const serviceOverview = [
  {
    title: 'services.generalContractor.title',
    description: 'services.generalContractor.description',
    longDescription: 'services.generalContractor.longDescription',
    iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    image: '/images/frankfurt-skyline.jpg',
    features: [
      'services.generalContractor.feature1',
      'services.generalContractor.feature2',
      'services.generalContractor.feature3'
    ],
    detailedFeatures: [
      'services.generalContractor.detailedFeature1',
      'services.generalContractor.detailedFeature2',
      'services.generalContractor.detailedFeature3',
      'services.generalContractor.detailedFeature4',
      'services.generalContractor.detailedFeature5',
      'services.generalContractor.detailedFeature6'
    ]
  },
  {
    title: 'services.planning.title',
    description: 'services.planning.description',
    longDescription: 'services.planning.longDescription',
    iconPath: 'M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2zm8 0h-2a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2z',
    image: '/images/frankfurt-skyline.jpg',
    features: [
      'services.planning.feature1',
      'services.planning.feature2',
      'services.planning.feature3'
    ],
    detailedFeatures: [
      'services.planning.detailedFeature1',
      'services.planning.detailedFeature2',
      'services.planning.detailedFeature3',
      'services.planning.detailedFeature4',
      'services.planning.detailedFeature5',
      'services.planning.detailedFeature6'
    ]
  },
  {
    title: 'services.projectManagement.title',
    description: 'services.projectManagement.description',
    longDescription: 'services.projectManagement.longDescription',
    iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    image: '/images/frankfurt-skyline.jpg',
    features: [
      'services.projectManagement.feature1',
      'services.projectManagement.feature2',
      'services.projectManagement.feature3'
    ],
    detailedFeatures: [
      'services.projectManagement.detailedFeature1',
      'services.projectManagement.detailedFeature2',
      'services.projectManagement.detailedFeature3',
      'services.projectManagement.detailedFeature4',
      'services.projectManagement.detailedFeature5',
      'services.projectManagement.detailedFeature6'
    ]
  }
]

// Detailed services (same data, different presentation)
const detailedServices = serviceOverview

// Initialize animations
const initAnimations = () => {
  if (!$animationUtils || !$gsap || !$ScrollTrigger) {
    console.warn('Animation utilities not available')
    return
  }

  try {
    // Hero animations with timeline
    const heroTl = $gsap.timeline({ delay: 0.3 })

    // Set initial states
    $gsap.set('.page-hero-title-word', { y: 30, opacity: 0 })
    $gsap.set('.page-hero-subtitle', { y: 20, opacity: 0 })
    $gsap.set('.page-hero-cta', { y: 15, opacity: 0 })

    // Animate in sequence
    heroTl
        .to('.page-hero-title-word', {
          duration: 0.6,
          y: 0,
          opacity: 1,
          stagger: 0.08,
          ease: 'power2.out'
        })
        .to('.page-hero-subtitle', {
          duration: 0.5,
          y: 0,
          opacity: 1,
          ease: 'power2.out'
        }, '-=0.3')
        .to('.page-hero-cta', {
          duration: 0.4,
          y: 0,
          opacity: 1,
          ease: 'power2.out'
        }, '-=0.2')

    // Use animation utils for scroll-triggered animations
    $animationUtils.scaleIn('.universal-card', {
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    })

    $animationUtils.slideInFromLeft('.gsap-slide-left', {
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    })

    $animationUtils.slideInFromRight('.gsap-slide-right', {
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    })

  } catch (error) {
    console.warn('Animation initialization failed:', error)
  }
}

// Methods
const openServiceModal = (service) => {
  if (!service) return

  selectedService.value = service
  document.body.style.overflow = 'hidden'

  // Focus trap for accessibility
  nextTick(() => {
    const modal = document.querySelector('.service-modal')
    if (modal) {
      const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      if (focusableElements.length > 0) {
        focusableElements[0].focus()
      }
    }
  })
}

const closeServiceModal = () => {
  selectedService.value = null
  document.body.style.overflow = 'auto'

  // Return focus to trigger element
  nextTick(() => {
    const activeButton = document.querySelector('button:focus')
    if (!activeButton) {
      // Find the last clicked service button
      const serviceButtons = document.querySelectorAll('.service-learn-more-btn')
      if (serviceButtons.length > 0) {
        serviceButtons[serviceButtons.length - 1].focus()
      }
    }
  })
}

// Handle ESC key for modal
const handleKeyDown = (event) => {
  if (event.key === 'Escape' && selectedService.value) {
    closeServiceModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
  // Wait for DOM to be ready
  nextTick(() => {
    setTimeout(() => {
      initAnimations()
    }, 100)
  })
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeyDown)
  // Clean up
  document.body.style.overflow = 'auto'

  // Kill all ScrollTrigger instances for this page
  if ($ScrollTrigger) {
    $ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.trigger && document.contains(trigger.trigger)) {
        trigger.kill()
      }
    })
    // Refresh remaining triggers
    $ScrollTrigger.refresh()
  }
})
</script>

<style scoped>
/* Page Hero Animations */
.page-hero-title-word {
  display: inline-block;
  will-change: transform, opacity;
}

/* Card Hover Effects */
.universal-card {
  transform-style: preserve-3d;
  backface-visibility: hidden;
  will-change: transform;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-hover:hover {
  transform: translateY(-4px) scale(1.01);
}

/* Performance optimizations */
.section-container {
  contain: layout style paint;
}

/* GSAP Animation Targets */
.gsap-slide-left,
.gsap-slide-right {
  will-change: transform, opacity;
}

/* Smooth rendering */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Hardware acceleration for smooth animations */
.page-hero-section,
.universal-card,
.gsap-slide-left,
.gsap-slide-right {
  transform: translateZ(0);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-hover:hover {
    transform: translateY(-2px) scale(1.005);
  }

  .page-hero-title {
    font-size: 2.5rem !important;
  }

  .page-hero-subtitle {
    font-size: 1rem !important;
  }
}

/* Accessibility and reduced motion */
@media (prefers-reduced-motion: reduce) {
  .card-hover:hover {
    transform: none;
  }

  .universal-card {
    transition: none;
  }

  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Modal transitions */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* Loading states */
.universal-card {
  min-height: 320px; /* Prevent layout shift */
}

/* Improved focus states for accessibility */
.universal-card:focus-within {
  outline: 2px solid #f59e0b;
  outline-offset: 2px;
}

button:focus-visible {
  outline: 2px solid #f59e0b;
  outline-offset: 2px;
}
</style>