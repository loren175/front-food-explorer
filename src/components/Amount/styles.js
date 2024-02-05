import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  margin-bottom: 10px;
  p {
    font-size: 16px;
    font-weight: 300;
  }
`