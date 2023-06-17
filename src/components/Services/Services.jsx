import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { styled } from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';

import { RightArrowSVG } from '..';
import { SectionWrapper } from '../../hoc';
import { servicesData } from '../../utils/data';
import { Description } from '../../styles/TextStyles';

const ServicesCard = ({ title, category, description }) => (
  <ServiceCardContainer className='services-item'>
    <ServiceCardSubtitle className='lui-subtitle'>
      <span>{category}</span>
    </ServiceCardSubtitle>
    <ServiceCardIcon className='icon' />
    <ServiceCardTitle className='lui-title'>
      <span>{title}</span>
    </ServiceCardTitle>
    <ServiceCardDesction className='lui-text'>{description}</ServiceCardDesction>
    <ServiceCardLink href='#works' className='lnk'>
      See Works <RightArrowSVG />
    </ServiceCardLink>
    <ServiceCardPattern className='image' />
  </ServiceCardContainer>
);

const Services = () => {
  const options = {
    modules: [Pagination, A11y],
    spaceBetween: 50,
    slidesPerView: 3,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 20 },
      640: { slidesPerView: 2, spaceBetween: 30 },
      1024: { slidesPerView: 3, spaceBetween: 40 },
    },
  };

  return (
    <Container>
      <Swiper {...options}>
        {servicesData.map((service, index) => (
          <SwiperSlide key={`service-${index}`}>
            <ServicesCard {...service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default SectionWrapper(Services, 'services');

const Container = styled.div`
  .swiper-container {
    overflow: visible;
  }

  .swiper-wrapper {
    margin-bottom: 50px;
    text-align: left;
  }

  .swiper-slide {
    height: auto;

    & > div {
      height: 100%;
    }
  }
`;

const ServiceCardContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: 30px 35px;
  background: var(--c-background3);
  border-radius: 18px;
  transition: all 0.3s cubic-bezier(0.3, 0, 0.3, 1);

  &:first-child {
    margin-top: 0;
  }
`;

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

const ServiceCardDesction = styled.div`
  min-height: 175px;
`;

const ServiceCardLink = styled.a`
  position: relative;
  height: 1.375rem;
  display: inline-block;
  vertical-align: top;
  color: var(--c-font);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.375rem;
  text-decoration: none;
  transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);

  svg {
    position: relative;
    left: 0;
    top: 1px;
    width: 1rem;
    height: auto;
    margin-left: 1.25rem;
    font-weight: 900;
    fill: var(--c-accent);
    transition: all 0.3s cubic-bezier(0.3, 0, 0.3, 1);
  }

  &:hover svg {
    margin-left: 0.9rem;
  }
`;

const ServiceCardPattern = styled.div`
  position: absolute;
  right: -24px;
  bottom: -24px;
  width: 141px;
  height: 141px;
  background-image: url('images/pat-2.png');
  filter: invert(${({ theme }) => theme.imageInvert});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`;
