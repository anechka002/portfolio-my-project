import React from 'react';
import {S} from '../HeaderMenu_Styles';

const menuItems = [
  {
    title: 'Home',
    href: 'home'
  },
  {
    title: 'Work',
    href: 'work'
  },
  {
    title: 'Contact',
    href: 'contact'
  },
];

const Menu: React.FC= () => {
  return (
    <ul>
      {menuItems.map((item, id) => {
        return (
          <li key={id}>
            <S.NavLink to={item.href} smooth={true} activeClass="active" spy={true}>
              {item.title}
              </S.NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;