import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { keyframes, styled } from 'styled-components';
import { motion, useCycle } from 'framer-motion';

import { logo } from '../assets';
import { MoonSVG, SunSVG, SidebarButton } from './SVGs';
import { sideMenuData } from '../utils/data';
import { sidebarBackgroundMotion } from '../utils/motion';
import { isDarkTheme, toggleTheme } from '../utils/utils';

export default function Navbar({ theme, setTheme }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  const handleThemeClick = () => { toggleTheme(setTheme); };
  const handleMenuClick = () => { toggleOpen(); };

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

      {/* TEST */}
      <SidebarWrapper ref={containerRef} initial={false} animate={isOpen ? 'open' : 'closed'} custom={containerRef?.current?.offsetHeight}>
        <SidebarBackground variants={sidebarBackgroundMotion} />
        <SidebarMenu>
          <li>asdasd</li>
          <li>asdasd</li>
          <li>asdasd</li>
          <li>asdasd</li>
        </SidebarMenu>
      </SidebarWrapper>

      {/* Menu */}
      {/* <Menu key={`menu-${isOpen}`} {...sideMenuMotion(isOpen)} open={isOpen}></Menu> */}
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

const MenuPREV = styled(motion.div)`
  position: fixed;
  /* right: -612px; */
  top: 0;
  right: 0;
  width: 512px;
  height: 100%;
  background: ${({ theme }) => theme.background2};
  z-index: 2;
  /* transition: all 1s cubic-bezier(0.3, 0, 0.3, 1); */
`;

const SidebarWrapper = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 512px;
  height: 100%;
`;

const SidebarBackground = styled(motion.div)`
  background: ${({ theme }) => theme.background2};
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
`;

const SidebarMenu = styled(motion.ul)`
  width: 100%;
  height: 100%;
`;
