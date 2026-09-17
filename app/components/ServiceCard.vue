<script setup lang="ts">
defineProps<{
  titulo: string
  texto: string
  detalhe: string
  img: string
  delay?: number
}>()
</script>

<template>
  <article v-reveal="delay ?? 0" class="service-card">
    <div class="service-media">
      <NuxtImg :src="img" :alt="titulo" class="service-img" format="webp" loading="lazy" />
      <div class="service-overlay" />
      <div class="service-tag">{{ detalhe }}</div>
    </div>
    <div class="service-body">
      <h3 class="service-title">{{ titulo }}</h3>
      <p class="service-text">{{ texto }}</p>
      <a href="https://wa.me/5518981560019" target="_blank" rel="noopener" class="service-link">
        Pedir orçamento
        <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </div>
  </article>
</template>

<style scoped>
.service-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 32px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  border-color: rgba(111, 212, 122, 0.4);
}

.service-media {
  position: relative;
  height: 210px;
  overflow: hidden;
}

.service-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.1s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.service-card:hover .service-img {
  transform: scale(1.07);
}

.service-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(20, 23, 20, 0.1), rgba(28, 34, 28, 0.9));
}

.service-tag {
  position: absolute;
  left: 20px;
  bottom: 16px;
  background: rgba(20, 23, 20, 0.66);
  backdrop-filter: blur(6px);
  border-radius: 999px;
  padding: 7px 16px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--green-pale);
}

.service-body {
  padding: 26px 26px 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.service-title {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 26px;
  letter-spacing: -0.02em;
  margin: 0;
}

.service-text {
  margin: 0;
  color: var(--text-muted);
  font-size: 16px;
  line-height: 1.6;
  flex: 1;
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-weight: 700;
  font-size: 15px;
  color: var(--green-pale);
  margin-top: 4px;
  transition: gap 0.2s ease, color 0.2s ease;
  width: fit-content;
}

.service-link:hover {
  gap: 14px;
  color: var(--orange-light);
}
</style>
