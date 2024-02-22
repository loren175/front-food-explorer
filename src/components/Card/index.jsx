import { Container, Add } from "./styles"

import { Button } from "../Button"
import { Amount } from "../Amount"

import { PiHeart, PiPencilSimple } from "react-icons/pi"

import theme from "../../styles/theme"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

import { api } from "../../services/api"

import { useMediaQuery } from "react-responsive"
import { useNavigate } from "react-router-dom"

export function Card({ handleDishClick, data, isAdmin, ...rest }) {
  const isDesktop = useMediaQuery({ minWidth: DEVICE_BREAKPOINTS.LG })

  const navigate = useNavigate()

  function handleEditClick() {
    navigate(`/edit/${data.id}`)
  }

  return (
    <Container {...rest}>
      {isAdmin ? (
        <PiPencilSimple onClick={handleEditClick} className="card-icons" />
      ) : (
        <PiHeart className="card-icons" />
      )}

      <img
        onClick={() => handleDishClick(data.id)}
        src={`${api.defaults.baseURL}/files/${data.image}`}
        alt={data.name}
      />

      <h4 onClick={() => handleDishClick(data.id)}>{data.name} &gt;</h4>

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
