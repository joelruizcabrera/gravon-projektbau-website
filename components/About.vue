<template>
  <section class="section-padding bg-gray-50">
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Content -->
        <div class="about-content">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            {{ $t('about.title') }}
          </h2>

          <div class="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>{{ $t('about.paragraph1') }}</p>
            <p>{{ $t('about.paragraph2') }}</p>
            <p>{{ $t('about.paragraph3') }}</p>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div
                v-for="stat in stats"
                :key="stat.label"
                class="stat-item text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div class="text-3xl lg:text-4xl font-bold text-yellow-500 mb-2 counter" :data-target="stat.value">
                0
              </div>
              <div class="text-gray-600 text-sm uppercase tracking-wide">
                {{ $t(stat.label) }}
              </div>
            </div>
          </div>

          <div class="mt-12">
            <NuxtLink :to="localePath('/about')" class="btn-primary">
              {{ $t('about.learnMore') }}
            </NuxtLink>
          </div>
        </div>

        <!-- Image -->
        <div class="about-image">
          <div class="relative">
            <img
                src="/images/about-team.jpg"
                alt="GRAVON Team"
                class="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div class="absolute -bottom-8 -right-8 w-40 h-40 bg-yellow-500 rounded-2xl opacity-20 -z-10"></div>
            <div class="absolute -top-8 -left-8 w-32 h-32 bg-blue-500 rounded-2xl opacity-10 -z-10"></div>

            <!-- Experience Badge -->
            <div class="absolute top-8 left-8 bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <div class="text-3xl font-bold text-yellow-500">25+</div>
              <div class="text-sm text-gray-600 font-medium">{{ $t('about.yearsExperience') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const localePath = useLocalePath()

const stats = [
  { value: '200', label: 'about.stats.projects' },
  { value: '25', label: 'about.stats.years' },
  { value: '50', label: 'about.stats.employees' },
  { value: '500', label: 'about.stats.volume' }
]

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

onMounted(() => {
  // Animate content
  gsap.from('.about-content', {
    scrollTrigger: {
      trigger: '.about-content',
      start: 'top 80%'
    },
    duration: 1,
    x: -50,
    opacity: 0,
    ease: 'power3.out'
  })

  // Animate image
  gsap.from('.about-image', {
    scrollTrigger: {
      trigger: '.about-image',
      start: 'top 80%'
    },
    duration: 1,
    x: 50,
    opacity: 0,
    ease: 'power3.out'
  })

  // Animate stats
  gsap.from('.stat-item', {
    scrollTrigger: {
      trigger: '.stat-item',
      start: 'top 85%'
    },
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.1,
    ease: 'power3.out'
  })

  // Initialize counter animation
  animateCounters()
})
</script>

<style scoped>
.counter {
  font-variant-numeric: tabular-nums;
}
</style>