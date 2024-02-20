import { Container } from "./styles"
import { Input } from "../Input"
import { ButtonText } from "../ButtonText"

import { PiX } from "react-icons/pi"

import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"

export function SideMenu({ setSearch, isAdmin, menuIsOpen, onCloseMenu }) {
  const navigate = useNavigate()

  const { signOut } = useAuth()

  function handleSignOutClick() {
    const confirmLogout = confirm("Deseja mesmo sair?")
    if (confirmLogout) {
      navigate("/")
      signOut()
    } else {
      return
    }
  }

  function handleNewDishClick() {
    navigate("/new")
  }

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <div className="menu-header">
        <PiX className="close-btn" onClick={onCloseMenu} />
        <h4>Menu</h4>
      </div>
      <div className="menu-content">
        <Input
          className="menu-search"
          hasIcon={true}
          $setsearch={setSearch}
          placeholder="Busque por pratos ou ingredientes"
        />
        {isAdmin && (
          <div className="btn-border">
            <ButtonText text="Novo Prato" onClick={handleNewDishClick} />
          </div>
        )}
        <div className="btn-border">
          <ButtonText onClick={handleSignOutClick} text="Sair" />
        </div>
      </div>
    </Container>
  )
}
