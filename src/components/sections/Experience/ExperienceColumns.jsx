import { useState } from 'react';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

import ExperienceItem from './ExperienceItem';

export default function ExperienceColumns({ column, data, children }) {
  const [openTabIndex, setOpenTabIndex] = useState(null);

  return (
    <Container>
      <h5 className='history-title'>{column}</h5>
      <div className='history-items'>
        {data.map((d, index) => (
          <ExperienceItem key={`${column}-${index}`} {...d} index={index} openTabIndex={openTabIndex} setOpenTabIndex={setOpenTabIndex} />
        ))}
      </div>
      {children}
    </Container>
  );
}

const Container = styled.div`
  h5 {
    margin: 0;
    padding: 0 0 30px 0;
    line-height: 1;
    text-align: center;
    border-bottom: 2px solid var(--c-lineBorder);
  }

  div {
    position: relative;
  }
`;
