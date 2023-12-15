import { Outlet } from 'react-router';
import loginBg from '../../assets/img/iloginBg.png';
import style from './AuthBg.module.scss';
const AuthBg = () => {
  return (
    <>
      <div className={style.login__bg}>
        <img src={loginBg} alt="login bg" />
      </div>
      <Outlet />
    </>
  );
};

export default AuthBg;
