export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[0-9]{7,10}$/;
  return phoneRegex.test(phone);
};

const validCities = [
  "Bogotá",
  "Soacha",
  "Barranquilla",
  "Bucaramanga",
  "Cali",
  "Cartagena",
  "Chía",
  "Cúcuta",
  "Ibagué",
  "Manizales",
  "Medellín",
  "Montería",
  "Neiva",
  "Pereira",
  "Santa Marta",
  "Valledupar",
  "Villavicencio",
];

export const isValidCity = (city: string): boolean => {
  return validCities.includes(city.toUpperCase());
};