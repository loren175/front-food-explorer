import { Container } from "./styles"

import { PiPlus, PiMinus } from "react-icons/pi"

export function Amount({text}) {
  return (
    <Container>
      <PiMinus/>
      <p>{text}</p>
      <PiPlus />
    </Container>
  )
}
