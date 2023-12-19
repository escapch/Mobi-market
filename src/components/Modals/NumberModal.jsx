import { useState } from 'react';
import { Modal } from '@mui/material';
import phone from '../../assets/icons/phone.svg';
import InputMask from 'react-input-mask';
import { useFormik } from 'formik';
import { phoneSchema } from '../../schemas';
import { useSelector, useDispatch } from 'react-redux';
import { selectModalIsOpen } from '../../redux/slice/modal.slice';

const NumberModal = () => {
  const modalIsOpen = useSelector(selectModalIsOpen);
  const { closeModal } = useSelector((state) => state.modalSlice);
  const dispatch = useDispatch();
  const closePhoneModal = () => {
    dispatch(closeModal(true));
  };

  console.log(modalIsOpen);
  console.log(closeModal);

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
    isValid,
  } = useFormik({
    initialValues: {
      phone: '',
    },
    validationSchema: phoneSchema,
    onSubmit: async () => {},
  });

  console.log(values.phone);
  return (
    <Modal
      open={modalIsOpen}
      onClose={closePhoneModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="phone__modal-content">
        <h2>Введите номер телефона</h2>
        <img src={phone} alt="" />
        <p>Введите номер телефона</p>
        <p>Мы отправим вам СМС с кодом подтверждения</p>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="phone"
            placeholder="0(000) 000 000"
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <p>{errors.phone}</p>}
          <button
            className={`addPhone__btn ${!values.phone ? 'login__disabled' : 'login__activated'}`}
            type="submit"
            disabled={!isValid || !values.username || !values.password}
          >
            Далее
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default NumberModal;
