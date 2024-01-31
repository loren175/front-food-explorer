import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 114px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 63px 37px 34px 37px;
  justify-content: space-between;
  transition: all 0.3s;

  svg:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  
  h1 {
    font-size: 21px;
  }

  svg:hover {
    cursor: default;
  }
`