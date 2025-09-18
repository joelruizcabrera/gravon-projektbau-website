<template>
  <section id="contact" class="section-padding bg-slate-900 text-white">
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-2 gap-16">
        <!-- Contact Info -->
        <div class="contact-info">
          <h2 class="text-4xl lg:text-5xl font-bold mb-8">
            {{ $t('contact.title') }}
          </h2>

          <p class="text-xl text-gray-300 mb-12 leading-relaxed">
            {{ $t('contact.subtitle') }}
          </p>

          <div class="space-y-8">
            <!-- Address -->
            <div class="flex items-start space-x-4 group contact-item">
              <div class="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">{{ $t('contact.address.title') }}</h3>
                <div class="text-gray-300 space-y-1">
                  <p class="font-medium">GRAVON Projektbau GmbH</p>
                  <p>Musterstraße 123</p>
                  <p>60311 Frankfurt am Main</p>
                  <p>Deutschland</p>
                </div>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-start space-x-4 group contact-item">
              <div class="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">{{ $t('contact.phone.title') }}</h3>
                <div class="text-gray-300">
                  <p>
                    <a href="tel:+4969123456789" class="hover:text-yellow-500 transition-colors">
                      +49 69 123 456 789
                    </a>
                  </p>
                  <p class="text-sm mt-1">{{ $t('contact.phone.hours') }}</p>
                </div>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-start space-x-4 group contact-item">
              <div class="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">{{ $t('contact.email.title') }}</h3>
                <div class="text-gray-300">
                  <p>
                    <a href="mailto:info@gravon.de" class="hover:text-yellow-500 transition-colors">
                      info@gravon.de
                    </a>
                  </p>
                  <p>
                    <a href="mailto:projekt@gravon.de" class="hover:text-yellow-500 transition-colors">
                      projekt@gravon.de
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="mt-12">
            <h3 class="text-lg font-semibold mb-4">{{ $t('contact.followUs') }}</h3>
            <div class="flex space-x-4 social-links">
              <a
                  href="https://www.linkedin.com/company/gravon-projektbau"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors duration-300 group"
                  aria-label="LinkedIn"
              >
                <svg class="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
                </svg>
              </a>
              <a
                  href="https://www.xing.com/companies/gravonprojektbau"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors duration-300 group"
                  aria-label="XING"
              >
                <svg class="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.284.508 8.32 14.85 8.32 14.85.186.335.459.547.967.547h3.287c.421 0 .741-.188.741-.547 0-.284-.137-.507-.284-.735l-8.1-14.447 7.441-13.112c.147-.284.284-.507.284-.735 0-.359-.32-.632-.741-.632h-3.286z"/>
                </svg>
              </a>
              <a
                  href="https://twitter.com/gravon_bau"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors duration-300 group"
                  aria-label="Twitter"
              >
                <svg class="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form">
          <div class="bg-gray-800 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-6">{{ $t('contact.form.title') }}</h3>

            <form @submit.prevent="submitForm" class="space-y-6" novalidate>
              <!-- Name Fields -->
              <div class="grid md:grid-cols-2 gap-6">
                <div class="form-group">
                  <label for="firstName" class="block text-sm font-medium mb-2">
                    {{ $t('contact.form.firstName') }} *
                  </label>
                  <input
                      type="text"
                      id="firstName"
                      v-model="form.firstName"
                      required
                      class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      :placeholder="$t('contact.form.firstNamePlaceholder')"
                      :class="{ 'border-red-500 bg-red-900/20': errors.firstName }"
                      @blur="validateField('firstName')"
                      @input="clearError('firstName')"
                  />
                  <span v-if="errors.firstName" class="text-red-400 text-sm mt-1 block">{{ errors.firstName }}</span>
                </div>

                <div class="form-group">
                  <label for="lastName" class="block text-sm font-medium mb-2">
                    {{ $t('contact.form.lastName') }} *
                  </label>
                  <input
                      type="text"
                      id="lastName"
                      v-model="form.lastName"
                      required
                      class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      :placeholder="$t('contact.form.lastNamePlaceholder')"
                      :class="{ 'border-red-500 bg-red-900/20': errors.lastName }"
                      @blur="validateField('lastName')"
                      @input="clearError('lastName')"
                  />
                  <span v-if="errors.lastName" class="text-red-400 text-sm mt-1 block">{{ errors.lastName }}</span>
                </div>
              </div>

              <!-- Email and Phone -->
              <div class="grid md:grid-cols-2 gap-6">
                <div class="form-group">
                  <label for="email" class="block text-sm font-medium mb-2">
                    {{ $t('contact.form.email') }} *
                  </label>
                  <input
                      type="email"
                      id="email"
                      v-model="form.email"
                      required
                      class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      :placeholder="$t('contact.form.emailPlaceholder')"
                      :class="{ 'border-red-500 bg-red-900/20': errors.email }"
                      @blur="validateField('email')"
                      @input="clearError('email')"
                  />
                  <span v-if="errors.email" class="text-red-400 text-sm mt-1 block">{{ errors.email }}</span>
                </div>

                <div class="form-group">
                  <label for="phone" class="block text-sm font-medium mb-2">
                    {{ $t('contact.form.phone') }}
                  </label>
                  <input
                      type="tel"
                      id="phone"
                      v-model="form.phone"
                      class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      :placeholder="$t('contact.form.phonePlaceholder')"
                  />
                </div>
              </div>

              <!-- Subject -->
              <div class="form-group">
                <label for="subject" class="block text-sm font-medium mb-2">
                  {{ $t('contact.form.subject') }} *
                </label>
                <input
                    type="text"
                    id="subject"
                    v-model="form.subject"
                    required
                    class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    :placeholder="$t('contact.form.subjectPlaceholder')"
                    :class="{ 'border-red-500 bg-red-900/20': errors.subject }"
                    @blur="validateField('subject')"
                    @input="clearError('subject')"
                />
                <span v-if="errors.subject" class="text-red-400 text-sm mt-1 block">{{ errors.subject }}</span>
              </div>

              <!-- Message -->
              <div class="form-group">
                <label for="message" class="block text-sm font-medium mb-2">
                  {{ $t('contact.form.message') }} *
                </label>
                <textarea
                    id="message"
                    v-model="form.message"
                    rows="6"
                    required
                    class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
                    :placeholder="$t('contact.form.messagePlaceholder')"
                    :class="{ 'border-red-500 bg-red-900/20': errors.message }"
                    @blur="validateField('message')"
                    @input="clearError('message')"
                ></textarea>
                <span v-if="errors.message" class="text-red-400 text-sm mt-1 block">{{ errors.message }}</span>
              </div>

              <!-- Privacy Checkbox -->
              <div class="flex items-start">
                <input
                    type="checkbox"
                    id="privacy"
                    v-model="form.privacy"
                    required
                    class="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-600 rounded bg-gray-700 mt-1"
                    :class="{ 'border-red-500': errors.privacy }"
                    @change="validateField('privacy')"
                />
                <label for="privacy" class="ml-3 block text-sm text-gray-300">
                  {{ $t('contact.form.privacy') }}
                  <a href="/privacy" class="text-yellow-500 hover:text-yellow-400 underline" target="_blank">
                    Datenschutzerklärung
                  </a> *
                </label>
              </div>
              <span v-if="errors.privacy" class="text-red-400 text-sm block">{{ errors.privacy }}</span>

              <!-- Submit Button -->
              <button
                  type="submit"
                  :disabled="isSubmitting || !isFormValid"
                  class="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-semibold py-4 px-6 rounded-lg transition-all duration-300 uppercase tracking-wide transform hover:scale-105 disabled:hover:scale-100 disabled:opacity-50"
              >
                <span v-if="!isSubmitting" class="flex items-center justify-center">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                  </svg>
                  {{ $t('contact.form.send') }}
                </span>
                <span v-else class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ $t('contact.form.sending') }}
                </span>
              </button>
            </form>

            <!-- Success/Error Messages -->
            <Transition name="message">
              <div v-if="formMessage" class="mt-6 p-4 rounded-lg flex items-start space-x-3" :class="formMessage.type === 'success' ? 'bg-green-600/20 border border-green-500' : 'bg-red-600/20 border border-red-500'">
                <svg v-if="formMessage.type === 'success'" class="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <svg v-else class="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                  <p class="text-white font-medium">{{ formMessage.text }}</p>
                  <button v-if="formMessage.type === 'error'" @click="formMessage = null" class="text-gray-400 hover:text-white text-sm mt-1">Schließen</button>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { $animationUtils } = useNuxtApp()
const { t } = useI18n()

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  privacy: false
})

const errors = ref({})
const isSubmitting = ref(false)
const formMessage = ref(null)

// Form validation
const isFormValid = computed(() => {
  return form.value.firstName &&
      form.value.lastName &&
      form.value.email &&
      form.value.subject &&
      form.value.message &&
      form.value.privacy &&
      Object.keys(errors.value).length === 0
})

// Validation rules
const validateField = (fieldName) => {
  const value = form.value[fieldName]

  switch (fieldName) {
    case 'firstName':
    case 'lastName':
      if (!value || value.length < 2) {
        errors.value[fieldName] = t('contact.form.errors.' + fieldName + 'Required')
      }
      break
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!value || !emailRegex.test(value)) {
        errors.value[fieldName] = t('contact.form.errors.emailInvalid')
      }
      break
    case 'subject':
      if (!value || value.length < 3) {
        errors.value[fieldName] = t('contact.form.errors.subjectRequired')
      }
      break
    case 'message':
      if (!value || value.length < 10) {
        errors.value[fieldName] = t('contact.form.errors.messageRequired')
      }
      break
    case 'privacy':
      if (!value) {
        errors.value[fieldName] = t('contact.form.errors.privacyRequired')
      }
      break
  }
}

const clearError = (fieldName) => {
  if (errors.value[fieldName]) {
    delete errors.value[fieldName]
  }
}

const submitForm = async () => {
  // Validate all fields
  Object.keys(form.value).forEach(field => {
    validateField(field)
  })

  if (!isFormValid.value) {
    formMessage.value = {
      type: 'error',
      text: 'Bitte füllen Sie alle Pflichtfelder korrekt aus.'
    }
    return
  }

  isSubmitting.value = true
  formMessage.value = null

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Show success message
    formMessage.value = {
      type: 'success',
      text: t('contact.form.success')
    }

    // Reset form
    Object.keys(form.value).forEach(key => {
      if (key === 'privacy') {
        form.value[key] = false
      } else {
        form.value[key] = ''
      }
    })
    errors.value = {}

    // Hide message after 8 seconds
    setTimeout(() => {
      formMessage.value = null
    }, 8000)

  } catch (error) {
    formMessage.value = {
      type: 'error',
      text: t('contact.form.error')
    }
  } finally {
    isSubmitting.value = false
  }
}

// Animations
const initAnimations = () => {
  if (!$animationUtils) return

  $animationUtils.slideInFromLeft('.contact-info', {
    duration: 1,
    scrollTrigger: {
      trigger: '.contact-info',
      start: 'top 80%'
    }
  })

  $animationUtils.slideInFromRight('.contact-form', {
    duration: 1,
    scrollTrigger: {
      trigger: '.contact-form',
      start: 'top 80%'
    }
  })

  // Stagger contact items
  $animationUtils.fadeIn('.contact-item', {
    duration: 0.8,
    stagger: 0.2,
    y: 20,
    scrollTrigger: {
      trigger: '.contact-info',
      start: 'top 80%'
    }
  })

  // Animate social links
  $animationUtils.scaleIn('.social-links a', {
    duration: 0.6,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.social-links',
      start: 'top 85%'
    }
  })
}

onMounted(() => {
  nextTick(() => {
    setTimeout(initAnimations, 100)
  })
})
</script>

<style scoped>
.message-enter-active,
.message-leave-active {
  transition: all 0.3s ease;
}

.message-enter-from,
.message-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Form field focus states */
.form-group input:focus,
.form-group textarea:focus {
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
}

/* Error state styling */
.border-red-500:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

/* Contact item animations */
.contact-item {
  transform: translateX(-20px);
  opacity: 0;
}

/* Performance optimizations */
.contact-form,
.contact-info {
  contain: layout style paint;
}

/* Responsive improvements */
@media (max-width: 768px) {
  .contact-info,
  .contact-form {
    margin-bottom: 2rem;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .contact-item {
    transform: none;
    opacity: 1;
  }
}
</style>