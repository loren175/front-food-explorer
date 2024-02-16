import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, isNew }) =>
    !isNew ? ` ${theme.COLORS.LIGHT_600}` : "transparent"};
  border: ${({ theme, isNew }) =>
    !isNew ? "none" : `1px dashed ${theme.COLORS.LIGHT_500}`};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border-radius: 10px;
  padding-right: 16px;

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
    font-size: 13px;
  }

  input {
    height: 32px;
    width: 96px;
    padding: 12px;
    font-size: 14px;

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
