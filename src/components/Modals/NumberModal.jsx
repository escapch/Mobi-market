import { useState } from 'react';
import { Modal } from '@mui/material';
import InputMask from 'react-input-mask';
import { useFormik } from 'formik';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { codeSchema, phoneSchema } from '../../schemas';
import { closeModal } from '../../redux/slice/modal.slice';
import { setUser } from '../../redux/slice/userSlice';
import phone from '../../assets/icons/phone.svg';
import codeImg from '../../assets/icons/codeImg.jpg';

const NumberModal = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.modalReducer.modalIsOpen);
  const [view, setView] = useState('first');

  const url = 'https://neobook.online/mobi-market/users/add-phone/';
  const verifyUrl = 'https://neobook.online/mobi-market/users/verify-phone/';
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
      code: '',
    },
    validationSchema: phoneSchema,
    onSubmit: async () => {
      try {
        const response = await axios.put(url, {
          phone: values.phone,
        });
        if (response.status !== 200) {
          throw new Error('Add phone failed');
        }
        dispatch(setUser({ tel: values.phone }));
        setView('second');
      } catch (error) {
        console.error('Error during login:', error.message);
      }
    },
  });
  const handleCloseModal = () => {
    dispatch(closeModal(false));
  };

  const handleCodeSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(verifyUrl, {
        code: values.code,
      });

      if (response.status !== 200) {
        throw new Error('Verification failed');
      }
      handleCloseModal();
      resetForm();
      console.log('Verification successful');
    } catch (error) {
      console.error('Error during verification:', error.message);
    }
  };

  console.log(values.phone);
  return (
    <div className="addPhone__modal">
      {view === 'first' ? (
        <Modal
          className="first__modal"
          open={modalIsOpen}
          onClose={() => dispatch(closeModal(false))}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="phone__modal-content">
            <h2>Введите номер телефона</h2>
            <img src={phone} alt="" />
            <h3>Введите номер телефона</h3>
            <p>Мы отправим вам СМС с кодом подтверждения</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="phone"
                placeholder="0(000) 000 000"
                value={values.phone}
                onChange={handleChange}
              />
              {/* {errors.phone && <p>{errors.phone}</p>} */}
              <button
                className={`addPhone__btn ${
                  !values.phone ? 'login__disabled' : 'login__activated'
                }`}
                type="submit"
                disabled={!isValid || !values.phone}
              >
                Далее
              </button>
            </form>
          </div>
        </Modal>
      ) : (
        <Modal
          className="second__modal"
          open={modalIsOpen}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="phone__modal-content">
            <h2>Изменить номер телефона</h2>
            <img src={codeImg} alt="" />
            <h3>Введите код из СМС</h3>
            <form onSubmit={handleCodeSubmit}>
              <input
                type="text"
                name="code"
                placeholder="0 0 0 0"
                value={values.code}
                onChange={handleChange}
              />
              {/* {errors.phone && <p>{errors.phone}</p>} */}
              <button
                className={`addPhone__btn ${!values.code ? 'login__disabled' : 'login__activated'}`}
                type="submit"
                disabled={!isValid || !values.code}
              >
                Далее
              </button>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default NumberModal;
