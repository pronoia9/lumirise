import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SectionWrapper } from '../../hoc';
import { heroData } from '../../utils/data';

const Hero = () => {
  return <Container>
    <Wrapper>
      {/* <HeroContainer></HeroContainer> */}

      {/* Background Title */}
      <BackgroundTitle><span>{ heroData.backgroundTitle }</span></BackgroundTitle>
    </Wrapper>
  </Container>;
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

const Wrapper = styled.div``;

const BackgroundTitle = styled.div`
  position: relative;
  top: -50px;
  left: -50%;
  width: 200%;
  font-size: 350px;
  font-family: var(--f-secondary);
  color: ${({theme}) => theme.backgroundTitle};
  font-weight: bold;
  line-height: 1px;
  text-align: center;
  white-space: nowrap;
  pointer-events: none;
`;