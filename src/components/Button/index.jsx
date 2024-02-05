import { Container } from "./styles"
import { PiNewspaperClipping } from "react-icons/pi"

export function Button({ text, hasIcon }) {
  return (
    <Container type="button">
      {hasIcon && <PiNewspaperClipping className="paper-icon" />}
      {text}
    </Container>
  )
}
