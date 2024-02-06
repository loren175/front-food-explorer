import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

`

export const Form = styled.form`

`

export const ImgUpload = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: 'Poppins';

  label {
    display: flex;
    align-items: center;
    gap: 6.5px;
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