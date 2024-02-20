import { Container } from "./styles"

import { PiPlus, PiMinus } from "react-icons/pi"

import { useState } from "react"

export function Amount() {
 const [counter, setCounter] = useState(1);

  const increaseCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };

  const decreaseCounter = () => {
    const newCounter = counter > 1 ? counter - 1 : 1;
    setCounter(newCounter);
  };

  return (
    <Container>
      <PiMinus onClick={decreaseCounter} />
      <p>{counter}</p>
      <PiPlus onClick={increaseCounter} />
    </Container>
  )
}
