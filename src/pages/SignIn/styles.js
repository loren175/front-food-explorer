import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 87vh;
  width: 100%;
  gap: 31px;

  h3 {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    justify-content: space-between;
    padding-inline: 150px;
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding-bottom: 100px;
    width: 100%;
  }
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    display: none;
  }

  button {
    margin-bottom: 20px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 16px;
    padding: 30px;

    h2 {
      display: initial;
      margin: 20px 0 20px 0;
      font-family: "Poppins";
      font-weight: 400;
      font-size: 30px;
    }
  }
`
