import { styled } from 'styled-components';

import { HeroBackgroundText, HeroIntro, HeroImage } from './';
import { SectionWrapper } from '../../hoc';
import { heroData } from '../../utils/data';

const Hero = () => {
  return (
    <Container className='container'>
      <Wrapper className='lui-started v-line v-line-left'>
        <Content className='section hero-started'>
          <HeroIntro />
          <HeroImage />
        </Content>
        <HeroBackgroundText text={heroData.backgroundTitle} />
      </Wrapper>
    </Container>
  );
};

export default SectionWrapper(Hero, 'hero');

const Container = styled.div`
  max-width: 1300px;
  min-height: 100vh;
  padding: 0 0.75rem;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const Content = styled.div`
  position: relative;
`;