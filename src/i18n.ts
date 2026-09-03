export type Lang = 'it' | 'fr'

const translations = {
  // ── Nav ──────────────────────────────────────────────────────────────────
  nav_projects: { it: 'Progetti', fr: 'Projets' },
  nav_skills:   { it: 'Competenze', fr: 'Compétences' },
  nav_about:    { it: 'Chi sono', fr: 'Qui suis-je' },
  nav_contact:  { it: 'Contatto', fr: 'Contact' },

  // ── Hero ─────────────────────────────────────────────────────────────────
  hero_tag:     { it: 'Comunicatrice Polivalente', fr: 'Communicante Polyvalente' },
  hero_sub:     { it: 'Comunicazione digitale • Creazione di contenuti • Copywriting SEO\nGrafica & Video • Gestione Web • Social Media', fr: 'Communication digitale • Création de contenus • Copywriting SEO\nGraphisme & Vidéo • Gestion Web • Social Media' },
  hero_desc:    { it: "Ogni progetto ha la sua storia. Il mio lavoro è raccontarla nel modo giusto, sul canale giusto, al momento giusto. Aperta a qualsiasi tipo di collaborazione, in presenza o da remoto.", fr: "Chaque projet a son histoire. Mon travail est de la raconter de la bonne façon, sur le bon canal, au bon moment. Ouverte à tout type de collaboration, en présentiel ou à distance." },
  hero_cta1:    { it: 'Vedi i miei progetti →', fr: 'Voir mes projets →' },
  hero_cta2:    { it: 'Contattami', fr: 'Me contacter' },
  hero_location:{ it: 'Roma', fr: 'Rome' },
  hero_travel:  { it: 'Disponibile in trasferta o da remoto', fr: 'Disponible pour se déplacer ou travailler à distance' },

  // ── Projects ─────────────────────────────────────────────────────────────
  proj_title:   { it: 'Progetti', fr: 'Projets' },
  proj_italic:  { it: 'recenti.', fr: 'récents.' },
  proj_hint:    { it: 'Clicca per i dettagli', fr: 'Cliquez pour les détails' },
  proj_all:     { it: 'Tutti', fr: 'Tous' },
  proj_real:    { it: '✓ Lavori reali', fr: '✓ Travaux réels' },
  proj_concept: { it: '◇ Concept', fr: '◇ Concept' },
  badge_real:   { it: '✓ Lavoro reale', fr: '✓ Travail réel' },
  badge_concept:{ it: 'Concept', fr: 'Concept' },
  proj_open:    { it: 'Scopri il progetto ↓', fr: 'Voir le projet ↓' },
  proj_close:   { it: 'Chiudi dettagli ↑', fr: 'Fermer ↑' },
  label_context:{ it: 'Contesto', fr: 'Contexte' },
  label_obj:    { it: 'Obiettivo', fr: 'Objectif' },
  label_app:    { it: 'Approccio', fr: 'Approche' },
  label_del:    { it: 'Deliverables', fr: 'Livrables' },
  pdf_magazine: { it: 'Sfoglia il Magazine (PDF)', fr: 'Feuilleter le Magazine (PDF)' },
  pdf_brand:    { it: 'Brand Guidelines (PDF)', fr: 'Brand Guidelines (PDF)' },
  pdf_doc:      { it: 'Documento (PDF)', fr: 'Document (PDF)' },
  vid_label:    { it: 'Video di Lancio', fr: 'Vidéo de Lancement' },
  gallery_label:{ it: 'Galleria Progetto', fr: 'Galerie du Projet' },

  // ── Skills ───────────────────────────────────────────────────────────────
  skills_tag:   { it: 'Competenze & Software', fr: 'Compétences & Logiciels' },
  skills_h2a:   { it: 'Tutti gli strumenti del', fr: 'Tous les outils du' },
  skills_h2b:   { it: 'mestiere.', fr: 'métier.' },

  // ── About ────────────────────────────────────────────────────────────────
  about_tag:    { it: 'Chi sono', fr: 'Qui suis-je' },
  about_h2a:    { it: 'Creatività, strategia e', fr: 'Créativité, stratégie et' },
  about_h2b:    { it: "visione d'insieme.", fr: 'vision d\'ensemble.' },
  about_polyv:  { it: 'Polivalente', fr: 'Polyvalente' },
  about_c1_t:   { it: 'Chi sono', fr: 'Qui suis-je' },
  about_c1_p:   { it: "Specialista in comunicazione digitale con base a Roma, creo contenuti che fanno venire voglia di fermarsi, leggere e tornare.\n\nCon un Master in Marketing e Comunicazione Digitale e tre anni di esperienza in Francia, mi occupo di tutto ciò che rende un brand visibile e coerente online: social media, creazione grafica, copywriting SEO, WordPress, fotografia, montaggio video.", fr: "Spécialiste en communication digitale basée à Rome, je crée des contenus qui donnent envie de s'arrêter, de lire, et de revenir.\n\nAvec un Master en Marketing et Communication Digitale et trois ans d'expérience en France, je m'occupe de tout ce qui rend une marque visible et cohérente en ligne : réseaux sociaux, création graphique, copywriting SEO, WordPress, photographie, montage vidéo." },
  about_c2_t:   { it: 'Francese a Roma', fr: 'Française à Rome' },
  about_c2_p:   { it: "Francese a Roma, lavoro all'intersezione di due culture e due lingue. Ho costruito il mio percorso in ambienti esigenti — istituzioni pubbliche, settore educativo — dove il rigore non è un'opzione. Questo rigore lo porto in ogni progetto.\n\nE perché i migliori contenuti nascono da una vera curiosità, mi formo costantemente, soprattutto sugli strumenti di intelligenza artificiale applicati alla comunicazione.", fr: "Française à Rome, je travaille à l'intersection de deux cultures et deux langues. J'ai construit mon parcours dans des environnements exigeants — institutions publiques, secteur éducatif — où la rigueur n'est pas une option. Cette rigueur, je l'apporte dans chaque projet.\n\nEt parce que les meilleurs contenus naissent d'une vraie curiosité, je me forme en permanence, notamment sur les outils d'intelligence artificielle appliqués à la communication." },
  about_c3_t:   { it: 'Oltre il lavoro', fr: 'Au-delà du travail' },
  about_c3_p:   { it: "Ho scelto di costruire la mia vita lontano dalle mie abitudini — sono cresciuta in Francia, ho vissuto qualche mese nelle Filippine nell'ambito di un impegno umanitario, e oggi sono a Roma. Queste esperienze mi hanno insegnato una cosa essenziale: la curiosità è il motore di tutto.\n\nFaccio sport perché ho bisogno di muovermi per pensare. Mi dedico a tante attività creative e manuali perché ho bisogno di creare con le mani per equilibrarmi. Leggo, cucino, danzo e fotografo ciò che mi circonda perché ho bisogno di immergermi nelle cose per capirle davvero.", fr: "J'ai choisi de construire ma vie loin de mes habitudes — j'ai grandi en France, vécu quelques mois aux Philippines dans le cadre d'un engagement humanitaire, et aujourd'hui à Rome. Ces expériences m'ont appris une chose essentielle : la curiosité est le moteur de tout.\n\nJe fais du sport car j'ai besoin de bouger pour penser. Je m'adonne à de nombreuses activités créatives et manuelles car j'ai besoin de créer avec les mains pour m'équilibrer. Je lis, je cuisine, je danse et je photographie ce qui m'entoure car j'ai besoin de m'immerger dans les choses pour vraiment les comprendre." },
  about_btn1:   { it: 'Vedi i progetti', fr: 'Voir les projets' },
  about_btn2:   { it: 'Scarica il CV', fr: 'Télécharger le CV' },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact_tag:  { it: 'Contatto', fr: 'Contact' },
  contact_h2:   { it: 'Cerchi un profilo creativo', fr: 'Vous cherchez un profil créatif' },
  contact_copy: { it: 'Copia', fr: 'Copier' },
  contact_copied:{ it: '✓ Copiato', fr: '✓ Copié' },
  footer_copy:  { it: '© 2026 — Graphic Design & Comunicazione Digitale', fr: '© 2026 — Graphic Design & Communication Digitale' },
  footer_loc:   { it: 'Italia', fr: 'Italie' },
} as const

export type TKey = keyof typeof translations

export function makeT(lang: Lang) {
  return (key: TKey): string => translations[key][lang]
}
