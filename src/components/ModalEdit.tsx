import { ButtonWrapper, CancelButton, ErrorMessage, Input, InputWrapper, ModalBackground, ModalContent, ModalTitle, RandomDescriptionButton, StyledForm, SubmitButton } from "../styled-components/Modal";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useEffect } from "react";

const ModalEdit = ({ isOpen, onClose, title, submit, task }: any) => {
  const { control, handleSubmit, formState: { errors }, setValue } = useForm();

  useEffect(() => {
    if (task) {
      setValue('description', task.description);
    }
  }, [task, setValue]);

  if (!isOpen) {
    return null;
  }

  const onSubmit = (data: any) => {
    submit(data);

    closeModal();
  };

  const closeModal = () => {
    if (typeof onClose === "function") {
      onClose();
    }
  };

  const fetchRandomActivityDescription = async () => {
    try {
      const response = await axios.get('https://www.boredapi.com/api/activity');

      return response.data.activity;
    } catch (error) {
      console.error('Erro ao buscar atividade aleatória:', error);

      return null;
    }
  };

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
            <SubmitButton type="submit">Salvar Tarefa</SubmitButton>
            <RandomDescriptionButton type="button" onClick={generateRandomDescription}>Descrição Aleatória</RandomDescriptionButton>
            <CancelButton type="button" onClick={closeModal}>Cancelar</CancelButton>
          </ButtonWrapper>
        </StyledForm>
      </ModalContent>
    </ModalBackground>
  );
};

export default ModalEdit;