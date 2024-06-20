# Todo App NextJS

## Development

### 1. Environment variables configuration

Set the environment variables in [`/.env`](/.env).

Get more info about environment variables in the [`.env.example`](.env.example) file.

```sh
# get started quickly, by running:
cat .env.example > .env
```

### 2. Start the application

Run the application using [**Docker**](https://docker.com) and [**NodeJS**](https://nodejs.org).

```sh
############
# Database #
############

# start the database and adminer
docker compose -f compose.dev.yaml up -d --build

##########
# NextJS #
##########

# install app dependencies
pnpm install
# run the app
```

### 3. View app in Browser

**app:**

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app running (hopefully).

**adminer:**

[`Adminer`](https://www.adminer.org) will be running and should accessable on [`http://localhost:8080`](http://localhost:8080).

Get Login credentials in [`/.env.development`](/.env.development). With example configuration you can just open [`http://localhost:8080/?pgsql=db&username=admin&db=main&ns=public`](http://localhost:8080/?pgsql=db&username=admin&db=main&ns=public)
