import { styled } from 'styled-components';

import { Socials } from '..';
import { heroData } from '../../utils/data';
import { Description, SubtitleWithAccent, SubtitleWithHandwriting, Title } from '../../styles/TextStyles';

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
      <Download className='bts'>
        <a href={heroData.resumeLink} target='_blank' className='btn'><span>Download CV</span></a>
        <a href='#skills' className='btn-link'>My Skills</a>
      </Download>
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

const Download = styled.div`
  a {
    position: relative;
    height: 56px;
    display: inline-block;
    color: var(--c-font);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);

    &:first-child {
      padding: 0 40px;
      line-height: 52px;
      text-align: center;
      vertical-align: top;
      outline: none !important;
      background: transparent;
      border: 2px solid var(--c-lineBorder);
      box-shadow: 5px 5px var(--c-lineShadow);
      border-radius: 56px;
      cursor: pointer;
      overflow: hidden;
      isolation: isolate;

      &:before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        width: 0%;
        height: 0%;
        background: var(--c-accent);
        transition: all 0.6s cubic-bezier(0.3, 0, 0.3, 1);
        transform: translate(-50%, -50%);
        border-radius: 56px;
        opacity: 0;
        z-index: -1;
        filter: blur(10px);
      }

      &:hover {
        &:before {
          width: calc(100% - 4px);
          height: calc(100% - 4px);
          opacity: 1;
          filter: blur(0px);
        }
      }
    }

    &:last-child {
      padding-left: 70px;
      line-height: 56px;
      vertical-align: top;

      &:before {
        content: '';
        position: absolute;
        left: -1px;
        top: 50%;
        margin-top: -1px;
        height: 2px;
        width: 40px;
        background: var(--c-font);
      }

      &:hover {
        color: var(--c-accent);
      }
    }
  }
`;
