export const ValidationForm = (...props) => {
  const [email, password, name] = props;
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );
  const passwordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (name === "") return "Please enter name";
  if (!isEmailValid) return "Email is not valid";
  if (!passwordValid)
    return "Password should be contain Uppercase, Symbol, Numeric";

  return null;
};
