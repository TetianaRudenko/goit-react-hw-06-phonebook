import styled from "styled-components";
import { Form, Field } from "formik";


const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};
  margin-bottom: ${props => props.theme.spacing(5)};
`

const Label = styled.label`
  //margin-right: ${props => props.theme.spacing(2)};
  font-size: ${props => props.theme.spacing(6)};
  line-height: 1.71;
  color: ${props => props.theme.colors.secondaryColor};
`

const Input = styled(Field)`
  width: 280px;
  height: ${props => props.theme.spacing(10)};
  padding:${props => props.theme.spacing(2)};
  border-radius: ${props => props.theme.spacing(2)};
  border: ${props => `1px solid ${props.theme.colors.secondaryColor}`};

  color: ${props => props.theme.colors.secondaryColor};
  font-size:${props => props.theme.spacing(4)};
  outline: 0;

  &:focus {
    border: ${props => `2px solid ${props.theme.colors.secondaryColor}`};
    box-shadow: 24px 17px 39px -9px rgba(0,0,0,0.75);
  }
`

const ErrorText = styled.p`
  color: ${props => props.theme.colors.errorColor};
  font-size: ${props => props.theme.spacing(4)};
`

const Button = styled.button`
  display: inline;
  width: 280px;
  height: ${props => props.theme.spacing(10)};
  padding: ${props => props.theme.spacing(2)};
  border-radius: ${props => props.theme.spacing(2)};
  background: linear-gradient(to right, rgb(247, 157, 0), rgb(100, 243, 140));
  border: ${props => `1px solid ${props.theme.colors.primaryColor}`};

  color: ${props => props.theme.colors.secondaryColor};

  cursor: pointer;
  font-size: ${props => props.theme.spacing(5)};

  &:hover,
  &:focus {
    border: ${props => `2px solid ${props.theme.colors.secondaryColor}`}; 
    box-shadow: 24px 17px 39px -9px rgba(0,0,0,0.75);
  }
`

export { FormStyled, Label, Input, ErrorText, Button };