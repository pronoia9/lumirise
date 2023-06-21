import { styled } from 'styled-components';

import { rem } from '../../../utils';

export default function SkillCard({ title, description, level, percentage }) {
  return (
    <SkillCardContainer>
      <SkillTitle>{title}</SkillTitle>
      <SkillDescription>{description}</SkillDescription>
      <SkillLevel level={level}>
        <div>
          <span />
        </div>
      </SkillLevel>
      {percentage && (
        <>
          <SkillPercentage>
            {level} <span>%</span>
          </SkillPercentage>
        </>
      )}
    </SkillCardContainer>
  );
}

const SkillCardContainer = styled.div`
  position: relative;
  margin: 0 ${rem(30)} ${rem(70)} ${rem(30)};

  &:first-child {
    margin-top: 0;
  }

  * {
    color: var(--c-font);
  }
`;

const SkillTitle = styled.h6`
  margin: 0 ${rem(30)} ${rem(20)} ${rem(30)};
  line-height: 1.25rem;
  max-width: 70%;
`;

const SkillDescription = styled.div`
  margin-bottom: ${rem(30)};
  opacity: 0.8;
`;

const SkillLevel = styled.div`
  position: relative;
  height: ${rem(2)};
  background: var(--c-lineShadow);

  div {
    position: relative;
    width: ${({ level }) => `${level}%`};
    height: ${rem(2)};
    display: block;
    background: var(--c-accent);
    transition: all 0.6s cubic-bezier(0.3, 0, 0.3, 1);

    span {
      position: absolute;
      top: ${rem(-12)};
      right: 0;
      width: ${rem(25)};
      height: ${rem(25)};
      background-color: var(--c-lineBackground);
      border-radius: 50%;
      border: ${rem(2)} solid var(--c-lineBorder);
      box-shadow: ${rem(5)} ${rem(5)} var(--c-lineShadow);

      &:before {
        position: absolute;
        top: 50%;
        left: 50%;
        width: ${rem(10)};
        height: ${rem(10)};
        margin-top: ${rem(-5)};
        margin-left: ${rem(-5)};
        background-color: #fff;
        border: ${rem(2)} solid #000;
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
