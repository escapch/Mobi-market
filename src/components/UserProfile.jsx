import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import userImg from '../assets/icons/userimg.svg';
import BackLink from '../components/backLink';
import { selectUser, setUser } from '../redux/slice/userSlice';
import { openModal } from '../redux/slice/modal.slice';

const UserProfile = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);

  const updateUrl = 'https://neobook.online/mobi-market/users/profile/update/';
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
    },
    onSubmit: async () => {
      try {
        const response = await axios.put(updateUrl, {
          first_name: userData.firstName,
          last_name: values.lastName,
          username: userData.userName,
          birth_date: values.date,
          email: userData.email,
        });

        if (response.status !== 200) {
          throw new Error('Updating failed');
        }
        const data = response.data;
        dispatch(setUser({ userName: data.first_name, lastName: data.last_name, date: data.date }));
        resetForm();
        console.log('Updating successful');
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
        <form onSubmit={handleSubmit}>
          <div className="user__img">
            <img src={userImg} alt="user image" />
            <div className="choose__photo">Выбрать фотографию</div>
          </div>
          <div className="first__block">
            <input
              type="text"
              placeholder="Имя"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={userData.firstName}
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
              <div className="add__phoneBtn" onClick={() => dispatch(openModal(true))}>
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
      </div>
    </div>
  );
};

export default UserProfile;
