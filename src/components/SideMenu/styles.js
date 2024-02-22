import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.aside`
  height: 100vh;
  width: 100%;
  display: none;
  opacity: 0;

  .menu-header {
    display: flex;
    align-items: center;
    gap: 0.43rem;
    width: 100%;
    height: 7.125rem;
    padding: 1.56rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
  }
  .close-btn {
    width: 1.43rem;
    height: 1.43rem;
    cursor: pointer;
  }

  .menu-content {
    padding: 1.56rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
  }

  .menu-search {
    font-size: 0.8rem;
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
    display: block;
    margin: 0.625rem 0 0.625rem 0;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    position: absolute;
    z-index: 1;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    opacity: 1;
    display: block;

    &[data-menu-is-open="true"] {
      transform: translateX(0);
    }
  }
`
