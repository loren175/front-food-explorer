import { Container } from "./styles"
import { Navbar } from "../../components/Navbar"
import homeImg from "../../assets/home-img.png"
import { Footer } from "../../components/Footer"
import { SideMenu } from "../../components/SideMenu"
import { Section } from "../../components/Section"
import { Card } from "../../components/Card"

import { register } from "swiper/element/bundle"

register()

export function Home() {
  return (
    <Container>
      <Navbar />
      <SideMenu />
      <main>
        <div>
          <header className="banner">
            <img className="banner-img" src={homeImg} alt="" />
            <div className="banner-text">
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </header>
        </div>

        <Section text="Refeições">
          <swiper-container
            space-between="27"
            slides-per-view="auto"
            navigation="true"
            loop="true"
            grab-cursor="true"
          >
            <swiper-slide>
              <Card />
            </swiper-slide>
            <swiper-slide>
              <Card />
            </swiper-slide>
          </swiper-container>
        </Section>
        <Section text="Sobremesas">
          <swiper-container
            space-between="27"
            slides-per-view="auto"
            navigation="true"
            loop="true"
            grab-cursor="true"
          >
            <swiper-slide>
              <Card />
            </swiper-slide>
            <swiper-slide>
              <Card />
            </swiper-slide>
            <swiper-slide>
              <Card />
            </swiper-slide>
            <swiper-slide>
              <Card />
            </swiper-slide>
          </swiper-container>
        </Section>
        <Section text="Bebidas">
          <swiper-container
            space-between="27"
            slides-per-view="auto"
            navigation="true"
            loop="true"
            grab-cursor="true"
          >
            <swiper-slide>
              <Card />
            </swiper-slide>
            <swiper-slide>
              <Card />
            </swiper-slide>
          </swiper-container>
        </Section>

     
      </main>
      <Footer />
    </Container>
  )
}
