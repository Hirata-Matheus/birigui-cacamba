# Birigui Caçambas

## 🇬🇧 About

A Nuxt 4 website for **Birigui Caçambas**, a skip/dumpster rental company based in Birigui, SP (Brazil). The site presents the company's services — skip rental (3m and 5m), land clearing, earthmoving, and Bobcat excavation — and lets visitors book a skip directly: they choose the size, quantity, delivery/pickup dates and address, and the site opens WhatsApp with a ready-to-send formatted message to the company's number. Built with Vue 3, scroll-reveal and parallax effects, and responsive, image-optimized galleries showcasing the company's own trucks and job sites.

## 🇧🇷 Sobre

Site em Nuxt 4 para a **Birigui Caçambas**, empresa de locação de caçambas em Birigui-SP. O site apresenta os serviços da empresa — locação de caçambas (3 e 5 metros), limpeza de terrenos, terraplanagem e escavação com Bobcat — e permite que o visitante reserve uma caçamba diretamente pelo site: basta escolher o tamanho, a quantidade, as datas de entrega/retirada e o endereço; o site então abre o WhatsApp com uma mensagem já formatada e pronta para envio ao número da empresa. Construído com Vue 3, efeitos de revelação ao rolar a página e parallax, além de galerias responsivas com imagens otimizadas dos próprios caminhões e obras atendidas.

## Stack

- [Nuxt 4](https://nuxt.com) / Vue 3
- [@nuxt/image](https://image.nuxt.com) — responsive, optimized images (WebP)
- [@nuxt/fonts](https://fonts.nuxt.com) — self-hosted Archivo font
- [@vercel/analytics](https://vercel.com/docs/analytics) — Vercel Web Analytics (observability when deployed on Vercel)
- Node.js 24 (see `.nvmrc`)

> **Note:** `@vercel/analytics` declares a peer dependency on `vue-router@^4`, while Nuxt 4 ships `vue-router@^5`. Since this project doesn't use the package's Vue-specific integration, the peer conflict is harmless and is silenced project-wide via `.npmrc` (`legacy-peer-deps=true`), so a plain `npm install` works without extra flags.

## Pages

- `/` — home (hero, services, stats, photo gallery, FAQ)
- `/reservar` — skip reservation form, sends a formatted message to WhatsApp
- `/contato` — contact info, address and business hours

## Requirements

- Node.js `>= 24` (`nvm use` picks up `.nvmrc` automatically)

## Setup

```bash
npm install
```

## Development

Start the dev server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

See the [Nuxt deployment docs](https://nuxt.com/docs/getting-started/deployment) for hosting options.
