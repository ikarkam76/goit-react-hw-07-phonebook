import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import FilterContacts from 'components/FilterContacts';
import { AppContainer, FirstTitle, SecondTitle } from 'components/App.styled';


export const App = () => {
  return (
    <AppContainer>
      <FirstTitle>Phonebook</FirstTitle>
      <ContactForm />
      <SecondTitle>Contacts</SecondTitle>
      <FilterContacts />
      <ContactList />
    </AppContainer>
  );
};
