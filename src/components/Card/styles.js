import styled from "styled-components"
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  width: 12.5rem;
  height: 17.25rem;
  gap: 0.625rem;
  position: relative;
  border-radius: 0.25rem;
  border: 2px solid ${({ theme }) => theme.COLORS.DARK_300};

  .card-icons {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 1.5rem;
    height: 1.5rem;
  }

  img {
    width: 5.93rem;
    height: 5.93rem;
    cursor: pointer;
  }

  h4 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Poppins";
    font-size: 0.875rem;
    font-weight: 300;
    cursor: pointer;
  }

  h5 {
    color: ${({ theme }) => theme.COLORS.BLUE_200};
    font-size: 0.93rem;
    font-weight: 300;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 18.125rem;
    height: 28.125rem;
    gap: 0.375rem;

    img {
      width: 10rem;
      height: 10rem;
    }

    h4 {
      font-size: 1.43rem;
      font-weight: 600;
    }

    .description {
      margin: 0.625rem;
      text-align: center;
    }

    h5 {
      font-size: 29.5px;
    }
  }
`

export const Add = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 0.312rem;
  button {
    height: 2rem;
    width: 10.125rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    gap: 0.93rem;

    div {
      margin-bottom: 0;
    }

    button {
      width: 5.75rem;
      height: 2.875rem;
    }
  }
`
