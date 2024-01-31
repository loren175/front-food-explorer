import { Container } from "./styles"

export function Input({ width, ...rest }) {
  const widthStyle = width === "medium" ? "316px" : "581px"

  return (
    <Container style={{ width: widthStyle }}>
      <input {...rest} />
    </Container>
  )
}
