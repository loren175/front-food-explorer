import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  border-radius: 8px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  width: 100%;
  > input {
    background: transparent;
    padding: 20px;
    width: 100%;
    height: 48px;
    font-size: 14px;
    font-weight: 300;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`