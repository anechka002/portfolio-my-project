import styled from "styled-components"
import { theme } from "../../styles/Theme"

const Header = styled.header`
  background-color: ${theme.colors.secondaryBg};
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Text = styled.h3`
  font-size: 20px;
  font-weight: 800;
`

export const S = {
  Header,
  Logo,
  Text,
}