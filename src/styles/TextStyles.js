import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const Subtitle = styled(motion.div)`
  font-size: 1rem;
  font-weight: 700;
  color: var(--c-font);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const SubtitleWithAccent = styled(Subtitle)`
  span {
    color: #29a587;
  }
`;

export const SubtitleWithHandwriting = styled(Subtitle)`
  span {
    font-family: var(--f-secondary);
    font-size: 2rem;
    text-transform: capitalize;
  }
`;
