<script setup lang="ts">
const rootEl = ref<HTMLElement | null>(null)
const t = ref(0)
let started = false

const tickTipos = computed(() => Math.round(2 * t.value))
const tickDias = computed(() => Math.round(6 * t.value))
const tickHoras = computed(() => (10.5 * t.value).toFixed(1).replace('.', ','))

function startTicker() {
  if (started) return
  started = true
  const dur = 1500
  const start = performance.now()
  function step(now: number) {
    const progress = Math.min(1, (now - start) / dur)
    t.value = 1 - (1 - progress) ** 3
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  if (!rootEl.value || !('IntersectionObserver' in window)) {
    startTicker()
    return
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          startTicker()
          io.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.2 }
  )
  io.observe(rootEl.value)
})
</script>

<template>
  <section class="stats-section">
    <div ref="rootEl" v-reveal class="stats-band container">
      <div>
        <div class="stat-number">{{ tickTipos }}</div>
        <div class="stat-label">tipos de caçamba</div>
        <div class="stat-desc">Nos tamanhos de 3 e 5 metros.</div>
      </div>
      <div>
        <div class="stat-number">{{ tickDias }}</div>
        <div class="stat-label">dias de atendimento</div>
        <div class="stat-desc">Segunda a sexta, 7h às 17h30. Sábado, 7h às 12h.</div>
      </div>
      <div>
        <div class="stat-number dark">{{ tickHoras }}h</div>
        <div class="stat-label">de expediente por dia</div>
        <div class="stat-desc">Preços competitivos e orçamento sem compromisso.</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats-section {
  padding: 80px 16px;
}

.stats-band {
  background: linear-gradient(135deg, #2f7d38, #3fa648 55%, #4fb95c);
  border-radius: 44px;
  padding: 54px 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 34px;
  box-shadow: 0 24px 60px rgba(30, 86, 36, 0.35);
}

.stat-number {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: clamp(46px, 7vw, 76px);
  line-height: 1;
  letter-spacing: -0.05em;
  color: #fff;
}

.stat-number.dark {
  color: #17301b;
}

.stat-label {
  margin-top: 10px;
  font-weight: 700;
  font-size: 17px;
  color: #fff;
}

.stat-desc {
  color: rgba(255, 255, 255, 0.85);
  font-size: 15px;
  margin-top: 4px;
  line-height: 1.5;
}

@media (max-width: 640px) {
  .stats-band {
    padding: 40px 26px;
  }
}
</style>
