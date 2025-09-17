<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-32 bg-slate-900 text-white">
      <div class="container mx-auto px-4 lg:px-8 text-center">
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
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $t('contact.address.title') }}</h3>
                  <div class="text-gray-600">
                    <p>GRAVON Projektbau GmbH</p>
                    <p>Musterstraße 123</p>
                    <p>60311 Frankfurt am Main</p>
                    <p>Deutschland</p>
                  </div>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $t('contact.phone.title') }}</h3>
                  <div class="text-gray-600">
                    <p>+49 69 123 456 789</p>
                    <p>Mo-Fr: 8:00 - 18:00 Uhr</p>
                  </div>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ $t('contact.email.title') }}</h3>
                  <div class="text-gray-600">
                    <p>info@gravon.de</p>
                    <p>projekt@gravon.de</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Map -->
            <div class="mt-12">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ $t('contact.map.title') }}</h3>
              <div class="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <p class="text-gray-600">{{ $t('contact.map.placeholder') }}</p>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">{{ $t('contact.form.title') }}</h2>

            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                    {{ $t('contact.form.firstName') }} *
                  </label>
                  <input
                      type="text"
                      id="firstName"
                      v-model="form.firstName"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                    {{ $t('contact.form.lastName') }} *
                  </label>
                  <input
                      type="text"
                      id="lastName"
                      v-model="form.lastName"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                    {{ $t('contact.form.email') }} *
                  </label>
                  <input
                      type="email"
                      id="email"
                      v-model="form.email"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                    {{ $t('contact.form.phone') }}
                  </label>
                  <input
                      type="tel"
                      id="phone"
                      v-model="form.phone"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ $t('contact.form.company') }}
                </label>
                <input
                    type="text"
                    id="company"
                    v-model="form.company"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <div>
                <label for="projectType" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ $t('contact.form.projectType') }}
                </label>
                <select
                    id="projectType"
                    v-model="form.projectType"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="">{{ $t('contact.form.selectProjectType') }}</option>
                  <option value="commercial">{{ $t('contact.form.projectTypes.commercial') }}</option>
                  <option value="residential">{{ $t('contact.form.projectTypes.residential') }}</option>
                  <option value="industrial">{{ $t('contact.form.projectTypes.industrial') }}</option>
                  <option value="infrastructure">{{ $t('contact.form.projectTypes.infrastructure') }}</option>
                </select>
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ $t('contact.form.subject') }} *
                </label>
                <input
                    type="text"
                    id="subject"
                    v-model="form.subject"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ $t('contact.form.message') }} *
                </label>
                <textarea
                    id="message"
                    v-model="form.message"
                    rows="6"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                ></textarea>
              </div>

              <div class="flex items-center">
                <input
                    type="checkbox"
                    id="privacy"
                    v-model="form.privacy"
                    required
                    class="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded"
                />
                <label for="privacy" class="ml-2 block text-sm text-gray-700">
                  {{ $t('contact.form.privacy') }} *
                </label>
              </div>

              <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ isSubmitting ? $t('contact.form.sending') : $t('contact.form.send') }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { t } = useI18n()

useHead({
  title: t('contact.title') + ' - GRAVON Projektbau',
  meta: [
    {
      name: 'description',
      content: t('contact.meta.description')
    }
  ]
})

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

const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true

  try {
    // Hier würde die Formularübermittlung stattfinden
    // z.B. über eine API oder E-Mail-Service
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Success handling
    alert(t('contact.form.success'))

    // Reset form
    Object.keys(form.value).forEach(key => {
      if (key === 'privacy') {
        form.value[key] = false
      } else {
        form.value[key] = ''
      }
    })
  } catch (error) {
    alert(t('contact.form.error'))
  } finally {
    isSubmitting.value = false
  }
}
</script>