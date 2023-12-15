import { useFormik } from 'formik';
import lock from '../assets/icons/CreatePass.svg';
import { ToastContainer, toast } from 'react-toastify';
import { loginSchema, passwordSchema } from '../schemas';

const PasswordRecovery = ({ value, registerUser }) => {
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
    console.log(values);
    notify();
  };

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        password: '',
        confirm_password: '',
      },
      validationSchema: passwordSchema,
      onSubmit,
    });

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
            e.preventDefault(); // Prevent default form submission behavior
            handleSubmit(e);
          }}
        >
          {/* {errors.email && touched.email && <p className="error">{errors.email}</p>} */}
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
              Пароль
            </label>
          </div>
          <button className="createPass__btn" type="submit" onClick={registerUser}>
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
