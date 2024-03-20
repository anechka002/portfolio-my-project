import React from 'react';
import { FlexWrapper } from '../../components/FlexWrapper';
import Logo from '../../components/logo/Logo';
import { Container } from '../../components/Container';
import MobileMenu from './headerMenu/mobileMenu/MobileMenu';
import { S } from './Header_Styles';
import DesktopMenu from './headerMenu/desktopMenu/DesktopMenu';

const menuItems = ['Home', 'Work', 'Contact'];

export type HeaderMenuPropsType = {
  menuItems: Array<string>;
};

const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 576;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <S.Logo>
            <Logo />
            <S.Text>Logo Here</S.Text>
          </S.Logo>

          {width < breakpoint ? (
            <MobileMenu menuItems={menuItems} />
          ) : (
            <DesktopMenu menuItems={menuItems} />
          )}

        </FlexWrapper>
      </Container>
    </S.Header>
  );
};

export default Header;
