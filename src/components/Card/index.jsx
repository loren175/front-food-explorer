import { Container } from "./styles";
import { PiPencilSimple } from "react-icons/pi"
import food1 from "../../assets/food1.png"

export function Card() {
  return (
    <Container>
      <PiPencilSimple />
      <img src={food1} alt="" />
      <h4>Teste &gt; </h4>
      <h5>R$ 00,00</h5>
    </Container>
  )
}