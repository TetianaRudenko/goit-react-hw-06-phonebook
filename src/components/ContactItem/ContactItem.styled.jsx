import styled from "styled-components";

const ContactInfo = styled.span`
  font-size: ${props => props.theme.spacing(6)};
  line-height: 1.3;
  color: ${props => props.theme.colors.secondaryColor};
`

const Button = styled.button`
  margin-left: ${props => props.theme.spacing(2)};
  padding: ${props => props.theme.spacing(2)};
  border: ${props => `1px solid ${props.theme.colors.primaryAlfaColor}`}; 
  border-radius: ${props => props.theme.spacing(2)} ;
  background: linear-gradient(to right, rgb(247, 157, 0), rgb(100, 243, 140));
  color: ${props => props.theme.colors.secondaryColor};

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.secondaryColor};
    color: ${props => props.theme.colors.primaryAlfaColor};
    box-shadow: 10px 10px 28px -12px rgba(8,63,0,0.75);
  }
`

export { ContactInfo, Button };