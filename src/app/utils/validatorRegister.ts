export function isValidEmail(email: string): boolean {
  // Expresión regular para validar el formato del correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidPassword(password: string): boolean {
  // Expresión regular para validar la contraseña
  // Al menos 8 caracteres, una mayúscula, un caracter especial y un número
  const passwordRegex = /^(?=.*[A-Z])(?=.*[-_*+])[A-Za-z\d-_*+]{8,}$/;
  return passwordRegex.test(password);
}

export function validateRegistration(email: string, password: string): boolean {
  return isValidEmail(email) && isValidPassword(password);
}