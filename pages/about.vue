<template>
  <div>
    <!-- Hero Section -->
    <PageHero
        :title="$t('about.title')"
        :subtitle="$t('about.heroSubtitle')"
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
          <MemberCard
              v-for="member in teamMembers"
              :key="member.name"
              :member="member"
          ></MemberCard>
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

    <Statistics></Statistics>

    <!--<Certifications></Certifications>-->

    <CTABanner></CTABanner>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import MemberCard from "~/components/ui/MemberCard.vue";
import Statistics from "~/components/Statistics.vue";
import Certifications from "~/components/Certifications.vue";
import CTABanner from "~/components/CTABanner.vue";

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
    name: 'Leonardo Swadzba',
    position: 'about.team.leonardo.position',
    description: 'about.team.leonardo.description',
    image: '/images/frankfurt-skyline.jpg',
    email: 'swadzba@gravon-projektbau.de',
    linkedin: 'https://de.linkedin.com/in/leonardo-swadzba-6687151a6'
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

onMounted(() => {
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
})
</script>