import styled from "styled-components"
import { theme } from "../../../styles/Theme"

const Explorations = styled.section`
  padding-top: 240px;

  position: relative;

  @media ${theme.media.mobile} {
    padding-top: 115px;
  }
`

const ImgWrapper = styled.div`
  width: 300px;
  flex-grow: 1;
  aspect-ratio: 1 / 1;
`

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`

export const S = {
  Explorations,
  ImgWrapper,
  StyledImg
}