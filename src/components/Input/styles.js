import styled from "styled-components"

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  width: 100%;
  > input {
    background: transparent;
    width: 100%;
    height: 3rem;
    font-size: 0.875rem;
    font-weight: 300;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    padding: 0.312rem;
  }

  .search-icon {
    margin: 0.5rem;
    font-size: 1.56rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  &:disabled {
    
  }
`
