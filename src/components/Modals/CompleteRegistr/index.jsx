import { Link } from 'react-router-dom';
import style from './CompleteRegistr.module.scss';
import { Modal } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/slice/modal.slice';

const CompleteRegistr = () => {
  const dispatch = useDispatch();
  const completeRegModal = useSelector((state) => state.modalReducer.completeRegModal);
  const isCloseModal = () => {
    dispatch(closeModal({ modalName: 'completeRegModal', value: false }));
  };
  return (
    <Modal
      open={completeRegModal}
      onClose={isCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="__modal-content">
        <div className={style.root}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="109"
            height="94"
            viewBox="0 0 109 94"
            fill="none"
          >
            <path
              d="M108.667 29.1793C108.667 36.871 105.688 44.0751 100.271 49.4918L57.7506 92.0126C57.534 92.2293 56.9382 92.7168 56.6673 92.8793C56.0173 93.3126 55.259 93.5292 54.5007 93.5292C53.7423 93.5292 52.9298 93.3126 52.2798 92.8793C51.9548 92.6626 51.684 92.4459 51.359 92.1209L8.78397 49.4918C3.31314 44.0751 0.333984 36.871 0.333984 29.1793C0.333984 21.4876 3.31314 14.2835 8.78397 8.8668C19.9965 -2.29154 38.1965 -2.29154 49.409 8.8668L54.5007 14.0126L59.6465 8.8668C70.859 -2.29154 89.059 -2.29154 100.217 8.8668C105.688 14.2835 108.667 21.4876 108.667 29.1793Z"
              fill="url(#paint0_linear_749_17370)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_749_17370"
                x1="54.5007"
                y1="0.498047"
                x2="54.5007"
                y2="93.5292"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F34545" />
                <stop offset="1" stop-color="#FFADAD" />
              </linearGradient>
            </defs>
          </svg>
          <h2>Вы не закончили регистрацию</h2>
          <Link to="/profile">
            <button className={style.toProfile__btn}>Зарегистрироваться</button>
          </Link>
          <button className={style.close} onClick={isCloseModal}>Отмена</button>
        </div>
      </div>
    </Modal>
  );
};

export default CompleteRegistr;
