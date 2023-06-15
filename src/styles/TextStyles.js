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

export const Title = styled(motion.h1)`
  font-family: 'Jost';
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
  > p:first-of-type { opacity: 0.8; }

  @media screen and (max-width: 1024px) {
		margin: 0 auto;
  }
`;
