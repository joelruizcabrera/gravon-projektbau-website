<template>
  <section
      :class="[
      'section-container',
      paddingClass,
      backgroundClass,
      customClass
    ]"
  >
    <!-- Section Header -->
    <div
        v-if="hasHeader"
        :class="headerContainerClass"
    >
      <!-- Badge -->
      <div
          v-if="badge"
          class="section-badge gsap-animate mb-4"
      >
        <span class="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
          {{ badge }}
        </span>
      </div>

      <!-- Title -->
      <h2
          :class="titleClass"
          class="gsap-animate"
      >
        {{ title }}
      </h2>

      <!-- Subtitle -->
      <p
          v-if="subtitle"
          :class="subtitleClass"
          class="gsap-animate"
      >
        {{ subtitle }}
      </p>

      <!-- Header Actions -->
      <div
          v-if="$slots.headerActions"
          class="gsap-animate"
      >
        <slot name="headerActions" />
      </div>
    </div>

    <!-- Main Content -->
    <div :class="contentClass">
      <slot />
    </div>

    <!-- Footer Actions -->
    <div
        v-if="$slots.footerActions"
        :class="footerClass"
    >
      <slot name="footerActions" />
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  // Content Props
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  badge: { type: String, default: '' },

  // Layout Props
  container: { type: Boolean, default: true },
  maxWidth: {
    type: String,
    default: '7xl',
    validator: (value) => ['4xl', '5xl', '6xl', '7xl', 'none'].includes(value)
  },
  padding: {
    type: String,
    default: 'large',
    validator: (value) => ['none', 'small', 'medium', 'large', 'xl'].includes(value)
  },
  background: {
    type: String,
    default: 'white',
    validator: (value) => [
      'white', 'gray', 'dark', 'gradient', 'transparent', 'pattern', 'slate', 'gradientYellow'
    ].includes(value)
  },

  // Header Layout
  headerAlign: {
    type: String,
    default: 'center',
    validator: (value) => ['left', 'center', 'right'].includes(value)
  },
  headerMaxWidth: {
    type: String,
    default: '4xl',
    validator: (value) => ['2xl', '3xl', '4xl', '5xl', 'none'].includes(value)
  },

  // Spacing
  headerSpacing: {
    type: String,
    default: 'large',
    validator: (value) => ['small', 'medium', 'large', 'xl'].includes(value)
  },

  // Custom Classes
  customClass: { type: String, default: '' }
})

// Computed Classes
const paddingClass = computed(() => {
  const paddings = {
    none: '',
    small: 'py-12',
    medium: 'py-16',
    large: 'py-20',
    xl: 'py-24'
  }
  return paddings[props.padding]
})

const backgroundClass = computed(() => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
    slate: 'bg-slate-900 text-white',
    gradient: 'bg-gradient-to-br from-gray-50 to-white',
    gradientYellow: 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black',
    transparent: 'bg-transparent',
    pattern: 'bg-white bg-opacity-50 bg-pattern'
  }
  return backgrounds[props.background]
})

const headerContainerClass = computed(() => {
  const base = props.container ? 'container mx-auto px-4 lg:px-8' : ''
  const align = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }
  const maxWidth = props.headerMaxWidth !== 'none' ? `max-w-${props.headerMaxWidth} mx-auto` : ''
  const spacing = {
    small: 'mb-8',
    medium: 'mb-12',
    large: 'mb-16',
    xl: 'mb-20'
  }

  return [base, align[props.headerAlign], maxWidth, spacing[props.headerSpacing]]
      .filter(Boolean).join(' ')
})

const contentClass = computed(() => {
  return props.container ? 'container mx-auto px-4 lg:px-8' : ''
})

const footerClass = computed(() => {
  const base = props.container ? 'container mx-auto px-4 lg:px-8' : ''
  return [base, 'mt-16'].filter(Boolean).join(' ')
})

const titleClass = computed(() => {
  const sizes = {
    white: 'text-4xl lg:text-5xl font-bold mb-6',
    gray: 'text-4xl lg:text-5xl font-bold text-gray-900 mb-6',
    dark: 'text-4xl lg:text-5xl font-bold text-white mb-6'
  }
  return sizes[props.background] || sizes.white
})

const subtitleClass = computed(() => {
  const sizes = {
    white: 'text-xl text-gray-600',
    gray: 'text-xl text-gray-600',
    dark: 'text-xl text-gray-300'
  }
  const maxWidth = props.headerMaxWidth !== 'none' ? `max-w-${props.headerMaxWidth} mx-auto` : ''

  return [sizes[props.background] || sizes.white, maxWidth]
      .filter(Boolean).join(' ')
})

const hasHeader = computed(() => {
  return props.title || props.subtitle || props.badge || !!slots.headerActions
})

const slots = useSlots()
</script>