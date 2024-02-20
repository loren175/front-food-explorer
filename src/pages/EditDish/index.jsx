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
import theme from "../../styles/theme"

import { api } from "../../services/api"

import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export function EditDish({ isAdmin }) {
  const isDesktop = useMediaQuery({ minWidth: DEVICE_BREAKPOINTS.LG })

  const navigate = useNavigate()

  const params = useParams()

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [dish, setDish] = useState(null)
  const [updatedImage, setUpdatedImage] = useState(null)
  const [category, setCategory] = useState("")
  const [image, setImage] = useState(null)
  const [fileName, setFileName] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [newIngredients, setNewIngredients] = useState("")
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function handleBackClick() {
    navigate(-1)
  }

  function handleImageChange(e) {
    const file = e.target.files[0]
    setImage(file)
    setUpdatedImage(file)
    setFileName(file.name)
  }

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredients])
    setNewIngredients("")
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    )
  }

  async function handleEditDish() {
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

    try {
      const updatedDish = {
        name: name,
        category: category,
        price: price,
        description: description,
        ingredients: ingredients,
      }

      if (image) {
        const formData = new FormData()
        formData.append("image", image)

        await api.patch(`/dish/${params.id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
      }

      await api.patch(`/dish/${params.id}`, updatedDish)

      alert("Prato atualizado com sucesso!")
      navigate(-1)
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível atualizar o prato.")
      }
    }
  }

  async function handleRemoveDish() {
    const confirm = window.confirm("Deseja realmente remover o prato?")

    if (confirm) {
      try {
        await api.delete(`/dish/${params.id}`)
        navigate("/")
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível excluir o prato.")
        }
      }
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleEditDish()
    }
  }

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dish/${params.id}`)
        setDish(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchDish()
  }, [params.id])

  useEffect(() => {
    if (dish) {
      setFileName(dish.image)
      setImage(dish.image)
      setName(dish.name)
      setCategory(dish.category)
      setPrice(dish.price)
      setDescription(dish.description)

      const allIngredients = dish.ingredients.map(
        (ingredient) => ingredient.name
      )
      setIngredients(allIngredients)
    }
  }, [dish])

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        isAdmin={isAdmin}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Navbar onOpenMenu={() => setMenuIsOpen(true)} isAdmin={isAdmin} />
      <main>
        <Form onKeyDown={handleKeyDown}>
          <div className="back-btn">
            <ButtonText onClick={() => handleBackClick()} text="< voltar" />
          </div>
          <h2>Editar Prato</h2>
          <Section text="Imagem do prato">
            <ImgUpload className="image">
              <label htmlFor="image">
                <PiUploadSimpleLight size={24} />
                {isDesktop ? (
                  <span>{fileName || "Selecione imagem"}</span>
                ) : (
                  <span>
                    {fileName || "Selecione uma imagem para altera-la."}
                  </span>
                )}
              </label>
              <input
                className="upload"
                onChange={handleImageChange}
                type="file"
                id="image"
              />
            </ImgUpload>
          </Section>
          <Section text="Nome">
            <Input
              placeholder="Salada Ceasar"
              value={name}
              onChange={(e) => setName(e.target.value)}
              background="dark_800"
            />
          </Section>
          <Section text="Categoria">
            <label className="category-label" htmlFor="category">
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
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
                onChange={(e) => setNewIngredients(e.target.value)}
                value={newIngredients}
                onClick={handleAddIngredient}
              />
            </div>
          </Section>

          <label className="grid-void-space"></label>

          <Section text="Preço">
            <Input
              background="dark_800"
              placeholder="R$ 40,00"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Section>
          <div className="text-section">
            <Section text="Descrição">
              <textarea
                placeholder="A Salada Ceasar é uma opção refrescante para o verão."
                name=""
                id=""
                cols="30"
                rows="10"
                defaultValue={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </Section>
          </div>

          <label className="grid-void-space"></label>
          <label className="grid-void-space"></label>

          <div className="btns">
            <Button
              bgColor={theme.COLORS.DARK_800}
              className="button-delete"
              text="Excluir prato"
              onClick={handleRemoveDish}
            />
            <Button
              bgColor={theme.COLORS.RED_400}
              text="Salvar alterações"
              onClick={handleEditDish}
            />
          </div>
        </Form>
      </main>
      <Footer />
    </Container>
  )
}
