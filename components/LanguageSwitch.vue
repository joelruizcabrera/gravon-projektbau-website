<template>
  <div class="relative">
    <button
        @click="toggleDropdown"
        class="flex items-center space-x-2 text-white hover:text-yellow-500 transition-colors duration-300 p-2 rounded-lg hover:bg-white hover:bg-opacity-10"
        :aria-expanded="isOpen"
        aria-haspopup="true"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
      </svg>
      <span class="uppercase font-medium">{{ $i18n.locale }}</span>
      <svg class="w-4 h-4 transform transition-transform duration-200" :class="{ 'rotate-180': isOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>

    <Transition name="dropdown">
      <div v-if="isOpen" class="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50 min-w-[120px]">
        <NuxtLink
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            @click="closeDropdown"
            class="flex items-center space-x-3 px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
        >
          <span class="w-6 h-4 bg-gray-200 rounded-sm flex items-center justify-center">
            <span class="text-xs font-bold">{{ locale.code.toUpperCase() }}</span>
          </span>
          <span class="font-medium">{{ locale.name }}</span>
        </NuxtLink>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const { $i18n } = useNuxtApp()
const switchLocalePath = useSwitchLocalePath()
const isOpen = ref(false)

const availableLocales = computed(() => {
  return $i18n.locales.filter(locale => locale.code !== $i18n.locale)
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}

// Close dropdown when clicking outside
onMounted(() => {
  const handleClickOutside = (event) => {
    if (!event.target.closest('.relative')) {
      isOpen.value = false
    }
  }

  document.addEventListener('click', handleClickOutside)

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})

// Close dropdown on route change
watch(() => useRoute().path, () => {
  isOpen.value = false
})
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
</style>