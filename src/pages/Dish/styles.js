import styled from "styled-components"

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
`
