import React from 'react';
import { Container } from '../../../components/Container';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import image_01 from '../../../assets/images/01.jpeg';
import image_02 from '../../../assets/images/02.jpeg';
import image_03 from '../../../assets/images/03.jpeg';
import {S} from './Project_Styles';

const imageItems = [
  {
    src: image_01
  },
  {
    src: image_02
  },
  {
    src: image_03
  },
]

const Projects: React.FC = () => {
  return (
    <S.Projects>
      <Container>
        <SectionTitle>Personal Projects</SectionTitle>
        <FlexWrapper wrap='wrap' justify='space-between' gap='16px'>

          {imageItems.map((i, index) => {
            return (
              <S.ImgWrapper key={index}>
                <S.StyledImg src={i.src}/>
              </S.ImgWrapper>
            )
          })}

        </FlexWrapper>
      </Container>
    </S.Projects>
  )
}

export default Projects;