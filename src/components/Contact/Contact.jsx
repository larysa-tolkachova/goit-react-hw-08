import css from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

//===================================================================
export default function Contact({ contactPerson: { name, number, id } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <ul className={css.ul}>
        <li>
          <FaUser /> {name}
        </li>
        <li>
          <FaPhone /> {number}
        </li>
      </ul>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
