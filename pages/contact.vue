<template>
  <div>
    <!-- Page Hero -->
    <PageHero
        :title="$t('contact.title')"
        :subtitle="$t('contact.subtitle')"
        background-image="/images/frankfurt-skyline.jpg"
        height="medium"
        :show-breadcrumbs="true"
    />

    <!-- Contact Content -->
    <SectionContainer padding="large">
      <div class="grid lg:grid-cols-3 gap-16">
        <!-- Contact Info -->
        <div class="lg:col-span-1 gsap-slide-left">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">
            {{ $t('contact.info.title') }}
          </h2>

          <div class="space-y-8">
            <!-- Address -->
            <ContactInfoCard
                icon="map-pin"
                :title="$t('contact.address.title')"
                :details="addressDetails"
            />

            <!-- Phone -->
            <ContactInfoCard
                icon="phone"
                :title="$t('contact.phone.title')"
                :details="phoneDetails"
                :action="{
                text: $t('contact.phone.call'),
                handler: handlePhoneCall
              }"
            />

            <!-- Email -->
            <ContactInfoCard
                icon="mail"
                :title="$t('contact.email.title')"
                :details="emailDetails"
                :action="{
                text: $t('contact.email.send'),
                handler: handleEmailClick
              }"
            />
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-2 gsap-slide-right">
          <!-- Verwende ein einfaches div statt UniversalCard -->
          <div class="bg-gray-50 p-8 rounded-2xl border border-gray-200">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">
              {{ $t('contact.form.title') }}
            </h2>

            <!-- Inline Contact Form -->
            <form @submit.prevent="handleFormSubmit" class="space-y-6">
              <!-- Name & Email Row -->
              <div class="grid md:grid-cols-2 gap-6">
                <div class="form-group">
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                    {{ $t('contact.form.name') }} *
                  </label>
                  <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      :placeholder="$t('contact.form.namePlaceholder')"
                      :class="{ 'border-red-500': errors.name }"
                  />
                  <span v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</span>
                </div>

                <div class="form-group">
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                    {{ $t('contact.form.email') }} *
                  </label>
                  <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      :placeholder="$t('contact.form.emailPlaceholder')"
                      :class="{ 'border-red-500': errors.email }"
                  />
                  <span v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</span>
                </div>
              </div>

              <!-- Phone & Company Row -->
              <div class="grid md:grid-cols-2 gap-6">
                <div class="form-group">
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                    {{ $t('contact.form.phone') }}
                  </label>
                  <input
                      id="phone"
                      v-model="form.phone"
                      type="tel"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      :placeholder="$t('contact.form.phonePlaceholder')"
                  />
                </div>

                <div class="form-group">
                  <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
                    {{ $t('contact.form.company') }}
                  </label>
                  <input
                      id="company"
                      v-model="form.company"
                      type="text"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                      :placeholder="$t('contact.form.companyPlaceholder')"
                  />
                </div>
              </div>

              <!-- Project Type -->
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

              <!-- Subject -->
              <div class="form-group">
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ $t('contact.form.subject') }} *
                </label>
                <input
                    id="subject"
                    v-model="form.subject"
                    type="text"
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
              <div class="flex items-start space-x-3">
                <input
                    id="privacy"
                    v-model="form.privacy"
                    type="checkbox"
                    required
                    class="mt-1 w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
                />
                <label for="privacy" class="text-sm text-gray-600">
                  {{ $t('contact.form.privacy') }}
                  <NuxtLink :to="localePath('/privacy')" class="text-yellow-600 hover:text-yellow-700">
                    {{ $t('contact.form.privacyLink') }}
                  </NuxtLink>
                </label>
              </div>

              <!-- Submit Button -->
              <button
                  type="submit"
                  :disabled="!isFormValid || isSubmitting"
                  class="w-full bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <span v-if="!isSubmitting">{{ $t('contact.form.submit') }}</span>
                <span v-else class="flex items-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ $t('contact.form.sending') }}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </SectionContainer>
  </div>
</template>

<script setup>
import SectionContainer from "~/components/ui/SectionContainer.vue";
import ContactInfoCard from "~/components/ui/ContactInfoCard.vue";

const { t } = useI18n()
const localePath = useLocalePath()

// Form Data
const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  subject: '',
  message: '',
  privacy: false
})

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

// Contact Info Data
const addressDetails = [
  'GRAVON Projektbau GmbH',
  'Musterstraße 123',
  '60311 Frankfurt am Main',
  'Deutschland'
]

const phoneDetails = ['+49 69 123 456 789']
const emailDetails = ['info@gravon.de']

// Computed
const isFormValid = computed(() => {
  return form.name && form.email && form.subject && form.message && form.privacy
})

// Methods
const handlePhoneCall = () => {
  window.location.href = 'tel:+4969123456789'
}

const handleEmailClick = () => {
  window.location.href = 'mailto:info@gravon.de'
}

const validateForm = () => {
  // Reset errors
  Object.keys(errors).forEach(key => errors[key] = '')

  let isValid = true

  if (!form.name.trim()) {
    errors.name = 'Name ist erforderlich'
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = 'E-Mail ist erforderlich'
    isValid = false
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = 'Ungültige E-Mail-Adresse'
    isValid = false
  }

  if (!form.subject.trim()) {
    errors.subject = 'Betreff ist erforderlich'
    isValid = false
  }

  if (!form.message.trim()) {
    errors.message = 'Nachricht ist erforderlich'
    isValid = false
  }

  return isValid
}

const handleFormSubmit = async () => {
  if (!validateForm()) return

  isSubmitting.value = true

  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Show success message
    alert('Vielen Dank für Ihre Nachricht! Wir werden uns zeitnah bei Ihnen melden.')

    // Reset form
    Object.keys(form).forEach(key => {
      form[key] = key === 'privacy' ? false : ''
    })

  } catch (error) {
    console.error('Form submission error:', error)
    alert('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.')
  } finally {
    isSubmitting.value = false
  }
}

// SEO
useHead({
  title: t('contact.title') + ' - GRAVON Projektbau',
  meta: [
    {
      name: 'description',
      content: t('contact.meta.description')
    }
  ]
})
</script>