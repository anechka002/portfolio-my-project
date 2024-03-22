import React from 'react';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import photo from './../../../assets/images/photo.jpeg'
import { Button } from '../../../components/Button';
import Icon from '../../../components/icon/Icon';
import {S} from './Main_Styles';
import Typewriter from 'typewriter-effect';

const Main: React.FC = () => {
  return (
    <S.Main id='home'>
      <Container>
        <FlexWrapper align='center' justify='space-between' wrap='wrap-reverse' height='none' gap='20px'>
          <S.Box>
            <S.Name>Hi, I am Your Name A Product Designer based in City.</S.Name>
            <S.MainTitle>
              <p>I help businesses and companies reach their goals by designing user-centric digital products & interactive experiences.</p>
              <Typewriter
                options={{
                  strings: ['I help businesses and companies reach their goals by designing user-centric digital products & interactive experiences.'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </S.MainTitle>
          </S.Box>
            <S.Photo src={photo} alt=''/> 
        </FlexWrapper>
        <Button type='submit'>hi@yourname.com</Button>
          <S.Works>
            <Icon iconId='arrow' width='16' height='33' viewBox='0 0 16 33'/>
            <a>Featured Work</a>
          </S.Works>
      </Container>
    </S.Main>
  )
}

export default Main;