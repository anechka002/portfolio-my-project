import React from 'react';
import { HeaderMenuPropsType } from '../../Header';
import {S} from '../HeaderMenu_Styles';

const Menu: React.FC<HeaderMenuPropsType> = (props: HeaderMenuPropsType) => {
  return (
    <ul>
      {props.menuItems.map((item, id) => {
        return (
          <li key={id}>
            <S.Link href="">{item}</S.Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;