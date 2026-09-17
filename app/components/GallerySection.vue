<script setup lang="ts">
const photos = [
  { src: '/images/frota-constellation.png', alt: 'Caminhão caçamba da frota Birigui Caçambas' },
  { src: '/images/cacambas-estoque.png', alt: 'Caçambas de 3 e 5 metros prontas para locação' },
  { src: '/images/cacamba-obra.png', alt: 'Caçamba cheia de entulho de obra' },
  { src: '/images/entulho-galpao.png', alt: 'Separação e descarte de entulho e resíduos' },
  { src: '/images/caminhoes-patio.png', alt: 'Caminhões caçamba no pátio da empresa' }
]
</script>

<template>
  <section class="gallery-section">
    <div class="container">
      <div v-reveal class="gallery-heading">
        <div class="eyebrow">Nosso trabalho</div>
        <h2 class="gallery-title">Caçambas, caminhões e obras que já atendemos em Birigui.</h2>
      </div>
      <div class="gallery-grid">
        <div
          v-for="(photo, i) in photos"
          :key="photo.src"
          v-reveal="i * 90"
          class="gallery-item"
        >
          <NuxtImg :src="photo.src" :alt="photo.alt" class="gallery-img" format="webp" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-section {
  padding: 20px 16px 88px;
}

.gallery-heading {
  max-width: 44ch;
  margin-bottom: 36px;
}

.eyebrow {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--green-light);
}

.gallery-title {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: clamp(26px, 3.2vw, 40px);
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin: 14px 0 0;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 160px;
  gap: 14px;
}

.gallery-item {
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--surface);
}

.gallery-item:first-child {
  grid-column: span 2;
  grid-row: span 2;
}

.gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
}

.gallery-item:hover .gallery-img {
  transform: scale(1.06);
}

@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 180px;
  }

  .gallery-item:first-child {
    grid-column: span 2;
    grid-row: span 1;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 220px;
  }

  .gallery-item:first-child {
    grid-column: span 1;
  }
}
</style>
