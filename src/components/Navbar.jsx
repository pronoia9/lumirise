import { Link } from 'react-router-dom';
import { keyframes, styled } from 'styled-components';
import { motion, useCycle } from 'framer-motion';

import { logo } from '../assets';
import { ThemeSVGs, SidebarButton, SocialSVGs } from './SVGs';
import { sidebarData } from '../utils/data';
import { sidebarBackgroundMotion, sidebarLinksMotion, sidebarLinkItemMotion, sidebarSocialItemMotion, sidebarSocialsMotion } from '../utils/motion';
import { isDarkTheme, toggleTheme } from '../utils/utils';

export default function Navbar({ theme, setTheme }) {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const handleThemeClick = () => { toggleTheme(setTheme); };
  const handleMenuClick = () => { toggleOpen(); };

  return (
    <>
      <Container>
        {/* Logo */}
        <Logo open={isOpen}>
          <Link to='/'>
            <img src={logo} />
          </Link>
        </Logo>

        <Icons>
          {/* Theme Button */}
          {!isOpen && <div onClick={handleThemeClick}><ThemeSVGs theme={theme} /></div>}
          {/* Menu Open/Close Button */}
          <motion.div initial={false} animate={isOpen ? 'open' : 'closed'} onClick={handleMenuClick}>
            <SidebarButton />
          </motion.div>
        </Icons>
      </Container>

      {/* Sidebar Menu */}
      <SidebarMenu initial={false} animate={isOpen ? 'open' : 'closed'} open={isOpen}>
        <SidebarContainer>
          {/* Line + Dots */}
          <SidebarLine animate={{ opacity: isOpen ? 1 : 0 }}>
            <SidebarDots />
          </SidebarLine>

          {/* Links */}
          <Links variants={sidebarLinksMotion}>
            {sidebarData.links.map(({ title, link }) => (
              <LinksItem key={`link-${title}`} variants={sidebarLinkItemMotion} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link to='/'>{title}</Link>
              </LinksItem>
            ))}
          </Links>

          {/* Socials */}
          <Socials variants={sidebarSocialsMotion}>
            {sidebarData.socials.map(({ title, link }) => (
              <SocialsItem key={`social-${title}`} variants={sidebarSocialItemMotion}>
                <Link to={link}>
                  <SocialSVGs social={title} />
                </Link>
              </SocialsItem>
            ))}
          </Socials>
        </SidebarContainer>
        <SidebarBackground variants={sidebarBackgroundMotion} />
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
    &:hover { animation: ${logoAnimation} 0.9s both ease-in-out; }
  }

  img {
    height: auto;
    max-width: 100%; 
    /* width: auto; */ /* height: 50px; */
  }

  @media (max-width: 720px) { display: ${({open}) => open && 'none'} }
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
  pointer-events: ${({ open }) => (open ? 'all' : 'none')};
  display: ${({ open }) => (open ? '' : 'none')};
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
  background: ${({ theme }) => theme.lineBorder};
  pointer-events: none;
  isolation: isolate;
  z-index: 2;

  &::before, &::after {
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
  &:before { top: -1rem; }
  &:after { bottom: -1rem; }
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
`;

const LinksItem = styled(motion.li)`
  a {
    font-family: 'Jost';
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1;
    color: ${({ theme }) => theme.font};
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
`;

const Socials = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`;

const SocialsItem = styled(motion.p)`
  svg {
    fill: ${({ theme }) => theme.font};
    stroke: ${({ theme }) => theme.font};
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }
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
