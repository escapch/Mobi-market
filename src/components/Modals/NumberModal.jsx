import { useState } from 'react';
import Modal from 'react-modal';

const NumberModal = () => {
  return (
    <Modal contentLabel="Пример модального окна">
      <h2>Пример модального окна</h2>
      <p>Текст внутри модального окна...</p>
      {/* <button onClick={handleClose}>Закрыть</button> */}
    </Modal>
  );
};

export default NumberModal;
