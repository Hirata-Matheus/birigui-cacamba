<script setup lang="ts">
const marquee = [
  'Caçambas de 3 e 5 metros',
  '•',
  'Limpeza de terrenos',
  '•',
  'Terraplanagem',
  '•',
  'Escavadeira Bobcat',
  '•',
  'Venda de terra',
  '•'
]

const servicos = [
  {
    titulo: 'Caçambas',
    texto: 'Locação de caçambas para entulhos de obra, reforma e limpeza, com entrega e retirada combinadas.',
    detalhe: '3 e 5 metros',
    img: '/images/cacambas-estoque.png',
    delay: 0
  },
  {
    titulo: 'Limpeza',
    texto: 'Limpeza e desmatamento de terrenos, com retirada do material do local.',
    detalhe: 'Terrenos e lotes',
    img: '/images/entulho-galpao.png',
    delay: 120
  },
  {
    titulo: 'Terraplanagem',
    texto: 'Terraplanagem, escavadeira Bobcat para abertura de buracos de piscina e venda de terra.',
    detalhe: 'Bobcat e terra',
    img: 'https://images.unsplash.com/photo-1649807533255-bbc9c9fb7d77?fm=jpg&q=70&w=1200&auto=format&fit=crop',
    delay: 240
  }
]

const faq = [
  {
    q: 'Quais tamanhos de caçamba vocês têm?',
    a: 'Trabalhamos com dois tipos de caçamba, nos tamanhos de 3 e 5 metros, para entulhos de obra e reforma.'
  },
  {
    q: 'Qual o horário de atendimento?',
    a: 'De segunda a sexta das 7h às 17h30 e aos sábados das 7h às 12h.'
  },
  {
    q: 'Vocês fazem limpeza e terraplanagem?',
    a: 'Sim. Fazemos limpeza e desmatamento de terrenos, terraplanagem, abertura de buracos para piscina com escavadeira Bobcat e venda de terra.'
  }
]
</script>

<template>
  <div>
    <section class="hero-section">
      <div class="hero-frame">
        <div v-parallax="0.18" class="hero-bg">
          <NuxtImg
            src="/images/frota-constellation.png"
            alt="Caminhão caçamba em obra"
            class="hero-img"
            format="webp"
            preload
          />
        </div>
        <div class="hero-scrim" />
        <div class="hero-orb hero-orb--green" />
        <div class="hero-orb hero-orb--orange" />

        <div class="hero-content">
          <div v-reveal class="hero-badge">
            <span class="dot" />Caçambas · Limpeza · Terraplanagem em Birigui-SP
          </div>
          <h1 v-reveal="140" class="hero-title">
            Precisa de uma caçamba, limpeza, serviço de terraplanagem ou terra?
          </h1>
          <p v-reveal="280" class="hero-subtitle">
            Ligue agora ou envie sua mensagem por WhatsApp que atenderemos você!
          </p>
          <div v-reveal="420" class="hero-actions">
            <a href="tel:+551836447800" class="hero-cta hero-cta--phone">
              <span class="hero-cta-icon">
                <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>
              </span>
              <span class="hero-cta-text">
                <span class="hero-cta-label">Telefone fixo</span>
                <span class="hero-cta-value">(18) 3644-7800</span>
              </span>
            </a>
            <a href="https://wa.me/5518981560019" target="_blank" rel="noopener" class="hero-cta hero-cta--whats">
              <span class="hero-cta-icon hero-cta-icon--whats">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#ffa552"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.12-.41-2.14-1.32-.79-.71-1.33-1.58-1.48-1.88-.15-.3-.02-.47.13-.62.15-.15.32-.37.47-.55.13-.16.2-.28.3-.48.1-.2.05-.37-.02-.52-.07-.15-.6-1.45-.82-1.98-.22-.52-.44-.45-.6-.46h-.52c-.17 0-.45.07-.69.32-.24.25-.91.86-.91 2.1s.93 2.44 1.06 2.61c.13.17 1.8 2.85 4.42 3.89 2.62 1.03 2.62.69 3.1.64.47-.04 1.54-.62 1.76-1.23.22-.6.22-1.12.15-1.23-.07-.1-.24-.17-.54-.32zM12.05.5C5.66.5.5 5.65.5 12.03c0 2.04.53 4.03 1.55 5.79L.5 23.5l5.84-1.53a11.5 11.5 0 0 0 5.7 1.5h.01c6.38 0 11.55-5.15 11.55-11.53A11.5 11.5 0 0 0 12.05.5z"/></svg>
              </span>
              <span class="hero-cta-text">
                <span class="hero-cta-label hero-cta-label--whats">WhatsApp</span>
                <span class="hero-cta-value">(18) 98156-0019</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <div class="marquee-band">
      <div class="marquee-track">
        <div class="marquee-group">
          <span v-for="(m, i) in marquee" :key="`a-${i}`">{{ m }}</span>
        </div>
        <div class="marquee-group" aria-hidden="true">
          <span v-for="(m, i) in marquee" :key="`b-${i}`">{{ m }}</span>
        </div>
      </div>
    </div>

    <section class="services-section">
      <div class="container">
        <div v-reveal class="services-heading">
          <div class="eyebrow">Serviços</div>
          <h2 class="services-title">Três frentes de trabalho, um só telefone.</h2>
        </div>
        <div class="services-grid">
          <ServiceCard
            v-for="s in servicos"
            :key="s.titulo"
            :titulo="s.titulo"
            :texto="s.texto"
            :detalhe="s.detalhe"
            :img="s.img"
            :delay="s.delay"
          />
        </div>
      </div>
    </section>

    <StatsSection />

    <GallerySection />

    <section class="cta-section">
      <div class="cta-frame">
        <div v-parallax="0.12" class="cta-bg">
          <NuxtImg
            src="/images/caminhoes-patio.png"
            alt="Caminhões caçamba no pátio da empresa"
            class="cta-img"
            format="webp"
            loading="lazy"
          />
        </div>
        <div class="cta-scrim" />
        <div v-reveal class="cta-content">
          <h2 class="cta-title">Faça um orçamento sem compromisso</h2>
          <p class="cta-text">
            Atendemos obras, reformas e limpeza de terrenos em Birigui. Informe o serviço, o endereço e a data em
            que você precisa.
          </p>
          <div class="cta-actions">
            <NuxtLink to="/reservar" class="cta-btn cta-btn--solid">Reservar caçamba</NuxtLink>
            <a href="https://wa.me/5518981560019" target="_blank" rel="noopener" class="cta-btn cta-btn--ghost">
              Chamar no WhatsApp
            </a>
            <NuxtLink to="/contato" class="cta-btn cta-btn--ghost">Ver endereço e horários</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="faq-section">
      <div class="container faq-grid">
        <div v-reveal class="faq-heading">
          <div class="eyebrow">Dúvidas frequentes</div>
          <h2 class="faq-title">O que a gente mais responde no telefone.</h2>
        </div>
        <div v-reveal="120">
          <FaqAccordion :items="faq" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-section {
  position: relative;
  padding: 0 16px;
}

.hero-frame {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 44px;
  overflow: hidden;
  min-height: 640px;
  display: flex;
  align-items: flex-end;
  background: #1b211b;
}

.hero-bg {
  position: absolute;
  inset: -12% 0;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
}

.hero-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(20, 23, 20, 0.55) 0%, rgba(20, 23, 20, 0.72) 45%, rgba(20, 23, 20, 0.95) 100%);
}

.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(10px);
}

.hero-orb--green {
  width: 520px;
  height: 520px;
  left: -140px;
  top: -120px;
  background: radial-gradient(circle, rgba(63, 166, 72, 0.42), transparent 66%);
  animation: bcDrift 18s ease-in-out infinite;
}

.hero-orb--orange {
  width: 420px;
  height: 420px;
  right: -100px;
  bottom: -140px;
  background: radial-gradient(circle, rgba(255, 140, 50, 0.3), transparent 66%);
  animation: bcDrift 22s ease-in-out infinite reverse;
}

.hero-content {
  position: relative;
  padding: 96px 36px 56px;
  width: 100%;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  padding: 9px 18px;
  font-size: 13px;
  font-weight: 600;
  color: #c9f0c9;
}

.hero-badge .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--green-light);
  flex: none;
}

.hero-title {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: clamp(33px, 5.4vw, 66px);
  line-height: 1.04;
  letter-spacing: -0.035em;
  margin: 26px 0 0;
  max-width: 19ch;
  text-wrap: pretty;
}

.hero-subtitle {
  font-size: clamp(17px, 1.9vw, 21px);
  line-height: 1.55;
  color: var(--text-muted);
  max-width: 44ch;
  margin: 22px 0 0;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 38px;
}

.hero-cta {
  display: flex;
  align-items: center;
  gap: 14px;
  border-radius: 999px;
  padding: 16px 30px 16px 22px;
  transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.hero-cta--phone {
  background: var(--green);
  color: #fff;
  box-shadow: 0 8px 24px rgba(63, 166, 72, 0.35);
}

.hero-cta--phone:hover {
  background: var(--green-dark);
  color: #fff;
  transform: translateY(-2px);
}

.hero-cta--whats {
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 165, 82, 0.5);
  color: #fff;
}

.hero-cta--whats:hover {
  background: var(--orange);
  border-color: var(--orange);
  color: #161a16;
  transform: translateY(-2px);
}

.hero-cta-icon {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
}

.hero-cta-icon--whats {
  background: rgba(255, 140, 50, 0.22);
}

.hero-cta-text {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.hero-cta-label {
  font-size: 12px;
  opacity: 0.85;
}

.hero-cta-label--whats {
  color: #ffbd85;
  opacity: 1;
}

.hero-cta-value {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 22px;
  letter-spacing: -0.02em;
}

.marquee-band {
  overflow: hidden;
  margin: 34px 0 0;
  padding: 14px 0;
  background: var(--orange);
  color: #161a16;
  transform: rotate(-1.1deg);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: bcMarquee 26s linear infinite;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 17px;
  letter-spacing: -0.01em;
}

.marquee-group {
  display: flex;
  gap: 44px;
  padding-right: 44px;
}

.services-section {
  padding: 88px 16px 20px;
}

.services-heading {
  max-width: 38ch;
}

.eyebrow {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--green-light);
}

.services-title {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: clamp(28px, 3.6vw, 46px);
  line-height: 1.08;
  letter-spacing: -0.03em;
  margin: 14px 0 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 22px;
  margin-top: 44px;
}

.cta-section {
  padding: 0 16px 88px;
}

.cta-frame {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  border-radius: 44px;
  overflow: hidden;
  min-height: 420px;
  display: flex;
  align-items: center;
}

.cta-bg {
  position: absolute;
  inset: -14% 0;
}

.cta-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.45;
}

.cta-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(100deg, rgba(20, 23, 20, 0.94) 8%, rgba(20, 23, 20, 0.55) 70%, rgba(20, 23, 20, 0.3));
}

.cta-content {
  position: relative;
  padding: 56px 36px;
  max-width: 640px;
}

.cta-title {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: clamp(27px, 3.4vw, 42px);
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin: 0;
}

.cta-text {
  color: var(--text-muted);
  font-size: 17px;
  line-height: 1.65;
  margin: 18px 0 30px;
  max-width: 46ch;
}

.cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.cta-btn {
  font-weight: 700;
  font-size: 16px;
  padding: 16px 28px;
  border-radius: 999px;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
}

.cta-btn--solid {
  background: var(--orange);
  color: #17150f;
  font-weight: 800;
}

.cta-btn--solid:hover {
  background: var(--orange-light);
  color: #17150f;
  transform: translateY(-2px);
}

.cta-btn--ghost {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: var(--text);
  cursor: pointer;
}

.cta-btn--ghost:hover {
  border-color: var(--green-pale);
  color: var(--green-pale);
}

.faq-section {
  padding: 0 16px 96px;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 40px;
  align-items: start;
}

.faq-heading {
  max-width: 22ch;
}

.faq-title {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: clamp(26px, 3.2vw, 40px);
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin: 14px 0 0;
}

@media (max-width: 640px) {
  .hero-content {
    padding: 64px 22px 40px;
  }

  .hero-frame {
    min-height: 560px;
    border-radius: 28px;
  }

  .hero-cta {
    padding: 14px 20px 14px 16px;
  }

  .services-section {
    padding: 64px 16px 8px;
  }

  .cta-frame,
  .gallery-item {
    border-radius: 26px;
  }

  .cta-content {
    padding: 40px 24px;
  }
}
</style>
