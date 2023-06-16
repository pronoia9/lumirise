import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SectionTitle, SectionSubtitle } from '../styles/TextStyles';
import { sectionsData } from '../utils/data';

const SectionWrapper = (Component, idName) =>
  function HOC(props) {
    const { title, subtitle, background } = sectionsData[idName];

    return (
      <Section
        id={idName}
        className='lui-section lui-gradient-center'
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.5, delayChildren: 0.5 } } }}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        gradient={props?.gradient}
        idname={idName}
      >
        <Container className='container'>
          {/* Section Title */}
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
          <Wrapper className='lui-started v-line v-line-left'>
            <Component {...props} />

            {/* Background Text */}
            <BackgroundText className='lui-bgtitle'>{background}</BackgroundText>
          </Wrapper>
        </Container>
      </Section>
    );
  };

export default SectionWrapper;

const Section = styled(motion.section)`
  position: relative;
  min-width: 100%;
  min-height: 100vh;
  /* padding-bottom: ${({ idname }) => (idname === 'hero' ? '180px' : '220px')}; */
  padding-bottom: 200px;
  background: ${({ gradient }) => `var(--c-gradient${gradient})`};
`;

const SectionHeading = styled.div`
  position: relative;
  width: 100%;
  max-width: 1300px;
  margin-bottom: 60px;
  text-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 0.75rem;
  display: flex;
  align-items: center; /* ${({ idname }) => idname === 'hero' && 'center'}; */
  justify-content: center;
  flex-direction: column;
  `;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1300px;
`;

const BackgroundText = styled.div`
  position: relative;
  top: -50px;
  left: -50%;
  width: 200%;
  font-size: 22rem;
  font-family: var(--f-secondary);
  color: ${({ theme }) => theme.backgroundTitle};
  font-weight: bold;
  line-height: 1px;
  text-align: center;
  white-space: nowrap;
  pointer-events: none;
  z-index: 1;
`;
