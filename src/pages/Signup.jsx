import AuthBg from '../components/AauthBg';
import LoginScrean from '../components/LoginScrean';
import PasswordRecovery from '../components/PasswordRecovery';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';

const Signup = () => {
  const [view, setView] = useState('checkUser');
  const [signupValues, setSignupValues] = useState({
    email: '',
    name: '',
    password: '',
    confirm_password: '',
  });

  const url = 'https://neobook.online/mobi-market/users/register/';
  const url2 = 'https://6267e76691c67b2f.mokky.dev/register';

  const getValues = (e) => {
    setSignupValues((prevState) => ({ ...prevState, name: e.name, email: e.email }));
  };
  const getPassword = (e) => {
    setSignupValues((prevState) => ({
      ...prevState,
      password: e.password,
      confirm_password: e.confirm_password,
    }));
  };
  const renderNextPage = (e) => {
    setView(e);
  };
  useEffect(() => {
    if (signupValues.password && signupValues.confirm_password) {
      registerUser();
    }
  }, [signupValues.password, signupValues.confirm_password]);

  const registerUser = async () => {
    if (!signupValues.password || !signupValues.confirm_password) {
      console.error('Password and confirm_password are required');
      return;
    }
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: signupValues.email,
          username: signupValues.name,
          password: signupValues.password,
          confirm_password: signupValues.confirm_password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Handle successful registration
        console.log('User registered successfully');
      } else {
        const errorData = await response.json(); // Parse the response body as JSON
        throw new Error(`Registration failed: ${JSON.stringify(errorData)}`);
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
  };

  return (
    <div className="signup__root">
      <div className="signup__block">
        <AuthBg />
      </div>
      <div className="signup__block2">
        {view === 'checkUser' ? (
          <LoginScrean
            props={(e) => {
              renderNextPage(e);
            }}
            value={(e) => {
              getValues(e);
            }}
          />
        ) : (
          <PasswordRecovery
            value={(e) => {
              getPassword(e);
            }}
            registerUser={registerUser}
          />
        )}
      </div>
    </div>
  );
};

export default Signup;
