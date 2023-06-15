import { Hero, Skills, Works, Experience, Contact } from '../components';

export default function HomePage() {
  return (
    <>
      <Hero gradient={1} />
      <Skills gradient={2} />
      <Works gradient={1} />
      <Experience gradient={2} />
      <Contact gradient={1} />
    </>
  );
}
