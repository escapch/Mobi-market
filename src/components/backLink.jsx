import backIcon from '../assets/icons/backIcon.svg';

const BackLink = () => {
  return (
    <div className="back">
      <img src={backIcon} alt="back" />
      <p>Назад</p>
    </div>
  );
};

export default BackLink;
