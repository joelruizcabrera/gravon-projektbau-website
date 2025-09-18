<template>
  <div>
    <!-- Hero Section -->
    <PageHero
        :title="$t('about.title')"
        :subtitle="$t('about.subtitle')"
        background-image="/images/frankfurt-skyline.jpg"
        height="medium"
        :show-breadcrumbs="true"
    />

    <!-- Company Story -->
    <section class="section-padding bg-white">
      <div class="container mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="gsap-slide-left">
            <h2 class="text-4xl font-bold text-gray-900 mb-8">
              {{ $t('about.story.title') }}
            </h2>
            <div class="space-y-6 text-gray-600">
              <p>{{ $t('about.story.paragraph1') }}</p>
              <p>{{ $t('about.story.paragraph2') }}</p>
              <p>{{ $t('about.story.paragraph3') }}</p>
            </div>
          </div>
          <div class="gsap-slide-right">
            <img
                src="/images/frankfurt-skyline.jpg"
                alt="GRAVON Geschichte"
                class="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Team -->
    <section class="section-padding bg-gray-50">
      <div class="container mx-auto">
        <div class="text-center mb-20">
          <h2 class="gsap-animate text-4xl font-bold text-gray-900 mb-6">
            {{ $t('about.team.title') }}
          </h2>
          <p class="gsap-animate text-xl text-gray-600 max-w-3xl mx-auto">
            {{ $t('about.team.subtitle') }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div
              v-for="member in teamMembers"
              :key="member.name"
              class="team-member text-center group"
          >
            <div class="relative mb-6">
              <img
                  :src="member.image"
                  :alt="member.name"
                  class="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              />
              <div class="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-yellow-500/20 to-blue-500/20 group-hover:from-yellow-500/30 group-hover:to-blue-500/30 transition-all duration-300"></div>
            </div>

            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ member.name }}</h3>
            <p class="text-yellow-600 font-medium mb-4">{{ $t(member.position) }}</p>
            <p class="text-gray-600 text-sm">{{ $t(member.description) }}</p>

            <!-- Social Links -->
            <div class="flex justify-center space-x-4 mt-6">
              <a href="#" class="w-10 h-10 bg-gray-200 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors duration-300">
                <svg class="w-5 h-5 text-gray-600 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-200 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors duration-300">
                <svg class="w-5 h-5 text-gray-600 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Values -->
    <section class="section-padding bg-white">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">{{ $t('about.values.title') }}</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">{{ $t('about.values.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
              v-for="value in companyValues"
              :key="value.title"
              class="value-card text-center p-8 bg-gray-50 rounded-2xl hover:bg-yellow-50 hover:border-yellow-200 border-2 border-transparent transition-all duration-300"
          >
            <div class="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="value.iconPath"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ $t(value.title) }}</h3>
            <p class="text-gray-600">{{ $t(value.description) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="section-padding bg-slate-900 text-white">
      <div class="container mx-auto">
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
      </div>
    </section>

    <!-- Certifications -->
    <section class="section-padding bg-gray-50">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">{{ $t('about.certifications.title') }}</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">{{ $t('about.certifications.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
              v-for="cert in certifications"
              :key="cert.name"
              class="certification-card bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
          >
            <img
                :src="cert.logo"
                :alt="cert.name"
                class="h-16 mx-auto mb-4 object-contain"
            />
            <h3 class="font-semibold text-gray-900 mb-2">{{ cert.name }}</h3>
            <p class="text-gray-600 text-sm">{{ $t(cert.description) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gradient-to-r from-yellow-500 to-yellow-600 text-black">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-6">{{ $t('about.cta.title') }}</h2>
        <p class="text-xl mb-12 max-w-3xl mx-auto opacity-90">{{ $t('about.cta.subtitle') }}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink :to="localePath('/contact')" class="bg-black text-white px-8 py-4 rounded-none font-semibold hover:bg-gray-900 transition-colors duration-300 uppercase tracking-wide">
            {{ $t('about.cta.contact') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/projects')" class="bg-transparent border-2 border-black text-black px-8 py-4 rounded-none font-semibold hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wide">
            {{ $t('about.cta.projects') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: t('about.title') + ' - GRAVON Projektbau',
  meta: [
    {
      name: 'description',
      content: t('about.meta.description')
    }
  ]
})

const teamMembers = [
  {
    name: 'Dr. Michael Gravon',
    position: 'about.team.ceo.position',
    description: 'about.team.ceo.description',
    image: '/images/frankfurt-skyline.jpg'
  },
  {
    name: 'Sarah Weber',
    position: 'about.team.architect.position',
    description: 'about.team.architect.description',
    image: '/images/frankfurt-skyline.jpg'
  },
  {
    name: 'Thomas Klein',
    position: 'about.team.pm.position',
    description: 'about.team.pm.description',
    image: '/images/frankfurt-skyline.jpg'
  }
]

const companyValues = [
  {
    title: 'about.values.quality.title',
    description: 'about.values.quality.description',
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'about.values.sustainability.title',
    description: 'about.values.sustainability.description',
    iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  },
  {
    title: 'about.values.innovation.title',
    description: 'about.values.innovation.description',
    iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
  },
  {
    title: 'about.values.partnership.title',
    description: 'about.values.partnership.description',
    iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  }
]

const statistics = [
  { value: '200', label: 'about.stats.projects', description: 'about.stats.projectsDesc' },
  { value: '25', label: 'about.stats.years', description: 'about.stats.yearsDesc' },
  { value: '50', label: 'about.stats.employees', description: 'about.stats.employeesDesc' },
  { value: '500', label: 'about.stats.volume', description: 'about.stats.volumeDesc' }
]

const certifications = [
  {
    name: 'ISO 9001',
    description: 'about.certifications.iso9001',
    logo: '/images/certs/iso-9001.png'
  },
  {
    name: 'ISO 14001',
    description: 'about.certifications.iso14001',
    logo: '/images/certs/iso-14001.png'
  },
  {
    name: 'DGNB',
    description: 'about.certifications.dgnb',
    logo: '/images/certs/dgnb.png'
  },
  {
    name: 'VBI',
    description: 'about.certifications.vbi',
    logo: '/images/certs/vbi.png'
  }
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
  // Animate team members
  gsap.from('.team-member', {
    scrollTrigger: {
      trigger: '.team-member',
      start: 'top 80%'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
  })

  // Animate values cards
  gsap.from('.value-card', {
    scrollTrigger: {
      trigger: '.value-card',
      start: 'top 80%'
    },
    duration: 1,
    scale: 0.9,
    opacity: 0,
    stagger: 0.15,
    ease: 'back.out(1.7)'
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