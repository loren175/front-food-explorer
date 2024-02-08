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
import { IngredientItem } from "../../components/IngredientItem"

import theme from "../../styles/theme"

export function EditDish() {
  return (
    <Container>
      <SideMenu />
      <Navbar />
      <main>
        <Form>
          <ButtonText className="back-" text="< voltar" />
          <h2>Editar Prato</h2>
          <Section text="Imagem do prato">
            <ImgUpload className="image">
              <label htmlFor="image">
                <PiUploadSimpleLight size={24} />
                <span>Selecione imagem para alterá-la</span>
              </label>
              <input className="upload" type="file" id="image" />
            </ImgUpload>
          </Section>
          <Section text="Nome">
            <Input placeholder="Salada Ceasar" background="dark_800" />
          </Section>
          <Section text="Categoria">
            <label className="category-label" htmlFor="category">
              <select id="category">
                <option value="">Refeição</option>
                <option value="">Refeição2</option>
                <option value="">Refeição3</option>
              </select>
              <RiArrowDownSLine className="svgCategory" size={22} />
            </label>
          </Section>
          <Section text="Ingredientes">
            <div className="tags">
              <IngredientItem isNew placeholder="Adicionar" />
            </div>
          </Section>
          <Section text="Preço">
            <Input background="dark_800" placeholder="R$ 40,00" />
          </Section>
          <Section text="Descrição">
            <textarea
              placeholder="A Salada Ceasar é uma opção refrescante para o verão."
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </Section>
          <div className="btns">
            <Button
              bgColor={theme.COLORS.DARK_800}
              className="button-delete"
              text="Excluir prato"
            />
            <Button bgColor={theme.COLORS.RED_400} text="Salvar alterações" />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  )
}
