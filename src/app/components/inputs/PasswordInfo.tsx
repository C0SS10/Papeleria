interface PasswordInfoProps {
  onClose: () => void;
}

const PasswordInfo: React.FC<PasswordInfoProps> = ({ onClose }) => {
  return (
    <div className="relative -right-12 top-1/2 transform -translate-y-1/2 bg-gray-100 text-sm px-2 py-1 rounded-md shadow-md">
      <button className="absolute top-1 right-1 text-gray-500 hover:text-gray-700" onClick={onClose}>
        &times;
      </button>
      <p>La contraseña debe:</p>
      <ul className="list-disc list-inside">
        <li>Tener al menos 8 caracteres</li>
        <li>Incluir al menos una letra mayúscula</li>
        <li>Incluir al menos un carácter especial (-_*+)</li>
      </ul>
    </div>
  );
};

export default PasswordInfo;