import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.header`
  width: 100%;
  height: 7.125rem;
  display: flex;
  align-items: center;
  padding: 3.93rem 1.06rem 2.125rem 1.06rem;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
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
    top: 50px;
    right: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 1.125rem;
    height: 1.125rem;
    display: flex;
    background-color: ${({ theme }) => theme.COLORS.RED_200};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 0.75rem;
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

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .counter {
      top: 38px;
      right: 10px;
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
    padding-right: 2.5rem;
    font-size: 0.73rem;
    font-family: "Roboto";
    font-weight: 300;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    position: relative;

    p {
      left: 105px;
      top: 20px;
      position: absolute;
    }
  }
`
