import { Container, Form, ImgUpload } from "./styles"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { SideMenu } from "../../components/SideMenu"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { PiUploadSimpleLight } from "react-icons/pi"
import { RiArrowDownSLine } from "react-icons/ri"

export function NewDish() {
  return (
    <Container>
      <Navbar />
      <SideMenu />
      <main>
        <ButtonText text="< voltar" />
        <Form>
          <h2>Novo Prato</h2>
          <Section text="Imagem do prato">
            <ImgUpload className="image">
              <label htmlFor="image">
                <PiUploadSimpleLight size={24} />
                <span>Selecione uma imagem</span>
              </label>
              <input className="upload" type="file" id="image" />
            </ImgUpload>
          </Section>
          <Section text="Nome">
            <Input placeholder="Ex.: Salada Ceasar" background="dark_800" />
          </Section>
          <Section text="Categoria">
            <label htmlFor="category">
              <select id="category">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
              <RiArrowDownSLine />
            </label>
          </Section>
          <Section text="Ingredientes">add tags bar</Section>
          <Section text="Preço">
            <Input background="dark_800" placeholder="R$ 00,00" />
          </Section>
          <Section text="Descrição">
            <textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </Section>

          <Button text="Salvar alterações" />
        </Form>
      </main>
      <Footer />
    </Container>
  )
}
