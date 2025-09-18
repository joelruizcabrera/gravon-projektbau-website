<template>
  <section class="section-padding bg-gray-50">
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Content -->
        <div class="about-content">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            {{ $t('about.title') }}
          </h2>

          <div class="space-y-6 text-lg text-gray-600 leading-relaxed about-text">
            <p>{{ $t('about.paragraph1') }}</p>
            <p>{{ $t('about.paragraph2') }}</p>
            <p>{{ $t('about.paragraph3') }}</p>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 stats-grid">
            <div
                v-for="(stat, index) in stats"
                :key="stat.label"
                class="stat-item text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                :style="{ '--delay': index * 0.1 + 's' }"
            >
              <div class="text-3xl lg:text-4xl font-bold text-yellow-500 mb-2 counter" :data-target="stat.value">
                0
              </div>
              <div class="text-gray-600 text-sm uppercase tracking-wide">
                {{ $t(stat.label) }}
              </div>
            </div>
          </div>

          <div class="mt-12 about-cta">
            <NuxtLink :to="localePath('/about')" class="btn-primary">
              {{ $t('about.learnMore') }}
            </NuxtLink>
          </div>
        </div>

        <!-- Image -->
        <div class="about-image">
          <div class="relative">
            <div class="overflow-hidden rounded-2xl shadow-2xl">
              <img
                  src="/images/frankfurt-skyline.jpg"
                  alt="GRAVON Team"
                  class="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
              />
            </div>

            <!-- Decorative elements -->
            <div class="absolute -bottom-8 -right-8 w-40 h-40 bg-yellow-500 rounded-2xl opacity-20 -z-10 animate-pulse"></div>
            <div class="absolute -top-8 -left-8 w-32 h-32 bg-blue-500 rounded-2xl opacity-10 -z-10 animate-pulse" style="animation-delay: 1s;"></div>

            <!-- Experience Badge -->
            <div class="absolute top-8 left-8 bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div class="text-3xl font-bold text-yellow-500 counter" data-target="25">0</div>
              <div class="text-sm text-gray-600 font-medium">{{ $t('about.yearsExperience') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { $animationUtils, $gsap } = useNuxtApp()
const localePath = useLocalePath()

const stats = [
  { value: '200', label: 'about.stats.projects' },
  { value: '25', label: 'about.stats.years' },
  { value: '50', label: 'about.stats.employees' },
  { value: '500', label: 'about.stats.volume' }
]

const initAnimations = () => {
  if (!$animationUtils || !$gsap) {
    console.warn('Animation utilities not available')
    return
  }

  // Animate content from left
  $animationUtils.slideInFromLeft('.about-content > *', {
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.about-content',
      start: 'top 80%'
    }
  })

  // Animate image from right
  $animationUtils.slideInFromRight('.about-image', {
    duration: 1,
    scrollTrigger: {
      trigger: '.about-image',
      start: 'top 80%'
    }
  })

  // Animate stats with scale
  $animationUtils.scaleIn('.stat-item', {
    duration: 1,
    stagger: 0.1,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.stats-grid',
      start: 'top 85%'
    }
  })

  // Counter animations with intersection observer fallback
  const animateCounters = () => {
    const counters = document.querySelectorAll('.counter')

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = parseInt(entry.target.dataset.target)
            if (target && !entry.target.classList.contains('animated')) {
              entry.target.classList.add('animated')

              $gsap.to(entry.target, {
                innerText: target,
                duration: 2,
                roundProps: "innerText",
                ease: "power2.out",
                snap: { innerText: 1 },
                onUpdate: function() {
                  // Add formatting for larger numbers
                  if (target >= 100) {
                    entry.target.textContent = Math.round(this.targets()[0].innerText).toLocaleString()
                  }
                }
              })

              observer.unobserve(entry.target)
            }
          }
        })
      }, { threshold: 0.5 })

      counters.forEach(counter => observer.observe(counter))
    } else {
      // Fallback for browsers without IntersectionObserver
      counters.forEach(counter => {
        const target = parseInt(counter.dataset.target)
        if (target) {
          $gsap.to(counter, {
            innerText: target,
            duration: 2,
            roundProps: "innerText",
            ease: "power2.out",
            delay: Math.random() * 1
          })
        }
      })
    }
  }

  // Initialize counter animations after a short delay
  setTimeout(animateCounters, 500)
}

onMounted(() => {
  nextTick(() => {
    setTimeout(initAnimations, 100)
  })
})
</script>

<style scoped>
.counter {
  font-variant-numeric: tabular-nums;
  font-feature-settings: 'tnum';
}

.stat-item {
  transform-style: preserve-3d;
  backface-visibility: hidden;
  will-change: transform;
}

.stat-item:hover {
  transform: translateY(-2px);
}

/* Image hover effects */
.about-image img {
  will-change: transform;
}

/* Performance optimizations */
.about-content,
.about-image {
  contain: layout style;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .stat-item {
    padding: 1rem;
  }

  .about-image .absolute {
    display: none; /* Hide decorative elements on mobile */
  }
}

@media (max-width: 640px) {
  .about-image {
    margin-top: 2rem;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .about-image img,
  .stat-item {
    transition: none;
    transform: none !important;
  }

  .animate-pulse {
    animation: none;
  }
}

/* Loading state */
.counter:not(.animated) {
  color: #d1d5db; /* Gray-300 */
}

.counter.animated {
  color: #f59e0b; /* Yellow-500 */
  transition: color 0.3s ease;
}

/* Enhanced shadow effects */
.stat-item:hover {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>