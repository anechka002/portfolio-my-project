import React from 'react';
import { HeaderMenuPropsType } from '../../Header';
import Menu from '../menu/Menu';
import {S} from '../HeaderMenu_Styles';

const DesktopMenu: React.FC<HeaderMenuPropsType> = (
  props: HeaderMenuPropsType
) => {
  return (
    <S.DesktopMenu>
      <Menu menuItems={props.menuItems} />
    </S.DesktopMenu>
  );
};

export default DesktopMenu;