import styled from 'styled-components';

// Cria um componente estilizado chamado ModalBackground para o fundo de um modal
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Cria um componente estilizado chamado ModalContent para o conteúdo de um modal
const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

// Cria um componente estilizado chamado ModalTitle para o título de um modal
const ModalTitle = styled.h1`
  font-size: 24px;
  margin: 0;
  margin-bottom: 20px;
`;

// Cria um componente estilizado chamado StyledForm para um formulário estilizado
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Cria um componente estilizado chamado InputWrapper para um wrapper de entrada de dados
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

// Cria um componente estilizado chamado Input para uma entrada de dados
const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #007f00;
  }
`;

// Cria um componente estilizado chamado ErrorMessage para exibir mensagens de erro
const ErrorMessage = styled.span`
  color: #f44336;
  font-size: 14px;
`;

// Cria um componente estilizado chamado ButtonWrapper para um wrapper de botões
const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

// Cria um componente estilizado chamado SubmitButton para um botão de envio
const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007f00;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #005c00;
  }
`;

// Cria um componente estilizado chamado CancelButton para um botão de cancelamento
const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;

// Cria um componente estilizado chamado RandomDescriptionButton para um botão de descrição aleatória
const RandomDescriptionButton = styled.button`
  padding: 10px 20px;
  background-color: #0072ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0059e6;
  }
`;

// Exporta os componentes estilizados para uso em outros lugares do aplicativo
export { ModalBackground, ModalContent, ModalTitle, StyledForm, InputWrapper, Input, ErrorMessage, ButtonWrapper, SubmitButton, CancelButton, RandomDescriptionButton };