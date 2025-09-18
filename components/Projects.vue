<template>
  <section class="section-padding bg-white">
    <div class="container mx-auto">
      <!-- Header -->
      <div class="text-center mb-16 projects-header">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          {{ $t('projects.title') }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ $t('projects.subtitle') }}
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 projects-grid">
        <div
            v-for="(project, index) in projects"
            :key="project.id"
            class="project-card group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            :style="{ '--delay': index * 0.15 + 's' }"
            @click="openProjectModal(project)"
        >
          <!-- Image Container -->
          <div class="relative h-80 overflow-hidden">
            <img
                :src="project.image"
                :alt="$t(project.title)"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            <!-- Category Badge -->
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 bg-yellow-500 text-black text-sm font-medium rounded-full shadow-lg">
                {{ $t('projects.categories.' + project.category) }}
              </span>
            </div>

            <!-- Hover Overlay -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20">
              <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transform scale-75 group-hover:scale-100 transition-transform duration-300">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
            </div>

            <!-- Project Info Overlay -->
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 class="text-xl font-bold mb-2 opacity-100">{{ $t(project.title) }}</h3>
              <p class="text-gray-200 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {{ $t(project.description) }}
              </p>

              <!-- Meta Info -->
              <div class="flex items-center justify-between text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                <span class="flex items-center">
                  <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {{ project.location }}
                </span>
                <span>{{ project.year }}</span>
              </div>
            </div>
          </div>

          <!-- Tags -->
          <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="flex flex-wrap gap-1 justify-end">
              <span
                  v-for="tag in project.tags.slice(0, 2)"
                  :key="tag"
                  class="px-2 py-1 bg-black/50 text-white text-xs rounded-full backdrop-blur-sm"
              >
                {{ $t('projects.tags.' + tag) }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center projects-cta">
        <NuxtLink :to="localePath('/projects')" class="btn-primary">
          {{ $t('projects.viewAll') }}
        </NuxtLink>
      </div>
    </div>

    <!-- Project Modal -->
    <Teleport to="body">
      <div
          v-if="selectedProject"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          @click="closeProjectModal"
      >
        <div
            class="bg-white rounded-2xl max-w-6xl w-full max-h-screen overflow-y-auto modal-content"
            @click.stop
        >
          <!-- Modal Header -->
          <div class="relative">
            <img
                :src="selectedProject.image"
                :alt="$t(selectedProject.title)"
                class="w-full h-80 object-cover"
            />
            <button
                @click="closeProjectModal"
                class="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-all duration-300"
                aria-label="Modal schließen"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <!-- Project Category -->
            <div class="absolute top-4 left-4">
              <span class="px-3 py-1 bg-yellow-500 text-black text-sm font-medium rounded-full">
                {{ $t('projects.categories.' + selectedProject.category) }}
              </span>
            </div>
          </div>

          <!-- Modal Content -->
          <div class="p-8">
            <div class="grid lg:grid-cols-3 gap-8">
              <!-- Main Content -->
              <div class="lg:col-span-2">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ $t(selectedProject.title) }}</h2>
                <p class="text-lg text-gray-600 mb-6">{{ $t(selectedProject.longDescription) }}</p>

                <!-- Project Description -->
                <div class="prose prose-lg max-w-none">
                  <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ $t('projects.modal.description') }}</h3>
                  <p class="text-gray-600 mb-6">{{ $t(selectedProject.fullDescription || selectedProject.longDescription) }}</p>

                  <!-- Challenges if available -->
                  <div v-if="selectedProject.challenges" class="mb-6">
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ $t('projects.modal.challenges') }}</h3>
                    <ul class="space-y-2">
                      <li
                          v-for="challenge in selectedProject.challenges"
                          :key="challenge"
                          class="flex items-start"
                      >
                        <svg class="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-gray-700">{{ $t(challenge) }}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Image Gallery placeholder -->
                <div v-if="selectedProject.gallery" class="mt-8">
                  <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ $t('projects.modal.gallery') }}</h3>
                  <div class="grid md:grid-cols-2 gap-4">
                    <img
                        v-for="(image, index) in selectedProject.gallery"
                        :key="index"
                        :src="image"
                        :alt="`${$t(selectedProject.title)} ${index + 1}`"
                        class="w-full h-48 object-cover rounded-lg hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                        loading="lazy"
                        @click="openImageGallery(image, index)"
                    />
                  </div>
                </div>
              </div>

              <!-- Project Details Sidebar -->
              <div class="lg:col-span-1">
                <div class="bg-gray-50 p-6 rounded-2xl space-y-6 sticky top-4">
                  <h3 class="text-xl font-semibold text-gray-900">{{ $t('projects.modal.details') }}</h3>

                  <div class="space-y-4">
                    <div>
                      <div class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">{{ $t('projects.modal.client') }}</div>
                      <div class="text-gray-900">{{ selectedProject.client }}</div>
                    </div>

                    <div>
                      <div class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">{{ $t('projects.modal.location') }}</div>
                      <div class="text-gray-900">{{ selectedProject.location }}</div>
                    </div>

                    <div>
                      <div class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">{{ $t('projects.modal.duration') }}</div>
                      <div class="text-gray-900">{{ selectedProject.duration }}</div>
                    </div>

                    <div>
                      <div class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">{{ $t('projects.modal.size') }}</div>
                      <div class="text-gray-900">{{ selectedProject.size }}</div>
                    </div>

                    <div>
                      <div class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">{{ $t('projects.modal.year') }}</div>
                      <div class="text-gray-900">{{ selectedProject.year }}</div>
                    </div>
                  </div>

                  <!-- Services -->
                  <div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-3">{{ $t('projects.modal.services') }}</h4>
                    <ul class="space-y-2">
                      <li
                          v-for="service in selectedProject.services"
                          :key="service"
                          class="flex items-center"
                      >
                        <svg class="w-4 h-4 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-gray-700 text-sm">{{ getServiceName(service) }}</span>
                      </li>
                    </ul>
                  </div>

                  <!-- Tags -->
                  <div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-3">{{ $t('projects.modal.tags') }}</h4>
                    <div class="flex flex-wrap gap-2">
                      <span
                          v-for="tag in selectedProject.tags"
                          :key="tag"
                          class="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
                      >
                        {{ $t('projects.tags.' + tag) }}
                      </span>
                    </div>
                  </div>

                  <!-- CTA -->
                  <div class="pt-4 border-t border-gray-200">
                    <NuxtLink
                        :to="localePath('/contact')"
                        class="w-full btn-primary block text-center"
                        @click="closeProjectModal"
                    >
                      {{ $t('projects.modal.contact') }}
                    </NuxtLink>
                  </div>
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
const { $animationUtils, $gsap } = useNuxtApp()
const localePath = useLocalePath()

// Reactive state
const selectedProject = ref(null)

const projects = [
  {
    id: 1,
    title: 'projects.project1.title',
    description: 'projects.project1.description',
    longDescription: 'projects.project1.longDescription',
    fullDescription: 'projects.project1.fullDescription',
    image: '/images/frankfurt-skyline.jpg',
    gallery: [
      '/images/frankfurt-skyline.jpg',
      '/images/frankfurt-skyline.jpg',
      '/images/frankfurt-skyline.jpg',
      '/images/frankfurt-skyline.jpg'
    ],
    category: 'commercial',
    tags: ['office', 'modern', 'sustainable'],
    location: 'Frankfurt am Main',
    duration: '24 Monate',
    size: '15.000 m²',
    year: '2023',
    client: 'Frankfurt Development GmbH',
    services: ['planning', 'generalContractor', 'projectManagement'],
    challenges: [
      'projects.project1.challenge1',
      'projects.project1.challenge2',
      'projects.project1.challenge3'
    ]
  },
  {
    id: 2,
    title: 'projects.project2.title',
    description: 'projects.project2.description',
    longDescription: 'projects.project2.longDescription',
    fullDescription: 'projects.project2.fullDescription',
    image: '/images/frankfurt-skyline.jpg',
    category: 'residential',
    tags: ['luxury', 'apartments', 'premium'],
    location: 'München',
    duration: '30 Monate',
    size: '8.500 m²',
    year: '2022',
    client: 'Munich Living AG',
    services: ['planning', 'generalContractor'],
    challenges: [
      'projects.project2.challenge1',
      'projects.project2.challenge2',
      'projects.project2.challenge3'
    ]
  },
  {
    id: 3,
    title: 'projects.project3.title',
    description: 'projects.project3.description',
    longDescription: 'projects.project3.longDescription',
    fullDescription: 'projects.project3.fullDescription',
    image: '/images/frankfurt-skyline.jpg',
    category: 'industrial',
    tags: ['logistics', 'automated', 'sustainable'],
    location: 'Hamburg',
    duration: '18 Monate',
    size: '25.000 m²',
    year: '2023',
    client: 'Logistics Hamburg GmbH',
    services: ['generalContractor', 'projectManagement'],
    challenges: [
      'projects.project3.challenge1',
      'projects.project3.challenge2',
      'projects.project3.challenge3'
    ]
  }
]

// Methods
const openProjectModal = (project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'

  // Add modal animation
  nextTick(() => {
    if ($gsap) {
      $gsap.fromTo('.modal-content', {
        opacity: 0,
        scale: 0.95,
        y: 20
      }, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  })
}

const closeProjectModal = () => {
  if ($gsap) {
    $gsap.to('.modal-content', {
      opacity: 0,
      scale: 0.95,
      y: 20,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => {
        selectedProject.value = null
        document.body.style.overflow = 'auto'
      }
    })
  } else {
    selectedProject.value = null
    document.body.style.overflow = 'auto'
  }
}

const openImageGallery = (image, index) => {
  // Simple image overlay - could be enhanced with a proper gallery
  console.log('Open image gallery:', image, index)
}

const getServiceName = (serviceKey) => {
  const serviceNames = {
    planning: 'Planung & Architektur',
    generalContractor: 'Generalunternehmen',
    projectManagement: 'Projektsteuerung'
  }
  return serviceNames[serviceKey] || serviceKey
}

// Animations
const initAnimations = () => {
  if (!$animationUtils) {
    console.warn('Animation utilities not available')
    return
  }

  // Animate header
  $animationUtils.fadeIn('.projects-header', {
    duration: 1,
    y: 50,
    scrollTrigger: {
      start: 'top 85%'
    }
  })

  // Animate project cards with improved stagger
  $animationUtils.scaleIn('.project-card', {
    duration: 1,
    stagger: 0.15,
    ease: 'back.out(1.2)',
    scrollTrigger: {
      trigger: '.projects-grid',
      start: 'top 80%'
    }
  })

  // Animate CTA
  $animationUtils.fadeIn('.projects-cta', {
    duration: 0.8,
    y: 30,
    scrollTrigger: {
      trigger: '.projects-cta',
      start: 'top 90%'
    }
  })
}

// Handle escape key for modal
const handleKeydown = (e) => {
  if (e.key === 'Escape' && selectedProject.value) {
    closeProjectModal()
  }
}

onMounted(() => {
  nextTick(() => {
    setTimeout(initAnimations, 100)
  })

  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.body.style.overflow = 'auto'
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
/* Project card enhancements */
.project-card {
  transform-style: preserve-3d;
  backface-visibility: hidden;
  will-change: transform, box-shadow;
}

.project-card:hover {
  transform: translateY(-8px) scale(1.02);
}

/* Image hover effects */
.project-card img {
  will-change: transform;
  backface-visibility: hidden;
}

/* Modal styling */
.modal-content {
  max-height: 90vh;
  transform-style: preserve-3d;
}

/* Scrollbar styling for modal */
.modal-content::-webkit-scrollbar {
  width: 8px;
}

.modal-content::-webkit-scrollbar-track {
  background: #f1f5f9;
}

.modal-content::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Performance optimizations */
.projects-grid {
  contain: layout style paint;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .project-card {
    margin-bottom: 1rem;
  }

  .project-card:hover {
    transform: translateY(-4px) scale(1.01);
  }

  .modal-content {
    margin: 1rem;
    max-height: calc(100vh - 2rem);
  }
}

@media (max-width: 640px) {
  .project-card h3 {
    font-size: 1.1rem;
  }

  .project-card p {
    font-size: 0.875rem;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .project-card:hover {
    transform: none;
  }

  .project-card img {
    transition: none;
    transform: none !important;
  }

  .modal-content {
    transition: none;
  }
}

/* Focus states */
.project-card:focus {
  outline: 2px solid #f59e0b;
  outline-offset: 2px;
}

/* Loading state for images */
.project-card img {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
}

.project-card img:not([src]) {
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Enhanced hover states */
.project-card .absolute {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Smooth transitions */
* {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>