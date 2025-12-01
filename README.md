# EdgexCRM

Education-focused CRM for Admizz with a roadmap to mature into a multi-tenant SaaS product.

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Next.js 15, React 19, Tailwind CSS 4 |
| **Backend** | NestJS, Prisma, PostgreSQL |
| **Database** | Neon PostgreSQL (serverless) |
| **Monorepo** | Turborepo, pnpm |
| **Deployment** | Vercel (frontend), Render (backend) |

## Project Structure

```
edge-x-crm/
├── apps/
│   ├── web/                    # Next.js frontend (port 4000)
│   └── server/                 # NestJS backend (port 4001)
├── packages/
│   └── shared/                 # Shared TypeScript types
├── docs/                       # Documentation
├── .github/workflows/          # CI/CD
├── package.json                # Root workspace config
├── pnpm-workspace.yaml         # pnpm workspace
└── turbo.json                  # Turborepo config
```

## Quick Start

### Prerequisites

- Node.js 20+
- pnpm 9+ (`npm install -g pnpm`)

### Installation

```bash
# Clone repository
git clone https://github.com/Zunkiree-Technologies/edge-x-crm.git
cd edge-x-crm

# Install dependencies
pnpm install

# Set up environment files
cp apps/web/.env.example apps/web/.env.local
cp apps/server/.env.example apps/server/.env

# Generate Prisma client
cd apps/server && npx prisma generate && cd ../..

# Start development
pnpm dev
```

### Development URLs

- **Frontend:** http://localhost:4000
- **Backend API:** http://localhost:4001/api
- **API Docs:** http://localhost:4001/api/docs

## Scripts

```bash
# Development
pnpm dev              # Start all services
pnpm dev:web          # Start frontend only
pnpm dev:server       # Start backend only

# Build
pnpm build            # Build all
pnpm build:web        # Build frontend
pnpm build:server     # Build backend

# Quality
pnpm lint             # Run ESLint
pnpm type-check       # TypeScript check
pnpm format           # Format with Prettier
```

## Documentation

- [Full Specification](./docs/EdgexCRM_FULL_SPEC.md)
- [Roadmap](./docs/ROADMAP.md)
- [Developer Workflow](./docs/DEVELOPER_WORKFLOW.md)
- [Session Log](./docs/SESSION_LOG.md)

## Environment URLs

| Environment | Frontend | Backend |
|-------------|----------|---------|
| **Local** | localhost:4000 | localhost:4001 |
| **Dev** | TBD | TBD |
| **Production** | TBD | TBD |

## MVP Features (15-day Sprint)

- [ ] Auth & RBAC (Admin, Counsellor, Agent)
- [ ] Leads management with pipeline
- [ ] Lead to student conversion
- [ ] Contacts module
- [ ] Students & Applications
- [ ] Tasks with reminders
- [ ] Documents (S3)
- [ ] Communications (Email, SMS, WhatsApp)
- [ ] Simple workflow engine
- [ ] Dashboard with KPIs

## License

Private - ZunkireeLabs

---

Built with Turborepo, Next.js, and NestJS.
