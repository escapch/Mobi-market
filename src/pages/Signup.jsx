import AuthBg from '../components/AauthBg';
import LoginScrean from '../components/LoginScrean';
import PasswordRecovery from '../components/PasswordRecovery';

const Signup = () => {
  const [view, setView] = useState('checkUser');

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
          <PasswordRecovery />
        )}
      </div>
    </div>
  );
};

export default Signup;
