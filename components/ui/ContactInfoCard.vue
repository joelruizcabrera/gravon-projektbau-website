<template>
  <div class="flex items-start space-x-4 group">
    <div class="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
      <Icon :name="icon" class="w-6 h-6 text-black" />
    </div>
    <div class="flex-1">
      <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ title }}</h3>
      <div class="text-gray-600 space-y-1">
        <p v-for="detail in details" :key="detail" class="font-medium">
          {{ detail }}
        </p>
      </div>
      <button
          v-if="action"
          @click="action.handler"
          class="mt-3 text-yellow-600 hover:text-yellow-700 font-semibold transition-colors"
      >
        {{ action.text }}
      </button>
    </div>
  </div>
</template>

<script setup>
import Icon from "~/components/ui/Icon.vue";

defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  details: { type: Array, required: true },
  action: { type: Object, default: null }
})
</script>