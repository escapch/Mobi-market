import { Navigate } from 'react-router';
import AuthBg from '../components/AauthBg';
import LoginScrean from '../components/LoginScrean';
import PasswordRecovery from '../components/PasswordRecovery';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Signup = () => {
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
  const [view, setView] = useState('checkUser');
  const [navigate, setNavigate] = useState(false);
  // const [signupValues, setSignupValues] = useState({
  //   email: '',
  //   name: '',
  //   password: '',
  //   confirm_password: '',
  // });


  // const getValues = (e) => {
  //   setSignupValues((prevState) => ({ ...prevState, name: e.name, email: e.email }));
  // };

  // const getPassword = (e) => {
  //   setSignupValues((prevState) => ({
  //     ...prevState,
  //     password: e.password,
  //     confirm_password: e.confirm_password,
  //   }));
  // };

  // useEffect(() => {
  //   if (signupValues.password && signupValues.confirm_password) {
  //     registerUser();
  //   }
  // }, [signupValues.password, signupValues.confirm_password]);

  // const registerUser = async () => {
  //   if (!signupValues.password || !signupValues.confirm_password) {
  //     console.error('Password and confirm_password are required');
  //     return;
  //   }
  //   try {
  //     const response = await fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         email: signupValues.email,
  //         username: signupValues.name,
  //         password: signupValues.password,
  //         confirm_password: signupValues.confirm_password,
  //       }),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data);
  //       setNavigate(true);

  //       console.log('User registered successfully');
  //     } else {
  //       const errorData = await response.json(); // Parse the response body as JSON
  //       throw new Error(`Registration failed: ${JSON.stringify(errorData)}`);
  //     }
  //   } catch (error) {
  //     notify(error.message);
  //     console.error('Error during registration:', JSON.stringify(error.message));
  //   }

  //   console.log(navigate);
  //   if (navigate) {
  //     return <Navigate to={'/login'} />;
  //   }
  // };

  return (
    <div className="signup__root">
      <div className="signup__block">
        <AuthBg />
      </div>
      <div className="signup__block2">
        {view === 'checkUser' ? (
          <LoginScrean
            props={(e) => {
              setView(e);
            }}
          />
        ) : (
          <PasswordRecovery
          // value={(e) => {
          //   getPassword(e);
          // }}
          // registerUser={registerUser}
          />
        )}
      </div>
    </div>
  );
};

export default Signup;
