# Todo App API

A simple todo app API built in Typescript & Nest.

## Getting Started

- Clone the repo locally
- Create an .env file following the .env.example structure
- Fill in the necessary variables in the .env file
- Type `yarn` to install dependencies
- Type `yarn start:dev` launch the server

## Endpoints

- Fetch all todos:
  - Method: `GET`
  - http://localhost:PORT/todos
- Fetch one todo:
  - Method: `GET`
  - http://localhost:PORT/todos/TODO_ID
- Add one todo:
  - Method: `POST`
  - http://localhost:PORT/todos
  - Body: { name: string }
- Toggle one todo:
  - Method: `PUT`
  - http://localhost:PORT/todos/TODO_ID
- Delete one todo:
  - Method: `DELETE`
  - http://localhost:PORT/todos/TODO_ID

## Stack

- [Nest](https://nestjs.com/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/atlas)
- [Mongoose](https://mongoosejs.com/)
- [Typescript](https://www.typescriptlang.org/)
