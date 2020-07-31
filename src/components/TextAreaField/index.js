import React from 'react';

function TextAreaField({ label, name, rows, cols, value, onChange }){
  return(
    <div>
      <label> { label } </label>
      <textarea resize='none' name={name} rows={rows} cols={cols} value={value} onChange={onChange}/>
    </div>
  )
}

export default TextAreaField;