import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

export default function ContactForm() {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const StyleSchema = Yup.object().shape({
    name: Yup.string().min(3, 'To Short!').max(50, 'To long!').required('This field is required'),
    number: Yup.string().min(3, 'To Short!').max(50, 'To long!').required('This field is required'),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      ...values,
      id: nanoid(),
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };
  //=========================================================

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={StyleSchema}>
      <Form className={css.container}>
        <div className={css.input}>
          <label htmlFor={nameId}>
            <b>Name</b>
          </label>
          <Field type="text" name="name" id={nameId}></Field>
          <ErrorMessage name="name" component="span" className={css.error}></ErrorMessage>
        </div>
        <div className={css.input}>
          <label htmlFor={numberId}>
            <b>Number</b>
          </label>
          <Field type="text" name="number" id={numberId} placeholder="123-45-67"></Field>
          <ErrorMessage name="number" component="span" className={css.error}></ErrorMessage>
        </div>
        <button type="submit" className={css.btn}>
          Add contakt
        </button>
      </Form>
    </Formik>
  );
}
