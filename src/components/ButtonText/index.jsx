import { Container } from "./styles"

export function ButtonText({ text, onClick }) {
  return (
    <Container onClick={onClick} type="button">
      {text}
    </Container>
  )
}
