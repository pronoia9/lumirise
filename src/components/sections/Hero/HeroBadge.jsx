import { motion } from 'framer-motion';
import { styled } from 'styled-components';

import { heroMotion } from '../../../utils/motion';
import { rem } from '../../../utils/utils';

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
  width: ${rem(250)};
  height: ${rem(82)}x;
  margin: 0;
  padding: 0 ${rem(20)};
  display: flex;
  align-items: center;
  color: var(--c-font);
  border: ${rem(2)} solid var(--c-lineBorder);
  background-color: var(--c-lineBackground);
  box-shadow: ${rem(5)} ${rem(5)} var(--c-lineShadow);
  border-radius: ${rem(82)};

  &:nth-child(1) { margin: ${rem(160)} 0 0 ${rem(100)}; }
  &:nth-child(2) { margin: ${rem(-30)} 0 0 ${rem(520)}; }
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
    top: ${rem(-4)};
    color: var(--c-accent);
  }
`;

const HeroBadgeContext = styled(HeroBadgeTotal)`
  font-size: 0.8rem;
  letter-spacing: 0.05rem;
  text-align: left;
`;
