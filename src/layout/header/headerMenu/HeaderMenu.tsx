import React from 'react'
import styled from 'styled-components';

type HeaderMenuPropsType = {
  menuItems: Array<string>
}

function HeaderMenu(props: HeaderMenuPropsType) {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.menuItems.map((item, id) => {
          return <li key={id}>{item}</li>
        })}
      </ul>
    </StyledHeaderMenu>
  )
}

export default HeaderMenu;

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 20px;
  }
`