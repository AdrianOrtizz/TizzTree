type ValidationErrors = {
  username?: string;
  email?: string;
  password?: string;
};

export const validateSignUp = ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}): ValidationErrors => {
  const errors: ValidationErrors = {};

  // Validación username
  if (!username.trim()) {
    errors.username = "El nombre de usuario es obligatorio.";
  } else if (!/^[a-zA-Z0-9._]+$/.test(username)) {
    errors.username =
      "El nombre de usuario solo puede contener letras, números, puntos y guiones bajos.";
  }

  // Validación email
  if (!email.trim()) {
    errors.email = "El correo electrónico es obligatorio.";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    errors.email = "El correo electrónico no es válido.";
  }

  // Validación password
  if (!password) {
    errors.password = "La contraseña es obligatoria.";
  } else if (password.length < 8) {
    errors.password = "La contraseña debe tener al menos 8 caracteres.";
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
    errors.password =
      "La contraseña debe contener al menos una mayúscula, una minúscula y un número.";
  }

  return errors;
};
