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

register()

export function Home() {
  const isDesktop = useMediaQuery({ minWidth: DEVICE_BREAKPOINTS.LG })

  return (
    <Container>
      <SideMenu />
      <Navbar />
      <main>
        <div>
          <header className="banner">
            <img className="banner-img" src={isDesktop ? homeImgDesk : homeImg} alt="" />
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
            space-between={isDesktop ? "27" : "16"}
            slides-per-view="auto"
            navigation={isDesktop ? "true" : "false"}
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
            space-between={isDesktop ? "27" : "16"}
            slides-per-view="auto"
            navigation={isDesktop ? "true" : "false"}
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
