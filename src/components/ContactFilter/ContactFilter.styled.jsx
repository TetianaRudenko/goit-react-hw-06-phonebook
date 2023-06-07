import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};
`

const Label = styled.label`
  font-size: ${props => props.theme.spacing(6)};
  line-height: 1.71;
  color: ${props => props.theme.colors.secondaryColor};  

`

const Input = styled.input`
  width: 280px;
  height: ${props => props.theme.spacing(10)};
  padding: ${props => props.theme.spacing(2)};
  border-radius: ${props => props.theme.spacing(2)} ;
  border:${props => `1px solid ${props.theme.colors.secondaryColor}`}; 

  color: ${props => props.theme.colors.secondaryColor};  
  font-size:${props => props.theme.spacing(4)};
  outline: 0;

  &:focus {
    border: ${props => `2px solid ${props.theme.colors.secondaryColor}`}; 
    box-shadow: 24px 17px 39px -9px rgba(0,0,0,0.75);
  }
`

export { Wrap, Label, Input}