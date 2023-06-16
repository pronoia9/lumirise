import { hi, logo } from "../assets";

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
  skills: { title: 'Professional Skills', subtitle: 'My Talent', background: 'Skills' },
  works: { title: 'Portfolio', subtitle: 'My Cases', background: 'Portfolio' },
  experience: { title: 'Resume', subtitle: 'My Story', background: 'History' },
  contact: { title: 'Contact Me', subtitle: `Let's Talk About Ideas`, background: 'Contact Me' },
};

export const heroData = {
  name: 'Jay Ansin',
  occupation: 'Web Developer',
  intro: 'With diverse frontend and backend skills, dedicated to crafting captivating user experiences and pursuing continuous learning.',
  backgroundTitle: 'Web Developer',
  resumeLink: 'https://www.dropbox.com/s/wkpywyn442sbbze/2021.04.16--03.32.57AM.pdf?dl=0',
  image: hi,
  badges: [{ total: 3, plus: true, title: 'Years of', context: 'Experience' }, { total: 85, title: 'Completed', context: 'Projects' }]
}

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
    title: 'Databases (MongoDB, PostgreSQL)',
    description: `Keepers of digital knowledge, guardians of data's secrets, with MongoDB and PostgreSQL as their sacred vessels, enabling the storage, retrieval, and manipulation of information that shapes the destiny of web applications.`,
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
    description: `A sage of version control, a custodian of code's history, guarding against chaos and confusion, allowing teams to collaborate in a synchronized dance, preserving the integrity of projects with each graceful commit.`,
    level: 60,
  },
];