import { styled } from 'styled-components';

import { Grid } from '..';
import { SectionWrapper } from '../../hoc';
import { skillsData } from '../../utils/data';
import { rem } from '../../utils/utils';

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
    <Grid size='m'>
      {skillsData.map((skill, index) => (
        <SkillCard key={`skill-${index}`} {...skill} />
      ))}
    </Grid>
  );
};

export default SectionWrapper(Skills, 'skills');

const SkillCardContainer = styled.div`
  position: relative;
  margin: 0 ${rem('30px')} ${rem('70px')} ${rem('30px')};

  &:first-child {
    margin-top: 0;
  }

  * {
    color: var(--c-font);
  }
`;

const SkillTitle = styled.h6`
  margin: 0 ${rem('30px')} ${rem('20px')} ${rem('30px')};
  line-height: 1.25rem;
  max-width: 70%;
`;

const SkillDescription = styled.div`
  margin-bottom: ${rem('30px')};
  opacity: 0.8;
`;

const SkillLevel = styled.div`
  position: relative;
  height: ${rem('2px')};
  background: var(--c-lineShadow);

  div {
    position: relative;
    width: ${({ level }) => `${level}%`};
    height: ${rem('2px')};
    display: block;
    background: var(--c-accent);
    transition: all 0.6s cubic-bezier(0.3, 0, 0.3, 1);

    span {
      position: absolute;
      top: ${rem('-12px')};
      right: 0;
      width: ${rem('25px')};
      height: ${rem('25px')};
      background-color: var(--c-lineBackground);
      border-radius: 50%;
      border: ${rem('2px')} solid var(--c-lineBorder);
      box-shadow: ${rem('5px')} ${rem('5px')} var(--c-lineShadow);

      &:before {
        position: absolute;
        top: 50%;
        left: 50%;
        width: ${rem('10px')};
        height: ${rem('10px')};
        margin-top: ${rem('-5px')};
        margin-left: ${rem('-5px')};
        background-color: #fff;
        border: ${rem('2px')} solid #000;
        border-radius: 50%;
      }
    }
  }
`;

const SkillPercentage = styled.div`
  position: absolute;
  top: 0;
  right: 1.875rem;
  height: 1.25rem;
  font-weight: 700;
  line-height: 1.25rem;
  vertical-align: top;

  span {
    color: var(--c-accent);
  }
`;
