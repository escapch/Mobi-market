import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNavigate } from '../redux/slice/baseSlice';
import userImg from '../assets/icons/userimg.svg';
import BackLink from '../components/backLink';
import axios from 'axios';
import { selectUser, setUser } from '../redux/slice/userSlice';

const UserProfile = ({ navigate }) => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://neobook.online/mobi-market/users/me/');

        dispatch(
          setUser({
            userName: data.username,
            email: data.email,
          }),
        );
        values.email = data.email;
        values.username = data.username;
      } catch (e) {
        console.log('Error' + e);
        navigate(true);
      }
    })();
  }, [dispatch, navigate]);

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
      brtDay: '',
      phoneNumber: '',
      email: '',
    },
    onSubmit: async () => {},
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
              <button className="choose__photo">Выбрать фотографию</button>
            </div>
          <div className="form__content">
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
              value={values.username}
            />
            <input
              type="text"
              name="brtDay"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.brtDay}
              placeholder="гггг-мм-дд"
            />
            <div className="second__block">
              <div className="add__phone">
                <button>Добавить номер</button>
                <p className="number">0(000) 000 000</p>
                {/* <input
              type="text"
              placeholder="0(000) 000 000"
              name="phoneNumber"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber}
            /> */}
              </div>
              <input
                type="email"
                placeholder="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
