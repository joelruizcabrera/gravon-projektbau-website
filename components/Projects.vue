<template>
  <section class="section-padding bg-white">
    <div class="container mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          {{ $t('projects.title') }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ $t('projects.subtitle') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div
            v-for="(project, index) in projects"
            :key="index"
            class="project-card group relative overflow-hidden bg-black rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            @click="openProjectModal(project)"
        >
          <div class="relative h-80 overflow-hidden">
            <img
                :src="project.image"
                :alt="$t(project.title)"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-black/80 transition-all duration-300"></div>
          </div>

          <div class="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 class="text-2xl font-bold mb-2">{{ $t(project.title) }}</h3>
              <p class="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {{ $t(project.description) }}
              </p>

              <div class="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="px-3 py-1 bg-yellow-500 text-black text-sm font-medium rounded-full"
                >
                  {{ $t('projects.tags.' + tag) }}
                </span>
              </div>
            </div>

            <!-- Hover overlay -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <NuxtLink :to="localePath('/projects')" class="btn-primary">
          {{ $t('projects.viewAll') }}
        </NuxtLink>
      </div>
    </div>

    <!-- Project Modal -->
    <Teleport to="body">
      <div
          v-if="selectedProject"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm"
          @click="closeProjectModal"
      >
        <div class="bg-white rounded-2xl max-w-4xl w-full max-h-screen overflow-y-auto" @click.stop>
          <div class="relative">
            <img
                :src="selectedProject.image"
                :alt="$t(selectedProject.title)"
                class="w-full h-80 object-cover"
            />
            <button
                @click="closeProjectModal"
                class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <div class="p-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ $t(selectedProject.title) }}</h2>
            <p class="text-lg text-gray-600 mb-6">{{ $t(selectedProject.longDescription) }}</p>

            <div class="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ $t('projects.modal.details') }}</h3>
                <ul class="space-y-2">
                  <li><strong>{{ $t('projects.modal.location') }}:</strong> {{ selectedProject.location }}</li>
                  <li><strong>{{ $t('projects.modal.duration') }}:</strong> {{ selectedProject.duration }}</li>
                  <li><strong>{{ $t('projects.modal.size') }}:</strong> {{ selectedProject.size }}</li>
                  <li><strong>{{ $t('projects.modal.client') }}:</strong> {{ selectedProject.client }}</li>
                </ul>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ $t('projects.modal.services') }}</h3>
                <ul class="space-y-2">
                  <li
                      v-for="service in selectedProject.services"
                      :key="service"
                      class="flex items-center"
                  >
                    <svg class="w-5 h-5 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    {{ $t(`services.${service}`) }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="flex flex-wrap gap-2">
              <span
                  v-for="tag in selectedProject.tags"
                  :key="tag"
                  class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full"
              >
                {{ $t('projects.tags.' + tag) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const localePath = useLocalePath()
const selectedProject = ref(null)

const projects = [
  {
    id: 1,
    title: 'projects.project1.title',
    description: 'projects.project1.description',
    longDescription: 'projects.project1.longDescription',
    image: '/images/frankfurt-skyline.jpg',
    tags: ['commercial', 'office'],
    location: 'Frankfurt am Main',
    duration: '24 Monate',
    size: '15.000 m²',
    client: 'Frankfurt Development GmbH',
    services: ['planning', 'generalContractor', 'projectManagement']
  },
  {
    id: 2,
    title: 'projects.project2.title',
    description: 'projects.project2.description',
    longDescription: 'projects.project2.longDescription',
    image: '/images/frankfurt-skyline.jpg',
    tags: ['residential', 'luxury'],
    location: 'München',
    duration: '30 Monate',
    size: '8.500 m²',
    client: 'Munich Living AG',
    services: ['planning', 'generalContractor']
  },
  {
    id: 3,
    title: 'projects.project3.title',
    description: 'projects.project3.description',
    longDescription: 'projects.project3.longDescription',
    image: '/images/frankfurt-skyline.jpg',
    tags: ['industrial', 'logistics'],
    location: 'Hamburg',
    duration: '18 Monate',
    size: '25.000 m²',
    client: 'Logistics Hamburg GmbH',
    services: ['generalContractor', 'projectManagement']
  }
]

const openProjectModal = (project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

const closeProjectModal = () => {
  selectedProject.value = null
  document.body.style.overflow = 'auto'
}

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
})

onUnmounted(() => {
  document.body.style.overflow = 'auto'
})
</script>