import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { rem } from '../../../utils/utils';

export default function ExperienceItem({ title, subtitle, dates, description, index, openTabIndex, setOpenTabIndex }) {
  const [open, setOpen] = useState(false);

  // Toggle the open state for the item
  const handleClick = (e) => { setOpen((prev) => !prev); };
  // Update which tab is open using index to close the others
  useEffect(() => { setOpenTabIndex(open ? index : null); }, [open]);

  return (
    <Container className='history-item lui-collapse-item scroll-animate opened animate__active' isopen={`${open}`}>
      <h6 className='name lui-collapse-btn active' onClick={handleClick}>
        {title}
      </h6>
      {openTabIndex === index && (
        <Hidden className='history-content'>
          <Subtitle className='subname'>{subtitle}</Subtitle>
          <Dates className='date lui-subtitle'>
            {dates[0].getFullYear()}
            {dates[1] && ` - ${dates[1].getFullYear()}`}
          </Dates>
          <Description className='text'>
            <p>{description}</p>
          </Description>
        </Hidden>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  border-bottom: ${rem('2px')} solid var(--c-lineBorder);
  border-right: ${rem('2px')} solid var(--c-lineBorder);

  &:first-child {
    border-right: ${rem('2px')} solid transparent;
  }

  h6 {
    margin: 0;
    padding: ${rem('30px')};
    cursor: pointer;

    &:after {
      content: '+';
      transform: ${({ isopen }) => isopen === 'true' && 'rotate(45deg)'};
      position: absolute;
      bottom: ${rem('-24px')};
      right: ${rem('-24px')};
      width: ${rem('48px')};
      height: ${rem('48px')};
      background: var(--c-lineBackground);
      border-radius: 50%;
      border: ${rem('2px')} solid var(--c-lineBorder);
      box-shadow: ${rem('5px')} ${rem('5px')} var(--c-lineShadow);
      font-weight: 400;
      font-size: ${rem('30px')};
      text-align: center;
      line-height: ${rem('40px')};
      z-index: 1;
      transition: all 1.2s cubic-bezier(0.3, 0, 0.3, 1), transform 0.25s ease-in;
    }

    &:hover:after {
      box-shadow: 0 0 var(--c-lineShadow);
    }
  }
`;

const Hidden = styled.div`
  position: relative;
  max-height: ${rem('1000px')};
  padding: 0 ${rem('50px')} 0 ${rem('30px')};
  overflow: hidden;
  transition: all 1s ease 0s;
`;

const Subtitle = styled.div`
  float: left;
  width: 70%;
  font-family: var(--f-secondary);
  font-size: ${rem('28px')};
  line-height: ${rem('40px')};
  font-weight: 700;
`;

const Dates = styled.div`
  float: right;
  line-height: ${rem('46px')};
`;

const Description = styled.div`
  padding: ${rem('15px')} 0 ${rem('30px')} 0;
  clear: both;
  margin: 0;
`;