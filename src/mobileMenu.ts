const MOBILE_QUERY = '(max-width: 900px)'
const STYLE_ID = 'responsive-portfolio-overrides'

function addResponsiveStyles() {
  if (document.getElementById(STYLE_ID)) return

  const style = document.createElement('style')
  style.id = STYLE_ID
  style.textContent = `
    @media (max-width: 900px) {
      nav { padding: .7rem 1rem !important; }
      nav .mobile-menu-toggle { display:inline-flex !important; align-items:center !important; justify-content:center !important; width:2.5rem !important; height:2.5rem !important; margin-left:auto !important; margin-right:.6rem !important; padding:0 !important; border:2px solid var(--ink) !important; background:var(--bg) !important; color:var(--ink) !important; font-size:1.35rem !important; line-height:1 !important; z-index:1001 !important; }
      nav .mobile-menu-toggle .mobile-menu-icon { display:block !important; line-height:1 !important; }
      nav .mobile-nav-panel { position:fixed !important; top:4.5rem !important; left:1rem !important; right:1rem !important; width:auto !important; display:none !important; flex-direction:column !important; gap:0 !important; padding:.4rem !important; background:var(--bg) !important; border:2px solid var(--ink) !important; box-shadow:6px 6px 0 var(--ink) !important; z-index:1000 !important; }
      nav .mobile-nav-panel.is-open { display:flex !important; }
      nav .mobile-nav-panel a { display:block !important; width:100% !important; padding:1rem !important; border-bottom:1px solid var(--border) !important; box-sizing:border-box !important; }
      nav .mobile-nav-panel a:last-child { border-bottom:0 !important; }
      #hero { padding:5rem 1rem 3rem !important; }
      #projets, #skills, #apropos, #contact { padding-left:1rem !important; padding-right:1rem !important; }
      #projets .proj-row-header { grid-template-columns:2rem minmax(0,1fr) auto !important; gap:.5rem !important; }
      #projets .proj-cat, #projets .proj-year { display:none !important; }
      #apropos > div { grid-template-columns:1fr !important; gap:3rem !important; }
      #hero > div { grid-template-columns:1fr !important; gap:2rem !important; }

      /* Only projects that really have a gallery lose the large project thumbnail. */
      .proj-expanded.has-mobile-gallery > div:first-child > div:first-child { display:none !important; }
      .proj-expanded > div:first-child { display:block !important; }
      .proj-expanded > div:first-child > div:last-child { width:100% !important; min-width:0 !important; }
      .proj-expanded > div:first-child > div:last-child > div:first-child { min-width:0 !important; }

      /* Mobile gallery: fixed 3-column cells reserve their space before images load. */
      .proj-expanded .project-gallery-mobile-row {
        display:grid !important;
        grid-template-columns:repeat(3, minmax(0, 1fr)) !important;
        grid-auto-rows:auto !important;
        gap:4px !important;
        width:100% !important;
        max-width:100% !important;
        min-width:0 !important;
        overflow:visible !important;
        padding:0 2px 5px !important;
        box-sizing:border-box !important;
        contain:layout paint !important;
      }
      .proj-expanded .project-gallery-mobile-row > a {
        display:block !important;
        width:100% !important;
        min-width:0 !important;
        max-width:none !important;
        height:auto !important;
        aspect-ratio:1 / 1 !important;
        margin:0 !important;
        padding:0 !important;
        overflow:hidden !important;
        box-sizing:border-box !important;
      }
      .proj-expanded .project-gallery-mobile-row > a img {
        display:block !important;
        width:100% !important;
        height:100% !important;
        min-width:0 !important;
        max-width:none !important;
        object-fit:cover !important;
      }
      .project-gallery-auto { border-top:2px solid var(--ink); overflow:visible !important; }
      .project-gallery-auto > div:first-child { padding:.45rem .75rem !important; }
    }
    @media (max-width:600px) {
      nav { padding:.55rem .7rem !important; }
      nav > .nav-logo { font-size:.68rem !important; }
      nav .mobile-menu-toggle { width:2.25rem !important; height:2.25rem !important; margin-right:.35rem !important; }
      nav .mobile-nav-panel { top:3.6rem !important; left:.7rem !important; right:.7rem !important; }
      nav > div:last-child > a { display:none !important; }
      nav > div:last-child > button { min-width:2rem; padding:.3rem .35rem !important; }
      #hero > div > div:last-child { max-width:180px !important; }
      #projets .proj-row-header { min-height:6.25rem; padding:1rem !important; }
      #skills > div:last-child { grid-template-columns:1fr !important; }
      .proj-expanded .project-gallery-mobile-row { grid-template-columns:repeat(3, minmax(0, 1fr)) !important; gap:3px !important; }
    }
    @media (min-width:901px) {
      nav .mobile-menu-toggle { display:none !important; }
      nav .mobile-nav-panel { display:none !important; }
    }
  `
  document.head.appendChild(style)
}

function getRealGalleryGrid(panel: HTMLElement): HTMLElement | null {
  const sections = Array.from(panel.children).filter((child) => child instanceof HTMLElement) as HTMLElement[]

  for (const section of sections) {
    const children = Array.from(section.children).filter((child) => child instanceof HTMLElement) as HTMLElement[]
    for (const child of children) {
      const imageLinks = Array.from(child.children).filter((node) => {
        return node instanceof HTMLAnchorElement && !!node.querySelector('img')
      })
      if (imageLinks.length > 0) return child
    }
  }

  return null
}

function setupGalleryRow(panel: HTMLElement) {
  const galleryGrid = getRealGalleryGrid(panel)
  if (!galleryGrid) {
    panel.classList.remove('has-mobile-gallery')
    return
  }

  panel.classList.add('has-mobile-gallery')
  galleryGrid.classList.add('project-gallery-mobile-row')
}

function cleanupDesktopMobileGalleryClasses() {
  document.querySelectorAll<HTMLElement>('.project-gallery-mobile-row').forEach((gallery) => {
    gallery.classList.remove('project-gallery-mobile-row')
  })
  document.querySelectorAll<HTMLElement>('.has-mobile-gallery').forEach((panel) => {
    panel.classList.remove('has-mobile-gallery')
  })
}

function ensureProjectGalleries() {
  if (!window.matchMedia(MOBILE_QUERY).matches) {
    cleanupDesktopMobileGalleryClasses()
    return
  }

  document.querySelectorAll<HTMLElement>('#projets .proj-expanded').forEach(setupGalleryRow)
}

function setupMobileMenu() {
  const nav = document.querySelector('nav')
  if (!nav) return false
  const navLinks = nav.children[1]
  if (!(navLinks instanceof HTMLElement)) return false
  const links = Array.from(navLinks.querySelectorAll<HTMLAnchorElement>('a'))
  if (!links.length) return false
  addResponsiveStyles()
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
    toggle!.setAttribute('aria-expanded','false')
    toggle!.setAttribute('aria-label','Ouvrir le menu')
    const icon=toggle!.querySelector('.mobile-menu-icon')
    if(icon) icon.textContent='☰'
  }
  const openMenu = () => {
    navLinks.classList.add('is-open')
    toggle!.setAttribute('aria-expanded','true')
    toggle!.setAttribute('aria-label','Fermer le menu')
    const icon=toggle!.querySelector('.mobile-menu-icon')
    if(icon) icon.textContent='×'
  }
  toggle.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()
    if (!window.matchMedia(MOBILE_QUERY).matches) return
    navLinks.classList.contains('is-open') ? closeMenu() : openMenu()
  })
  links.forEach((link) => link.addEventListener('click', closeMenu))
  document.addEventListener('click', (event) => {
    if (window.matchMedia(MOBILE_QUERY).matches && !nav.contains(event.target as Node)) closeMenu()
  })
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu() })
  window.addEventListener('resize', () => {
    if (!window.matchMedia(MOBILE_QUERY).matches) {
      closeMenu()
      cleanupDesktopMobileGalleryClasses()
    } else {
      ensureProjectGalleries()
    }
  })
  return true
}

let gallerySyncScheduled = false
function scheduleGallerySync() {
  if (gallerySyncScheduled) return
  gallerySyncScheduled = true
  window.requestAnimationFrame(() => {
    gallerySyncScheduled = false
    ensureProjectGalleries()
  })
}

function bootMobileMenu() {
  addResponsiveStyles()
  ensureProjectGalleries()
  if (setupMobileMenu()) return
  const observer = new MutationObserver(() => {
    if (setupMobileMenu()) {
      observer.disconnect()
      scheduleGallerySync()
    }
  })
  observer.observe(document.body, { childList:true, subtree:true })
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bootMobileMenu, { once:true })
else bootMobileMenu()
