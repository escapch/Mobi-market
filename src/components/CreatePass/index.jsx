import lock from '../../assets/icons/CreatePass.svg';
import Button from '../UI/Button';

const CreatePass = () => {
  return (
    <div className="content">
      <img src={lock} alt="" />
      <h3>Придумайте пароль</h3>
      <p>Минимальная длина — 8 символов. Для надежности пароль должен содержать буквы и цифры.</p>
      <input type="password" placeholder="Пароль" />
      <input type="password" placeholder="Повторите пароль" />
      <Button />
    </div>
  );
};

export default CreatePass;
