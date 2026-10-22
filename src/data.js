// Todo el texto de la web está aquí: edita este fichero para cambiar contenidos.
// Lo común a los dos idiomas va arriba; los textos de cada idioma, en `content.en` y `content.es`.

export const profile = {
  name: 'Victor Bolaños Guerra',
  callsign: 'EA8DJL',
  role: 'Internet Infrastructure & Peering Engineer',
}

export const links = [
  { label: 'Blog', href: '/blog/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/victorbguerra/' },
  { label: 'GitHub', href: 'https://github.com/vitokosk8' },
]

export const asns = [
  { asn: 'AS209235', href: 'https://stat.ripe.net/AS209235' },
  { asn: 'AS210505', href: 'https://stat.ripe.net/AS210505' },
]

export const trainer = [
  {
    vendor: 'Huawei',
    title: 'Certified System Instructor',
    certs: ['Routing & Switching', 'WLAN', 'Access', 'Security', 'Transmission'],
  },
  {
    vendor: 'MikroTik',
    title: 'Certified Trainer',
    certs: ['MTCNA', 'MTCRE', 'MTCINE', 'MTCWE', 'MTCEWE', 'MTCTCE', 'MTCIPv6E', 'MTCUME', 'MTCSE', 'MTCSWE'],
  },
  {
    vendor: 'IPv6 Forum',
    title: 'Certified Trainer',
    certs: ['Network', 'Security'],
  },
  {
    vendor: 'Grandstream',
    title: 'Certified Trainer',
    certs: ['UC Solution', 'Networking Solution'],
  },
  {
    vendor: 'Ubiquiti',
    title: 'Certified Trainer',
    certs: ['UFSP', 'UWA', 'URSC'],
  },
]

const urls = {
  manrs: 'https://manrs.org/about/governance/steering-committee/steering-committee-members/',
  ripe: 'https://www.ripe.net/membership/mail/member-and-community-consultations/charging-scheme-task-force-2024/',
  isoc: 'https://www.internetsociety.org/fellowships/community/2025-fellows/',
}

export const content = {
  en: {
    locale: 'en-GB',
    place: 'Canary Islands',
    switchTo: { label: 'Español', href: '/es/', lang: 'es' },
    intro:
      'I design, build and teach networks. Crafting networking wizardry with AS209235 and ' +
      'AS210505 packets and peers, I turn tech jargon into team triumphs and make sure every ' +
      "team's journey is both educational and epic.",
    titles: {
      about: 'About me',
      trainer: 'Certified trainer',
      community: 'Internet community',
      blog: 'Latest posts',
    },
    about: [
      '15+ years of hands-on consulting and training in multivendor AV, IT and networks, for ISP/Telco, hospitality and retail.',
      '7+ years developing business opportunities.',
      'Network solution design, planning, implementation, migration and deployment: BGP, SRv6/SR, MPLS, IP Core and FTTx.',
    ],
    operate: 'I operate',
    and: 'and',
    lo0: { name: 'Loopback0 Training', text: 'Networking and IT training, at lo0.es', href: 'https://lo0.es' },
    community: [
      { name: 'MANRS Steering Committee', text: 'Committee member, contributing to global routing security best practices and policy alignment.', href: urls.manrs },
      { name: 'RIPE NCC', text: 'Active participant in the community, including the RIPE Charging Scheme Task Force (2024).', href: urls.ripe },
      { name: 'Internet Society Fellowship 2025', text: 'Selected fellow of the 2025 cohort.', href: urls.isoc },
      { name: 'ESNOG', text: 'Knowledge exchange among network operators.' },
      { name: 'Internet Society chapters', text: 'Latin, Spain, Canary Islands, Pulse, Interplanetary and LEO Satellite.' },
    ],
    posts: {
      loading: 'Loading posts…',
      error: 'The posts could not be loaded. You can read them directly on',
      errorLink: 'the blog',
      empty: 'No posts published yet. The first one will show up here.',
      all: 'See all blog posts',
    },
    alt: {
      portrait: 'Victor Bolaños wearing a RUN BGP T-shirt in front of a shelf of networking books',
      travel: 'Victor Bolaños at a viewpoint over the coast',
      training: 'Victor Bolaños explaining IS-IS on a screen during a course',
      lo0: 'lo0 logo',
    },
    nav: { main: 'Links', footer: 'Footer links', lang: 'Language' },
  },

  es: {
    locale: 'es-ES',
    place: 'Islas Canarias',
    switchTo: { label: 'English', href: '/', lang: 'en' },
    intro:
      'Diseño, construyo y enseño redes. Entre paquetes y peers de AS209235 y AS210505, ' +
      'convierto la jerga técnica en logros de equipo y me aseguro de que el camino sea ' +
      'tan formativo como épico.',
    titles: {
      about: 'Sobre mí',
      trainer: 'Formador certificado',
      community: 'Comunidad de Internet',
      blog: 'Últimas entradas',
    },
    about: [
      'Más de 15 años de consultoría y formación práctica en redes, IT y audiovisual multivendor, para operadores, hostelería y retail.',
      'Más de 7 años desarrollando oportunidades de negocio.',
      'Diseño, planificación, implementación, migración y despliegue de redes: BGP, SRv6/SR, MPLS, IP Core y FTTx.',
    ],
    operate: 'Opero',
    and: 'y',
    lo0: { name: 'Loopback0 Training', text: 'Formación en redes e IT, en lo0.es', href: 'https://lo0.es' },
    community: [
      { name: 'MANRS Steering Committee', text: 'Miembro del comité. Buenas prácticas de seguridad del enrutamiento global y alineación de políticas.', href: urls.manrs },
      { name: 'RIPE NCC', text: 'Participación activa en la comunidad, incluida la Charging Scheme Task Force de 2024.', href: urls.ripe },
      { name: 'Internet Society Fellowship 2025', text: 'Seleccionado como fellow de la edición 2025.', href: urls.isoc },
      { name: 'ESNOG', text: 'Intercambio de conocimiento entre operadores de red.' },
      { name: 'Capítulos de Internet Society', text: 'Latin, España, Canarias, Pulse, Interplanetary y LEO Satellite.' },
    ],
    posts: {
      loading: 'Cargando entradas…',
      error: 'No se han podido cargar las entradas. Puedes leerlas directamente en',
      errorLink: 'el blog',
      empty: 'Todavía no hay entradas publicadas. Cuando escriba la primera, aparecerá aquí.',
      all: 'Ver todas las entradas del blog',
    },
    alt: {
      portrait: 'Victor Bolaños con una camiseta que dice RUN BGP, delante de una estantería de libros de redes',
      travel: 'Victor Bolaños en un mirador sobre la costa',
      training: 'Victor Bolaños explicando IS-IS en una pantalla durante un curso',
      lo0: 'Logotipo de lo0',
    },
    nav: { main: 'Enlaces', footer: 'Enlaces del pie', lang: 'Idioma' },
  },
}
