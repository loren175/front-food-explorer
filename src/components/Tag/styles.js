import styled from "styled-components"

export const Container = styled.span`
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-family: "Poppins";
  font-size: 0.875rem;
  border-radius: 0.25;
  padding: 0.43rem;

  &:hover {
    cursor: default;
    transition: filter 0.2s;
    filter: brightness(0.9);
  }
`
