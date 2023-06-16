import { styled } from 'styled-components';

import { HeroBackgroundText, HeroIntro, HeroImage } from './';
import { SectionWrapper } from '../../hoc';
import { heroData } from '../../utils/data';

const Hero = () => {
  return (
    <Wrapper className='lui-started v-line v-line-left'>
      <Content className='section hero-started'>
        <HeroIntro />
        <HeroImage />
      </Content>
      <HeroBackgroundText text={heroData.backgroundTitle} />
    </Wrapper>
  );
};

export default SectionWrapper(Hero, 'hero');

const Wrapper = styled.div`
  width: 100%;
`;

const Content = styled.div`
  position: relative;
`;
