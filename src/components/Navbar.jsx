import { useState } from 'react';
import { styled } from 'styled-components';

import { logo } from '../assets';
import { MoonSVG, SunSVG } from './SVGs';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      {/* Logo */}
      <Logo>
        <Link to='/'>
          <img src={logo} />
        </Link>
      </Logo>

      {/* Right Side */}
      <div className='col-xs-8 col-sm-8 col-md-8 col-lg-8 align-right'>
        {/* Theme Switcher */}
        <a href='#' class='switcher-btn active'>
          <span class='sw-before'>
            <MoonSVG />
          </span>
          <span class='sw-after'>
            <SunSVG />
          </span>
        </a>
        {/* Menu */}
      </div>
    </Container>
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
  margin-right: 30px;
  width: 121px;

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
