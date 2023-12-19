import { Box, Modal, Typography } from '@mui/material';
import phone from '../../assets/icons/phone.svg';
import InputMask from 'react-input-mask';

const TestModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onRequestClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="phone__modal-content">
        <h2>Введите номер телефона</h2>
        <img src={phone} alt="" />
        <p>Введите номер телефона</p>
        <p>Мы отправим вам СМС с кодом подтверждения</p>
        <InputMask mask="+7 (999) 999-99-99" maskChar="_" placeholder="0(000) 000 000" />
        <button className="addPhone__btn">Далее</button>
      </div>
    </Modal>
  );
};

export default TestModal;
