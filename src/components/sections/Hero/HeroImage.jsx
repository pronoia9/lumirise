import { styled } from 'styled-components';

import HeroBadge from './HeroBadge';
import { heroData } from '../../../utils/data';
import { rem } from '../../../utils/utils';

export default function HeroImage() {
  return (
    <Container className='slide scrolla-element-anim-1 scroll-animate animate__active animate__animated'>
      <HeroBadgeList>
        {heroData.badges.map((badge, index) => (
          <HeroBadge key={`hero-badge-${index}`} {...badge} index={index} />
        ))}
      </HeroBadgeList>

      <Image src={heroData.image} />
      <Circle className='circle circle-1' />
      <Pattern1 className='circle img-1' />
      <Pattern2 className='circle img-2' />
      <Pattern3 className='circle img-3' />
    </Container>
  );
}

const Container = styled.div`
  margin-top: ${rem('-390px')};
  position: absolute;
  top: 50%;
  right: ${rem('-20px')}; /* right: -180px; */
  width: ${rem('680px')};
  height: ${rem('800px')};
  z-index: 2;
  isolation: isolate;

  @media screen and (min-width: ${rem('1700px')}) {
    margin-top: ${rem('-400px')};
    right: ${rem('-50px')};
  }

  @media screen and (max-width: ${rem('1024px')}) {
    margin-left: ${rem('-340px')};
    bottom: auto;
    top: ${rem('740px')};
    right: auto;
    left: 50%;
    transform: scale(0.9);
    transform-origin: top center;
  }

  @media screen and (max-width: ${rem('767px')}) {
    top: ${rem('680px')};
    transform: scale(0.5);
  }
`;

const HeroBadgeList = styled.ul`
  position: absolute;
  top: ${rem('420px')};
  left: ${rem('-125px')};
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 12;
`;

const Image = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${rem('380px')};
  z-index: 10;
`;

const Circle = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: ${rem('680px')};
  height: ${rem('680px')};
  background: var(--c-accent);
  border-radius: 100%;
  z-index: 2;
`;

const Pattern1 = styled.span`
  position: absolute;
  top: ${rem('75px')};
  right: ${rem('40px')};
  left: auto;
  width: ${rem('226px')};
  height: ${rem('226px')};
  background-image: url('images/pat-1.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  opacity: 0.6;
  filter: invert(${({ theme }) => theme.dotsInvert ?? 0});
`;

const Pattern2 = styled(Pattern1)`
  background-image: url('images/pat-2.png');
  bottom: ${rem('50px')};
  right: auto;
  top: auto;
  left: ${rem('-110px')};
  width: ${rem('141px')};
  height: ${rem('141px')};
`;

const Pattern3 = styled(Pattern2)`
  bottom: 10px;
  right: -14px;
  top: auto;
  left: auto;
  width: 141px;
  height: 141px;
`;
