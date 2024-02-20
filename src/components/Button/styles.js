import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ $bgcolor }) => $bgcolor};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: none;
  width: 19.75rem;
  height: 3rem;
  font-size: 0.875rem;
  font-family: "Poppins";
  font-weight: 400;

  .paper-icon {
    width: 1.18rem;
    height: 1.18rem;
    margin-right: 0.25rem;
  }
`