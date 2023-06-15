import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SectionWrapper } from '../../hoc';

const Hero = () => {
  return <Container>Hero</Container>;
};

export default SectionWrapper(Hero, 'hero');

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: var(--c-gradient1);
`;
