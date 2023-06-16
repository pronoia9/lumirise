import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SectionTitle, SectionSubtitle } from '../styles/TextStyles';
import { sectionsHeadings } from '../utils/data';

const SectionWrapper = (Component, idName) =>
  function HOC(props) {
    const { title, subtitle } = sectionsHeadings[idName];
    return (
      <Container
        id={idName}
        className='lui-section lui-gradient-center'
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.5, delayChildren: 0.5 } } }}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        gradient={props?.gradient}
        isTop={idName === 'hero'}
      >
        {title && subtitle && (
          <SectionHeading className='lui-heading'>
            <SectionTitle>{title}</SectionTitle>
            <SectionSubtitle>
              <span>
                {subtitle.split(' ')[0]} <span>{subtitle.split(' ')[1]}</span>
              </span>
            </SectionSubtitle>
          </SectionHeading>
        )}

        <Wrapper isTop={idName === 'hero'}>
          <Component {...props} />
        </Wrapper>
      </Container>
    );
  };

export default SectionWrapper;

const Container = styled(motion.section)`
  position: relative;
  min-width: 100%;
  min-height: 100vh;
  padding-bottom: ${({ isTop }) => (isTop ? '180px' : '220px')};
  background: ${({ gradient }) => `var(--c-gradient${gradient})`};
`;

const SectionHeading = styled.div`
  position: relative;
  width: 100%;
  max-width: 1300px;
  margin-bottom: 60px;
  text-align: center;
`;

const Wrapper = styled.div`
  max-width: 1300px;
  min-height: 100vh;
  padding: 0 0.75rem;
  display: flex;
  align-items: ${({ isTop }) => !isTop && 'center'};
`;
