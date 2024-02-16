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

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

import { useMediaQuery } from "react-responsive"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import theme from "../../styles/theme"

export function NewDish() {
  const isDesktop = useMediaQuery({ minWidth: DEVICE_BREAKPOINTS.LG })

  const [ingredients, setIngredients] = useState([])
  const [newIngredients, setNewIngredients] = useState("")

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredients])
    setNewIngredients("")
  }

  function handleRemoveIngredient(deleted){
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  const navigate = useNavigate()

  function handleBackClick() {
    navigate(-1)
  }

  return (
    <Container>
      <SideMenu />
      <Navbar />
      <main>
        <Form>
          <div className="back-btn">
            <ButtonText onClick={() => handleBackClick()} text="< voltar" />
          </div>

          {isDesktop ? <h2>Adicionar prato</h2> : <h2>Novo Prato</h2>}

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
              {ingredients.map((ingredient, index) => (
                <IngredientItem
                  key={String(index)}
                  value={ingredient}
                  onClick={() => handleRemoveIngredient(ingredient)}
                />
              ))}
              <IngredientItem
                isNew
                placeholder="Adicionar"
                value={newIngredients}
                onChange={(e) => setNewIngredients(e.target.value)}
                onClick={handleAddIngredient}
              />
            </div>
          </Section>

          <label className="grid-void-space"></label>

          <Section text="Preço">
            <Input background="dark_800" placeholder="R$ 00,00" />
          </Section>
          <div className="text-section">
            <Section text="Descrição">
              <textarea
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </Section>
          </div>

          <label className="grid-void-space"></label>
          <label className="grid-void-space"></label>

          <div className="btn">
            <Button bgColor={theme.COLORS.RED_400} text="Salvar alterações" />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  )
}
