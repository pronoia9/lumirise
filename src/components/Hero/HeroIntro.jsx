import { styled } from 'styled-components';
import { heroData } from '../../utils/data';
import Socials from '../Socials';
import { Description, SubtitleWithAccent, SubtitleWithHandwriting, Title } from '../../styles/TextStyles';

export default function HeroTitle() {
  const { name, occupation, intro } = heroData;

  return (
    <Container className='CONTAINER'>
      {/* Title */}
      <Titles>
        <SubtiteTop><p>Hello, <span>my name is</span></p></SubtiteTop>
        <TitleContainer><span>{name.split(' ')[0]}</span> {name.split(' ')[1]}</TitleContainer>
        <SubtiteBottom>I am a <span>{occupation}</span></SubtiteBottom>
      </Titles>

      {/* Description */}
      <DescriptionContainer><p>{intro}</p></DescriptionContainer>

      {/* Socials */}
      <Socials />

      {/* Download Button */}
      <div></div>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 40px;
  position: relative;

  @media screen and (min-width: 1700px) {
    padding-top: 20px;
  }
`;

const Titles = styled.div`
  max-width: 640px;
  /* z-index: 3; */

  @media screen and (max-width: 1024px) {
    margin-bottom: 760px;
    max-width: 100%;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 420px;
    min-height: 160px;
  }
`;

const SubtiteTop = styled(SubtitleWithAccent)``;

const SubtiteBottom = styled(SubtitleWithHandwriting)``;

const TitleContainer = styled(Title)``;

const DescriptionContainer = styled(Description)`
  padding: 40px 0 40px 0;
  max-width: 520px;
`;

const Download = styled.div``;
