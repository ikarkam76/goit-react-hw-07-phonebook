import React from 'react';
import { Formik, Field, Form, ErrorMessage, } from 'formik';
import * as yup from 'yup';
import { useCreateContactMutation } from 'redux/Slices/ContactsSlice';
import { FormButton, FormContainer, FormLabel } from './ContactForm.styled';

const validationSchema = yup.object().shape({
  name: yup.string().required('Please enter name!'),
  number: yup.number().required('Please enter number!'),
});

const validate = value => {
  let errorMessage;
  if (!/^[a-zA-Z]/.test(value)) {
    errorMessage = 'The name must start with letters!';
  }
  return errorMessage;
};

const initialValues = {
  name: '',
  number: '',
  id: '',
};

const ContactForm = () => {
  const [createContact] = useCreateContactMutation();
  const handleSubmit = (event, { resetForm }) => {
    // if (contacts.find(contact => contact.name === values.name)) {
    //   return alert('This name is already in contacts!');
    //   }
        createContact(event);
        resetForm();
    }
    
    return (
      <FormContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form autoComplete="off">
            <FormLabel htmlFor="name">Name</FormLabel>
            <Field
              validate={validate}
              name="name"
              type="text"
              placeholder="Name Firstname"
            />
            <ErrorMessage component="div" name="name" />
            <FormLabel htmlFor="tel">Phone number</FormLabel>
            <Field name="number" type="tel" placeholder="012-345-6789" />
            <ErrorMessage component="div" name="number" />
            <br />
            <FormButton type="submit">Add contact</FormButton>
          </Form>
        </Formik>
      </FormContainer>
    );
};

export default ContactForm;

