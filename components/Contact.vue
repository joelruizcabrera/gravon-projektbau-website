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
            <div class="contact-item group">
              <div class="flex items-start space-x-4">
                <div class="icon-container flex-shrink-0">
                  <div class="icon-wrapper w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                </div>
                <div class="contact-content flex-1 min-w-0">
                  <h3 class="text-xl font-semibold mb-3 text-white">{{ $t('contact.address.title') }}</h3>
                  <div class="text-gray-300 space-y-1 leading-relaxed">
                    <p class="font-medium text-gray-200">GRAVON Projektbau GmbH</p>
                    <p>Musterstraße 123</p>
                    <p>60311 Frankfurt am Main</p>
                    <p>Deutschland</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Phone -->
            <div class="contact-item group">
              <div class="flex items-start space-x-4">
                <div class="icon-container flex-shrink-0">
                  <div class="icon-wrapper w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                </div>
                <div class="contact-content flex-1 min-w-0">
                  <h3 class="text-xl font-semibold mb-3 text-white">{{ $t('contact.phone.title') }}</h3>
                  <div class="text-gray-300 space-y-1">
                    <p>
                      <a
                          href="tel:+4969123456789"
                          class="hover:text-yellow-400 transition-colors duration-300 font-medium"
                      >
                        +49 69 123 456 789
                      </a>
                    </p>
                    <p class="text-sm text-gray-400">{{ $t('contact.phone.hours') }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Email -->
            <div class="contact-item group">
              <div class="flex items-start space-x-4">
                <div class="icon-container flex-shrink-0">
                  <div class="icon-wrapper w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                </div>
                <div class="contact-content flex-1 min-w-0">
                  <h3 class="text-xl font-semibold mb-3 text-white">{{ $t('contact.email.title') }}</h3>
                  <div class="text-gray-300 space-y-2">
                    <p>
                      <a
                          href="mailto:info@gravon.de"
                          class="hover:text-yellow-400 transition-colors duration-300 font-medium break-all"
                      >
                        info@gravon.de
                      </a>
                    </p>
                    <p>
                      <a
                          href="mailto:projekt@gravon.de"
                          class="hover:text-yellow-400 transition-colors duration-300 font-medium break-all"
                      >
                        projekt@gravon.de
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="mt-12 pt-8 border-t border-gray-700">
            <h3 class="text-lg font-semibold mb-6 text-white">{{ $t('contact.followUs') }}</h3>
            <div class="flex space-x-4 social-links">
              <a
                  href="https://www.linkedin.com/company/gravon-projektbau"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all duration-300 group"
                  aria-label="LinkedIn"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                  href="https://www.xing.com/companies/gravonprojektbau"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all duration-300 group"
                  aria-label="XING"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.284.52 4.56 8.668 4.56 8.668.214.364.52.715 1.076.715h3.716c.264 0 .451-.523.451-.523L14.4 14.489c.256-.44 7.705-13.556 7.705-13.556.264-.464-.074-.933-.463-.933h-3.454zM9.731 11.788c-.198.342-3.613 6.132-3.613 6.132-.187.334-.411.675-.927.675H1.5c-.264 0-.411-.411-.411-.411s3.929-6.132 4.060-6.415c-.043-.73-2.611-4.675-2.652-4.773-.264-.464.053-.933.454-.933H6.64c.517 0.74.324.927.659 0 0 1.906 3.428 2.597 4.591.264.464-.053.933-.454.933H9.731z"/>
                </svg>
              </a>
              <a
                  href="https://www.facebook.com/gravonprojektbau"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all duration-300 group"
                  aria-label="Facebook"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form">
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50">
            <h3 class="text-2xl font-bold mb-8 text-white">{{ $t('contact.form.title') }}</h3>

            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Name Fields -->
              <div class="grid md:grid-cols-2 gap-6">
                <div class="form-group">
                  <label for="firstName" class="block text-sm font-medium mb-2 text-gray-200">
                    {{ $t('contact.form.firstName') }} *
                  </label>
                  <input
                      type="text"
                      id="firstName"
                      v-model="form.firstName"
                      required
                      class="form-input w-full px-4 py-3 bg-gray-700/70 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      :placeholder="$t('contact.form.firstNamePlaceholder')"
                      :class="{ 'border-red-500 bg-red-900/20': errors.firstName }"
                      @blur="validateField('firstName')"
                      @input="clearError('firstName')"
                  />
                  <span v-if="errors.firstName" class="text-red-400 text-sm mt-1 block">{{ errors.firstName }}</span>
                </div>

                <div class="form-group">
                  <label for="lastName" class="block text-sm font-medium mb-2 text-gray-200">
                    {{ $t('contact.form.lastName') }} *
                  </label>
                  <input
                      type="text"
                      id="lastName"
                      v-model="form.lastName"
                      required
                      class="form-input w-full px-4 py-3 bg-gray-700/70 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
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
                  <label for="email" class="block text-sm font-medium mb-2 text-gray-200">
                    {{ $t('contact.form.email') }} *
                  </label>
                  <input
                      type="email"
                      id="email"
                      v-model="form.email"
                      required
                      class="form-input w-full px-4 py-3 bg-gray-700/70 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      :placeholder="$t('contact.form.emailPlaceholder')"
                      :class="{ 'border-red-500 bg-red-900/20': errors.email }"
                      @blur="validateField('email')"
                      @input="clearError('email')"
                  />
                  <span v-if="errors.email" class="text-red-400 text-sm mt-1 block">{{ errors.email }}</span>
                </div>

                <div class="form-group">
                  <label for="phone" class="block text-sm font-medium mb-2 text-gray-200">
                    {{ $t('contact.form.phone') }}
                  </label>
                  <input
                      type="tel"
                      id="phone"
                      v-model="form.phone"
                      class="form-input w-full px-4 py-3 bg-gray-700/70 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      :placeholder="$t('contact.form.phonePlaceholder')"
                  />
                </div>
              </div>

              <!-- Subject -->
              <div class="form-group">
                <label for="subject" class="block text-sm font-medium mb-2 text-gray-200">
                  {{ $t('contact.form.subject') }} *
                </label>
                <input
                    type="text"
                    id="subject"
                    v-model="form.subject"
                    required
                    class="form-input w-full px-4 py-3 bg-gray-700/70 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    :placeholder="$t('contact.form.subjectPlaceholder')"
                    :class="{ 'border-red-500 bg-red-900/20': errors.subject }"
                    @blur="validateField('subject')"
                    @input="clearError('subject')"
                />
                <span v-if="errors.subject" class="text-red-400 text-sm mt-1 block">{{ errors.subject }}</span>
              </div>

              <!-- Message -->
              <div class="form-group">
                <label for="message" class="block text-sm font-medium mb-2 text-gray-200">
                  {{ $t('contact.form.message') }} *
                </label>
                <textarea
                    id="message"
                    v-model="form.message"
                    required
                    rows="5"
                    class="form-input w-full px-4 py-3 bg-gray-700/70 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-vertical"
                    :placeholder="$t('contact.form.messagePlaceholder')"
                    :class="{ 'border-red-500 bg-red-900/20': errors.message }"
                    @blur="validateField('message')"
                    @input="clearError('message')"
                ></textarea>
                <span v-if="errors.message" class="text-red-400 text-sm mt-1 block">{{ errors.message }}</span>
              </div>

              <!-- Privacy Checkbox -->
              <div class="form-group">
                <label class="flex items-start space-x-3 cursor-pointer">
                  <input
                      type="checkbox"
                      v-model="form.privacy"
                      required
                      class="mt-1 w-4 h-4 text-yellow-500 bg-gray-700 border-gray-600 rounded focus:ring-yellow-500 focus:ring-2"
                      :class="{ 'border-red-500': errors.privacy }"
                      @change="clearError('privacy')"
                  />
                  <span class="text-sm text-gray-300 leading-5">
                    {{ $t('contact.form.privacy') }}
                    <NuxtLink
                        :to="localePath('/privacy')"
                        class="text-yellow-400 hover:text-yellow-300 underline"
                    >
                      {{ $t('footer.privacy') }}
                    </NuxtLink> *
                  </span>
                </label>
                <span v-if="errors.privacy" class="text-red-400 text-sm mt-1 block">{{ errors.privacy }}</span>
              </div>

              <!-- Submit Button -->
              <div class="form-group pt-4">
                <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="w-full bg-yellow-500 text-black font-semibold py-4 px-6 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-500/50 transition-all duration-300 uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="!isSubmitting" class="flex items-center justify-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                    {{ $t('contact.form.send') }}
                  </span>
                  <span v-else class="flex items-center justify-center">
                    <svg class="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {{ $t('contact.form.sending') }}
                  </span>
                </button>
              </div>

              <!-- Success/Error Messages -->
              <div v-if="submitStatus === 'success'" class="success-message p-4 bg-green-900/50 border border-green-500/50 rounded-lg">
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-green-300">{{ $t('contact.form.success') }}</span>
                </div>
              </div>

              <div v-if="submitStatus === 'error'" class="error-message p-4 bg-red-900/50 border border-red-500/50 rounded-lg">
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-red-300">{{ $t('contact.form.error') }}</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()

// Form data
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  privacy: false
})

// Form state
const errors = reactive({})
const isSubmitting = ref(false)
const submitStatus = ref('')

// Validation
const validateField = (field) => {
  switch (field) {
    case 'firstName':
      if (!form.firstName.trim()) {
        errors.firstName = t('contact.form.errors.firstNameRequired')
      }
      break
    case 'lastName':
      if (!form.lastName.trim()) {
        errors.lastName = t('contact.form.errors.lastNameRequired')
      }
      break
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!form.email.trim() || !emailRegex.test(form.email)) {
        errors.email = t('contact.form.errors.emailInvalid')
      }
      break
    case 'subject':
      if (!form.subject.trim()) {
        errors.subject = t('contact.form.errors.subjectRequired')
      }
      break
    case 'message':
      if (!form.message.trim()) {
        errors.message = t('contact.form.errors.messageRequired')
      }
      break
    case 'privacy':
      if (!form.privacy) {
        errors.privacy = t('contact.form.errors.privacyRequired')
      }
      break
  }
}

const clearError = (field) => {
  if (errors[field]) {
    delete errors[field]
  }
}

const validateForm = () => {
  Object.keys(errors).forEach(key => delete errors[key])

  validateField('firstName')
  validateField('lastName')
  validateField('email')
  validateField('subject')
  validateField('message')
  validateField('privacy')

  return Object.keys(errors).length === 0
}

// Form submission
const submitForm = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true
  submitStatus.value = ''

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Reset form
    Object.keys(form).forEach(key => {
      if (typeof form[key] === 'boolean') {
        form[key] = false
      } else {
        form[key] = ''
      }
    })

    submitStatus.value = 'success'

    // Track form submission
    if (process.client && window.gtag) {
      window.gtag('event', 'contact_form_submit', {
        event_category: 'engagement',
        event_label: 'contact_form',
        value: 1
      })
    }
  } catch (error) {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false

    // Clear status after 5 seconds
    setTimeout(() => {
      submitStatus.value = ''
    }, 5000)
  }
}
</script>

<style scoped>
/* Enhanced icon styling */
.icon-container {
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-height: 48px;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 1rem;
  background-color: #f59e0b;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.icon-wrapper svg {
  width: 24px;
  height: 24px;
  color: #000;
  flex-shrink: 0;
}

/* Contact item styling */
.contact-item {
  position: relative;
  padding: 0.5rem 0;
}

.contact-content {
  flex: 1;
  min-width: 0;
  overflow: hidden;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .contact-item {
    margin-bottom: 2rem;
  }

  .icon-wrapper {
    width: 40px;
    height: 40px;
  }

  .icon-wrapper svg {
    width: 20px;
    height: 20px;
  }
}

/* Form styling enhancements */
.form-input {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.form-input:focus {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.15);
}

/* Social links styling */
.social-link {
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s;
}

.social-link:hover::before {
  left: 100%;
}

/* Animation classes */
.contact-info {
  animation: slideInLeft 0.8s ease-out;
}

.contact-form {
  animation: slideInRight 0.8s ease-out 0.2s both;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .contact-info,
  .contact-form {
    animation: none;
  }

  .icon-wrapper {
    transition: none;
  }

  .group:hover .icon-wrapper {
    transform: none;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .icon-wrapper {
    border: 2px solid #fff;
  }

  .form-input {
    border-width: 2px;
  }
}
</style>