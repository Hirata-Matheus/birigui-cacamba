<script setup lang="ts">
useHead({
  title: 'Reservar caçamba - Birigui Caçambas',
  meta: [
    {
      name: 'description',
      content:
        'Reserve sua caçamba em Birigui-SP: escolha o tamanho, a quantidade, o período e o local de entrega. Enviamos tudo pronto para o WhatsApp da empresa.'
    }
  ]
})

const WHATSAPP_NUMBER = '5518981560019'

const nome = ref('')
const tamanho = ref('')
const quantidade = ref(1)
const dataInicio = ref('')
const dataFim = ref('')
const local = ref('')
const errorMsg = ref('')
const sent = ref(false)

const todayISO = new Date().toISOString().slice(0, 10)
const minDataFim = computed(() => dataInicio.value || todayISO)

watch(dataInicio, () => {
  if (dataFim.value && dataFim.value < dataInicio.value) dataFim.value = ''
})

function formatDateBR(iso: string) {
  if (!iso) return ''
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}

const preview = computed(() => {
  const linhas = [
    `Olá! Meu nome é ${nome.value || '—'} e gostaria de reservar uma caçamba.`,
    '',
    `📦 Tamanho: ${tamanho.value ? `${tamanho.value} metros` : '—'}`,
    `🔢 Quantidade: ${quantidade.value || '—'}`,
    `📅 Período: ${dataInicio.value ? formatDateBR(dataInicio.value) : '—'} até ${dataFim.value ? formatDateBR(dataFim.value) : '—'}`,
    `📍 Local: ${local.value || '—'}`
  ]
  return linhas.join('\n')
})

function submit() {
  errorMsg.value = ''

  if (dataInicio.value && dataFim.value && dataFim.value < dataInicio.value) {
    errorMsg.value = 'A data de retirada deve ser igual ou posterior à data de entrega.'
    return
  }

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(preview.value)}`
  window.open(url, '_blank', 'noopener')
  sent.value = true
}
</script>

<template>
  <section class="reserve-section">
    <div class="container reserve-grid">
      <div v-reveal class="reserve-intro">
        <div class="eyebrow">Reservar caçamba</div>
        <h1 class="reserve-title">Monte sua reserva e envie direto pelo WhatsApp.</h1>
        <p class="reserve-text">
          Preencha o tamanho, a quantidade, o período e o local de entrega. Nós preparamos a mensagem e você só
          confirma o envio para nosso WhatsApp — sem digitar nada.
        </p>

        <div class="preview-card">
          <div class="preview-label">Prévia da mensagem</div>
          <pre class="preview-text">{{ preview }}</pre>
        </div>
      </div>

      <form v-reveal="120" class="reserve-form" @submit.prevent="submit">
        <label class="field">
          <span class="field-label">Nome de quem está reservando</span>
          <input v-model.trim="nome" type="text" class="field-input" placeholder="Seu nome completo" required />
        </label>

        <div class="field-row">
          <label class="field">
            <span class="field-label">Tamanho da caçamba</span>
            <select v-model="tamanho" class="field-input" required>
              <option value="" disabled>Selecione</option>
              <option value="3">3 metros</option>
              <option value="5">5 metros</option>
            </select>
          </label>

          <label class="field">
            <span class="field-label">Quantidade</span>
            <input v-model.number="quantidade" type="number" min="1" max="10" class="field-input" required />
          </label>
        </div>

        <div class="field-row">
          <label class="field">
            <span class="field-label">Data de entrega</span>
            <input v-model="dataInicio" type="date" :min="todayISO" class="field-input" required />
          </label>

          <label class="field">
            <span class="field-label">Data de retirada</span>
            <input v-model="dataFim" type="date" :min="minDataFim" class="field-input" required />
          </label>
        </div>

        <label class="field">
          <span class="field-label">Endereço de entrega</span>
          <textarea
            v-model.trim="local"
            class="field-input field-textarea"
            rows="3"
            placeholder="Rua, número, bairro e ponto de referência"
            required
          />
        </label>

        <p v-if="errorMsg" class="form-error">{{ errorMsg }}</p>
        <p v-if="sent" class="form-success">
          Mensagem pronta! Se o WhatsApp não abriu automaticamente, verifique se o navegador bloqueou o pop-up.
        </p>

        <button type="submit" class="submit-btn">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.12-.41-2.14-1.32-.79-.71-1.33-1.58-1.48-1.88-.15-.3-.02-.47.13-.62.15-.15.32-.37.47-.55.13-.16.2-.28.3-.48.1-.2.05-.37-.02-.52-.07-.15-.6-1.45-.82-1.98-.22-.52-.44-.45-.6-.46h-.52c-.17 0-.45.07-.69.32-.24.25-.91.86-.91 2.1s.93 2.44 1.06 2.61c.13.17 1.8 2.85 4.42 3.89 2.62 1.03 2.62.69 3.1.64.47-.04 1.54-.62 1.76-1.23.22-.6.22-1.12.15-1.23-.07-.1-.24-.17-.54-.32zM12.05.5C5.66.5.5 5.65.5 12.03c0 2.04.53 4.03 1.55 5.79L.5 23.5l5.84-1.53a11.5 11.5 0 0 0 5.7 1.5h.01c6.38 0 11.55-5.15 11.55-11.53A11.5 11.5 0 0 0 12.05.5z"/></svg>
          Enviar reserva pelo WhatsApp
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.reserve-section {
  padding: 56px 16px 96px;
}

.reserve-grid {
  display: grid;
  grid-template-columns: minmax(280px, 1fr) minmax(320px, 480px);
  gap: 48px;
  align-items: start;
}

.eyebrow {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--green-light);
}

.reserve-title {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: clamp(30px, 4vw, 48px);
  line-height: 1.08;
  letter-spacing: -0.03em;
  margin: 16px 0 0;
  max-width: 18ch;
}

.reserve-text {
  color: var(--text-muted);
  font-size: 17px;
  line-height: 1.65;
  margin: 18px 0 0;
  max-width: 46ch;
}

.preview-card {
  margin-top: 32px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 22px 24px;
}

.preview-label {
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-faint);
  margin-bottom: 10px;
}

.preview-text {
  margin: 0;
  font-family: inherit;
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--text-muted);
  font-size: 15px;
  line-height: 1.6;
}

.reserve-form {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 32px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field-label {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-dim);
}

.field-input {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 13px 16px;
  color: var(--text);
  font-family: inherit;
  font-size: 15px;
  width: 100%;
  transition: border-color 0.2s ease, background 0.2s ease;
}

.field-input:focus {
  outline: none;
  border-color: rgba(111, 212, 122, 0.55);
  background: rgba(255, 255, 255, 0.06);
}

.field-input::placeholder {
  color: var(--text-faint);
}

.field-textarea {
  resize: vertical;
  min-height: 84px;
}

select.field-input {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='16' height='16' fill='none' stroke='%239aa79a' stroke-width='2.4' stroke-linecap='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 40px;
}

select.field-input option {
  background: var(--surface);
  color: var(--text);
}

input[type='date'].field-input {
  color-scheme: dark;
}

.form-error {
  margin: 0;
  color: #ffb4a0;
  background: rgba(255, 90, 60, 0.1);
  border: 1px solid rgba(255, 90, 60, 0.3);
  border-radius: 12px;
  padding: 12px 14px;
  font-size: 14px;
}

.form-success {
  margin: 0;
  color: #c9f0c9;
  background: rgba(63, 166, 72, 0.12);
  border: 1px solid rgba(111, 212, 122, 0.3);
  border-radius: 12px;
  padding: 12px 14px;
  font-size: 14px;
}

.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: var(--green);
  color: #fff;
  border: 0;
  border-radius: 999px;
  padding: 17px 24px;
  font-weight: 800;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.submit-btn:hover {
  background: var(--green-dark);
  transform: translateY(-2px);
}

@media (max-width: 900px) {
  .reserve-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}

@media (max-width: 560px) {
  .reserve-form {
    padding: 24px 20px;
    border-radius: 26px;
  }

  .field-row {
    grid-template-columns: 1fr;
  }
}
</style>
