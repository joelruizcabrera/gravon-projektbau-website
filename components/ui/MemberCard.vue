<template>
  <div
      class="team-member text-center group"
  >
    <div class="relative mb-6">
      <img
          :src="member.image"
          :alt="member.name"
          class="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
      />
      <div class="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-yellow-500/20 to-blue-500/20 group-hover:from-yellow-500/30 group-hover:to-blue-500/30 transition-all duration-300"></div>
    </div>

    <h3 class="text-xl font-bold text-gray-900 mb-2">{{ member.name }}</h3>
    <p class="text-yellow-600 font-medium mb-4">{{ $t(member.position) }}</p>
    <p class="text-gray-600 text-sm">{{ $t(member.description) }}</p>

    <!-- Social Links -->
    <div class="flex justify-center space-x-4 mt-6">
      <NuxtLink
          target="_blank"
          v-if="member.email"
          :to="`mailto:${member.email}`"
          class="w-10 h-10 bg-gray-200 group/link hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors duration-300"
      >
        <Icon name="mail" classes="w-5 h-5 text-gray-600 group-hover/link:text-white transition-colors duration-300"></Icon>
      </NuxtLink>
      <NuxtLink
          target="_blank"
          v-if="member.linkedin"
          :to="member.linkedin"
          class="w-10 h-10 bg-gray-200 group/link hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors duration-300"
      >
        <Icon name="linkedin" stroke-width="0" classes="w-5 h-5 text-gray-600 fill-gray-600 group-hover/link:fill-white group-hover/link:text-white transition-colors duration-300"></Icon>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import Icon from "~/components/ui/Icon.vue";
import is from "@sindresorhus/is";
import string = is.string;
import { gsap } from 'gsap'

const props = defineProps({
  member: {
    type: Object,
    required: true,
    validator: (member: any) => {
      return (
        string(member.name) &&
        string(member.position) &&
        string(member.description) &&
        string(member.image) &&
        (string(member.email) || string(member.linkedin))
      )
    }
  }
})

onMounted(() => {
  // Animate team members
  gsap.from('.team-member', {
    scrollTrigger: {
      trigger: '.team-member',
      start: 'top 80%'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
  })
})
</script>