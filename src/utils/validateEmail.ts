const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail(val: string) {
  return emailRegEx.test(val);
}

export default validateEmail;
