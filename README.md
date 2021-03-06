# Task

The repository stores solution for Insured Mine Assignment

- `server` - Backend made with NodeJS + Express + MongoDB + Mongoose

## Starting the development environment

1. Install [Docker](https://www.docker.com/get-started) on your system.
2. Clone the Repo
3. cd into Root Dir
4. Run `docker-compose up --build` from the terminal
5. Run `docker-compose down` to tear down
6. Go to `www.localhost:8000` for accesing the backend

## Running tests

- Using JEST for Testing

### Backend tests

```shell
docker-compose run server /bin/sh -c "npm run test:unit"

```

## Coding Standards

> REQUIRED:
> prettier and eslint to be activated in the EDITOR of your choice

# To Upload the CSV File

- POST localhost:8000/api/users/upload
- Make sure to pass the csv file as form-data
- key : csv , value : data-sheet.csv

## Other Routes

- Create User
  - /api/users
- Account
  - api/accounts
- Policy
  - api/policies
- Carrier
  - api/carriers
- LOB
  - api/lobs
- Agent
  - api/agents

## Logs

- Using Wintson for Logging into File
- logging error level logs to error.log
- logging all logs into combined.log file
