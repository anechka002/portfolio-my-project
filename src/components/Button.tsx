import styled from "styled-components";
import img from '../assets/images/mail.svg'
import { theme } from "../styles/Theme";

export const Button = styled.button`
  width: 294px;
  height: 57px;
  font-size: 18px;
  font-weight: 600;
  /* line-height: 25px; */
  letter-spacing: 0px;
  background-color: #9D9D9D;
  border-radius: 4px;

  padding-left: 21px;
  
  position: absolute;
  top: -30%;
  left: 0;


  position: relative;
  
  &:hover {
    background-color: ${theme.colors.secondaryBg};
    border: 1px solid #fff;
  }
  

  &::before {
    content: url(${img});
    display: inline-block;
    width: 21px;
    height: 16px;
    margin-right: 16px;

    position: absolute;
    left: 48px;
    /* left: 8%; */
    /* z-index: -1; */
    /* transform: translateX(70%); */
  }
`