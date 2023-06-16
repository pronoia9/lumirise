import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import '../../../resources/Luique/style.css';

import { SectionWrapper } from '../../hoc';
import { servicesData } from '../../utils/data';
import { Description } from '../../styles/TextStyles';

const ServicesCard = ({ title, category, description }) => (
  <ServiceCardContainer className='services-item'>
    <Description className='lui-subtitle'>
      <span>{category}</span>
    </Description>
    <div className='icon' />
    <h5 className='lui-title'>
      <span>{title}</span>
    </h5>
    <div className='lui-text'>{description}</div>
    <a href='#pricing-section' className='lnk'>
      See Pricing
    </a>
    <div className='image' />
  </ServiceCardContainer>
);

const Services = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {servicesData.map((service, index) => (
          <SwiperSlide>
            <ServicesCard key={`service-${index}`} {...service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SectionWrapper(Services, 'services');

const Container = styled.div`
  .js-services {
    text-align: center;
  }

  .swiper-container.js-services {
    overflow: visible;
  }

  .js-services .swiper-wrapper {
    margin-bottom: 50px;
    text-align: left;
  }

  .elementor-editor-active .js-services .swiper-wrapper .swiper-slide .services-item {
    opacity: 1;
  }

  .js-services .swiper-wrapper .swiper-slide .services-item {
    transition: all 0.3s cubic-bezier(0.3, 0, 0.3, 1);
    opacity: 0;
  }

  .js-services .swiper-wrapper .swiper-slide-visible .services-item {
    opacity: 1;
  }

  .services-items {
    margin-top: -40px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .services-col {
    max-width: 270px;
    flex: 0 0 50%;
  }

  .services-item {
    position: relative;
    overflow: hidden;
    padding: 30px 35px;
    background: var(--c-background3);
    border-radius: 18px;
  }

  .services-item:first-child {
    margin-top: 0;
  }

  .services-item .icon {
    margin-top: 15px;
    font-size: 41px;
    min-height: 50px;
    line-height: 1;
    color: var(--c-accent);
  }

  .services-item .lui-text {
    min-height: 175px;
  }

  .services-item .image,
  .works-item .bg-img,
  .testimonials-item .bg-img,
  .pricing-item .bg-img {
    position: absolute;
    right: -24px;
    bottom: -24px;
    width: 141px;
    height: 141px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .works-box.works-list .works-item .bg-img {
    right: 43%;
    bottom: 0;
  }
`;

const ServiceCardContainer = styled.div``;
