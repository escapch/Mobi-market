import style from './Input.module.scss';
const Input = ({ type, label }) => {
  return (
    <>
      <div className={style.floatLabel}>
        <input type={type} />
        <span className={style.highlight}></span>
        <span className={style.bar}></span>
        <label htmlFor="email">{label}</label>
      </div>
    </>
  );
};

export default Input;
