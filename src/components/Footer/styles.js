import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  height: 77px;
  width: 100%;

  span {
    font-size: 12px;
    //@media 320px = 11px
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.COLORS.LIGHT_700};

  h1 {
    font-size: 15px;
    //@media 320px = 14px
  }
`