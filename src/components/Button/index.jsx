import { Container } from "./styles"
import { PiNewspaperClipping } from "react-icons/pi"

export function Button({ text, hasIcon, background }) {
  const bgStyle = background === "red_400" ? "#AB4D55" : "#750310"
  return (
    <Container style={{ background: bgStyle }} type="button">
      {hasIcon && <PiNewspaperClipping className="paper-icon" />}
      {text}
    </Container>
  )
}
