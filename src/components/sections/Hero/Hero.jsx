import { styled } from 'styled-components';

import { HeroIntro, HeroImage } from '../..';
import { SectionWrapper } from '../../../hoc';

const Hero = () => {
  return (
    <Content>
      <HeroIntro />
      <HeroImage />
    </Content>
  );
};

export default SectionWrapper(Hero, 'hero');

const Content = styled.div`
  position: relative;
`;
