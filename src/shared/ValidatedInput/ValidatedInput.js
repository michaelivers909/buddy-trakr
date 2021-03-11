import React from "react";
import TextField from "@material-ui/core/TextField";

const ValidatedInput = (props) => {
  return (
    <TextField
      className={props.className}
      error={!props.field.valid}
      name={props.field.fieldName}
      label={props.field.fieldDisplayName}
      placeholder={props.placeholder}
      value={props.field.value}
      type={props.type || "text"}
      onChange={(e) => props.field.set(e.target.value)}
      onBlur={(e) => {
        if (!props.field.isTouched) {
          props.field.touch();
        }
      }}
      helperText={props.field.valid ? props.helperText : props.field.error}
    />
  );
};

export default ValidatedInput;
