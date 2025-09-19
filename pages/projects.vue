<template>
  <div>
    <!-- Hero Section -->
    <PageHero
        :title="$t('projects.title')"
        :subtitle="$t('projects.subtitle')"
        background-image="/images/frankfurt-skyline.jpg"
        height="medium"
        :show-breadcrumbs="true"
        badge="Referenzen"
        :stats="projectStats"
    />

    <!-- Filter Section -->
    <section class="section-padding bg-white">
      <div class="container mx-auto">
        <div class="text-center">
          <div class="inline-flex bg-gray-100 rounded-full p-2 gsap-animate">
            <button
                v-for="category in categories"
                :key="category"
                @click="activeCategory = category"
                :class="[
                'px-6 py-3 rounded-full transition-all duration-300',
                activeCategory === category
                  ? 'bg-yellow-500 text-black shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              ]"
            >
              {{ $t(`projects.categories.${category}`) }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="section-padding bg-gray-50">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
              v-for="project in filteredProjects"
              :key="project.id"
              class="project-card group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
              @click="openProjectModal(project)"
          >
            <div class="relative h-64 overflow-hidden">
              <NuxtImg
                  :src="project.image"
                  :alt="$t(project.title)"
                  :placeholder="'/images/frankfurt-skyline.jpg'"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              ></NuxtImg>
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              <!-- Category Badge -->
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 bg-yellow-500 text-black text-sm font-medium rounded-full">
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
            <div class="grid lg:grid-cols-3 gap-8">
              <!-- Main Content -->
              <div class="lg:col-span-2">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ $t(selectedProject.title) }}</h2>
                <p class="text-lg text-gray-600 mb-6">{{ $t(selectedProject.longDescription) }}</p>

                <!-- Project Description -->
                <div class="prose prose-lg max-w-none">
                  <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ $t('projects.modal.description') }}</h3>
                  <p class="text-gray-600 mb-6">{{ $t(selectedProject.fullDescription) }}</p>

                  <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ $t('projects.modal.challenges') }}</h3>
                  <ul class="space-y-2 mb-6">
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

                <!-- Image Gallery -->
                <div v-if="selectedProject.gallery" class="mt-8">
                  <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ $t('projects.modal.gallery') }}</h3>
                  <div class="grid md:grid-cols-2 gap-4">
                    <img
                        v-for="(image, index) in selectedProject.gallery"
                        :key="index"
                        :src="image"
                        :alt="`${$t(selectedProject.title)} ${index + 1}`"
                        class="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
                        @click="openImageModal(image)"
                    />
                  </div>
                </div>
              </div>

              <!-- Project Details Sidebar -->
              <div class="lg:col-span-1">
                <div class="bg-gray-50 p-6 rounded-2xl space-y-6">
                  <h3 class="text-xl font-semibold text-gray-900">{{ $t('projects.modal.details') }}</h3>

                  <div class="space-y-4">
                    <div>
                      <div class="text-sm font-medium text-gray-500 uppercase tracking-wide">{{ $t('projects.modal.client') }}</div>
                      <div class="text-gray-900">{{ selectedProject.client }}</div>
                    </div>

                    <div>
                      <div class="text-sm font-medium text-gray-500 uppercase tracking-wide">{{ $t('projects.modal.location') }}</div>
                      <div class="text-gray-900">{{ selectedProject.location }}</div>
                    </div>

                    <div>
                      <div class="text-sm font-medium text-gray-500 uppercase tracking-wide">{{ $t('projects.modal.duration') }}</div>
                      <div class="text-gray-900">{{ selectedProject.duration }}</div>
                    </div>

                    <div>
                      <div class="text-sm font-medium text-gray-500 uppercase tracking-wide">{{ $t('projects.modal.size') }}</div>
                      <div class="text-gray-900">{{ selectedProject.size }}</div>
                    </div>

                    <div>
                      <div class="text-sm font-medium text-gray-500 uppercase tracking-wide">{{ $t('projects.modal.year') }}</div>
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
                        <span class="text-gray-700 text-sm">{{ $t('services.' + service) }}</span>
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
                    <NuxtLink :to="localePath('/contact')" class="w-full btn-primary block text-center">
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
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { t } = useI18n()
const localePath = useLocalePath()

// Reactive data
const selectedProject = ref(null)
const activeCategory = ref('all')
const isLoading = ref(false)
const hasMoreProjects = ref(true)

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
const categories = ['all', 'residential', 'commercial', 'industrial']
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
    gallery: [
      '/images/frankfurt-skyline.jpg',
      '/images/frankfurt-skyline.jpg',
      '/images/frankfurt-skyline.jpg'
    ],
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
    gallery: [
      '/images/frankfurt-skyline.jpg',
      '/images/frankfurt-skyline.jpg'
    ],
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
    category: 'commercial',
    tags: ['retail', 'modern', 'entertainment'],
    location: 'Berlin',
    duration: '36 Monate',
    size: '45.000 m²',
    year: '2022',
    client: 'Berlin Retail Group',
    services: ['planning', 'generalContractor', 'projectManagement'],
    challenges: [
      'projects.project4.challenge1',
      'projects.project4.challenge2'
    ]
  },
  {
    id: 5,
    title: 'projects.project5.title',
    description: 'projects.project5.description',
    longDescription: 'projects.project5.longDescription',
    fullDescription: 'projects.project5.fullDescription',
    image: '/images/frankfurt-skyline.jpg',
    category: 'infrastructure',
    tags: ['bridge', 'engineering', 'public'],
    location: 'Köln',
    duration: '48 Monate',
    size: '1.200 m Länge',
    year: '2021',
    client: 'Stadt Köln',
    services: ['planning', 'generalContractor'],
    challenges: [
      'projects.project5.challenge1',
      'projects.project5.challenge2'
    ]
  },
  {
    id: 6,
    title: 'projects.project6.title',
    description: 'projects.project6.description',
    longDescription: 'projects.project6.longDescription',
    fullDescription: 'projects.project6.fullDescription',
    image: '/images/frankfurt-skyline.jpg',
    category: 'infrastructure',
    tags: ['healthcare', 'complex', 'modern'],
    location: 'Stuttgart',
    duration: '42 Monate',
    size: '32.000 m²',
    year: '2020',
    client: 'Klinikum Stuttgart',
    services: ['planning', 'generalContractor', 'projectManagement'],
    challenges: [
      'projects.project6.challenge1',
      'projects.project6.challenge2',
      'projects.project6.challenge3'
    ]
  }
]

// Project statistics
const projectStats = [
  { value: '150', label: 'projects.stats.completed' },
  { value: '25', label: 'projects.stats.ongoing' },
  { value: '500', label: 'projects.stats.totalValue' },
  { value: '98', label: 'projects.stats.satisfaction' }
]

// Computed properties
const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return allProjects
  }
  return allProjects.filter(project => project.category === activeCategory.value)
})

// Methods
const openProjectModal = (project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

const closeProjectModal = () => {
  selectedProject.value = null
  document.body.style.overflow = 'auto'
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
  const counters = document.querySelectorAll('.counter')
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target)
    gsap.to(counter, {
      duration: 2,
      innerText: target,
      roundProps: "innerText",
      ease: "power2.out",
      scrollTrigger: {
        trigger: counter,
        start: "top 90%",
        toggleActions: "play none none none"
      }
    })
  })
}

// Animations
onMounted(() => {
  gsap.from('.project-card', {
    scrollTrigger: {
      trigger: '.project-card',
      start: 'top 80%'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.15,
    ease: 'power3.out'
  })

  animateCounters()
})

onUnmounted(() => {
  document.body.style.overflow = 'auto'
})

// Watch for category changes and animate
watch(activeCategory, () => {
  nextTick(() => {
    gsap.from('.project-card', {
      duration: 0.5,
      y: 20,
      opacity: 0,
      stagger: 0.1,
      ease: 'power3.out'
    })
  })
})
</script>