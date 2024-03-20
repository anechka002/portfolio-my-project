import React from 'react'
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import Icon from '../../components/icon/Icon';
import {S} from './Footer_Styles'

const socialItemsData = [
  {
    width: '22',
    height: '22',
    viewBox: '0 0 22 22',
    iconId: 'whatsApp'
  },
  {
    width: '22',
    height: '22',
    viewBox: '0 0 22 22',
    iconId: 'dribbble'
  },
  {
    width: '22',
    height: '22',
    viewBox: '0 0 22 22',
    iconId: 'linkedin'
  },
  {
    width: '27',
    height: '22',
    viewBox: '0 0 27 22',
    iconId: 'twitter'
  },
  {
    width: '29',
    height: '18',
    viewBox: '0 0 29 18',
    iconId: 'behance'
  },

]

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper justify='space-between' align='center' wrap='wrap-reverse' gap='35px'>
          <S.Copyright>Made by <span>Your Name</span> — Copyright 2021</S.Copyright>
          <S.SocialList>

            {socialItemsData.map((s, index) => {
              return (
                <S.SocialItem>
                  <S.SocialLink>
                    <Icon width={s.width} height={s.height} viewBox={s.viewBox} iconId={s.iconId}/>
                  </S.SocialLink>
                </S.SocialItem>
              )
            })}

          </S.SocialList>
        </FlexWrapper>
      </Container>
    </S.Footer>
  )
}

export default Footer;