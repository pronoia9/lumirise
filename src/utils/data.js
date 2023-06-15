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
  socials: [
    { title: 'GitHub', link: 'https://github.com/pronoia9' },
    // { title: 'Facebook', link: 'https://www.facebook.com/victoriouswaffles' },
    { title: 'LinkedIn', link: 'https://www.linkedin.com/in/jayansin/' },
    { title: 'Discord', link: null, tooltip: 'pronoia9' },
  ],
};

export const heroData = {
  name: 'Jay Ansin',
  occupation: 'Web Developer',
  intro: 'Passionate web developer with diverse frontend and backend skills, dedicated to crafting captivating user experiences and pursuing continuous learning.',
  backgroundTitle: 'Web Developer',
  image: hi,
  badgeLeft: { total: 3, title: 'Years of', context: 'Experience' },
  badgeRight: { total: 85, title: 'Completed', context: 'Projects' },
}