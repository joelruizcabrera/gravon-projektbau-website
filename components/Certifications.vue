<template>
  <SectionContainer background="gray" :container="true" padding="large">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-gray-900 mb-6">{{ $t('about.certifications.title') }}</h2>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">{{ $t('about.certifications.subtitle') }}</p>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div
          v-for="cert in certifications"
          :key="cert.name"
          class="certification-card bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
      >
        <img
            :src="cert.logo"
            :alt="cert.name"
            class="h-16 mx-auto mb-4 object-contain"
        />
        <h3 class="font-semibold text-gray-900 mb-2">{{ cert.name }}</h3>
        <p class="text-gray-600 text-sm">{{ $t(cert.description) }}</p>
      </div>
    </div>
  </SectionContainer>
</template>

<script lang="ts" setup>
import SectionContainer from "~/components/ui/SectionContainer.vue";

const certifications = [
  {
    name: 'ISO 9001',
    description: 'about.certifications.iso9001',
    logo: '/images/certs/iso-9001.png'
  },
  {
    name: 'ISO 14001',
    description: 'about.certifications.iso14001',
    logo: '/images/certs/iso-14001.png'
  },
  {
    name: 'DGNB',
    description: 'about.certifications.dgnb',
    logo: '/images/certs/dgnb.png'
  },
  {
    name: 'VBI',
    description: 'about.certifications.vbi',
    logo: '/images/certs/vbi.png'
  }
]
</script>