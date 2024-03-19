import React from 'react'
import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import Icon from '../../components/icon/Icon';

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper justify='space-between' align='center' wrap='wrap-reverse' gap='35px'>
          <Copyright>Made by <span>Your Name</span> — Copyright 2021</Copyright>
          <SocialList>
            <SocialItem>
              <SocialLink>
                <Icon iconId='whatsApp'/>
              </SocialLink>
            </SocialItem>
          
            <SocialItem>
              <SocialLink>
                <Icon iconId='dribbble'/>
              </SocialLink>
            </SocialItem>
          
            <SocialItem>
              <SocialLink>
                <Icon iconId='linkedin'/>
              </SocialLink>
            </SocialItem>
          
            <SocialItem>
              <SocialLink>
                <Icon iconId='twitter' width='27px' height='22px' viewBox='0 0 27px 22px'/>
              </SocialLink>
            </SocialItem>
          
            <SocialItem>
              <SocialLink>
                <Icon iconId='behance' width='29px' height='18px' viewBox='0 0 29px 18px'/>
              </SocialLink>
            </SocialItem>
          </SocialList>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  )
}

export default Footer;

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  outline: 1px solid #696969;
  padding: 50px 0 35px;
`

const Copyright = styled.small`
  font-size: 16px;
  font-weight: 600;
  line-height: 36px;
  color: ${theme.colors.iconColor};

  span {
    color: #ECECEC;
  }

  @media screen and (max-width: 611px) {
    margin: 0 auto;
  }
`

const SocialList = styled.ul`
  display: flex;
  gap: 40px;

  @media screen and (max-width: 611px) {
    margin: 0 auto;
  }
`

const SocialItem = styled.li``

const SocialLink = styled.a`
  color: ${theme.colors.iconColor};

  &:hover {
    color: ${theme.colors.font};
  }
`