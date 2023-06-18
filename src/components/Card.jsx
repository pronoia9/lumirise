import { styled, css } from 'styled-components';

import { RightArrowSVG } from '.';
import { motion } from 'framer-motion';

export default function Card(props) {
  const { title, subtitle, description, link } = props; // Common Data
  const { space, section } = props; // Services Data
  const { links, image, year, date, categories, tags, info } = props; // Works Data
  const { descheight, children, motion } = props; // Other

  return (
    <CardContainer {...motion}>
      {/* Image/Etc */}
      {children}

      {/* Subtitle */}
      <CardSubtitle className='lui-subtitle' space={`${space}`}>{subtitle}</CardSubtitle>

      {/* Space between category and title */}
      {space && <CardIcon className='icon' />}

      {/* Title */}
      <CardTitle className='lui-title'>{title}</CardTitle>

      {/* Description */}
      <CardDescription className='lui-text' descheight={descheight}>
        {description}
      </CardDescription>

      {/* Link */}
      <CardLink href={link} className='lnk'>
        See {section} <RightArrowSVG />
      </CardLink>

      {/* Pattern */}
      <CardPattern className='image' />
    </CardContainer>
  );
}

const CardContainer = styled(motion.div)`
  position: relative;
  padding: 30px 35px;
  margin: auto;
  background: var(--c-background3);
  border-radius: 18px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.3, 0, 0.3, 1);

  &:first-child {
    margin-top: 0;
  }
`;

const CardIcon = styled.div`
  margin-top: 15px;
  font-size: 41px;
  min-height: 50px;
  line-height: 1;
  color: var(--c-accent);
`;

const CardSubtitle = styled.div`
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  ${({ space }) => space !== 'true' && css`
    color: var(--c-accent);
    margin-bottom: 5px;
  `}
`;

const CardTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
  margin-bottom: 15px;
`;

const CardDescription = styled.div`
  min-height: ${({ descheight }) => `${descheight}px`};
`;

const CardLink = styled.a`
  position: absolute;
  left: 30px;
  bottom: 30px;
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
    top: 1px;
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
  right: -24px;
  bottom: -24px;
  width: 141px;
  height: 141px;
  background-image: url('images/pat-2.png');
  filter: invert(${({ theme }) => theme.imageInvert});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`;
