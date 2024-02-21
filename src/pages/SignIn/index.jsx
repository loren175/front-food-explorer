import { Container, Brand, Form } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"

import theme from "../../styles/theme"

import { useAuth } from "../../hooks/auth"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function SignIn() {
  const { signIn } = useAuth()

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleRegisterClick() {
    navigate("/register")
  }

  function handleSignInClick() {
    if (!email || !password) {
      return alert("Preencha todos os campos!")
    }
    signIn({ email, password })
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSignInClick()
    }
  }

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
      <Form onKeyDown={handleKeyDown}>
        <h2>Faça login</h2>
        <Section text="Email">
          <Input
            widthStyle="316px"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Section>
        <Section text="Senha">
          <Input
            widthStyle="316px"
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Section>

        <Button
          bgColor={theme.COLORS.RED_100}
          onClick={handleSignInClick}
          text="Entrar"
        />
        <ButtonText
          onClick={() => handleRegisterClick()}
          text="Criar uma conta"
        />
      </Form>
    </Container>
  )
}
