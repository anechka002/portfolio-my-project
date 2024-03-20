import styled from "styled-components"

const Projects = styled.section`
  padding-top: 240px;
`

const ImgWrapper = styled.div`
  width: 300px;
  flex-grow: 1;
  aspect-ratio: 1 / 1;
`
const StyledImg = styled.img`
  width: 100%;
  height: 560px;
  object-fit: cover;
  border-radius: 4px;
  margin-top: 24px;
`

export const S = {
  Projects,
  ImgWrapper,
  StyledImg
}