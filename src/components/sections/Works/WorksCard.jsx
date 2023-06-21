import { styled } from 'styled-components';

import { Card } from '../..';
import { dataStore } from '../../../store/dataStore';
import { cardMotion, rem } from '../../../utils';

export default function WorksCard({ filterKey, project, index }) {
  const setFrameLink = dataStore((state) => state.setFrameLink);

  return (
    <Card key={`projects-${filterKey}-${index}`} {...project} section='Works' motion={cardMotion}>
      <Image onClick={() => setFrameLink(project?.links?.live)} link={`${project?.links?.live.length > 0}`}>
        <img src={project.image} />
      </Image>
    </Card>
  );
}

const Image = styled.div`
  width: 100%;
  height: ${rem(250)};
  border-radius: ${rem(18)};
  overflow: hidden;
  margin-bottom: ${rem(30)};
  cursor: ${({ link }) => link === 'true' && 'zoom-in'};

  img {
    width: 100%;
    height: ${rem(250)};
    border-radius: ${rem(18)};
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
