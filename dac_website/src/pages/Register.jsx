import './Register.css';
import * as Yup from 'yup';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import { useState } from 'react';
const Register = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    idNumber: '',
    age: '',
    phoneNumber: '',
    gender: '',
    county: '',
    constituency: '',
    ward: '',
  }
  const validationSchema = Yup.object({
    firstName: Yup.string().required('first name is required'),
    lastName: Yup.string().required('last name is required'),
    idNumber: Yup.string().matches(/^\d+$/, 'ID number must be numeric') .required('ID number is required'),
    age: Yup.string().matches(/^\d+$/, 'Age must be numeric').length(2, 'Age must be exactly two digits').required('Age is required'),
    phoneNumber: Yup.string().matches(/^\d+$/, 'Phone number must be numeric').required('Phone number is required'),
    gender: Yup.string().required('Gender is required'),
    county: Yup.string().required('County is required'),
    constituency: Yup.string().required('Constituency is required'),
    ward: Yup.string().required('Ward is required'),

  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');


  const handleSubmit= (values, {setSubmitting, resetForm}) =>{
    setSubmitting(false);
    setSuccessMessage('Registration successful!');
    setIsSubmitted(true);
    resetForm();
    setTimeout(() => {
      setIsSubmitted(false);
      setSuccessMessage('');
    }, 3000);

  };
  return (
    <div className='registration-container'>
    <h1>Register Here</h1>
    <p>Fill in the form below to register</p>
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      
      <Form className='form'>
        <div className='form-control'>
          <Field type='text' id='firstName' name='firstName' className='form-input'/>
          <label htmlFor='firstName'className='form-label'>First Name</label>
          <div className='error-message'>
          <ErrorMessage name='firstName' />
          </div>
        </div>
        <div className='form-control'>
          <Field type='text' id='lastName' name='lastName' className='form-input'/>
          <label htmlFor='lastName'className='form-label'>Last Name</label>
          <div className="error-message">
          <ErrorMessage name='lastName' className='error-message' />
          </div>
        </div>
        <div className='form-control'>
          <Field type='text' id='idNumber' name='idNumber' className='form-input'/>
          <label htmlFor='idNumber'className='form-label'>ID Number</label>
          <div className="error-message">
          <ErrorMessage name='idNumber' className='error-message' />
          </div>
        </div>
        <div className='form-control'>
          <Field type='text' id='age' name='age' className='form-input'/>
          <label htmlFor='age'className='form-label'>Age</label>
          <div className="error-message">
          <ErrorMessage name='age' className='error-message' />
          </div>
        </div>
        <div className='form-control'>
          <Field type='' id='phoneNumber' name='phoneNumber' className='form-input'/>
          <label htmlFor='phoneNumber'className='form-label'>Phone Number</label>
          <div className="error-message">
          <ErrorMessage name='phoneNumber' className='error-message' />
          </div>
        </div>
        <div className='form-control'>
          {/* <label htmlFor='gender' className='form-label'>Gender</label> */}
          <Field as='select' id='gender' name='gender' className='form-input'>
          <option value=''>Select Gender</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          </Field>
          <div className="error-message">
          <ErrorMessage name='gender' class='error-message' />
          </div>
        </div>

        <div className='form-control'>
          <Field as='select' id='county' name='county' className='form-input'>
            <option value=''>Select your County</option>
            <option value='mombasa'>Mombasa</option>
            <option value='kilifi'>Kilifi</option>
            <option value='bungoma'>Bungoma</option>
            <option value='nairobi'>Nairobi</option>
            <option value='kisumu'>Kisumu</option>
            <option value='kakamega'>Kakamega</option>
            <option value='kisii'>Kisii</option>
            <option value='nakuru'>Nakuru</option>
            <option value='kajiado'>Kajiado</option>
            <option value='machakos'>Machakos</option>
            <option value='meru'>Meru</option>
            <option value='nyeri'>Nyeri</option>
            <option value='laikipia'>Laikipia</option>
            <option value='nyandarua'>Nyandarua</option>
            <option value='kirinyaga'>Kirinyaga</option>
            <option value='muranga'>Muranga</option>
            <option value='kiambu'>Kiambu</option>
            <option value='nakuru'>Nakuru</option>
            <option value='transnzoia'>Transnzoia</option>
            <option value='uasin-gishu'>Uasin Gishu</option>
            <option value='nandi'>Nandi</option>
            <option value='kericho'>Kericho</option>
            <option value='nandi'>Nandi</option>
            <option value='homabay'>Homabay</option>
            <option value='migori'>Migori</option>
            </Field>

          <div className="error-message">
          <ErrorMessage name='county' className='error-message' />
          </div>
        </div>
        <div className='form-control'>
          <Field type='text' id='constituency' name='constituency' className='form-input'/>
          <label htmlFor='constituency' className='form-label'>Constituency</label>
          <div className="error-message">
          <ErrorMessage name='constituency' className='error-message' />
          </div>
        </div>
        <div className='form-control'>
          <Field type='text' id='ward' name='ward' className='form-input'/>
          <label htmlFor='ward' className='form-label'>Ward</label>
          <div className="error-message">
          <ErrorMessage name='ward' className='error-message' />
          </div>
        </div>
          
        <button type='submit' onClick={handleSubmit}>Submit</button>
        {isSubmitted && (
  <div className="success-message">{successMessage}</div>
    )}
        
      </Form>
    </Formik>
    

    </div>
  )
}

export default Register
