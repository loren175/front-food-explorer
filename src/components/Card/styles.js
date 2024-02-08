import styled from "styled-components"

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
`

export const Order = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 5px;
  button {
    height: 32px;
    width: 162px;
  }
`
