import { styled } from 'styled-components';

import { Card } from '..';
import { SectionWrapper } from '../../hoc';
import { projectsData } from '../../utils/data';

const Works = () => {
  return (
    <Container>
      {projectsData.projects.map((project, index) => (
        <Card key={`project-${index}`} {...project} descheight={275} section='Works'>
          {/* IMAGE HERE */}
        </Card>
      ))}
    </Container>
  );
};
export default SectionWrapper(Works, 'works');

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;
