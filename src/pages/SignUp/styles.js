import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  gap: 1.93rem;

  h3 {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 0.8125rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    justify-content: space-between;
    padding-inline: 9.375rem;
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.687rem;
  
  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding-bottom: 6.25rem;
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
    margin-bottom: 1.25rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 1rem;
    padding: 3.125rem;

    h2 {
      display: initial;
      margin: 1.25rem 0 1.25rem 0;
      font-family: "Poppins";
      font-weight: 400;
      font-size: 1.875rem;
    }
  }
`
