import { useMemo, useCallback } from "react";

export const useForm = (callback, fields) => {
  const valid = useMemo(() => {
    let isValid = true;
    for (let v of fields) {
      if (!v.valid || (!v.touched && v.error)) {
        isValid = false;
        break;
      }
    }
    return isValid;
  }, [fields]);

  const value = useMemo(() => {
    let tempVals = {};
    for (let v of fields) {
      tempVals[v.fieldName] = v.value;
    }
    return tempVals;
  }, [fields]);

  const submit = useCallback(() => {
    for (let v of fields) {
      if (!v.touched && v.error) {
        v.touch();
      }
    }
    if (valid) {
      callback();
    }
  }, [fields, valid, callback]);

  return { valid, value, submit };
};
