import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, isNew }) =>
    !isNew ? ` ${theme.COLORS.LIGHT_600}` : "transparent"};
  border: ${({ theme, isNew }) =>
    !isNew ? "none" : `1px dashed ${theme.COLORS.LIGHT_500}`};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border-radius: 0.625rem;
  padding-right: 1rem;

  button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  svg {
    font-size: 0.812rem;
  }

  input {
    height: 2rem;
    width: 6rem;
    padding: 0.75rem;
    font-size: 0.875rem;

    color: ${({ theme, isNew }) =>
      !isNew
        ? ` ${theme.COLORS.LIGHT_100}`
        : `${theme.COLORS.LIGHT_500}
      `};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`
