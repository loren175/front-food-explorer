import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"


export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  h3 {
    font-size: 13px;
  }

  main {
    display: flex;
    justify-content: center;
    margin: 20px;
  }
`

export const Form = styled.form`
  h2 {
    margin: 10px 0px;
    font-family: "Poppins";
    font-weight: 300;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 32px;
  }

  textarea {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    border: none;
    border-radius: 4px;
    font-family: "Roboto";
    font-size: 14px;
    width: 100%;
    height: 172px;
    outline: none;
    padding: 10px 50px 10px 10px;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 6px;
    padding: 6px;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 4px;
    height: 100%;
  }

  .category-label {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    width: 100%;
    height: 48px;
    border-radius: 4px;
    display: flex;
    align-items: center;

    position: relative;
  }

  select {
    border: none;
    background: none;
    outline: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    appearance: none;
    width: 100%;
    padding: 16px;
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 400;
  }

  option {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  .svgCategory {
    position: absolute;
    cursor: default;
    right: 0;
    margin-right: 10px;
  }

  .btns {
    display: flex;
    gap: 25px;
    width: 100%;
    button {
      font-size: 13.4px;
      width: 140px;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    height: 100vh;
    display: grid;
    grid-template-columns: 300px 300px 300px;
    grid-template-rows: 50px 70px 70px 80px 200px;
    margin: 20px;
    gap: 22px;

    .back-btn {
      > button {
        font-size: 24px;
        font-weight: bold;
      }
    }

    h2 {
      grid-column: 1 / -1;
      font-weight: 400;
      height: 100px;
    }

    .text-section {
      grid-column: 1 / -1;
    }

    .tags {
      height: auto;
      width: 630px;
      justify-content: normal;
    }

  }
`

export const ImgUpload = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: "Poppins";

  label {
    display: flex;
    align-items: center;
    gap: 6.5px;
    font-size: 14px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 4px;
    width: 100%;
  }

  .upload {
    display: none;
  }
`
