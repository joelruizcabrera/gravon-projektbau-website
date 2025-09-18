<template>
  <div class="form-field" :class="fieldClass">
    <!-- Label -->
    <label
        v-if="label"
        :for="inputId"
        class="block text-sm font-medium text-gray-700 mb-2"
    >
      {{ label }}
      <span v-if="required" class="text-red-500 ml-1">*</span>
    </label>

    <!-- Input Field -->
    <div class="relative">
      <!-- Prefix Icon -->
      <div
          v-if="prefixIcon"
          class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      >
        <Icon :name="prefixIcon" class="w-5 h-5" />
      </div>

      <!-- Input Element -->
      <component
          :is="inputComponent"
          :id="inputId"
          :value="modelValue"
          v-bind="inputAttrs"
          :class="inputClass"
          :placeholder="placeholder"
          @input="handleInput"
          @blur="handleBlur"
          @focus="handleFocus"
          @change="handleChange"
      >
        <!-- Select Options -->
        <template v-if="type === 'select'">
          <option value="" v-if="placeholder">{{ placeholder }}</option>
          <option
              v-for="option in options"
              :key="option.value"
              :value="option.value"
          >
            {{ option.label }}
          </option>
        </template>
      </component>

      <!-- Suffix Icon -->
      <div
          v-if="suffixIcon || showPasswordToggle"
          class="absolute right-3 top-1/2 transform -translate-y-1/2"
      >
        <button
            v-if="showPasswordToggle"
            type="button"
            @click="togglePassword"
            class="text-gray-400 hover:text-gray-600 transition-colors"
            :aria-label="showPassword ? 'Hide password' : 'Show password'"
        >
          <Icon :name="showPassword ? 'eye-off' : 'eye'" class="w-5 h-5" />
        </button>
        <Icon
            v-else-if="suffixIcon"
            :name="suffixIcon"
            class="w-5 h-5 text-gray-400"
        />
      </div>
    </div>

    <!-- Helper Text -->
    <p
        v-if="helperText"
        class="mt-2 text-sm text-gray-500"
    >
      {{ helperText }}
    </p>

    <!-- Error Message -->
    <Transition name="slide-down">
      <p
          v-if="error"
          class="mt-2 text-sm text-red-600 flex items-center"
          role="alert"
      >
        <Icon name="alert-circle" class="w-4 h-4 mr-1 flex-shrink-0" />
        {{ error }}
      </p>
    </Transition>

    <!-- Success Message -->
    <Transition name="slide-down">
      <p
          v-if="success"
          class="mt-2 text-sm text-green-600 flex items-center"
      >
        <Icon name="check-circle" class="w-4 h-4 mr-1 flex-shrink-0" />
        {{ success }}
      </p>
    </Transition>
  </div>
</template>

<script setup>
import Icon from "~/components/ui/Icon.vue";

const props = defineProps({
  modelValue: { type: [String, Number, Boolean], default: '' },
  type: {
    type: String,
    default: 'text',
    validator: (value) => [
      'text', 'email', 'password', 'tel', 'url', 'search',
      'number', 'textarea', 'select'
    ].includes(value)
  },
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  error: { type: String, default: '' },
  success: { type: String, default: '' },
  helperText: { type: String, default: '' },
  prefixIcon: { type: String, default: '' },
  suffixIcon: { type: String, default: '' },
  options: { type: Array, default: () => [] }, // For select
  rows: { type: Number, default: 4 }, // For textarea
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  }
})

const emit = defineEmits(['update:modelValue', 'blur', 'focus', 'change'])

// Reactive data
const showPassword = ref(false)
const isFocused = ref(false)

// Computed
const inputId = computed(() => `field-${Math.random().toString(36).substr(2, 9)}`)

const inputComponent = computed(() => {
  switch (props.type) {
    case 'textarea': return 'textarea'
    case 'select': return 'select'
    default: return 'input'
  }
})

const inputAttrs = computed(() => {
  const attrs = {
    required: props.required,
    disabled: props.disabled,
    readonly: props.readonly
  }

  // Set input type
  if (props.type === 'password') {
    attrs.type = showPassword.value ? 'text' : 'password'
  } else if (props.type !== 'textarea' && props.type !== 'select') {
    attrs.type = props.type
  }

  // Add rows for textarea
  if (props.type === 'textarea') {
    attrs.rows = props.rows
  }

  return attrs
})

const showPasswordToggle = computed(() => {
  return props.type === 'password'
})

const fieldClass = computed(() => {
  return [
    props.error ? 'field-error' : '',
    props.success ? 'field-success' : '',
    props.disabled ? 'field-disabled' : ''
  ].filter(Boolean).join(' ')
})

const inputClass = computed(() => {
  const base = 'w-full rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent'

  const sizes = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-4 py-3',
    large: 'px-5 py-4 text-lg'
  }

  const states = {
    default: 'border border-gray-300 bg-white',
    error: 'border-2 border-red-500 bg-red-50',
    success: 'border-2 border-green-500 bg-green-50',
    disabled: 'border-gray-200 bg-gray-50 cursor-not-allowed'
  }

  const padding = {
    prefix: props.prefixIcon ? 'pl-10' : '',
    suffix: props.suffixIcon || showPasswordToggle.value ? 'pr-10' : ''
  }

  const state = props.error ? 'error' :
      props.success ? 'success' :
          props.disabled ? 'disabled' : 'default'

  return [
    base,
    sizes[props.size],
    states[state],
    padding.prefix,
    padding.suffix,
    props.type === 'textarea' ? 'resize-none' : ''
  ].filter(Boolean).join(' ')
})

// Methods
const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const handleInput = (event) => {
  const value = event.target.value
  emit('update:modelValue', value)
}

const handleChange = (event) => {
  const value = event.target.value
  emit('update:modelValue', value)
  emit('change', value)
}

const handleFocus = (event) => {
  isFocused.value = true
  emit('focus', event)
}

const handleBlur = (event) => {
  isFocused.value = false
  emit('blur', event)
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>