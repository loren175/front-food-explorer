import { Container } from "./styles"

export function Section({ text, children }) {
  return (
    <Container>
      <h3>{text}</h3>
      {children}
    </Container>
  )
}
