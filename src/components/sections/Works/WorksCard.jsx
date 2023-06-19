import { styled } from 'styled-components';

import { Card } from '../..';
import { cardMotion } from '../../../utils/motion';
import { rem } from '../../../utils/utils';

export default function WorksCard({ filterKey, project, index }) {
  return (
    <Card key={`projects-${filterKey}-${index}`} {...project} section='Works' motion={cardMotion}>
      <Image className='image'>
        <img src={project.image} />
      </Image>
    </Card>
  );
}

const Image = styled.div`
  width: 100%;
  height: ${rem(180)};
  border-radius: ${rem(18)};
  overflow: hidden;
  margin-bottom: ${rem(30)};

  img {
    width: 100%;
    height: ${rem(180)};
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
