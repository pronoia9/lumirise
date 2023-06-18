import { Hero, Services, Skills, Works, Experience, Contact } from '..';

export default function HomePage() {
  return (
    <>
      <Hero gradient={1} />
      <Services gradient={2} />
      <Skills gradient={1} />
      <Works gradient={2} />
      <Experience gradient={1} />
      <Contact gradient={2} />
    </>
  );
}
