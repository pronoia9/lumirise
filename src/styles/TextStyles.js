import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const Subtitle = styled(motion.div)`
  font-size: 1rem;
  font-weight: 700;
  color: var(--c-font);
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media screen and (max-width: 767px) {
    font-size: 0.8rem;
  }
`;

export const SubtitleWithAccent = styled(Subtitle)`
  span {
    color: var(--c-accent);
  }
`;

export const SubtitleWithHandwriting = styled(Subtitle)`
  span {
    font-family: var(--f-secondary);
    font-size: 2rem;
    text-transform: capitalize;
  }
`;

export const HeroTitle = styled(motion.h1)`
  font-family: var(--f-primary);
  font-size: 5.5rem;
  line-height: 1.2;
  color: #fff;
  font-weight: 700;
  margin: 1rem 0 0 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-shadow: 2px 2px #000, -2px 2px #000, 2px -2px #000, -2px -2px #000, 5px 5px 0px rgba(0, 0, 0, 0.2);

  span {
    color: var(--c-accent);
  }

  @media screen and (max-width: 1024px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled(motion.div)`
  margin: 0;
  font-size: 1.125rem;
  > p:first-of-type {
    opacity: 0.8;
  }

  @media screen and (max-width: 1024px) {
    margin: 0 auto;
  }
`;

export const SectionTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 10px;
  color: var(--c-font);
  font-family: var(--f-primary);
  font-size: 2.75rem;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  @media screen and (max-width: 1024px) {
    margin-bottom: 10px;
    font-size: 34px;
  }

  @media screen and (max-width: 767px) {
    font-size: 26px;
  }
`;

export const SectionSubtitle = styled.div`
  span {
    position: relative;
    color: var(--c-accent);
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
    z-index: 2;

    strong, b, span {
      font-family: var(--f-secondary);
      color: var(--c-font);
      font-size: 1.875rem;
      font-weight: 700;
      letter-spacing: 0;
      text-transform: none;
      margin-left: 10px;
    }
  }

  @media screen and (max-width: 1024px) {
    span {
      span, b, strong {
        font-size: 24px;
      }
    }
  }

  @media screen and (max-width: 767px) {
  }
`;
