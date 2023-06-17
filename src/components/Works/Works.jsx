import { styled } from 'styled-components';

import { Card } from '..';
import { SectionWrapper } from '../../hoc';
import { projectsData } from '../../utils/data';
import { UnfilledButton } from '../../styles/ButtonStyles';

const Works = () => {
  return (
    <Container>
      <Wrapper>
        {projectsData.projects.slice(0, 6).map((project, index) => (
          <Card key={`project-${index}`} {...project} descheight={275} section='Works'>
            {/* IMAGE HERE */}
            <Image className='image'>
              <img src={project.image} />
            </Image>
          </Card>
        ))}
      </Wrapper>

      {projectsData.projects.length > 6 && (
        <UnfilledButton className='bts'>
          <p>Load More</p>
        </UnfilledButton>
      )}
    </Container>
  );
};
export default SectionWrapper(Works, 'works');

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;

const Image = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 18px;
  overflow: hidden;
  margin-bottom: 30px;

  img {
    width: 100%;
    height: 180px;
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
