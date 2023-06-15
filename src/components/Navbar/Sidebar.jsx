import { Link } from 'react-router-dom';
import { styled } from "styled-components";
import { motion } from 'framer-motion';

import { SocialSVGs } from '../SVGs';
import { sidebarData } from "../../utils/data";
import { sidebarMotion } from "../../utils/motion";

export default function Sidebar({ isOpen, sidebarRef }) {
  return (
    <Container>
      <SidebarClickArea ref={sidebarRef} />
      <SidebarMenu initial={false} animate={isOpen ? 'open' : 'closed'} open={isOpen}>
        <SidebarContainer>
          {/* Line + Dots */}
          <SidebarLine animate={{ opacity: isOpen ? 1 : 0 }}>
            <SidebarDots />
          </SidebarLine>

          {/* Links */}
          <Links variants={sidebarMotion.links}>
            {sidebarData.links.map(({ title, link }) => (
              <motion.li key={`link-${title}`} variants={sidebarMotion.linkItem} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link to={link}>{title}</Link>
              </motion.li>
            ))}
          </Links>

          {/* Socials */}
          <Socials variants={sidebarMotion.socials}>
            {sidebarData.socials.map(({ title, link }) => (
              <motion.p key={`social-${title}`} variants={sidebarMotion.socialItem}>
                <Link to={link}>
                  <SocialSVGs social={title} />
                </Link>
              </motion.p>
            ))}
          </Socials>
        </SidebarContainer>
        <SidebarBackground variants={sidebarMotion.background} />
      </SidebarMenu>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
`;

const SidebarClickArea = styled.div`
  width: 100%;
  height: 100%;
  background: none;
`;

const SidebarMenu = styled(motion.nav)`
  position: relative;
  width: 100%;
  max-width: 512px;
  height: 100%;
  display: flex;
  overflow: hidden;
  pointer-events: ${({ open }) => (open ? 'all' : 'none')};
`;

const SidebarContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  margin: auto;
  padding: 0 1.5rem;
  padding-left: 40%;
  z-index: 1;
`;

const SidebarLine = styled(motion.div)`
  position: absolute;
  left: 20%;
  width: 2px;
  height: 100%;
  background: var(--c-lineBorder);
  pointer-events: none;
  z-index: 2;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: -1rem;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background: var(--c-lineBackground);
    border: 2px solid var(--c-lineBorder);
    box-shadow: var(--c-lineShadow);
  }
  &:before {
    top: -1rem;
  }
  &:after {
    bottom: -1rem;
  }
`;

const SidebarDots = styled(motion.div)`
  position: absolute;
  top: -185px;
  left: -170px;
  width: 226px;
  height: 226px;
  background-image: url('images/pat-1.png');
  background-repeat: no-repeat;
  background-size: contain;
  filter: invert(${({ theme }) => theme.imageInvert});
  opacity: 0.6;
  z-index: -1;
`;

const Links = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 1.5rem;

  li {
    align-self: flex-start;

    a {
      font-family: 'Jost';
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1;
      color: var(--c-font);
      letter-spacing: 0.05em;
      text-transform: uppercase;
      text-decoration: none;

      &:hover {
        color: var(--c-accent);
      }
    }
  }
`;

const Socials = styled(motion.div)`
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

const SidebarBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  background: var(--c-background2);
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
`;
