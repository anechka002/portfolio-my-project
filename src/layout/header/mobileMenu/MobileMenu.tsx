import React from 'react'
import styled, { css } from 'styled-components';
import { theme } from '../../../styles/Theme';

type HeaderMenuPropsType = {
  menuItems: Array<string>
}

function MobileMenu(props: HeaderMenuPropsType) {
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={false}>
        <span> </span>
      </BurgerButton>
      <MobileMenuPopup isOpen={false}>
        <ul>
          {props.menuItems.map((item, id) => {
            return <li key={id}>
              <Link href="">{item}</Link>
              </li>
          })}
        </ul>
      </MobileMenuPopup>
    </StyledMobileMenu>
  )
}

export default MobileMenu;

const StyledMobileMenu = styled.nav`
  display: none;

  @media ${theme.media.mobile} {
    display: block;
  }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(50, 50, 50, 0.7);
  display: none;

  ${props => props.isOpen && css<{isOpen: boolean}>`
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
`

const BurgerButton = styled.button<{isOpen: boolean}>`
  position: fixed;
  top: -113px;
  right: -100px;
  background-color: rgba(50, 50, 50, 0.7);

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

    ${props => props.isOpen && css<{isOpen: boolean}>`
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

      ${props => props.isOpen && css<{isOpen: boolean}>`
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

      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(45deg) translateY(0);
        width: 21px;
      `}

    }

  }
`

const Link = styled.a`
  font-size: 18px;
  font-weight: 700;

  &:hover {
    color: ${theme.colors.iconColor};
  }
`