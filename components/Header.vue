<template>
  <header
      class="fixed w-full top-0 z-50 transition-all duration-300"
      :class="headerClasses"
      role="banner"
  >
    <nav class="container mx-auto px-4 lg:px-8 py-6" role="navigation" aria-label="Hauptnavigation">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <NuxtLinkLocale
            to="/"
            class="text-white font-bold text-2xl tracking-wider hover:text-yellow-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-transparent rounded"
            :aria-label="$t('nav.home')"
        >
          GRAVON<sup class="text-sm">®</sup>
        </NuxtLinkLocale>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <NuxtLinkLocale
              v-for="item in navigation"
              :key="item.path"
              :to="item.path"
              class="nav-link text-white hover:text-yellow-500 font-medium uppercase tracking-wide transition-all duration-300 relative group py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-transparent"
              active-class="text-yellow-500"
              :aria-current="isCurrentPage(item.path) ? 'page' : undefined"
              @click="trackNavigation(item.label, item.path)"
          >
            {{ $t(item.label) }}
            <span
                class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"
                :class="{ 'w-full': isCurrentPage(item.path) }"
            ></span>
          </NuxtLinkLocale>

          <LanguageSwitch />
        </div>

        <!-- Mobile Menu Button -->
        <button
            @click="toggleMobileMenu"
            class="lg:hidden text-white p-2 hover:text-yellow-500 transition-colors duration-300 rounded-lg hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            :aria-expanded="mobileMenuOpen"
            aria-controls="mobile-menu"
            :aria-label="mobileMenuOpen ? $t('nav.closeMobileMenu') : $t('nav.openMobileMenu')"
        >
          <svg class="w-6 h-6 transition-transform duration-300" :class="{ 'rotate-90': mobileMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition name="mobile-menu">
        <div
            v-if="mobileMenuOpen"
            id="mobile-menu"
            class="lg:hidden mt-6 pb-6 border-t border-gray-700 pt-6"
            role="menu"
        >
          <div class="flex flex-col space-y-1">
            <NuxtLinkLocale
                v-for="item in navigation"
                :key="item.path + '-mobile'"
                :to="item.path"
                @click="closeMobileMenu"
                class="text-white hover:text-yellow-500 hover:bg-white hover:bg-opacity-10 font-medium uppercase tracking-wide transition-all duration-300 py-3 px-4 border-b border-gray-700 border-opacity-50 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:bg-white focus:bg-opacity-10"
                active-class="text-yellow-500 bg-white bg-opacity-10"
                role="menuitem"
                :aria-current="isCurrentPage(item.path) ? 'page' : undefined"
            >
              <div class="flex items-center justify-between">
                {{ $t(item.label) }}
                <svg v-if="isCurrentPage(item.path)" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </NuxtLinkLocale>

            <div class="pt-4 border-t border-gray-700 mt-4">
              <LanguageSwitch />
            </div>
          </div>
        </div>
      </Transition>
    </nav>

    <!-- Loading Bar -->
    <div
        v-if="isLoading"
        class="absolute bottom-0 left-0 h-1 bg-yellow-500 transition-all duration-300 ease-out"
        :style="{ width: loadingProgress + '%' }"
    ></div>
  </header>
</template>

<script setup>
const localePath = useLocalePath()
const route = useRoute()
const router = useRouter()
const { $gtag } = useNuxtApp()

// Reactive state
const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const isLoading = ref(false)
const loadingProgress = ref(0)

// Navigation items
const navigation = [
  { path: '/', label: 'nav.home' },
  { path: '/services', label: 'nav.services' },
  { path: '/projects', label: 'nav.projects' },
  { path: '/about', label: 'nav.about' },
  { path: '/contact', label: 'nav.contact' }
]

// Header background classes based on scroll position
const headerClasses = computed(() => ({
  'bg-slate-900 bg-opacity-95 backdrop-blur-sm shadow-lg': scrolled.value,
  'bg-slate-900 bg-opacity-90': !scrolled.value
}))

// Check if current page
const isCurrentPage = (path) => {
  const currentPath = route.path === '/' ? '/' : route.path.replace(/\/$/, '')
  const targetPath = localePath(path)
  return currentPath === targetPath
}

// Methods
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value

  // Prevent body scroll when mobile menu is open
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
    // Announce to screen readers
    if (window.announceToScreenReader) {
      window.announceToScreenReader('Menü geöffnet')
    }
  } else {
    document.body.style.overflow = 'auto'
    if (window.announceToScreenReader) {
      window.announceToScreenReader('Menü geschlossen')
    }
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = 'auto'
}

const trackNavigation = (label, path) => {
  if ($gtag && $gtag.trackEvent) {
    $gtag.trackEvent('navigation_click', {
      event_category: 'navigation',
      event_label: label,
      page_path: path
    })
  }
}

// Handle scroll events for header background
const handleScroll = throttle(() => {
  scrolled.value = window.scrollY > 50
}, 16) // ~60fps

// Throttle function for performance
function throttle(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Handle clicks outside menu
const handleClickOutside = (event) => {
  const header = event.target.closest('header')
  if (!header && mobileMenuOpen.value) {
    closeMobileMenu()
  }
}

// Handle escape key
const handleEscape = (event) => {
  if (event.key === 'Escape' && mobileMenuOpen.value) {
    closeMobileMenu()
  }
}

// Handle window resize
const handleResize = throttle(() => {
  if (window.innerWidth >= 1024 && mobileMenuOpen.value) {
    closeMobileMenu()
  }
}, 100)

// Route loading states
const handleRouteStart = () => {
  isLoading.value = true
  loadingProgress.value = 0

  // Simulate loading progress
  const interval = setInterval(() => {
    loadingProgress.value += Math.random() * 30
    if (loadingProgress.value >= 90) {
      clearInterval(interval)
    }
  }, 100)
}

const handleRouteEnd = () => {
  loadingProgress.value = 100
  setTimeout(() => {
    isLoading.value = false
    loadingProgress.value = 0
  }, 300)
}

// Lifecycle hooks
onMounted(() => {
  // Add event listeners
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscape)
  window.addEventListener('resize', handleResize)

  // Route loading events
  router.beforeEach(() => {
    handleRouteStart()
  })

  router.afterEach(() => {
    handleRouteEnd()
  })
})

onUnmounted(() => {
  // Clean up event listeners
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscape)
  window.removeEventListener('resize', handleResize)
  document.body.style.overflow = 'auto'
})

// Watch for route changes to close mobile menu
watch(() => route.path, () => {
  closeMobileMenu()
})

// Watch for mobile menu changes
watch(mobileMenuOpen, (newValue) => {
  if (newValue) {
    // Focus first menu item for accessibility
    nextTick(() => {
      const firstMenuItem = document.querySelector('#mobile-menu [role="menuitem"]')
      if (firstMenuItem) {
        firstMenuItem.focus()
      }
    })
  }
})

// Preload route on hover (performance optimization)
const preloadRoute = (path) => {
  if (process.client) {
    router.prefetch(path)
  }
}
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Navigation link styling */
.nav-link {
  position: relative;
}

.nav-link.router-link-active {
  color: #f59e0b;
}

.nav-link:hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  z-index: -1;
}

/* Logo hover effects */
.text-2xl:hover {
  text-shadow: 0 0 8px rgba(245, 158, 11, 0.5);
}

/* Mobile menu animations */
#mobile-menu {
  max-height: 0;
  overflow: hidden;
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  max-height: 400px;
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Focus styles for accessibility */
.nav-link:focus-visible,
button:focus-visible {
  outline: 2px solid #f59e0b;
  outline-offset: 2px;
}

/* Loading bar animation */
.h-1 {
  height: 4px;
}

/* Performance optimizations */
header {
  will-change: background-color, backdrop-filter;
  contain: layout style paint;
}

.nav-link {
  will-change: color;
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .nav-link:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .mobile-menu-enter-to,
  .mobile-menu-leave-from {
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .transition-all,
  .mobile-menu-enter-active,
  .mobile-menu-leave-active {
    transition: none;
  }

  .w-6.h-6 {
    transform: none !important;
  }
}

/* Mobile improvements */
@media (max-width: 1024px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

/* Print styles */
@media print {
  header {
    position: static;
    background: white;
    color: black;
    box-shadow: none;
  }

  .mobile-menu-button,
  #mobile-menu {
    display: none;
  }
}
</style>