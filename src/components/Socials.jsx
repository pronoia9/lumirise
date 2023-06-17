import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { motion } from "framer-motion";

import { SocialSVGs } from ".";
import { socialsData } from "../utils/data";
import { socialsMotion } from "../utils/motion";

export default function Socials() {
  return (
    <Container {...socialsMotion.socials}>
      {socialsData.map(({ title, link }) => (
        <motion.p key={`social-${title}`} {...socialsMotion.socialItem}>
          <Link to={link}>
            <SocialSVGs social={title} />
          </Link>
        </motion.p>
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
