import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import {  Wrap, Label, Input } from "./ContactFilter.styled";

const ContactFilter = ({ value, onChange }) => {
  const nameInputValue = nanoid();

  return (
    <Wrap>
      <Label  htmlFor={nameInputValue}>
        Find contacts by name
      </Label>
      <Input
        id={nameInputValue}
        type="text"
        value={value}
        onChange={onChange}
      />
    </Wrap>
  )
}

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export { ContactFilter };