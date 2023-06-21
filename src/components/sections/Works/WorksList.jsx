import { styled } from 'styled-components';

import { WorksListItem } from './';
import { rem } from '../../../utils/utils';

export default function WorksList({ projects, count, filterKey }) {
  return (
    <Flexbox>
      {projects.slice(0, count).map((project, index) => (
        <WorksListItem key={`works-list-${filterKey}-${index}`} filterKey={filterKey} project={project} index={index} />
      ))}
    </Flexbox>
  );
}

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(100)};
`;
