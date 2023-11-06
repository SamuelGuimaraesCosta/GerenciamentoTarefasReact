import { useState } from "react";
import { CloseButton, FloatingAlertContainer } from "../styled-components/Alert";

const Alert = ({ message, color }: any) => {
  const [isVisible, setIsVisible] = useState(true);

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

export default Alert;