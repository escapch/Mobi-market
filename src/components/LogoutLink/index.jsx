import style from './LogoutLink.module.scss';
import logoutIcon from '../../assets/icons/logoutIcon.svg';

const LogoutLink = () => {
  return (
    <div className={style.root}>
      <div className={style.title}>
        <img src={logoutIcon} alt="favorit icon" />
        <p>Выйти</p>
      </div>
      <div className={style.arrow__btn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M10 7L14 12L10 17"
            stroke="#494949"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default LogoutLink;
