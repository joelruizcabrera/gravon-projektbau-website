<template>
  <div>
    <!-- Hero Section -->
    <section class="py-24 bg-slate-900 text-white">
      <div class="container mx-auto px-4 lg:px-8">
        <h1 class="text-4xl lg:text-5xl font-bold mb-6">{{ $t('privacy.title') }}</h1>
        <p class="text-xl text-gray-300 max-w-3xl">{{ $t('privacy.subtitle') }}</p>
      </div>
    </section>

    <!-- Privacy Content -->
    <section class="section-padding bg-white">
      <div class="container mx-auto max-w-4xl">
        <div class="prose prose-lg max-w-none">
          <!-- Einleitung -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('privacy.intro.title') }}</h2>
            <p class="text-gray-600 mb-4">{{ $t('privacy.intro.content1') }}</p>
            <p class="text-gray-600">{{ $t('privacy.intro.content2') }}</p>
          </div>

          <!-- Verantwortlicher -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('privacy.responsible.title') }}</h2>
            <div class="bg-gray-50 p-6 rounded-lg">
              <p class="font-semibold text-gray-900 mb-2">GRAVON Projektbau GmbH</p>
              <p class="text-gray-600 mb-1">Musterstraße 123</p>
              <p class="text-gray-600 mb-1">60311 Frankfurt am Main</p>
              <p class="text-gray-600 mb-1">Deutschland</p>
              <p class="text-gray-600 mb-1">{{ $t('contact.phone.title') }}: +49 69 123 456 789</p>
              <p class="text-gray-600">{{ $t('contact.email.title') }}: info@gravon-projektbau.de</p>
            </div>
          </div>

          <!-- Datenerfassung -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('privacy.collection.title') }}</h2>

            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ $t('privacy.collection.website.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ $t('privacy.collection.website.content') }}</p>

            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ $t('privacy.collection.contact.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ $t('privacy.collection.contact.content') }}</p>

            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ $t('privacy.collection.cookies.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ $t('privacy.collection.cookies.content') }}</p>
          </div>

          <!-- Verwendung der Daten -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('privacy.usage.title') }}</h2>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>{{ $t('privacy.usage.purpose1') }}</li>
              <li>{{ $t('privacy.usage.purpose2') }}</li>
              <li>{{ $t('privacy.usage.purpose3') }}</li>
              <li>{{ $t('privacy.usage.purpose4') }}</li>
            </ul>
          </div>

          <!-- Ihre Rechte -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('privacy.rights.title') }}</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-gray-50 p-6 rounded-lg">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ $t('privacy.rights.access.title') }}</h3>
                <p class="text-gray-600 text-sm">{{ $t('privacy.rights.access.content') }}</p>
              </div>
              <div class="bg-gray-50 p-6 rounded-lg">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ $t('privacy.rights.correction.title') }}</h3>
                <p class="text-gray-600 text-sm">{{ $t('privacy.rights.correction.content') }}</p>
              </div>
              <div class="bg-gray-50 p-6 rounded-lg">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ $t('privacy.rights.deletion.title') }}</h3>
                <p class="text-gray-600 text-sm">{{ $t('privacy.rights.deletion.content') }}</p>
              </div>
              <div class="bg-gray-50 p-6 rounded-lg">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ $t('privacy.rights.objection.title') }}</h3>
                <p class="text-gray-600 text-sm">{{ $t('privacy.rights.objection.content') }}</p>
              </div>
            </div>
          </div>

          <!-- Kontakt -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('privacy.contact.title') }}</h2>
            <p class="text-gray-600 mb-4">{{ $t('privacy.contact.content') }}</p>
            <div class="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <p class="text-gray-900 font-semibold mb-2">{{ $t('privacy.contact.dpo') }}</p>
              <p class="text-gray-600">{{ $t('contact.email.title') }}: datenschutz@gravon-projektbau.de</p>
              <p class="text-gray-600">{{ $t('contact.phone.title') }}: +49 69 123 456 789</p>
            </div>
          </div>

          <!-- Letzte Aktualisierung -->
          <div class="text-center pt-8 border-t border-gray-200">
            <p class="text-gray-500 text-sm">{{ $t('privacy.lastUpdated') }}: {{ formatDate(new Date()) }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { t } = useI18n()

useHead({
  title: t('privacy.title') + ' - GRAVON Projektbau',
  meta: [
    {
      name: 'description',
      content: t('privacy.meta.description')
    },
    {
      name: 'robots',
      content: 'noindex, nofollow'
    }
  ]
})

const formatDate = (date) => {
  return new Intl.DateTimeFormat('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}
</script>