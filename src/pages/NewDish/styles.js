import styled from "styled-components"

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

  .btn {
    width: 100%;
    button {
      width: 290px;
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
