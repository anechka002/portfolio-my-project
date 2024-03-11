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
          return <li key={id}>
            <Link href="">{item}</Link>
            </li>
        })}
      </ul>
    </StyledHeaderMenu>
  )
}

export default HeaderMenu;

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 60px;
  }
`

const Link = styled.a`
  font-size: 18px;
  font-weight: 700;
`