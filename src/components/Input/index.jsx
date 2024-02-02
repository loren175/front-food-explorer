import { Container } from "./styles"
import { PiMagnifyingGlass } from "react-icons/pi"

export function Input({ hasIcon, width, ...rest }) {
  const widthStyle = width === "medium" ? "316px" : "100%"

  return (
    <Container style={{ width: widthStyle }}>
      {hasIcon && <PiMagnifyingGlass className="search-icon" /> }
      <input {...rest} />
    </Container>
  )
}
