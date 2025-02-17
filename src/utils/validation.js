export const validType = {
  TEXT: "text",
  TEXT_EMP: "text_emp",
  EMAIL: "email",
  DIGIT: "digit",
  PHONENO: "phoneno",
  ANY: "any",
};

export const strRegex = /^[a-zA-Z\s]*$/;
export const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const phoneRegex =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export const validateFormData = (value, type, fieldName) => {
  if (type === validType.TEXT) {
    return strRegex.test(value) && value.trim().length > 0
      ? ""
      : `${fieldName} is invalid`;
  }
  if (type === validType.TEXT_EMP) {
    return strRegex.test(value) ? "" : `${fieldName} is invalid`;
  }
  if (type === validType.EMAIL) {
    return emailRegex.test(value) && value.trim().length > 0
      ? ""
      : `${fieldName} is invalid`;
  }
  if (type === validType.PHONENO) {
    return phoneRegex.test(value) && value.trim().length > 0
      ? ""
      : `${fieldName} is invalid`;
  }
  if (type === validType.ANY) {
    return value.trim().length > 0 ? "" : `${fieldName} is invalid`;
  }
  return "";
};
