import { Container } from "./styles"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { SideMenu } from "../../components/SideMenu"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function NewDish() {
  return (
    <Container>
      <Navbar />
      <SideMenu />
      <main>
        <ButtonText />
        <h2>Editar prato</h2>
        <p>Imagem do prato</p>
        input img
        <p>Nome</p>
        <Input placeholder="Salada Ceasar" />
        <p>Categoria</p>
        select bar
        <p>Ingredientes</p>
        add tags bar
        <p>Preço</p>
        <Input placeholder="R$ 40,00" />
        <p>Descrição</p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <Button text="Excluir prato" />
        <Button text="Salvar alterações" />
      </main>
      <Footer />
    </Container>
  )
}
