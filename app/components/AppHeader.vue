<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="header-wrap">
    <div class="header-pill container">
      <NuxtLink to="/" class="brand">
        <NuxtImg
          src="/images/logo-mascote.png"
          alt="Birigui Caçambas"
          width="40"
          height="40"
          class="brand-logo"
          format="webp"
        />
        <span class="brand-name">Birigui Caçambas</span>
      </NuxtLink>

      <nav class="nav">
        <NuxtLink to="/" class="nav-link" :class="{ active: route.path === '/' }">Início</NuxtLink>
        <NuxtLink to="/reservar" class="nav-link" :class="{ active: route.path === '/reservar' }">Reservar</NuxtLink>
        <NuxtLink to="/contato" class="nav-link" :class="{ active: route.path === '/contato' }">Contato</NuxtLink>
        <a href="tel:+551836447800" class="nav-phone">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>
          <span>(18) 3644-7800</span>
        </a>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.header-wrap {
  position: sticky;
  top: 0;
  z-index: 70;
  padding: 14px 16px;
}

.header-pill {
  background: var(--surface-soft);
  backdrop-filter: blur(14px);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 10px 10px 10px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
}

.brand {
  display: flex;
  align-items: center;
  gap: 11px;
  flex: 1;
  min-width: 0;
  color: var(--text);
}

.brand:hover {
  color: var(--text);
}

.brand-logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
  flex: none;
  animation: bcFloat 6s ease-in-out infinite;
}

.brand-name {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 17px;
  letter-spacing: -0.02em;
  white-space: nowrap;
}

.nav {
  display: flex;
  align-items: center;
  gap: 6px;
}

.nav-link {
  background: transparent;
  border: 0;
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
  padding: 11px 16px;
  border-radius: 999px;
  color: var(--text-dim);
  white-space: nowrap;
}

.nav-link:hover {
  color: var(--text);
}

.nav-link.active {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text);
}

.nav-phone {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--green);
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  padding: 12px 20px;
  border-radius: 999px;
  white-space: nowrap;
  transition: background 0.2s ease, transform 0.2s ease;
}

.nav-phone:hover {
  background: var(--green-dark);
  color: #fff;
  transform: translateY(-1px);
}

@media (max-width: 720px) {
  .brand-name {
    display: none;
  }

  .nav-link {
    padding: 10px 12px;
    font-size: 14px;
  }

  .nav-phone span {
    display: none;
  }

  .nav-phone {
    padding: 12px;
  }
}

@media (max-width: 420px) {
  .header-pill {
    gap: 8px;
    padding: 8px 8px 8px 12px;
  }

  .nav {
    gap: 2px;
  }

  .nav-link {
    padding: 9px 9px;
    font-size: 13px;
  }
}
</style>
