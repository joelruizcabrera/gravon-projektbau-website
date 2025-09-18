<template>
  <div class="relative language-switcher" ref="dropdownRef">
    <button
        @click="toggleDropdown"
        class="flex items-center space-x-2 text-white hover:text-yellow-500 transition-colors duration-300 p-2 rounded-lg hover:bg-white hover:bg-opacity-10"
        :aria-expanded="isOpen"
        aria-haspopup="true"
        :aria-label="$t('nav.switchLanguage')"
        type="button"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
      </svg>
      <span class="uppercase font-medium">{{ currentLocaleCode }}</span>
      <svg
          class="w-4 h-4 transform transition-transform duration-200"
          :class="{ 'rotate-180': isOpen }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>

    <Transition name="dropdown">
      <div
          v-if="isOpen"
          class="dropdown-menu absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden min-w-[160px]"
          role="menu"
          :aria-label="$t('nav.switchLanguage')"
      >
        <NuxtLinkLocale
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="getLocalizedPath(locale.code)"
            @click="handleLocaleClick(locale)"
            class="flex items-center space-x-3 px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-200 no-underline"
            :class="{ 'bg-yellow-50 border-l-4 border-yellow-500': locale.code === currentLocaleCode }"
            role="menuitem"
            :aria-current="locale.code === currentLocaleCode ? 'true' : 'false'"
        >
          <!-- Flag placeholder -->
          <div class="w-8 h-6 bg-gray-200 rounded-sm flex items-center justify-center overflow-hidden">
            <span
                class="text-xs font-bold"
                :class="getFlagClass(locale.code)"
                :title="locale.name"
            >
              {{ locale.code.toUpperCase() }}
            </span>
          </div>

          <div class="flex-1">
            <div class="font-medium">{{ locale.name }}</div>
            <div class="text-xs text-gray-500">{{ locale.nativeName || locale.name }}</div>
          </div>

          <svg
              v-if="locale.code === currentLocaleCode"
              class="w-4 h-4 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
          >
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
        </NuxtLinkLocale>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const { locale: currentLocale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()

// Reactive state
const isOpen = ref(false)
const dropdownRef = ref(null)

// Enhanced locale configuration
const localeConfig = {
  de: { name: 'Deutsch', nativeName: 'Deutsch', flag: '🇩🇪' },
  en: { name: 'English', nativeName: 'English', flag: '🇺🇸' },
  es: { name: 'Español', nativeName: 'Español', flag: '🇪🇸' }
}

// Computed properties
const currentLocaleCode = computed(() => {
  return currentLocale.value || 'de'
})

const availableLocales = computed(() => {
  if (!Array.isArray(locales.value)) {
    console.warn('Locales not properly configured')
    return [
      { code: 'de', name: 'Deutsch', nativeName: 'Deutsch' },
      { code: 'en', name: 'English', nativeName: 'English' }
    ].filter(locale => locale.code !== currentLocaleCode.value)
  }

  return locales.value
      .filter(locale => locale.code !== currentLocaleCode.value)
      .map(locale => ({
        ...locale,
        ...localeConfig[locale.code],
        name: locale.name || localeConfig[locale.code]?.name || locale.code.toUpperCase()
      }))
})

// Methods
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}

const handleLocaleClick = (locale) => {
  closeDropdown()

  // Optional: Track language change event
  if (process.client && window.gtag) {
    window.gtag('event', 'language_change', {
      event_category: 'engagement',
      event_label: `${currentLocaleCode.value}_to_${locale.code}`,
      value: 1
    })
  }
}

const getLocalizedPath = (localeCode) => {
  try {
    return switchLocalePath(localeCode)
  } catch (error) {
    console.warn('Error getting localized path:', error)
    // Fallback: manually construct path
    const currentPath = route.path
    const isDefaultLocale = localeCode === 'de'

    if (isDefaultLocale) {
      // Remove locale prefix for default locale
      return currentPath.replace(/^\/[a-z]{2}(\/|$)/, '/')
    } else {
      // Add locale prefix for non-default locales
      const cleanPath = currentPath.replace(/^\/[a-z]{2}(\/|$)/, '/')
      return `/${localeCode}${cleanPath === '/' ? '' : cleanPath}`
    }
  }
}

const getFlagClass = (localeCode) => {
  const flagColors = {
    de: 'text-red-600',
    en: 'text-blue-600',
    es: 'text-yellow-600'
  }
  return flagColors[localeCode] || 'text-gray-600'
}

// Event handlers
const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    closeDropdown()
  }
}

const handleEscape = (event) => {
  if (event.key === 'Escape' && isOpen.value) {
    closeDropdown()
  }
}

const handleFocusOut = (event) => {
  // Close dropdown if focus moves outside the component
  setTimeout(() => {
    if (dropdownRef.value && !dropdownRef.value.contains(document.activeElement)) {
      closeDropdown()
    }
  }, 100)
}

// Provide fallback translations if not available
const { t } = useI18n()
const fallbackTranslations = {
  'nav.switchLanguage': 'Switch language'
}

const $t = (key) => {
  try {
    return t(key)
  } catch (error) {
    return fallbackTranslations[key] || key
  }
}

// Lifecycle hooks
onMounted(() => {
  if (process.client) {
    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('focusout', handleFocusOut)
  }
})

onUnmounted(() => {
  if (process.client) {
    document.removeEventListener('click', handleClickOutside)
    document.removeEventListener('keydown', handleEscape)
    document.removeEventListener('focusout', handleFocusOut)
  }
})

// Watch for route changes to close dropdown
watch(() => route.path, () => {
  closeDropdown()
})
</script>

<style scoped>
.language-switcher {
  user-select: none;
  position: relative;
  z-index: 1000;
}

/* Critical: Dropdown menu z-index fix */
.dropdown-menu {
  z-index: 9999 !important;
  position: absolute !important;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: top right;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.95);
}

/* Enhanced focus styles for accessibility */
button:focus-visible {
  outline: 2px solid #f59e0b;
  outline-offset: 2px;
}

a:focus-visible {
  outline: 2px solid #f59e0b;
  outline-offset: -2px;
  background-color: rgba(245, 158, 11, 0.1);
}

/* Smooth transitions */
.language-switcher * {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced hover states */
.language-switcher button:hover {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
}

/* Mobile-friendly touch targets */
@media (max-width: 768px) {
  .language-switcher button,
  .language-switcher a {
    min-height: 44px;
    min-width: 44px;
  }

  .dropdown-menu {
    right: 0;
    left: auto;
    min-width: 200px;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .dropdown-menu {
    background-color: #1f2937;
    border-color: #374151;
  }

  .language-switcher a {
    color: #f3f4f6;
  }

  .language-switcher a:hover {
    background-color: #374151;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .dropdown-enter-active,
  .dropdown-leave-active {
    transition-duration: 0.1ms;
  }

  .language-switcher * {
    transition-duration: 0.1ms;
  }
}

/* Enhanced dropdown shadow */
.dropdown-menu {
  box-shadow:
      0 10px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04),
      0 0 0 1px rgba(0, 0, 0, 0.05);
}

/* Active locale styling */
.language-switcher a[aria-current="true"] {
  position: relative;
}

.language-switcher a[aria-current="true"]::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: #f59e0b;
}

/* Flag placeholder styling */
.language-switcher .w-8 {
  font-size: 0.625rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e5e7eb;
}

/* No underline for language links */
.no-underline {
  text-decoration: none !important;
}

.no-underline:hover {
  text-decoration: none !important;
}
</style>