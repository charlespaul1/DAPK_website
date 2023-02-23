import React from 'react';
import {Formik, Form, Field} from 'formik';
import { FormControl, FormLabel, Input, Select, button } from '@chakra-ui/react'; 
import {object, string, date} from 'yup';
// setting my initial values as empty strings
const initialValues = {
  Name: '',
  PhoneNumber:'',
  idOrPassport:'',
  DateOfBirth:'',
  DateOfRegistration:'',
  Ward:'',
  Constituency:'',
  County:'',
}
// setting the form validation
const validationSchema = object().shape({
  Name: string().required('please insert your name'),
  PhoneNumber: string()
    .matches(/^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/, 'Phone number is not valid')
    .required('Phone number is required'),
  idOrPassport: string().required('ID/Passport number is required'),
  DateOfBirth: date().required('Date of Birth is required'),
  DateOfRegistration: date().required('Date of registration is required'),
  Ward: string().required('Ward is required'),
  Constituency: string().required('constituency is required'),
  County: string().required('County is required'),
});
//on submit function
const onSubmit = (values, {setSubmitting}) =>{
  console.log(values);
  setSubmitting(false);
}

const regForm = () => {
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
      {({isSubmitting}) =>(
        <Form>
          <Field name='name'>
            {({field, form}) => (
              <FormControl
              isInvalid={form.errors.name && form.touched.name}
              mb="4"
              >
                <FormLabel htmlFor='name'>Name</FormLabel>
                <Input {...field} id='name' placeholder='Name'/>
                </FormControl>
            )}
          </Field>
          <Field name='phoneNumber'>
            {({field, form}) => (
              <FormControl
              isInvalid={form.errors.phoneNumber && form.touched.phoneNumber}
              mb='4'
              >
                <FormLabel htmlFor='phoneNumber'>Phone Number</FormLabel>
                <Input {...field} id='phoneNumber' placeholder='Phone Number'/>
              </FormControl>
            )}
          </Field>
          <Field name='idOrPassport'>
            {({field, form}) => (
              <FormControl
              isInvalid={form.errors.idOrPassport && form.touched.idOrPassport}
              mb='4'
              >
              <FormLabel htmlFor='ID/passport'>ID/Passport</FormLabel>
              <Input {...field} id='idOrPassport' placeholder='Id or Passport'/>
              </FormControl>
            )}

          </Field>
        </Form>
      )}
      
    </Formik>
  )
}

export default regForm
