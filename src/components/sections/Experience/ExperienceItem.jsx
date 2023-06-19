import { useEffect, useRef, useState } from 'react';
import { css, styled } from 'styled-components';

import { rem } from '../../../utils/utils';

export default function ExperienceItem({ title, subtitle, dates, description, index, openTabIndex, setOpenTabIndex }) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    console.log(btnRef);
  }, []);

  // Toggle the open state for the item
  const handleClick = (e) => { setOpen((prev) => !prev); };
  // Update which tab is open using index to close the others
  useEffect(() => { setOpenTabIndex(open ? index : null); }, [open]);

  return (
    <Container className='history-item lui-collapse-item scroll-animate opened animate__active' isopen={`${open}`}>
      <h6 ref={btnRef} className='name lui-collapse-btn active' onClick={handleClick}>
        {title}
      </h6>
      <Hidden className='history-content' isopen={`${openTabIndex === index}`}>
        <div>
          <Subtitle className='subname'>{subtitle}</Subtitle>
          <Dates className='date lui-subtitle'>
            {dates[0].getFullYear()}
            {dates[1] && ` - ${dates[1].getFullYear()}`}
          </Dates>
          <Description className='text'>
            <p>{description}</p>
          </Description>
        </div>
      </Hidden>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  border-bottom: ${rem(2)} solid var(--c-lineBorder);
  border-right: ${rem(2)} solid var(--c-lineBorder);

  &:first-child {
    border-right: ${rem(2)} solid transparent;
  }

  h6 {
    margin: 0;
    padding: ${rem(30)};
    cursor: pointer;

    ${({ isopen }) => isopen === 'true' ? css` &:after { content: '--'; }` : css` &:after { content: '+'; }`}

    &:after {
      position: absolute;
      bottom: ${rem(-24)};
      right: ${rem(-24)};
      width: ${rem(48)};
      height: ${rem(48)};
      background: var(--c-lineBackground);
      border-radius: 50%;
      border: ${rem(2)} solid var(--c-lineBorder);
      box-shadow: ${rem(5)} ${rem(5)} var(--c-lineShadow);
      font-weight: ${({ isopen }) => isopen === 'true' ? 600 : 400};
      font-size: ${rem(30)};
      line-height: ${rem(40)};
      text-align: center;
      letter-spacing: -1px;
      z-index: 1;
      transition: all 1.2s cubic-bezier(0.3, 0, 0.3, 1), font-weight 0s;
    }

    &:hover:after {
      box-shadow: 0 0 var(--c-lineShadow);
    }
  }
`;

const Hidden = styled.div`
  position: relative;
  max-height: ${rem(1000)};
  padding: 0 ${rem(50)} 0 ${rem(30)};
  overflow: hidden;
  transition: all 1s ease 0s;
  /* Height Transition */
  display: grid;
  grid-template-rows: ${({ isopen }) => isopen === 'true' ? '1fr' : '0fr'};
  transition: grid-template-rows 0.5s ease-in;
  & > div {
    overflow: hidden;
  }
`;

const Subtitle = styled.div`
  float: left;
  width: 70%;
  font-family: var(--f-secondary);
  font-size: ${rem(28)};
  line-height: ${rem(40)};
  font-weight: 700;
`;

const Dates = styled.div`
  float: right;
  line-height: ${rem(46)};
`;

const Description = styled.div`
  padding: ${rem(15)} 0 ${rem(30)} 0;
  clear: both;
  margin: 0;
`;