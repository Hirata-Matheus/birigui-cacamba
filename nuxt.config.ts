// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/fonts', '@nuxt/image', '@vercel/analytics/nuxt'],

  css: ['~/assets/css/main.css'],

  fonts: {
    families: [
      { name: 'Archivo', provider: 'google', weights: [400, 500, 600, 700, 800] }
    ]
  },

  image: {
    quality: 78,
    format: ['webp'],
    domains: ['images.unsplash.com']
  },

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Birigui Caçambas - Locação de Caçambas - (18) 3644-7800',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'description',
          content:
            'Locações de caçambas para entulhos, serviço de terraplanagem, venda de terra e escavadeira Bobcat para abrir buracos para instalação de piscinas em Birigui-SP.'
        },
        { name: 'theme-color', content: '#141714' }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/images/logo-mascote.png' }]
    }
  }
})
