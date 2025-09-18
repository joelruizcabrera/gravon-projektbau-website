<template>
  <header class="fixed w-full top-0 z-50 transition-all duration-300" :class="headerClasses">
    <nav class="container mx-auto px-4 lg:px-8 py-6" role="navigation" aria-label="Hauptnavigation">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <NuxtLinkLocale
            to="/"
            class="text-white font-bold text-2xl tracking-wider hover:text-yellow-500 transition-colors duration-300"
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
              class="nav-link text-white hover:text-yellow-500 font-medium uppercase tracking-wide transition-all duration-300 relative group py-2"
              active-class="text-yellow-500"
              :aria-current="$route.path === localePath(item.path) ? 'page' : null"
          >
            {{ $t(item.label) }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </NuxtLinkLocale>

          <LanguageSwitch />
        </div>

        <!-- Mobile Menu Button -->
        <button
            @click="toggleMobileMenu"
            class="lg:hidden text-white p-2 hover:text-yellow-500 transition-colors duration-300 rounded-lg hover:bg-white hover:bg-opacity-10"
            :aria-expanded="mobileMenuOpen"
            aria-controls="mobile-menu"
            :aria-label="mobileMenuOpen ? $t('nav.closeMobileMenu') : $t('nav.openMobileMenu')"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div class="flex flex-col space-y-4">
            <NuxtLinkLocale
                v-for="item in navigation"
                :key="item.path"
                :to="item.path"
                @click="closeMobileMenu"
                class="text-white hover:text-yellow-500 font-medium uppercase tracking-wide transition-colors duration-300 py-2 border-b border-gray-700 border-opacity-50"
                active-class="text-yellow-500"
                role="menuitem"
            >
              {{ $t(item.label) }}
            </NuxtLinkLocale>

            <div class="pt-4 border-t border-gray-700">
              <LanguageSwitch />
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
const localePath = useLocalePath()
const route = useRoute()
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

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

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  // Prevent body scroll when mobile menu is open
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = 'auto'
}

// Handle scroll events for header background
const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

// Close mobile menu when clicking outside
const handleClickOutside = (event) => {
  const header = event.target.closest('header')
  if (!header && mobileMenuOpen.value) {
    closeMobileMenu()
  }
}

// Close mobile menu on escape key
const handleEscape = (event) => {
  if (event.key === 'Escape' && mobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = 'auto'
})

// Close mobile menu on route change
watch(() => route.path, () => {
  closeMobileMenu()
})

// Close mobile menu when window is resized to desktop size
const handleResize = () => {
  if (window.innerWidth >= 1024 && mobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Active link styling */
.nav-link.router-link-active {
  color: #f59e0b;
}

.nav-link.router-link-active span {
  width: 100%;
}

/* Focus styles for accessibility */
.nav-link:focus-visible,
button:focus-visible {
  outline: 2px solid #f59e0b;
  outline-offset: 2px;
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>