import { useState, useEffect, useMemo, useCallback } from "react";

export const useValidate = ({
  fieldName,
  startingValue = "",
  minLength,
  maxLength,
  required,
  email,
}) => {
  const [value, set] = useState(startingValue);
  const [error, setError] = useState("");
  const [isTouched, setTouch] = useState(false);

  const fieldDisplayName = useMemo(
    () => fieldName[0].toUpperCase() + fieldName.slice(1),
    [fieldName]
  );
  const valid = useMemo(() => {
    return (isTouched && error.length === 0) || !isTouched;
  }, [error, isTouched]);

  const touch = useCallback(() => {
    setTouch(true);
  }, []);

  useEffect(() => {
    if (required && value === "") {
      return setError(`${fieldDisplayName} is required.`);
    } else if (minLength && value.length < minLength) {
      return setError(
        `${fieldDisplayName} must be at least ${minLength} characters.`
      );
    } else if (maxLength && value.length > maxLength) {
      return setError(
        `${fieldDisplayName} cannot be more than ${maxLength} characters.`
      );
    } else if (email && !validateEmail(value)) {
      return setError(`${fieldDisplayName} must be a valid email.`);
    } else if (error !== "") {
      setError("");
    }
  }, [value, required, minLength, maxLength, email, error, fieldDisplayName]);

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  return {
    value,
    set,
    error,
    valid,
    touch,
    isTouched,
    fieldName,
    fieldDisplayName,
  };
};
