import { styled } from 'styled-components';
import { motion } from 'framer-motion';

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <Container
        id={idName}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.5, delayChildren: 0.5 } } }}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
      >
        <Component />
      </Container>
    );
  };

export default SectionWrapper;

const Container = styled(motion.section)``;
