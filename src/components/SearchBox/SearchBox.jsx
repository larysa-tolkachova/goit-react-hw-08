import css from './SearchBox.module.css';
import { useDispatch } from 'react-redux';

import { setStatusFilter } from '../../redux/filters/slice';

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setStatusFilter(event.target.value));
  };

  return (
    <div className={css.input}>
      <p>
        <b>Find contacts by name</b>
      </p>
      <input type="text" onChange={handleChange} />
    </div>
  );
}
