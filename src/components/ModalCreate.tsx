import { ButtonWrapper, CancelButton, ErrorMessage, Input, InputWrapper, ModalBackground, ModalContent, ModalTitle, RandomDescriptionButton, StyledForm, SubmitButton } from "../styled-components/Modal"; // Importa componentes estilizados para criar o modal
import { Controller, useForm } from "react-hook-form"; // Importa o React Hook Form para lidar com formulários no React
import axios from "axios"; // Importa a biblioteca Axios para fazer solicitações HTTP

const ModalCreate = ({ isOpen, onClose, title, submit }: any) => {
  const { control, handleSubmit, formState: { errors }, setValue } = useForm(); // Inicializa o React Hook Form para gerenciar o formulário

  // Se o modal não estiver aberto, retorna null para não renderizar nada
  if (!isOpen) {
    return null;
  }

  // Função para lidar com o envio do formulário
  const onSubmit = (data: any) => {
    submit(data);

    closeModal();
  };

  // Função para fechar o modal
  const closeModal = () => {
    if (typeof onClose === "function") {
      onClose();
    }
  };

  // Função para buscar uma descrição de atividade aleatória
  const fetchRandomActivityDescription = async () => {
    try {
      const response = await axios.get('https://www.boredapi.com/api/activity');

      return response.data.activity;
    } catch (error) {
      console.error('Erro ao buscar atividade aleatória:', error);

      return null;
    }
  };

  // Função para gerar e preencher uma descrição aleatória no formulário
  const generateRandomDescription = async () => {
    const randomDescription = await fetchRandomActivityDescription();

    if (randomDescription) {
      setValue('description', randomDescription);
    }
  };

  return (
    <ModalBackground>
      <ModalContent>
        <ModalTitle>{title}</ModalTitle>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="description"
            control={control}
            defaultValue=""
            rules={{
              required: 'Descrição é obrigatória',
              minLength: {
                value: 10,
                message: 'Descrição deve ter pelo menos 10 caracteres',
              },
            }}
            render={({ field }) => (
              <InputWrapper>
                <Input {...field} type="text" placeholder="Descrição da Tarefa" />
                {errors.description && <ErrorMessage>{errors?.description?.message?.toString()}</ErrorMessage>}
              </InputWrapper>
            )}
          />
          <ButtonWrapper>
            <SubmitButton type="submit">Criar Tarefa</SubmitButton>
            <RandomDescriptionButton type="button" onClick={generateRandomDescription}>Descrição Aleatória</RandomDescriptionButton>
            <CancelButton type="button" onClick={closeModal}>Cancelar</CancelButton>
          </ButtonWrapper>
        </StyledForm>
      </ModalContent>
    </ModalBackground>
  );
};

// Exporta o componente ModalCreate para uso em outras partes da aplicação
export default ModalCreate;