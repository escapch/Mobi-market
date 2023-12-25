import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import userImg from '../assets/icons/userimg.svg';
import BackLink from '../components/backLink';
import { selectUser, setUser } from '../redux/slice/userSlice';
import { openModal } from '../redux/slice/modal.slice';
import UpdatedProfile from './UpdatedProfile';

const UserProfile = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const updateUrl = 'https://neobook.online/mobi-market/users/profile/update/';
  const userCheckUrl = 'https://neobook.online/mobi-market/users/me/';
  const completedProfile = useSelector((state) => state.modalReducer.completedProfile);
  const profileUpdated = () => {
    dispatch(openModal({ modalName: 'completedProfile', value: true }));
  };

  const [fielled, setFilled] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('https://neobook.online/mobi-market/users/me/');

        const data = response.data;
        console.log(data);
        Object.values(data).every((value) => value !== undefined && value !== '')
          ? setFilled(true)
          : '';

        dispatch(
          setUser({
            userName: data.username,
            email: data.email,
            tel: data.phone,
            date: data.birth_date,
            firstName: data.first_name,
            lastName: data.last_name,
          }),
        );
      } catch (e) {
        console.log('Error' + e);
        setNavigate(true);
      }
    })();
  }, []);
  console.log(fielled);

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
    isValid,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      date: '',
      tel: '',
      email: '',
      photo: null,
    },
    onSubmit: async () => {
      try {
        const response = await axios.put(updateUrl, {
          first_name: values.firstName,
          last_name: values.lastName,
          username: userData.userName,
          birth_date: values.date,
          email: userData.email,
          photo: values.photo,
        });

        if (response.status !== 200) {
          throw new Error('Updating failed');
        }
        dispatch(
          setUser({
            firstName: values.firstName,
            lastName: values.lastName,
            date: values.date,
            // photo: values.photo,
          }),
        );
        resetForm();
        console.log('Updating successful');
        profileUpdated();
      } catch (error) {
        console.error('Error during updating:', error.message);
      }
    },
  });
  return (
    <div className="user__profile">
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
        {!completedProfile ? (
          <form onSubmit={handleSubmit}>
            <div className="user__img">
              <img src={userImg} alt="user image" />
              <label htmlFor="photoInput">Выбрать фотографию</label>
              {/* <input
                id="photoInput"
                type="file"
                onChange={(e) => handleChange(e)}
                onBlur={handleBlur}
                accept="image/*"
              /> */}
            </div>
            <div className="first__block">
              <input
                type="text"
                placeholder="Имя"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              <input
                type="text"
                placeholder="Фамилия"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
              <input
                type="text"
                placeholder="User name"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={userData.userName}
              />
              <input
                type="date"
                name="date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date || ''}
                placeholder="гггг-мм-дд"
              />
            </div>
            <div className="second__block">
              <div className="add__phone">
                <div
                  className="add__phoneBtn"
                  onClick={() => dispatch(openModal({ modalName: 'modalIsOpen', value: true }))}
                >
                  Добавить номер
                </div>
                <p className="number">{userData.tel ? userData.tel : '0(000) 000 000'}</p>
              </div>
              <input
                type="email"
                placeholder="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={userData.email}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '45px' }}>
              <button
                type="submit"
                className={`done__btn ${
                  !values.firstName || !values.lastName || !values.date || !userData.tel
                    ? 'login__disabled'
                    : 'login__activated'
                }`}
                disabled={!userData.tel || !values.firstName || !values.lastName || !values.date}
              >
                Закончить регистрацию
              </button>
            </div>
          </form>
        ) : (
          <UpdatedProfile />
        )}
      </div>
    </div>
  );
};

export default UserProfile;
