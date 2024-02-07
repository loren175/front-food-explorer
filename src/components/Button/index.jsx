import { Container } from "./styles"
import { PiNewspaperClipping } from "react-icons/pi"

export function Button({ text, hasIcon, bgColor }) {
  return (
    <Container bgColor={bgColor} type="button">
      {hasIcon && <PiNewspaperClipping className="paper-icon" />}
      {text}
    </Container>
  )
}
