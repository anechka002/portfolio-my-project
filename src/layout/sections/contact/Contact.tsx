import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import {S} from './Contact_Styles';

const Contact: React.FC = () => {
  return (
    <S.Contact>
      <Container>
        <FlexWrapper direction='column' justify='center' align='center'>
          <SectionTitle>Contact Me</SectionTitle>
          <S.Text>If you are looking to hire a product designer, I’m currently available for freelance work</S.Text>
          <Button>hi@virajaher.com</Button>
        </FlexWrapper>
      </Container>
    </S.Contact>
  )
}

export default Contact;