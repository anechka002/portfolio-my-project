import React from 'react'
import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import photo from './../../../assets/images/photo.jpeg'
import { theme } from '../../../styles/Theme';
import { Button } from '../../../components/Button';

function Main() {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align='center' justify='space-between' wrap='wrap-reverse' height='none' gap='20px'>
          <Box>
            <Name>Hi, I am Your Name A Product Designer based in City.</Name>
            <MainTitle>I help businesses and companies reach their goals by designing user-centric digital products & interactive experiences.
            </MainTitle>
          </Box>
            <Photo src={photo} alt=''/> 
        </FlexWrapper>
        <Button type='submit'>hi@yourname.com</Button>
        <StyledWorks><a>Featured Work</a></StyledWorks>
      </Container>
    </StyledMain>
  )
}

export default Main;

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
  padding: 150px 0 218px;

  position: relative;
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  flex-grow: 1;
`

const Name = styled.p`
  font-size: 54px;
  font-weight: 700;
  line-height: 64px;
  text-align: left;
`
const MainTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  text-align: left;
  color: ${theme.colors.iconColor};
  margin: 25px 0 90px;
`

const Photo = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 105px;
`

const StyledWorks = styled.div`
  margin-top: 160px;

  a {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
`