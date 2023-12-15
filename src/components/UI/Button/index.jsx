import style from './Button.module.scss'
const Button = () => {
  return (
    <>
      <button className={style.button} type="submit">Войти</button>
    </>
  );
};

export default Button;
