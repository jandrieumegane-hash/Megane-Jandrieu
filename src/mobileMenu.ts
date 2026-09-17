const MOBILE_QUERY = '(max-width: 900px)'
const STYLE_ID = 'responsive-portfolio-overrides'

function addResponsiveStyles() {
  if (document.getElementById(STYLE_ID)) return

  const style = document.createElement('style')
  style.id = STYLE_ID
  style.textContent = `
    /* Responsive navigation */
    nav { position: fixed !important; }
    .mobile-menu-toggle {
      display: none;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      border: 2px solid var(--ink);
      background: var(--bg);
      color: var(--ink);
      font: 700 1.1rem/1 var(--font-body);
      cursor: pointer;
      z-index: 3;
    }
    .mobile-menu-icon { display: block; transition: transform .2s ease; }
    .mobile-menu-toggle[aria-expanded="true"] .mobile-menu-icon { transform: rotate(90deg); }
    .mobile-nav-panel { z-index: 2; }

    /* Project previews stay readable instead of filling the viewport */
    .proj-expanded > div:first-child > div:first-child {
      min-width: 0;
      max-height: 320px;
      overflow: hidden;
    }
    .proj-expanded > div:first-child > div:first-child img {
      width: 100% !important;
      height: 320px !important;
      min-height: 0 !important;
      object-fit: cover !important;
      object-position: center;
    }
    .proj-expanded video { max-height: 560px; object-fit: contain; background: #111; }
    .proj-expanded img { max-width: 100%; }

    @media (max-width: 900px) {
      nav { padding: .7rem 1rem !important; }
      nav .mobile-menu-toggle { display: inline-flex !important; }
      nav .mobile-nav-links {
        display: none !important;
        position: absolute !important;
        top: calc(100% + .5rem) !important;
        right: 1rem !important;
        width: min(19rem, calc(100vw - 2rem)) !important;
        flex-direction: column !important;
        gap: 0 !important;
        padding: .35rem !important;
        background: var(--bg) !important;
        border: 2px solid var(--ink) !important;
        box-shadow: 5px 5px 0 var(--ink);
      }
      nav .mobile-nav-links.is-open { display: flex !important; }
      nav .mobile-nav-links a {
        display: flex !important;
        width: 100% !important;
        padding: .9rem .8rem !important;
        border-bottom: 1px solid var(--border);
        font-size: .68rem !important;
      }
      nav .mobile-nav-links a:last-child { border-bottom: 0; }
      nav > div:last-child { gap: .25rem !important; }
      nav > div:last-child > a { padding: .45rem .65rem !important; font-size: .58rem !important; }

      #hero > div { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
      #hero > div > div:last-child { justify-self: center; max-width: 220px !important; }
      #projets, #skills, #apropos { padding: 4rem 1.25rem !important; }
      #projets .proj-row-header { grid-template-columns: 2rem minmax(0, 1fr) auto !important; gap: .75rem !important; }
      #projets .proj-cat, #projets .proj-year { display: none !important; }
      .proj-expanded > div:first-child { grid-template-columns: 1fr !important; }
      .proj-expanded > div:first-child > div:first-child {
        max-height: 190px !important;
        border-right: 0 !important;
        border-bottom: 2px solid var(--ink);
      }
      .proj-expanded > div:first-child > div:first-child img { height: 190px !important; }
      .proj-expanded > div:first-child > div:last-child { min-width: 0; }
      .proj-expanded > div:first-child > div:last-child > div:first-child { grid-template-columns: 1fr !important; }
      .proj-expanded > div:first-child > div:last-child > div:first-child > div { border-right: 0 !important; }
      #apropos > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
      #apropos > div > div:first-child { max-width: 190px !important; justify-self: center; }
    }

    @media (max-width: 600px) {
      nav { padding: .55rem .7rem !important; }
      nav > .nav-logo { max-width: 45vw; font-size: .68rem !important; }
      nav > div:last-child > button { min-width: 2rem; padding: .3rem .35rem !important; }
      nav > div:last-child > a { display: none !important; }
      nav .mobile-nav-links { right: .7rem !important; width: calc(100vw - 1.4rem) !important; }
      #hero { padding: 5rem 1rem 3rem !important; }
      #projets, #skills, #apropos, #contact { padding-left: 1rem !important; padding-right: 1rem !important; }
      .proj-expanded > div:first-child > div:first-child { max-height: 150px !important; }
      .proj-expanded > div:first-child > div:first-child img { height: 150px !important; }
      .proj-expanded [style*="repeat(auto-fill"] { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 2px !important; }
      .proj-expanded [style*="repeat(auto-fill"] a { aspect-ratio: 1 / 1 !important; }
      .proj-expanded [style*="repeat(auto-fill"] img { height: 100% !important; object-fit: cover !important; }
      .proj-expanded video { max-height: 220px; }
    }
  `
  document.head.appendChild(style)
}

function setupMobileMenu() {
  const nav = document.querySelector('nav')
  if (!nav) return

  const navLinks = nav.children[1]
  if (!(navLinks instanceof HTMLElement)) return

  const links = Array.from(navLinks.querySelectorAll<HTMLAnchorElement>('a'))
  if (!links.length) return

  addResponsiveStyles()
  navLinks.classList.add('mobile-nav-links', 'mobile-nav-panel')
  navLinks.id = 'mobile-navigation'

  let toggle = nav.querySelector<HTMLButtonElement>('.mobile-menu-toggle')
  if (!toggle) {
    toggle = document.createElement('button')
    toggle.type = 'button'
    toggle.className = 'clickable mobile-menu-toggle'
    toggle.setAttribute('aria-controls', navLinks.id)
    toggle.setAttribute('aria-expanded', 'false')
    toggle.setAttribute('aria-label', 'Ouvrir le menu')
    toggle.innerHTML = '<span class="mobile-menu-icon" aria-hidden="true">☰</span>'
    nav.insertBefore(toggle, navLinks)
  }

  if (toggle.dataset.mobileMenuReady === 'true') return
  toggle.dataset.mobileMenuReady = 'true'

  const closeMenu = () => {
    navLinks.classList.remove('is-open')
    toggle!.setAttribute('aria-expanded', 'false')
    toggle!.setAttribute('aria-label', 'Ouvrir le menu')
  }

  const openMenu = () => {
    navLinks.classList.add('is-open')
    toggle!.setAttribute('aria-expanded', 'true')
    toggle!.setAttribute('aria-label', 'Fermer le menu')
  }

  toggle.addEventListener('click', (event) => {
    if (!window.matchMedia(MOBILE_QUERY).matches) return
    event.preventDefault()
    event.stopPropagation()
    navLinks.classList.contains('is-open') ? closeMenu() : openMenu()
  })

  links.forEach((link) => link.addEventListener('click', closeMenu))
  document.addEventListener('click', (event) => {
    if (window.matchMedia(MOBILE_QUERY).matches && !nav.contains(event.target as Node)) closeMenu()
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
