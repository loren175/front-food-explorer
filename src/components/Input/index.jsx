import { Container } from "./styles"

import { PiMagnifyingGlass } from "react-icons/pi"

export function Input({ hasIcon, width, background, widthStyle, ...rest }) {
  const bgStyle = background === "dark_800" ? "#0D161B" : "#0D1D25"

  return (
    <Container style={{ width: widthStyle, background: bgStyle }}>
      {hasIcon && <PiMagnifyingGlass className="search-icon" />}
      <input {...rest} />
    </Container>
  )
}
