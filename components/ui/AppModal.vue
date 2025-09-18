<template>
  <Teleport to="body">
    <Transition name="modal" appear>
      <div
          v-if="modelValue"
          class="fixed inset-0 z-50 flex items-center justify-center p-4"
          @click.self="handleBackdropClick"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

        <!-- Modal Container -->
        <div
            :class="modalClass"
            class="relative bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden"
            role="dialog"
            aria-modal="true"
            :aria-labelledby="titleId"
            ref="modalRef"
        >
          <!-- Header -->
          <div
              v-if="hasHeader"
              :class="headerClass"
          >
            <div class="flex items-center justify-between">
              <div>
                <h2
                    v-if="title"
                    :id="titleId"
                    class="text-2xl font-bold text-gray-900"
                >
                  {{ title }}
                </h2>
                <p
                    v-if="subtitle"
                    class="text-gray-600 mt-1"
                >
                  {{ subtitle }}
                </p>
              </div>

              <button
                  v-if="closable"
                  @click="closeModal"
                  class="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100"
                  :aria-label="$t('common.close')"
              >
                <Icon name="x" class="w-6 h-6" />
              </button>
            </div>
          </div>

          <!-- Content -->
          <div
              :class="contentClass"
              ref="contentRef"
          >
            <slot />
          </div>

          <!-- Footer -->
          <div
              v-if="$slots.footer || hasDefaultActions"
              :class="footerClass"
          >
            <slot name="footer">
              <div class="flex items-center justify-end space-x-4">
                <AppButton
                    v-if="cancelText"
                    variant="secondary"
                    @click="handleCancel"
                >
                  {{ cancelText }}
                </AppButton>
                <AppButton
                    v-if="confirmText"
                    variant="primary"
                    @click="handleConfirm"
                    :loading="loading"
                    :disabled="disabled"
                >
                  {{ confirmText }}
                </AppButton>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  modelValue: { type: Boolean, required: true },
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large', 'xl', 'full'].includes(value)
  },
  closable: { type: Boolean, default: true },
  closeOnBackdrop: { type: Boolean, default: true },
  closeOnEscape: { type: Boolean, default: true },

  // Default Actions
  confirmText: { type: String, default: '' },
  cancelText: { type: String, default: '' },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },

  // Custom Classes
  customClass: { type: String, default: '' }
})

const emit = defineEmits([
  'update:modelValue',
  'close',
  'confirm',
  'cancel',
  'opened',
  'closed'
])

// Refs
const modalRef = ref()
const contentRef = ref()

// Computed
const titleId = computed(() => `modal-title-${Math.random().toString(36).substr(2, 9)}`)

const modalClass = computed(() => {
  const sizes = {
    small: 'max-w-md w-full',
    medium: 'max-w-2xl w-full',
    large: 'max-w-4xl w-full',
    xl: 'max-w-6xl w-full',
    full: 'max-w-none w-full h-full rounded-none'
  }

  return [sizes[props.size], props.customClass].filter(Boolean).join(' ')
})

const headerClass = computed(() => {
  return 'px-6 py-4 border-b border-gray-200'
})

const contentClass = computed(() => {
  return 'px-6 py-4 overflow-y-auto'
})

const footerClass = computed(() => {
  return 'px-6 py-4 border-t border-gray-200 bg-gray-50'
})

const hasHeader = computed(() => {
  return props.title || props.subtitle || props.closable
})

const hasDefaultActions = computed(() => {
  return props.confirmText || props.cancelText
})

const slots = useSlots()

// Methods
const closeModal = () => {
  emit('update:modelValue', false)
  emit('close')
}

const handleBackdropClick = () => {
  if (props.closeOnBackdrop) {
    closeModal()
  }
}

const handleCancel = () => {
  emit('cancel')
  closeModal()
}

const handleConfirm = () => {
  emit('confirm')
}

const handleEscape = (event) => {
  if (event.key === 'Escape' && props.closeOnEscape && props.modelValue) {
    closeModal()
  }
}

const trapFocus = () => {
  if (!modalRef.value) return

  const focusableElements = modalRef.value.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )

  if (focusableElements.length === 0) return

  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  const handleTabKey = (event) => {
    if (event.key !== 'Tab') return

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }
  }

  modalRef.value.addEventListener('keydown', handleTabKey)
  firstElement.focus()

  return () => {
    modalRef.value?.removeEventListener('keydown', handleTabKey)
  }
}

// Watchers
watch(() => props.modelValue, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
    nextTick(() => {
      trapFocus()
      emit('opened')
    })
  } else {
    document.body.style.overflow = ''
    emit('closed')
  }
})

// Lifecycle
onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.body.style.overflow = ''
  document.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>