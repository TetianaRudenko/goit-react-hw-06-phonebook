import PropTypes from "prop-types";
import  { ContactInfo, Button } from "./ContactItem.styled";

const ContactItem = ({ contact: { id, name, number }, onDeleteContact }) => {
  return (
    <>
      <ContactInfo> {name} </ContactInfo>
      <ContactInfo> {number} </ContactInfo>
      <Button
        type='button'
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </Button>
    </>
  )

}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}

export { ContactItem };