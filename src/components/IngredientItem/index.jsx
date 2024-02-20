import { Container } from "./styles"

import { PiPlus, PiX } from "react-icons/pi"

export function IngredientItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />
      <button
        onClick={onClick}
        type="button"
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <PiPlus /> : <PiX />}
      </button>
    </Container>
  )
}
