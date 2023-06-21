import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SectionTitle, SectionSubtitle } from '../styles/TextStyles';
import { sectionWrapperMotion } from '../utils/motion';
import { rem } from '../utils/utils';
import { dataStore } from '../store/dataStore';

const SectionWrapper = (Component, idName) =>
  function HOC(props) {
    const data = dataStore((state) => state.sections);
    const { title, subtitle, background } = data[idName] ?? {};

    return (
      <Container id={idName} gradient={props?.gradient} idname={idName}>
        <Wrapper key={`sectionwrapper-wrapper-${idName}`} {...sectionWrapperMotion}>
          {/* Section Title */}
          {title && subtitle && (
            <SectionHeading>
              <SectionTitle>{title}</SectionTitle>
              <SectionSubtitle>
                <span>
                  {subtitle.split(' ')[0]} <span>{subtitle.split(' ').slice(1).join(' ')}</span>
                </span>
              </SectionSubtitle>
            </SectionHeading>
          )}

          {/* Content */}
          <ContentWrapper>
            <Component {...props} />
          </ContentWrapper>

          {/* Background Text */}
          <BackgroundText>{background}</BackgroundText>

          {/* Backgrond Line */}
          <BackgroundLine position={props?.gradient === 1 ? 'left' : 'right'}>
            <span />
          </BackgroundLine>
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
  padding-bottom: ${rem(180)};
  background: ${({ gradient }) => `var(--c-gradient${gradient})`};
  display: flex;
  align-items: ${({ idname }) => (idname === 'hero' ? 'center' : 'flex-start')};
  justify-content: center;
`;

const Wrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: ${rem(1300)};
  padding: ${rem(90)} 2rem;
`;

const SectionHeading = styled.div`
  position: relative;
  margin-bottom: ${rem(60)};
  text-align: center;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const BackgroundText = styled.div`
  position: relative;
  top: ${rem(-50)};
  left: -50%;
  width: 200%;
  font-size: 22rem;
  font-family: var(--f-secondary);
  color: ${({ theme }) => theme.backgroundTitle};
  font-weight: bold;
  line-height: ${rem(1)};
  text-align: center;
  white-space: nowrap;
  pointer-events: none;
  z-index: 0;
`;

const BackgroundLine = styled.div`
  position: absolute;
  top: 10rem;
  right: ${({ position }) => (position === 'right' ? '-5rem' : 'auto')};
  bottom: 5rem;
  left: ${({ position }) => (position === 'left' ? '-5rem' : 'auto')};
  width: 0.125rem;
  background: var(--c-lineBorder);
  pointer-events: none;
  z-index: 0;
  isolation: isolate;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: -0.9375rem;
    width: 1.875rem;
    height: 1.875rem;
    background: var(--c-lineBackground);
    border: ${rem(2)} solid var(--c-lineBorder);
    border-radius: ${rem(30)};
    box-shadow: 0.3125rem 0.3125rem var(--c-lineShadow);
    z-index: 1;
  }
  &:before { top: -0.9375rem; }
  &:after { bottom: -0.9375rem; }

  span {
    position: absolute;
    right: ${({ position }) => (position === 'right' ? '-10.5rem' : 'auto')};
    bottom: ${({ position }) => (position === 'right' ? rem(-168) : rem(-188))};
    left: ${({ position }) => (position === 'left' ? '-10.5rem' : 'auto')};
    width: 14.125rem;
    height: 14.125rem;
    display: block;
    background-image: url('images/pat-1.png');
    background-repeat: no-repeat;
    background-size: contain;
    filter: invert(${({ theme }) => theme.dotsInvert ?? 0});
    opacity: 0.6;
  }
`;
