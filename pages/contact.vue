<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-32 bg-slate-900 text-white">
      <div class="absolute inset-0">
        <img
            src="/images/frankfurt-skyline.jpg"
            alt="GRAVON Kontakt"
            class="w-full h-full object-cover opacity-30"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40"></div>
      </div>
      <div class="relative container mx-auto px-4 lg:px-8 text-center">
        <h1 class="text-5xl lg:text-6xl font-bold mb-6">{{ $t('contact.title') }}</h1>
        <p class="text-xl max-w-3xl mx-auto">{{ $t('contact.subtitle') }}</p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="section-padding bg-white">
      <div class="container mx-auto">
        <div class="grid lg:grid-cols-3 gap-16">
          <!-- Contact Info -->
          <div class="lg:col-span-1">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">{{ $t('contact.info.title') }}</h2>

            <div class="space-y-8">
              <!-- Address -->
              <div class="flex items-start space-x-4 group">
                <div class="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $t('contact.address.title') }}</h3>
                  <div class="text-gray-600 space-y-1">
                    <p class="font-medium">GRAVON Projektbau GmbH</p>
                    <p>Musterstraße 123</p>
                    <p>60311 Frankfurt am Main</p>
                    <p>Deutschland</p>
                  </div>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start space-x-4 group">
                <div class="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $t('contact.phone.title') }}</h3>
                  <div class="text-gray-600 space-y-1">
                    <p><a href="tel:+4969123456789" class="hover:text-yellow-600 transition-colors">+49 69 123 456 789</a></p>
                    <p class="text-sm">{{ $t('contact.phone.hours') }}</p>
                  </div>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start space-x-4 group">
                <div class="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $t('contact.email.title') }}</h3>
                  <div class="text-gray-600 space-y-1">
                    <p><a href="mailto:info@gravon.de" class="hover:text-yellow-600 transition-colors">info@gravon.de</a></p>
                    <p><a href="mailto:projekt@gravon.de" class="hover:text-yellow-600 transition-colors">projekt@gravon.de</a></p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Map -->
            <div class="mt-12">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ $t('contact.map.title') }}</h3>
              <div class="bg-gray-200 h-64 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 cursor-pointer">
                <div class="text-center">
                  <svg class="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p class="text-gray-600">{{ $t('contact.map.placeholder') }}</p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="mt-12">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ $t('contact.followUs') }}</h3>
              <div class="flex space-x-4">
                <a href="#" class="w-10 h-10 bg-gray-200 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors duration-300 group">
                  <svg class="w-5 h-5 text-gray-600 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 bg-gray-200 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors duration-300 group">
                  <svg class="w-5 h-5 text-gray-600 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 bg-gray-200 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors duration-300 group">
                  <svg class="w-5 h-5 text-gray-600 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">{{ $t('contact.form.title') }}</h2>

            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Name Fields -->
              <div class="grid md:grid-cols-2 gap-6">
                <div class="form-group">
                  <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                    {{ $t('contact.form.firstName') }} *
                  </label>
                  <input
                      type="text"
                      id="firstName"
                      v-model="form.firstName"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      :placeholder="$t('contact.form.firstNamePlaceholder')"
                      :class="{ 'border-red-500': errors.firstName }"
                  />
                  <span v-if="errors.firstName" class="text-red-500 text-sm mt-1">{{ errors.firstName }}</span>
                </div>
                <div class="form-group">
                  <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                    {{ $t('contact.form.lastName') }} *
                  </label>
                  <input
                      type="text"
                      id="lastName"
                      v-model="form.lastName"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      :placeholder="$t('contact.form.lastNamePlaceholder')"
                      :class="{ 'border-red-500': errors.lastName }"
                  />
                  <span v-if="errors.lastName" class="text-red-500 text-sm mt-1">{{ errors.lastName }}</span>
                </div>
              </div>

              <!-- Contact Fields -->
              <div class="grid md:grid-cols-2 gap-6">
                <div class="form-group">
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                    {{ $t('contact.form.email') }} *
                  </label>
                  <input
                      type="email"
                      id="email"
                      v-model="form.email"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      :placeholder="$t('contact.form.emailPlaceholder')"
                      :class="{ 'border-red-500': errors.email }"
                  />
                  <span v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</span>
                </div>
                <div class="form-group">
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                    {{ $t('contact.form.phone') }}
                  </label>
                  <input
                      type="tel"
                      id="phone"
                      v-model="form.phone"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      :placeholder="$t('contact.form.phonePlaceholder')"
                  />
                </div>
              </div>

              <!-- Company & Project Type -->
              <div class="grid md:grid-cols-2 gap-6">
                <div class="form-group">
                  <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
                    {{ $t('contact.form.company') }}
                  </label>
                  <input
                      type="text"
                      id="company"
                      v-model="form.company"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      :placeholder="$t('contact.form.companyPlaceholder')"
                  />
                </div>
                <div class="form-group">
                  <label for="projectType" class="block text-sm font-medium text-gray-700 mb-2">
                    {{ $t('contact.form.projectType') }}
                  </label>
                  <select
                      id="projectType"
                      v-model="form.projectType"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">{{ $t('contact.form.selectProjectType') }}</option>
                    <option value="commercial">{{ $t('contact.form.projectTypes.commercial') }}</option>
                    <option value="residential">{{ $t('contact.form.projectTypes.residential') }}</option>
                    <option value="industrial">{{ $t('contact.form.projectTypes.industrial') }}</option>
                    <option value="infrastructure">{{ $t('contact.form.projectTypes.infrastructure') }}</option>
                  </select>
                </div>
              </div>

              <!-- Subject -->
              <div class="form-group">
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ $t('contact.form.subject') }} *
                </label>
                <input
                    type="text"
                    id="subject"
                    v-model="form.subject"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                    :placeholder="$t('contact.form.subjectPlaceholder')"
                    :class="{ 'border-red-500': errors.subject }"
                />
                <span v-if="errors.subject" class="text-red-500 text-sm mt-1">{{ errors.subject }}</span>
              </div>

              <!-- Message -->
              <div class="form-group">
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ $t('contact.form.message') }} *
                </label>
                <textarea
                    id="message"
                    v-model="form.message"
                    rows="6"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 resize-none"
                    :placeholder="$t('contact.form.messagePlaceholder')"
                    :class="{ 'border-red-500': errors.message }"
                ></textarea>
                <span v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</span>
              </div>

              <!-- Privacy Checkbox -->
              <div class="flex items-start">
                <input
                    type="checkbox"
                    id="privacy"
                    v-model="form.privacy"
                    required
                    class="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded mt-1"
                    :class="{ 'border-red-500': errors.privacy }"
                />
                <label for="privacy" class="ml-3 block text-sm text-gray-700">
                  {{ $t('contact.form.privacy') }} *
                  <NuxtLink :to="localePath('/privacy')" class="text-yellow-600 hover:text-yellow-700 underline">
                    {{ $t('footer.legal.privacy') }}
                  </NuxtLink>
                </label>
              </div>
              <span v-if="errors.privacy" class="text-red-500 text-sm">{{ errors.privacy }}</span>

              <!-- Submit Button -->
              <button
                  type="submit"
                  :disabled="isSubmitting || !isFormValid"
                  class="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-black font-semibold py-4 px-6 rounded-lg transition-all duration-300 uppercase tracking-wide transform hover:scale-105 disabled:hover:scale-100"
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
              <div v-if="formMessage" class="mt-6 p-4 rounded-lg flex items-start space-x-3" :class="formMessage.type === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'">
                <svg v-if="formMessage.type === 'success'" class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <svg v-else class="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p :class="formMessage.type === 'success' ? 'text-green-800' : 'text-red-800'">{{ formMessage.text }}</p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Locations -->
    <section class="section-padding bg-gray-50">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">{{ $t('contact.locations.title') }}</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">{{ $t('contact.locations.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Frankfurt -->
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('contact.locations.frankfurt.title') }}</h3>
            <div class="space-y-2 text-gray-600 mb-6">
              <p class="font-medium">{{ $t('contact.locations.frankfurt.subtitle') }}</p>
              <p>Musterstraße 123</p>
              <p>60311 Frankfurt am Main</p>
              <p>+49 69 123 456 789</p>
            </div>
            <div class="bg-yellow-100 p-4 rounded-lg">
              <p class="text-sm text-gray-700">{{ $t('contact.locations.frankfurt.description') }}</p>
            </div>
          </div>

          <!-- Munich -->
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('contact.locations.munich.title') }}</h3>
            <div class="space-y-2 text-gray-600 mb-6">
              <p class="font-medium">{{ $t('contact.locations.munich.subtitle') }}</p>
              <p>Maximilianstraße 45</p>
              <p>80538 München</p>
              <p>+49 89 987 654 321</p>
            </div>
            <div class="bg-blue-100 p-4 rounded-lg">
              <p class="text-sm text-gray-700">{{ $t('contact.locations.munich.description') }}</p>
            </div>
          </div>

          <!-- Hamburg -->
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ $t('contact.locations.hamburg.title') }}</h3>
            <div class="space-y-2 text-gray-600 mb-6">
              <p class="font-medium">{{ $t('contact.locations.hamburg.subtitle') }}</p>
              <p>Speicherstadt 12</p>
              <p>20457 Hamburg</p>
              <p>+49 40 555 123 456</p>
            </div>
            <div class="bg-green-100 p-4 rounded-lg">
              <p class="text-sm text-gray-700">{{ $t('contact.locations.hamburg.description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { t } = useI18n()
const localePath = useLocalePath()

// SEO
useHead({
  title: t('contact.title') + ' - GRAVON Projektbau',
  meta: [
    {
      name: 'description',
      content: t('contact.meta.description')
    },
    {
      property: 'og:title',
      content: t('contact.title') + ' - GRAVON Projektbau'
    },
    {
      property: 'og:description',
      content: t('contact.meta.description')
    }
  ]
})

// Form state
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
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
      form.value.privacy
})

// Validate individual fields
const validateField = (field, value) => {
  switch (field) {
    case 'firstName':
      return value.length < 2 ? t('contact.form.errors.firstNameRequired') : null
    case 'lastName':
      return value.length < 2 ? t('contact.form.errors.lastNameRequired') : null
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return !emailRegex.test(value) ? t('contact.form.errors.emailInvalid') : null
    case 'subject':
      return value.length < 5 ? t('contact.form.errors.subjectRequired') : null
    case 'message':
      return value.length < 10 ? t('contact.form.errors.messageRequired') : null
    case 'privacy':
      return !value ? t('contact.form.errors.privacyRequired') : null
    default:
      return null
  }
}

// Watch form fields for validation
watch(() => form.value, (newForm) => {
  Object.keys(newForm).forEach(field => {
    const error = validateField(field, newForm[field])
    if (error) {
      errors.value[field] = error
    } else {
      delete errors.value[field]
    }
  })
}, { deep: true })

// Submit form
const submitForm = async () => {
  if (!isFormValid.value) return

  isSubmitting.value = true
  formMessage.value = null
  errors.value = {}

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
onMounted(() => {
  gsap.from('.form-group', {
    scrollTrigger: {
      trigger: '.form-group',
      start: 'top 80%'
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.1,
    ease: 'power3.out'
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

/* Input focus styles */
input:focus,
textarea:focus,
select:focus {
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
}

/* Form validation styles */
.border-red-500 {
  border-color: #ef4444;
}

.border-red-500:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}
</style>