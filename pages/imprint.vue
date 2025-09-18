<template>
  <div>
    <!-- Hero Section -->
    <section class="py-24 bg-slate-900 text-white">
      <div class="container mx-auto px-4 lg:px-8">
        <h1 class="text-4xl lg:text-5xl font-bold mb-6">{{ $t('imprint.title') }}</h1>
        <p class="text-xl text-gray-300 max-w-3xl">{{ $t('imprint.subtitle') }}</p>
      </div>
    </section>

    <!-- Imprint Content -->
    <section class="section-padding bg-white">
      <div class="container mx-auto max-w-4xl">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Unternehmensangaben -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('imprint.company.title') }}</h2>
            <div class="space-y-4">
              <div>
                <p class="font-semibold text-gray-900 text-xl mb-2">GRAVON Projektbau GmbH</p>
                <div class="text-gray-600 space-y-1">
                  <p>Musterstraße 123</p>
                  <p>60311 Frankfurt am Main</p>
                  <p>Deutschland</p>
                </div>
              </div>

              <div class="pt-4">
                <p class="text-gray-600"><span class="font-medium">{{ $t('contact.phone.title') }}:</span> +49 69 123 456 789</p>
                <p class="text-gray-600"><span class="font-medium">{{ $t('contact.email.title') }}:</span> info@gravon.de</p>
                <p class="text-gray-600"><span class="font-medium">Internet:</span> www.gravon.de</p>
              </div>
            </div>
          </div>

          <!-- Rechtliche Angaben -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('imprint.legal.title') }}</h2>
            <div class="space-y-4 text-gray-600">
              <div>
                <p class="font-medium text-gray-900">{{ $t('imprint.legal.management') }}:</p>
                <p>Dr. Michael Gravon (Geschäftsführer)</p>
              </div>

              <div>
                <p class="font-medium text-gray-900">{{ $t('imprint.legal.register') }}:</p>
                <p>Handelsregister Frankfurt am Main</p>
                <p>HRB 123456</p>
              </div>

              <div>
                <p class="font-medium text-gray-900">{{ $t('imprint.legal.vat') }}:</p>
                <p>DE 123 456 789</p>
              </div>

              <div>
                <p class="font-medium text-gray-900">{{ $t('imprint.legal.chamber') }}:</p>
                <p>Ingenieurkammer Hessen</p>
                <p>Mitgliedsnummer: ING-12345</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Weitere Standorte -->
        <div class="mt-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">{{ $t('imprint.locations.title') }}</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ $t('imprint.locations.munich') }}</h3>
              <div class="text-gray-600 space-y-1">
                <p>Maximilianstraße 45</p>
                <p>80538 München</p>
                <p>{{ $t('contact.phone.title') }}: +49 89 987 654 321</p>
                <p>{{ $t('contact.email.title') }}: muenchen@gravon.de</p>
              </div>
            </div>

            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ $t('imprint.locations.hamburg') }}</h3>
              <div class="text-gray-600 space-y-1">
                <p>Speicherstadt 12</p>
                <p>20457 Hamburg</p>
                <p>{{ $t('contact.phone.title') }}: +49 40 555 123 456</p>
                <p>{{ $t('contact.email.title') }}: hamburg@gravon.de</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Haftungsausschluss -->
        <div class="mt-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('imprint.disclaimer.title') }}</h2>
          <div class="prose prose-lg max-w-none text-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ $t('imprint.disclaimer.content.title') }}</h3>
            <p class="mb-4">{{ $t('imprint.disclaimer.content.text1') }}</p>
            <p class="mb-6">{{ $t('imprint.disclaimer.content.text2') }}</p>

            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ $t('imprint.disclaimer.links.title') }}</h3>
            <p class="mb-4">{{ $t('imprint.disclaimer.links.text1') }}</p>
            <p class="mb-6">{{ $t('imprint.disclaimer.links.text2') }}</p>

            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ $t('imprint.disclaimer.copyright.title') }}</h3>
            <p class="mb-4">{{ $t('imprint.disclaimer.copyright.text1') }}</p>
            <p>{{ $t('imprint.disclaimer.copyright.text2') }}</p>
          </div>
        </div>

        <!-- Streitbeilegung -->
        <div class="mt-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('imprint.dispute.title') }}</h2>
          <div class="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
            <p class="text-gray-600">{{ $t('imprint.dispute.content') }}</p>
          </div>
        </div>

        <!-- Kontakt für rechtliche Fragen -->
        <div class="mt-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('imprint.legalContact.title') }}</h2>
          <div class="bg-gray-50 p-6 rounded-lg">
            <p class="text-gray-600 mb-4">{{ $t('imprint.legalContact.content') }}</p>
            <div class="space-y-1 text-gray-600">
              <p><span class="font-medium">{{ $t('contact.email.title') }}:</span> recht@gravon.de</p>
              <p><span class="font-medium">{{ $t('contact.phone.title') }}:</span> +49 69 123 456 789</p>
            </div>
          </div>
        </div>

        <!-- Letzte Aktualisierung -->
        <div class="text-center pt-8 mt-16 border-t border-gray-200">
          <p class="text-gray-500 text-sm">{{ $t('imprint.lastUpdated') }}: {{ formatDate(new Date()) }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { t } = useI18n()

useHead({
  title: t('imprint.title') + ' - GRAVON Projektbau',
  meta: [
    {
      name: 'description',
      content: t('imprint.meta.description')
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