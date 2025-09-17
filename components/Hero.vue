<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image with Parallax Effect -->
    <div class="absolute inset-0 z-0">
      <div class="parallax-bg w-full h-full"></div>
      <div class="absolute inset-0 hero-gradient"></div>
    </div>

    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="floating-shape w-20 h-20 bg-yellow-500 rounded-full opacity-20 absolute top-1/4 left-1/4 animate-float"></div>
      <div class="floating-shape w-32 h-32 bg-blue-500 rounded-full opacity-10 absolute top-3/4 right-1/4 animate-float" style="animation-delay: 2s;"></div>
      <div class="floating-shape w-16 h-16 bg-white rounded-full opacity-30 absolute top-1/2 right-1/3 animate-float" style="animation-delay: 4s;"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
      <div class="hero-content max-w-5xl mx-auto">
        <h1 class="hero-title text-5xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight">
          <span class="block hero-word text-shadow-lg">PLANEN.</span>
          <span class="block hero-word text-shadow-lg">BAUEN.</span>
          <span class="block hero-word text-shadow-lg">VOLLENDEN.</span>
        </h1>

        <p class="hero-subtitle text-xl lg:text-2xl mb-12 max-w-3xl mx-auto font-light text-shadow">
          {{ $t('hero.subtitle') }}
        </p>

        <div class="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
          <button
              @click="scrollToContact"
              class="btn-secondary group hover:scale-105 transform transition-all duration-300"
          >
            {{ $t('hero.cta') }}
            <svg class="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>

          <button
              @click="scrollToServices"
              class="border-2 border-white bg-transparent text-white font-semibold px-8 py-4 rounded-none transition-all duration-300 uppercase tracking-wide hover:bg-white hover:text-gray-900 transform hover:scale-105"
          >
            {{ $t('hero.learnMore') }}
          </button>
        </div>

        <!-- Trust Indicators -->
        <div class="hero-stats mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-3xl lg:text-4xl font-bold text-yellow-500 mb-2 counter" :data-target="stat.value">0</div>
            <div class="text-sm uppercase tracking-wide text-gray-300">{{ $t(stat.label) }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
      <div class="scroll-indicator flex flex-col items-center">
        <span class="text-sm uppercase tracking-wide mb-2">{{ $t('hero.scroll') }}</span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import { gsap } from 'gsap'

const stats = [
  { value: '200', label: 'hero.stats.projects' },
  { value: '25', label: 'hero.stats.years' },
  { value: '50', label: 'hero.stats.employees' },
  { value: '500', label: 'hero.stats.volume' }
]

const scrollToContact = () => {
  const contactSection = document.querySelector('#contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToServices = () => {
  const servicesSection = document.querySelector('.services-section')
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' })
  }
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
      delay: 1.5
    })
  })
}

onMounted(() => {
  // Create timeline for hero animations
  const tl = gsap.timeline()

  // Animate title words
  tl.from('.hero-word', {
    duration: 1.2,
    y: 100,
    opacity: 0,
    stagger: 0.3,
    ease: 'power3.out'
  })

      // Animate subtitle
      .from('.hero-subtitle', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
      }, '-=0.5')

      // Animate CTA buttons
      .from('.hero-cta button', {
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
      }, '-=0.3')

      // Animate stats
      .from('.hero-stats > div', {
        duration: 0.6,
        y: 20,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out'
      }, '-=0.2')

  // Start counter animation
  animateCounters()

  // Parallax effect for background
  gsap.to('.parallax-bg', {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  })
})
</script>

<style scoped>
.parallax-bg {
  background-image: url('/images/frankfurt-skyline.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  transform: translateZ(0); /* For better performance */
}

@media (max-width: 768px) {
  .parallax-bg {
    background-attachment: scroll; /* Fixed backgrounds can cause issues on mobile */
  }
}

.floating-shape {
  will-change: transform;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(10deg);
  }
  66% {
    transform: translateY(10px) rotate(-10deg);
  }
}

.hero-word {
  display: inline-block;
}

.counter {
  font-variant-numeric: tabular-nums;
}
</style>