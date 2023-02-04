import * as Yup from 'yup'
const PaymentSchema = Yup.object().shape({
    cardNumber: Yup.string().required('Card Number is required'),
    fullName: Yup.string().required('Full Name is required'),
    cvv: Yup.string().matches(/^[0-9]*$/, " Should be a numbers").min(3,'Min 3 digits').required('Cvv is required'),
    month: Yup.string().matches(/^[0-9]*$/, " Should be a numbers").min(2,'Min 2 digits').required('Month is required'),
    year: Yup.string().matches(/^[0-9]*$/, " Should be a numbers").min(2,'Min 2 digits').required('Year is required'),
    password: Yup.string().matches(/^[0-9]*$/, " Should be a numbers").min(4,'Min  digits').required('Password is required'),

})
export default PaymentSchema
