import styled from 'styled-components';

interface AlertProps {
  $visible: boolean;
  color: string;
}

const FloatingAlertContainer = styled.div<AlertProps>`
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: ${({ color }) => (color)};
  color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  display: ${({ $visible }) => ( $visible ? 'block' : 'none')};
`;

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

export { FloatingAlertContainer, CloseButton };