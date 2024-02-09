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
    grid-template-rows: 200px;
    justify-items: center;
  }

  .banner {
    position: relative;
    background: linear-gradient(
      340deg,
      ${({ theme }) => theme.COLORS.GRADIENT_100} 0%,
      ${({ theme }) => theme.COLORS.GRADIENT_200} 100%
    );
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    width: 284px;
    height: 106px;
    margin-top: 43px;
    border-radius: 4px;
  }

  .banner-img {
    position: absolute;
    top: -22px;
    left: -22px;
    width: 146px;
    height: 128px;
  }

  .banner-text {
    display: grid;
    grid-template-columns: 100px 160px;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "none header-text" "none header-description";
    margin-left: 19px;
  }

  h2 {
    grid-area: header-text;
    font-family: "Poppins";
    font-size: 14.5px;
    font-weight: 500;
    padding-top: 10px;
    margin-top: 24px;
  }

  p {
    grid-area: header-description;
    font-family: "Poppins";
    font-size: 9.6px;
    font-weight: 200;
  }

  swiper-container {
    height: 292px;
    width: 290px;
  }

  swiper-slide {
    max-width: 200px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    main {
      margin: 20px;
      grid-template-rows: 420px;
    }

    .banner {
      margin-top: 130px;
      width: 970px;
      height: 230px;
    }

    .banner-img {
      width: 602px;
      height: 376px;
      top: -146px;
      left: -50px;
    }

    .banner-text {
      grid-template-columns: 300px 1fr;
      margin-left: 220px;
    }

    h2 {
      font-size: 41px;
      padding-top: 50px;
    }

    p {
      font-size: 14.7px;
    }

    h3 {
      font-size: 28px;
    }

    swiper-container {
      height: 450px;
      width: 970px;
    }

    swiper-slide {
      max-width: 320px;
    }
  }
`
