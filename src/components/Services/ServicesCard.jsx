import { styled } from 'styled-components';

import { Card } from '..';

export default function ServicesCard({ title, category, description }) {
  return (
    <Card description={description} descriptionHeight={175} section='Works' link='#works'>
      <ServiceCardSubtitle className='lui-subtitle'>
        <span>{category}</span>
      </ServiceCardSubtitle>

      <ServiceCardIcon className='icon' />

      <ServiceCardTitle className='lui-title'>
        <span>{title}</span>
      </ServiceCardTitle>
    </Card>
  );
}

const ServiceCardIcon = styled.div`
  margin-top: 15px;
  font-size: 41px;
  min-height: 50px;
  line-height: 1;
  color: var(--c-accent);
`;

const ServiceCardSubtitle = styled.div`
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ServiceCardTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
  margin-bottom: 15px;
`;
