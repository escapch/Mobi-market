import { Modal } from '@mui/material';
import { selectProduct, setProducts } from '../../../redux/slice/productSlice';
import style from './CardModal.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/slice/modal.slice';

const CardModal = ({ value }) => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.modalReducer.modalIsOpen);

  return (
    <Modal
      open={modalIsOpen}
      onClose={() => dispatch(closeModal(false))}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={style.card__modalContent}>
        <div className={style.card__content}>
          <div className={style.closeButton} onClick={() => dispatch(closeModal(false))}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M16.2431 8.25786L7.75781 16.7431M16.2431 16.7431L7.75781 8.25781"
                stroke="#1D1D1F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className={style.card__img}>
            <img src={value.images[0].image} alt="cardImg" />
          </div>
          <div className={style.card__price}>
            <p>{value.price} $</p>
          </div>
          <div className={style.card__tel}>
            <p>+996500 567-657</p>
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
            <span>Нравится {value.like_count} М</span>
          </div>
          <div className={style.card__title}>
            <p>{value.name}</p>
          </div>
          <div className={style.card__shortDesc}>
            <p>{value.short_description}</p>
          </div>
          <div className={style.card__fullDesc}>
            <h2>Детальное описание</h2>
            <p>{value.full_description}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CardModal;
