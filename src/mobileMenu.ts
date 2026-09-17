const MOBILE_QUERY = '(max-width: 900px)'
const STYLE_ID = 'responsive-portfolio-overrides'

function addResponsiveStyles() {
  if (document.getElementById(STYLE_ID)) return

  const style = document.createElement('style')
  style.id = STYLE_ID
  style.textContent = `
    @media (max-width: 900px) {
      nav { padding: .7rem 1rem !important; }
      nav .mobile-menu-toggle {
        display: inline-flex !important; align-items: center !important; justify-content: center !important;
        width: 2.5rem !important; height: 2.5rem !important; margin-left: auto !important; margin-right: .6rem !important;
        padding: 0 !important; border: 2px solid var(--ink) !important; background: var(--bg) !important;
        color: var(--ink) !important; font-size: 1.35rem !important; line-height: 1 !important; z-index: 1001 !important;
      }
      nav .mobile-menu-toggle .mobile-menu-icon { display:block !important; line-height:1 !important; }
      nav .mobile-nav-panel {
        position: fixed !important; top: 4.5rem !important; left: 1rem !important; right: 1rem !important; width: auto !important;
        display: none !important; flex-direction: column !important; gap: 0 !important; padding: .4rem !important;
        background: var(--bg) !important; border: 2px solid var(--ink) !important; box-shadow: 6px 6px 0 var(--ink) !important; z-index: 1000 !important;
      }
      nav .mobile-nav-panel.is-open { display: flex !important; }
      nav .mobile-nav-panel a { display: block !important; width: 100% !important; padding: 1rem !important; border-bottom: 1px solid var(--border) !important; box-sizing: border-box !important; }
      nav .mobile-nav-panel a:last-child { border-bottom: 0 !important; }
      #hero { padding: 5rem 1rem 3rem !important; }
      #projets, #skills, #apropos, #contact { padding-left: 1rem !important; padding-right: 1rem !important; }
      #projets .proj-row-header { grid-template-columns: 2rem minmax(0,1fr) auto !important; gap: .5rem !important; }
      #projets .proj-cat, #projets .proj-year { display:none !important; }
      #apropos > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
      #hero > div { grid-template-columns: 1fr !important; gap: 2rem !important; }
      .proj-expanded > div:first-child { display: block !important; }
      .proj-expanded > div:first-child > div:first-child { display: none !important; }
      .proj-expanded > div:first-child > div:last-child { width: 100% !important; min-width: 0 !important; }
      .project-gallery-square-item { display: block !important; aspect-ratio: 1 / 1 !important; overflow: hidden !important; flex: 0 0 clamp(180px, 70vw, 300px) !important; width: clamp(180px, 70vw, 300px) !important; }
      .project-gallery-square-item img { width: 100% !important; height: 100% !important; object-fit: cover !important; display: block !important; }
      .project-gallery-auto { border-top: 2px solid var(--ink); }
      .project-gallery-auto-grid { display: flex !important; flex-wrap: nowrap !important; overflow-x: auto !important; overflow-y: hidden !important; gap: 2px !important; padding: 0 2px 2px !important; -webkit-overflow-scrolling: touch !important; scrollbar-width: thin !important; }
    }
    @media (max-width: 600px) {
      nav { padding: .55rem .7rem !important; }
      nav > .nav-logo { font-size: .68rem !important; }
      nav .mobile-menu-toggle { width: 2.25rem !important; height: 2.25rem !important; margin-right: .35rem !important; }
      nav .mobile-nav-panel { top: 3.6rem !important; left: .7rem !important; right: .7rem !important; }
      nav > div:last-child > a { display:none !important; }
      nav > div:last-child > button { min-width:2rem; padding:.3rem .35rem !important; }
      #hero > div > div:last-child { max-width:180px !important; }
      #projets .proj-row-header { min-height:6.25rem; padding:1rem !important; }
      #skills > div:last-child { grid-template-columns:1fr !important; }
    }
    @media (min-width: 901px) {
      nav .mobile-menu-toggle { display:none !important; }
      nav .mobile-nav-panel { display:none !important; }
    }
  `
  document.head.appendChild(style)
}

function makeSquare(link: HTMLAnchorElement) {
  link.classList.add('project-gallery-square-item')
}

function getProjectThumbnail(panel: HTMLElement): HTMLImageElement | null {
  const top = panel.firstElementChild
  if (!(top instanceof HTMLElement)) return null
  const topLeft = top.firstElementChild
  if (!(topLeft instanceof HTMLElement)) return null
  return topLeft.querySelector('img')
}

function getGalleryGrid(panel: HTMLElement): HTMLElement | null {
  const candidates = Array.from(panel.children).filter((child) => child instanceof HTMLElement && child.querySelectorAll('img').length > 1) as HTMLElement[]
  return candidates.length ? candidates[candidates.length - 1] : null
}

function createGallery(panel: HTMLElement, thumbnail: HTMLImageElement): HTMLElement {
  const section = document.createElement('div')
  section.className = 'project-gallery-auto'
  section.dataset.mobileOnlyGallery = 'true'
  const header = document.createElement('div')
  header.style.cssText = 'padding:.75rem 1.25rem;display:flex;align-items:center;gap:.5rem;'
  header.innerHTML = '<span style="display:inline-block;width:1.5rem;height:2px;background:var(--ink)"></span><span style="font-family:var(--font-body);font-size:.55rem;font-weight:800;letter-spacing:.15em;text-transform:uppercase;color:var(--ink)">Galerie du projet</span>'
  const grid = document.createElement('div')
  grid.className = 'project-gallery-auto-grid'
  section.append(header, grid)
  panel.appendChild(section)
  return section
}

function cleanupDesktopProjectGalleries() {
  document.querySelectorAll<HTMLElement>('[data-mobile-only-gallery="true"]').forEach((section) => section.remove())
  document.querySelectorAll<HTMLAnchorElement>('.project-gallery-square-item').forEach((link) => link.classList.remove('project-gallery-square-item'))
  document.querySelectorAll<HTMLAnchorElement>('[data-mobile-added-thumbnail="true"]').forEach((link) => link.remove())
}

function ensureProjectGalleries() {
  if (!window.matchMedia(MOBILE_QUERY).matches) {
    cleanupDesktopProjectGalleries()
    return
  }
  const panels = document.querySelectorAll<HTMLElement>('#projets .proj-expanded')
  panels.forEach((panel) => {
    const thumbnail = getProjectThumbnail(panel)
    if (!thumbnail?.src) return
    let gallery = getGalleryGrid(panel)
    if (!gallery) gallery = createGallery(panel, thumbnail).querySelector('.project-gallery-auto-grid') as HTMLElement
    if (!gallery) return
    gallery.classList.add('project-gallery-auto-grid')
    const existingLinks = Array.from(gallery.querySelectorAll<HTMLAnchorElement>('a'))
    existingLinks.forEach(makeSquare)
    const alreadyContainsThumbnail = existingLinks.some((link) => link.querySelector('img')?.src === thumbnail.src)
    if (!alreadyContainsThumbnail) {
      const link = document.createElement('a')
      link.href = thumbnail.src
      link.target = '_blank'
      link.rel = 'noopener noreferrer'
      link.className = 'clickable project-gallery-square-item'
      link.dataset.mobileAddedThumbnail = 'true'
      const image = document.createElement('img')
      image.src = thumbnail.src
      image.alt = thumbnail.alt || 'Projet'
      image.className = 'tag-hover'
      link.appendChild(image)
      gallery.insertBefore(link, gallery.firstChild)
    }
  })
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
    if (!window.matchMedia(MOBILE_QUERY).matches) return
    navLinks.classList.contains('is-open') ? closeMenu() : openMenu()
  })
  links.forEach((link) => link.addEventListener('click', closeMenu))
  document.addEventListener('click', (event) => {
    if (window.matchMedia(MOBILE_QUERY).matches && !nav.contains(event.target as Node)) closeMenu()
  })
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu() })
  window.addEventListener('resize', () => {
    if (!window.matchMedia(MOBILE_QUERY).matches) closeMenu()
    scheduleGallerySync()
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

  const galleryObserver = new MutationObserver(() => scheduleGallerySync())
  galleryObserver.observe(document.body, { childList: true, subtree: true })

  if (setupMobileMenu()) return
  const observer = new MutationObserver(() => {
    if (setupMobileMenu()) observer.disconnect()
  })
  observer.observe(document.body, { childList: true, subtree: true })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootMobileMenu, { once: true })
} else {
  bootMobileMenu()
}
