import styled from "styled-components"

export const Container = styled.aside`
  height: 100vh;
  width: 100%;
  display: none;
  opacity: 0;

  .menu-header {
    display: flex;
    align-items: center;
    gap: 0.43rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    width: 100%;
    height: 7.125rem;
    margin-bottom: 2.18rem;
    padding: 1.56rem;
  }
  .close-btn {
    width: 1.43rem;
    height: 1.43rem;
    cursor: pointer;
  }

  .menu-content {
    margin: 1.56rem;
  }

  .menu-search {
    font-size: 0.80rem;
    padding-bottom: 2px;
  }

  h4 {
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .btn-border {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  }

  button {
    font-weight: 300;
    font-size: 1.125rem;
    font-family: "Poppins";
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    display: block;
    margin: 0.625rem 0 0.625rem 0;
  }
`
