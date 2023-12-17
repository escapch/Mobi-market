import { useFormik } from 'formik';
import backIcon from '../assets/icons/backIcon.svg';
import { Link, Navigate } from 'react-router-dom';
import { signupSchema } from '../schemas';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slice/userSlice';
import axios from 'axios';

const LoginScrean = ({ props, value }) => {
  const [navigate, setNavigate] = useState(false);
  const notify = (text) => {
    toast.error(text, {
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
  const checkUserUrl = 'https://neobook.online/mobi-market/users/check-user/';

  const dispatch = useDispatch();

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
      },
      validationSchema: signupSchema,
      onSubmit: async (values) => {
        // value(values);
        // props('createPass');
        try {
          const response = await axios.post(checkUserUrl, {
            email: values.email,
            username: values.name,
          });

          if (response.status === 200) {
            const data = await response.data;
            // axios.defaults.headers.common['Authorization'] = `Bearer ${data['token']}`;
            if (data.username && data.email) {
              notify('Данный пользователь уже зарегистрирован');
            } else {
              console.log();
              props('createPass');
              console.log(values.name);
              dispatch(setUser({ userName: values.name, email: values.email }));
            }
          } else {
            console.log(response);
          }
        } catch (error) {
          notify(error.message);
          console.error('Error during registration:', JSON.stringify(error.message));
        }
      },
    });
  console.log(errors);

  return (
    <div className="signup__form">
      <div className="top">
        <Link to="/login" className="goBack">
          <img src={backIcon} alt="" />
          <p>Назад</p>
        </Link>
        <p>Регистрация</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="floatLabel">
          <input
            id="name"
            name="name"
            type="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            className={errors.name && touched.name ? 'error-input' : ''}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label htmlFor="password" className={values.name ? 'active' : ''}>
            Имя пользователя
          </label>
        </div>
        <div className="floatLabel">
          <input
            id="email"
            name="email"
            type="text"
            onChange={handleChange}
            value={values.email}
            className={errors.email && touched.email ? 'error-input' : ''}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label htmlFor="email" className={values.email ? 'active' : ''}>
            Почта
          </label>
        </div>
        {/* {errors.email && touched.email && <p className="error">{errors.email}</p>} */}
        {errors.email && touched.email && (
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
        )}
        <button className="signup__btn" type="submit">
          Далее
        </button>
      </form>
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

export default LoginScrean;
