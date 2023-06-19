import { useState } from 'react';
import { styled } from 'styled-components';

import ExperienceItem from './ExperienceItem';
import { rem } from '../../../utils/utils';

export default function ExperienceColumns({ column, data }) {
  const [openTabIndex, setOpenTabIndex] = useState(null);

  return (
    <Container>
      <h5 className='history-title'>{column}</h5>
      <div className='history-items'>
        {data.map((d, index) => (
          <ExperienceItem key={`${column}-${index}`} {...d} index={index} openTabIndex={openTabIndex} setOpenTabIndex={setOpenTabIndex} />
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  h5 {
    margin: 0;
    padding: 0 0 ${rem('30px')} 0;
    line-height: 1;
    text-align: center;
    border-bottom: ${rem('2px')} solid var(--c-lineBorder);
  }

  div {
    position: relative;
  }
`;
