import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  header {
    > div input {
      opacity: 0.3;
    }
  }

  aside {
    > div input {
      opacity: 0.3;
    }
  }

  h3 {
    font-size: 0.8125rem;
  }

  main {
    display: flex;
    justify-content: center;
    margin: 1.25rem;
  }
`

export const Form = styled.form`
  h2 {
    margin: 0.625rem 0px;
    font-family: "Poppins";
    font-weight: 300;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 2rem;
  }

  textarea {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-family: "Roboto";
    font-size: 0.875rem;
    border-radius: 0.25rem;
    width: 100%;
    height: 10.75rem;
    padding: 0.625rem 3.125rem 0.625rem 0.625rem;
    outline: none;
    border: none;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.375rem;
    padding: 0.375rem;
    border-radius: 0.25rem;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  .category-label {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    width: 100%;
    height: 3rem;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    position: relative;
  }

  select {
    border: none;
    background: none;
    outline: none;
    appearance: none;
    width: 100%;
    padding: 1rem;
    font-family: "Roboto";
    font-size: 0.875rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  option {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  .svgCategory {
    position: absolute;
    right: 0;
    margin-right: 0.625rem;
    cursor: default;
  }

  .btns {
    display: flex;
    gap: 1.56rem;
    width: 100%;
    button {
      font-size: 0.83rem;
      width: 8.75rem;
    }
  }

  .grid-void-space {
    z-index: -1;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: grid;
    grid-template-columns: repeat(3, 18.75rem);
    grid-template-rows: 3.125rem 4.375rem 4.375rem auto 12.5rem;
    height: 100vh;
    margin: 1.25rem;
    gap: 2.625rem;

    .back-btn {
      > button {
        font-size: 1.5rem;
        font-weight: bold;
      }
    }

    h2 {
      grid-column: 1 / -1;
      font-weight: 400;
      height: 6.25rem;
    }

    .text-section {
      grid-column: 1 / -1;
    }

    .tags {
      height: auto;
      width: 39.375rem;
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
    gap: 0.4rem;
    padding: 0.625rem 1.25rem;
    border-radius: 0.25rem;
    width: 100%;
    font-size: 0.875rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    cursor: pointer;
  }

  .upload {
    display: none;
  }
`
