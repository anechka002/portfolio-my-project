import React from 'react';
import Icon from '../icon/Icon';
import { animateScroll as scroll } from 'react-scroll';

const Logo: React.FC = () => {
  return (
    <a onClick={ () => {scroll.scrollToTop()} }>
      <Icon iconId={'logo'} width={'29'} height={'42'} viewBox={'0 0 29 42'}/>
    </a>
  )
}

export default Logo;


