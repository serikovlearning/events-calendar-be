# Elysia with Bun runtime

## Getting Started
To get started with this template, simply paste this command into your terminal:
```bash
bun create elysia ./elysia-example
```

## Development
To start the development server run:
```bash
bun run dev
```
Open http://localhost:3000/ with your browser to see the result.

## Migrations
1. Write or update db schema in src/infra/db/tables
2. Run
```sh
bunx drizzle-kit generate
```
3. Verify generated SQL
4. Run
```sh
bunx drizzle-kit migrate
```

