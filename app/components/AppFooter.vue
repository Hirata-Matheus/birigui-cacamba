<template>
  <footer class="footer">
    <div class="footer-grid container">
      <div>
        <div class="footer-brand">
          <NuxtImg src="/images/logo-mascote.png" alt="" width="38" height="38" format="webp" />
          <span>Birigui Caçambas</span>
        </div>
        <p class="footer-text">
          Locação de caçambas para entulhos, limpeza de terrenos, terraplanagem, escavadeira Bobcat e venda de terra.
        </p>
      </div>
      <div>
        <div class="footer-label">Contato</div>
        <div class="footer-links">
          <a href="tel:+551836447800">(18) 3644-7800</a>
          <a href="https://wa.me/5518981560019" target="_blank" rel="noopener">WhatsApp (18) 98156-0019</a>
        </div>
      </div>
      <div>
        <div class="footer-label">Endereço</div>
        <div class="footer-text-light">Rua Fernando Castilho, 1838<br />Jandaia 2, Birigui-SP</div>
      </div>
      <div>
        <div class="footer-label">Horário</div>
        <div class="footer-text-light">Seg a sex, 7h às 17h30<br />Sáb, 7h às 12h</div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container footer-bottom-inner">© 2026 Birigui Caçambas</div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--surface-soft);
  border-top: 1px solid var(--border);
  border-radius: 44px 44px 0 0;
  margin-top: 8px;
}

.footer-grid {
  padding: 56px 36px 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 36px;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 11px;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 17px;
  letter-spacing: -0.02em;
}

.footer-brand img {
  width: 38px;
  height: 38px;
  object-fit: contain;
}

.footer-text {
  color: var(--text-dim);
  font-size: 15px;
  line-height: 1.65;
  margin: 18px 0 0;
  max-width: 34ch;
}

.footer-label {
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-faint);
  margin-bottom: 14px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 16px;
}

.footer-links a {
  color: var(--text);
  font-weight: 700;
}

.footer-links a:hover {
  color: var(--orange-light);
}

.footer-text-light {
  color: var(--text-muted);
  font-size: 16px;
  line-height: 1.6;
}

.footer-bottom {
  border-top: 1px solid var(--border);
}

.footer-bottom-inner {
  padding: 20px 36px;
  color: #6d786d;
  font-size: 13px;
}

@media (max-width: 640px) {
  .footer-grid {
    padding: 44px 24px 32px;
  }

  .footer-bottom-inner {
    padding: 18px 24px;
  }
}
</style>
