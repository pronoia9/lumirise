import { styled } from 'styled-components';

import { ContactSVGs } from '../../components/SVGs';
import { contactData } from '../../../utils/data';

export default function ContactInfo() {
  return (
    <Container>
      <div className='numbers-items'>
        {contactData.info.map((val, index) => (
          <div class='numbers-item scrolla-element-anim-1 scroll-animate animate__active animate__animated' data-animate='active'>
            <div class='icon'>
              {/* <i aria-hidden='true' class='far fa-map' /> */}
              <ContactSVGs type={val.title} />
            </div>
            <div class='title'>{val.title}</div>
            <div class='lui-text'>{val.description}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .numbers-items {
    position: relative;
    z-index: 2;
  }

  .numbers-item {
    position: relative;
    padding-left: 130px;
    margin-bottom: 40px;
  }

  .numbers-item .icon {
    border: 2px solid var(--c-lineBorder);
    border-radius: 50%;
    -webkit-border-radius: 50%;
    background-color: var(--c-lineBackground);
    box-shadow: 5px 5px 0px 0px var(--c-lineShadow);
    width: 56px;
    height: 56px;
    text-align: center;
    line-height: 52px;
    font-size: 20px;
    position: absolute;
    left: 0;
    top: 0;
  }

  .numbers-item .icon:after {
    content: '';
    position: absolute;
    left: 100%;
    top: 50%;
    width: 40px;
    height: 2px;
    margin-top: -1px;
    background: var(--c-lineBorder);
  }

  .numbers-item .title {
    padding: 10px 0;
    font-family: var(--f-secondary);
    font-size: 30px;
    line-height: 1;
    font-weight: 700;
  }

  svg {
    width: 20px;
    height: auto;
    fill: var(--c-font);
  }
`;
