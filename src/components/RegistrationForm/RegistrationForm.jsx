import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './RegistrationForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export default function ContactForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const StyleSchema = Yup.object().shape({
    name: Yup.string().min(3, 'To Short!').max(50, 'To long!').required('This field is required'),
    email: Yup.string().email('Invalid email format').required('This field is required'),
    password: Yup.string().min(3, 'To Short!').max(50, 'To long!').required('This field is required'),
  });

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={StyleSchema}>
      <Form className={css.container}>
        <div className={css.input}>
          <label>
            <b>Name</b>
          </label>
          <Field type="text" name="name" className={css.field}></Field>
          <ErrorMessage name="name" component="span" className={css.error}></ErrorMessage>
        </div>

        <div className={css.input}>
          <label>
            <b>Email</b>
          </label>
          <Field type="email" name="email" className={css.field}></Field>
          <ErrorMessage name="email" component="span" className={css.error}></ErrorMessage>
        </div>

        <div className={css.input}>
          <label>
            <b>Password</b>
          </label>
          <Field type="password" name="password" className={css.field}></Field>
          <ErrorMessage name="password" component="span" className={css.error}></ErrorMessage>
        </div>

        <button type="submit" className={css.btn}>
          Register
        </button>
      </Form>
    </Formik>
  );
}
