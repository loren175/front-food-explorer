import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  height: 77px;
  width: 100%;

  span {
    font-size: 12px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    justify-content: space-around;
    gap: 150px;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    span {
      font-size: 11px;
    }
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.COLORS.LIGHT_700};

  h1 {
    font-size: 15px;
  }

  svg:hover {
    cursor: default;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    align-items: normal;

    h1 {
      font-size: 14px;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }
`