import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  header {
    > div input {
      opacity: 0.3;
    }
  }

  aside {
    > div input {
      opacity: 0.3;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1.875rem;
  }

  .back-btn {
    display: flex;
    align-self: stretch;
    margin-left: 3.125rem;
  }

  img {
    width: 12.5rem;
    height: 12.5rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.375rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin: auto;
  }

  p {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .tag-area {
    display: flex;
    flex-wrap: wrap;
    gap: 0.625rem;
    justify-content: center;
  }

  .order {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    padding-bottom: 16rem;

    > button {
      width: 11.75rem;
      height: 2.375rem;
      font-size: 0.59rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    main {
      display: grid;
      grid-template-columns: 31.25rem 31.25rem;
      grid-template-rows: 1.25rem auto;
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
        font-size: 1.375rem;
        font-weight: bold;
      }
    }

    section {
      align-items: flex-start;
      grid-area: texto;
      margin-top: 6.25rem;

      h3 {
        margin-left: 0;
        font-size: 2.375rem;
      }

      p {
        font-size: 1.25rem;
      }
    }

    .order {
      grid-area: buttons;
      margin-bottom: 41.25rem;

      > button {
        font-size: 0.875rem;
      }
    }

    img {
      width: 24.375rem;
      height: 24.375rem;
      margin-bottom: 31.25rem;
      grid-area: img;
    }
  }
`
