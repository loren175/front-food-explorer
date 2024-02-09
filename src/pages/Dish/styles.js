import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px;
  }

  .back-btn {
    display: flex;
    align-self: stretch;
    margin-left: 50px;
  }

  img {
    width: 200px;
    height: 200px;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 22px;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin: auto;
  }

  p {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .tag-area {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }

  .order {
    display: flex;
    align-items: center;
    gap: 10px;

    > button {
      width: 188px;
      height: 38px;
      font-size: 9.5px;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    main {
      display: grid;
      grid-template-columns: 500px 500px;
      grid-template-rows: 20px auto;
      grid-template-areas:
        "back back"
        "img texto"
        "img buttons"
        "img buttons";
      height: 100vh;
    }

    .back-btn {
      margin: 0;
      display: block;
      grid-area: back;
      > button {
        font-size: 22px;
        font-weight: bold;
      }
    }

    section {
      align-items: flex-start;
      grid-area: texto;
      margin-top: 100px;

      h3 {
        margin-left: 0;
        font-size: 38px;
      }

      p {
        font-size: 20px;
      }
    }

    .order {
      grid-area: buttons;
      margin-bottom: 660px;

      > button {
        font-size: 14px;
      }
    }

    img {
      width: 390px;
      height: 390px;
      margin-bottom: 500px;
      grid-area: img;
    }
  }
`
