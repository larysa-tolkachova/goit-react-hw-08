import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './LoginForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

export default function ContactForm() {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const StyleSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('This field is required'),
    password: Yup.string().min(3, 'To Short!').max(50, 'To long!').required('This field is required'),
  });

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };
  //=========================================================
  // validationSchema = { StyleSchema }
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={StyleSchema}>
      <Form className={css.container}>
        <div className={css.input}>
          <label>
            <b>Email</b>
          </label>
          <Field type="email" name="email"></Field>
          <ErrorMessage name="email" component="span" className={css.error}></ErrorMessage>
        </div>

        <div className={css.input}>
          <label>
            <b>Password</b>
          </label>
          <Field type="password" name="password"></Field>
          <ErrorMessage name="password" component="span" className={css.error}></ErrorMessage>
        </div>

        <button type="submit" className={css.btn}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}
