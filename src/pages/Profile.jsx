import FavoritLink from '../components/FavoritLink';
import LogoutLink from '../components/LogoutLink';
import MyProductLink from '../components/MyProductLink';
import UserProfile from '../components/UserProfile';

import { useState } from 'react';
import { Navigate } from 'react-router';
import axios from 'axios';
import { useSelector } from 'react-redux';

import UserInfo from '../components/UserInfo';
import NumberModal from '../components/Modals/NumberModal';
import { selectUser } from '../redux/slice/userSlice';

const Profile = () => {
  const [navigate, setNavigate] = useState(false);

  const modalIsOpen = useSelector((state) => state.modalReducer.modalIsOpen);
  const userData = useSelector(selectUser);

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
      {modalIsOpen && <NumberModal />}
      <div className="profile__block">
        <div className="block__nav">
          <div className="top">
            <UserInfo />
            <h3>Hi{userData.userName}</h3>
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
          <UserProfile navigate={(e) => setNavigate(e)} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
