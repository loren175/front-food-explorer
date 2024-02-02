import { Card } from "../Card";
import { Container } from "./styles";

export function Section({text}) {
  return (
    <Container>
      <h3>{text}</h3>
      <Card/>
    </Container>
  )
}