const validation = (userData) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const errors = {};
  // Email validation
  if (!regexEmail.test(userData.email)) {
    errors.e1 = "Debe ser un correo electrónico";
  }
  if (!userData.email) {
    errors.e2 = "el nombre de usuario no puede estar vacío";
  }
  if (userData.email.length > 35) {
    errors.e3 = "El nombre de usuario no puede tener más de 35 caracteres";
  }

  // Password validation
  if (!/\d+/.test(userData.password)) {
    errors.p1 = "Al menos debe incluir un numero";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.p2 = "La contraseña debe tener entre 6 y 10 caracteres";
  }
  return errors;
};

export default validation;
