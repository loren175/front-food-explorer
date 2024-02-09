import styled from "styled-components"
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  width: 200px;
  height: 276px;
  gap: 10px;
  position: relative;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.COLORS.DARK_300};

  .card-icons {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 24px;
    height: 24px;
  }

  img {
    width: 95px;
    height: 95px;
  }

  h4 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Poppins";
    font-size: 14px;
    font-weight: 300;
  }

  h5 {
    color: ${({ theme }) => theme.COLORS.BLUE_200};
    font-size: 15px;
    font-weight: 300;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 290px;
    height: 450px;
    gap: 6px;

    img {
      width: 160px;
      height: 160px;
    }

    h4 {
      font-size: 23px;
      font-weight: 600;
    }

    .description {
      margin: 10px;
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
  margin-top: 5px;
  button {
    height: 32px;
    width: 162px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: row;
    gap: 15px;

    div {
      margin-bottom: 0;
    }

    button {
      width: 92px;
      height: 46px;
    }
  }
`
