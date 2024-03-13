import React from 'react'
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { theme } from '../../../styles/Theme';

function Contact() {
  return (
    <StyledContact>
      <FlexWrapper direction='column' justify='center' align='center'>
        <SectionTitle>Contact Me</SectionTitle>
        <StyledText>If you are looking to hire a product designer, I’m currently available for freelance work</StyledText>
        <Button>hi@virajaher.com</Button>
      </FlexWrapper>
    </StyledContact>
  )
}

export default Contact;

const StyledContact = styled.section`
  padding: 240px 0 125px;
`

const StyledText = styled.p`
  max-width: 520px;
  font-size: 26px;
  font-weight: 600;
  line-height: 38px;
  text-align: center;
  color: ${theme.colors.iconColor};
  margin: 24px 0 48px;
`