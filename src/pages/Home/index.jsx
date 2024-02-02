import { Container } from "./styles"
import { Navbar } from "../../components/Navbar"
import homeImg from "../../assets/home-img.png"
import { Footer } from "../../components/Footer"
import { SideMenu } from "../../components/SideMenu"
import { Card } from "../../components/Card"

export function Home() {
  return (
    <Container>
      <Navbar />
      <SideMenu/>
      <main>
        <div>
          <header className="banner">
            <img className="banner-img"  src={homeImg} alt="" />
            <div className="banner-text">
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </header>
        </div>
        <h3>Refeições</h3>
        <Card/>
        <h3>Pratos Principais</h3>
        cardslide
        <h3>Pratos Principais</h3>
        cardslide footer
      </main>
      <Footer />
    </Container>
  )
}
