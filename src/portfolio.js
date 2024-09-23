const header = {
  title: 'MG.',
}

const about = {
  name: 'Manon',
  role: 'développeuse web',
  description:
    "Créative et passionnée, je conçois et développe des sites web sur mesure qui allient esthétique et fonctionnalité. Mon savoir-faire en design graphique me permet de créer des expériences visuelles harmonieuses, tout en garantissant une navigation fluide et intuitive pour les utilisateurs.Mon approche est centrée sur la compréhension des besoins de mes clients afin de réaliser des projets uniques, parfaitement adaptés à leur identité. Chaque détail compte, et je m'efforce de livrer des solutions qui marient créativité, performance, et impact visuel.",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/manon-goliot-8122461a0/',
    github: 'https://github.com/Manon13',
  },
}

const formations = [
  {
    name: 'Développeur informatique',
    diplome: 'RNCP de niveau 5',
    description: '',
    lieu: 'OpenClassrooms',
    date: '2024',
  },
  {
    name: 'BTS Assistant de manager',
    diplome: 'niveau BTS',
    description: '',
    lieu: 'CNED Grenoble',
    date: '2015',
  },
  {
    name: 'BTS Diététique',
    diplome: 'niveau BTS', 
    description: 'vvvvvvvvvvvv vvvvvvvvvvvvvvv vvvvvvvvvvvvv vvvvvvvvvvvvvvv',
    lieu: 'CNED Grenoble',
    date: '2013',
  }
]

const projects = [
  {
    name: 'Booki',
    image: 'images/booki.png',
    description:
      "Création de la page d'accueil d'une agence de voyage en intégrant une interface responsive s'adaptant à différents types d'appareils. Structuration et stylisme du code pour assurer une expérience utilisateur optimale.",
    stack: ['HTML', 'CSS', 'W3C', 'Responsive Design'],
    sourceCode: 'https://github.com/Manon13/Booki',
    livePreview: 'https://manon13.github.io/Booki/',
  },
  {
    name: 'Sophie Bluel',
    image: 'images/sophie_bluel.png',
    description:
      "Création d'une page web dynamique pour le site d'une architecte d'intérieur, utilisant JavaScript pour gérer les interactions utilisateur et manipuler le DOM. Le projet inclut une page de présentation des travaux, une page de connexion pour l'administrateur et une modale pour le téléchargement de médias",
    stack: ['JavaScript', 'Node.js', 'npm', 'GitHub'],
    sourceCode: 'https://github.com/Manon13/Sophie-Bluel',
  },
  {
    name: 'Kasa',
    image: '/images/kasa.png',
    description:
      "Développement du front-end d’une application web de location immobilière en utilisant React et React Router pour une navigation fluide et réactive. Création de composants, gestion de la navigation entre les pages et implémentation d'animations CSS avec Sass pour une interface moderne et dynamique.",
    stack: ['React', 'React-Router', 'Vite', 'SASS'],
    sourceCode: 'https://github.com/Manon13/Kasa',
    livePreview: 'https://manon13-kasa.netlify.app/',
  },
  {
    name: 'Nina Carducci',
    image: '/images/nina_carducci.png',
    description:
      "Optimisation du SEO avec l'amélioration du référencement naturel, des performances et de l'accessibilité du site internet de la photographe Nina Carducci. Débogage du site et optimisation du code et du temps de chargement.",
    stack: ['SEO', 'Lighthouse', 'Wave', 'Schema.org', 'Accessibilité web', 'Optimisation des performances'],
    sourceCode: 'https://github.com/Manon13/Nina-Carducci/tree/optimisation',
    livePreview: 'https://manon13.github.io/Nina-Carducci/',
  },
  {
    name: 'Mon Vieux Grimoire',
    image: '/images/mon_vieux_grimoire.png',
    description:
      "Développement d'une API pour un site de notation de livres. Mise en place des opérations CRUD pour les livres et notations, implémentation d'un système d'authentification sécurisé et optimisation des images. Respect des pratiques du Green Code pour une application conforme et éco-responsable.",
    stack: ['Express', 'Node.js', 'MongoDB', 'Green Code'],
    sourceCode: 'https://github.com/Manon13/Mon-Vieux-Grimoire',
  },
  {
    name: 'Dungeon Disaster',
    image: '/images/dungeon_disaster.png',
    description:
      "Développement d'un site web dédié aux joueurs de World of Warcraft, conçu pour fournir des guides interactifs sur les donjons. Ce projet inclut des fonctionnalités de questions-réponses et une interface engageante développée avec React et SASS, mettant l'accent sur l'interactivité et l'expérience utilisateur.",
    stack: ['React', 'React-Router', 'Sass', 'Responsive Design'],
    livePreview: 'https://dungeon-disaster.com/',
  }
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'SASS',
  'Git',
  'GitHub',
  'SEO',
  'Lighthouse',
  'Wave',
  'Schema.org',
  'W3C',
  'Green Code',
  'Express',
  'Node.js',
  'npm',
  'MongoDB',
  'Responsive Design',
  'Accessibilité web',
  'Optimisation des performances',
]

const contact = {
  email: 'manonn.g@outlook.fr',
}

export { header, about, formations, projects, skills, contact }
