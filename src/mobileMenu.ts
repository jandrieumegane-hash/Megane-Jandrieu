const MOBILE_QUERY = '(max-width: 900px)'
const STYLE_ID = 'responsive-portfolio-overrides'

function addResponsiveStyles() {
  if (document.getElementById(STYLE_ID)) return
  const style = document.createElement('style')
  style.id = STYLE_ID
  style.textContent = `
    @media (max-width: 900px) {
      nav { padding:.7rem 1rem !important; }
      nav .mobile-menu-toggle {
        display:inline-flex !important; align-items:center !important; justify-content:center !important;
        flex:0 0 2.5rem !important; width:2.5rem !important; height:2.5rem !important;
        margin-left:auto !important; margin-right:.6rem !important; padding:0 !important;
        border:2px solid var(--ink) !important; background:var(--bg) !important; color:var(--ink) !important;
        font-size:1.35rem !important; line-height:1 !important; z-index:10001 !important;
        position:relative !important; cursor:pointer !important; pointer-events:auto !important;
      }
      nav .mobile-menu-toggle .mobile-menu-icon { display:block !important; pointer-events:none !important; }
      nav .mobile-nav-panel {
        position:fixed !important; top:4.5rem !important; left:1rem !important; right:1rem !important;
        width:auto !important; display:none !important; flex-direction:column !important; gap:0 !important;
        padding:.4rem !important; background:var(--bg) !important; border:2px solid var(--ink) !important;
        box-shadow:6px 6px 0 var(--ink) !important; z-index:10000 !important;
      }
      nav .mobile-nav-panel.is-open { display:flex !important; }
      nav .mobile-nav-panel a {
        display:block !important; width:100% !important; padding:1rem !important;
        border-bottom:1px solid var(--border) !important; box-sizing:border-box !important;
      }
      nav .mobile-nav-panel a:last-child { border-bottom:0 !important; }

      .project-gallery-desktop-only { display:none !important; }
      .project-gallery-mobile-link {
        display:flex !important; align-items:center !important; justify-content:center !important;
        margin:0 !important; padding:.8rem 1rem !important; border-top:2px solid var(--ink) !important;
        font-family:var(--font-display) !important; font-size:.72rem !important; font-weight:800 !important;
        letter-spacing:.02em !important; text-transform:uppercase !important; color:var(--ink) !important;
        text-decoration:none !important; background:var(--bg) !important;
      }

      #hero { padding:5rem 1rem 3rem !important; }
      #projets,#skills,#apropos,#contact { padding-left:1rem !important; padding-right:1rem !important; }
      #projets > div:first-child { min-width:0 !important; width:100% !important; }
      #projets > div:first-child > div:first-child { min-width:0 !important; max-width:100% !important; flex-wrap:wrap !important; gap:.15rem .65rem !important; }
      #projets > div:first-child h2,#projets > div:first-child h2 + span { font-size:clamp(1.55rem,8vw,2.15rem) !important; line-height:.95 !important; white-space:normal !important; overflow-wrap:anywhere !important; }
      #projets .proj-row-header { grid-template-columns:2rem minmax(0,1fr) auto !important; gap:.5rem !important; min-width:0 !important; }
      #projets .proj-row-header > div { min-width:0 !important; }
      #projets .proj-cat,#projets .proj-year { display:none !important; }
      #apropos > div { grid-template-columns:1fr !important; gap:3rem !important; }
      #hero > div { grid-template-columns:1fr !important; gap:2rem !important; }
      .proj-expanded > div:first-child { display:block !important; min-width:0 !important; }
      .proj-expanded > div:first-child > div:last-child { width:100% !important; min-width:0 !important; }
      .proj-expanded:not(.has-mobile-gallery) > div:first-child > div:first-child { width:100% !important; min-height:220px !important; aspect-ratio:4/3 !important; overflow:hidden !important; }
      .proj-expanded:not(.has-mobile-gallery) > div:first-child > div:first-child img { width:100% !important; height:100% !important; display:block !important; object-fit:cover !important; }
    }
    @media (max-width:600px) {
      nav { padding:.55rem .7rem !important; }
      nav > .nav-logo { font-size:.68rem !important; }
      nav .mobile-menu-toggle { flex-basis:2.25rem !important; width:2.25rem !important; height:2.25rem !important; margin-right:.35rem !important; }
      nav .mobile-nav-panel { top:3.6rem !important; left:.7rem !important; right:.7rem !important; }
      nav > div:last-child > a { display:none !important; }
      nav > div:last-child > button { min-width:2rem; padding:.3rem .35rem !important; }
      #hero > div > div:last-child { max-width:180px !important; }
      #projets .proj-row-header { min-height:6.25rem; padding:1rem !important; }
      #skills > div:last-child { grid-template-columns:1fr !important; }
      #projets > div:first-child h2,#projets > div:first-child h2 + span { font-size:clamp(1.5rem,7.8vw,2rem) !important; }
    }
    @media (min-width:901px) {
      nav .mobile-menu-toggle, nav .mobile-nav-panel, .project-gallery-mobile-link { display:none !important; }
      .project-gallery-desktop-only { display:block !important; }
    }
  `
  document.head.appendChild(style)
}

function setupMobileMenu() {
  const nav = document.querySelector('nav')
  if (!nav) return false
  const navLinks = nav.children[1]
  if (!(navLinks instanceof HTMLElement)) return false
  const links = Array.from(navLinks.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'))
  if (!links.length) return false

  navLinks.classList.add('mobile-nav-panel')
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

  if (toggle.dataset.mobileMenuReady === 'true') return true
  toggle.dataset.mobileMenuReady = 'true'

  const closeMenu = () => {
    navLinks.classList.remove('is-open')
    toggle!.setAttribute('aria-expanded', 'false')
    toggle!.setAttribute('aria-label', 'Ouvrir le menu')
    const icon = toggle!.querySelector('.mobile-menu-icon')
    if (icon) icon.textContent = '☰'
  }
  const openMenu = () => {
    navLinks.classList.add('is-open')
    toggle!.setAttribute('aria-expanded', 'true')
    toggle!.setAttribute('aria-label', 'Fermer le menu')
    const icon = toggle!.querySelector('.mobile-menu-icon')
    if (icon) icon.textContent = '×'
  }

  toggle.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()
    if (window.matchMedia(MOBILE_QUERY).matches) {
      navLinks.classList.contains('is-open') ? closeMenu() : openMenu()
    }
  })
  links.forEach(link => link.addEventListener('click', closeMenu))
  return true
}

function syncMobileGalleryLinks() {
  document.querySelectorAll<HTMLElement>('.project-gallery-mobile-link').forEach(link => {
    link.style.display = window.matchMedia(MOBILE_QUERY).matches ? 'flex' : 'none'
  })
}

function boot() {
  addResponsiveStyles()
  setupMobileMenu()
  syncMobileGalleryLinks()

  const nav = document.querySelector('nav')
  if (nav) {
    const observer = new MutationObserver(() => setupMobileMenu())
    observer.observe(nav, { childList:true, subtree:false })
  }

  const root = document.getElementById('root')
  if (root) {
    const observer = new MutationObserver(() => {
      setupMobileMenu()
      syncMobileGalleryLinks()
    })
    observer.observe(root, { childList:true, subtree:true })
  }

  window.addEventListener('resize', () => {
    if (!window.matchMedia(MOBILE_QUERY).matches) {
      const panel = document.querySelector<HTMLElement>('.mobile-nav-panel')
      panel?.classList.remove('is-open')
    }
    syncMobileGalleryLinks()
  })
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once:true })
else boot()
