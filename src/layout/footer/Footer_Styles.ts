import styled from "styled-components"
import { theme } from "../../styles/Theme"

const Footer = styled.footer`
  background-color: ${theme.colors.primaryBg};
  outline: 1px solid #696969;
  padding: 50px 0 35px;

  position: relative;
`

const Copyright = styled.small`
  font-size: 16px;
  font-weight: 600;
  line-height: 36px;
  color: ${theme.colors.iconColor};

  span {
    color: #ECECEC;
  }

  @media screen and (max-width: 611px) {
    margin: 0 auto;
  }
`

const SocialList = styled.ul`
  display: flex;
  gap: 40px;

  @media screen and (max-width: 611px) {
    margin: 0 auto;
  }
`

const SocialItem = styled.li``

const SocialLink = styled.a`
  color: ${theme.colors.iconColor};
  transition: color .2s linear;

  &:hover {
    color: ${theme.colors.font};
  }
`
export const S = {
  Footer,
  Copyright,
  SocialList,
  SocialItem,
  SocialLink,
}