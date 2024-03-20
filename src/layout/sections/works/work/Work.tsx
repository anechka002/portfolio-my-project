import React from 'react';
import {S} from '../Works_Styles';

export type WorksPropsType = {
  src: string
}

const Work: React.FC<WorksPropsType> = (props: WorksPropsType) => {
  return (
    <S.Work>
        <S.Image src={props.src}/>
        <S.Title>InVersion</S.Title>
    </S.Work>
  )
}

export default Work;