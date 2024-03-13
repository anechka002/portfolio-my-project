import React from 'react';
import styled from 'styled-components';

export type WorksPropsType = {
  src: string
}

function Work(props: WorksPropsType) {
  return (
    <StyledWork>
      <ImgWrapper>
        <Image src={props.src}/>
        <Title>InVersion</Title>
      </ImgWrapper>
    </StyledWork>
  )
}

export default Work;

const StyledWork = styled.div`
  max-width: 555px;
  width: 100%;
`

const Title = styled.p`
  opacity: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  font-size: 40px;
  font-weight: 700;

`
const ImgWrapper = styled.div`
  position: relative;

  &:hover {
    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 4px;
      margin-top: 24px;
    }
    ${Title} {
      opacity: 1;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 888px;
  object-fit: cover;
  border-radius: 4px;
  margin-top: 24px;
`
