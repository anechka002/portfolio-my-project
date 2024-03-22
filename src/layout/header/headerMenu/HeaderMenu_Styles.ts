import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";
import { Link } from "react-scroll";

// Menu

const NavLink = styled(Link)`
  font-size: 18px;
  font-weight: 700;

  &:hover, &.active {
    color: ${theme.colors.iconColor};
  }
`
// Mobile Menu

const MobileMenu = styled.nav``;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(50, 50, 50, 0.7);
  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    gap: 60px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -113px;
  right: -100px;
  background-color: transparent;

  width: 200px;
  height: 200px;
  z-index: 9999999;

  span {
    display: block;
    width: 21px;
    height: 2px;
    background-color: ${theme.colors.font};
    border-radius: 2px;
    position: absolute;
    left: 40px;
    bottom: 45px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: '';
      display: block;
      width: 21px;
      height: 2px;
      background-color: ${theme.colors.font};
      border-radius: 2px;
      position: absolute;
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }

    &::after {
      content: '';
      display: block;
      width: 21px;
      height: 2px;
      background-color: ${theme.colors.font};
      border-radius: 2px;
      position: absolute;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 21px;
        `}
    }
  }
`;

// Desktop Menu

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 60px;
  }
`;

export const S = {
  NavLink,
  MobileMenu,
  MobileMenuPopup,
  BurgerButton,
  DesktopMenu
}