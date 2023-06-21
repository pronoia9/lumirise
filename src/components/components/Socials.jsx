import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { SocialSVGs } from '..';
import { dataStore } from '../../store/dataStore';
import { socialsMotion } from '../../utils';

const SocialItem = ({ title, link, props }) => (
  <motion.p {...socialsMotion.socialItem} {...props}>
    <Link to={link}>
      <SocialSVGs social={title} />
    </Link>
  </motion.p>
);

export default function Socials(props) {
  const data = dataStore((state) => state.socials);
  return (
    <Container {...socialsMotion.socials}>
      {data.map((s) => (
        <SocialItem key={`social-${s.title}`} {...s} props={props} />
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
