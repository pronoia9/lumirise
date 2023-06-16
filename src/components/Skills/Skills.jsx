import { styled } from 'styled-components';

import { SectionWrapper } from '../../hoc';
import { skillsData } from '../../utils/data';

const SkillCard = ({ title, description, level }) => {
  return (
    <SkillCardContainer className='skills-item scrolla-element-anim-1 scroll-animate animate__active animate__animated'>
      <SkillTitle>{title}</SkillTitle>
      <SkillDescription>{description}</SkillDescription>
      <SkillLevel className='dots' level={level}><div><span /></div></SkillLevel>
      <SkillPercentage className='value'>{level} <span>%</span></SkillPercentage>
    </SkillCardContainer>
  );
};

const Skills = () => {
  return (
    <Container>
      {skillsData.map((skill, index) => (
        <SkillCard key={`skill-${index}`} {...skill} />
      ))}
    </Container>
  );
};

export default SectionWrapper(Skills, 'skills');

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCardContainer = styled.div`
  position: relative;
  margin: 0 30px 70px 30px;

  &:first-child {
    margin-top: 0;
  }

  * {
    color: var(--c-font);
  }
`;

const SkillTitle = styled.h6`
  margin: 0 30px 20px 30px;
  line-height: 20px;

  @media screen and (max-width: 767px) {
    max-width: 75%;
  }
`;

const SkillDescription = styled.div`
  margin-bottom: 30px;
`;

const SkillLevel = styled.div`
  position: relative;
  height: 2px;
  background: var(--c-lineShadow);

  div {
    position: relative;
    display: block;
    width: ${({ level }) => `${level}%`};
    height: 2px;
    background: var(--c-accent);
    transition: all 0.6s cubic-bezier(0.3, 0, 0.3, 1);

    span {
      border: 2px solid var(--c-lineBorder);
      border-radius: 50%;
      background-color: var(--c-lineBackground);
      box-shadow: 5px 5px var(--c-lineShadow);
      position: absolute;
      right: 0;
      top: -12px;
      width: 25px;
      height: 25px;

      &:before {
        margin-top: -5px;
        margin-left: -5px;
        border: 2px solid #000;
        border-radius: 50%;
        background-color: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        width: 10px;
        height: 10px;
      }
    }
  }
`;

const SkillPercentage = styled.div`
  position: absolute;
  top: 0;
  right: 30px;
  height: 20px;
  vertical-align: top;
  font-weight: 700;
  line-height: 20px;

  span {
    color: var(--c-accent);
  }
`;
