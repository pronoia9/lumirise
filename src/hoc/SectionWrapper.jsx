import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SectionTitle, SectionSubtitle } from '../styles/TextStyles';
import { sectionsData } from '../utils/data';
import { sectionWrapperMotion } from '../utils/motion';

const SectionWrapper = (Component, idName) =>
  function HOC(props) {
    const { title, subtitle, background } = sectionsData[idName];

    return (
      <Container id={idName} className='lui-section lui-gradient-center' gradient={props?.gradient} idname={idName}>
        <Wrapper key={`sectionwrapper-wrapper-${idName}`} className='container' {...sectionWrapperMotion}>
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

          {/* Content */}
          <Component {...props} />

          {/* Background Text */}
          <BackgroundText className='lui-bgtitle'>{background}</BackgroundText>
        </Wrapper>
      </Container>
    );
  };

export default SectionWrapper;

const Container = styled.section`
  position: relative;
  width: 100%;
  min-width: 100vw;
  min-height: 100vh;
  padding-bottom: 180px;
  background: ${({ gradient }) => `var(--c-gradient${gradient})`};
  display: flex;
  align-items: ${({ idname }) => (idname === 'hero' ? 'center' : 'flex-start')};
  justify-content: center;
`;

const Wrapper = styled(motion.div)`
  width: 100%;
  max-width: 1300px;
  padding: 90px 2rem;
`;

const InnerWrapper = styled.div`
  z-index: 10;
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
  z-index: 0;
`;
