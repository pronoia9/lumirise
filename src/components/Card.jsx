import { styled } from 'styled-components';

import { RightArrowSVG } from '.';

export default function Card({ description, link, section = 'more', children }) {
  return (
    <CardContainer className='services-item'>
      {children}

      <CardDesction className='lui-text'>{description}</CardDesction>

      <CardLink href={link} className='lnk'>
        See {section} <RightArrowSVG />
      </CardLink>

      <CardPattern className='image' />
    </CardContainer>
  );
}

const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: 30px 35px;
  background: var(--c-background3);
  border-radius: 18px;
  transition: all 0.3s cubic-bezier(0.3, 0, 0.3, 1);

  &:first-child {
    margin-top: 0;
  }
`;

const CardDesction = styled.div`
  min-height: 175px;
`;

const CardLink = styled.a`
  position: relative;
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
