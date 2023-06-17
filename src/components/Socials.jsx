import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SocialSVGs } from '.';
import { socialsData } from '../utils/data';
import { socialsMotion } from '../utils/motion';

const SocialItem = ({ title, link, sidebar }) => (
  <motion.p {...socialsMotion.socialItem(sidebar)}>
    <Link to={link}>
      <SocialSVGs social={title} />
    </Link>
  </motion.p>
);

export default function Socials({ isOpen, sidebar }) {
  return (
    <Container {...socialsMotion.socials}>
      {socialsData.map((s) => (
        <SocialItem key={`social-${s.title}`} {...s} sidebar={sidebar} />
      ))}
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;

  p {
    height: 1.5rem;
    cursor: pointer;

    svg {
      fill: var(--c-font);
      width: auto;
      height: 100%;

      &:hover {
        fill: var(--c-accent);
      }
    }
  }
`;
