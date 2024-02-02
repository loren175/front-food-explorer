import styled from "styled-components"

export const Container = styled.div`
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 31px;
  }

  .banner {
    position: relative;
    background-color: ${({ theme }) => theme.COLORS.GRADIENT_200};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    width: 284px;
    height: 106px;
    margin: 43px;
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

`
