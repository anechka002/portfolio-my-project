import React from 'react';
import proj1 from '../../../assets/images/proj-1.jpeg';
import proj2 from '../../../assets/images/proj-2.jpeg';
import proj3 from '../../../assets/images/proj-3.jpeg';
import proj4 from '../../../assets/images/proj-4.jpeg';
import styled from 'styled-components';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import Work from './work/Work';

function Works() {
  return (
    <StyledWorks>
      <Container>
        <FlexWrapper wrap='wrap' justify='space-between' gap='16px'>
          <Work src={proj1}/>
          <Work src={proj2}/>
          <Work src={proj3}/>
          <Work src={proj4}/>
        </FlexWrapper>
      </Container>
    </StyledWorks>
  )
}

export default Works;

const StyledWorks = styled.section``
