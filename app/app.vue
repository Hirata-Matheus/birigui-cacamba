<script setup lang="ts">
const route = useRoute()

watch(
  () => route.path,
  () => {
    if (import.meta.client) window.scrollTo({ top: 0, behavior: 'smooth' })
  }
)
</script>

<template>
  <div class="app-shell">
    <NuxtRouteAnnouncer />
    <AppHeader />
    <NuxtPage />
    <AppFooter />
    <WhatsAppButton />
  </div>
</template>

<style scoped>
.app-shell {
  background: transparent;
}
</style>
