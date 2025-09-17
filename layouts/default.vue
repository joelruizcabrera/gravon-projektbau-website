<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow pt-20">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
// Page transition configuration
import Header from "../components/Header.vue";
import Fotoer from "../components/Footer.vue";

definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
})
</script>

<style>
/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>