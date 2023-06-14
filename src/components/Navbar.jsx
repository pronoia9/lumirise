import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { keyframes, styled } from 'styled-components';
import { motion, useCycle } from 'framer-motion';

import { logo } from '../assets';
import { MoonSVG, SunSVG, SidebarButton } from './SVGs';
import { sidebarData } from '../utils/data';
import { sidebarBackgroundMotion, sidebarMenuItemMotion, sidebarMenuMotion } from '../utils/motion';
import { isDarkTheme, toggleTheme } from '../utils/utils';

export default function Navbar({ theme, setTheme }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  const handleThemeClick = () => {
    toggleTheme(setTheme);
  };
  const handleMenuClick = () => {
    toggleOpen();
  };

  return (
    <>
      <Container>
        {/* Logo */}
        <Logo>
          <Link to='/'>
            <img src={logo} />
          </Link>
        </Logo>

        {/* Right Side */}
        <Icons>
          {/* Theme Button */}
          {!isOpen && <div onClick={handleThemeClick}>{isDarkTheme(theme) ? <MoonSVG /> : <SunSVG />}</div>}
          {/* Menu Open Button */}
          <motion.div initial={false} animate={isOpen ? 'open' : 'closed'} onClick={handleMenuClick}>
            <SidebarButton />
          </motion.div>
        </Icons>
      </Container>

      {/* Sidebar Menu */}
      <SidebarMenu initial={false} animate={isOpen ? 'open' : 'closed'}>
        <SidebarContainer>
          {/* Line */}
          <SidebarLine>
            <SidebarDots />
          </SidebarLine>

          <SidebarWrapper>
            {/* Links */}
            <Links>
              {sidebarData.links.map((link, index) => (
                <>
                  <Link to='/'>{link.title}</Link>
                </>
              ))}
            </Links>
            {/* Socials */}
            <Socials>
              {sidebarData.socials.map((social, index) => (
                <>O</>
              ))}
            </Socials>
          </SidebarWrapper>
        </SidebarContainer>
        <SidebarBackground variants={sidebarBackgroundMotion} />
        {/* <PREVSidebarMenu variants={sidebarMenuMotion}>
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.p variants={sidebarMenuItemMotion} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <div style={{ border: `2px solid ${['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'][i]}` }} />
              <div style={{ border: `2px solid ${['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'][i]}` }} />
            </motion.p>
          ))}
        </PREVSidebarMenu> */}
      </SidebarMenu>
    </>
  );
}

const logoAnimation = keyframes`
  0%   { transform: scale3d(1, 1, 1); }
  30%  { transform: scale3d(1.25, 0.75, 1); }
  40%  { transform: scale3d(0.75, 1.25, 1); }
  50%  { transform: scale3d(1.15, 0.85, 1); }
  65%  { transform: scale3d(0.95, 1.05, 1); }
  75%  { transform: scale3d(1.05, 0.95, 1); }
  100% { transform: scale3d(1, 1, 1); }
`;

const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 90;
`;

const Logo = styled.div`
  max-width: 121px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    transition: animation 0.3s cubic-bezier(0.3, 0, 0.3, 1);

    &:hover {
      animation: ${logoAnimation} 0.9s both ease-in-out;
    }
  }

  img {
    height: auto;
    max-width: 100%;
    /* width: auto; */
    /* height: 50px; */
  }
`;

const Icons = styled.div`
  height: 30px;
  display: flex;
  gap: 40px;

  svg {
    fill: ${({ theme }) => theme.font};
    stroke: ${({ theme }) => theme.font};
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }
`;

const SidebarMenu = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 512px;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

const SidebarContainer = styled(motion.div)`
  /* position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  -webkit-overflow-scrolling: touch;
  overflow: auto; */
  position: relative;
  width: 100%;
  margin: auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  z-index: 1;

  background-color: green;
`;

const SidebarWrapper = styled(motion.div)``;

const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

const Socials = styled.div`
  display: flex;
  flex-direction: row;
`;

const SidebarLine = styled.div`
  position: relative;
  left: 7.5%;
  width: 2px;
  background: ${({ theme }) => theme.lineBorder};
  pointer-events: none;
  isolation: isolate;
  z-index: 2;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: -1rem;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.lineBackground};
    border: 2px solid ${({ theme }) => theme.lineBorder};
    box-shadow: ${({ theme }) => theme.lineShadow};
  }
  &:before {
    top: -1rem;
  }
  &:after {
    bottom: -1rem;
  }
`;

const SidebarDots = styled.div`
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

const SidebarBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  background: ${({ theme }) => theme.background2};
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
`;
