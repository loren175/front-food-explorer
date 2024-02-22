import styled from "styled-components"

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  height: 4.81rem;
  width: 100%;

  span {
    font-size: 0.75rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    justify-content: space-around;
    gap: 9.37rem;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    span {
      font-size: 0.68rem;
    }
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.312rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_700};

  h1 {
    font-size: 0.93rem;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  svg:hover {
    cursor: default;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    h1 {
      font-size: 1.37rem;
    }
    svg {
      width: 1.3rem;
      height: 1.3rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    align-items: normal;

    h1 {
      font-size: 0.875rem;
    }
  }
`
