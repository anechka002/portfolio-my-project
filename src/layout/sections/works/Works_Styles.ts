import styled from "styled-components";
import { theme } from "../../../styles/Theme";

// Works
const Works = styled.section`
  position: relative;
`

// Work
const Title = styled.p`
  opacity: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: ${theme.animations.transition};

  font-size: 40px;
  font-weight: 700;
`

const Work = styled.div`
  width: 555px;
  flex-grow: 1;
  position: relative;
  transition: 2s linear;

  &:nth-child(odd) {
    transform: translateY(-140px)
  }

  &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 4px;
      opacity: 0;
      transition: ${theme.animations.transition};
    }

  &:hover {
    &::before {
      opacity: 1;
    }
    ${Title} {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1155px) {
    &:nth-child(odd) {
      transform: none
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 888px;
  object-fit: cover;
  border-radius: 4px;
`
export const S = {
  Works,
  Title,
  Work,
  Image,
}