<template>
  <section class="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background mit optimiertem Image -->
    <div class="absolute inset-0 z-0">
      <NuxtImg
          src="/images/frankfurt-skyline.jpg"
          alt="Frankfurt Skyline - GRAVON Projektbau"
          width="1920"
          height="1080"
          format="webp"
          loading="eager"
          fetchpriority="high"
          class="w-full h-full object-cover parallax-bg"
          :style="{
          contentVisibility: 'visible',
          containIntrinsicSize: '1920px 1080px'
        }"
      />
      <div class="absolute inset-0 hero-gradient"></div>
    </div>

    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="floating-shape w-20 h-20 bg-yellow-500 rounded-full opacity-20 absolute top-1/4 left-1/4 gsap-fade"></div>
      <div class="floating-shape w-32 h-32 bg-blue-500 rounded-full opacity-10 absolute top-3/4 right-1/4 gsap-fade" style="animation-delay: 2s;"></div>
      <div class="floating-shape w-16 h-16 bg-white rounded-full opacity-30 absolute top-1/2 right-1/3 gsap-fade" style="animation-delay: 4s;"></div>
    </div>

    <!-- Content mit GSAP Klassen -->
    <div class="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
      <div class="hero-content max-w-5xl mx-auto">
        <!-- Main Title mit GSAP Klassen -->
        <h1 class="hero-title mb-8 leading-tight">
          <span class="hero-word hero-animate-title block text-5xl lg:text-7xl xl:text-8xl font-bold text-shadow-lg">PLANEN.</span>
          <span class="hero-word hero-animate-title block text-5xl lg:text-7xl xl:text-8xl font-bold text-shadow-lg">BAUEN.</span>
          <span class="hero-word hero-animate-title block text-5xl lg:text-7xl xl:text-8xl font-bold text-shadow-lg">VOLLENDEN.</span>
        </h1>

        <!-- Subtitle -->
        <p class="hero-subtitle hero-animate-subtitle text-xl lg:text-2xl mb-12 max-w-3xl mx-auto font-light text-shadow">
          {{ $t('hero.subtitle') }}
        </p>

        <!-- CTA Buttons -->
        <div class="hero-cta hero-animate-cta flex flex-col sm:flex-row gap-4 justify-center">
          <button
              @click="scrollToContact"
              class="btn-primary group hover:scale-105 transform transition-all duration-300"
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
        <div class="hero-stats hero-animate-stats mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div v-for="stat in stats" :key="stat.label" class="text-center stat-item">
            <div class="text-3xl lg:text-4xl font-bold text-yellow-500 mb-2 counter" :data-target="stat.value">0</div>
            <div class="text-sm uppercase tracking-wide text-gray-300">{{ $t(stat.label) }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator gsap-fade absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
      <div class="flex flex-col items-center">
        <span class="text-sm uppercase tracking-wide mb-2">{{ $t('hero.scroll') }}</span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
const { $gsap, $ScrollTrigger, $animationUtils } = useNuxtApp()

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

const initAnimations = () => {
  if (!$gsap || !$ScrollTrigger) {
    console.warn('GSAP or ScrollTrigger not loaded')
    return
  }

  // Create main timeline for hero animations
  const heroTL = $gsap.timeline({
    delay: 0.3,
    onStart: () => {
      // Entferne no-js Klasse falls vorhanden
      document.documentElement.classList.remove('no-js')
    },
    onComplete: () => {
      // Start floating animations after main animation
      $gsap.to('.floating-shape', {
        y: '+=20',
        rotation: '+=10',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          each: 0.5,
          from: 'random'
        }
      })

      // Bounce animation für scroll indicator
      $gsap.to('.scroll-indicator', {
        y: '+=10',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    }
  })

  // Animate title words sequenziell
  heroTL.to('.hero-word', {
    duration: 1.2,
    y: 0,
    opacity: 1,
    stagger: 0.2,
    ease: 'power3.out'
  })

  // Animate subtitle
  heroTL.to('.hero-subtitle', {
    duration: 1,
    y: 0,
    opacity: 1,
    ease: 'power3.out'
  }, '-=0.4')

  // Animate CTA buttons
  heroTL.to('.hero-cta', {
    duration: 0.8,
    y: 0,
    opacity: 1,
    ease: 'power3.out'
  }, '-=0.2')

  // Animate stats
  heroTL.to('.hero-stats', {
    duration: 0.6,
    y: 0,
    opacity: 1,
    ease: 'power3.out'
  }, '-=0.1')

  // Animate scroll indicator
  heroTL.to('.scroll-indicator', {
    duration: 0.5,
    y: 0,
    opacity: 1,
    ease: 'power3.out'
  }, '-=0.1')

  // Floating shapes animieren
  heroTL.to('.floating-shape', {
    duration: 0.8,
    opacity: 1,
    ease: 'power2.out',
    stagger: 0.2
  }, '-=0.5')

  // Counter animations mit delay
  setTimeout(() => {
    if ($animationUtils) {
      $animationUtils.counter('.counter', {
        duration: 2.5,
        delay: 0
      })
    }
  }, 2000)

  // Parallax effect für Background
  $ScrollTrigger.create({
    trigger: '.hero-section',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 1,
    onUpdate: (self) => {
      const progress = self.progress
      $gsap.set('.parallax-bg', {
        y: progress * -50 // Reduziert für bessere Performance
      })
    }
  })
}

// Initialize animations when component is mounted
onMounted(() => {
  // Kleiner delay um sicherzustellen dass GSAP geladen ist
  setTimeout(() => {
    initAnimations()
  }, 50)
})

// Cleanup on unmount
onUnmounted(() => {
  if ($ScrollTrigger) {
    $ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }
})
</script>

<style scoped>
/* Hardware-beschleunigte Animationen */
.parallax-bg {
  transform: translateZ(0);
  will-change: transform;
}

.hero-gradient {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.6) 100%);
}

.floating-shape {
  will-change: transform, opacity;
}

.hero-section {
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* Performance optimiert für mobile */
@media (max-width: 768px) {
  .parallax-bg {
    will-change: auto; /* Disable auf mobile für bessere Performance */
  }
}

/* Accessibility - Reduzierte Bewegung */
@media (prefers-reduced-motion: reduce) {
  .floating-shape {
    animation: none !important;
  }

  .parallax-bg {
    transform: none !important;
  }

  .scroll-indicator {
    animation: none !important;
  }
}
</style>