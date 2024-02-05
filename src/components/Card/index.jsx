import { Container, Order } from "./styles"
import { PiHeart } from "react-icons/pi"
import food1 from "../../assets/food1.png"
import { Button } from "../Button"
import { Amount } from "../Amount"

// PiPencilSimple add to admn

export function Card() {
  return (
    <Container>
      <PiHeart className="heart" />
      <img src={food1} alt="" />
      <h4>Teste &gt; </h4>
      <h5>R$ 00,00</h5>
      <Order>
        <Amount text="01" />
        <Button text="Incluir" />
      </Order>
    </Container>
  )
}
