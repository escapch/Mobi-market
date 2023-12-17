import { Link } from 'react-router-dom';
import cart from '../assets/icons/shopping-cart.svg';
import UserInfo from './UserInfo';

const Header = () => {
  return (
    <div className="header__content">
      <div className="header__logo">
        <img src={cart} alt="cart" />
        <p>MOBI MARKET</p>
      </div>
      <div className="header__right">
        <Link to={'/myProduct'}>
          <button className="myProduct__btn">Подать объявление</button>
        </Link>
        <UserInfo />
      </div>
    </div>
  );
};

export default Header;
