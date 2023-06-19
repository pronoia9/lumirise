import { styled, css } from 'styled-components';
import { motion } from 'framer-motion';

import { RightArrowSVG } from '.';
import { rem } from '../../utils/utils';

export default function Card(props) {
  const { title, subtitle, description, link } = props; // Common Data
  const { space, section } = props; // Services Data
  const { links, image, year, date, categories, tags, info } = props; // Works Data
  const { children, motion } = props; // Other

  return (
    <CardContainer {...motion}>
      {/* Image/Etc */}
      {children}

      {/* Subtitle */}
      <CardSubtitle space={`${space}`}>{subtitle}</CardSubtitle>

      {/* Space between category and title */}
      {space && <CardIcon />}

      {/* Title */}
      <CardTitle>{title}</CardTitle>

      {/* Description */}
      <CardDescription>
        {description}
      </CardDescription>

      {/* Link */}
      <CardLink href={link}>
        See {section} <RightArrowSVG />
      </CardLink>

      {/* Pattern */}
      <CardPattern />
    </CardContainer>
  );
}

const CardContainer = styled(motion.div)`
  position: relative;
  padding: ${rem(30)} ${rem(35)};
  margin: 0;
  background: var(--c-background3);
  border-radius: ${rem(18)};
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.3, 0, 0.3, 1);

  &:first-child {
    margin-top: 0;
  }
`;

const CardIcon = styled.div`
  margin-top: ${rem(15)};
  font-size: ${rem(41)};
  min-height: ${rem(50)};
  line-height: 1;
  color: var(--c-accent);
`;

const CardSubtitle = styled.div`
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  ${({ space }) => space !== 'true' && css`
    color: var(--c-accent);
    margin-bottom: ${rem(5)};
  `}
`;

const CardTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
  margin-bottom: ${rem(15)};
`;

const CardDescription = styled.div`
  margin-bottom: ${rem(85)};
  /* min-height: ${({ descheight }) => `${descheight}px`}; */
`;

const CardLink = styled.a`
  position: absolute;
  left: ${rem(30)};
  bottom: ${rem(30)};
  height: 1.375rem;
  display: inline-block;
  vertical-align: top;
  color: var(--c-font);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.375rem;
  text-decoration: none;
  transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);

  svg {
    position: relative;
    left: 0;
    top: ${rem(1)};
    width: 1rem;
    height: auto;
    margin-left: 1.25rem;
    font-weight: 900;
    fill: var(--c-accent);
    transition: all 0.3s cubic-bezier(0.3, 0, 0.3, 1);
  }

  &:hover svg {
    margin-left: 0.9rem;
  }
`;

const CardPattern = styled.div`
  position: absolute;
  right:  ${rem(-24)};
  bottom:  ${rem(-24)};
  width:  ${rem(141)};
  height:  ${rem(141)};
  background-image: url('images/pat-2.png');
  filter: invert(${({ theme }) => theme.dotsInvert ?? 0});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`;
