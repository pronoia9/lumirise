import { styled } from 'styled-components';

import { Socials } from '..';
import { heroData } from '../../utils/data';
import { Description, SubtitleWithAccent, SubtitleWithHandwriting, Title } from '../../styles/TextStyles';
import { UnfilledButton } from '../../styles/ButtonStyles';

export default function HeroTitle() {
  const { name, occupation, intro } = heroData;

  return (
    <Container className='content scrolla-element-anim-1 scroll-animate animate__active animate__animated'>
      {/* Title */}
      <Titles className='titles'>
        <SubtitleWithAccent><p>Hello, <span>my name is</span></p></SubtitleWithAccent>
        <Title><span>{name.split(' ')[0]}</span> {name.split(' ')[1]}</Title>
        <SubtitleWithHandwriting>I am a <span>{occupation}</span></SubtitleWithHandwriting>
      </Titles>

      {/* Description */}
      <DescriptionContainer className='description'>
        <p>{intro}</p>
        <Socials />
      </DescriptionContainer>

      {/* Download Button */}
      <UnfilledButton className='bts'>
        <a href={heroData.resumeLink} target='_blank' className='btn'><span>Download CV</span></a>
        <a href='#skills' className='btn-link'>My Skills</a>
      </UnfilledButton>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 40px;
  position: relative;

  @media screen and (min-width: 1700px) {
    padding-top: 20px;
  }

  @media screen and (max-width: 1024px) {
    padding-top: 140px;
    text-align: center;
  }

  @media screen and (max-width: 767px) {
		padding-top: 120px;
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

const DescriptionContainer = styled(Description)`
  padding: 40px 0 40px 0;
  max-width: 520px;

  p {
    margin-top: 0;
  }

   @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
   }
`;
