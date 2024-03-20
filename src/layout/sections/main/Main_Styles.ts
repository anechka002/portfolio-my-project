import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"

const Main = styled.section`
  min-height: 100vh;
  display: flex;
  padding: 150px 0 218px;

  position: relative;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  flex-grow: 1;

  @media screen and (max-width: 949px) {
    margin: 0 auto;
  }
`

const Name = styled.p`
  ${font({weight: 700, Fmax: 54, Fmin: 36})}
  line-height: 64px;
  text-align: left;

  @media ${theme.media.mobile} {
    line-height: 40px;
  }

  @media screen and (max-width: 949px) {
    text-align: center;
  }
`

const MainTitle = styled.h1`
  ${font({weight: 600, Fmax: 20, Fmin: 18})}
  line-height: 30px;
  text-align: left;
  color: ${theme.colors.iconColor};
  margin: 25px 0 90px;

  @media ${theme.media.mobile} {
    line-height: 26px;
    margin: 20px 0 50px;
  }

  @media screen and (max-width: 949px) {
    text-align: center;
  }
`

const Photo = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 105px;

  @media screen and (max-width: 1054px){
    margin: 0 auto;
  }

  @media ${theme.media.mobile} {
    width: 240px;
    height: 240px;
  }
`

const Works = styled.div`
  margin-top: 160px;
  display: flex;
  align-items: center;
  gap: 30px;

  a {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
`

export const S = {
  Main,
  Box,
  Name,
  MainTitle,
  Photo,
  Works,
}