import { useFormik } from 'formik';
import lock from '../assets/icons/CreatePass.svg';
import { ToastContainer, toast } from 'react-toastify';
import { passwordSchema } from '../schemas';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/slice/userSlice';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

const PasswordRecovery = ({ registerUser }) => {
  const [navigate, setNavigate] = useState(false);
  const user = useSelector(selectUser);
  console.log(user);
  const url = 'https://neobook.online/mobi-market/users/register/';

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

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        password: '',
        confirm_password: '',
      },
      validationSchema: passwordSchema,
      onSubmit: async () => {
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: user.email,
              username: user.userName,
              password: values.password,
              confirm_password: values.confirm_password,
            }),
          });

          if (response.ok) {
            const data = await response.json();
            console.log(data);
            setNavigate(true);
            console.log('User registered successfully');
          } else {
            const errorData = await response.json(); // Parse the response body as JSON
            throw new Error(`Registration failed: ${JSON.stringify(errorData)}`);
          }
        } catch (error) {
          notify(error.message);
          console.error('Error during registration:', JSON.stringify(error.message));
        }
      },
    });
  if (navigate) {
    return <Navigate to={'/login'} />;
  }
  notify(errors);
  return (
    <div className="createPass__content">
      <div className="title">
        <img src={lock} alt="" />
        <h3>Придумайте пароль</h3>
        <p className="createPass__gr-text">
          Минимальная длина — 8символов. Для надежности пароль должен содержать буквы и цифры.
        </p>
      </div>
      <div className="form__block">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          {errors.password && touched.password && (
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
            {errors.password && touched.password && <p>{errors.message}</p>}
          </div>
          <div className="floatLabel">
            <input
              id="confirm_password"
              name="confirm_password"
              type="password"
              onChange={handleChange}
              value={values.confirm_password}
              className={errors.confirm_password && touched.confirm_password ? 'error-input' : ''}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label htmlFor="confirm_password" className={values.confirm_password ? 'active' : ''}>
              Подтвердите пароль
            </label>
          </div>
          {errors.confirm_password && touched.confirm_password && (
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
          <button className="createPass__btn" type="submit">
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
    </div>
  );
};

export default PasswordRecovery;
