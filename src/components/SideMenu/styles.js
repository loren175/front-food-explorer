import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.aside`
  height: 100vh;
  width: 100%;
  display: none;
  opacity: 0;

  .menu-header {
    display: flex;
    align-items: center;
    gap: 7px;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    width: 100%;
    height: 114px;
    margin-bottom: 35px;
    padding: 25px;
  }
  .close-btn {
    width: 23px;
    height: 23px;
    cursor: pointer;
  }

  .menu-content {
    margin: 25px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  }

  .menu-search {
    font-size: 12.9px;
    padding-bottom: 2px;
  }

  h4 {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`

export const Exit = styled(Link)`
  font-weight: 300;
  font-size: 16px;
  font-family: "Poppins";
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  display: block;
  margin: 30px 0 10px 0;
`
