import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "../components/Layout/Layout";

import { Section } from "../components/Section/Section";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";
import { ContactFilter } from "../components/ContactFilter/ContactFilter";


const App = () => (
  <Layout>
    <GlobalStyle />

    <Section title="Phonebook"> 
      <ContactForm/>
    </Section>
    
    <Section>
      <ContactFilter /> 
      <ContactList />
    </Section>
    
  </Layout>
);

export { App };