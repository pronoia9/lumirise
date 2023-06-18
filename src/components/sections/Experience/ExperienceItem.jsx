import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

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
  border-bottom: 2px solid var(--c-lineBorder);
  border-right: 2px solid var(--c-lineBorder);

  &:first-child {
    border-right: 2px solid transparent;
  }

  h6 {
    margin: 0;
    padding: 30px;
    cursor: pointer;

    &:after {
      content: 'o';
      content: ${({ isopen }) => (isopen === 'true' ? '+' : '+')};
      position: absolute;
      bottom: -24px;
      right: -24px;
      width: 48px;
      height: 48px;
      background: var(--c-lineBackground);
      border-radius: 50%;
      border: 2px solid var(--c-lineBorder);
      box-shadow: 5px 5px rgb(0 0 0 / 20%);
      font-weight: 400;
      font-size: 30px;
      text-align: center;
      line-height: 40px;
      z-index: 1;
      transition: all 1.2s cubic-bezier(0.3, 0, 0.3, 1);
    }

    &:hover:after {
      box-shadow: 0 0 rgb(0 0 0 / 20%);
    }
  }
`;

const Hidden = styled.div`
  position: relative;
  max-height: 1000px;
  padding: 0 50px 0 30px;
  overflow: hidden;
  transition: all 1s ease 0s;
`;

const Subtitle = styled.div`
  float: left;
  width: 70%;
  font-family: var(--f-secondary);
  font-size: 28px;
  line-height: 40px;
  font-weight: 700;
`;

const Dates = styled.div`
  float: right;
  line-height: 46px;
`;

const Description = styled.div`
  padding: 15px 0 30px 0;
  clear: both;
  margin: 0;
`;