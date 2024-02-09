import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-bottom: 28px;

  h3 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Poppins";
    font-weight: 400;
  }
`
