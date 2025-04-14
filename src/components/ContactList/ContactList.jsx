import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/filters/selectors';

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.container}>
      {contacts.map(person => (
        <li key={person.id}>
          <Contact contactPerson={person} />
        </li>
      ))}
    </ul>
  );
}
