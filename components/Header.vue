<template>
  <header class="fixed w-full top-0 z-50 transition-all duration-300" :class="headerClasses">
    <nav class="container mx-auto px-4 lg:px-8 py-6">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="text-white font-bold text-2xl tracking-wider hover:text-yellow-500 transition-colors duration-300">
          GRAVON<sup class="text-sm">®</sup>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <NuxtLink
              v-for="item in navigation"
              :key="item.path"
              :to="localePath(item.path)"
              class="text-white hover:text-yellow-500 font-medium uppercase tracking-wide transition-all duration-300 relative group"
              active-class="text-yellow-500"
          >
            {{ $t(item.label) }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>

          <LanguageSwitch />
        </div>

        <!-- Mobile Menu Button -->
        <button
            @click="toggleMobileMenu"
            class="lg:hidden text-white p-2 hover:text-yellow-500 transition-colors duration-300"
            aria-label="Toggle mobile menu"
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
        <div v-if="mobileMenuOpen" class="lg:hidden mt-6 pb-6 border-t border-gray-700 pt-6">
          <div class="flex flex-col space-y-4">
            <NuxtLink
                v-for="item in navigation"
                :key="item.path"
                :to="localePath(item.path)"
                @click="closeMobileMenu"
                class="text-white hover:text-yellow-500 font-medium uppercase tracking-wide transition-colors duration-300 py-2"
                active-class="text-yellow-500"
            >
              {{ $t(item.label) }}
            </NuxtLink>
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
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const navigation = [
  { path: '/', label: 'nav.home' },
  { path: '/services', label: 'nav.services' },
  { path: '/projects', label: 'nav.projects' },
  { path: '/about', label: 'nav.about' },
  { path: '/contact', label: 'nav.contact' }
]

const headerClasses = computed(() => ({
  'bg-slate-900 bg-opacity-95 backdrop-blur-sm': scrolled.value,
  'bg-slate-900 bg-opacity-90': !scrolled.value
}))

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Handle scroll events
onMounted(() => {
  const handleScroll = () => {
    scrolled.value = window.scrollY > 50
  }

  window.addEventListener('scroll', handleScroll)

  // Close mobile menu on outside click
  const handleClickOutside = (event) => {
    if (!event.target.closest('header')) {
      mobileMenuOpen.value = false
    }
  }

  document.addEventListener('click', handleClickOutside)

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    document.removeEventListener('click', handleClickOutside)
  })
})

// Close mobile menu on route change
watch(() => useRoute().path, () => {
  mobileMenuOpen.value = false
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
</style>