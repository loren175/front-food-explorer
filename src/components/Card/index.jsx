import { Container, Add } from "./styles"
import { PiHeart, PiPencilSimple } from "react-icons/pi"
import food1 from "../../assets/food1.png"
import { Button } from "../Button"
import { Amount } from "../Amount"

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

import { useMediaQuery } from "react-responsive"

import theme from "../../styles/theme"


export function Card({ isAdmin }) {
  const isDesktop = useMediaQuery({ minWidth: DEVICE_BREAKPOINTS.LG })

  return (
    <Container>
      {isAdmin ? (
        <PiPencilSimple className="card-icons" />
      ) : (
        <PiHeart className="card-icons" />
      )}
      <img src={food1} alt="" />
      <h4>Teste &gt; </h4>
      {isDesktop && (
        <p className="description">Presunto de parma e rúcula em um pão com fermentação natural.</p>
      )}
      <h5>R$ 00,00</h5>
      {!isAdmin && (
        <Add>
          <Amount text="01" />
          <Button bgColor={theme.COLORS.RED_100} text="Incluir" />
        </Add>
      )}
    </Container>
  )
}
