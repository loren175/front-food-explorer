import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.header`
  width: 100%;
  height: 7.125rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 3.93rem 1.06rem 2.125rem 1.06rem;
  justify-content: space-between;
  transition: all 0.3s;

  svg:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }

  .order-svg {
    position: relative;
    display: inline-block;
  }

  .counter {
    position: absolute;
    top: 38px;
    right: 10px;
    background-color: ${({ theme }) => theme.COLORS.RED_200};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 0.75rem;
    border-radius: 50%;
    width: 1.125rem;
    height: 1.125rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Poppins";
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    justify-content: space-evenly;
    div {
      margin-bottom: 0;
    }
    button {
      width: 13.5rem;
    }
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  cursor: pointer;

  h1 {
    font-size: 1.18rem;
  }

  .admin-p {
    color: ${({ theme }) => theme.COLORS.BLUE_200};
    font-size: 0.73rem;
    padding-right: 2.5rem;
    font-family: "Roboto";
    font-weight: 300;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    position: relative;

    p {
      left: 105px;
      position: absolute;
      top: 20px;
    }
  }
`
