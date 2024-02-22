import { Container } from "./styles"

import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { SideMenu } from "../../components/SideMenu"
import { ButtonText } from "../../components/ButtonText"
import { Amount } from "../../components/Amount"
import { Button } from "../../components/Button"
import { Tag } from "../../components/Tag"
import { Section } from "../../components/Section"

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"
import theme from "../../styles/theme"

import { api } from "../../services/api"

import { useMediaQuery } from "react-responsive"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export function Dish({ isAdmin }) {
  const isDesktop = useMediaQuery({ minWidth: DEVICE_BREAKPOINTS.LG })

  const navigate = useNavigate()
  const params = useParams()

  const [data, setData] = useState(null)
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function handleEditClick() {
    navigate(`/edit/${params.id}`)
  }

  function handleBackClick() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dish/${params.id}`)
      setData(response.data)
    }

    fetchDish()
  }, [])

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        isDisabled={true}
        isAdmin={isAdmin}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Navbar
        isDisabled={true}
        onOpenMenu={() => setMenuIsOpen(true)}
        isAdmin={isAdmin}
      />

      {
        data && (
          <main>
            <div className="back-btn">
              <ButtonText 
                onClick={() => handleBackClick()} 
                text="< voltar" 
            />
            </div>
            <img
              src={`${api.defaults.baseURL}/files/${data.image}`}
              alt={data.name}
            />

          <Section text={data.name}>
            
            <p>{data.description}</p>

            {
            data.ingredients && (
              <div className="tag-area">
                {
                  data.ingredients.map((ingredient) => (
                  <Tag 
                    key={String(ingredient.id)} 
                    text={ingredient.name} />
                ))
                }
              </div>
            )
            }
          </Section>

          <div className="btns">
            {
              !isAdmin && <Amount />}
            {
              isAdmin ? (
              <Button
                bgColor={theme.COLORS.RED_100}
                hasIcon={false}
                text="Editar Prato"
                onClick={handleEditClick}
              />
            ) : (
              <Button
                bgColor={theme.COLORS.RED_100}
                hasIcon={isDesktop ? false : true}
                text={
                  isDesktop
                    ? `incluir ∙ R$ ${(data.price).toLocaleString(
                        "pt-BR",
                        {
                          minimumFractionDigits: 2,
                        }
                      )}`
                    : `pedir ∙ R$ ${(data.price).toLocaleString(
                        "pt-BR",
                        {
                          minimumFractionDigits: 2,
                        }
                      )}`
                }
              />
            )}
          </div>
        </main>
      )
      }
      
      <Footer />
    </Container>
  )
}
