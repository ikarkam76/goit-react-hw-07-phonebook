import React from 'react';
import { Formik, Field, Form, ErrorMessage, } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { add, getContacts } from 'redux/Slices/ContactsSlice';

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
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleSubmit = (values, { resetForm }) => {
    if (contacts.find(contact => contact.name === values.name)) {
      return alert('This name is already in contacts!');
      }
        (values.id = nanoid());
        dispatch(add(values));
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
            <Field validate={validate} name="name" type="text" />
            <ErrorMessage component="div" name="name" />
            <FormLabel htmlFor="tel">Number</FormLabel>
            <Field name="number" type="tel" />
            <ErrorMessage component="div" name="number" /><br/>
            <FormButton type="submit">Add contact</FormButton>
          </Form>
        </Formik>
      </FormContainer>
    );
};

export default ContactForm;

