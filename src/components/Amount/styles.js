import styled from "styled-components";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  margin-bottom: 10px;
  p {
    font-size: 16px;
    font-weight: 300;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    p {
      font-size: 18px;
      font-weight: bold;
    }

    svg {
      width: 24px;
      height: 24px;
    }
  }
`