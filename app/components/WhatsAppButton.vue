<template>
  <a
    href="https://wa.me/5518981560019"
    target="_blank"
    rel="noopener"
    class="whatsapp-fab"
    aria-label="Chamar no WhatsApp"
  >
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.12-.41-2.14-1.32-.79-.71-1.33-1.58-1.48-1.88-.15-.3-.02-.47.13-.62.15-.15.32-.37.47-.55.13-.16.2-.28.3-.48.1-.2.05-.37-.02-.52-.07-.15-.6-1.45-.82-1.98-.22-.52-.44-.45-.6-.46h-.52c-.17 0-.45.07-.69.32-.24.25-.91.86-.91 2.1s.93 2.44 1.06 2.61c.13.17 1.8 2.85 4.42 3.89 2.62 1.03 2.62.69 3.1.64.47-.04 1.54-.62 1.76-1.23.22-.6.22-1.12.15-1.23-.07-.1-.24-.17-.54-.32zM12.05.5C5.66.5.5 5.65.5 12.03c0 2.04.53 4.03 1.55 5.79L.5 23.5l5.84-1.53a11.5 11.5 0 0 0 5.7 1.5h.01c6.38 0 11.55-5.15 11.55-11.53A11.5 11.5 0 0 0 12.05.5z"/></svg>
    <span class="label">WhatsApp</span>
  </a>
</template>

<style scoped>
.whatsapp-fab {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 90;
  display: flex;
  align-items: center;
  gap: 11px;
  background: var(--green);
  color: #fff;
  border-radius: 999px;
  padding: 14px 22px 14px 16px;
  font-weight: 800;
  font-size: 15px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
  animation: bcRing 3s ease-out infinite;
  transition: background 0.2s ease, transform 0.2s ease;
}

.whatsapp-fab:hover {
  background: var(--green-dark);
  color: #fff;
  transform: translateY(-2px);
}

@media (max-width: 560px) {
  .label {
    display: none;
  }

  .whatsapp-fab {
    padding: 14px;
    right: 16px;
    bottom: 16px;
  }
}
</style>
