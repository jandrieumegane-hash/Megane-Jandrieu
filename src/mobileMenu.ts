const MOBILE_QUERY = '(max-width: 600px)'

function setupMobileMenu() {
  const nav = document.querySelector('nav')
  if (!nav) return

  const navLinks = nav.children[1]
  if (!(navLinks instanceof HTMLElement)) return

  const links = Array.from(navLinks.querySelectorAll('a'))
  if (!links.length) return

  const toggle = links[0]
  toggle.classList.add('mobile-menu-toggle')
  navLinks.classList.add('mobile-nav-links', 'mobile-nav-panel')

  if (toggle.dataset.mobileMenuReady === 'true') return
  toggle.dataset.mobileMenuReady = 'true'
  toggle.setAttribute('aria-label', 'Ouvrir le menu')
  toggle.setAttribute('aria-expanded', 'false')

  const closeMenu = () => {
    navLinks.classList.remove('is-open')
    toggle.setAttribute('aria-expanded', 'false')
    toggle.setAttribute('aria-label', 'Ouvrir le menu')
  }

  const openMenu = () => {
    navLinks.classList.add('is-open')
    toggle.setAttribute('aria-expanded', 'true')
    toggle.setAttribute('aria-label', 'Fermer le menu')
  }

  toggle.addEventListener('click', (event) => {
    if (!window.matchMedia(MOBILE_QUERY).matches) return
    event.preventDefault()
    navLinks.classList.contains('is-open') ? closeMenu() : openMenu()
  })

  links.slice(1).forEach((link) => {
    link.addEventListener('click', () => {
      if (window.matchMedia(MOBILE_QUERY).matches) closeMenu()
    })
  })

  document.addEventListener('click', (event) => {
    if (!window.matchMedia(MOBILE_QUERY).matches) return
    if (!nav.contains(event.target as Node)) closeMenu()
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu()
  })

  window.addEventListener('resize', () => {
    if (!window.matchMedia(MOBILE_QUERY).matches) closeMenu()
  })
}

function bootMobileMenu() {
  setupMobileMenu()
  if (!document.querySelector('nav')) {
    const observer = new MutationObserver(() => {
      if (document.querySelector('nav')) {
        setupMobileMenu()
        observer.disconnect()
      }
    })
    observer.observe(document.body, { childList: true, subtree: true })
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootMobileMenu, { once: true })
} else {
  bootMobileMenu()
}
