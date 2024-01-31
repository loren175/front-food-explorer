import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  gap: 31px;

  p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    margin: 31px 0px 10px 0px;
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`
