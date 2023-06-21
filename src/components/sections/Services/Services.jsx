import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { styled } from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';

import { Card } from '../..';
import { SectionWrapper } from '../../../hoc';
import { dataStore } from '../../../store/dataStore';

const Services = () => {
  const data = dataStore((state) => state.services);
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
        {data.map((service, index) => (
          <SwiperSlide key={`service-${index}`}>
            <Card {...service} section='Works' space={true} />
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
    margin-bottom: 3.125rem;
    text-align: left;
  }

  .swiper-slide {
    height: auto;

    & > div {
      height: 100%;
    }
  }
`;
