import { Container } from "./styles"
import { Navbar } from "../../components/Navbar"
import homeImg from "../../assets/home-img.png"
import { Footer } from "../../components/Footer"

export function Home() {
  return (
    <Container>
      <Navbar />
      <main>
        <div>
          <header className="outdoor">
            <img src={homeImg} alt="" />
            <div>
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </header>
        </div>
        <h3>Refeições</h3>
        cardslide
        <h3>Pratos Principais</h3>
        cardslide
        <h3>Pratos Principais</h3>
        cardslide footer
      </main>
      <Footer />
    </Container>
  )
}
