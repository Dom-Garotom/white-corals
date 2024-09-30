# Sistema de Controle de Inscrições para Evento Científico

Este projeto foi desenvolvido utilizando **Next.js** e tem como objetivo criar um sistema de controle de inscrições para um evento científico sobre o tema "Branqueamento de Corais". O sistema permite que usuários se inscrevam no evento, publiquem artigos científicos, e que administradores acompanhem o número de inscrições e artigos submetidos.

## Tecnologias Utilizadas

- **Next.js**: Framework React que permite renderização híbrida e fácil roteamento de páginas.
- **Axios**: Biblioteca usada para consumo de APIs e integração de dados.
- **Styled Components**: Utilizado para a criação de componentes estilizados com CSS-in-JS, garantindo escopo de estilo e facilidade na manutenção de design.
- **Cookies e Local Storage**: Gerenciamento de sessões de usuários e persistência de informações.
  
## Funcionalidades

1. **Sistema de Inscrições**: Usuários podem se inscrever para o evento através do formulário de cadastro.
2. **Publicação de Artigos**: Após o registro, usuários podem submeter artigos relacionados ao evento.
3. **Painel Administrativo**: Administradores podem visualizar a quantidade de inscritos e de artigos submetidos.

## Autenticação

O sistema conta com autenticação de usuários, permitindo login e acesso a áreas restritas. A autenticação utiliza cookies e armazenamento no Local Storage para persistir as informações da sessão do usuário.
