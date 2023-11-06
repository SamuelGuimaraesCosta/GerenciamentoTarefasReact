import styled from 'styled-components';

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

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const ModalTitle = styled.h1`
  font-size: 24px;
  margin: 0;
  margin-bottom: 20px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

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

const ErrorMessage = styled.span`
  color: #f44336;
  font-size: 14px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

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

export { ModalBackground, ModalContent, ModalTitle, StyledForm, InputWrapper, Input, ErrorMessage, ButtonWrapper, SubmitButton, CancelButton, RandomDescriptionButton };