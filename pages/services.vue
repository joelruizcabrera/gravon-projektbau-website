<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-32 bg-slate-900 text-white">
      <div class="absolute inset-0">
        <img
            src="/images/services-hero.jpg"
            alt="GRAVON Services"
            class="w-full h-full object-cover opacity-30"
        />
      </div>
      <div class="relative container mx-auto px-4 lg:px-8 text-center">
        <h1 class="hero-title text-5xl lg:text-6xl font-bold mb-6">{{ $t('services.title') }}</h1>
        <p class="text-xl max-w-3xl mx-auto">{{ $t('services.subtitle') }}</p>
      </div>
    </section>

    <!-- Service Overview -->
    <section class="section-padding bg-white">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-3 gap-12 mb-20">
          <div
              v-for="(service, index) in serviceOverview"
              :key="index"
              class="service-overview-card text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
          >
            <div class="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.iconPath"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ $t(service.title) }}</h3>
            <p class="text-gray-600 mb-6">{{ $t(service.shortDescription) }}</p>
            <ul class="text-left space-y-2">
              <li
                  v-for="point in service.points"
                  :key="point"
                  class="flex items-center text-sm text-gray-700"
              >
                <svg class="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                {{ $t(point) }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Services -->
    <section class="section-padding bg-gray-50">
      <div class="container mx-auto">
        <div class="space-y-32">
          <div
              v-for="(service, index) in detailedServices"
              :key="index"
              class="grid lg:grid-cols-2 gap-16 items-center"
              :class="{ 'lg:grid-flow-col-dense': index % 2 === 1 }"
          >
            <div :class="{ 'lg:col-start-2': index % 2 === 1 }" class="service-detail-content">
              <div class="service-badge inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full mb-6">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.iconPath"></path>
                </svg>
                {{ $t('services.badge') }}
              </div>

              <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{{ $t(service.title) }}</h2>
              <p class="text-xl text-gray-600 mb-8">{{ $t(service.description) }}</p>

              <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 class="font-semibold text-gray-900 mb-3">{{ $t('services.included') }}</h4>
                  <ul class="space-y-2">
                    <li
                        v-for="feature in service.features.slice(0, 3)"
                        :key="feature"
                        class="flex items-start space-x-2"
                    >
                      <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span class="text-gray-700 text-sm">{{ $t(feature) }}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-3">{{ $t('services.benefits') }}</h4>
                  <ul class="space-y-2">
                    <li
                        v-for="feature in service.features.slice(3)"
                        :key="feature"
                        class="flex items-start space-x-2"
                    >
                      <svg class="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span class="text-gray-700 text-sm">{{ $t(feature) }}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row gap-4">
                <button class="btn-primary">{{ $t('services.requestQuote') }}</button>
                <button class="btn-secondary bg-white text-gray-900 border-gray-300 hover:bg-gray-50">
                  {{ $t('services.downloadBrochure') }}
                </button>
              </div>
            </div>

            <div :class="{ 'lg:col-start-1 lg:row-start-1': index % 2 === 1 }" class="service-detail-image">
              <div class="relative">
                <img
                    :src="service.image"
                    :alt="$t(service.title)"
                    class="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-500 rounded-2xl opacity-20 -z-10"></div>
                <div class="absolute -top-6 -left-6 w-24 h-24 bg-blue-500 rounded-2xl opacity-10 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Timeline -->
    <section class="section-padding bg-white">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{{ $t('services.process.title') }}</h2>
        <p class="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">{{ $t('services.process.subtitle') }}</p>

        <div class="relative">
          <!-- Timeline Line -->
          <div class="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-blue-500 to-green-500 transform -translate-y-1/2"></div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
                v-for="(step, index) in processSteps"
                :key="index"
                class="process-step relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <!-- Step Number -->
              <div class="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg">
                {{ index + 1 }}
              </div>

              <h3 class="text-xl font-bold text-gray-900 mb-4">{{ $t(step.title) }}</h3>
              <p class="text-gray-600 mb-4">{{ $t(step.description) }}</p>

              <div class="text-sm text-gray-500">
                <span class="font-medium">{{ $t('services.process.duration') }}: </span>
                {{ step.duration }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industries Section -->
    <section class="section-padding bg-slate-900 text-white">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold mb-6">{{ $t('services.industries.title') }}</h2>
          <p class="text-xl max-w-3xl mx-auto text-gray-300">{{ $t('services.industries.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
              v-for="industry in industries"
              :key="industry.name"
              class="industry-card group text-center p-6 border border-gray-700 rounded-2xl hover:border-yellow-500 hover:bg-gray-800 transition-all duration-300"
          >
            <div class="w-16 h-16 bg-gray-800 group-hover:bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
              <svg class="w-8 h-8 text-yellow-500 group-hover:text-black transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="industry.iconPath"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ $t(industry.name) }}</h3>
            <p class="text-gray-400 text-sm">{{ $t(industry.description) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding bg-gray-50">
      <div class="container mx-auto">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{{ $t('services.faq.title') }}</h2>
            <p class="text-xl text-gray-600">{{ $t('services.faq.subtitle') }}</p>
          </div>

          <div class="space-y-4">
            <div
                v-for="(faq, index) in faqs"
                :key="index"
                class="faq-item bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                  @click="toggleFaq(index)"
                  class="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 class="text-lg font-semibold text-gray-900 pr-4">{{ $t(faq.question) }}</h3>
                <svg
                    class="w-6 h-6 text-gray-500 transform transition-transform duration-200"
                    :class="{ 'rotate-180': activeFaq === index }"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div
                  v-show="activeFaq === index"
                  class="px-6 pb-6 text-gray-600"
                  v-html="$t(faq.answer)"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gradient-to-r from-yellow-500 to-yellow-600 text-black">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">{{ $t('services.cta.title') }}</h2>
        <p class="text-xl mb-12 max-w-3xl mx-auto opacity-90">{{ $t('services.cta.subtitle') }}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink :to="localePath('/contact')" class="bg-black text-white px-8 py-4 rounded-none font-semibold hover:bg-gray-900 transition-colors duration-300 uppercase tracking-wide">
            {{ $t('services.cta.contact') }}
          </NuxtLink>
          <button class="bg-transparent border-2 border-black text-black px-8 py-4 rounded-none font-semibold hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wide">
            {{ $t('services.cta.download') }}
          </button>
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

// Reactive data
const activeFaq = ref(null)

// SEO
useHead({
  title: t('services.title') + ' - GRAVON Projektbau',
  meta: [
    {
      name: 'description',
      content: t('services.meta.description')
    },
    {
      property: 'og:title',
      content: t('services.title') + ' - GRAVON Projektbau'
    },
    {
      property: 'og:description',
      content: t('services.meta.description')
    }
  ]
})

// Service data
const serviceOverview = [
  {
    title: 'services.generalContractor.title',
    shortDescription: 'services.generalContractor.description',
    iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    points: [
      'services.overview.point1',
      'services.overview.point2',
      'services.overview.point3',
      'services.overview.point4'
    ]
  },
  {
    title: 'services.planning.title',
    shortDescription: 'services.planning.description',
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    points: [
      'services.overview.point5',
      'services.overview.point6',
      'services.overview.point7',
      'services.overview.point8'
    ]
  },
  {
    title: 'services.projectManagement.title',
    shortDescription: 'services.projectManagement.description',
    iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    points: [
      'services.overview.point9',
      'services.overview.point10',
      'services.overview.point11',
      'services.overview.point12'
    ]
  }
]

const detailedServices = [
  {
    title: 'services.generalContractor.title',
    description: 'services.generalContractor.longDescription',
    image: '/images/general-contractor-detail.jpg',
    iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    features: [
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
    description: 'services.planning.longDescription',
    image: '/images/planning-detail.jpg',
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    features: [
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
    description: 'services.projectManagement.longDescription',
    image: '/images/project-management-detail.jpg',
    iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    features: [
      'services.projectManagement.detailedFeature1',
      'services.projectManagement.detailedFeature2',
      'services.projectManagement.detailedFeature3',
      'services.projectManagement.detailedFeature4',
      'services.projectManagement.detailedFeature5',
      'services.projectManagement.detailedFeature6'
    ]
  }
]

const processSteps = [
  {
    title: 'services.process.step1.title',
    description: 'services.process.step1.description',
    duration: '1-2 Wochen'
  },
  {
    title: 'services.process.step2.title',
    description: 'services.process.step2.description',
    duration: '4-8 Wochen'
  },
  {
    title: 'services.process.step3.title',
    description: 'services.process.step3.description',
    duration: '6-24 Monate'
  },
  {
    title: 'services.process.step4.title',
    description: 'services.process.step4.description',
    duration: '2-4 Wochen'
  }
]

const industries = [
  {
    name: 'services.industries.commercial',
    description: 'services.industries.commercialDesc',
    iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    name: 'services.industries.residential',
    description: 'services.industries.residentialDesc',
    iconPath: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  },
  {
    name: 'services.industries.industrial',
    description: 'services.industries.industrialDesc',
    iconPath: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
  },
  {
    name: 'services.industries.infrastructure',
    description: 'services.industries.infrastructureDesc',
    iconPath: 'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z'
  }
]

const faqs = [
  {
    question: 'services.faq.q1',
    answer: 'services.faq.a1'
  },
  {
    question: 'services.faq.q2',
    answer: 'services.faq.a2'
  },
  {
    question: 'services.faq.q3',
    answer: 'services.faq.a3'
  },
  {
    question: 'services.faq.q4',
    answer: 'services.faq.a4'
  },
  {
    question: 'services.faq.q5',
    answer: 'services.faq.a5'
  }
]

// Methods
const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

// Animations
onMounted(() => {
  // Hero animation
  gsap.from('.hero-title', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
  })

  // Service cards animation
  gsap.from('.service-overview-card', {
    scrollTrigger: {
      trigger: '.service-overview-card',
      start: 'top 80%'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
  })

  // Detailed services animation
  gsap.from('.service-detail-content', {
    scrollTrigger: {
      trigger: '.service-detail-content',
      start: 'top 80%'
    },
    duration: 1,
    x: -50,
    opacity: 0,
    stagger: 0.3,
    ease: 'power3.out'
  })

  gsap.from('.service-detail-image', {
    scrollTrigger: {
      trigger: '.service-detail-image',
      start: 'top 80%'
    },
    duration: 1,
    x: 50,
    opacity: 0,
    stagger: 0.3,
    ease: 'power3.out'
  })

  // Process steps animation
  gsap.from('.process-step', {
    scrollTrigger: {
      trigger: '.process-step',
      start: 'top 85%'
    },
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.15,
    ease: 'power3.out'
  })

  // Industries animation
  gsap.from('.industry-card', {
    scrollTrigger: {
      trigger: '.industry-card',
      start: 'top 85%'
    },
    duration: 1,
    scale: 0.9,
    opacity: 0,
    stagger: 0.1,
    ease: 'back.out(1.7)'
  })

  // FAQ animation
  /*gsap.from('.faq-item', {
    scrollTrigger: {
      trigger: '.f15 12a3 3 0 11-6 0 3 3 0 016 0zM8 8a3 3 0 11-6 0 3 3 0 016 0zM16 8a3 3 0 11-6 0 3 3 0 016 0z'
    }
  })*/
})
</script>