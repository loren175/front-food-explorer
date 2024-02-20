import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.125rem;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  margin-bottom: 0.625rem;
  p {
    font-size: 1rem;
    font-weight: 300;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    p {
      font-size: 1.125rem;
      font-weight: bold;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`