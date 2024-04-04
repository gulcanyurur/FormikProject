import React from 'react';
import { useFormik } from 'formik';
import { basicSchema } from '../schemas';
import {Link} from 'react-router-dom';

function GeneralForm() {
  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: basicSchema,
    onSubmit: onSubmit, // onSubmit işlevini burada belirtin
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='inputDiv'>
        <label>Email</label>
        <input
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          id="email"
          placeholder="Mail adresinizi giriniz"
          className={formik.errors.email ? 'input-error' : ''}
        />
        {formik.errors.email && <p className='error'>{formik.errors.email}</p>}
      </div>
      <div className='inputDiv'>
        <label>Yaş</label>
        <input
          type="number"
          value={formik.values.age}
          onChange={formik.handleChange}
          id="age"
          placeholder="Yaşınızı giriniz"
        />
        {formik.errors.age && <p className='error'>{formik.errors.age}</p>}
      </div>
      <div className='inputDiv'>
        <label>Şifre</label>
        <input
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          id="password"
          placeholder="Şifrenizi giriniz"
        />
        {formik.errors.password && <p className='error'>{formik.errors.password}</p>}
      </div>
      <div className='inputDiv'>
        <label>Şifre tekrar</label>
        <input
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          id="confirmPassword"
          placeholder="Şifrenizi tekrar giriniz"
        />
        {formik.errors.confirmPassword && <p className='error'>{formik.errors.confirmPassword}</p>}
      </div>
      <button disabled={formik.isSubmitting} type='submit'>
        Kaydet
      </button>
      <Link to= '/portal' className='portal'>Portala Git</Link>
    </form>
  );
}

export default GeneralForm;
