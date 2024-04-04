import React from "react";
import { useField } from "formik";

function CustomCheckBox({ label, ...props }) {
  const [field, meta] = useField(props);
  console.log(meta);
  console.log(field);
  
  return (
    <>
    <div className="checkBox">
      
      <input
        {...field}
        {...props}
        className={meta.error ? 'input-error' : ''}
      />
      </div>
      <span>kullanım koşullarını kabul ediyorum</span>
      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

export default CustomCheckBox;