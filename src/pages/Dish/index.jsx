import { Container } from "./styles"
import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { SideMenu } from "../../components/SideMenu"
import { ButtonText } from "../../components/ButtonText"
import food1 from "../../assets/food1.png"
import { Amount } from "../../components/Amount"
import { Button } from "../../components/Button"
import { Tag } from "../../components/Tag"
import { Section } from "../../components/Section"

export function Dish() {
  return (
    <Container>
      <Navbar />
      <SideMenu />
      <main>
        <div className="back-btn">
          <ButtonText text="< voltar" />
        </div>
        <img src={food1} alt="" />

        <Section text="Salada">
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>
          <div className="tag-area">
            <Tag text="alface" />
            <Tag text="alface" />
            <Tag text="alface" />
            <Tag text="alface" />
          </div>
        </Section>

        <div className="order">
          <Amount text="01" />
          <Button hasIcon={true} text="pedir ∙ R$ 25,00" />
        </div>
      </main>
      <Footer />
    </Container>
  )
}
