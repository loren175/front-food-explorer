import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.header`
  width: 100%;
  height: 114px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 63px 17px 34px 17px;
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
    top: 50px;
    right: 10px;
    background-color: ${({ theme }) => theme.COLORS.RED_200};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 12px;
    border-radius: 50%;
    width: 18px;
    height: 18px;
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
      width: 216px;
    }
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  h1 {
    font-size: 19px;
  }

  p {
    color: ${({ theme }) => theme.COLORS.BLUE_200};
    font-size: 11.8px;
    padding-right: 40px;
  }

  svg:hover {
    cursor: default;
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
