const MOBILE_QUERY = '(max-width: 900px)'
const STYLE_ID = 'responsive-portfolio-overrides'
const GALLERY_SELECTOR = '#projets .proj-expanded'

function addResponsiveStyles() {
  if (document.getElementById(STYLE_ID)) return
  const style = document.createElement('style')
  style.id = STYLE_ID
  style.textContent = `
    @media (max-width: 900px) {
      nav { padding:.7rem 1rem !important; }
      nav .mobile-menu-toggle { display:inline-flex !important; align-items:center !important; justify-content:center !important; flex:0 0 2.5rem !important; width:2.5rem !important; height:2.5rem !important; margin-left:auto !important; margin-right:.6rem !important; padding:0 !important; border:2px solid var(--ink) !important; background:var(--bg) !important; color:var(--ink) !important; font-size:1.35rem !important; line-height:1 !important; z-index:1001 !important; cursor:pointer !important; }
      nav .mobile-menu-toggle .mobile-menu-icon { display:block !important; line-height:1 !important; pointer-events:none !important; }
      nav .mobile-nav-panel { position:fixed !important; top:4.5rem !important; left:1rem !important; right:1rem !important; width:auto !important; display:none !important; flex-direction:column !important; gap:0 !important; padding:.4rem !important; background:var(--bg) !important; border:2px solid var(--ink) !important; box-shadow:6px 6px 0 var(--ink) !important; z-index:1000 !important; }
      nav .mobile-nav-panel.is-open { display:flex !important; }
      nav .mobile-nav-panel a { display:block !important; width:100% !important; padding:1rem !important; border-bottom:1px solid var(--border) !important; box-sizing:border-box !important; }
      nav .mobile-nav-panel a:last-child { border-bottom:0 !important; }
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
      .proj-expanded.has-mobile-gallery > div:first-child > div:first-child { display:none !important; }
      .proj-expanded > div:first-child { display:block !important; min-width:0 !important; }
      .proj-expanded > div:first-child > div:last-child { width:100% !important; min-width:0 !important; }
      .proj-expanded .project-gallery-mobile-row { display:grid !important; grid-template-columns:repeat(3,minmax(0,1fr)) !important; grid-auto-rows:46px !important; gap:3px !important; width:100% !important; max-width:100% !important; min-width:0 !important; height:auto !important; max-height:99px !important; overflow:hidden !important; padding:0 2px 2px !important; box-sizing:border-box !important; contain:layout paint !important; }
      .proj-expanded .project-gallery-mobile-row > a { display:block !important; width:100% !important; height:46px !important; min-height:46px !important; overflow:hidden !important; margin:0 !important; padding:0 !important; box-sizing:border-box !important; background:rgba(0,0,0,.045) !important; }
      .proj-expanded .project-gallery-mobile-row > a img { display:block !important; width:100% !important; height:46px !important; min-height:46px !important; object-fit:cover !important; object-position:center !important; }
      .project-gallery-auto { border-top:2px solid var(--ink); overflow:hidden !important; }
      .project-gallery-auto > div:first-child { padding:.35rem .65rem !important; }
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
      .proj-expanded .project-gallery-mobile-row { grid-template-columns:repeat(3,minmax(0,1fr)) !important; grid-auto-rows:44px !important; max-height:94px !important; gap:2px !important; }
      .proj-expanded .project-gallery-mobile-row > a { height:44px !important; min-height:44px !important; }
      .proj-expanded .project-gallery-mobile-row > a img { height:44px !important; min-height:44px !important; }
    }
    @media (min-width:901px) {
      nav .mobile-menu-toggle { display:none !important; }
      nav .mobile-nav-panel { display:none !important; }
    }
  `
  document.head.appendChild(style)
}

function optimizedMobileImageUrl(source: string) {
  try {
    const url = new URL(source, window.location.href)
    if (url.origin !== window.location.origin) return null
    return `/.netlify/images?url=${encodeURIComponent(url.pathname + url.search)}&w=72&h=72&fit=cover&fm=webp&q=45`
  } catch { return null }
}

function optimizeGalleryImages(gallery: HTMLElement) {
  gallery.querySelectorAll<HTMLImageElement>('img').forEach((img) => {
    if (img.dataset.mobileOptimized === 'true') return
    const original = img.getAttribute('src') || img.currentSrc || img.src
    if (!original) return
    const tiny = optimizedMobileImageUrl(original)
    if (!tiny) return
    img.dataset.mobileOriginal = original
    img.dataset.mobileOptimized = 'true'
    img.loading = 'eager'
    img.decoding = 'async'
    img.fetchPriority = 'high'
    img.width = 72
    img.height = 72
    img.removeAttribute('srcset')
    img.removeAttribute('sizes')
    img.removeAttribute('src')
    img.src = tiny
  })
}

function disableHiddenProjectThumbnail(panel: HTMLElement) {
  const thumbnail = panel.querySelector<HTMLImageElement>(':scope > div:first-child > div:first-child img')
  if (!thumbnail || panel.classList.contains('has-mobile-gallery')) return
  if (thumbnail.dataset.mobileThumbnailOptimized === 'true') return
  const original = thumbnail.getAttribute('src') || thumbnail.currentSrc || thumbnail.src
  if (!original) return
  thumbnail.dataset.mobileOriginal = original
  thumbnail.dataset.mobileThumbnailOptimized = 'true'
  thumbnail.removeAttribute('srcset')
  thumbnail.removeAttribute('sizes')
  thumbnail.loading = 'lazy'
  thumbnail.width = 360
  thumbnail.height = 270
  const tiny = optimizedMobileImageUrl(original)
  if (tiny) thumbnail.src = tiny
}

function getGalleryGrid(panel: HTMLElement) {
  const sections = Array.from(panel.children).filter((node): node is HTMLElement => node instanceof HTMLElement)
  const section = sections.find((node) => {
    const style = node.getAttribute('style') || ''
    return style.includes('border-top') && node.children[1] instanceof HTMLElement && node.children[1].querySelector('a img')
  })
  return section?.children[1] instanceof HTMLElement ? section.children[1] : null
}

function setupGallery(panel: HTMLElement) {
  const grid = getGalleryGrid(panel)
  if (!grid) {
    disableHiddenProjectThumbnail(panel)
    return
  }
  panel.classList.add('has-mobile-gallery')
  grid.classList.add('project-gallery-mobile-row')
  grid.parentElement?.classList.add('project-gallery-auto')
  optimizeGalleryImages(grid)
}

function syncGalleries() {
  if (!window.matchMedia(MOBILE_QUERY).matches) return
  document.querySelectorAll<HTMLElement>(GALLERY_SELECTOR).forEach(setupGallery)
}

function cleanupDesktop() {
  document.querySelectorAll<HTMLImageElement>('img[data-mobile-original]').forEach((img) => {
    const original = img.dataset.mobileOriginal
    if (original && img.src !== original) img.src = original
    img.removeAttribute('data-mobile-original')
    img.removeAttribute('data-mobile-optimized')
    img.removeAttribute('data-mobile-thumbnail-optimized')
  })
  document.querySelectorAll<HTMLElement>('.project-gallery-mobile-row').forEach((el) => el.classList.remove('project-gallery-mobile-row'))
  document.querySelectorAll<HTMLElement>('.has-mobile-gallery').forEach((el) => el.classList.remove('has-mobile-gallery'))
  document.querySelectorAll<HTMLElement>('.project-gallery-auto').forEach((el) => el.classList.remove('project-gallery-auto'))
}

function setupMobileMenu() {
  const nav = document.querySelector('nav')
  if (!nav) return false

  // The navigation links are the second direct child of the real nav.
  // Keep this explicit: the first child is the portfolio/logo block.
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
    toggle!.setAttribute('aria-expanded','false')
    toggle!.setAttribute('aria-label','Ouvrir le menu')
    const icon = toggle!.querySelector('.mobile-menu-icon')
    if (icon) icon.textContent = '☰'
  }
  const openMenu = () => {
    navLinks.classList.add('is-open')
    toggle!.setAttribute('aria-expanded','true')
    toggle!.setAttribute('aria-label','Fermer le menu')
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
  links.forEach((link) => link.addEventListener('click', closeMenu))
  return true
}

function boot() {
  addResponsiveStyles()
  syncGalleries()
  setupMobileMenu()
  const nav = document.querySelector('nav')
  if (nav) {
    const navObserver = new MutationObserver(() => { if (window.matchMedia(MOBILE_QUERY).matches) setupMobileMenu() })
    navObserver.observe(nav, { childList:true, subtree:false })
  }
  const projets = document.querySelector('#projets')
  if (projets) {
    const observer = new MutationObserver(() => syncGalleries())
    observer.observe(projets, { childList:true, subtree:true })
  }
  window.addEventListener('resize', () => {
    if (window.matchMedia(MOBILE_QUERY).matches) syncGalleries()
    else cleanupDesktop()
  })
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once:true })
else boot()
