import { nanoid } from "nanoid";
import {  Wrap, Label, Input } from "./ContactFilter.styled";

import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../redux/selectors";
import { changeFilter } from "../redux/filterSlice";

const ContactFilter = () => {
  const nameInputValue = nanoid();

  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChangeFilter = e => {
    dispatch(changeFilter(e.target.value));
  }

  return (
    <Wrap>
      <Label  htmlFor={nameInputValue}>
        Find contacts by name
      </Label>
      <Input
        id={nameInputValue}
        type="text"
        value={filter}
        onChange={handleChangeFilter}
      />
    </Wrap>
  )
}

export { ContactFilter };