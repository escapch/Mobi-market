import userImg from '../../assets/icons/userimg.svg';
import style from './UserInfo.module.scss';
const UserProfile = () => {
  return (
    <div className={style.root}>
      <img src={userImg} alt="" />
      <div className={style.user__info}>
        <p className={style.name}>Алесястар</p>
        <p className={style.email}>sergeykrash01</p>
      </div>
    </div>
  );
};

export default UserProfile;
