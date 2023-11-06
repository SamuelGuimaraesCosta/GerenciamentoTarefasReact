import { useState } from "react"; // Importa o hook de estado do React
import { CloseButton, FloatingAlertContainer } from "../styled-components/Alert"; // Importa componentes estilizados

// Define um componente funcional chamado Alert que recebe as propriedades 'message' e 'color'
const Alert = ({ message, color }: any) => {
  const [isVisible, setIsVisible] = useState(true); // Cria um estado para controlar a visibilidade do alerta

  // Função para fechar o alerta
  const handleClose = () => {
    setIsVisible(false);

    message = null;
  };

  return (
    <FloatingAlertContainer $visible={isVisible} color={color}>
      {message}
      <CloseButton onClick={handleClose}>&times;</CloseButton>
    </FloatingAlertContainer>
  );
};

// Exporta o componente Alert para uso em outros lugares do aplicativo
export default Alert;