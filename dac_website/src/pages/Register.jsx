import './Register.css';
import * as Yup from 'yup';
import {Formik, Field, Form, ErrorMessage} from 'formik';
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
    idNumber: Yup.string().required('ID number is required'),
    age: Yup.string().required('Age is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    gender: Yup.string().required('Gender is required'),
    county: Yup.string().required('County is required'),
    constituency: Yup.string().required('Constituency is required'),
    ward: Yup.string().required('Ward is required'),

  });
  const handleSubmit= (values, {setSubmitting}) =>{
    setSubmitting(false);

  };
  return (
    <div className='registration-container'>
    <h1>Register Here</h1>
    <p>Fill in the form below to register</p>
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <div className='form-control'>
          <label htmlFor='firstName'>First Name</label>
          <Field type='text' id='firstName' name='firstName' className='form-control'/>
          <ErrorMessage name='firstName' className='error-message' />
        </div>
        <div className='form-control'>
          <label htmlFor='lastName'>Last Name</label>
          <Field type='text' id='lastName' name='lastName' className='form-control'/>
          <ErrorMessage name='lastName' className='error-message' />
        </div>
        <div className='form-control'>
          <label htmlFor='idNumber'>ID Number</label>
          <Field type='text' id='idNumber' name='idNumber' className='form-control'/>
          <ErrorMessage name='idNumber' className='error-message' />
        </div>
        <div className='form-control'>
          <label htmlFor='age'>Age</label>
          <Field type='text' id='age' name='age' className='form-control'/>
          <ErrorMessage name='age' className='error-message' />
        </div>
        <div className='form-control'>
          <label htmlFor='phoneNumber'>Phone Number</label>
          <Field type='text' id='phoneNumber' name='phoneNumber' className='form-control'/>
          <ErrorMessage name='phoneNumber' className='error-message' />
        </div>
        <div className='form-control'>
          <label htmlFor='gender'>Gender</label>
          <Field type='text' id='gender' name='gender' className='form-control'/>
          <ErrorMessage name='gender' className='error-message' />
        </div>
        <div className='form-control'>
          <label htmlFor='county'>County</label>
          <Field type='text' id='county' name='county' className='form-control'/>
          <ErrorMessage name='county' className='error-message' />
        </div>
        <div className='form-control'>
          <label htmlFor='constituency'>Constituency</label>
          <Field type='text' id='constituency' name='constituency' className='form-control'/>
          <ErrorMessage name='constituency' className='error-message' />
        </div>
        <div className='form-control'>
          <label htmlFor='ward'>Ward</label>
          <Field type='text' id='ward' name='ward' className='form-control'/>
          <ErrorMessage name='ward' className='error-message' />
        </div>
        <button type='submit' onClick={handleSubmit}>Submit</button>


      </Form>
    </Formik>
    </div>  
  )
}

export default Register
