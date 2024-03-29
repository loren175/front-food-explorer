import { Container } from "./styles"

import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { SideMenu } from "../../components/SideMenu"
import { Section } from "../../components/Section"
import { Card } from "../../components/Card"
import homeImg from "../../assets/home-img.png"
import homeImgDesk from "../../assets/home-img-desk.png"

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"
import { useMediaQuery } from "react-responsive"

import { register } from "swiper/element/bundle"

import { api } from "../../services/api"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

register()

export function Home({ isAdmin }) {
  const isDesktop = useMediaQuery({ minWidth: DEVICE_BREAKPOINTS.LG })

  const navigate = useNavigate()

  const [dishes, setDishes] = useState({ meals: [], desserts: [], drinks: [] })
  const [search, setSearch] = useState("")
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  function handleDishClick(id) {
    navigate(`/dish/${id}`)
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dish?search=${search}`)

      const meals = response.data.filter((dish) => dish.category === "meal")
      const desserts = response.data.filter((dish) => dish.category === "dessert")
      const drinks = response.data.filter((dish) => dish.category === "drink")

      setDishes({ meals, desserts, drinks })
    }

    fetchDishes()
  }, [search])

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        isAdmin={isAdmin}
        setSearch={setSearch}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Navbar
        onOpenMenu={() => setMenuIsOpen(true)}
        isAdmin={isAdmin}
        setSearch={setSearch}
      />

      <main>
        <div>

          <header className="banner">

            <img
              className="banner-img"
              src={isDesktop ? homeImgDesk : homeImg}
              alt="Macarons coloridos caindo com frutas silvestres e folhas."
            />

            <div className="banner-text">
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>

          </header>
        </div>

        <Section text="Refeições">
          <swiper-container
            space-between={isDesktop ? "27" : "16"}
            slides-per-view="auto"
            navigation={isDesktop ? "true" : "false"}
            loop="true"
            grab-cursor="true"
          >
            {
              dishes &&
              dishes.meals.map((dish) => (
                <swiper-slide key={String(dish.id)}>
                  <Card
                    isAdmin={isAdmin}
                    handleDishClick={handleDishClick}
                    data={dish}
                  />
                </swiper-slide>
              ))
              }
          </swiper-container>
        </Section>
        
        <Section text="Sobremesas">
          <swiper-container
            space-between={isDesktop ? "27" : "16"}
            slides-per-view="auto"
            navigation={isDesktop ? "true" : "false"}
            loop="true"
            grab-cursor="true"
          >
            {
              dishes &&
              dishes.desserts.map((dish) => (
                <swiper-slide key={String(dish.id)}>
                  <Card
                    isAdmin={isAdmin}
                    handleDishClick={handleDishClick}
                    data={dish}
                  />
                </swiper-slide>
              ))
              }
          </swiper-container>
        </Section>

        <Section text="Bebidas">
          <swiper-container
            space-between={isDesktop ? "27" : "16"}
            slides-per-view="auto"
            navigation={isDesktop ? "true" : "false"}
            loop="true"
            grab-cursor="true"
          >
            {
              dishes &&
              dishes.drinks.map((dish) => (
                <swiper-slide key={String(dish.id)}>
                  <Card
                    isAdmin={isAdmin}
                    handleDishClick={handleDishClick}
                    data={dish}
                  />
                </swiper-slide>
              )) 
              }
          </swiper-container>
        </Section>

      </main>

      <Footer />
      
    </Container>
  )
}
