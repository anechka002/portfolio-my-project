import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"

const Contact = styled.section`
  padding: 240px 0 125px;

  @media ${theme.media.mobile} {
    padding-top: 200px;
  }
`

const Text = styled.p`
  ${font({weight: 600, Fmax: 26, Fmin: 18})}
  max-width: 520px;
  line-height: 38px;
  text-align: center;
  color: ${theme.colors.iconColor};
  margin: 24px 0 48px;

  @media ${theme.media.mobile} {
    line-height: 26px;
    font-weight: 500;
  }
`

export const S = {
  Contact,
  Text
}