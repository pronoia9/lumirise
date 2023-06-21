import { styled } from 'styled-components';

import { HeroBadge } from '../..';
import { dataStore } from '../../../store/dataStore';
import { rem } from '../../../utils';

export default function HeroImage() {
  const data = dataStore((state) => state.hero);
  return (
    <Container>
      <HeroBadgeList>
        {data.badges.map((badge, index) => (
          <HeroBadge key={`hero-badge-${index}`} {...badge} index={index} />
        ))}
      </HeroBadgeList>

      <Image src={data.image} />
      <Circle />
      <Pattern1 />
      <Pattern2 />
      <Pattern3 />
    </Container>
  );
}

const Container = styled.div`
  margin-top: ${rem(-390)};
  position: absolute;
  top: 50%;
  right: ${rem(-20)}; /* right: -180px; */
  width: ${rem(680)};
  height: ${rem(800)};
  z-index: 2;
  isolation: isolate;

  @media screen and (min-width: ${rem(1700)}) {
    margin-top: ${rem(-400)};
    right: ${rem(-50)};
  }

  @media screen and (max-width: ${rem(1024)}) {
    margin-left: ${rem(-340)};
    bottom: auto;
    top: ${rem(740)};
    right: auto;
    left: 50%;
    transform: scale(0.9);
    transform-origin: top center;
  }

  @media screen and (max-width: ${rem(770)}) {
    top: ${rem(640)};
    transform: scale(0.5);
  }

  @media screen and (max-width: ${rem(500)}) {
    top: ${rem(550)};
  }
`;

const HeroBadgeList = styled.ul`
  position: absolute;
  top: ${rem(420)};
  left: ${rem(-125)};
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
  border-radius: ${rem(380)};
  z-index: 10;
`;

const Circle = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: ${rem(680)};
  height: ${rem(680)};
  background: var(--c-accent);
  border-radius: 100%;
  z-index: 2;
`;

const Pattern1 = styled.span`
  position: absolute;
  top: ${rem(75)};
  right: ${rem(40)};
  left: auto;
  width: ${rem(226)};
  height: ${rem(226)};
  background-image: url('images/pat-1.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  opacity: 0.6;
  filter: invert(${({ theme }) => theme.dotsInvert ?? 0});
`;

const Pattern2 = styled(Pattern1)`
  background-image: url('images/pat-2.png');
  bottom: ${rem(50)};
  right: auto;
  top: auto;
  left: ${rem(-110)};
  width: ${rem(141)};
  height: ${rem(141)};
`;

const Pattern3 = styled(Pattern2)`
  bottom: 10px;
  right: -14px;
  top: auto;
  left: auto;
  width: 141px;
  height: 141px;
`;
