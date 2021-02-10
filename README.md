<h1 align="center">Pomodoro</h1>
<p align="center">
<a href="#bulb-projeto">Projeto</a>
|
<a href="#tomato-técnica">Técnica</a>
|
<a href="#pushpin-características">Características</a>
|
<a href="#computer-tecnologias">Tecnologias</a>
|
<a href="#rocket-execução">Execução</a>
</p>

## :bulb: Projeto

Este projeto se baseia na implementação da Técnica Pomodoro em um sistema de interface interativa com o usuário que visa ampliar a produtividade e a disciplina em um contexto de produção pessoal. Nesse sentido, o software reunirá as tecnologias e ferramentas necessárias para a consolidação do que a técnica propõe, resultando em um software completo, de fácil uso, eficaz e único.

## :tomato: Técnica

<p align="center">
  <img src="https://user-images.githubusercontent.com/26419930/95530384-1d950200-09b4-11eb-978a-12fc4acfea5b.png" alt="Cronômetro Pomodoro"/>
</p>
<p align="center">
  <a href="https://dribbble.com/shots/11457916-Kitchen-timer">Kitchen timer por Ivan Dubovik no Dribbble</a>
</p>

A **Técnica Pomodoro** é um método de gerenciamento de tempo desenvolvido por Francesco Cirillo no final dos anos 1980. Ela consiste na utilização de um cronômetro para dividir o trabalho em períodos de 25 minutos, separados por breves intervalos e deriva seu nome da palavra italiana pomodoro (tomate), como referência ao popular cronômetro gastronômico na forma dessa fruta.

### Passo-a-passo para a Técnica Pomodoro

1. Escolher e listar as tarefas a serem executadas.
1. Ajustar o cronômetro para o tempo desejado.
1. Escolher a tarefa inicial.
1. Trabalhar na tarefa escolhida até que o alarme toque.
1. Quando o alarme tocar, contabilizar a quantidade de intervalos.
1. Se houver menos de 4 marcações, fazer uma pausa curta.
1. Depois da quarta marcação, fazer uma pausa mais longa.

## :pushpin: Características

- A interface do usuário pode ser visualizada no [Figma](https://www.figma.com/proto/S570npN0COoOUTQjL0nqC0/Pomodoro?node-id=33%3A3&scaling=scale-down-width&hide-ui=1).

## :computer: Tecnologias

A stack utilizada para criar o Pomodoro está em constante atualização. Até o presente momento, as seguintes tecnologias foram escolhidas:

- [ ] [Bootstrap (v4.5.3)](https://getbootstrap.com/)
- [ ] [Node.js (v12.19.0 LTS)](https://nodejs.org/pt-br)
- [ ] [React.js (v17.0.1)](https://reactjs.org)
- [ ] [Typescript (v4.0)](https://www.typescriptlang.org)
- [ ] [Redux (v4.0.5)](https://redux.js.org/)
- [ ] [React Redux (v7.2.2)](https://react-redux.js.org/)

## :rocket: Execução

- ### **Pré-requisitos**

  - É necessário ter instalado em sua máquina o **[Node.js](https://nodejs.org/en/)**. A versão **12.19.0** é recomendada.
  - É **necessário** ter o **[Git](https://git-scm.com/)** (v2.29.0 for Windows) instalado e configurado no computador.
  - Para a configuração e instalação usaremos um gerenciador de pacotes. Recomendamos o uso do **[Yarn](https://yarnpkg.com/)** (v1.22.5).
  - É indispensável criar um projeto do **[Firebase](https://firebase.google.com/docs/web/setup)** para adicioná-lo ao Pomodoro.

1. Clone o repositório

```sh
  $ git clone https://github.com/abigailarruda/pomodoro.git
```

2. Crie um projeto do Firebase, de acordo com este [guia](https://firebase.google.com/docs/web/setup). Copie o objeto de configuração do seu projeto, conforme o exemplo abaixo e cole no arquivo `server.ts`, no diretório `pomodoro\web\src\server`.

```sh
var firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID",
};
```

3. Execute a aplicação (na ordem a seguir)

```sh
  $ cd web
  $ yarn
  $ yarn start
```

---

> Este projeto foi desenvolvido para a disciplina Construção de Software no curso de Engenharia de Software da Universidade Federal de Goiás.

> Os alunos que contribuíram para este repositório foram: [Abigail Arruda](https://github.com/abigailarruda), [Heitor Melo](https://github.com/heitormelo26), [Jacob Ferraz](https://github.com/JacobFerraz), [Lucas Borges](https://github.com/luqiborges) e [Victor Melo](https://github.com/victormlb06).
