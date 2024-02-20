import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  gap: 0.625rem;
  flex-direction: column;
  margin-bottom: 1.75rem;

  h3 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Poppins";
    font-weight: 400;
  }
`
