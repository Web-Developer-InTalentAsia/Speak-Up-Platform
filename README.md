# Speak Up Platform

npm-workspaces foundation with Next.js App Router, TypeScript and Tailwind CSS portals, an Express TypeScript API, and PostgreSQL/Prisma infrastructure. Redis is provisioned for future use.

## Requirements

- Node.js 22 LTS or later and npm 10 or later.
- Docker Desktop with Compose for local PostgreSQL and Redis.
- Use npm only. On Windows PowerShell, use `npm.cmd` if execution policy blocks `npm.ps1`.

## Setup

```powershell
npm.cmd install
Copy-Item apps/api/.env.example apps/api/.env
Copy-Item apps/reporter/.env.example apps/reporter/.env.local
Copy-Item apps/admin/.env.example apps/admin/.env.local
docker compose up -d
npm.cmd run db:generate
npm.cmd run dev
```

Do not overwrite existing environment files. The root [.env.example](./.env.example) is a reference; the API loads its own `.env`, and Next.js loads each portal's `.env.local`. Local database credentials are development-only.

| Application                   | URL                              |
| ----------------------------- | -------------------------------- |
| [Reporter](./apps/reporter)   | http://localhost:3000            |
| [Administrator](./apps/admin) | http://localhost:3001            |
| [API health](./apps/api)      | http://localhost:4000/api/health |

The health endpoint returns `{"status":"ok","service":"speak-up-api"}`. It checks API liveness, not database or Redis connectivity. The portals and health endpoint can run without Docker.

Individual development commands: `npm run dev:reporter`, `npm run dev:admin`, `npm run dev:api` from the repository root. The shared package is built automatically before development; after changing shared source, rebuild it with `npm run build --workspace=@speak-up/shared`.

## Checks and production builds

```sh
npm run check
npm run build
```

`check` runs Prettier formatting checks and workspace TypeScript checks. `npm run format` formats source. Build explicitly compiles the shared package before its consumers. After building, use `npm run start --workspace=@speak-up/reporter`, `npm run start --workspace=@speak-up/admin`, and `npm run start --workspace=@speak-up/api` in separate terminals. Use Ctrl+C to stop servers.

## Database and scope

[Prisma schema](./apps/api/prisma/schema.prisma) configures PostgreSQL. No report or authentication models, migrations, submission endpoints, or real sign-in are implemented. `npm run db:push` is provided for future schema changes, but there is currently no application data schema to push. Prisma and Redis are not connected to request handlers yet.

`docker compose ps` checks services; `docker compose stop` stops them while preserving named-volume data. PostgreSQL uses port 5432 and Redis uses 6379, bound to localhost.

The welcome page and sign-in screen are presentation-only. Do not enter sensitive information. Reporting and authentication must be implemented before real use.
