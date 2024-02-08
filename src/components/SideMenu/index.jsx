import { Container } from "./styles"
import { Input } from "../Input"
import { PiX } from "react-icons/pi"
import { ButtonText } from "../ButtonText"

export function SideMenu({ isAdmin }) {
  return (
    <Container>
      <div className="menu-header">
        <PiX className="close-btn" />
        <h4>Menu</h4>
      </div>
      <div className="menu-content">
        <Input
          className="menu-search"
          hasIcon={true}
          placeholder="Busque por pratos ou ingredientes"
        />
        {isAdmin && (
          <div className="btn-border">
            <ButtonText text="Novo Prato"/>
          </div>
        )}
        <div className="btn-border">
          <ButtonText text="Sair"/>
        </div>
      </div>
    </Container>
  )
}
