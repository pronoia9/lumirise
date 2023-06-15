import { hi, logo } from "../assets";

export const sidebarData = {
  logo: logo,
  links: [
    { title: 'Home', link: '/' },
    { title: 'Skills', link: '/skills' },
    { title: 'Works', link: '/works' },
    { title: 'Resume', link: '/resume' },
    { title: 'Contact', link: '/contact' },
  ],
};

export const socialsData = [
  { title: 'GitHub', link: 'https://github.com/pronoia9' },
  // { title: 'Facebook', link: 'https://www.facebook.com/victoriouswaffles' },
  { title: 'LinkedIn', link: 'https://www.linkedin.com/in/jayansin/' },
  { title: 'Discord', link: null, tooltip: 'pronoia9' },
];

export const heroData = {
  name: 'Jay Ansin',
  occupation: 'Web Developer',
  intro: 'Passionate web developer with diverse frontend and backend skills, dedicated to crafting captivating user experiences and pursuing continuous learning.',
  backgroundTitle: 'Web Developer',
  resumeLink: 'https://www.dropbox.com/s/wkpywyn442sbbze/2021.04.16--03.32.57AM.pdf?dl=0',
  image: hi,
  badges: [{ total: 3, plus: true, title: 'Years of', context: 'Experience' }, { total: 85, title: 'Completed', context: 'Projects' }]
}