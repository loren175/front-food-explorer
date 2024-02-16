import { Container, Add } from "./styles"
import { PiHeart, PiPencilSimple } from "react-icons/pi"
import food1 from "../../assets/food1.png"
import { Button } from "../Button"
import { Amount } from "../Amount"

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

import { useMediaQuery } from "react-responsive"
import { useNavigate } from "react-router-dom"

import theme from "../../styles/theme"

export function Card({ isAdmin }) {
  const isDesktop = useMediaQuery({ minWidth: DEVICE_BREAKPOINTS.LG })

  const navigate = useNavigate()

  function handleDishClick() {
    navigate("/dish")
  }

  function handleEditClick() {
    navigate("/edit")
  }

  return (
    <Container>
      {isAdmin ? (
        <PiPencilSimple
          onClick={() => handleEditClick()}
          className="card-icons"
        />
      ) : (
        <PiHeart className="card-icons" />
      )}
      <img onClick={() => handleDishClick()} src={food1} alt="" />
      <h4>Teste &gt; </h4>
      {isDesktop && (
        <p className="description">
          Presunto de parma e rúcula em um pão com fermentação natural.
        </p>
      )}
      <h5>R$ 00,00</h5>
      {!isAdmin && (
        <Add>
          <Amount />
          <Button
            bgColor={theme.COLORS.RED_100}
            text="Incluir"
          />
        </Add>
      )}
    </Container>
  )
}
