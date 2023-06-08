import PropTypes from "prop-types";
import { ContactInfo, Button } from "./ContactItem.styled";


const ContactItem = ( {id, name, number, onDeleteContact} ) =>  (
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



ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}

export { ContactItem };