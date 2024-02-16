import { Container, Brand } from "./styles"
import { useAuth } from "../../hooks/auth"

import { Input } from "../Input"
import { Button } from "../Button"
import theme from "../../styles/theme"

import { PiList, PiNewspaperClipping, PiSignOut } from "react-icons/pi"
import { useNavigate } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export function Navbar({ isAdmin }) {
  const isDesktop = useMediaQuery({ minWidth: DEVICE_BREAKPOINTS.LG })

  const { signOut } = useAuth()

  const navigate = useNavigate()

  function handleNewClick() {
    navigate("/new")
  }

  return (
    <Container>
      {!isDesktop && <PiList size={24} />}

      <Brand>
        <svg
          width="24"
          height="24"
          viewBox="0 0 39 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z"
            fill="#065E7C"
          />
        </svg>
        <h1>food explorer</h1>
        {isAdmin && <p>admin</p>}
      </Brand>

      {isDesktop && (
        <Input
          widthStyle="480px"
          hasIcon={true}
          placeholder="Busque por pratos ou ingredientes"
        />
      )}
      {isDesktop &&
        (isAdmin ? (
          <Button
            onClick={() => handleNewClick()}
            hasIcon={false}
            bgColor={theme.COLORS.RED_200}
            text="Novo Prato"
          />
        ) : (
          <Button
            hasIcon={true}
            bgColor={theme.COLORS.RED_200}
            text="Pedidos (0)"
          />
        ))}

      {!isDesktop ? (
        !isAdmin && (
          <>
            <PiNewspaperClipping className="order-svg" size={24} />
            <div className="counter">0</div>
          </>
        )
      ) : (
        <PiSignOut size={24} onClick={signOut} />
      )}
    </Container>
  )
}
