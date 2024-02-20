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

import { api } from "../../services/api"

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

import { useMediaQuery } from "react-responsive"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import theme from "../../styles/theme"

export function NewDish({ isAdmin }) {
  const isDesktop = useMediaQuery({ minWidth: DEVICE_BREAKPOINTS.LG })

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")

  const [image, setImage] = useState(null)
  const [fileName, setFileName] = useState("")

  function handleImageUpload(e) {
    const file = e.target.files[0]
    setImage(file)
    setFileName(file.name)
  }

  async function handleNewDish() {
    if (!image) {
      return alert("Selecione a imagem do prato.")
    }

    if (!name) {
      return alert("Digite o nome do prato.")
    }

    if (!category) {
      return alert("Selecione a categoria do prato.")
    }

    if (ingredients.length === 0) {
      return alert("Informe pelo menos um ingrediente do prato.")
    }

    if (newIngredients) {
      return alert(
        "Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
      )
    }

    if (!price) {
      return alert("Digite o preço do prato.")
    }

    if (!description) {
      return alert("Digite a descrição do prato.")
    }

    const formData = new FormData()
    formData.append("image", image)
    formData.append("name", name)
    formData.append("category", category)
    formData.append("price", price)
    formData.append("description", description)

    formData.append("ingredients", JSON.stringify(ingredients))

    try {
      await api.post("/dish", formData)
      alert("Prato cadastrado com sucesso!")
      navigate(-1)
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível cadastrar o prato.")
      }
    }
  }

  const [ingredients, setIngredients] = useState([])
  const [newIngredients, setNewIngredients] = useState("")

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredients])
    setNewIngredients("")
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    )
  }

  const navigate = useNavigate()

  function handleBackClick() {
    navigate(-1)
  }

  return (
    <Container>
      <SideMenu isAdmin={isAdmin} />
      <Navbar isAdmin={isAdmin} />
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
                <span>{fileName || "Selecione imagem"}</span>
              </label>
              <input
                onChange={handleImageUpload}
                className="upload"
                type="file"
                id="image"
              />
            </ImgUpload>
          </Section>
          <Section text="Nome">
            <Input
              placeholder="Ex.: Salada Ceasar"
              background="dark_800"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Section>
          <Section text="Categoria">
            <label className="category-label" htmlFor="category">
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Selecionar</option>
                <option value="meal">Refeição</option>
                <option value="dessert">Sobremesa</option>
                <option value="drink">Bebidas</option>
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
            <Input
              background="dark_800"
              placeholder="R$ 00,00"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Section>
          <div className="text-section">
            <Section text="Descrição">
              <textarea
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                name=""
                id=""
                cols="30"
                rows="10"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </Section>
          </div>

          <label className="grid-void-space"></label>
          <label className="grid-void-space"></label>

          <div className="btn">
            <Button
              bgColor={theme.COLORS.RED_400}
              text="Salvar alterações"
              onClick={handleNewDish}
            />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  )
}
