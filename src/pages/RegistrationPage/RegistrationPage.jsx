import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';
export default function RegistrationPage() {
  return (
    <div>
      <h2 className={css.h2}>Register your account</h2>
      <RegistrationForm />
    </div>
  );
}
