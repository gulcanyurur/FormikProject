import React from "react";
import { Formik, Form } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckBox from "./CustomCheckBox";
import {Link} from 'react-router-dom';

function PortalForm() {
  const onSubmit = (values) => {
    // Form submit işlemleri burada yapılacak
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ username: '', university: '', isAccepted: false }}
      onSubmit={onSubmit}
      validationSchema={advancedSchema}
    >
      {(isSubmitting) => (
        <Form>
          <CustomInput label="Kullanıcı Adı" name="username" type="text" placeholder="Kullanıcı adınızı giriniz" />
          <CustomSelect
            label="okulunuz"
            name="university"
            placeholder="Kullanıcı Üniversitenizi seçiniz"
          >
            <option value="">Lütfen üniversitenizi seçiniz</option>
            <option value="bogazici">Boğaziçi Üniversitesi</option>
            <option value="gsu">Galatasaray Üniversitesi</option>
            <option value="odtü">ODTÜ</option>
            <option value="itü">İTÜ</option>
          </CustomSelect>
          <CustomCheckBox  type="checkbox" name="isAccepted"/>
          <button type="submit" disabled={isSubmitting}>kaydet</button>
         <Link to= "/" className="ana">Ana Forma git</Link>
        </Form>
      )}
    </Formik>
  );
}

export default PortalForm;

