import React from "react";
import { useField } from "formik";

function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <label >{label}</label>
      <select {...field} {...props} className={meta.error ? 'input-error' : ''}>
       
      </select>
      {meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
}

export default CustomSelect;
