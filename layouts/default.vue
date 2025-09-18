<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main
        id="main-content"
        class="flex-grow pt-20"
        tabindex="-1"
        role="main"
    >
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from "~/components/Header.vue"
import Footer from "~/components/Footer.vue"

// HTML head setup
useHead({
  htmlAttrs: {
    lang: 'de',
    class: 'no-js' // Initial no-js Klasse
  },
  script: [
    {
      innerHTML: 'document.documentElement.className = document.documentElement.className.replace("no-js", "js");',
      type: 'text/javascript'
    }
  ]
})

definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Global Focus Management */
*:focus-visible {
  outline: 2px solid #f59e0b;
  outline-offset: 2px;
  border-radius: 2px;
}

/* Selection Styles */
::selection {
  background-color: #fef3c7;
  color: #92400e;
}
</style>