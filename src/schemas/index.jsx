import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const loginSchema = yup.object().shape({
  username: yup.string().min(1).max(150).required('*'),
  password: yup
    .string()
    .min(1)
    .matches(passwordRules, { message: 'Неправильный пароль' })
    .required('*'),
});

export const signupSchema = yup.object().shape({
  name: yup.string().min(3, 'Слишком короткий!').max(50, 'Слишком длинный!').required('*'),
  email: yup
    .string()
    .email('Введите, пожалуйста, действительный адрес электронной почты')
    .required('*'),
});

export const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .min(1)
    .matches(passwordRules, { message: 'Пожалуйста, создайте более надежный пароль' })
    .required('*'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Пароли должны совпадать')
    .required('*'),
});
