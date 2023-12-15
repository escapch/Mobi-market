import FavoritLink from '../components/FavoritLink';
import LogoutLink from '../components/LogoutLink';
import MyProductLink from '../components/MyProductLink';
import UserProfile from '../components/UserInfo';
import BackLink from '../components/backLink';

const Profile = () => {
  return (
    <div className="profile__content">
      <div className="profile__block">
        <div className="block__nav">
          <div className="top">
            <UserProfile />
          </div>
          <ul className="links">
            <li>
              <FavoritLink />
            </li>
            <li>
              <MyProductLink />
            </li>
            <li>
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
