<template>
  <component
      :is="tag"
      :type="htmlType"
      :to="to"
      :href="href"
      :target="target"
      :rel="rel"
      :disabled="disabled || loading"
      :class="buttonClasses"
      :aria-label="ariaLabel"
      :aria-describedby="ariaDescribedBy"
      @click="handleClick"
      @focus="handleFocus"
      @blur="handleBlur"
  >
    <!-- Loading Spinner -->
    <Transition name="fade" mode="out-in">
      <Icon
          v-if="loading"
          name="loader"
          :class="iconSizeClass"
          class="animate-spin"
      />
      <Icon
          v-else-if="prefixIcon"
          :name="prefixIcon"
          :class="[iconSizeClass, 'mr-2']"
      />
    </Transition>

    <!-- Button Text -->
    <span
        v-if="!iconOnly"
        :class="{ 'ml-2': loading && !prefixIcon }"
    >
      <slot>{{ text }}</slot>
    </span>

    <!-- Suffix Icon -->
    <Icon
        v-if="suffixIcon && !loading"
        :name="suffixIcon"
        :class="[iconSizeClass, 'ml-2']"
    />

    <!-- Ripple Effect -->
    <span
        v-if="ripple"
        ref="rippleRef"
        class="absolute inset-0 overflow-hidden rounded-inherit pointer-events-none"
    >
      <span
          class="ripple-animation absolute bg-white opacity-30 rounded-full transform scale-0"
          :style="rippleStyle"
      ></span>
    </span>
  </component>
</template>

<script setup>
const props = defineProps({
  // Content Props
  text: { type: String, default: '' },
  prefixIcon: { type: String, default: '' },
  suffixIcon: { type: String, default: '' },
  iconOnly: { type: Boolean, default: false },

  // Behavior Props
  type: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'submit', 'reset'].includes(value)
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => [
      'primary', 'secondary', 'outline', 'ghost', 'danger',
      'success', 'warning', 'dark', 'light'
    ].includes(value)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['xs', 'sm', 'medium', 'lg', 'xl'].includes(value)
  },

  // Link Props
  to: { type: [String, Object], default: null },
  href: { type: String, default: null },
  target: { type: String, default: null },
  rel: { type: String, default: null },

  // State Props
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  active: { type: Boolean, default: false },

  // Style Props
  block: { type: Boolean, default: false },
  rounded: {
    type: String,
    default: 'md',
    validator: (value) => ['none', 'sm', 'md', 'lg', 'xl', 'full'].includes(value)
  },
  shadow: { type: Boolean, default: false },
  ripple: { type: Boolean, default: true },

  // Accessibility Props
  ariaLabel: { type: String, default: '' },
  ariaDescribedBy: { type: String, default: '' },

  // Custom Classes
  customClass: { type: String, default: '' }
})

const emit = defineEmits(['click', 'focus', 'blur'])

// Reactive Data
const rippleRef = ref()
const rippleStyle = ref('')

// Computed Properties
const tag = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})

const htmlType = computed(() => {
  return tag.value === 'button' ? props.type : null
})

const buttonClasses = computed(() => {
  const classes = []

  // Base classes
  classes.push(
      'inline-flex items-center justify-center font-semibold',
      'transition-all duration-300 ease-in-out',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'relative overflow-hidden'
  )

  // Size classes
  const sizeClasses = {
    xs: 'px-2.5 py-1.5 text-xs',
    sm: 'px-3 py-2 text-sm',
    medium: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg'
  }
  classes.push(sizeClasses[props.size])

  // Icon-only size adjustments
  if (props.iconOnly) {
    const iconOnlySizes = {
      xs: 'p-1.5',
      sm: 'p-2',
      medium: 'p-2.5',
      lg: 'p-3',
      xl: 'p-4'
    }
    classes.push(iconOnlySizes[props.size])
  }

  // Variant classes
  const variantClasses = {
    primary: [
      'bg-yellow-500 text-black border border-yellow-500',
      'hover:bg-yellow-400 hover:border-yellow-400',
      'focus:ring-yellow-500',
      'active:bg-yellow-600 active:border-yellow-600',
      'disabled:bg-yellow-300 disabled:border-yellow-300'
    ],
    secondary: [
      'bg-gray-600 text-white border border-gray-600',
      'hover:bg-gray-700 hover:border-gray-700',
      'focus:ring-gray-500',
      'active:bg-gray-800 active:border-gray-800'
    ],
    outline: [
      'bg-transparent text-yellow-600 border-2 border-yellow-500',
      'hover:bg-yellow-500 hover:text-black',
      'focus:ring-yellow-500',
      'active:bg-yellow-600 active:text-black'
    ],
    ghost: [
      'bg-transparent text-gray-700 border border-transparent',
      'hover:bg-gray-100 hover:text-gray-900',
      'focus:ring-gray-500',
      'active:bg-gray-200'
    ],
    danger: [
      'bg-red-500 text-white border border-red-500',
      'hover:bg-red-600 hover:border-red-600',
      'focus:ring-red-500',
      'active:bg-red-700 active:border-red-700'
    ],
    success: [
      'bg-green-500 text-white border border-green-500',
      'hover:bg-green-600 hover:border-green-600',
      'focus:ring-green-500',
      'active:bg-green-700 active:border-green-700'
    ],
    warning: [
      'bg-orange-500 text-white border border-orange-500',
      'hover:bg-orange-600 hover:border-orange-600',
      'focus:ring-orange-500',
      'active:bg-orange-700 active:border-orange-700'
    ],
    dark: [
      'bg-gray-900 text-white border border-gray-900',
      'hover:bg-gray-800 hover:border-gray-800',
      'focus:ring-gray-700',
      'active:bg-gray-700 active:border-gray-700'
    ],
    light: [
      'bg-white text-gray-900 border border-gray-300',
      'hover:bg-gray-50 hover:border-gray-400',
      'focus:ring-gray-500',
      'active:bg-gray-100 active:border-gray-500'
    ]
  }
  classes.push(...variantClasses[props.variant])

  // Rounded classes
  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full'
  }
  classes.push(roundedClasses[props.rounded])

  // Additional style classes
  if (props.block) classes.push('w-full')
  if (props.shadow) classes.push('shadow-lg hover:shadow-xl')
  if (props.active) classes.push('ring-2 ring-offset-2 ring-yellow-500')

  // Custom classes
  if (props.customClass) classes.push(props.customClass)

  return classes.join(' ')
})

const iconSizeClass = computed(() => {
  const iconSizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    medium: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7'
  }
  return iconSizes[props.size]
})

// Methods
const handleClick = (event) => {
  if (props.disabled || props.loading) {
    event.preventDefault()
    return
  }

  if (props.ripple) {
    createRipple(event)
  }

  emit('click', event)
}

const handleFocus = (event) => {
  emit('focus', event)
}

const handleBlur = (event) => {
  emit('blur', event)
}

const createRipple = (event) => {
  if (!rippleRef.value) return

  const rect = event.currentTarget.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  const x = event.clientX - rect.left - size / 2
  const y = event.clientY - rect.top - size / 2

  rippleStyle.value = `
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
  `

  // Trigger animation
  nextTick(() => {
    const rippleEl = rippleRef.value?.querySelector('.ripple-animation')
    if (rippleEl) {
      rippleEl.style.transform = 'scale(4)'
      rippleEl.style.opacity = '0'

      setTimeout(() => {
        rippleEl.style.transform = 'scale(0)'
        rippleEl.style.opacity = '0.3'
      }, 300)
    }
  })
}

// Enhanced Icon Component with Loader
const loaderIcon = {
  'loader': 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
}
</script>

<style scoped>
.rounded-inherit {
  border-radius: inherit;
}

.ripple-animation {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Animation for icon transitions */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

/* Loading spinner animation */
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Focus improvements for accessibility */
@media (prefers-reduced-motion: reduce) {
  .transition-all {
    transition: none;
  }

  .animate-spin {
    animation: none;
  }
}
</style>