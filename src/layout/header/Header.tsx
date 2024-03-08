import React from 'react'
import styled from 'styled-components';
import HeaderMenu from './headerMenu/HeaderMenu';
import { FlexWrapper } from '../../components/FlexWrapper';

const items = ['Home', 'Work', 'Contact']

function Header() {
  return (
    <StyledHeader>
      <FlexWrapper justify='space-between' align='center'>
        <Logo>Logo Here</Logo>
        <HeaderMenu menuItems={items}/>
      </FlexWrapper>
    </StyledHeader>
  )
}

export default Header;

const StyledHeader = styled.header`
  background-color: #76b1ef;
`
const Logo = styled.h2``