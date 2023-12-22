import style from './CardModal.module.scss';
const CardModal = () => {
  return (
    <div className={style.card} onClick={onClick}>
      <div className={style.card__content}>
        <div className={style.card__img}>
          <img src={images[0].image} alt="cardImg" />
        </div>
        <div className={style.card__title}>
          <p>{name}</p>
        </div>
        <div className={style.card__price}>
          <p>{price} $</p>
        </div>
        <div className={style.card__favorit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M22.7144 8.71004C22.7144 10.13 22.1644 11.46 21.1644 12.46L13.3144 20.31C13.2744 20.35 13.1644 20.44 13.1144 20.47C12.9944 20.55 12.8544 20.59 12.7144 20.59C12.5744 20.59 12.4244 20.55 12.3044 20.47C12.2444 20.43 12.1944 20.39 12.1344 20.33L4.27435 12.46C3.26435 11.46 2.71436 10.13 2.71436 8.71004C2.71436 7.29004 3.26435 5.96004 4.27435 4.96004C6.34435 2.90004 9.70435 2.90004 11.7744 4.96004L12.7144 5.91004L13.6644 4.96004C15.7344 2.90004 19.0944 2.90004 21.1544 4.96004C22.1644 5.96004 22.7144 7.29004 22.7144 8.71004Z"
              fill="#F34545"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22 8.71004C22 10.13 21.45 11.46 20.45 12.46L12.6 20.31C12.56 20.35 12.45 20.44 12.4 20.47C12.28 20.55 12.14 20.59 12 20.59C11.86 20.59 11.71 20.55 11.59 20.47C11.53 20.43 11.48 20.39 11.42 20.33L3.56 12.46C2.55 11.46 2 10.13 2 8.71004C2 7.29004 2.55 5.96004 3.56 4.96004C5.63 2.90004 8.99 2.90004 11.06 4.96004L12 5.91004L12.95 4.96004C15.02 2.90004 18.38 2.90004 20.44 4.96004C21.45 5.96004 22 7.29004 22 8.71004Z"
              fill="#C0C0C0"
            />
          </svg>
          <span>{like_count}</span>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
