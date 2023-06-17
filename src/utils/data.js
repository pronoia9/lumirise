import { hi, logo } from '../assets';

export const sidebarData = {
  logo: logo,
  links: [
    { title: 'Home', link: '#' },
    { title: 'Skills', link: '#skills' },
    { title: 'Works', link: '#works' },
    { title: 'Resume', link: '#resume' },
    { title: 'Contact', link: '#contact' },
  ],
};

export const socialsData = [
  { title: 'GitHub', link: 'https://github.com/pronoia9' },
  // { title: 'Facebook', link: 'https://www.facebook.com/victoriouswaffles' },
  { title: 'LinkedIn', link: 'https://www.linkedin.com/in/jayansin/' },
  { title: 'Discord', link: null, tooltip: 'pronoia9' },
];

export const sectionsData = {
  hero: { title: null, subtitle: null, background: 'Web Developer' },
  services: { title: 'What I Do', subtitle: 'My Services', background: 'Services' },
  skills: { title: 'Professional Skills', subtitle: 'My Talent', background: 'Skills' },
  works: { title: 'Portfolio', subtitle: 'My Cases', background: 'Portfolio' },
  experience: { title: 'Resume', subtitle: 'My Story', background: 'History' },
  contact: { title: 'Contact Me', subtitle: `Let's Talk About Ideas`, background: 'Contact Me' },
};

export const heroData = {
  name: 'Jay Ansin',
  occupation: 'Web Developer',
  introductions: [
    'Weaving pixels, lines, and a sprinkle of web magic to create jaw-dropping digital wonders.',
    "Turning caffeine-fueled ideas into mind-bending web experiences that leave users asking, 'How did they do that?'",
    "Bending the laws of web development like Neo bending spoons in 'The Matrix', but with more stylish CSS.",
    'Crafting web experiences so delightful, they make unicorns jealous.',
    "Mixing equal parts of coding finesse, design wizardry, and dad jokes for a web experience that's unforgettable and pun-tastic.",
    'Bringing web development prowess and a sense of humor that can make even JavaScript smile (almost).',
    'Building web applications with more flair than a magician pulling rabbits out of hats (although, ours are virtual rabbits).',
    'Infusing web development with a touch of whimsy, a dash of quirkiness, and just a hint of irreverence.',
    "Creating web experiences that are so addictive, users will keep refreshing the page hoping for more surprises (we don't recommend it, though).",
    'Unleashing a web development superpower: the ability to turn coffee into code, errors into laughter, and ideas into pixel-perfect reality.',
  ],
  backgroundTitle: 'Web Developer',
  resumeLink: 'https://www.dropbox.com/s/wkpywyn442sbbze/2021.04.16--03.32.57AM.pdf?dl=0',
  image: hi,
  badges: [
    { total: 3, plus: true, title: 'Years of', context: 'Experience' },
    { total: 85, title: 'Completed', context: 'Projects' },
  ],
};

export const servicesData = [
  {
    title: 'Captivating Web Design',
    category: 'Web Development',
    description: 'Crafting visually stunning and user-friendly web designs that capture attention and deliver exceptional user experiences.',
  },
  {
    title: 'Interactive 3D Web Experiences',
    category: 'Web Development',
    description: 'Creating immersive and interactive 3D web applications that engage users with captivating visuals and seamless interactions.',
  },
  {
    title: 'Backend Development Solutions',
    category: 'Web Development',
    description:
      'Building robust and scalable backend solutions that power web applications, ensuring efficient data handling and seamless functionality.',
  },
  {
    title: 'Database Management',
    category: 'Web Development',
    description:
      'Expertise in working with databases like MongoDB and PostgreSQL, enabling efficient storage, retrieval, and manipulation of data in web applications.',
  },
  {
    title: 'Blender 3D Modeling',
    category: 'Digital Artistry',
    description: 'Utilizing Blender to create intricate and visually stunning 3D models, bringing imagination to life with precision and artistry.',
  },
];

export const skillsData = [
  {
    title: 'HTML',
    description: `A weaver of the web's foundational tapestry, crafting structured elegance that dances across the digital realm, guiding users on a visual journey of enchantment.`,
    level: 85,
  },
  {
    title: 'CSS',
    description: `A virtuoso of style and form, fashioning the visual symphony that adorns the web's canvas, harmonizing colors, layouts, and animations to create an immersive experience.`,
    level: 70,
  },
  {
    title: 'JavaScript',
    description: `An alchemist of interactivity, infusing life into web applications with spells of dynamic functionality, casting spells that engage and captivate users at every turn.`,
    level: 90,
  },
  {
    title: 'React',
    description: `A maestro of user interfaces, conducting the orchestration of reusable components and state management, composing harmonies that resonate with seamless efficiency.`,
    level: 85,
  },
  {
    title: 'Three.js',
    description: `A magician of the third dimension, conjuring captivating realms of 3D wonder, where pixels transcend their flat nature and come alive in a dance of depth and immersion.`,
    level: 70,
  },
  {
    title: 'React Three Fiber',
    description: `A sorcerer of integration, seamlessly merging the realms of React and Three.js, casting spells that empower the creation of interactive and enchanting 3D web applications.`,
    level: 70,
  },
  {
    title: 'Node.js',
    description: `A guardian of the server-side, standing steadfast as a sentinel, wielding the power of Node.js to build scalable and robust backends, ensuring a steady flow of mystical energy to power web applications.`,
    level: 60,
  },
  {
    title: 'MongoDB, PostgreSQL',
    description: `Keepers of digital knowledge, guardians of data's secrets, enabling the storage, retrieval, and manipulation of information that shapes the destiny of web applications.`,
    level: 60,
  },
  {
    title: 'Blender',
    description: `A visionary artist, wielding the brush of creativity to mold digital clay into breathtaking 3D masterpieces, breathing life into virtual sculptures that transcend imagination.`,
    level: 60,
  },
  {
    title: 'Photoshop',
    description: `A brush-wielding virtuoso, harnessing the power of pixels to shape digital realms, seamlessly blending artistry and technical prowess to create visually stunning masterpieces that captivate the senses.`,
    level: 20,
  },
  {
    title: 'Git',
    description: `A sage of version control, guarding against chaos and confusion, allowing teams to collaborate in a synchronized dance, preserving the integrity of projects with each graceful commit.`,
    level: 60,
  },
];

export const projectsData = {
  filters: ['all', 'react', 'javascript', 'threejs', 'frontend', 'fullstack'],
  projects: [
    { title: '', subtitle: '', description: '', links: { repo: '', live: '' }, image: '', year: '', technology: [], categories: [], tags: [], info: [], },
    { title: '', subtitle: '', description: '', links: { repo: '', live: '' }, image: '', year: '', technology: [], categories: [], tags: [], info: [], },
    { title: '', subtitle: '', description: '', links: { repo: '', live: '' }, image: '', year: '', technology: [], categories: [], tags: [], info: [], },
    { title: '', subtitle: '', description: '', links: { repo: '', live: '' }, image: '', year: '', technology: [], categories: [], tags: [], info: [], },
    { title: '', subtitle: '', description: '', links: { repo: '', live: '' }, image: '', year: '', technology: [], categories: [], tags: [], info: [], },
    { title: '', subtitle: '', description: '', links: { repo: '', live: '' }, image: '', year: '', technology: [], categories: [], tags: [], info: [], },
    { title: '', subtitle: '', description: '', links: { repo: '', live: '' }, image: '', year: '', technology: [], categories: [], tags: [], info: [], },
  ],
};
