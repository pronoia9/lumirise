import { useState } from 'react';
import { styled } from 'styled-components';

import { logo } from '../assets';
import { HamburgerSVG, MoonSVG, SunSVG } from './SVGs';
import { Link } from 'react-router-dom';
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
          <div onClick={handleThemeClick}>
            {isDarkTheme(theme) ? <MoonSVG /> : <SunSVG />}
          </div>
          {/* Menu Open Button */}
          <div onClick={handleMenuClick}>
            <HamburgerSVG />
          </div>
        </Icons>
      </Container>

      {/* Menu */}
      {menuOpen && <Menu></Menu>}
    </>
  );
}

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
  }

  img {
    height: auto;
    max-width: 100%;
    /* width: auto; */
    /* height: 50px; */
    transition: all 0.3s cubic-bezier(0.3, 0, 0.3, 1);
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

const Menu = styled.div``;
