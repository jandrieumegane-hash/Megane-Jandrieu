import { useState, useEffect, useRef, createContext, useContext } from 'react'
import meganePoto from './imports/c39eaca6-45ea-46f3-8079-8dbba35a957c.jpeg'
import { type Lang, makeT, type TKey } from './i18n'
import cvPdfFr from './imports/CV_MeganeJandrieu_FR__2_.pdf'
import cvPdfIt from './imports/CV_-_IT.pdf'

import olivaLogo from './imports/Logo.png'
import olivaMockups from './imports/Mockups.png'
import olivaCarousel from './imports/Carousel.png'
import olivaCarousel1 from './imports/Carousel_Menu.png'
import olivaCarousel2 from './imports/Carousel_Menu__2_.png'
import olivaCarousel3 from './imports/Carousel_Menu__3_.png'
import olivaReel from './imports/Reel_Cover.png'
import altrovePdf from './imports/ALTROVE_Magazine_Lapponia__1_.pdf'
import altroveThumbnail from './imports/image.png'
import altroveGallery1 from './imports/ChatGPT_Image_Aug_14__2026__05_53_11_PM-1.png'
import altroveLockupChiaro from './imports/ALTROVE_Lockup_Chiaro.png'
import altroveLockupScuro from './imports/ALTROVE_Lockup_Scuro.png'
import altroveAppIcon from './imports/ALTROVE_AppIcon.png'
import altroveMonogramma from './imports/ALTROVE_Sistema_Monogramma_Preview.png'
import olivaVideo from './imports/Vid_o_de_lancement_d_une_marque_de_caf__pour_Instagram__grains_de_caf__torr_fi_s__tasse_fumante__ambiance_chaleureuse_et_accueillante__esth_tique_premium_m_diterran_enne__tons_verts_olive_et_beige.mp4'
import ardoMockup from './imports/ChatGPT_Image_Aug_7__2026__03_50_12_PM.png'
import ardoBrandPdf from './imports/ARDO_Brand_Guidelines__1_.pdf'
import ardoProcessoPdf from './imports/ARDO_Processo_Creativo.pdf'

// Projets réels — Ville de Senlis
import senlisJazz from './imports/445746340_861175012714928_2117076327806093662_n.jpg'
import senlisParalympiques from './imports/457156537_919916496840779_253644938600762221_n.jpg'
import senlisFete from './imports/imprimer_bon.jpg'
import senlisInvitationJO from './imports/Invitation_Soiree_JO.png'
import senlisArticle from './imports/image-1.png'
import senlisInvitationPdf from './imports/Invitation_imprimer.pdf'
import senlisAffichemairiePdf from './imports/Affiche_mairie_sportive_.pdf'

// Projets réels — autres clients
import flyerAlterneoPdf from './imports/Flyer_Alterneo.pdf'


// ─── Language Context ─────────────────────────────────────────────────────────

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: 'it', setLang: () => {} })
function useLang() { return useContext(LangContext) }
function useT() { const { lang } = useLang(); return (key: TKey) => makeT(lang)(key) }

// ─── Data ────────────────────────────────────────────────────────────────────

type Project = {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string; description_fr?: string;
  context: string;     context_fr?: string;
  objective: string;   objective_fr?: string;
  approach: string;    approach_fr?: string;
  deliverables: string; deliverables_fr?: string;
  tools: string[];
  img: string;
  gallery?: string[];
  video?: string;
  pdf?: string;
  pdf2?: string;
  pdfLabel?: string; pdfLabel_fr?: string;
  pdf2Label?: string; pdf2Label_fr?: string;
  links?: { label: string; label_fr?: string; url: string }[];
  real?: boolean;
  color: string;
  bg: string;
}

const PROJECTS: Project[] = [
  // ── Progetti reali ──────────────────────────────────────────────────────────
  {
    id: 20,
    title: 'Ville de Senlis',
    category: 'Comunicazione istituzionale',
    year: '2023–2025',
    description: 'Comunicazione a 360° per il Comune di Senlis: grafica, web, social media, fotografia, video e relazioni con i fornitori.',
    description_fr: 'Communication à 360° pour la Mairie de Senlis : graphisme, web, réseaux sociaux, photographie, vidéo et relations avec les prestataires.',
    context: 'Collaborazione con il Servizio Comunicazione del Comune di Senlis nell\'ambito di un contratto professionale, con piena autonomia su diversi assi di comunicazione.',
    context_fr: 'Collaboration avec le Service Communication de la Ville de Senlis dans le cadre d\'un contrat professionnel, avec autonomie sur plusieurs axes de communication.',
    objective: 'Assicurare la comunicazione interna ed esterna della città su tutti i canali: stampa, web, social e audiovisivo.',
    objective_fr: 'Assurer la communication interne et externe de la ville sur tous les canaux : print, web, réseaux sociaux et audiovisuel.',
    approach: 'Gestione quotidiana autonoma: produzione grafica, redazione editoriale, fotografia istituzionale, montaggio video e coordinamento con i fornitori di stampa.',
    approach_fr: 'Gestion quotidienne autonome : production graphique, rédaction éditoriale, photographie institutionnelle, montage vidéo et coordination avec les prestataires d\'impression.',
    deliverables: 'Newsletter settimanali · Gestione sito web · Gestione app web · Social media (Facebook, Instagram) · Articoli per il magazine della città · Fotografia eventi istituzionali e associativi · Montaggio video · Relazioni con fornitori di stampa · Affiche · Inviti · Flyer',
    deliverables_fr: 'Newsletters hebdomadaires · Gestion du site internet · Gestion application web · Réseaux sociaux (Facebook, Instagram) · Rédaction articles pour le magazine de la ville · Prises de vue événementielles · Montage vidéo · Relations prestataires impression · Affiches · Invitations · Flyers',
    tools: ['InDesign', 'Photoshop', 'Illustrator', 'WordPress', 'Premiere Pro', 'Lightroom'],
    img: senlisFete,
    gallery: [senlisFete, senlisJazz, senlisParalympiques, senlisInvitationJO, senlisArticle],
    pdf: senlisInvitationPdf,
    pdfLabel: 'Invito auguri 2024 (PDF)',
    pdfLabel_fr: 'Invitation vœux 2024 (PDF)',
    pdf2: senlisAffichemairiePdf,
    pdf2Label: 'Flyer Sportivo',
    pdf2Label_fr: 'Flyer Sportif',
    real: true,
    color: '#0057ff',
    bg: '#f0f4ff',
  },
  {
    id: 22,
    title: 'Alterneo',
    category: 'Print & Communication',
    year: '2022',
    description: 'Comunicazione digitale e gestione web per Alterneo, scuola di formazione professionale in alternanza.',
    description_fr: 'Communication digitale et gestion web pour Alterneo, école de formation professionnelle en alternance.',
    context: 'Alterneo è una scuola di formazione professionale in alternanza. Ho gestito la comunicazione digitale in autonomia, con supervisione di un alternante.',
    context_fr: 'Alterneo est une école de formation professionnelle en alternance. J\'ai géré la communication digitale en autonomie, avec supervision d\'un alternant.',
    objective: 'Aumentare la visibilità online della scuola, animare la community e produrre contenuti B2C per attrarre nuovi candidati.',
    objective_fr: 'Augmenter la visibilité en ligne de l\'école, animer la communauté et produire des contenus B2C pour attirer de nouveaux candidats.',
    approach: 'Gestione completa della presenza digitale: sito, blog, social e contenuti grafici. Supervisione e accompagnamento di un alternante nella produzione dei contenuti.',
    approach_fr: 'Gestion complète de la présence digitale : site, blog, réseaux sociaux et contenus graphiques. Supervision et accompagnement d\'un alternant dans la production de contenus.',
    deliverables: 'Gestione sito web · Redazione articoli di blog · Social media (Instagram, TikTok, LinkedIn) · Creazione supports B2C · Flyer PDF · Supervisione alternante',
    deliverables_fr: 'Gestion site internet · Rédaction articles de blog · Réseaux sociaux (Instagram, TikTok, LinkedIn) · Création supports B2C · Flyer PDF · Supervision alternant',
    tools: ['InDesign', 'Illustrator'],
    img: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=1000&fit=crop&auto=format',
    pdf: flyerAlterneoPdf,
    pdfLabel: 'Flyer formazione (PDF)',
    pdfLabel_fr: 'Flyer formation (PDF)',
    links: [
      { label: 'Elezioni degli Ambasciatori', label_fr: 'Élections des Ambassadeurs', url: 'https://alterneoecole.fr/elections-des-ambassadeurs-et-ambassadrices/' },
      { label: 'Progetto Solidale – Mission Locale', label_fr: 'Projet Solidaire – Mission Locale', url: 'http://alterneoecole.fr/projet-solidaire-mission-locale-de-montmorency/' },
      { label: 'Giornata Porte Aperte', label_fr: 'Journée Portes Ouvertes', url: 'https://alterneoecole.fr/une-journee-portes-ouvertes-pas-comme-les-autres/' },
    ],
    real: true,
    color: '#ff6b00',
    bg: '#fff4ee',
  },
  // ── Progetti concept ─────────────────────────────────────────────────────────
  {
    id: 10,
    title: 'Altrove Magazine',
    category: 'Print & Editorial',
    year: '2024',
    description: 'Design e impaginazione di un magazine di viaggi dedicato alla Lapponia.',
    description_fr: 'Design et mise en page d\'un magazine de voyage dédié à la Laponie.',
    context: 'Creazione del layout editoriale per un numero speciale sulla destinazione artica.',
    context_fr: 'Création de la mise en page éditoriale pour un numéro spécial sur la destination arctique.',
    objective: "Valorizzare i racconti di viaggio e le fotografie attraverso un layout pulito e immersivo.",
    objective_fr: 'Valoriser les récits de voyage et les photographies à travers une mise en page épurée et immersive.',
    approach: 'Sviluppo di una griglia modulare, cura della tipografia e gerarchia visiva per guidare la lettura.',
    approach_fr: 'Développement d\'une grille modulaire, soin de la typographie et hiérarchie visuelle pour guider la lecture.',
    deliverables: 'Design Editoriale, Impaginazione, File PDF.',
    deliverables_fr: 'Design Éditorial, Mise en page, Fichier PDF.',
    tools: ['InDesign', 'Photoshop'],
    img: altroveThumbnail,
    gallery: [
      altroveGallery1,
      altroveLockupChiaro,
      altroveLockupScuro,
      altroveAppIcon,
      altroveMonogramma,
    ],
    pdf: altrovePdf,
    real: false,
    color: '#ff3366',
    bg: '#fff0f4',
  },
  {
    id: 11,
    title: 'ARDO',
    category: 'Brand Identity',
    year: '2025',
    description: 'Identità visiva completa per un brand fitness dal carattere forte e contemporaneo.',
    description_fr: 'Identité visuelle complète pour une marque fitness au caractère fort et contemporain.',
    context: 'Progetto personale di branding per una palestra fittizia chiamata ARDO — nome evocativo di ardore, intensità e fuoco.',
    context_fr: 'Projet personnel de branding pour une salle de sport fictive appelée ARDO — nom évocateur d\'ardeur, d\'intensité et de feu.',
    objective: 'Costruire un sistema di brand coerente, potente e applicabile su tutti i touchpoint fisici e digitali.',
    objective_fr: 'Construire un système de marque cohérent, puissant et applicable sur tous les points de contact physiques et digitaux.',
    approach: 'Ricerca del logo attraverso un processo creativo documentato, sviluppo di palette, tipografia e tono. Applicazioni su insegna, tessera membro, shaker e social.',
    approach_fr: 'Recherche du logo à travers un processus créatif documenté, développement de la palette, de la typographie et du ton. Applications sur enseigne, carte membre, shaker et réseaux sociaux.',
    deliverables: 'Logotipo, Brand Guidelines, Mockups, Sistema Visivo Completo.',
    deliverables_fr: 'Logotype, Brand Guidelines, Mockups, Système Visuel Complet.',
    tools: ['Illustrator', 'Photoshop', 'ChatGPT'],
    img: ardoMockup,
    gallery: [ardoMockup],
    pdf: ardoBrandPdf,
    pdf2: ardoProcessoPdf,
    pdf2Label: 'Processo Creativo',
    real: false,
    color: '#ff6b00',
    bg: '#fff4ee',
  },
  {
    id: 0,
    title: 'Oliva Caffe',
    category: 'Brand & Social',
    year: '2026',
    description: 'Identità visiva completa e lancio social per Oliva Caffe.',
    description_fr: 'Identité visuelle complète et lancement réseaux sociaux pour Oliva Caffe.',
    context: 'Lancio di una nuova caffetteria dal design fresco e contemporaneo.',
    context_fr: 'Lancement d\'un nouveau café au design frais et contemporain.',
    objective: "Creare un\'identità accattivante e generare attesa per l\'apertura sui social.",
    objective_fr: 'Créer une identité attractive et générer de l\'attente pour l\'ouverture sur les réseaux sociaux.',
    approach: 'Sviluppo del logo, applicazione su mockups realistici e design di caroselli per Instagram.',
    approach_fr: 'Développement du logo, application sur mockups réalistes et design de carousels pour Instagram.',
    deliverables: 'Logotipo, Mockups, Post Instagram (Caroselli), Copertina Reel.',
    deliverables_fr: 'Logotype, Mockups, Posts Instagram (Carousels), Couverture Reel.',
    tools: ['Photoshop', 'Illustrator', 'Figma', 'Premiere Pro'],
    img: olivaMockups,
    gallery: [olivaLogo, olivaCarousel, olivaCarousel1, olivaCarousel2, olivaCarousel3, olivaReel],
    video: olivaVideo,
    real: false,
    color: '#00e5a0',
    bg: '#edfff8',
  },
]

type SkillBlock = {
  icon: string
  title: { it: string; fr: string }
  tags: string[]
  bullets: { it: string[]; fr: string[] }
  color: string
}

const SKILLS_DATA: SkillBlock[] = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    title: { it: 'Social Media Management', fr: 'Social Media Management' },
    tags: ['Instagram', 'Facebook', 'LinkedIn', 'Pinterest', 'YouTube', 'Hootsuite', 'Meta Business Suite'],
    bullets: {
      it: ['Pianificazione e gestione editoriale multipiattaforma', 'Creazione, programmazione e pubblicazione contenuti', 'Community management · Interazione con la community', 'Analisi delle performance e ottimizzazione della strategia'],
      fr: ['Planification et gestion éditoriale multi-plateforme', 'Création, programmation et publication de contenus', 'Community management · Interaction avec la communauté', 'Analyse des performances et optimisation de la stratégie'],
    },
    color: '#ff3366',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
    title: { it: 'Copywriting & Redazione SEO', fr: 'Copywriting & Rédaction SEO' },
    tags: ['SEO', 'WordPress', 'Yoast', 'Google Docs', 'Mailchimp'],
    bullets: {
      it: ['Scrittura web ottimizzata SEO · Ricerca keyword', 'Articoli di blog · Comunicati stampa · Newsletter', 'Copy pubblicitario · Didascalie social · Slogan', 'Contenuti multilingue (IT · FR · EN)'],
      fr: ['Rédaction web optimisée SEO · Recherche de mots-clés', 'Articles de blog · Communiqués de presse · Newsletters', 'Copywriting publicitaire · Légendes social · Slogans', 'Contenus multilingues (IT · FR · EN)'],
    },
    color: '#0057ff',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>`,
    title: { it: 'Creazione Grafica', fr: 'Création Graphique' },
    tags: ['Canva', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Figma'],
    bullets: {
      it: ['Post · Storie · Caroselli · Reels grafici', 'Identità visiva · Logo · Charte graphique', 'Copertine · Cataloghi · Brochure · Flyer · Affiche', 'Maquette print e digitale'],
      fr: ['Posts · Stories · Carrousels · Reels graphiques', 'Identité visuelle · Logo · Charte graphique', 'Couvertures · Catalogues · Brochures · Flyers · Affiches', 'Maquettes print et digitales'],
    },
    color: '#c800ff',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`,
    title: { it: 'Fotografia & Video', fr: 'Photographie & Vidéo' },
    tags: ['Adobe Premiere Pro', 'Adobe Lightroom', 'Adobe After Effects', 'CapCut'],
    bullets: {
      it: ['Fotografia: eventi, prodotti, ritratti, architettura', 'Montaggio video · Reels · Spot pubblicitari', 'Motion graphics · Animazioni semplici', 'Color grading · Ritocco fotografico'],
      fr: ['Photographie : événements, produits, portraits, architecture', 'Montage vidéo · Reels · Spots publicitaires', 'Motion graphics · Animations simples', 'Color grading · Retouche photo'],
    },
    color: '#ff6b00',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
    title: { it: 'Gestione Web & CMS', fr: 'Gestion Web & CMS' },
    tags: ['WordPress', 'Elementor', 'Framer'],
    bullets: {
      it: ['Creazione e aggiornamento siti web', 'Gestione contenuti · Redazione news · Blog', 'Ottimizzazione SEO on-page · Struttura URL', 'Integrazione plugin · Form · Newsletter'],
      fr: ['Création et mise à jour de sites web', 'Gestion de contenus · Rédaction news · Blog', 'Optimisation SEO on-page · Structure URL', 'Intégration de plugins · Formulaires · Newsletters'],
    },
    color: '#00e5a0',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    title: { it: 'Analisi & Performance', fr: 'Analyse & Performance' },
    tags: ['Google Analytics', 'Google Search Console', 'Meta Business Suite'],
    bullets: {
      it: ['Monitoraggio KPI · Dashboard di reportistica', 'Analisi del traffico web e dei comportamenti utente', 'Analisi delle performance social · Reach · Engagement', 'Ottimizzazione continua della strategia di contenuto'],
      fr: ['Suivi des KPI · Tableaux de bord de reporting', 'Analyse du trafic web et des comportements utilisateur', 'Analyse des performances social · Portée · Engagement', 'Optimisation continue de la stratégie de contenu'],
    },
    color: '#ffe500',
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73A2 2 0 0 1 10 4a2 2 0 0 1 2-2z"/><circle cx="7.5" cy="14.5" r="1"/><circle cx="16.5" cy="14.5" r="1"/></svg>`,
    title: { it: 'Intelligenza Artificiale', fr: 'Intelligence Artificielle' },
    tags: ['ChatGPT', 'Claude', 'Midjourney', 'Runway'],
    bullets: {
      it: ['Creazione di contenuti testuali assistita dall\'IA', 'Generazione e editing di immagini con IA', 'Produzione video e audio con strumenti generativi', 'Ottimizzazione del flusso di lavoro creativo'],
      fr: ['Création de contenus textuels assistée par l\'IA', 'Génération et édition d\'images avec l\'IA', 'Production vidéo et audio avec outils génératifs', 'Optimisation du flux de travail créatif'],
    },
    color: '#a78bfa',
  },
]

// ─── Custom Cursor ───────────────────────────────────────────────────────────

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // Only activate on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return
    
    let mouseX = -100
    let mouseY = -100
    let cursorX = -100
    let cursorY = -100
    
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`
      }
      
      const target = e.target as HTMLElement
      // Add a hovering class if over clickable elements
      if (target.closest('a') || target.closest('button') || target.closest('.clickable')) {
        if (cursorRef.current) cursorRef.current.classList.add('hovering')
      } else {
        if (cursorRef.current) cursorRef.current.classList.remove('hovering')
      }
    }
    
    window.addEventListener('mousemove', onMouseMove)
    
    // Smooth lerp loop
    const loop = () => {
      cursorX += (mouseX - cursorX) * 0.15
      cursorY += (mouseY - cursorY) * 0.15
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorX}px, ${cursorY}px)`
      }
      requestAnimationFrame(loop)
    }
    requestAnimationFrame(loop)
    
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])
  
  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={cursorRef} className="cursor-ring" />
    </>
  )
}

// ─── Tape Marquee ────────────────────────────────────────────────────────────

function TapeMarquee() {
  const text = " CREATIVITÀ & STRATEGIA ✦ DESIGN ✦ SOCIAL MEDIA ✦ AI WORKFLOW ✦ "
  return (
    <div style={{
      width: '100%', overflow: 'hidden', background: '#00e5a0', color: 'var(--ink)',
      borderTop: '2px solid var(--ink)', borderBottom: '2px solid var(--ink)',
      padding: '0.6rem 0', display: 'flex', whiteSpace: 'nowrap',
      transform: 'rotate(-1deg) scale(1.02)',
      position: 'relative', zIndex: 10,
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <div className="marquee-wrap" style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.2rem', letterSpacing: '0.05em' }}>
        <div>{text.repeat(5)}</div>
        <div>{text.repeat(5)}</div>
      </div>
    </div>
  )
}


// ─── Nav ─────────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuColor, setMenuColor] = useState('#ff3366')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const colors = ['#ff3366', '#0057ff', '#ff6b00', '#c800ff']

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      i = (i + 1) % colors.length
      setMenuColor(colors[i])
    }, 2000)
    return () => clearInterval(id)
  }, [])

  const t = useT()
  const { lang, setLang } = useLang()

  const links = [
    { label: t('nav_projects'), href: '#projets' },
    { label: t('nav_skills'), href: '#skills' },
    { label: t('nav_about'), href: '#apropos' },
    { label: t('nav_contact'), href: '#contact' },
  ]

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: '1rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(245,242,236,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '2px solid var(--ink)' : 'none',
      transition: 'background 0.3s, border 0.3s',
    }}>
      <a href="#hero" className="clickable nav-logo" style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: '1rem',
        color: 'var(--ink)',
        textDecoration: 'none',
        letterSpacing: '-0.04em',
        display: 'flex',
        alignItems: 'center',
        gap: '0.15em',
      }}>
        PORT<span style={{ color: menuColor, transition: 'color 0.6s ease' }}>FOLIO</span>
      </a>

      <button
        type="button"
        className="clickable mobile-menu-toggle"
        aria-label="Ouvrir le menu"
        aria-controls="mobile-navigation"
        aria-expanded={mobileMenuOpen}
        onClick={() => setMobileMenuOpen(open => !open)}
      >
        <span className="mobile-menu-icon" aria-hidden="true">{mobileMenuOpen ? '×' : '☰'}</span>
      </button>

      <div className={mobileMenuOpen ? 'mobile-nav-panel is-open' : 'mobile-nav-panel'} style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {links.map(({ label, href }) => (
          <a
            key={label}
            onClick={() => setMobileMenuOpen(false)}
            href={href}
            className="clickable link-hover"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--ink)',
              textDecoration: 'none',
              position: 'relative',
              transition: 'color 0.2s',
            }}
          >
            {label}
          </a>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        {/* Language toggle */}
        {(['it', 'fr'] as Lang[]).map((l) => (
          <button
            key={l}
            className="clickable"
            onClick={() => setLang(l)}
            style={{
              fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: '0.65rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '0.35rem 0.7rem', border: '2px solid var(--ink)',
              background: lang === l ? 'var(--ink)' : 'transparent',
              color: lang === l ? 'var(--bg)' : 'var(--ink)',
              cursor: 'none', transition: 'all 0.2s', outline: 'none',
            }}
          >
            {l.toUpperCase()}
          </button>
        ))}

        <a href="mailto:jandrieu.megane@gmail.com"
           className="neo-btn neo-btn-nav clickable"
           style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--bg)',
            background: 'var(--ink)',
            padding: '0.55rem 1.2rem',
            textDecoration: 'none',
            border: '2px solid var(--ink)',
            transition: 'color 0.2s, border-color 0.2s',
            marginLeft: '0.5rem',
          }}
        >
          {lang === 'fr' ? 'M\'écrire' : 'Scrivimi'}
        </a>
      </div>
    </nav>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  const t = useT()
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      padding: '8rem 2rem 4rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      
      {/* Decorative Rotating Asterisk */}
      <div className="spin-infinite" style={{
        position: 'absolute', top: '15%', left: '45%', opacity: 0.1, zIndex: 0, pointerEvents: 'none'
      }}>
        <svg width="200" height="200" viewBox="0 0 100 100">
          <path d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" fill="#ff3366" />
          <path d="M50 15 L53 47 L85 50 L53 53 L50 85 L47 53 L15 50 L47 47 Z" fill="#ffe500" transform="rotate(45 50 50)"/>
        </svg>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center', maxWidth: '1400px', width: '100%' }}>
        {/* Text side */}
        <div style={{ position: 'relative', zIndex: 1 }} className="animate-on-load">
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem', fontWeight: 600,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--ink)',
            marginBottom: '1.5rem',
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
            backgroundColor: 'rgb(255, 255, 255)',
            borderWidth: '1px',
            borderColor: 'rgb(0, 0, 0)',
            borderStyle: 'solid',
            padding: '0.5rem 1rem',
          }}>
            <span style={{ display: 'inline-block', width: '2rem', height: '2px', background: '#ff3366' }} />
            {t('hero_tag')}
          </div>

          <h1 className="animate-on-load animate-delay-1 name-hover clickable" style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)',
            lineHeight: 0.92,
            letterSpacing: '-0.04em',
            color: 'var(--ink)',
            marginBottom: '2rem',
            backgroundColor: 'transparent',
            borderWidth: '0',
            borderLeft: '3px solid #ff3366',
            paddingLeft: '1rem',
            display: 'block',
            position: 'relative',
            transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}>
            Mégane <span style={{ fontStyle: 'italic', color: '#0057ff', transition: 'color 0.3s' }} className="name-span">Jandrieu</span>
          </h1>

          <div className="animate-on-load animate-delay-2" style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem', fontWeight: 600,
            letterSpacing: '0.05em', textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: '2rem',
            lineHeight: 1.6,
          }}>
            {(() => { const colors = ['#ff3366','var(--muted)','#0057ff','var(--muted)','#c800ff','var(--muted)']; return t('hero_sub').split('\n')[0].split(' • ').map((part, i, arr) => (
              <span key={i}>
                <span style={{ color: colors[i] ?? 'var(--muted)' }}>{part}</span>
                {i < arr.length - 1 && <span style={{ color: 'var(--muted)', opacity: 0.4 }}> • </span>}
              </span>
            )); })()}<br />
            {(() => { const colors = ['var(--muted)','#00e5a0','var(--muted)']; return t('hero_sub').split('\n')[1].split(' • ').map((part, i, arr) => (
              <span key={i}>
                <span style={{ color: colors[i] ?? 'var(--muted)' }}>{part}</span>
                {i < arr.length - 1 && <span style={{ color: 'var(--muted)', opacity: 0.4 }}> • </span>}
              </span>
            )); })()}
          </div>

          <p className="animate-on-load animate-delay-3" style={{
            fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 300,
            lineHeight: 1.75, color: 'var(--muted)', maxWidth: '40ch',
            marginBottom: '3rem',
          }}>
            {t('hero_desc')}
          </p>

          <div className="animate-on-load animate-delay-4" style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#projets" className="neo-btn neo-btn-primary clickable" style={{
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem',
              letterSpacing: '-0.02em',
              background: 'var(--ink)', color: 'var(--bg)',
              padding: '0.9rem 2rem', textDecoration: 'none',
              border: '2px solid var(--ink)',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            }}>
              {t('hero_cta1')}
            </a>
            <a href="#contact" className="neo-btn neo-btn-secondary clickable" style={{
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.75rem',
              letterSpacing: '-0.02em',
              background: 'transparent', color: 'var(--ink)',
              padding: '0.9rem 2rem', textDecoration: 'none',
              border: '2px solid var(--ink)',
            }}>
              {t('hero_cta2')}
            </a>
          </div>
        </div>

        {/* Photo side */}
        <div style={{ position: 'relative', maxWidth: '180px', justifySelf: 'center', width: '100%' }} className="animate-on-load animate-delay-2">
          <div style={{
            position: 'absolute', top: '1rem', left: '1rem', right: '-1rem', bottom: '-1rem',
            background: '#ff3366', border: '2px solid var(--ink)', zIndex: 0,
            transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          }} className="hero-bg-block" />
          
          <img
            src={meganePoto}
            alt="Mégane Andrieu"
            style={{
              width: '100%', aspectRatio: '4/5', objectFit: 'cover',
              display: 'block', border: '2px solid var(--ink)', position: 'relative', zIndex: 1,
              background: '#fff',
              filter: 'grayscale(10%) contrast(1.1)'
            }}
          />
          <div className="hero-float-badge" style={{
            position: 'absolute', bottom: '-1.5rem', left: '-2rem',
            background: '#ffe500', padding: '0.55rem 0.9rem',
            border: '2px solid var(--ink)', zIndex: 2,
            transform: 'rotate(-3deg)',
            animation: 'float 4s ease-in-out infinite'
          }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', fontWeight: 700, color: 'var(--ink)', display: 'block', lineHeight: 1.35, letterSpacing: '0.01em' }}>
              {t('hero_location')} — {t('hero_travel')}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Projects ────────────────────────────────────────────────────────────────

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const t = useT()
  const { lang } = useLang()
  const d = (it: string, fr?: string) => (lang === 'fr' && fr) ? fr : it
  const num = String(index + 1).padStart(2, '0')

  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      {/* Row header — always visible */}
      <div
        onClick={() => setExpanded(!expanded)}
        className="clickable proj-row-header"
        style={{
          display: 'grid',
          gridTemplateColumns: '3rem 1fr auto auto auto',
          alignItems: 'center',
          gap: '1.5rem',
          padding: '1.5rem 0',
          cursor: 'none',
          transition: 'background 0.2s',
        }}
      >
        {/* Number */}
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700,
          color: 'var(--muted)', letterSpacing: '0.05em',
        }}>{num}</span>

        {/* Title + description */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2vw, 1.6rem)',
              fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1.1,
            }}>{project.title}</span>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '0.55rem', fontWeight: 800,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '0.2rem 0.55rem',
              border: project.real !== false ? '2px solid #00c97a' : '2px solid var(--border)',
              color: project.real !== false ? '#00845a' : 'var(--muted)',
              background: project.real !== false ? '#e6fff5' : 'transparent',
            }}>{project.real !== false ? t('badge_real') : t('badge_concept')}</span>
          </div>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--muted)',
            lineHeight: 1.5, margin: '0.35rem 0 0', maxWidth: '55ch',
          }}>{d(project.description, project.description_fr)}</p>
        </div>

        {/* Category */}
        <span className="proj-cat" style={{
          fontFamily: 'var(--font-body)', fontSize: '0.6rem', fontWeight: 700,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          background: project.color, color: project.color === '#ffe500' ? 'var(--ink)' : '#fff',
          padding: '0.3rem 0.7rem',
        }}>{project.category}</span>

        {/* Year */}
        <span className="proj-year" style={{
          fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 600,
          color: 'var(--muted)', whiteSpace: 'nowrap',
        }}>{project.year}</span>

        {/* Toggle */}
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: '1.2rem', fontWeight: 300,
          color: project.color, lineHeight: 1, transition: 'transform 0.3s',
          transform: expanded ? 'rotate(45deg)' : 'rotate(0deg)',
          display: 'inline-block', width: '1.5rem', textAlign: 'center',
        }}>+</span>
      </div>

      {/* Expanded panel */}
      {expanded && (
        <div className="animate-on-load proj-expanded" style={{ borderTop: `3px solid ${project.color}`, background: project.bg }}>

          {/* Top — image + details side by side */}
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr' }}>
            {/* Left — thumbnail */}
            <div style={{ overflow: 'hidden', borderRight: '2px solid var(--ink)' }}>
              <img src={project.img} alt={project.title}
                className={project.title === 'Altrove Magazine' ? 'altrove-project-thumbnail' : undefined}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '220px', objectPosition: project.title === 'Altrove Magazine' ? 'center 10%' : undefined }}
              />
            </div>

            {/* Right — info grid + tools + PDFs + links */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', flex: 1 }}>
                {([
                  [t('label_context'), d(project.context, project.context_fr), 'context'],
                  [t('label_obj'),     d(project.objective, project.objective_fr), 'objective'],
                  [t('label_app'),     d(project.approach, project.approach_fr), 'approach'],
                  [t('label_del'),     d(project.deliverables, project.deliverables_fr), 'deliverables'],
                ] as [string, string, string][]).map(([label, text, type], i) => (
                  <div key={label} className={`proj-detail-${type}`} style={{
                    padding: '1rem 1.25rem',
                    borderBottom: i < 2 ? '1px solid var(--border)' : undefined,
                    borderRight: i % 2 === 0 ? '1px solid var(--border)' : undefined,
                  }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.55rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: project.color, display: 'block', marginBottom: '0.35rem' }}>{label}</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', lineHeight: 1.6, color: 'var(--ink)' }}>{text}</span>
                  </div>
                ))}
              </div>

              {/* Tools */}
              <div style={{ padding: '0.75rem 1.25rem', borderTop: '1px solid var(--border)', display: 'flex', flexWrap: 'wrap', gap: '0.35rem', alignItems: 'center' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.55rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginRight: '0.4rem' }}>Tools</span>
                {project.tools.map(tool => (
                  <span key={tool} style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', fontWeight: 600, background: project.color + '22', border: `1px solid ${project.color}`, color: 'var(--ink)', padding: '0.2rem 0.55rem' }}>{tool}</span>
                ))}
              </div>

              {/* PDFs */}
              {(project.pdf || project.pdf2) && (
                <div style={{ padding: '0.75rem 1.25rem', borderTop: '1px solid var(--border)', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.pdf && (
                    <a href={project.pdf} target="_blank" rel="noopener noreferrer" className="neo-btn neo-btn-primary clickable" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '-0.02em', background: 'var(--ink)', color: 'var(--bg)', padding: '0.5rem 1rem', textDecoration: 'none', border: '2px solid var(--ink)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                      ↗ {project.pdfLabel ? (lang === 'fr' ? (project.pdfLabel_fr ?? project.pdfLabel) : project.pdfLabel) : project.title === 'Altrove Magazine' ? t('pdf_magazine') : t('pdf_brand')}
                    </a>
                  )}
                  {project.pdf2 && (
                    <a href={project.pdf2} target="_blank" rel="noopener noreferrer" className="neo-btn clickable" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '-0.02em', background: 'transparent', color: 'var(--ink)', padding: '0.5rem 1rem', textDecoration: 'none', border: '2px solid var(--ink)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                      ↗ {(lang === 'fr' ? (project.pdf2Label_fr ?? project.pdf2Label) : project.pdf2Label) ?? t('pdf_doc')}
                    </a>
                  )}
                </div>
              )}

              {/* Links / Articles */}
              {project.links && project.links.length > 0 && (
                <div style={{ padding: '0.75rem 1.25rem', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.55rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.15rem' }}>Articles</span>
                  {project.links.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="link-hover clickable" style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 600, color: project.color, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ fontSize: '0.7rem' }}>↗</span>
                      {lang === 'fr' ? (link.label_fr ?? link.label) : link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Video — pleine largeur */}
          {project.video && (
            <div style={{ borderTop: '2px solid var(--ink)', padding: '1.25rem' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.55rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: project.color, display: 'block', marginBottom: '0.75rem' }}>{t('vid_label')}</span>
              <video src={project.video} controls autoPlay muted loop playsInline style={{ width: '100%', display: 'block', border: '2px solid var(--ink)' }} />
            </div>
          )}

          {/* Gallery — desktop uniquement. Sur mobile, un lien ouvre la galerie complète. */}
          {project.gallery && project.gallery.length > 0 && (
            <>
              <div className="project-gallery-desktop-only" style={{ borderTop: '2px solid var(--ink)' }}>
                <div style={{ padding: '0.75rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ display: 'inline-block', width: '1.5rem', height: '2px', background: project.color }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.55rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: project.color }}>{t('gallery_label')}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '2px', padding: '0 2px 2px' }}>
                  {project.gallery.map((imgUrl, i) => (
                    <a key={i} href={imgUrl} target="_blank" rel="noopener noreferrer" className="clickable" style={{ display: 'block', aspectRatio: '4/3', overflow: 'hidden' }}>
                      <img src={imgUrl} alt={`${project.title} ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} className="tag-hover" />
                    </a>
                  ))}
                </div>
              </div>
              <a
                href={project.gallery[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="project-gallery-mobile-link clickable"
                style={{ background: project.color, color: 'var(--bg)', borderColor: project.color }}
              >
                <span>{lang === 'fr' ? 'Voir les images →' : 'Vedi le immagini →'}</span>
              </a>
            </>
          )}

        </div>
      )}
    </div>
  )
}

type ProjectFilter = 'tutti' | 'reali' | 'concept'

function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>('tutti')
  const t = useT()

  const filtered = PROJECTS.filter(p => {
    if (filter === 'reali') return p.real !== false
    if (filter === 'concept') return p.real === false
    return true
  })

  const tabStyle = (active: boolean) => ({
    fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.7rem',
    letterSpacing: '0.12em', textTransform: 'uppercase' as const,
    padding: '0.5rem 1.2rem', border: '2px solid var(--ink)', cursor: 'none',
    background: active ? 'var(--ink)' : 'transparent',
    color: active ? 'var(--bg)' : 'var(--ink)',
    transition: 'all 0.2s',
    outline: 'none',
  })

  return (
    <section id="projets" style={{
      padding: '7rem 2rem',
      borderTop: '2px solid var(--ink)',
      background: 'var(--bg)',
    }}>
      <div style={{
        display: 'flex', alignItems: 'baseline',
        justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.04em',
            color: 'var(--ink)', lineHeight: 1,
          }}>
            {t('proj_title')}
          </h2>
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.04em',
            color: '#ff3366', fontStyle: 'italic',
          }}>{t('proj_italic')}</span>
        </div>
      </div>

      {/* Filter tabs */}
      <div style={{ display: 'flex', gap: '0', marginBottom: '3rem', flexWrap: 'wrap' }}>
        {(['tutti', 'reali', 'concept'] as ProjectFilter[]).map((f) => (
          <button
            key={f}
            className="clickable"
            onClick={() => setFilter(f)}
            style={tabStyle(filter === f)}
          >
            {f === 'tutti' ? t('proj_all') : f === 'reali' ? t('proj_real') : t('proj_concept')}
          </button>
        ))}
      </div>

      <div style={{ borderTop: '1px solid var(--border)' }}>
        {filtered.map((p, i) => <ProjectRow key={p.id} project={p} index={i} />)}
      </div>
    </section>
  )
}

// ─── Skills ──────────────────────────────────────────────────────────────────

function Skills() {
  const t = useT()
  const { lang } = useLang()
  const [openSkill, setOpenSkill] = useState<number | null>(null)

  return (
    <>
      <TapeMarquee />
      <section id="skills" style={{
        padding: '7rem 2rem',
        background: '#0d0d0d',
        color: '#f5f2ec',
      }}>
        <div style={{ marginBottom: '4rem', maxWidth: '600px' }}>
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#ffe500', display: 'block', marginBottom: '1rem',
          }}>{t('skills_tag')}</span>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.04em',
            lineHeight: 0.95, color: '#f5f2ec',
          }}>
            {t('skills_h2a')}<br />
            <span style={{ color: '#00e5a0', fontStyle: 'italic' }}>{t('skills_h2b')}</span>
          </h2>
        </div>

        {/* Desktop: full cards */}
        <div className="skills-desktop-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {SKILLS_DATA.map((skill) => (
            <div key={skill.title.it} className="skill-item neo-card clickable" style={{
              background: '#161616',
              border: `2px solid ${skill.color}`,
              padding: '1.75rem',
              display: 'flex', flexDirection: 'column', gap: '1rem',
              transition: 'transform 0.25s cubic-bezier(0.175,0.885,0.32,1.275), box-shadow 0.25s',
              boxShadow: `4px 4px 0 ${skill.color}40`,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <span style={{ color: skill.color, width: '1.6rem', height: '1.6rem', flexShrink: 0 }} dangerouslySetInnerHTML={{ __html: skill.icon }} />
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1rem',
                  letterSpacing: '-0.02em', color: '#f5f2ec', lineHeight: 1.1, margin: 0,
                }}>
                  {skill.title[lang]}
                </h3>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {skill.bullets[lang].map(b => (
                  <li key={b} style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: '#aaa',
                    display: 'flex', alignItems: 'baseline', gap: '0.45rem',
                  }}>
                    <span style={{ color: skill.color, fontWeight: 900, fontSize: '0.65rem', flexShrink: 0 }}>→</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: 'auto', paddingTop: '0.5rem', borderTop: '1px solid #333' }}>
                {skill.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.58rem', fontWeight: 700,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    background: `${skill.color}18`, color: skill.color,
                    padding: '0.2rem 0.55rem', border: `1px solid ${skill.color}55`,
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: compact accordion */}
        <div className="skills-mobile-accordion">
          {SKILLS_DATA.map((skill, index) => {
            const isOpen = openSkill === index
            return (
              <div key={skill.title.it} style={{
                borderTop: `2px solid ${skill.color}`,
                background: '#161616',
              }}>
                <button
                  type="button"
                  className="skills-accordion-trigger clickable"
                  aria-expanded={isOpen}
                  onClick={() => setOpenSkill(isOpen ? null : index)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', gap: '0.8rem',
                    padding: '1rem 0.75rem', border: 0, background: 'transparent',
                    color: '#f5f2ec', textAlign: 'left', cursor: 'pointer',
                  }}
                >
                  <span style={{ color: skill.color, width: '1.35rem', height: '1.35rem', flexShrink: 0 }} dangerouslySetInnerHTML={{ __html: skill.icon }} />
                  <span style={{
                    flex: 1, fontFamily: 'var(--font-display)', fontWeight: 900,
                    fontSize: '0.92rem', letterSpacing: '-0.02em',
                  }}>
                    {skill.title[lang]}
                  </span>
                  <span aria-hidden="true" style={{
                    color: skill.color, fontFamily: 'var(--font-body)', fontSize: '1.35rem',
                    fontWeight: 300, lineHeight: 1, transition: 'transform 0.2s',
                    transform: isOpen ? 'rotate(45deg)' : 'none',
                  }}>+</span>
                </button>

                {isOpen && (
                  <div style={{ padding: '0 0.75rem 1rem 2.9rem' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {skill.bullets[lang].map(b => (
                        <li key={b} style={{
                          fontFamily: 'var(--font-body)', fontSize: '0.75rem', lineHeight: 1.45,
                          color: '#aaa', display: 'flex', alignItems: 'baseline', gap: '0.4rem',
                        }}>
                          <span style={{ color: skill.color, fontWeight: 900, fontSize: '0.6rem', flexShrink: 0 }}>→</span>
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div style={{
                      display: 'flex', flexWrap: 'wrap', gap: '0.3rem',
                      marginTop: '0.8rem', paddingTop: '0.65rem', borderTop: '1px solid #333',
                    }}>
                      {skill.tags.map(tag => (
                        <span key={tag} style={{
                          fontFamily: 'var(--font-body)', fontSize: '0.55rem', fontWeight: 700,
                          letterSpacing: '0.06em', textTransform: 'uppercase',
                          background: `${skill.color}18`, color: skill.color,
                          padding: '0.18rem 0.45rem', border: `1px solid ${skill.color}55`,
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
          <div style={{ borderTop: '2px solid #f5f2ec' }} />
        </div>
      </section>
    </>
  )
}

// ─── About ───────────────────────────────────────────────────────────────────

function About() {
  const t = useT()
  const { lang } = useLang()
  const cvPdf = lang === 'fr' ? cvPdfFr : cvPdfIt
  const cvFilename = lang === 'fr' ? 'CV-Megane-Jandrieu-FR.pdf' : 'CV-Megane-Jandrieu-IT.pdf'
  return (
    <section id="apropos" style={{
      padding: '7rem 2rem',
      borderTop: '2px solid var(--ink)',
      background: 'var(--bg)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '220px 1fr', gap: '6rem', alignItems: 'start' }}>

        {/* Photo side */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'relative' }}>
            <img
              src={meganePoto}
              alt="Mégane Jandrieu"
              style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top', display: 'block', border: '2px solid var(--ink)', position: 'relative', zIndex: 1 }}
            />
            <div className="hero-bg-block" style={{
              position: 'absolute', top: '0.75rem', left: '0.75rem', right: '-0.75rem', bottom: '-0.75rem',
              background: '#ffe500', border: '2px solid var(--ink)', zIndex: 0,
              transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            }} />
          </div>
          <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href="#projets" className="neo-btn neo-btn-primary clickable" style={{
              display: 'block', textAlign: 'center',
              fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 900,
              letterSpacing: '-0.02em', color: 'var(--bg)', background: 'var(--ink)',
              padding: '0.85rem 1rem', textDecoration: 'none', border: '2px solid var(--ink)',
            }}>
              {t('about_btn1')}
            </a>
            <a href={cvPdf} download={cvFilename} target="_blank" rel="noopener noreferrer" className="neo-btn neo-btn-secondary clickable" style={{
              display: 'block', textAlign: 'center',
              fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 900,
              letterSpacing: '-0.02em', color: 'var(--ink)', background: 'transparent',
              padding: '0.85rem 1rem', textDecoration: 'none', border: '2px solid var(--ink)',
            }}>
              {t('about_btn2')}
            </a>
          </div>
        </div>

        {/* Text side */}
        <div>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ff3366', display: 'block', marginBottom: '3rem' }}>
            {t('about_tag')}
          </span>

          {([
            { tKey: 'about_c1', color: '#ff3366' },
            { tKey: 'about_c2', color: '#0057ff' },
            { tKey: 'about_c3', color: '#00e5a0' },
          ] as const).map(({ tKey, color }, idx) => {
            const paras = t(`${tKey}_p` as any).split('\n\n') as string[]
            return (
              <div key={tKey} style={{ marginBottom: idx < 2 ? '4rem' : 0 }}>
                {/* Section header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem' }}>
                  <span style={{ display: 'inline-block', width: '2.5rem', height: '3px', background: color, flexShrink: 0 }} />
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 900,
                    color, margin: 0, letterSpacing: '-0.03em',
                  }}>
                    {t(`${tKey}_t` as any)}
                  </h3>
                  <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
                </div>

                {/* Paragraphs — each with its own breathing room */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {paras.map((para: string, i: number) => (
                    <p key={i} style={{
                      fontFamily: 'var(--font-body)', fontSize: '0.92rem',
                      lineHeight: 2, color: 'var(--muted)',
                      margin: 0,
                      paddingLeft: '1rem',
                      borderLeft: i === 0 ? `2px solid ${color}30` : 'none',
                    }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

// ─── Contact ─────────────────────────────────────────────────────────────────

function Contact() {
  const [copied, setCopied] = useState(false)
  const t = useT()

  const copy = () => {
    navigator.clipboard.writeText('jandrieu.megane@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" style={{
      padding: '4rem 2rem 3rem',
      borderTop: '2px solid var(--ink)',
      background: '#ffe500',
      minHeight: 'auto',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    }}>
      <div>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink)', opacity: 0.5, display: 'block', marginBottom: '1.5rem' }}>
          {t('contact_tag')}
        </span>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', letterSpacing: '-0.04em',
          lineHeight: 0.9, color: 'var(--ink)', maxWidth: '12ch', marginBottom: '3rem',
        }}>
          {t('contact_h2')}<span style={{ color: '#ff3366' }}>?</span>
        </h2>

        <button
          onClick={copy}
          className="neo-btn neo-btn-nav clickable"
          style={{
            fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'clamp(1rem, 3vw, 2.2rem)', letterSpacing: '-0.02em',
            color: 'var(--ink)', background: 'transparent', border: '2px solid var(--ink)',
            padding: '1rem 2rem',
            display: 'inline-flex', alignItems: 'center', gap: '1.25rem',
          }}
        >
          jandrieu.megane@gmail.com
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            background: copied ? '#00e5a0' : 'var(--ink)', color: '#ffe500',
            padding: '0.35rem 0.75rem', transition: 'background 0.2s',
            zIndex: 2, position: 'relative'
          }}>
            {copied ? t('contact_copied') : t('contact_copy')}
          </span>
        </button>

        <a href="tel:+33602349588" className="neo-btn clickable" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
          fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'clamp(1rem, 3vw, 2.2rem)', letterSpacing: '-0.02em',
          color: 'var(--ink)', background: 'transparent', border: '2px solid var(--ink)',
          padding: '1rem 2rem', textDecoration: 'none', marginTop: '1rem',
        }}>
          +33 6 02 34 95 88
        </a>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
          {['LinkedIn'].map((s) => (
            <a key={s} href="https://www.linkedin.com/in/meganejandrieu" target="_blank" rel="noopener noreferrer" className="link-hover clickable" style={{
              fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)',
              textDecoration: 'none', border: '2px solid var(--ink)', padding: '0.4rem 1rem',
              transition: 'background 0.2s, color 0.2s, transform 0.2s',
            }}>
              {s}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderTop: '2px solid var(--ink)', paddingTop: '2rem', marginTop: '4rem',
        flexWrap: 'wrap', gap: '1rem',
      }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1rem', letterSpacing: '-0.04em', color: 'var(--ink)' }}>
          PORTFOLIO.
        </span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 500, color: 'rgba(13,13,13,0.55)', letterSpacing: '0.05em' }}>
          {t('footer_copy')}
        </span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 500, color: 'rgba(13,13,13,0.55)', letterSpacing: '0.05em' }}>
          {t('footer_loc')}
        </span>
        <FooterLegalLink />
      </div>
    </section>
  )
}

// ─── Legal Modal ─────────────────────────────────────────────────────────────

const LegalContext = createContext<{ open: boolean; setOpen: (v: boolean) => void }>({ open: false, setOpen: () => {} })

function LegalModal() {
  const { open, setOpen } = useContext(LegalContext)
  const { lang } = useLang()
  if (!open) return null
  const it = lang === 'it'
  return (
    <div
      onClick={() => setOpen(false)}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
        zIndex: 9000, display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#fff', border: '2px solid var(--ink)',
          maxWidth: '680px', width: '100%', maxHeight: '85vh', overflowY: 'auto',
          padding: '2.5rem', position: 'relative',
        }}
      >
        <button
          onClick={() => setOpen(false)}
          style={{
            position: 'absolute', top: '1.25rem', right: '1.25rem',
            background: 'none', border: 'none', fontSize: '1.4rem',
            cursor: 'pointer', color: 'var(--ink)', lineHeight: 1,
          }}
        >×</button>

        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ff3366', display: 'block', marginBottom: '1rem' }}>
          {it ? 'Note Legali & Privacy' : 'Mentions Légales & Confidentialité'}
        </span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.6rem', letterSpacing: '-0.03em', marginBottom: '2rem', color: 'var(--ink)' }}>
          {it ? 'Informativa sulla Privacy' : 'Politique de Confidentialité'}
        </h2>

        {[
          {
            title: it ? 'Titolare del trattamento' : 'Responsable du traitement',
            body: it
              ? 'Mégane Jandrieu — jandrieu.megane@gmail.com — Roma, Italia.'
              : 'Mégane Jandrieu — jandrieu.megane@gmail.com — Rome, Italie.',
          },
          {
            title: it ? 'Dati raccolti' : 'Données collectées',
            body: it
              ? 'Questo sito non raccoglie dati personali. Non vengono utilizzati cookie di tracciamento, cookie analitici o cookie pubblicitari. Vengono utilizzati esclusivamente cookie tecnici strettamente necessari al funzionamento del sito (preferenza di lingua, consenso cookie).'
              : 'Ce site ne collecte aucune donnée personnelle. Aucun cookie de suivi, analytique ou publicitaire n\'est utilisé. Seuls des cookies techniques strictement nécessaires au fonctionnement du site sont utilisés (préférence de langue, consentement cookie).',
          },
          {
            title: it ? 'Cookie' : 'Cookies',
            body: it
              ? 'Il sito utilizza cookie tecnici di sessione per memorizzare le preferenze dell\'utente (lingua, consenso). Nessun dato viene trasmesso a terze parti. Puoi eliminare i cookie in qualsiasi momento tramite le impostazioni del tuo browser.'
              : 'Le site utilise des cookies techniques de session pour mémoriser vos préférences (langue, consentement). Aucune donnée n\'est transmise à des tiers. Vous pouvez supprimer les cookies à tout moment via les paramètres de votre navigateur.',
          },
          {
            title: it ? 'Hosting' : 'Hébergement',
            body: it
              ? 'Il sito è ospitato da Figma, Inc. (USA). Per ulteriori informazioni: figma.com/privacy.'
              : 'Le site est hébergé par Figma, Inc. (États-Unis). Pour plus d\'informations : figma.com/privacy.',
          },
          {
            title: it ? 'Diritti dell\'utente (GDPR)' : 'Droits de l\'utilisateur (RGPD)',
            body: it
              ? 'Ai sensi del Regolamento (UE) 2016/679 (GDPR), hai il diritto di accesso, rettifica, cancellazione e portabilità dei tuoi dati. Per esercitare questi diritti, contattami a jandrieu.megane@gmail.com.'
              : 'Conformément au Règlement (UE) 2016/679 (RGPD), vous disposez d\'un droit d\'accès, de rectification, d\'effacement et de portabilité de vos données. Pour exercer ces droits, contactez-moi à jandrieu.megane@gmail.com.',
          },
          {
            title: it ? 'Ultimo aggiornamento' : 'Dernière mise à jour',
            body: 'Août / Agosto 2026',
          },
        ].map(({ title, body }) => (
          <div key={title} style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '0.95rem', letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: '0.5rem' }}>{title}</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', lineHeight: 1.75, color: 'var(--muted)' }}>{body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function FooterLegalLink() {
  const { setOpen } = useContext(LegalContext)
  const { lang } = useLang()
  return (
    <button
      onClick={() => setOpen(true)}
      style={{
        fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 500,
        color: 'rgba(13,13,13,0.55)', letterSpacing: '0.05em',
        background: 'none', border: 'none', cursor: 'pointer',
        textDecoration: 'underline', textUnderlineOffset: '3px',
      }}
    >
      {lang === 'it' ? 'Note legali & Privacy' : 'Mentions légales & Confidentialité'}
    </button>
  )
}

// ─── Cookie Banner ────────────────────────────────────────────────────────────

function CookieBanner() {
  const [visible, setVisible] = useState(() => !localStorage.getItem('cookie_consent'))
  const { setOpen } = useContext(LegalContext)
  const { lang } = useLang()
  const it = lang === 'it'

  const accept = () => { localStorage.setItem('cookie_consent', 'accepted'); setVisible(false) }
  const decline = () => { localStorage.setItem('cookie_consent', 'declined'); setVisible(false) }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', bottom: '1.5rem', left: '1.5rem', right: '1.5rem',
      maxWidth: '560px', zIndex: 8000,
      background: '#0d0d0d', border: '2px solid var(--ink)',
      padding: '1.25rem 1.5rem', color: '#f5f2ec',
      boxShadow: '6px 6px 0 #ff3366',
    }}>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', lineHeight: 1.65, marginBottom: '1rem', color: '#ccc' }}>
        {it
          ? <>Questo sito utilizza solo cookie tecnici necessari al funzionamento. Nessun dato viene condiviso con terze parti. <button onClick={() => setOpen(true)} style={{ color: '#ffe500', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', fontSize: '0.8rem', padding: 0 }}>Leggi l'informativa</button>.</>
          : <>Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement. Aucune donnée n'est partagée avec des tiers. <button onClick={() => setOpen(true)} style={{ color: '#ffe500', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', fontSize: '0.8rem', padding: 0 }}>Lire la politique</button>.</>
        }
      </p>
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <button onClick={accept} style={{
          fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '0.7rem',
          letterSpacing: '-0.01em', background: '#ffe500', color: '#0d0d0d',
          border: '2px solid #ffe500', padding: '0.5rem 1.25rem', cursor: 'pointer',
        }}>
          {it ? 'Accetta' : 'Accepter'}
        </button>
        <button onClick={decline} style={{
          fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '0.7rem',
          letterSpacing: '-0.01em', background: 'transparent', color: '#f5f2ec',
          border: '2px solid #555', padding: '0.5rem 1.25rem', cursor: 'pointer',
        }}>
          {it ? 'Rifiuta' : 'Refuser'}
        </button>
      </div>
    </div>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [lang, setLang] = useState<Lang>('it')
  const [legalOpen, setLegalOpen] = useState(false)
  return (
    <LangContext.Provider value={{ lang, setLang }}>
    <LegalContext.Provider value={{ open: legalOpen, setOpen: setLegalOpen }}>
    <div style={{ background: 'var(--bg)' }}>
      <CustomCursor />
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <LegalModal />
      <CookieBanner />

      <style>{`
        /* Hide default cursor globally for better custom cursor feel */
        @media (hover: hover) and (pointer: fine) {
          body, a, button, .clickable { cursor: none !important; }
        }

        /* ─── Cursor Styling ─── */
        .cursor-dot {
          position: fixed; top: 0; left: 0; width: 8px; height: 8px;
          margin-left: -4px; margin-top: -4px;
          background: var(--ink); border-radius: 50%;
          pointer-events: none; z-index: 10000;
        }
        .cursor-ring {
          position: fixed; top: 0; left: 0; width: 40px; height: 40px;
          margin-left: -20px; margin-top: -20px;
          border: 2px solid var(--ink); border-radius: 50%;
          pointer-events: none; z-index: 9999;
          transition: width 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                      height 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                      margin 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                      background 0.2s, border-color 0.2s;
        }
        .cursor-ring.hovering {
          width: 60px; height: 60px;
          margin-left: -30px; margin-top: -30px;
          background: rgba(255, 51, 102, 0.2);
          border-color: #ff3366;
        }

        /* ─── Animations ─── */
        @keyframes float {
          0% { transform: translateY(0px) rotate(-3deg); }
          50% { transform: translateY(-10px) rotate(-1deg); }
          100% { transform: translateY(0px) rotate(-3deg); }
        }
        
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes spin { 100% { transform: rotate(360deg); } }
        
        @keyframes marqueeX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes glitch {
          0% { transform: translate(0) }
          20% { transform: translate(-2px, 2px) }
          40% { transform: translate(-2px, -2px) }
          60% { transform: translate(2px, 2px) }
          80% { transform: translate(2px, -2px) }
          100% { transform: translate(0) }
        }

        .animate-on-load {
          animation: slideUpFade 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        
        .animate-delay-1 { animation-delay: 0.1s; opacity: 0; }
        .animate-delay-2 { animation-delay: 0.2s; opacity: 0; }
        .animate-delay-3 { animation-delay: 0.3s; opacity: 0; }
        .animate-delay-4 { animation-delay: 0.4s; opacity: 0; }

        .spin-infinite {
          animation: spin 15s linear infinite;
        }

        .marquee-wrap {
          display: flex;
          width: 200%;
          animation: marqueeX 20s linear infinite;
        }

        /* ─── Hover Effects ─── */
        
        /* Background offset shift */
        .hero-bg-block:hover {
          transform: translate(8px, 8px) !important;
        }

        /* Glitch text */
        .glitch-hover:hover {
          animation: glitch 0.3s cubic-bezier(.25, .46, .45, .94) both infinite;
          background-color: #ffe500 !important;
          color: #ff3366 !important;
        }

        /* Name Hover */
        .name-hover:hover {
          transform: rotate(-2deg) scale(1.02);
          box-shadow: 8px 8px 0px #00e5a0;
        }
        .name-hover:hover .name-span {
          color: #ff3366 !important;
        }

        /* Nav links & social links */
        .link-hover:hover {
          color: #ff3366 !important;
          transform: translateY(-2px);
        }

        /* Interactive Tags */
        .tag-hover:hover {
          transform: translateY(-2px) rotate(3deg) !important;
          background-color: #ffe500 !important;
        }

        /* Neo-Brutalist Buttons with pseudo-element wipe */
        .neo-btn {
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        .neo-btn::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 0%; height: 100%;
          transition: width 0.3s cubic-bezier(0.7, 0, 0.2, 1);
          z-index: -1;
        }
        .neo-btn:hover::before { width: 100%; }
        .neo-btn:hover { color: var(--ink) !important; border-color: var(--ink) !important; }
        
        .neo-btn-primary::before { background: #ff3366; }
        .neo-btn-secondary::before { background: #ffe500; }
        .neo-btn-nav::before { background: #00e5a0; }

        /* Neo-Brutalist 3D Cards */
        .neo-card {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .neo-card:hover {
          transform: translate(-6px, -6px) rotate(-1.5deg);
          box-shadow: 10px 10px 0px #0057ff;
        }
        .neo-card:nth-child(even):hover {
          transform: translate(-6px, -6px) rotate(1.5deg);
          box-shadow: 10px 10px 0px #ff3366;
        }
        .neo-card:nth-child(3n):hover {
          box-shadow: 10px 10px 0px #00e5a0;
        }

        /* Project Cards */
        .project-card .project-img-wrap img {
          transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .project-card:hover .project-img-wrap img {
          transform: scale(1.1) rotate(2deg) !important;
        }

        /* Skills hover */
        .skill-item:hover {
          transform: translateX(8px);
          color: #fff !important;
        }
        .skill-title-hover:hover {
          transform: skewX(-15deg);
        }

        /* ─── Responsive ─── */

        .skills-mobile-accordion { display: none; }



        /* Tablet (≤900px) */
        @media (max-width: 900px) {
          /* Nav : masquer les liens, garder logo + toggle + CTA */
          nav > div:nth-child(2) { display: none; }

          /* Hero : empiler photo sous le texte */
          #hero { padding: 6rem 1.5rem 3rem; }
          #hero > div { grid-template-columns: 1fr !important; gap: 2.5rem; }
          #hero > div > div:last-child { justify-self: center; max-width: 220px !important; }

          /* Projects accordion */
          #projets { padding: 4rem 1.5rem; }
          #projets .proj-row-header { grid-template-columns: 2rem 1fr auto auto !important; gap: 0.75rem !important; }
          #projets .proj-row-header .proj-year { display: none; }
          #projets .proj-expanded { grid-template-columns: 1fr !important; }
          #projets .proj-expanded > div:last-child { border-left: none !important; border-top: 2px solid var(--ink); }

          /* Skills */
          #skills { padding: 4rem 1.5rem; }

          /* About : empiler */
          #apropos { padding: 4rem 1.5rem; }
          #apropos > div { grid-template-columns: 1fr !important; gap: 3rem; }
          #apropos > div > div:first-child { max-width: 220px !important; justify-self: center; }

          /* Contact */
          #contact { padding: 4rem 1.5rem 3rem; }
        }

        /* Mobile (≤600px) */
        @media (max-width: 600px) {
          /* Nav */
          nav { padding: 0.75rem 1rem; }
          nav > div:last-child > a { padding: 0.4rem 0.75rem; font-size: 0.6rem; }
          nav > div:last-child > button { padding: 0.3rem 0.5rem; font-size: 0.6rem; }

          /* Hero */
          #hero { padding: 5rem 1rem 3rem; }
          #hero > div { gap: 2rem; }
          #hero > div > div:last-child { max-width: 180px !important; }

          /* Floating badge on hero photo */
          #hero .hero-float-badge { left: -0.5rem !important; padding: 0.65rem 1rem !important; }
          #hero .hero-float-badge span:first-child { font-size: 0.9rem !important; }
          #hero .hero-float-badge span:last-child { font-size: 0.5rem !important; }

          /* Projects accordion mobile */
          #projets { padding: 3rem 1rem; }
          #projets .proj-row-header { grid-template-columns: 2rem 1fr auto !important; gap: 0.5rem !important; }
          #projets .proj-row-header .proj-cat { display: none; }
          #projets .proj-expanded .proj-detail-context,
          #projets .proj-expanded .proj-detail-approach { display: none !important; }
          #projets .proj-expanded > div:first-child > div:last-child > div:has(.proj-detail-objective),
          #projets .proj-expanded > div:first-child > div:last-child > div:has(.proj-detail-deliverables) { border-right: 0 !important; }
          #projets .proj-expanded > div:first-child > div:last-child > div { grid-column: 1 / -1; }
          #projets .altrove-project-thumbnail { object-position: center 0% !important; }

          /* Filter tabs: wrap */
          #projets > div:nth-child(2) button { padding: 0.4rem 0.75rem; font-size: 0.6rem; }

          /* Skills */
          #skills { padding: 3rem 1rem; }
          .skills-desktop-grid { display: none !important; }
          .skills-mobile-accordion { display: block !important; }

          /* About */
          #apropos { padding: 3rem 1rem; }
          #apropos > div > div:first-child { max-width: 160px !important; }

          /* Contact */
          #contact { padding: 3rem 1rem 2.5rem; }
          #contact button { font-size: clamp(0.75rem, 3vw, 1.2rem) !important; padding: 0.75rem 1rem !important; flex-direction: column; align-items: flex-start; gap: 0.5rem !important; }

          /* Footer */
          #contact > div:last-child { flex-direction: column; gap: 0.5rem; }
        }
      `}</style>
    </div>
    </LegalContext.Provider>
    </LangContext.Provider>
  )
}
