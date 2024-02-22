import { Container } from "./styles"

import { PiMagnifyingGlass } from "react-icons/pi"

export function Input({ setSearch, hasIcon, width, background, widthStyle, isDisabled, ...rest }) {
  const bgStyle = background === "dark_800" ? "#0D161B" : "#0D1D25"

  return (
    <Container style={{ width: widthStyle, background: bgStyle }}>
      {
        hasIcon && 
        <PiMagnifyingGlass className="search-icon" />
      }
      <input
        disabled={isDisabled}
        onChange={(e) => setSearch(e.target.value)}
        {...rest}
      />
    </Container>
  )
}
