import { Container } from "./styles"
import { PiPlus, PiX } from "react-icons/pi"

export function IngredientItem({ isNew, ...rest }) {
  return (
    <Container>
      <input 
      type="text" 
      readOnly={!isNew} {...rest} />
      <button 
      type="button" 
      className={isNew ? "button-add" : "button-delete"}>
        {isNew ? <PiPlus /> : <PiX />}
      </button>
    </Container>
  )
}
