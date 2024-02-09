import { Container, Brand, Form } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"

import theme from "../../styles/theme"

export function SignUp() {
  return (
    <Container>
      <Brand>
        <svg
          width="39"
          height="44"
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
      </Brand>
      <Form>
        <h2>Crie sua Conta</h2>
        <Section text="Seu nome">
          <Input
            widthStyle="316px"
            placeholder="Exemplo: Maria da Silva"
            type="text"
          />
        </Section>
        <Section text="Email">
          <Input
            widthStyle="316px"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="email"
          />
        </Section>
        <Section text="Senha">
          <Input
            widthStyle="316px"
            placeholder="No mínimo 6 caracteres"
            type="password"
          />
        </Section>

        <Button bgColor={theme.COLORS.RED_100} text="Criar conta" />
        <ButtonText text="Já tenho uma conta" />
      </Form>
    </Container>
  )
}
