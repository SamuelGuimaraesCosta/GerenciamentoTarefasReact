# Aplicativo de Gerenciamento de Tarefas

## Visão Geral

O Aplicativo de Gerenciamento de Tarefas é uma aplicação web desenvolvida usando React com TypeScript. Ele fornece uma interface simples para gerenciar tarefas, permitindo que os usuários criem, editem, excluam e marquem tarefas como concluídas. O aplicativo utiliza várias bibliotecas e tecnologias para aprimorar sua funcionalidade.

## Recursos

* Listar e exibir tarefas pendentes.
* Criar novas tarefas.
* Editar tarefas existentes.
* Marcar tarefas como concluídas.
* Excluir tarefas.
* Gerar descrições aleatórias de tarefas para novas tarefas.

## Pré-Requisitos

Antes de começar, certifique-se de que você tenha as seguintes dependências e configurações em vigor:

* __Node.js__: O aplicativo depende do Node.js para funcionar. Se você ainda não instalou o Node.js, pode baixá-lo [aqui](https://nodejs.org/en).

* __json-server__: Este projeto utiliza o json-server como uma API simulada para a persistência de dados. Certifique-se de instalá-lo globalmente em seu sistema usando o seguinte comando:

```
npm install -g json-server
```

* __db.json__: Crie um arquivo db.json para servir como banco de dados simulado para armazenar tarefas. No projeto haverá uma pasta __json_server__ com este arquivo já criado:

```
{
  "tasks": []
}
```

## Instalação e Configuração

Siga estas etapas para configurar o Aplicativo de Gerenciamento de Tarefas:

* __Clonar o Repositório__: Comece clonando o repositório Git para sua máquina local:

```
git clone https://github.com/seu-repositorio.git
```

* __Navegar até o Diretório do Projeto__: Altere o diretório atual para a pasta do projeto:

```
cd gerenciamento-tarefas-react
```

* __Instalar Dependências__: Use o npm para instalar as dependências do projeto:

```
npm install
```

* __Iniciar o JSON Server__: Inicie o servidor JSON para servir como a API simulada. Certifique-se de especificar o arquivo db.json e definir o servidor para ser executado na porta 3001 e também executar este comando na pasta json-server onde se localiza o db.json:

```
json-server --watch db.json --port 3001
```

* __Iniciar o Servidor de Desenvolvimento__: Após configurar o servidor JSON, inicie o servidor de desenvolvimento para o aplicativo React:

```
npm start
```

* __Acessar o Aplicativo__: Você pode acessar o aplicativo abrindo um navegador da web e navegando para http://localhost:3000.

## Tecnologias Utilizadas

O Aplicativo de Gerenciamento de Tarefas faz uso de várias tecnologias e bibliotecas, incluindo:

* __React__: Uma biblioteca JavaScript para construir interfaces de usuário.

* __TypeScript__: O TypeScript adiciona tipagem estática ao JavaScript, melhorando a qualidade do código e prevenindo erros.

* __@fortawesome/free-solid-svg-icons e @fortawesome/react-fontawesome__: Essas bibliotecas fornecem acesso a ícones FontAwesome para aprimorar os elementos visuais do aplicativo.

* __Axios__: O Axios é usado para fazer solicitações HTTP à API simulada para a manipulação de dados.

* __Styled-components__: Esta biblioteca é usada para estilizar componentes com CSS-in-JS, simplificando a gestão de estilos.

* __react-hook-form__: O react-hook-form é utilizado para simplificar a criação e validação de formulários.

* __react-router-dom__: O react-router-dom é empregado para gerenciar as rotas e a navegação da aplicação.

* __mdi/react__: O pacote de Ícones de Design de Material é usado para incluir ícones de Material Design em componentes específicos.

## Estrutura do Projeto

A estrutura do projeto é organizada em diferentes componentes e diretórios:

* __src/components__: Este diretório contém todos os componentes da aplicação, incluindo o cabeçalho, a lista de tarefas, alertas e modais.

* __src/pages__: As principais páginas do aplicativo são armazenadas neste diretório. A página principal combina o cabeçalho e a lista de tarefas.

* __src/styled-components__: Os estilos dos componentes são gerenciados neste diretório usando a biblioteca styled-components.

* __src/api__: As configurações da API e as solicitações para a API simulada são gerenciadas neste diretório.

## Persistência de Dados

A persistência de dados é alcançada por meio do pacote json-server, que serve como uma API simulada. Quando tarefas são criadas, editadas, marcadas como concluídas ou excluídas, a aplicação interage com esta API simulada. Os dados são armazenados e recuperados a partir do arquivo db.json. A API é executada na porta 3001.

## Uso

O Aplicativo de Gerenciamento de Tarefas oferece as seguintes funcionalidades principais:

* Visualizar uma lista de tarefas pendentes.
* Criar novas tarefas.
* Editar tarefas existentes.
* Marcar tarefas como concluídas.
* Excluir tarefas.
* Gerar descrições aleatórias de tarefas para novas tarefas.
  
## Conclusão

Este projeto React TypeScript oferece uma solução de gerenciamento de tarefas abrangente com diversas funcionalidades. O uso do TypeScript adiciona tipagem estática à aplicação, aprimorando a qualidade do código. Ao aproveitar o json-server como API simulada, a persistência de dados é alcançada. Os usuários podem criar, atualizar e gerenciar tarefas com facilidade, tornando-o uma ferramenta valiosa para o gerenciamento de tarefas.

Aproveite o uso do Aplicativo de Gerenciamento de Tarefas para um eficiente gerenciamento de tarefas!
