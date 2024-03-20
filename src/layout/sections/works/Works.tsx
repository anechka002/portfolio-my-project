import React from 'react';
import proj1 from '../../../assets/images/proj-1.jpeg';
import proj2 from '../../../assets/images/proj-2.jpeg';
import proj3 from '../../../assets/images/proj-3.jpeg';
import proj4 from '../../../assets/images/proj-4.jpeg';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import Work from './work/Work';
import {S} from './Works_Styles';

const projItemsData = [
  {
    src: proj1
  },
  {
    src: proj2
  },
  {
    src: proj3
  },
  {
    src: proj4
  },
]

const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
        <FlexWrapper wrap='wrap' justify='space-between' gap='16px'>

          {projItemsData.map((p, index) => {
            return <Work key={index} src={p.src}/>
          })}

        </FlexWrapper>
      </Container>
    </S.Works>
  )
}

export default Works;