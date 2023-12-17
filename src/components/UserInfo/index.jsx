import userImg from '../../assets/icons/userimg.svg';
import style from './UserInfo.module.scss';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/slice/userSlice';

const UserInfo = () => {
  // const user = useSelector(selectUser);
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className={style.root}>
      <img src={userImg} alt="" />
      <div className={style.user__info}>
        <p className={style.name}>{user.userName}</p>
        <p className={style.email}>{user.email}</p>
      </div>
    </div>
  );
};

export default UserInfo;
