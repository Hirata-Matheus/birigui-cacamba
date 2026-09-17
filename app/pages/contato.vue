<script setup lang="ts">
useHead({
  title: 'Contato - Birigui Caçambas',
  meta: [
    {
      name: 'description',
      content: 'Ligue, mande mensagem por WhatsApp ou visite a Birigui Caçambas. Rua Fernando Castilho, 1838, Jandaia 2, Birigui-SP.'
    }
  ]
})

const infoItems = [
  'O serviço desejado: caçamba, limpeza de terreno ou terraplanagem',
  'Endereço da obra ou do terreno',
  'Para caçamba, o tamanho pretendido: 3 ou 5 metros',
  'Data em que precisa do serviço'
]
</script>

<template>
  <section class="contact-section">
    <div class="container">
      <div class="eyebrow">Contato</div>
      <h1 class="contact-title">Ligue, mande mensagem ou passe na empresa.</h1>

      <div class="contact-cards">
        <a href="tel:+551836447800" class="contact-card">
          <div class="contact-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#6fd47a" stroke-width="2" stroke-linecap="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>
          </div>
          <div class="contact-label">Telefone fixo</div>
          <div class="contact-value">(18) 3644-7800</div>
        </a>
        <a href="https://wa.me/5518981560019" target="_blank" rel="noopener" class="contact-card contact-card--whats">
          <div class="contact-icon contact-icon--whats">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#ffa552"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.12-.41-2.14-1.32-.79-.71-1.33-1.58-1.48-1.88-.15-.3-.02-.47.13-.62.15-.15.32-.37.47-.55.13-.16.2-.28.3-.48.1-.2.05-.37-.02-.52-.07-.15-.6-1.45-.82-1.98-.22-.52-.44-.45-.6-.46h-.52c-.17 0-.45.07-.69.32-.24.25-.91.86-.91 2.1s.93 2.44 1.06 2.61c.13.17 1.8 2.85 4.42 3.89 2.62 1.03 2.62.69 3.1.64.47-.04 1.54-.62 1.76-1.23.22-.6.22-1.12.15-1.23-.07-.1-.24-.17-.54-.32zM12.05.5C5.66.5.5 5.65.5 12.03c0 2.04.53 4.03 1.55 5.79L.5 23.5l5.84-1.53a11.5 11.5 0 0 0 5.7 1.5h.01c6.38 0 11.55-5.15 11.55-11.53A11.5 11.5 0 0 0 12.05.5z"/></svg>
          </div>
          <div class="contact-label contact-label--whats">WhatsApp · Celular (Vivo)</div>
          <div class="contact-value">(18) 98156-0019</div>
        </a>
        <div class="contact-card contact-card--static">
          <div class="contact-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#6fd47a" stroke-width="2" stroke-linecap="round"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div class="contact-label">Endereço</div>
          <div class="contact-address">Rua Fernando Castilho, 1838<br />Jandaia 2, Birigui-SP</div>
          <div class="contact-hint">Em frente à rotatória do posto de gasolina.</div>
        </div>
      </div>

      <div class="info-grid">
        <div class="info-card">
          <h2 class="info-title">Horário de atendimento</h2>
          <div class="info-row"><span>Segunda a sexta</span><strong>7h às 17h30</strong></div>
          <div class="info-row"><span>Sábado</span><strong>7h às 12h</strong></div>
          <div class="info-row info-row--muted"><span>Domingo e feriados</span><strong>Fechado</strong></div>
        </div>
        <div class="info-card">
          <h2 class="info-title">O que informar no contato</h2>
          <ul class="info-list">
            <li v-for="item in infoItems" :key="item"><span class="bullet" />{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 56px 16px 96px;
}

.eyebrow {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--green-light);
}

.contact-title {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: clamp(32px, 4.8vw, 58px);
  line-height: 1.06;
  letter-spacing: -0.035em;
  margin: 16px 0 0;
  max-width: 20ch;
}

.contact-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 20px;
  margin-top: 44px;
}

.contact-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 32px;
  padding: 30px 28px;
  display: block;
  color: var(--text);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.contact-card:hover {
  transform: translateY(-6px);
  border-color: rgba(111, 212, 122, 0.4);
  color: var(--text);
}

.contact-card--whats {
  border-color: rgba(255, 165, 82, 0.28);
}

.contact-card--whats:hover {
  border-color: var(--orange);
}

.contact-card--static:hover {
  transform: none;
}

.contact-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(63, 166, 72, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-icon--whats {
  background: rgba(255, 140, 50, 0.2);
}

.contact-label {
  font-size: 13px;
  color: var(--text-dim);
  margin-top: 18px;
}

.contact-label--whats {
  color: #ffbd85;
}

.contact-value {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 27px;
  letter-spacing: -0.02em;
  margin-top: 6px;
}

.contact-address {
  font-size: 18px;
  line-height: 1.5;
  margin-top: 6px;
  font-weight: 700;
}

.contact-hint {
  color: var(--text-dim);
  font-size: 15px;
  margin-top: 8px;
  line-height: 1.5;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.info-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 32px;
  padding: 32px 28px;
}

.info-title {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 23px;
  letter-spacing: -0.02em;
  margin: 0 0 18px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px solid var(--border);
}

.info-row span {
  color: var(--text-muted);
}

.info-row--muted {
  border-bottom: 0;
  color: var(--text-dim);
}

.info-row--muted span {
  color: var(--text-dim);
}

.info-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
  color: var(--text-muted);
  font-size: 16px;
  line-height: 1.5;
}

.info-list li {
  display: flex;
  gap: 12px;
}

.bullet {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--green-light);
  margin-top: 8px;
  flex: none;
}

@media (max-width: 640px) {
  .contact-card,
  .info-card {
    padding: 26px 22px;
    border-radius: 26px;
  }
}
</style>
