<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <!-- Name & Email Row -->
    <div class="grid md:grid-cols-2 gap-6">
      <FormField
          v-model="form.name"
          :label="$t('contact.form.name')"
          :placeholder="$t('contact.form.namePlaceholder')"
          required
          :error="errors.name"
          prefix-icon="user"
      />
      <FormField
          v-model="form.email"
          type="email"
          :label="$t('contact.form.email')"
          :placeholder="$t('contact.form.emailPlaceholder')"
          required
          :error="errors.email"
          prefix-icon="mail"
      />
    </div>

    <!-- Phone & Company Row -->
    <div class="grid md:grid-cols-2 gap-6">
      <FormField
          v-model="form.phone"
          type="tel"
          :label="$t('contact.form.phone')"
          :placeholder="$t('contact.form.phonePlaceholder')"
          prefix-icon="phone"
      />
      <FormField
          v-model="form.company"
          :label="$t('contact.form.company')"
          :placeholder="$t('contact.form.companyPlaceholder')"
          prefix-icon="building"
      />
    </div>

    <!-- Project Type Select -->
    <FormField
        v-model="form.projectType"
        type="select"
        :label="$t('contact.form.projectType')"
        :placeholder="$t('contact.form.selectProjectType')"
        :options="projectTypeOptions"
    />

    <!-- Subject -->
    <FormField
        v-model="form.subject"
        :label="$t('contact.form.subject')"
        :placeholder="$t('contact.form.subjectPlaceholder')"
        required
        :error="errors.subject"
    />

    <!-- Message -->
    <FormField
        v-model="form.message"
        type="textarea"
        :label="$t('contact.form.message')"
        :placeholder="$t('contact.form.messagePlaceholder')"
        :rows="6"
        required
        :error="errors.message"
    />

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
        <NuxtLinkLocale :to="{path: '/privacy'}" class="text-yellow-600 hover:text-yellow-700">
          {{ $t('contact.form.privacyLink') }}
        </NuxtLinkLocale>
      </label>
    </div>

    <!-- Submit Button -->
    <AppButton
        type="submit"
        variant="primary"
        size="large"
        :loading="isSubmitting"
        :disabled="!isFormValid"
        class="w-full"
    >
      {{ $t('contact.form.submit') }}
      <template #suffix>
        <Icon name="arrow-right" class="w-5 h-5" />
      </template>
    </AppButton>
  </form>
</template>

<script setup>
import FormField from "~/components/ui/form/FormField.vue";
import AppButton from "~/components/ui/AppButton.vue";
import Icon from "~/components/ui/Icon.vue";

const emit = defineEmits(['submit'])
const { t } = useI18n()
const localePath = useLocalePath()

// Form Data - using reactive instead of individual refs
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

// Project Type Options for Select
const projectTypeOptions = computed(() => [
  { value: 'commercial', label: t('contact.form.projectTypes.commercial') },
  { value: 'residential', label: t('contact.form.projectTypes.residential') },
  { value: 'industrial', label: t('contact.form.projectTypes.industrial') },
  { value: 'infrastructure', label: t('contact.form.projectTypes.infrastructure') }
])

// Rest of the component logic stays the same...
const isFormValid = computed(() => {
  return form.name && form.email && form.subject && form.message && form.privacy
})

const validateForm = () => {
  // Reset errors
  Object.keys(errors).forEach(key => errors[key] = '')

  let isValid = true

  if (!form.name.trim()) {
    errors.name = t('contact.form.errors.nameRequired')
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = t('contact.form.errors.emailRequired')
    isValid = false
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = t('contact.form.errors.emailInvalid')
    isValid = false
  }

  if (!form.subject.trim()) {
    errors.subject = t('contact.form.errors.subjectRequired')
    isValid = false
  }

  if (!form.message.trim()) {
    errors.message = t('contact.form.errors.messageRequired')
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isSubmitting.value = true

  try {
    await new Promise(resolve => setTimeout(resolve, 1000))

    emit('submit', { ...form })

    // Reset form
    Object.keys(form).forEach(key => {
      form[key] = key === 'privacy' ? false : ''
    })

  } catch (error) {
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>