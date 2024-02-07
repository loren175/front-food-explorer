import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`

export const Form = styled.form`
  textarea {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    border: none;
    border-radius: 4px;
    font-family: "Roboto";
    font-size: 14px;
    width: 364px;
    height: 172px;
    outline: none;
    padding: 10px 50px 10px 10px;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 6px;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 4px;
    height: 48px;
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
    width: 364px;
  }

  .upload {
    display: none;
  }

`
