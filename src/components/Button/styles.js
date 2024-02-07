import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  width: 316px;
  height: 48px;
  font-size: 14px;
  font-family: "Poppins";
  font-weight: 400;

  .paper-icon {
    width: 19px;
    height: 16px;
    margin-right: 4px;
  }
`