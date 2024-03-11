import React from 'react'
import styled from 'styled-components';
import HeaderMenu from './headerMenu/HeaderMenu';
import { FlexWrapper } from '../../components/FlexWrapper';
import Logo from '../../components/logo/Logo';
import { Container } from '../../components/Container';
import { theme } from '../../styles/Theme';

const items = ['Home', 'Work', 'Contact']

function Header() {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify='space-between' align='center'>
          <StyledLogo>
            <Logo/>
            <StyledText>Logo Here</StyledText>
          </StyledLogo>
          <HeaderMenu menuItems={items}/>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  )
}

export default Header;

const StyledHeader = styled.header`
  background-color: ${theme.colors.secondaryBg};
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`
const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const StyledText = styled.h3`
  font-size: 20px;
  font-weight: 800;
`

