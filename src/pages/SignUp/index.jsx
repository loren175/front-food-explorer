import { Container, Brand, Form } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { api } from "../../services/api"

import theme from "../../styles/theme"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUpClick() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado.")
        navigate("/login")
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível realizar o cadastro.")
        }
      })
  }

  function handleBackToLoginClick() {
    navigate("/login")
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
      <Form>
        <h2>Crie sua Conta</h2>
        <Section text="Seu nome">
          <Input
            widthStyle="316px"
            placeholder="Exemplo: Maria da Silva"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </Section>
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
          onClick={() => handleSignUpClick()}
          bgColor={theme.COLORS.RED_100}
          text="Criar conta"
        />
        <ButtonText
          onClick={() => handleBackToLoginClick()}
          text="Já tenho uma conta"
        />
      </Form>
    </Container>
  )
}
