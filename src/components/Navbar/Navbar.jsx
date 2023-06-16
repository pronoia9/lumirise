import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { keyframes, styled } from 'styled-components';
import { motion, useCycle } from 'framer-motion';

import { ThemeSVGs, SidebarButton, Sidebar } from '..';
import { sidebarData } from '../../utils/data';
import { sidebarMotion } from '../../utils/motion';
import { toggleTheme } from '../../utils/utils';

export default function Navbar({ theme, setTheme }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const overlayRef = useRef();

  const handleThemeClick = () => { toggleTheme(setTheme); };

  const handleMenuClick = () => { toggleOpen(); };

  // Event listener to close the sidebar when clicking elsewhere
  useEffect(() => {
    const clickElsewhere = (e) => { if (isOpen && e.target === overlayRef?.current) toggleOpen(); }
    window.addEventListener('mousedown', clickElsewhere);
    return () => { window.removeEventListener('mousedown', clickElsewhere); };
  }, [isOpen]);

  // Event listener to set scrollY to scrollY
  useEffect(() => {
    const setScroll = () => { setScrollY(window.scrollY); }
    window.addEventListener('scroll', setScroll);
    return () => { window.removeEventListener('scroll', setScroll); };
  }, []);

  return (
    <>
      <Overlay ref={overlayRef} open={isOpen} className='overlayref' />
      <Container scrolly={parseInt(scrollY)}>
        {/* Left Side - Logo */}
        <Logo open={isOpen} scrolly={parseInt(scrollY)}>
          <Link to='/'>
            <img src={sidebarData.logo} />
          </Link>
        </Logo>

        {/* Right Side - Icons */}
        <Icons>
          {/* Theme Button */}
          {!isOpen && <ThemeSVGs theme={theme} handleClick={handleThemeClick} />}
          {/* Menu Open/Close Button */}
          <motion.div initial={false} animate={isOpen ? 'open' : 'closed'} onClick={handleMenuClick}>
            <SidebarButton variants={sidebarMotion.menu} />
          </motion.div>
        </Icons>

        {/* Sidebar */}
        <Sidebar isOpen={isOpen} />
      </Container>
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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ open }) => open ? 'rgba(0, 0, 0, 0.5)' : 'none'};
  transition: all 0.5s ease-in;
  /* pointer-events: none; */
  /* display: ${({ open }) => !open && 'none'}; */
  z-index: 900;
`;

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.85rem;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 901;
  isolation: isolate;

  svg {
    stroke: var(--c-font);
    fill: var(--c-font);
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    /* background-color: ${({ scrolly }) => scrolly && 'var(--c-background)'}; */
    background-color: var(--c-background);
    transition: background-color 0.3s cubic-bezier(0.3, 0, 0.3, 1);
  }
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
    &:hover { animation: ${logoAnimation} 0.9s both ease-in-out; }
  }

  img {
    max-width: 100%;
    height: auto;
    max-height: calc(100% + (1.85rem * 1));
  }

  @media (min-width: 1200px) {
    img {
      transition: all 0.3s cubic-bezier(0.3, 0, 0.3, 1);
      max-height: ${({ scrolly }) => scrolly > 100 && '100%'};
    }
  }

  @media (max-width: 720px) {
    display: ${({ open }) => open && 'none'};
  }
`;

const Icons = styled.div`
  height: 30px;
  display: flex;
  gap: 40px;
  z-index: 999;
`;
