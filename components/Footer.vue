<template>
  <footer class="bg-black text-white">
    <div class="container mx-auto px-4 lg:px-8 py-16">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="lg:col-span-1">
          <h3 class="text-2xl font-bold mb-6">
            GRAVON<sup class="text-sm">®</sup>
          </h3>
          <p class="text-gray-400 mb-6 leading-relaxed">
            {{ $t('footer.company.description') }}
          </p>

          <!-- Awards & Certifications -->
          <div class="space-y-3 mb-6">
            <h4 class="text-sm font-semibold text-gray-300 uppercase tracking-wide">{{ $t('footer.company.certifications') }}</h4>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">ISO 9001</span>
              <span class="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">ISO 14001</span>
              <span class="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">DGNB</span>
            </div>
          </div>

          <!-- Social Links -->
          <div class="flex space-x-4">
            <a
                href="https://www.linkedin.com/company/gravon-projektbau"
                target="_blank"
                rel="noopener noreferrer"
                class="group w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
            >
              <svg class="w-5 h-5 text-gray-400 group-hover:text-black transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
                href="https://www.xing.com/companies/gravonprojektbau"
                target="_blank"
                rel="noopener noreferrer"
                class="group w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="XING"
            >
              <svg class="w-5 h-5 text-gray-400 group-hover:text-black transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.284.508 8.32 14.85 8.32 14.85.186.335.459.547.967.547h3.287c.421 0 .741-.188.741-.547 0-.284-.137-.507-.284-.735l-8.1-14.447 7.441-13.112c.147-.284.284-.507.284-.735 0-.359-.32-.632-.741-.632h-3.286zm-11.485 6.106c-.517 0-.741.325-.927.66 0 0-4.228 7.512-4.228 7.512-.284.508 2.951 5.267 2.951 5.267.186.335.459.547.967.547h3.287c.421 0 .741-.188.741-.547 0-.284-.137-.507-.284-.735l-2.698-4.812 3.981-7.067c.147-.284.284-.507.284-.735 0-.359-.32-.632-.741-.632h-3.333z"/>
              </svg>
            </a>
            <a
                href="https://twitter.com/gravon_bau"
                target="_blank"
                rel="noopener noreferrer"
                class="group w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
            >
              <svg class="w-5 h-5 text-gray-400 group-hover:text-black transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-lg font-semibold mb-6">{{ $t('footer.services.title') }}</h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink
                  :to="localePath('/services')"
                  class="text-gray-400 hover:text-yellow-500 transition-colors duration-300 flex items-center group"
              >
                <svg class="w-4 h-4 mr-2 text-gray-500 group-hover:text-yellow-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                {{ $t('footer.services.general') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                  :to="localePath('/services')"
                  class="text-gray-400 hover:text-yellow-500 transition-colors duration-300 flex items-center group"
              >
                <svg class="w-4 h-4 mr-2 text-gray-500 group-hover:text-yellow-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                {{ $t('footer.services.planning') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                  :to="localePath('/services')"
                  class="text-gray-400 hover:text-yellow-500 transition-colors duration-300 flex items-center group"
              >
                <svg class="w-4 h-4 mr-2 text-gray-500 group-hover:text-yellow-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                {{ $t('footer.services.management') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                  :to="localePath('/services')"
                  class="text-gray-400 hover:text-yellow-500 transition-colors duration-300 flex items-center group"
              >
                <svg class="w-4 h-4 mr-2 text-gray-500 group-hover:text-yellow-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                {{ $t('footer.services.consulting') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Projects -->
        <div>
          <h4 class="text-lg font-semibold mb-6">{{ $t('footer.projects.title') }}</h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink
                  :to="localePath('/projects')"
                  class="text-gray-400 hover:text-yellow-500 transition-colors duration-300 flex items-center group"
              >
                <svg class="w-4 h-4 mr-2 text-gray-500 group-hover:text-yellow-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                {{ $t('footer.projects.commercial') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                  :to="localePath('/projects')"
                  class="text-gray-400 hover:text-yellow-500 transition-colors duration-300 flex items-center group"
              >
                <svg class="w-4 h-4 mr-2 text-gray-500 group-hover:text-yellow-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                {{ $t('footer.projects.residential') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                  :to="localePath('/projects')"
                  class="text-gray-400 hover:text-yellow-500 transition-colors duration-300 flex items-center group"
              >
                <svg class="w-4 h-4 mr-2 text-gray-500 group-hover:text-yellow-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                {{ $t('footer.projects.industrial') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                  :to="localePath('/projects')"
                  class="text-gray-400 hover:text-yellow-500 transition-colors duration-300 flex items-center group"
              >
                <svg class="w-4 h-4 mr-2 text-gray-500 group-hover:text-yellow-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
                {{ $t('footer.projects.infrastructure') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-lg font-semibold mb-6">{{ $t('footer.contact.title') }}</h4>
          <div class="space-y-4 text-gray-400">
            <div>
              <p class="font-medium text-white mb-1">GRAVON Projektbau GmbH</p>
              <p class="text-sm">Musterstraße 123</p>
              <p class="text-sm">60311 Frankfurt am Main</p>
            </div>
            <div>
              <p class="font-medium text-white mb-1">{{ $t('contact.phone.title') }}:</p>
              <a
                  href="tel:+4969123456789"
                  class="text-sm hover:text-yellow-500 transition-colors duration-300"
              >
                +49 69 123 456 789
              </a>
            </div>
            <div>
              <p class="font-medium text-white mb-1">{{ $t('contact.email.title') }}:</p>
              <a
                  href="mailto:info@gravon.de"
                  class="text-sm hover:text-yellow-500 transition-colors duration-300"
              >
                info@gravon.de
              </a>
            </div>
            <div class="pt-2">
              <NuxtLink
                  :to="localePath('/contact')"
                  class="inline-flex items-center text-sm bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-600 transition-colors duration-300"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                {{ $t('footer.contact.cta') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Newsletter Section -->
      <div class="border-t border-gray-800 pt-12 mt-12">
        <div class="max-w-2xl mx-auto text-center">
          <h3 class="text-2xl font-bold mb-4">{{ $t('footer.newsletter.title') }}</h3>
          <p class="text-gray-400 mb-6">{{ $t('footer.newsletter.subtitle') }}</p>
          <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
                type="email"
                v-model="newsletterEmail"
                :placeholder="$t('footer.newsletter.placeholder')"
                class="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                required
            />
            <button
                type="submit"
                :disabled="isSubscribing"
                class="px-6 py-3 bg-yellow-500 text-black font-medium rounded-lg hover:bg-yellow-600 transition-colors duration-300 disabled:opacity-50"
            >
              {{ isSubscribing ? $t('footer.newsletter.subscribing') : $t('footer.newsletter.subscribe') }}
            </button>
          </form>
          <p class="text-xs text-gray-500 mt-3">{{ $t('footer.newsletter.disclaimer') }}</p>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-800">
      <div class="container mx-auto px-4 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm mb-4 md:mb-0">
            © {{ new Date().getFullYear() }} GRAVON Projektbau GmbH. {{ $t('footer.rights') }}
          </p>
          <div class="flex flex-wrap gap-6">
            <NuxtLinkLocale
                class="text-gray-400 hover:text-yellow-500 text-sm transition-colors duration-300"
                v-for="lawLink in lawLinks"
                :to="lawLink.to"
            >
              {{ $t(lawLink.label) }}
            </NuxtLinkLocale>
            <a
                href="/sitemap.xml"
                class="text-gray-400 hover:text-yellow-500 text-sm transition-colors duration-300"
                target="_blank"
                rel="noopener"
            >
              {{ $t('footer.legal.sitemap') }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Back to Top Button -->
    <Transition name="back-to-top">
      <button
          v-if="showBackToTop"
          @click="scrollToTop"
          class="fixed bottom-8 right-8 w-12 h-12 bg-yellow-500 text-black rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300 z-40 flex items-center justify-center"
          :aria-label="$t('footer.backToTop')"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>
    </Transition>
  </footer>
</template>

<script setup>
const localePath = useLocalePath()
const { t } = useI18n()

// Newsletter functionality
const newsletterEmail = ref('')
const isSubscribing = ref(false)

// Back to top functionality
const showBackToTop = ref(false)

const subscribeNewsletter = async () => {
  isSubscribing.value = true
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Reset form
    newsletterEmail.value = ''

    // Show success message (you can implement a toast notification here)
    console.log('Newsletter subscription successful')
  } catch (error) {
    console.error('Newsletter subscription failed:', error)
  } finally {
    isSubscribing.value = false
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Handle scroll for back to top button
const handleScroll = () => {
  showBackToTop.value = window.scrollY > 500
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const lawLinks = ref([
  {
    label: 'footer.legal.privacy',
    to: '/privacy'
  },
  {
    label: 'footer.legal.imprint',
    to: '/imprint'
  },
  {
    label: 'footer.legal.terms',
    to: '/terms'
  }
])
</script>

<style scoped>
.back-to-top-enter-active,
.back-to-top-leave-active {
  transition: all 0.3s ease;
}

.back-to-top-enter-from,
.back-to-top-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Smooth focus styles */
a:focus-visible,
button:focus-visible {
  outline: 2px solid #f59e0b;
  outline-offset: 2px;
}

/* Newsletter form enhancements */
input[type="email"]:focus {
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
}
</style>