import React from 'react';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import img_1 from '../../../assets/images/explorations/img_1.jpeg';
import img_2 from '../../../assets/images/explorations/img_2.jpeg';
import img_3 from '../../../assets/images/explorations/img_3.jpeg';
import img_4 from '../../../assets/images/explorations/img_4.jpeg';
import img_5 from '../../../assets/images/explorations/img_5.jpeg';
import img_6 from '../../../assets/images/explorations/img_6.jpeg';
import { SectionTitle } from '../../../components/SectionTitle';
import {S} from './Explorations_Styles';
import { Fade } from "react-awesome-reveal";

const imgItemsData = [
  {
    src: img_1
  },
  {
    src: img_2
  },
  {
    src: img_3
  },
  {
    src: img_4
  },
  {
    src: img_5
  },
  {
    src: img_6
  },
]

const Explorations: React.FC = () => {
  return (
    <S.Explorations>
      <Container>
        <SectionTitle>Visual Explorations</SectionTitle>
        <FlexWrapper wrap='wrap' justify='space-between' gap='16px'>
          
          <Fade cascade={true} damping={0.2}>
            {imgItemsData.map((i, index) => {
              return (
                <S.ImgWrapper key={index}>
                  <S.StyledImg src={i.src}/>
                </S.ImgWrapper>
              )
            })}
          </Fade>

        </FlexWrapper>
      </Container>
    </S.Explorations>
  )
}

export default Explorations;