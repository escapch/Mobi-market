import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import AuthBg from '../components/AauthBg';
import { loginSchema } from '../schemas';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slice/userSlice';

import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const url = 'https://neobook.online/mobi-market/users/login/';

  const notify = (errorMessage) => {
    toast.error(errorMessage, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    // validationSchema: loginSchema,
    onSubmit: async () => {
      try {
        const response = await axios.post(url, {
          username: values.username,
          password: values.password,
        });

        if (response.status !== 200) {
          throw new Error('Login failed');
        }
        console.log('пока нормально');
        const data = await response.data;
        axios.defaults.headers.common['Authorization'] = `Bearer ${data['token']}`;
        console.log(data);
        localStorage.setItem(
          'user',
          JSON.stringify({ userName: values.username, email: data.email }),
        );
        dispatch(setUser({ userName: values.username, email: data.email }));

        const token = data.access;
        console.log(token);

        localStorage.setItem('token', token);
        resetForm();
        navigate('/profile');
      } catch (error) {
        console.error('Error during login:', error.message);
        notify('Неверный логин или пароль');
      }
    },
  });

  return (
    <div className="root">
      <div className="login__block">
        <AuthBg />
      </div>
      <div className="login__block">
        <div className="login__form">
          <form onSubmit={handleSubmit}>
            <div className="floatLabel">
              <input
                id="username"
                name="username"
                type="text"
                onChange={handleChange}
                value={values.username}
                className={errors.username && touched.username ? 'error-input' : ''}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label htmlFor="username" className={values.username ? 'active' : ''}>
                Имя пользователя
              </label>
              {/* {errors.username && touched.username ? <p>{errors.username}</p> : ''} */}
            </div>
            <div className="floatLabel">
              <input
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                value={values.password}
                className={errors.password && touched.password ? 'error-input' : ''}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label htmlFor="password" className={values.password ? 'active' : ''}>
                Пароль
              </label>
              {errors.password && touched.password ? <p>{errors.password}</p> : ''}
            </div>

            <Link className="forgetPass" to="#">
              Забыли пароль
            </Link>
            <button className="login__btn" type="submit">
              Войти
            </button>
          </form>
          <Link to="/signup" className="registration">
            Зарегистрироваться
          </Link>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default LoginPage;
