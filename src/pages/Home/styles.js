import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  h3 {
    font-size: 13px;
  }

  main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 12.5rem;
    justify-items: center;
  }

  .banner {
    background: linear-gradient(
      340deg,
      ${({ theme }) => theme.COLORS.GRADIENT_100} 0%,
      ${({ theme }) => theme.COLORS.GRADIENT_200} 100%
      );
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    position: relative;
    width: 17.75rem;
    height: 6.225rem;
    margin-top: 2.68rem;
    border-radius: 0.25rem;
  }

  .banner-img {
    position: absolute;
    top: -22px;
    left: -22px;
    width: 9.125rem;
    height: 8rem;
  }

  .banner-text {
    display: grid;
    grid-template-columns: 6.25rem 10rem;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "none header-text" "none header-description";
    margin-left: 1.19rem;
  }

  h2 {
    grid-area: header-text;
    font-family: "Poppins";
    font-size: 0.9rem;
    font-weight: 500;
    padding-top: 0.625rem;
    margin-top: 1.5rem;
  }

  p {
    grid-area: header-description;
    font-family: "Poppins";
    font-size: 0.6rem;
    font-weight: 200;
  }

  swiper-container {
    height: 18.25rem;
    width: 18.125rem;
  }

  swiper-slide {
    max-width: 12.5rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MOBILE_MD}) {
    .banner {
      width: 28rem;
      height: 8.2rem;
      margin-top: 2.68rem;
      border-radius: 0.25rem;
    }

    .banner-img {
      position: absolute;
      top: -29px;
      left: -22px;
      width: 12rem;
      height: 10.5rem;
    }

    .banner-text {
      display: grid;
      grid-template-columns: 6.25rem 15rem;
      margin-left: 4rem;
    }

    h2 {
      font-size: 1.4rem;
      padding-top: 0.125rem;
    }

    p {
      font-size: 0.85rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    .banner {
      width: 29.75rem;
      height: 8.225rem;
      margin-top: 2.68rem;
      border-radius: 0.25rem;
    }

    .banner-img {
      position: absolute;
      top: -33px;
      left: -22px;
      width: 12rem;
      height: 10.2rem;
    }

    .banner-text {
      display: grid;
      grid-template-columns: 6.25rem 15rem;
      margin-left: 4rem;
    }

    h2 {
      font-size: 1.4rem;
      padding-top: 0.125rem;
    }

    p {
      font-size: 0.85rem;
    }

    swiper-container {
      height: 20rem;
      width: 31rem;
    }

    swiper-slide {
      max-width: 12.5rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    main {
      margin: 1.25rem;
      grid-template-rows: 26.25rem;
    }

    .banner {
      margin-top: 8.125rem;
      width: 60.625rem;
      height: 14.38rem;
    }

    .banner-img {
      width: 37.625rem;
      height: 23.5rem;
      top: -146px;
      left: -50px;
    }

    .banner-text {
      grid-template-columns: 18.75rem 1fr;
      margin-left: 13.75rem;
    }

    h2 {
      font-size: 2.56rem;
      padding-top: 3.125rem;
    }

    p {
      font-size: 0.91rem;
    }

    h3 {
      font-size: 1.75rem;
    }

    swiper-container {
      height: 28.125rem;
      width: 60.625rem;
    }

    swiper-slide {
      max-width: 20rem;
    }

    swiper-container::before,
    swiper-container::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      width: 22.4rem;
      z-index: 2;
      pointer-events: none;
    }

    swiper-container::before {
      left: 0;
      background: linear-gradient(
        90deg,
        ${({ theme }) => theme.COLORS.GRADIENT_100} 0%,
        transparent 100%
      );
    }

    swiper-container::after {
      right: 0;
      background: linear-gradient(
        90deg,
        transparent 0%,
        ${({ theme }) => theme.COLORS.GRADIENT_100} 100%
      );
    }
  }
`
