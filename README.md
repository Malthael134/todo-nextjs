# Todo App NextJS

## Development

### 1. Environment variables

Set the environment variables:

#### PostgreSQL

```sh
POSTGRES_URL="${POSTGRES_URL}"
POSTGRES_URL_NO_SSL="${POSTGRES_URL_NO_SSL}"
POSTGRES_URL_NON_POOLING="${POSTGRES_URL_NON_POOLING}"
POSTGRES_USER="${POSTGRES_USER}"
POSTGRES_HOST="${POSTGRES_HOST}"
POSTGRES_PASSWORD="${POSTGRES_PASSWORD}"
POSTGRES_DATABASE="${POSTGRES_DATABASE}"
```

Note:
For production environments, copy from the Vercel dashboard under: `Dashboard > Storage > PSQL Database > .env.local > "Copy Snipped"`

### 2. Dev Server

Install dependencies and run the development server

```bash
# first (once)
pnpm install
# then
pnpm dev
```

### 3. View in Browser

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
