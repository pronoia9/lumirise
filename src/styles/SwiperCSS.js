import { css } from "styled-components";

export const swiperCSS = css`
  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .swiper-pagination {
    width: auto !important;
    left: 50% !important;
    transform-origin: right !important;
    transform: translate(-50%, 0) !important;
  }

  .swiper-wrapper {
    padding-bottom: 50px;
  }

  .swiper-container .swiper-pagination.swiper-pagination-bullets,
  .swiper-container .swiper-container-horizontal > .swiper-pagination-bullets {
    position: relative;
    display: inline-block;
    width: auto;
  }

  .swiper-pagination.swiper-pagination-bullets:before {
    position: absolute;
    left: 0;
    top: 50%;
    content: '';
    width: 100%;
    height: 2px;
    background: var(--c-font);
    display: block;
  }

  .swiper-pagination.swiper-pagination-bullets .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    position: relative;
    top: 0;
    display: inline-block;
    border-radius: 50%;
    background: var(--c-background3);
    opacity: 1 !important;
    position: relative;
    border: 2px solid var(--c-font);
    transition: all 0.3s cubic-bezier(0.3, 0, 0.3, 1);
    -webkit-transition: all 0.3s cubic-bezier(0.3, 0, 0.3, 1);
  }

  .swiper-pagination.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 10px;
  }

  .swiper-pagination.swiper-pagination-bullets .swiper-pagination-bullet:first-child {
    margin-left: 0;
  }

  .swiper-pagination.swiper-pagination-bullets .swiper-pagination-bullet:last-child {
    margin-right: 0;
  }

  .swiper-pagination.swiper-pagination-bullets .swiper-pagination-bullet.swiper-pagination-bullet-active {
    width: 13px;
    height: 13px;
    top: 2px;
    background: var(--c-accent);
  }

  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    pointer-events: none !important;
  }
`;