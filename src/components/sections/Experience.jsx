import { css, styled } from 'styled-components';
import { motion } from 'framer-motion';

import { Grid } from '../';
import { SectionWrapper } from '../../hoc';
import { histroyData } from '../../utils/data';
import { useEffect, useRef, useState } from 'react';

const Experience = () => {
  return (
    <Container>
      <Grid columns={2} gap='25px'>
        {/* <Flexbox columns={1}> */}
        <ExperienceColumns column='Education' data={histroyData.education}>
          <ExperienceColumns column='Activities' data={histroyData.activities} />
        </ExperienceColumns>
        {/* </Flexbox> */}
        <ExperienceColumns column='Courses' data={histroyData.courses} />
      </Grid>
    </Container>
  );
};

function ExperienceColumns({ column, data, children }) {
  const [openTabIndex, setOpenTabIndex] = useState(null);

  return (
    <div>
      <h5 className='history-title scrolla-element-anim-1 scroll-animate animate__active' data-animate='active'>
        <span>{column}</span>
      </h5>
      <div className='history-items'>
        {data.map((d, index) => (
          <ExperienceItem key={`${column}-${index}`} {...d} index={index} openTabIndex={openTabIndex} setOpenTabIndex={setOpenTabIndex} />
        ))}
      </div>
      {children}
    </div>
  );
}

function ExperienceItem({ title, subtitle, dates, description, index, openTabIndex, setOpenTabIndex }) {
  const [open, setOpen] = useState(false);

  // Toggle the open state for the item
  const handleClick = (e) => { setOpen((prev) => !prev); };
  // Update which tab is open using index to close the others
  useEffect(() => { setOpenTabIndex(open ? index : null); }, [open]);

  return (
    <div className='history-item lui-collapse-item scroll-animate opened animate__active'>
      <h6 className='name lui-collapse-btn active' isopen={`${open}`} onClick={handleClick}>
        <span>{title}</span>
      </h6>
      {openTabIndex === index && (
        <div className='history-content'>
          <div className='subname'>
            <span>{subtitle}</span>
          </div>
          <div className='date lui-subtitle'>
            <span>
              {dates[0].getFullYear()}
              {dates[1] && ` - ${dates[1].getFullYear()}`}
            </span>
          </div>
          <div className='text'>
            <div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SectionWrapper(Experience, 'experience');

const Container = styled.div`
  .history-title {
    margin: 0;
    padding: 0 0 30px 0;
    line-height: 1;
    text-align: center;
    border-bottom: 2px solid var(--c-lineBorder);
  }

  .history-items {
    position: relative;
    z-index: 2;
  }

  .history-item {
    position: relative;
    border-bottom: 2px solid var(--c-lineBorder);
    border-right: 2px solid var(--c-lineBorder);
  }

  .history-item:first-child {
    border-right: 2px solid transparent;
  }

  .history-item .history-content {
    padding: 0 50px 0 30px;
    position: relative;
    overflow: hidden;
    max-height: 1px;
    transition: all 1s ease 0s;
  }

  .history-item.opened .history-content {
    max-height: 1000px;
  }

  .history-item:nth-child(1) {
    z-index: 20;
  }

  .history-item:nth-child(2) {
    z-index: 19;
  }

  .history-item:nth-child(3) {
    z-index: 18;
  }

  .history-item:nth-child(4) {
    z-index: 17;
  }

  .history-item:nth-child(5) {
    z-index: 16;
  }

  .history-item:nth-child(6) {
    z-index: 15;
  }

  .history-item:nth-child(7) {
    z-index: 14;
  }

  .history-item:nth-child(8) {
    z-index: 13;
  }

  .history-item:nth-child(9) {
    z-index: 12;
  }

  .history-item:nth-child(10) {
    z-index: 11;
  }

  .history-item .name {
    margin: 0;
    padding: 30px;
    cursor: pointer;
  }

  .history-item .name:after {
    content: 'o';
    content: ${({ isopen }) => (isopen === 'true' ? '+' : '+')};
    position: absolute;
    right: -24px;
    bottom: -24px;
    width: 48px;
    height: 48px;
    line-height: 40px;
    background: var(--c-lineBackground);
    border-radius: 50%;
    border: 2px solid var(--c-lineBorder);
    box-shadow: 5px 5px rgb(0 0 0 / 20%);
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    transition: all 1.2s cubic-bezier(0.3, 0, 0.3, 1);
    z-index: 2;
  }

  .history-item .name:hover:after {
    box-shadow: 0 0 rgb(0 0 0 / 20%);
  }

  .history-item .subname {
    float: left;
    width: 70%;
    font-family: var(--f-secondary);
    font-size: 28px;
    line-height: 40px;
    font-weight: 700;
  }

  .history-item .date {
    float: right;
    line-height: 46px;
  }

  .history-item .text {
    padding: 15px 0 30px 0;
    clear: both;
  }

  .history-item .text p {
    margin: 0;
  }
`;

const ExperienceColumnsContainer = styled.div``;

const Flexbox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
