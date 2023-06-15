import { styled } from 'styled-components';

import { HeroBackgroundText, HeroIntro, HeroImage } from './';
import { SectionWrapper } from '../../hoc';
import { heroData } from '../../utils/data';

const Hero = () => {
  return (
    <Container>
      <div>
        <div>
          <HeroIntro />
          <HeroImage />
        </div>
        <HeroBackgroundText text={heroData.backgroundTitle} />
      </div>
    </Container>
  );
};

export default SectionWrapper(Hero, 'hero');

const Container = styled.div`
  max-width: 1300px;
  height: 100%;
  min-height: 100vh;
  padding: 0 0.75rem;
  display: flex;
  align-items: center;
`;
