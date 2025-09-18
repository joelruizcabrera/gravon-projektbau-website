<template>
  <div class="min-h-screen flex flex-col">
    <Header />

    <!-- Main Content mit korrektem tabindex für Skip Links -->
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

const { t } = useI18n()
const route = useRoute()

// Page transition configuration
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