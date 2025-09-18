<template>
  <section class="services-section section-padding bg-gray-50">
    <div class="container mx-auto">
      <!-- Header -->
      <div class="text-center mb-16 services-header">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          {{ $t('services.title') }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ $t('services.subtitle') }}
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 services-grid">
        <div
            v-for="(service, index) in services"
            :key="index"
            class="service-card group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            :style="{ '--delay': index * 0.1 + 's' }"
        >
          <!-- Icon -->
          <div class="service-icon mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.iconPath"></path>
              </svg>
            </div>
          </div>

          <!-- Content -->
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            {{ $t(service.title) }}
          </h3>

          <p class="text-gray-600 mb-6 leading-relaxed">
            {{ $t(service.description) }}
          </p>

          <!-- Features List -->
          <ul class="space-y-3 mb-8">
            <li
                v-for="feature in service.features"
                :key="feature"
                class="flex items-start space-x-3"
            >
              <svg class="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700 text-sm">{{ $t(feature) }}</span>
            </li>
          </ul>

          <!-- CTA Button -->
          <button
              class="w-full bg-gray-100 hover:bg-yellow-500 hover:text-white text-gray-800 font-semibold py-3 px-6 rounded-lg transition-all duration-300 uppercase tracking-wide text-sm group-hover:bg-yellow-500 group-hover:text-white"
              @click="openServiceModal(service)"
          >
            {{ $t('services.learnMore') }}
          </button>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16 services-cta">
        <NuxtLink :to="localePath('/services')" class="btn-primary">
          {{ $t('services.viewAll') }}
        </NuxtLink>
      </div>
    </div>

    <!-- Service Modal -->
    <Teleport to="body">
      <div
          v-if="selectedService"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          @click="closeServiceModal"
      >
        <div class="bg-white rounded-2xl max-w-4xl w-full max-h-screen overflow-y-auto" @click.stop>
          <div class="p-8">
            <!-- Modal Header -->
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-3xl font-bold text-gray-900">{{ $t(selectedService.title) }}</h2>
              <button
                  @click="closeServiceModal"
                  class="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <!-- Modal Content -->
            <div class="grid lg:grid-cols-2 gap-8">
              <div>
                <p class="text-lg text-gray-600 mb-6">{{ $t(selectedService.longDescription || selectedService.description) }}</p>

                <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ $t('services.included') }}</h3>
                <ul class="space-y-2 mb-8">
                  <li
                      v-for="feature in selectedService.features"
                      :key="feature"
                      class="flex items-start space-x-3"
                  >
                    <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-gray-700">{{ $t(feature) }}</span>
                  </li>
                </ul>
              </div>

              <div class="bg-gray-50 p-6 rounded-2xl">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ $t('services.benefits') }}</h3>
                <div class="space-y-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <span class="text-gray-700">Komplettlösung aus einer Hand</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <span class="text-gray-700">Termingarantie</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <span class="text-gray-700">Kostengarantie</span>
                  </div>
                </div>

                <div class="mt-6 pt-6 border-t border-gray-200">
                  <NuxtLink :to="localePath('/contact')" class="w-full btn-primary block text-center">
                    {{ $t('services.requestQuote') }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
const { $animationUtils } = useNuxtApp()
const localePath = useLocalePath()

// Reactive data
const selectedService = ref(null)

const services = [
  {
    title: 'services.generalContractor.title',
    description: 'services.generalContractor.description',
    longDescription: 'services.generalContractor.longDescription',
    iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    features: [
      'services.generalContractor.feature1',
      'services.generalContractor.feature2',
      'services.generalContractor.feature3',
      'services.generalContractor.feature4'
    ]
  },
  {
    title: 'services.planning.title',
    description: 'services.planning.description',
    longDescription: 'services.planning.longDescription',
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    features: [
      'services.planning.feature1',
      'services.planning.feature2',
      'services.planning.feature3',
      'services.planning.feature4'
    ]
  },
  {
    title: 'services.projectManagement.title',
    description: 'services.projectManagement.description',
    longDescription: 'services.projectManagement.longDescription',
    iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    features: [
      'services.projectManagement.feature1',
      'services.projectManagement.feature2',
      'services.projectManagement.feature3',
      'services.projectManagement.feature4'
    ]
  }
]

// Methods
const openServiceModal = (service) => {
  selectedService.value = service
  document.body.style.overflow = 'hidden'
}

const closeServiceModal = () => {
  selectedService.value = null
  document.body.style.overflow = 'auto'
}

// Initialize animations
const initAnimations = () => {
  if (!$animationUtils) return

  // Animate header
  $animationUtils.fadeIn('.services-header', {
    duration: 1,
    y: 50,
    stagger: 0
  })

  // Animate service cards with improved performance
  $animationUtils.scaleIn('.service-card', {
    duration: 1,
    stagger: 0.15,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      start: 'top 85%'
    }
  })

  // Animate CTA
  $animationUtils.fadeIn('.services-cta', {
    duration: 0.8,
    y: 30,
    scrollTrigger: {
      start: 'top 90%'
    }
  })
}

onMounted(() => {
  nextTick(() => {
    setTimeout(initAnimations, 100)
  })
})

onUnmounted(() => {
  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
/* Service card hover effects */
.service-card {
  transform-style: preserve-3d;
  backface-visibility: hidden;
  will-change: transform;
}

.service-card:hover {
  transform: translateY(-8px) scale(1.02);
}

/* Icon animations */
.service-icon {
  perspective: 1000px;
}

.service-icon > div {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Performance optimizations */
.services-grid {
  contain: layout style paint;
}

/* Responsive design */
@media (max-width: 768px) {
  .service-card {
    padding: 1.5rem;
  }

  .service-card:hover {
    transform: translateY(-4px) scale(1.01);
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .service-card:hover {
    transform: none;
  }

  .service-icon > div {
    transition: none;
  }
}

/* Modal styling */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>