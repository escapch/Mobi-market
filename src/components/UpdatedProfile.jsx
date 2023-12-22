import { selectUser, setUser } from '../redux/slice/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import userImg from '../assets/icons/userimg.svg';
const UpdatedProfile = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  console.log(userData);
  return (
    <div className="new-profile">
      <div className="user__img">
        <img src={userImg} alt="user image" />
        <div className="choose__photo">Выбрать фотографию</div>
      </div>
      <div className="first__block">
        <ul>
          <li>{userData.firstName}</li>
          <li>{userData.lastName}</li>
          <li>{userData.userName}</li>
          <li>{userData.date}</li>
        </ul>
      </div>
      <div className="second__block">
        <div className="add__phone">
          <div className="add__phoneBtn" onClick={() => dispatch(openModal(true))}>
            Добавить номер
          </div>
          <p className="number">{userData.tel}</p>
        </div>
        <p>{userData.email}</p>
      </div>
    </div>
  );
};

export default UpdatedProfile;
