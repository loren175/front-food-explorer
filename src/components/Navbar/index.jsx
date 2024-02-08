import { Container, Brand } from "./styles"
import { PiList, PiNewspaperClipping } from "react-icons/pi"
import { useState, useEffect } from "react"

export function Navbar({ isAdmin }) {
  const [itemCount, setItemCount] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Atualiza o número de itens no carrinho com um valor aleatório (apenas para fins de demonstração)
      const randomCount = Math.floor(Math.random() * 10)
      setItemCount(randomCount)
    }, 2000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <Container>
      <PiList size={24} />
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
      <div className="order-svg">
        {!isAdmin && <PiNewspaperClipping size={24} />}
        <div className="counter">{itemCount}</div>
      </div>
    </Container>
  )
}
