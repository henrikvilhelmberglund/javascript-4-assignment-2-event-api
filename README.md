# CthulhuCon API

Henrik Berglund FEND22

Ett enkelt API som använder Express.js och JSON Server!

## Kommandon

`npm run dev` - startar både Express (genom nodemon) och JSON Server med hjälp av concurrently

## Routes

GET `/api/v1/areas/`

GET `/api/v1/details/:area`

GET `/api/v1/tickets/`

POST `/api/v1/tickets/`

DELETE `/api/v1/tickets/:id`

## Structure

`server.js` - main entry point

`/controllers` - business logic

`/routes` - routing, uses callbacks inside /controllers

`/utils` - utilities that are used in /controllers for DRY
