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
          <Image className='image'>
            <img src={project.image} />
          </Image>
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

const Image = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 18px;
  overflow: hidden;
  margin-bottom: 30px;

  img {
    width: 100%;
    height: 250px;
    border-radius: 18px;
    object-fit: cover;
    transform: scale(1);
    transition: transform 0.6s cubic-bezier(0.3, 0, 0.3, 1);
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;
