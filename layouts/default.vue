<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow pt-20">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from "~/components/Header.vue"
import Footer from "~/components/Footer.vue"

const { t } = useI18n()
const route = useRoute()

// Page transition configuration
definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    onBeforeEnter: (el) => {
      // Scroll to top when new page enter
      console.log(el)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
})

// Alternative: Watch route changes
watch(() => route.path, (newPath, oldPath) => {
  if (newPath !== oldPath) {
    nextTick(() => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }, 150) // Warten bis Page Transition abgeschlossen
    })
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

/* Global scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Focus styles for accessibility */
*:focus-visible {
  outline: 2px solid #f59e0b;
  outline-offset: 2px;
}

/* Selection styles */
::selection {
  background-color: #fef3c7;
  color: #92400e;
}
</style>