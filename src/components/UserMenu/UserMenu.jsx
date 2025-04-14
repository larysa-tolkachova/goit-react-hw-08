import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors.js';
import { logout } from '../../redux/auth/operations.js';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.container}>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogout} className={css.logout}>
        Logout
      </button>
    </div>
  );
}
