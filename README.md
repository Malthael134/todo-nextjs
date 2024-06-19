# Todo App NextJS

## Development

### 1. Environment variables configuration

Set the environment variables in [`/.env.development`](/.env.development):

```sh
# get started quickly, by running:
cat .env.example > .env.development
```

Get more info about environment variables in the [`.env.example`](.env.example) file.

### 2. View app in Browser

**app:**

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app running (hopefully).

**adminer:**

[`Adminer`](https://www.adminer.org) will be running and should accessable on [`http://localhost:8080`](http://localhost:8080).

Get Login credentials in [`/.env.development`](/.env.development). With example configuration you can just open [`http://localhost:8080/?pgsql=db&username=admin&db=main&ns=public`](http://localhost:8080/?pgsql=db&username=admin&db=main&ns=public)
