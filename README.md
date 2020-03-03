## JOKENORRIS (Feito com carinho para os amigos do GuiaBolso)

Esse é um projeto criado para demonstrar skills com React e Storybook. Siga os passos para ter a aplicação rodando em ambiente local.

**Necessário ter instalado na sua máquina:**

- Node.js 6+
- Yarn. Usamos Yarn ao invés do NPM, por se integrar melhor ao React.

Clone o repositório e no terminal execute os passos a seguir

1 - Baixe as dependências

    yarn install

2 - "Starte" o servidor :)

       yarn start

Visitando `http://localhost:3000/` no browser, você irá acessar o Jokenorris!

**UI Testing**
Usamos Storybook para fazer testes de UI na aplicação. Assim, podemos saber como os componentes que sofrem mutação se comportam com diferentes entradas de dados.
Você pode conferir e escrever novas histórias na pasta `src/stories`

**Para acessar o Storybook, utilize o comando**

    yarn storybook

Abra o browser no endereço `http://localhost:9009/` e irá acessar uma página como essa

![enter image description here](https://i.imgur.com/6MHxQ0A.png)
