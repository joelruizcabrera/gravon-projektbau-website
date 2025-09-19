<template>
  <SectionContainer
    background="gradientYellow"
    :container="true"
    padding="large"
  >
    <div class="flex justify-center items-center flex-col">
      <h2 class="text-4xl font-bold mb-6">{{ $t('about.cta.title') }}</h2>
      <p class="text-xl mb-12 max-w-3xl mx-auto opacity-90 text-center">{{ $t('about.cta.subtitle') }}</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <NuxtLink :to="localePath('/contact')" class="bg-black text-white px-8 py-4 rounded-none font-semibold hover:bg-gray-900 transition-colors duration-300 uppercase tracking-wide nav-link">
          {{ $t('about.cta.contact') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/projects')" class="bg-transparent border-0 text-black px-8 py-4 rounded-none font-semibold hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-wide nav-link">
          {{ $t('about.cta.projects') }}
        </NuxtLink>
      </div>
    </div>
  </SectionContainer>
</template>

<script lang="ts" setup>
import SectionContainer from "~/components/ui/SectionContainer.vue";

</script>