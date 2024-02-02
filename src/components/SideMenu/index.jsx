import { Container, Exit } from "./styles"
import { Input } from "../Input"
import { PiX } from "react-icons/pi"


export function SideMenu() {
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
        <Exit to='/'>Sair</Exit>
      </div>
    </Container>
  )
}
