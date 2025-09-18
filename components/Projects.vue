<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div class="absolute inset-0 bg-black/40"></div>
      <div class="relative z-10 text-center container mx-auto px-6">
        <h1 class="text-4xl lg:text-6xl font-bold mb-6 hero-title">{{ $t('projects.title') }}</h1>
        <p class="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto hero-subtitle">
          {{ $t('projects.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="section-padding bg-gray-50">
      <div class="container mx-auto">
        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button
              v-for="category in categories"
              :key="category.id"
              @click="setActiveCategory(category.id)"
              :class="[
              'px-6 py-3 rounded-full font-medium transition-all duration-300',
              activeCategory === category.id
                ? 'bg-yellow-500 text-black shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md hover:shadow-lg'
            ]"
          >
            {{ $t(category.name) }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div
              v-for="(project, index) in filteredProjects"
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
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ $t(project.title) }}</h3>
              <p class="text-gray-600 mb-4">{{ $t(project.description) }}</p>

              <div class="flex items-center justify-between text-sm text-gray-500">
                <span>{{ project.location }}</span>
                <span>{{ project.year }}</span>
              </div>

              <div class="flex flex-wrap gap-2 mt-4">
                <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                >
                  {{ $t('projects.tags.' + tag) }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12" v-if="hasMoreProjects">
          <button
              @click="loadMoreProjects"
              class="btn-primary"
              :disabled="isLoading"
          >
            {{ isLoading ? $t('projects.loading') : $t('projects.loadMore') }}
          </button>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="section-padding bg-slate-900 text-white">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-6">{{ $t('projects.stats.title') }}</h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">{{ $t('projects.stats.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
              v-for="stat in projectStats"
              :key="stat.label"
              class="text-center"
          >
            <div class="text-4xl font-bold text-yellow-500 mb-2 counter" :data-target="stat.value">
              0
            </div>
            <div class="text-gray-300">{{ $t(stat.label) }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Modal -->
    <Teleport to="body">
      <div
          v-if="selectedProject"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          @click="closeProjectModal"
      >
        <div class="modal-content bg-white rounded-2xl max-w-6xl w-full max-h-screen overflow-y-auto" @click.stop>
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
            <div class="grid lg:grid-cols-2 gap-8">
              <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ $t(selectedProject.title) }}</h2>
                <p class="text-gray-600 mb-6">{{ $t(selectedProject.longDescription) }}</p>

                <!-- Project Details -->
                <div class="space-y-4">
                  <div class="flex justify-between">
                    <span class="font-medium text-gray-900">{{ $t('projects.modal.location') }}:</span>
                    <span class="text-gray-600">{{ selectedProject.location }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="font-medium text-gray-900">{{ $t('projects.modal.duration') }}:</span>
                    <span class="text-gray-600">{{ selectedProject.duration }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="font-medium text-gray-900">{{ $t('projects.modal.size') }}:</span>
                    <span class="text-gray-600">{{ selectedProject.size }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="font-medium text-gray-900">{{ $t('projects.modal.year') }}:</span>
                    <span class="text-gray-600">{{ selectedProject.year }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="font-medium text-gray-900">{{ $t('projects.modal.client') }}:</span>
                    <span class="text-gray-600">{{ selectedProject.client }}</span>
                  </div>
                </div>

                <!-- Tags -->
                <div class="mt-6">
                  <h3 class="font-medium text-gray-900 mb-2">{{ $t('projects.modal.tags') }}:</h3>
                  <div class="flex flex-wrap gap-2">
                    <span
                        v-for="tag in selectedProject.tags"
                        :key="tag"
                        class="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full"
                    >
                      {{ $t('projects.tags.' + tag) }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Services and Challenges -->
              <div>
                <h3 class="text-lg font-bold text-gray-900 mb-4">{{ $t('projects.modal.services') }}</h3>
                <ul class="space-y-2 mb-6">
                  <li v-for="service in selectedProject.services" :key="service" class="flex items-center">
                    <svg class="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    {{ $t('services.' + service + '.title') }}
                  </li>
                </ul>

                <h3 class="text-lg font-bold text-gray-900 mb-4">{{ $t('projects.modal.challenges') }}</h3>
                <ul class="space-y-2">
                  <li v-for="challenge in selectedProject.challenges" :key="challenge" class="flex items-start">
                    <svg class="w-5 h-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    {{ $t(challenge) }}
                  </li>
                </ul>
              </div>
            </div>

            <!-- CTA -->
            <div class="pt-4 border-t border-gray-200 mt-8">
              <NuxtLink :to="localePath('/contact')" class="w-full btn-primary block text-center">
                {{ $t('projects.modal.contact') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const router = useRouter()

// Access GSAP utilities
const { $gsap, $ScrollTrigger, $animationUtils } = useNuxtApp()

// Reactive data
const selectedProject = ref(null)
const isLoading = ref(false)
const hasMoreProjects = ref(true)

// Initialize active category from URL query or default
const activeCategory = ref(route.query.category || 'all')

// SEO
useHead({
  title: t('projects.title') + ' - GRAVON Projektbau',
  meta: [
    {
      name: 'description',
      content: t('projects.meta.description')
    }
  ]
})

// Categories
const categories = [
  { id: 'all', name: 'projects.categories.all' },
  { id: 'commercial', name: 'projects.categories.commercial' },
  { id: 'residential', name: 'projects.categories.residential' },
  { id: 'industrial', name: 'projects.categories.industrial' },
  { id: 'infrastructure', name: 'projects.categories.infrastructure' }
]

// All projects data
const allProjects = [
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
    client: 'Frankfurt Business AG',
    services: ['generalContractor', 'planning'],
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
  },
  {
    id: 4,
    title: 'projects.project4.title',
    description: 'projects.project4.description',
    longDescription: 'projects.project4.longDescription',
    fullDescription: 'projects.project4.fullDescription',
    image: '/images/frankfurt-skyline.jpg',
    category: 'infrastructure',
    tags: ['bridge', 'engineering', 'public'],
    location: 'Berlin',
    duration: '36 Monate',
    size: '500 m Länge',
    year: '2021',
    client: 'Stadt Berlin',
    services: ['planning', 'generalContractor'],
    challenges: [
      'projects.project4.challenge1',
      'projects.project4.challenge2',
      'projects.project4.challenge3'
    ]
  },
  {
    id: 5,
    title: 'projects.project5.title',
    description: 'projects.project5.description',
    longDescription: 'projects.project5.longDescription',
    fullDescription: 'projects.project5.fullDescription',
    image: '/images/frankfurt-skyline.jpg',
    category: 'commercial',
    tags: ['retail', 'shopping', 'modern'],
    location: 'Köln',
    duration: '20 Monate',
    size: '12.000 m²',
    year: '2022',
    client: 'Retail Center GmbH',
    services: ['generalContractor', 'projectManagement'],
    challenges: [
      'projects.project5.challenge1',
      'projects.project5.challenge2',
      'projects.project5.challenge3'
    ]
  },
  {
    id: 6,
    title: 'projects.project6.title',
    description: 'projects.project6.description',
    longDescription: 'projects.project6.longDescription',
    fullDescription: 'projects.project6.fullDescription',
    image: '/images/frankfurt-skyline.jpg',
    category: 'residential',
    tags: ['family', 'sustainable', 'affordable'],
    location: 'Stuttgart',
    duration: '28 Monate',
    size: '6.500 m²',
    year: '2023',
    client: 'Wohnbau Stuttgart eG',
    services: ['planning', 'generalContractor'],
    challenges: [
      'projects.project6.challenge1',
      'projects.project6.challenge2',
      'projects.project6.challenge3'
    ]
  }
]

// Project statistics
const projectStats = [
  { value: '200', label: 'projects.stats.completed' },
  { value: '500', label: 'projects.stats.volume' },
  { value: '25', label: 'projects.stats.years' },
  { value: '95', label: 'projects.stats.satisfaction' }
]

// Computed properties
const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return allProjects
  }
  return allProjects.filter(project => project.category === activeCategory.value)
})

// Methods
const setActiveCategory = async (category) => {
  activeCategory.value = category

  // Update URL query parameters
  await router.push({
    query: {
      ...route.query,
      category: category === 'all' ? undefined : category
    }
  })

  // Animate new projects
  nextTick(() => {
    if ($animationUtils) {
      $animationUtils.fadeIn('.project-card', {
        duration: 0.5,
        stagger: 0.1
      })
    }
  })
}

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

const loadMoreProjects = () => {
  isLoading.value = true
  // Simulate loading more projects
  setTimeout(() => {
    isLoading.value = false
    hasMoreProjects.value = false
  }, 1000)
}

const animateCounters = () => {
  if ($animationUtils) {
    $animationUtils.counter('.counter', {
      duration: 2
    })
  }
}

const initAnimations = () => {
  if (!$animationUtils) return

  // Animate project cards
  $animationUtils.fadeIn('.project-card', {
    duration: 1,
    y: 50,
    stagger: 0.15
  })

  // Animate stats
  animateCounters()
}

// Watch for query parameter changes on page load
watch(() => route.query.category, (newCategory) => {
  if (newCategory && newCategory !== activeCategory.value) {
    activeCategory.value = newCategory
  }
}, { immediate: true })

// Lifecycle
onMounted(() => {
  // Initialize category from URL on mount
  if (route.query.category) {
    activeCategory.value = route.query.category
  }

  // Initialize animations with delay to ensure DOM is ready
  setTimeout(() => {
    initAnimations()
  }, 100)
})

onUnmounted(() => {
  document.body.style.overflow = 'auto'

  // Cleanup GSAP animations
  if ($animationUtils) {
    $animationUtils.killAll()
  }
})
</script>

<style scoped>
.project-card {
  animation-delay: var(--delay);
}

.hero-section {
  background-image: url('/images/frankfurt-skyline.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media (max-width: 768px) {
  .project-card {
    margin-bottom: 2rem;
  }
}
</style>