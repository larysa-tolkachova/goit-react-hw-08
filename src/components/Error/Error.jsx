import css from './Error.module.css';

export default function ErrorMessage() {
  return (
    <p className={css.txt}>
      <b>Whoops!</b>
    </p>
  );
}
