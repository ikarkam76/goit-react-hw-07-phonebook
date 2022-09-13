import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import FilterContacts from 'components/FilterContacts';
import AppContainer from 'components/App.styled';

export const App = () => {
  return (
    <AppContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <FilterContacts />
      <ContactList />
    </AppContainer>
  );
};
