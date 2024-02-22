import styled from "styled-components"

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  
  > input {
    border: none;
    width: 100%;
    height: 3rem;
    padding: 0.312rem;
    font-size: 0.875rem;
    font-weight: 300;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background: transparent;
  }

  .search-icon {
    margin: 0.5rem;
    font-size: 1.56rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`
