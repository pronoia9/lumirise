import { styled } from 'styled-components';

import { ContactSVGs } from '../../components/SVGs';
import { contactData } from '../../../utils/data';
import { rem } from '../../../utils/utils';

const ContactInfoItem = ({ title, description }) => (
  <Item class='numbers-item scrolla-element-anim-1 scroll-animate animate__active animate__animated' data-animate='active'>
    <Icon class='icon'><ContactSVGs type={title} /></Icon>
    <Title class='title'>{title}</Title>
    <Description class='lui-text'>{description}</Description>
  </Item>
);

export default function ContactInfo() {
  return (
    <div>
      {contactData.info.map((val, index) => (
        <ContactInfoItem key={`contact-info-item-${index}`} {...val} />
      ))}
    </div>
  );
}

const Item = styled.div`
  position: relative;
  padding-left: ${rem(130)};
  margin-bottom: ${rem(40)};
`;

const Icon = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: ${rem(56)};
  height: ${rem(56)};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--c-lineBackground);
  border: 2px solid var(--c-lineBorder);
  border-radius: 50%;
  box-shadow: ${rem(5)} ${rem(5)} 0 0 var(--c-lineShadow);

  &:after {
    content: '';
    position: absolute;
    left: 100%;
    top: 50%;
    width: ${rem(40)};
    height: ${rem(2)};
    margin-top: ${rem(-1)};
    background: var(--c-lineBorder);
  }

  svg {
    width: auto;
    max-width: ${rem(20)};
    height: auto;
    max-height: ${rem(20)};
    height: auto;
    fill: var(--c-font);
  }
`;

const Title = styled.div`
  padding: ${rem(10)} 0;
  font-family: var(--f-secondary);
  font-size: ${rem(30)};
  font-weight: 700;
  line-height: 1;
`;

const Description = styled.div`
  opacity: 0.75;
`;