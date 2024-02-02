import { Container } from "./styles"
import { Navbar } from "../../components/Navbar"
import homeImg from "../../assets/home-img.png"
import { Footer } from "../../components/Footer"
import { SideMenu } from "../../components/SideMenu"
import { Section } from "../../components/Section"

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
        <Section text="Refeições" />
        <Section text="Pratos principais" />
        <Section text="Bebidas" />
      </main>
      <Footer />
    </Container>
  )
}
