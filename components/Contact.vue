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
            <div class="flex items-start space-x-4 group">
              <div class="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">{{ $t('contact.email.title') }}</h3>
                <div class="text-gray-300">
                  <p>info@gravon.de</p>
                  <p>projekt@gravon.de</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="mt-12">
            <h3 class="text-lg font-semibold mb-4">{{ $t('contact.followUs') }}</h3>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors duration-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors duration-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors duration-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="contact-form">
          <div class="bg-gray-800 p-8 rounded-2xl">
            <h3 class="text-2xl font-bold mb-6">{{ $t('contact.form.title') }}</h3>

            <form @submit.prevent="submitForm" class="space-y-6">
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
                  />
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
                  />
                </div>
              </div>

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
                />
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
                />
              </div>

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
                ></textarea>
              </div>

              <div class="flex items-center">
                <input
                    type="checkbox"
                    id="privacy"
                    v-model="form.privacy"
                    required
                    class="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-600 rounded bg-gray-700"
                />
                <label for="privacy" class="ml-3 block text-sm text-gray-300">
                  {{ $t('contact.form.privacy') }} *
                </label>
              </div>

              <button
                  type="submit"
                  :disabled="isSubmitting || !isFormValid"
                  class="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-semibold py-4 px-6 rounded-lg transition-all duration-300 uppercase tracking-wide transform hover:scale-105 disabled:hover:scale-100"
              >
                <span v-if="!isSubmitting">{{ $t('contact.form.send') }}</span>
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
              <div v-if="formMessage" class="mt-6 p-4 rounded-lg" :class="formMessage.type === 'success' ? 'bg-green-600' : 'bg-red-600'">
                <p class="text-white">{{ formMessage.text }}</p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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

const isSubmitting = ref(false)
const formMessage = ref(null)

const isFormValid = computed(() => {
  return form.value.firstName &&
      form.value.lastName &&
      form.value.email &&
      form.value.subject &&
      form.value.message &&
      form.value.privacy
})

const submitForm = async () => {
  if (!isFormValid.value) return

  isSubmitting.value = true
  formMessage.value = null

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

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

    // Hide message after 5 seconds
    setTimeout(() => {
      formMessage.value = null
    }, 5000)

  } catch (error) {
    formMessage.value = {
      type: 'error',
      text: t('contact.form.error')
    }
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  gsap.from('.contact-info', {
    scrollTrigger: {
      trigger: '.contact-info',
      start: 'top 80%'
    },
    duration: 1,
    x: -50,
    opacity: 0,
    ease: 'power3.out'
  })

  gsap.from('.contact-form', {
    scrollTrigger: {
      trigger: '.contact-form',
      start: 'top 80%'
    },
    duration: 1,
    x: 50,
    opacity: 0,
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
</style>