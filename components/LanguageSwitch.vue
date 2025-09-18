<template>
  <div class="relative" ref="dropdownRef">
    <button
        @click="toggleDropdown"
        class="flex items-center space-x-2 text-white hover:text-yellow-500 transition-colors duration-300 p-2 rounded-lg hover:bg-white hover:bg-opacity-10"
        :aria-expanded="isOpen"
        aria-haspopup="true"
        :aria-label="$t('nav.switchLanguage')"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
      </svg>
      <span class="uppercase font-medium">{{ currentLocale.code }}</span>
      <svg class="w-4 h-4 transform transition-transform duration-200" :class="{ 'rotate-180': isOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>

    <Transition name="dropdown">
      <div v-if="isOpen" class="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50 min-w-[140px]">
        <NuxtLink
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            @click="closeDropdown"
            class="flex items-center space-x-3 px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
            :class="{ 'bg-yellow-50': locale.code === $i18n.locale }"
        >
          <span class="w-8 h-6 bg-gray-200 rounded-sm flex items-center justify-center">
            <span class="text-xs font-bold">{{ locale.code.toUpperCase() }}</span>
          </span>
          <span class="font-medium">{{ locale.name }}</span>
          <svg v-if="locale.code === $i18n.locale" class="w-4 h-4 text-yellow-500 ml-auto" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
        </NuxtLink>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const { $i18n } = useNuxtApp()
const switchLocalePath = useSwitchLocalePath()
const isOpen = ref(false)
const dropdownRef = ref(null)

// Get current locale info
const currentLocale = computed(() => {
  console.log($i18n.locales.value)
  return $i18n.locales.value.find(locale => locale.code === $i18n.locale.value) || $i18n.locales.value[0]
})

// Get available locales (excluding current)
const availableLocales = computed(() => {
  console.log($i18n.locales.value)
  return $i18n.locales.value.filter(locale => locale.code !== $i18n.locale.value)
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

// Close dropdown on escape key
const handleEscape = (event) => {
  if (event.key === 'Escape') {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscape)
})

// Close dropdown on route change
watch(() => useRoute().path, () => {
  isOpen.value = false
})

// Add missing translation
const { t } = useI18n()
if (!t('nav.switchLanguage', null, { missingWarn: false })) {
  // Fallback if translation is missing
}
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.95);
}

/* Focus styles for accessibility */
button:focus-visible {
  outline: 2px solid #f59e0b;
  outline-offset: 2px;
}

a:focus-visible {
  outline: 2px solid #f59e0b;
  outline-offset: -2px;
}
</style>