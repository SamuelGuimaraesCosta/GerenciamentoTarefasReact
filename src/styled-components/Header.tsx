import styled from 'styled-components';

interface HeaderProps {
  $bgcolor: string;
}

const Header = styled.header<HeaderProps>`
  background-color: ${({ $bgcolor }) => $bgcolor};
  color: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 100px !important;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Logo = styled.img`
  max-width: 100px;
  margin-right: 20px;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  font-size: 1.6rem;
`;

const HeaderSubtitle = styled.p`
  font-size: 1rem;
  color: #0074e4; /* Cor azul padrão */

  @media (max-width: 768px) {
    color: #ff0000; /* Cor vermelha na visualização móvel */
  }
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding-top: 10px;
    flex-direction: column;
    align-items: center;
  }
`;

const TaskCounter = styled.div<HeaderProps>`
  margin-right: 20px;
  font-weight: bold;
  font-size: 1.2rem;
  animation: pulse 3.5s infinite; /* Adicione a animação de pulso */

  @media (max-width: 768px) {
    margin: 10px 0;
    color: ${({ $bgcolor }) => $bgcolor};
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const NewTaskButton = styled.button`
  background-color: #0074e4;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #005bab;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export { Header, Logo, HeaderTitle, HeaderSubtitle, Navbar, HeaderContent, TaskCounter, NewTaskButton };