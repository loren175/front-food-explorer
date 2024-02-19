import { Container, Add } from "./styles"
import { PiHeart, PiPencilSimple } from "react-icons/pi"
import food1 from "../../assets/food1.png"
import { Button } from "../Button"
import { Amount } from "../Amount"
import { api } from "../../services/api"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

import { useMediaQuery } from "react-responsive"
import { useNavigate } from "react-router-dom"

import theme from "../../styles/theme"

export function Card({ data, isAdmin, ...rest }) {
  const isDesktop = useMediaQuery({ minWidth: DEVICE_BREAKPOINTS.LG })

  const navigate = useNavigate()

  function handleDishClick() {
    navigate("/dish")
  }

  function handleEditClick() {
    navigate("/edit")
  }

  return (
    <Container {...rest}>
      {isAdmin ? (
        <PiPencilSimple
          onClick={() => handleEditClick()}
          className="card-icons"
        />
      ) : (
        <PiHeart className="card-icons" />
      )}
      <img
        onClick={() => handleDishClick()}
        src={`${api.defaults.baseURL}/files/${data.image}`}
        alt=""
      />
      <h4>{data.name} &gt; </h4>
      {isDesktop && <p className="description">{data.description}</p>}
      <h5>
        R$ {data.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
      </h5>
      {!isAdmin && (
        <Add>
          <Amount />
          <Button bgColor={theme.COLORS.RED_100} text="Incluir" />
        </Add>
      )}
    </Container>
  )
}