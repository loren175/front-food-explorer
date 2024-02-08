import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 87vh;
  width: 100%;
  gap: 31px;

  h3 {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    margin-bottom: 20px;
  }
`
