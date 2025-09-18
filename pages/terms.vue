<template>
  <div>
    <!-- Hero Section -->
    <section class="py-24 bg-slate-900 text-white">
      <div class="container mx-auto px-4 lg:px-8">
        <h1 class="text-4xl lg:text-5xl font-bold mb-6">{{ $t('terms.title') }}</h1>
        <p class="text-xl text-gray-300 max-w-3xl">{{ $t('terms.subtitle') }}</p>
      </div>
    </section>

    <!-- Terms Content -->
    <section class="section-padding bg-white">
      <div class="container mx-auto max-w-4xl">
        <div class="prose prose-lg max-w-none">
          <!-- Einleitung -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('terms.intro.title') }}</h2>
            <p class="text-gray-600 mb-4">{{ $t('terms.intro.content1') }}</p>
            <p class="text-gray-600">{{ $t('terms.intro.content2') }}</p>
          </div>

          <!-- Geltungsbereich -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('terms.scope.title') }}</h2>
            <div class="space-y-4 text-gray-600">
              <p>{{ $t('terms.scope.paragraph1') }}</p>
              <p>{{ $t('terms.scope.paragraph2') }}</p>
              <p>{{ $t('terms.scope.paragraph3') }}</p>
            </div>
          </div>

          <!-- Vertragsabschluss -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('terms.contract.title') }}</h2>
            <div class="space-y-4 text-gray-600">
              <p>{{ $t('terms.contract.paragraph1') }}</p>
              <p>{{ $t('terms.contract.paragraph2') }}</p>
              <div class="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ $t('terms.contract.phases.title') }}</h3>
                <ol class="list-decimal list-inside space-y-2">
                  <li>{{ $t('terms.contract.phases.phase1') }}</li>
                  <li>{{ $t('terms.contract.phases.phase2') }}</li>
                  <li>{{ $t('terms.contract.phases.phase3') }}</li>
                  <li>{{ $t('terms.contract.phases.phase4') }}</li>
                </ol>
              </div>
            </div>
          </div>

          <!-- Leistungsumfang -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('terms.services.title') }}</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-gray-50 p-6 rounded-lg">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ $t('terms.services.planning.title') }}</h3>
                <ul class="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  <li>{{ $t('terms.services.planning.item1') }}</li>
                  <li>{{ $t('terms.services.planning.item2') }}</li>
                  <li>{{ $t('terms.services.planning.item3') }}</li>
                  <li>{{ $t('terms.services.planning.item4') }}</li>
                </ul>
              </div>
              <div class="bg-gray-50 p-6 rounded-lg">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ $t('terms.services.execution.title') }}</h3>
                <ul class="list-disc list-inside space-y-1 text-gray-600 text-sm">
                  <li>{{ $t('terms.services.execution.item1') }}</li>
                  <li>{{ $t('terms.services.execution.item2') }}</li>
                  <li>{{ $t('terms.services.execution.item3') }}</li>
                  <li>{{ $t('terms.services.execution.item4') }}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Preise und Zahlung -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('terms.payment.title') }}</h2>
            <div class="space-y-4 text-gray-600">
              <p>{{ $t('terms.payment.paragraph1') }}</p>
              <p>{{ $t('terms.payment.paragraph2') }}</p>
              <div class="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ $t('terms.payment.schedule.title') }}</h3>
                <ul class="list-disc list-inside space-y-2 text-gray-600">
                  <li>{{ $t('terms.payment.schedule.item1') }}</li>
                  <li>{{ $t('terms.payment.schedule.item2') }}</li>
                  <li>{{ $t('terms.payment.schedule.item3') }}</li>
                  <li>{{ $t('terms.payment.schedule.item4') }}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Termine und Fristen -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('terms.deadlines.title') }}</h2>
            <div class="space-y-4 text-gray-600">
              <p>{{ $t('terms.deadlines.paragraph1') }}</p>
              <p>{{ $t('terms.deadlines.paragraph2') }}</p>
              <p>{{ $t('terms.deadlines.paragraph3') }}</p>
            </div>
          </div>

          <!-- Gewährleistung -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('terms.warranty.title') }}</h2>
            <div class="space-y-4 text-gray-600">
              <p>{{ $t('terms.warranty.paragraph1') }}</p>
              <p>{{ $t('terms.warranty.paragraph2') }}</p>
              <div class="bg-green-50 border border-green-200 p-6 rounded-lg">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ $t('terms.warranty.periods.title') }}</h3>
                <ul class="list-disc list-inside space-y-1 text-gray-600">
                  <li>{{ $t('terms.warranty.periods.building') }}</li>
                  <li>{{ $t('terms.warranty.periods.technical') }}</li>
                  <li>{{ $t('terms.warranty.periods.equipment') }}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Haftung -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('terms.liability.title') }}</h2>
            <div class="space-y-4 text-gray-600">
              <p>{{ $t('terms.liability.paragraph1') }}</p>
              <p>{{ $t('terms.liability.paragraph2') }}</p>
              <p>{{ $t('terms.liability.paragraph3') }}</p>
            </div>
          </div>

          <!-- Versicherung -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('terms.insurance.title') }}</h2>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-gray-50 p-4 rounded-lg text-center">
                <h3 class="font-semibold text-gray-900 mb-2">{{ $t('terms.insurance.liability.title') }}</h3>
                <p class="text-gray-600 text-sm">{{ $t('terms.insurance.liability.amount') }}</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg text-center">
                <h3 class="font-semibold text-gray-900 mb-2">{{ $t('terms.insurance.professional.title') }}</h3>
                <p class="text-gray-600 text-sm">{{ $t('terms.insurance.professional.amount') }}</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg text-center">
                <h3 class="font-semibold text-gray-900 mb-2">{{ $t('terms.insurance.construction.title') }}</h3>
                <p class="text-gray-600 text-sm">{{ $t('terms.insurance.construction.amount') }}</p>
              </div>
            </div>
          </div>

          <!-- Schlussbestimmungen -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('terms.final.title') }}</h2>
            <div class="space-y-4 text-gray-600">
              <p>{{ $t('terms.final.law') }}</p>
              <p>{{ $t('terms.final.court') }}</p>
              <p>{{ $t('terms.final.severability') }}</p>
            </div>
          </div>

          <!-- Kontakt -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('terms.contact.title') }}</h2>
            <div class="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <p class="text-gray-600 mb-4">{{ $t('terms.contact.content') }}</p>
              <div class="space-y-1 text-gray-600">
                <p><span class="font-medium">{{ $t('contact.email.title') }}:</span> recht@gravon-projektbau.de</p>
                <p><span class="font-medium">{{ $t('contact.phone.title') }}:</span> +49 69 123 456 789</p>
              </div>
            </div>
          </div>

          <!-- Letzte Aktualisierung -->
          <div class="text-center pt-8 border-t border-gray-200">
            <p class="text-gray-500 text-sm">{{ $t('terms.lastUpdated') }}: {{ formatDate(new Date()) }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { t } = useI18n()

useHead({
  title: t('terms.title') + ' - GRAVON Projektbau',
  meta: [
    {
      name: 'description',
      content: t('terms.meta.description')
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