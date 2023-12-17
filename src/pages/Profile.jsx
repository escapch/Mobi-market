import FavoritLink from '../components/FavoritLink';
import LogoutLink from '../components/LogoutLink';
import MyProductLink from '../components/MyProductLink';
import UserProfile from '../components/UserInfo';
import BackLink from '../components/backLink';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/slice/userSlice';
import userImg from '../assets/icons/userimg.svg';
import { useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router';
import axios from 'axios';

const Profile = () => {
  const [name, setName] = useState('');
  const [navigate, setNavigate] = useState(false);
  const user = useSelector(selectUser);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://neobook.online/mobi-market/users/me/');
        console.log(data);
        setName(data.username);
      } catch (e) {
        setNavigate(true);
      }
    })();
  }, []);

  const logout = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');

      if (refreshToken) {
        await axios.post('https://neobook.online/mobi-market/users/logout/', {
          refresh_token: refreshToken,
        });
        localStorage.clear();
        setNavigate(true);
      } else {
        console.error('Token not found.');
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (navigate) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="profile__content">
      <div className="profile__block">
        <div className="block__nav">
          <div className="top">
            <UserProfile />
            <h3>Hi {name}</h3>
          </div>
          <ul className="links">
            <li>
              <FavoritLink />
            </li>
            <li>
              <MyProductLink />
            </li>
            <li onClick={logout}>
              <LogoutLink />
            </li>
          </ul>
        </div>
      </div>
      <div className="profile__block2">
        <div className="block__main">
          <div className="profile__settings">
            <div className="settings__top">
              <div className="top__back">
                <BackLink />
              </div>
              <div className="top__title">
                <p>Профиль</p>
              </div>
            </div>
          </div>
          <div className="user__data">
            <div className="user__img">
              <img src={userImg} alt="user image" />
              <div className="choose__photo">Выбрать фотографию</div>
            </div>
            <form>
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
