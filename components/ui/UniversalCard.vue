<template>
  <div
      :class="[
        'universal-card group relative overflow-hidden transition-all duration-300',
        cardClasses,
        hoverEffect ? 'gsap-scale card-hover' : ''
      ]"
      @click="handleClick"
  >
    <!-- Card Image (optional) -->
    <div v-if="image" class="relative overflow-hidden">
      <NuxtImg
          :src="image"
          :alt="imageAlt || title"
          :width="imageWidth"
          :height="imageHeight"
          format="webp"
          :class="imageClass"
          loading="lazy"
      />
      <div
          v-if="badge"
          class="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold"
      >
        {{ badge }}
      </div>
    </div>

    <!-- Card Content -->
    <div :class="contentClass">
      <!-- Icon (optional) -->
      <div v-if="icon" class="flex-shrink-0 mb-4">
        <div
            :class="[
            'flex items-center justify-center rounded-2xl transition-all duration-300',
            iconSize,
            iconColor,
            hoverEffect ? 'group-hover:scale-110' : ''
          ]"
        >
          <Icon
              :name="icon"
              :class="iconClass"
          />
        </div>
      </div>

      <!-- Title -->
      <h3
          :class="[
          'font-bold text-gray-900 mb-3 transition-colors duration-300',
          titleSize,
          hoverEffect ? 'group-hover:text-yellow-600' : ''
        ]"
      >
        {{ title }}
      </h3>

      <!-- Description -->
      <p
          v-if="description"
          :class="[
          'text-gray-600 mb-4',
          descriptionSize
        ]"
      >
        {{ description }}
      </p>

      <!-- Features List (optional) -->
      <ul
          v-if="features && features.length > 0"
          class="space-y-2 mb-4"
      >
        <li
            v-for="feature in features"
            :key="feature"
            class="flex items-start text-sm text-gray-700"
        >
          <Icon
              name="check-circle"
              class="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0 mt-0.5"
          />
          {{ feature }}
        </li>
      </ul>

      <!-- Tags (optional) -->
      <div
          v-if="tags && tags.length > 0"
          class="flex flex-wrap gap-2 mb-4"
      >
        <span
            v-for="tag in tags"
            :key="tag"
            class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Actions -->
      <div v-if="hasActions" class="flex items-center justify-between mt-auto pt-4">
        <!-- Primary Action -->
        <AppButton
            v-if="primaryAction"
            :variant="primaryAction.variant || 'primary'"
            :size="primaryAction.size || 'sm'"
            @click="primaryAction.handler"
        >
          {{ primaryAction.text }}
          <Icon
              v-if="primaryAction.icon"
              :name="primaryAction.icon"
              class="w-4 h-4 ml-2"
          />
        </AppButton>

        <!-- Secondary Action -->
        <button
            v-if="secondaryAction"
            @click="secondaryAction.handler"
            class="text-gray-500 hover:text-yellow-600 transition-colors duration-200"
        >
          <Icon
              :name="secondaryAction.icon || 'arrow-right'"
              class="w-5 h-5"
          />
        </button>
      </div>

      <!-- Stats (optional) -->
      <div
          v-if="stats && stats.length > 0"
          class="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100 mt-4"
      >
        <div
            v-for="stat in stats"
            :key="stat.label"
            class="text-center"
        >
          <div class="text-2xl font-bold text-yellow-500 counter" :data-target="stat.value">
            0
          </div>
          <div class="text-xs text-gray-500 uppercase tracking-wide">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  // Content Props
  title: { type: String, required: true },
  description: { type: String, default: '' },
  image: { type: String, default: '' },
  imageAlt: { type: String, default: '' },
  icon: { type: String, default: '' },
  badge: { type: String, default: '' },
  features: { type: Array, default: () => [] },
  tags: { type: Array, default: () => [] },
  stats: { type: Array, default: () => [] },

  // Visual Props
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'outlined', 'elevated', 'minimal'].includes(value)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  hoverEffect: { type: Boolean, default: true },

  // Layout Props
  imageWidth: { type: Number, default: 400 },
  imageHeight: { type: Number, default: 250 },

  // Action Props
  primaryAction: { type: Object, default: null },
  secondaryAction: { type: Object, default: null },
  clickable: { type: Boolean, default: false },

  // Custom Classes
  customClass: { type: String, default: '' }
})

const emit = defineEmits(['click', 'primary-action', 'secondary-action'])

// Computed Classes
const cardClasses = computed(() => {
  const base = 'bg-white rounded-2xl overflow-hidden'
  const variants = {
    default: 'shadow-lg',
    outlined: 'border-2 border-gray-200',
    elevated: 'shadow-2xl',
    minimal: 'shadow-none border border-gray-100'
  }
  const sizes = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8'
  }

  return [
    base,
    variants[props.variant],
    sizes[props.size],
    props.clickable ? 'cursor-pointer' : '',
    props.customClass
  ].filter(Boolean).join(' ')
})

const contentClass = computed(() => {
  return props.image ? 'p-6' : 'flex flex-col h-full'
})

const imageClass = computed(() => {
  return 'w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105'
})

const iconSize = computed(() => {
  const sizes = {
    small: 'w-10 h-10',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  }
  return sizes[props.size]
})

const iconColor = computed(() => {
  return 'bg-yellow-500 group-hover:bg-yellow-400'
})

const iconClass = computed(() => {
  const sizes = {
    small: 'w-5 h-5',
    medium: 'w-6 h-6',
    large: 'w-8 h-8'
  }
  return [sizes[props.size], 'text-black'].join(' ')
})

const titleSize = computed(() => {
  const sizes = {
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl'
  }
  return sizes[props.size]
})

const descriptionSize = computed(() => {
  const sizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  }
  return sizes[props.size]
})

const hasActions = computed(() => {
  return props.primaryAction || props.secondaryAction
})

// Methods
const handleClick = () => {
  if (props.clickable) {
    emit('click')
  }
}
</script>