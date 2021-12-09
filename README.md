<h1 align="center">Backend com NodeJS e Express</h1>

### Tecnologias utilizadas

![Express](https://img.shields.io/badge/-Express-333333?style=flat&logo=express&logoColor=339933) ![Typescript](https://img.shields.io/badge/-Typescript-333333?style=typescript&logo=typescript&logoColor=007396) ![Docker](https://img.shields.io/badge/-Docker-333333?style=docker&logo=docker&logoColor=007396)  ![Swagger](https://img.shields.io/badge/-Swagger-333333?style=Swagger&logo=Swagger&logoColor=#339933) ![NodeJS](https://img.shields.io/badge/-NodeJS-333333?style=flat&logo=Node.js&logoColor=339933) 


## Sweethome - aluguel de imóveis

Esse projeto consiste em uma aplicação backend para aluguéis de imóveis, uma versão bastante simplificada do que seria o Airbnb.

## Como executar localmente

Para executar localmente, você deve inicialmente ter instalado em sua máquina inicialmente o `Node` e `yarn`. Além disso, você deve ter em sua máquina o [Docker](https://www.docker.com/get-started) e o [docker-compose](https://docs.docker.com/compose/). Siga as instruções de instalação disponíveis na documentação para o seu sistema operacional.

Ao clonar o repositório, com o terminal aberto na raiz do projeto, instale as dependências do Node com **yarn**:

```
yarn install
```

Em seguida, com o docker-compose instalado, execute:

```
docker-compose up
```

Esse comando iniciará os contâiners com a aplicação e o banco de dados que serão atualizados em tempo real. Para se certificar de que deu certo, execute:

```
docker ps
```

Renomeie o arquivo `.env.example` para `.env` (as variáveis não definidas não serão necessárias, já que são para uso em produção). Por fim, para iniciar as tabelas no postgres, você deve fazer as migrações:

```
yarn typeorm migration:run
```

Após essas etapas, é esperado que a aplicação rode normalmente em sua máquina.

## Documentação

Com a aplicação em execução, você pode acessar a documentação em seu navegador abrindo-a em: http://localhost:3001/docs. Lá você encontra as rotas disponíveis e uma breve descrição de cada uma, além de poder testar cada uma delas. Lembre-se que seu banco de dados iniciará **vazio**!! 

Você também pode usar ferramentas como o [Postman]() ou o [Insomnia]() para testar as rotas, mas observe que algumas delas requer autenticação, então será necessário registrar um usuário, fazer o login e guardar o token para testá-las.

### Créditos

A estruturação de pastas e organização dos arquivos foi inspirada na trilha de Nodejs oferecida pela [Rocketseat](https://www.rocketseat.com.br/) em sua plataforma através dos cursos Ignite.