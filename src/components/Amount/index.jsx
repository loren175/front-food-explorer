import { Container } from "./styles"

import { useState } from "react"

import { PiPlus, PiMinus } from "react-icons/pi"

export function Amount() {
  const [counter, setCounter] = useState(1)

  const increaseCounter = () => {
    setCounter(counter + 1)
  }

  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

  return (
    <Container>
      <PiMinus onClick={decreaseCounter} />
      <p>{counter}</p>
      <PiPlus onClick={increaseCounter} />
    </Container>
  )
}
