import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import { heroMotion } from '../../utils/motion';

export default function HeroBadge({ total, plus, title, context, index }) {
  return (
    <HeroBadgeItem {...heroMotion.badge(index === 0 ? -1 : 1)}>
      <HeroBadgeTotal className='num'>
        {total}
        <strong>{plus ? ' +' : ''}</strong>
      </HeroBadgeTotal>
      <HeroBadgeContext className='value'>
        {title} <strong>{context}</strong>
      </HeroBadgeContext>
    </HeroBadgeItem>
  );
}

const HeroBadgeItem = styled(motion.li)`
  width: 250px;
  height: 82px;
  margin: 0;
  padding: 0 20px;
  display: flex;
  align-items: center;
  color: var(--c-font);
  border: 2px solid var(--c-lineBorder);
  background-color: var(--c-lineBackground);
  box-shadow: 5px 5px var(--c-lineShadow);
  border-radius: 82px;

  &:nth-child(1) { margin: 160px 0 0 100px; }
  &:nth-child(2) { margin: -30px 0 0 520px; }
`;

const HeroBadgeTotal = styled.span`
  font-size: 2.31rem;
  text-align: center;
  width: 50%;
  display: block;
  text-transform: uppercase;
  line-height: 1.25rem;
  font-weight: 700;

  strong {
    position: relative;
    top: -4px;
    color: var(--c-accent);
  }
`;

const HeroBadgeContext = styled(HeroBadgeTotal)`
  font-size: 0.8rem;
  letter-spacing: 0.05rem;
  text-align: left;
`;
