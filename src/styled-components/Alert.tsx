import styled from 'styled-components';

// Define uma interface que descreve as propriedades aceitas pelo componente FloatingAlertContainer
interface AlertProps {
  $visible: boolean;
  color: string;
}

// Cria um componente estilizado chamado FloatingAlertContainer, que é uma div com estilos condicionais com base nas props
const FloatingAlertContainer = styled.div<AlertProps>`
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: ${({ color }) => (color)};
  color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};
`;

// Cria um componente estilizado chamado CloseButton para o botão de fechar
const CloseButton = styled.button`
  position: absolute;
  top: 1px;
  right: 1px;
  background: none;
  border: none;
  color: white;
  font-size: 26px;
  cursor: pointer;
`;

// Exporta os componentes para uso em outros lugares do aplicativo
export { FloatingAlertContainer, CloseButton };