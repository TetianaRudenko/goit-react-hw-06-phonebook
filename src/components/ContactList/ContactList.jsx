import { List, Item } from "./ContactList.styled";
import { ContactItem } from "../ContactItem/ContactItem";

import { useState, useEffect } from 'react';
import { useSelector,  useDispatch} from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";
import { deleteContact } from "../../redux/contactsSlice";

const ContactList = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const [visibleContacts, setVisibleContacts] = useState(contacts);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  }

  useEffect(() => {
    setVisibleContacts(
      contacts.filter(contact =>
        contact.name.toUpperCase().includes(filter.toUpperCase())
      )
    );
  }, [contacts, filter]);

  return (
    <>
      {visibleContacts && (
        <List>
          {visibleContacts.map(contact => (
            <Item key={contact.id}>
        
              <ContactItem
                name={contact.name}
                number={contact.number}
                id={contact.id}
                onDeleteContact={handleDeleteContact}
              />

            </Item>
          ))}
        </List>
      )}
    </>
  );
}




export { ContactList }