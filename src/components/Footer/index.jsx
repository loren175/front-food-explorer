import { Container, Brand } from "./styles";

export function Footer () {
  return (
    <Container>
      <Brand>
        <svg
          width="22"
          height="22"
          viewBox="0 0 39 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z"
            fill="#4D585E"
          />
        </svg>

        <h1>food explorer</h1>
      </Brand>

      <span>© 2023 - Todos os direitos reservados.</span>
      
    </Container>
  )
}