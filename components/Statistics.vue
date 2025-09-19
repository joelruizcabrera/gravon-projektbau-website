<template>
  <SectionContainer padding="large" :container="true" background="slate">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold mb-6">{{ $t('about.stats.title') }}</h2>
      <p class="text-xl text-gray-300 max-w-3xl mx-auto">{{ $t('about.stats.subtitle') }}</p>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div
          v-for="stat in statistics"
          :key="stat.label"
          class="stat-item text-center p-6"
      >
        <div class="text-5xl font-bold text-yellow-500 mb-4 counter" :data-target="stat.value">
          0
        </div>
        <div class="text-gray-300 text-lg">{{ $t(stat.label) }}</div>
        <div class="text-gray-400 text-sm mt-2">{{ $t(stat.description) }}</div>
      </div>
    </div>
  </SectionContainer>
</template>

<script lang="ts" setup>
import SectionContainer from "~/components/ui/SectionContainer.vue";
import {gsap} from "gsap";

const statistics = [
  { value: '27', label: 'about.stats.projects', description: 'about.stats.projectsDesc' },
  { value: '10', label: 'about.stats.years', description: 'about.stats.yearsDesc' },
  { value: '8', label: 'about.stats.employees', description: 'about.stats.employeesDesc' },
  { value: '10', label: 'about.stats.volume', description: 'about.stats.volumeDesc' }
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