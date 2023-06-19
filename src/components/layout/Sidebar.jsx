import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import { Socials } from '../';
import { sidebarData } from '../../utils/data';
import { navbarMotion } from '../../utils/motion';
import { rem } from '../../utils/utils';

export default function Sidebar({ isOpen }) {
  return (
    <SidebarMenu {...navbarMotion.sidebarMenu(isOpen)} open={isOpen}>
      <SidebarContainer>
        {/* Line + Dots */}
        <SidebarLine animate={{ opacity: isOpen ? 1 : 0 }}>
          <SidebarDots />
        </SidebarLine>

        {/* Links */}
        <Links {...navbarMotion.sidebarLinks}>
          {sidebarData.links.map(({ title, link }) => (
            <motion.li key={`link-${title}`} {...navbarMotion.sidebarLinkItem}>
              <a href={link}>{title}</a>
            </motion.li>
          ))}
        </Links>

        {/* Socials */}
        <Socials />
      </SidebarContainer>

      <SidebarBackground {...navbarMotion.sidebarBackground} />
    </SidebarMenu>
  );
}

const SidebarMenu = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: ${rem('512px')};
  height: 100%;
  display: flex;
  overflow: hidden;
  pointer-events: ${({ open }) => (open ? 'all' : 'none')};
  z-index: 950;
  isolation: isolate;
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
  width: ${rem('2px')};
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
    box-shadow: 5px 5px var(--c-lineShadow);
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
  top: ${rem('-185px')};
  left: ${rem('-170px')};
  width: ${rem('226px')};
  height: ${rem('226px')};
  background-image: url('images/pat-1.png');
  background-repeat: no-repeat;
  background-size: contain;
  filter: invert(${({ theme }) => theme.dotsInvert ?? 0});
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
      letter-spacing: 0.05rem;
      text-transform: uppercase;
      text-decoration: none;

      &:hover {
        color: var(--c-accent);
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
