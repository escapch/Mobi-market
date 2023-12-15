import { useFormik } from 'formik';
import backIcon from '../assets/icons/backIcon.svg';
import { Link } from 'react-router-dom';
import { signupSchema } from '../schemas';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const LoginScrean = ({ props, value }) => {
  const notify = () => {
    toast.error('Неверный логин или почта', {
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

  const onSubmit = async (values) => {
    value(values);
    props('createPass');
    notify();
  };
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
      },
      validationSchema: signupSchema,
      onSubmit,
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
    </div>
  );
};

export default LoginScrean;
