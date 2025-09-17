<template>
  <div>
    <Hero />
    <Services />
    <Projects />
    <About />
    <Contact />
  </div>
</template>

<script setup>
const { t } = useI18n()

useHead({
  title: t('meta.home.title'),
  meta: [
    {
      name: 'description',
      content: t('meta.home.description')
    },
    {
      property: 'og:title',
      content: t('meta.home.title')
    },
    {
      property: 'og:description',
      content: t('meta.home.description')
    },
    {
      property: 'og:image',
      content: '/images/og-image.jpg'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://www.gravon.de'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'GRAVON Projektbau GmbH',
        url: 'https://www.gravon.de',
        logo: 'https://www.gravon.de/images/logo.png',
        description: 'Generalunternehmen für Bau- und Immobilienprojekte',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Musterstraße 123',
          addressLocality: 'Frankfurt am Main',
          postalCode: '60311',
          addressCountry: 'DE'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+49-69-123-456-789',
          contactType: 'customer service',
          email: 'info@gravon.de'
        },
        foundingDate: '1998',
        numberOfEmployees: '50+',
        serviceArea: 'Deutschland'
      })
    }
  ]
})
</script>