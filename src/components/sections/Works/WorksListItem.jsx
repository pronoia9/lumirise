import { styled } from 'styled-components';

import { RightArrowSVG } from '../../components/SVGs';
import { CardLink } from '../../../styles/TextStyles.js';
import { rem } from '../../../utils/utils';

export default function WorksListItem({ project, filterKey, index }) {
  const { id, title, subtitle, description, link, links, image, video, year, date, categories, tags, info } = project;
  console.log(project);

  return (
    <Container>
      <Image className='image'>
        <div className='img'>
          <a href='/works/id'>
            <img decoding='async' src={image} alt='Zorro' />
            <span className='overlay'></span>
          </a>
        </div>

        <Pattern className='bg-img' />
      </Image>

      {/* Info */}
      <Info className='desc'>
        {/* Subtitle */}
        <Subtitle className='category'>{subtitle}</Subtitle>

        {/* Title */}
        <Title className='name'>
          <a href='work-single.html'>{title}</a>
        </Title>

        {/* Description */}
        <Description className='text'>
          <p>{description}</p>
        </Description>

        {/* Links */}
        <Links>
          {links?.repo && (
            <CardLink href={links.repo}>
              See source code <RightArrowSVG />
            </CardLink>
          )}
          {links?.live && (
            <CardLink href={links.live}>
              See live site <RightArrowSVG />
            </CardLink>
          )}
        </Links>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${rem(100)};

  @media (max-width: ${rem(800)}) {
    flex-direction: column;
    align-items: center;
    background-color: var(--c-background3);
    border-radius: 25px;
    gap: 0;
    
    div {
      border-radius: 25px 25px 0 0;
      width: 100%;
    }
  }
`;

const Image = styled.div`
  position: relative;
  width: 50%;
  isolation: isolate;
  
  & > div:first-child {
    height: 100%;
    overflow: hidden;
    
    img {
      width: auto;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Pattern = styled.div`
  position: absolute;
  right: ${rem(-85)};
  bottom: ${rem(4)};
  width: 141px;
  height: 141px;
  background: url('/public/images/pat-2.png') center center / contain no-repeat;
  filter: invert(${({ theme }) => theme.dotsInvert ?? 0});
  opacity: 0.6;
  z-index: -1;
`;

const Info = styled.div`
  position: relative;
  width: 50%;
  min-height: 450px;
  padding: 0 8% 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${rem(800)}) {
    padding: ${rem(30)};
  }
`;

const Subtitle = styled.span`
  margin-bottom: 5px;
  display: block;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--c-accent);
`;

const Title = styled.h5`
  margin-bottom: 0;
  color: var(--c-font);
  font-size: 58px;
  line-height: 1;
  font-weight: 700;
  display: block;

  a {
    color: var(--c-font);
  }
`;

const Description = styled.div`
  opacity: 0.9;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    position: static;
  }
`;
