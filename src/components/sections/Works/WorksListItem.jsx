import { styled } from 'styled-components';

import { RightArrowSVG } from '../..';
import { dataStore } from '../../../store/dataStore';
import { CardLink } from '../../../styles';
import { rem } from '../../../utils';

export default function WorksListItem({ project, filterKey, index,  }) {
  const { id, title, subtitle, description, link, links, image, video, year, date, categories, tags, info } = project;
  const setFrameLink = dataStore((state) => state.setFrameLink)

  return (
    <Container>
      <ImageContainer className='image'>
        <ImageWrapper className='img' onClick={() => setFrameLink(links?.live)}>
          <a href='/works/id'>
            <img decoding='async' src={image} alt='Zorro' />
            <span className='overlay'></span>
          </a>
        </ImageWrapper>

        <Pattern className='bg-img' />
      </ImageContainer>

      {/* Info */}
      <InfoContainer className='desc'>
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
      </InfoContainer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 450px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${rem(100)};

  @media (max-width: ${rem(800)}) {
    flex-direction: column;
    background-color: var(--c-background3);
    border-radius: 25px;
    gap: 0;

    div {
      border-radius: 25px 25px 0 0;
      width: 100%;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 55%;
  align-self: stretch;
  isolation: isolate;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: zoom-in;
  transition: transform 0.6s cubic-bezier(0.3, 0, 0.3, 1);

  img {
    width: auto;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.3, 0, 0.3, 1);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: none;
    z-index: 1;
    transition: background-color 0.6s cubic-bezier(0.3, 0, 0.3, 1);
  }

  &:hover {
    transform: scale(0.95);
    img { transform: scale(1.1); }
    &:before { background-color: rgba(0, 0, 0, 0.5); }
  }
`;

const Pattern = styled.div`
  position: absolute;
  right: ${rem(-85)};
  bottom: ${rem(4)};
  width: 141px;
  height: 141px;
  background: url('/images/pat-2.png') center center / contain no-repeat;
  filter: invert(${({ theme }) => theme.dotsInvert ?? 0});
  opacity: 0.6;
  z-index: -1;
`;

const InfoContainer = styled.div`
  position: relative;
  width: 45%;
  height: 100%;
  padding: 5% 8% 5% 0;
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
