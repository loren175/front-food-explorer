import styled from "styled-components"

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  border-radius: 4px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  width: 100%;
  > input {
    background: transparent;
    width: 100%;
    height: 48px;
    font-size: 14px;
    font-weight: 300;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    padding: 16px;
  }

  .search-icon {
    margin: 8px;
    width: 25px;
    height: 25px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`
