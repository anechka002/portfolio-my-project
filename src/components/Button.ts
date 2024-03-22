import styled from "styled-components";
import img from '../assets/images/mail.svg'
import { theme } from "../styles/Theme";

export const Button = styled.button`
  width: 294px;
  height: 57px;
  font-size: 18px;
  font-weight: 600;
  background-color: #9D9D9D;
  border-radius: 4px;
  padding: 0 20px;

  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  transition: ${theme.animations.transition};
  
  &:hover {
    background-color: ${theme.colors.secondaryBg};
    border: 1px solid #fff;
  }
  
  &::before {
    content: url(${img});
    display: inline-block;
    width: 21px;
    height: 16px;
  }

  @media screen and (max-width: 949px) {
    margin: 0 auto;
  }
  
  @media ${theme.media.mobile} {
    width: 242px;
    margin: 0 auto;
  }
`