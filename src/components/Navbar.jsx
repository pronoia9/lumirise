import { useState } from 'react';
import { Link } from 'react-router-dom';
import { keyframes, styled } from 'styled-components';
import { motion } from 'framer-motion';

import { logo } from '../assets';
import { CloseSVG, HamburgerSVG, MoonSVG, SunSVG } from './SVGs';
import { sideMenuData } from '../utils/data';
import { sideMenuMotion } from '../utils/motion';
import { isDarkTheme, toggleTheme } from '../utils/utils';

export default function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleThemeClick = () => { toggleTheme(setTheme); };
  const handleMenuClick = () => { setMenuOpen((prev) => !prev); };

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
          {!menuOpen && <div onClick={handleThemeClick}>{isDarkTheme(theme) ? <MoonSVG /> : <SunSVG />}</div>}
          {/* Menu Open Button */}
          <div onClick={handleMenuClick}>{!menuOpen ? <HamburgerSVG /> : <CloseSVG />}</div>
        </Icons>
      </Container>

      {/* Menu */}
      {menuOpen && <Menu key={`menu-${menuOpen}`} {...sideMenuMotion(menuOpen)} open={menuOpen}></Menu>}
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
  transition: all 0.3s cubic-bezier(0.3, 0, 0.3, 1);
`;

const Logo = styled.div`
  max-width: 121px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;

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
    fill: ${({ theme }) => theme.font} !important;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }
`;

const Menu = styled(motion.div)`
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
