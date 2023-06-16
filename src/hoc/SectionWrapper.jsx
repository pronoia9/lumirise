import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SectionTitle, SectionSubtitle } from '../styles/TextStyles';
import { sectionsHeadings } from '../utils/data';

const SectionWrapper = (Component, idName) =>
  function HOC(props) {
    return (
      <Container
        id={idName}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.5, delayChildren: 0.5 } } }}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        gradient={props?.gradient}
      >
        <SectionHeading>
          <SectionTitle>{sectionsHeadings[idName]?.title}</SectionTitle>
          <SectionSubtitle>
            <span>
              {sectionsHeadings[idName]?.subtitle.split(' ')[0]} <span>{sectionsHeadings[idName]?.subtitle.split(' ')[1]}</span>
            </span>
          </SectionSubtitle>
        </SectionHeading>

        <Wrapper>
          <Component {...props} />
        </Wrapper>
      </Container>
    );
  };

export default SectionWrapper;

const Container = styled(motion.section)`
  position: relative;
  padding-bottom: 220px;
  min-width: 100%;
  min-height: 100vh;
  background: ${({ gradient }) => `var(--c-gradient${gradient})`};
`;

const SectionHeading = styled.div`
  margin-bottom: 60px;
  position: relative;
`;

const Wrapper = styled.div``;
