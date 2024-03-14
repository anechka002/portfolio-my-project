import React from 'react'
import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import image_01 from '../../../assets/images/01.jpeg'
import image_02 from '../../../assets/images/02.jpeg'
import image_03 from '../../../assets/images/03.jpeg'

function Projects() {
  return (
    <StyledProjects>
      <Container>
        <SectionTitle>Personal Projects</SectionTitle>
        <FlexWrapper wrap='wrap' justify='space-between' gap='16px'>
          <ImgWrapper>
            <StyledImg src={image_01}/>
          </ImgWrapper>
          <ImgWrapper>
            <StyledImg src={image_02}/>
          </ImgWrapper>
          <ImgWrapper>
            <StyledImg src={image_03}/>
          </ImgWrapper>
        </FlexWrapper>
      </Container>
    </StyledProjects>
  )
}

export default Projects;

const StyledProjects = styled.section`
  padding-top: 240px;
`

const ImgWrapper = styled.div`
  width: 300px;
  flex-grow: 1;
  /* aspect-ratio: 1 / 1; */
`
const StyledImg = styled.img`
  width: 100%;
  height: 560px;
  object-fit: cover;
  border-radius: 4px;
  margin-top: 24px;
`