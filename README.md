<h1 align="center">
  <img alt="Gympoint" title="AdonisJS" src="https://scontent.fcgh28-1.fna.fbcdn.net/v/t1.0-9/87034116_2639155672980062_3950721505402290176_n.jpg?_nc_cat=109&_nc_ohc=HjA8w7rueAkAX-Ed6ER&_nc_ht=scontent.fcgh28-1.fna&oh=1ce9ff51fb85c4de894ef8319b480962&oe=5F00B2F7" width="200px" />
</h1>

<h3 align="center">
  Projects, Tasks and User management with AdonisJS
</h3>

<p align="center">This repository contains the back-end of a software to manage projects, it's tasks and users.</p>

## Features
The main features are detailed below:

1. JWT Authentication
2. Password Recovery / Password Reset
4. File upload
5. Project CRUD
6. Task CRUD
7. User CRUD
8. User addresses CRUD
9. Schema validation
10. Internationalization
11. Mailing notification services
12. Projects pagination

### Technologies
Technologies used to develop the features mentioned above.

- AdonisJS
- ESLint for code linting
- NPM / Yarn as package managers
- Validator
- Docker
- PostgreSQL to store projects, users, user addresses and file paths
- Migrations for database versioning
- Redis and Kue to manage mailing notification jobs
- Sentry integration to check the application health on production environment
- Transactions

## Setup
After cloning the repository, it is mandatory to install all the dependencies this software needs. You can choose your favorite package manager: Yarn or NPM.
If you're a yarn user:
```bash
yarn install
```
Or it NPM fits better for your, just run the command:
```bash
npm install
```
Once you have all the dependencies installed, run the migrations to startup your PostgreSQL database.
```js
adonis migration:run
```
