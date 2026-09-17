export default defineNuxtPlugin((nuxtApp) => {
  let io: IntersectionObserver | null = null

  function showEl(el: HTMLElement) {
    if (el.dataset.bcQueued) return
    el.dataset.bcQueued = '1'
    const delay = Number.parseInt(el.dataset.revealDelay || '0', 10)
    setTimeout(() => el.classList.add('is-shown'), delay)
  }

  function ensureObserver() {
    if (io) return io
    io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          showEl(entry.target as HTMLElement)
          io?.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    )
    return io
  }

  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding) {
      el.setAttribute('data-reveal', '')
      if (binding.value) el.dataset.revealDelay = String(binding.value)
      ensureObserver().observe(el)
      const safety = window.setTimeout(() => showEl(el), 2500)
      ;(el as any).__revealSafety = safety
    },
    unmounted(el: HTMLElement) {
      io?.unobserve(el)
      clearTimeout((el as any).__revealSafety)
    }
  })

  type ParallaxEntry = { el: HTMLElement; speed: number }
  const parallaxEls = new Set<ParallaxEntry>()
  let ticking = false

  function updateParallax() {
    const h = window.innerHeight || 800
    parallaxEls.forEach(({ el, speed }) => {
      const parent = el.parentElement
      if (!parent) return
      const r = parent.getBoundingClientRect()
      if (r.bottom < -200 || r.top > h + 200) return
      const mid = r.top + r.height / 2 - h / 2
      el.style.transform = `translate3d(0, ${(-mid * speed).toFixed(1)}px, 0)`
    })
    ticking = false
  }

  function onScroll() {
    if (ticking) return
    ticking = true
    requestAnimationFrame(updateParallax)
  }

  nuxtApp.vueApp.directive('parallax', {
    mounted(el: HTMLElement, binding) {
      const speed = typeof binding.value === 'number' ? binding.value : 0.15
      const entry: ParallaxEntry = { el, speed }
      parallaxEls.add(entry)
      ;(el as any).__parallaxEntry = entry
      if (parallaxEls.size === 1) {
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)
      }
      updateParallax()
    },
    unmounted(el: HTMLElement) {
      const entry = (el as any).__parallaxEntry as ParallaxEntry | undefined
      if (entry) parallaxEls.delete(entry)
      if (parallaxEls.size === 0) {
        window.removeEventListener('scroll', onScroll)
        window.removeEventListener('resize', onScroll)
      }
    }
  })
})
