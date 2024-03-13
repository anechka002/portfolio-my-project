import React from 'react'
import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import img_1 from '../../../assets/images/img_1.jpeg'
import img_2 from '../../../assets/images/img_2.jpeg'
import img_3 from '../../../assets/images/img_3.jpeg'
import img_4 from '../../../assets/images/img_4.jpeg'
import img_5 from '../../../assets/images/img_5.jpeg'
import img_6 from '../../../assets/images/img_6.jpeg'
import { SectionTitle } from '../../../components/SectionTitle';

function Explorations() {
  return (
    <StyledExplorations>
      <Container>
        <SectionTitle>Visual Explorations</SectionTitle>
        <FlexWrapper wrap='wrap' justify='space-between'>
          <ImgWrapper>
            <StyledImg src={img_1}/>
          </ImgWrapper>
          <ImgWrapper>
            <StyledImg src={img_2}/>
          </ImgWrapper>
          <ImgWrapper>
            <StyledImg src={img_3}/>
          </ImgWrapper>
          <ImgWrapper>
            <StyledImg src={img_4}/>
          </ImgWrapper>
          <ImgWrapper>
            <StyledImg src={img_5}/>
          </ImgWrapper>
          <ImgWrapper>
            <StyledImg src={img_6}/>
          </ImgWrapper>
        </FlexWrapper>
      </Container>
    </StyledExplorations>
  )
}

export default Explorations;

const StyledExplorations = styled.section`
  padding-top: 240px;
`

const ImgWrapper = styled.div`
  max-width: 360px;
  width: 100%;
`

const StyledImg = styled.img`
  width: 100%;
  height: 408px;
  object-fit: cover;
  border-radius: 4px;
  margin-top: 24px;
`