# EdgexCRM Developer Workflow

**Last Updated:** December 1, 2025
**Purpose:** Guide for local development, testing, and deployment

---

## Table of Contents
1. [Environment Overview](#environment-overview)
2. [Local Development Setup](#local-development-setup)
3. [Git Branch Strategy](#git-branch-strategy)
4. [Development Workflow](#development-workflow)
5. [Deployment](#deployment)
6. [Troubleshooting](#troubleshooting)
7. [Useful Commands](#useful-commands)

---

## Environment Overview

### Three-Tier Environment Strategy

| Environment | Frontend | Backend | Database | Git Branch |
|-------------|----------|---------|----------|------------|
| **Local** | localhost:4000 | localhost:4001 | Neon dev branch | feature/* |
| **Dev** | Vercel preview | Render dev service | Neon dev branch | `dev` |
| **Production** | Vercel prod | Render prod service | Neon main branch | `main` |

### Port Allocation (Avoid Conflicts)

| Project | Frontend | Backend |
|---------|----------|---------|
| **BlueShark** | 3000 | 5000 |
| **EdgexCRM** | 4000 | 4001 |

---

## Local Development Setup

### Prerequisites
- Node.js 20+
- pnpm 9+ (`npm install -g pnpm`)
- Git

### Initial Setup

```bash
# 1. Clone repository
git clone https://github.com/Zunkiree-Technologies/edge-x-crm.git
cd edge-x-crm

# 2. Install dependencies
pnpm install

# 3. Set up environment files
# Copy .env.example files and configure

# Frontend (apps/web/.env.local)
cp apps/web/.env.example apps/web/.env.local

# Backend (apps/server/.env)
cp apps/server/.env.example apps/server/.env

# 4. Set up database (first time only)
cd apps/server
npx prisma db push
npx prisma generate

# 5. Seed admin user (first time only)
npx ts-node prisma/seed.ts
```

### Running Locally

```bash
# Start both frontend and backend
pnpm dev

# Or run separately in different terminals:
# Terminal 1: Frontend
pnpm dev:web

# Terminal 2: Backend
pnpm dev:server
```

### Local URLs
- **Frontend:** http://localhost:4000
- **Backend API:** http://localhost:4001/api
- **API Docs:** http://localhost:4001/api/docs (Swagger)

### Default Login
```
Email: admin@admizz.com
Password: Admin@123
```

---

## Git Branch Strategy

### Branch Structure

```
main (production)
  └── dev (development/staging)
       └── feature/xxx (your feature branches)
```

### Branch Rules

| Branch | Purpose | Deploy To | Protected |
|--------|---------|-----------|-----------|
| `main` | Production code | Vercel prod + Render prod | Yes |
| `dev` | Development/staging | Vercel preview + Render dev | Yes |
| `feature/*` | Feature development | Local only | No |
| `fix/*` | Bug fixes | Local only | No |

### Naming Conventions

```bash
# Features
feature/auth-module
feature/leads-crud
feature/dashboard-kpis

# Bug fixes
fix/login-redirect
fix/api-validation

# Hotfixes (production emergencies)
hotfix/critical-security-issue
```

---

## Development Workflow

### Standard Feature Workflow

```bash
# 1. Start from dev branch
git checkout dev
git pull origin dev

# 2. Create feature branch
git checkout -b feature/my-feature

# 3. Make changes and test locally
pnpm dev
# ... write code, test ...

# 4. Run linting and type checks
pnpm lint
pnpm type-check

# 5. Commit changes
git add .
git commit -m "feat: add my feature"

# 6. Push to GitHub
git push origin feature/my-feature

# 7. Create Pull Request to dev branch
# - Go to GitHub
# - Create PR from feature/my-feature -> dev
# - Wait for CI checks to pass
# - Get code review
# - Merge

# 8. Delete feature branch (optional)
git checkout dev
git pull origin dev
git branch -d feature/my-feature
```

### Commit Message Convention

Use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Format
<type>(<scope>): <description>

# Types
feat:     New feature
fix:      Bug fix
docs:     Documentation only
style:    Formatting, no code change
refactor: Code change that neither fixes nor adds
test:     Adding tests
chore:    Maintenance tasks

# Examples
feat(auth): add JWT refresh token
fix(leads): correct validation on create
docs: update API documentation
refactor(database): optimize queries
```

### Pull Request Checklist

Before merging PR:
- [ ] Tests pass locally
- [ ] Linting passes
- [ ] TypeScript has no errors
- [ ] PR description explains changes
- [ ] Related issue linked (if applicable)
- [ ] Migration required? (document in PR)
- [ ] Environment variables added? (document in PR)

---

## Deployment

### Automatic Deployments

| Trigger | Frontend | Backend |
|---------|----------|---------|
| Push to `dev` | Vercel preview deploy | Render dev deploy |
| Push to `main` | Vercel production deploy | Render production deploy |
| PR to dev/main | Vercel preview (PR URL) | N/A |

### Manual Deployment Steps

#### Deploy to Development
```bash
# Merge your PR to dev branch
# Vercel and Render auto-deploy

# Verify deployments:
# - Frontend: Check Vercel dashboard
# - Backend: Check Render dashboard
```

#### Deploy to Production
```bash
# 1. Create PR from dev to main
# 2. Review all changes
# 3. Merge PR
# 4. Vercel and Render auto-deploy

# Verify:
# - Frontend: Check production URL
# - Backend: Check production API
```

### Database Migrations

```bash
# Development database
cd apps/server
npx prisma db push   # Push schema changes
npx prisma generate  # Regenerate client

# Production database (be careful!)
# 1. Test migration on dev first
# 2. Create migration file
npx prisma migrate dev --name your_migration_name

# 3. Apply to production
npx prisma migrate deploy
```

---

## Troubleshooting

### Common Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| Port 4000 in use | Another process | `npx kill-port 4000` or change port |
| Port 4001 in use | Another process | `npx kill-port 4001` or change port |
| pnpm install fails | Dependency conflict | `pnpm install --force` |
| Prisma client errors | Schema out of sync | `npx prisma generate` |
| Database connection fails | Neon suspended | Wait 5-10 seconds, retry |
| TypeScript errors | Missing types | Check imports, run `pnpm type-check` |

### Database Issues

```bash
# Reset local database (dev)
cd apps/server
npx prisma db push --force-reset
npx ts-node prisma/seed.ts

# View database in GUI
npx prisma studio
```

### Build Issues

```bash
# Clear all caches
pnpm clean
rm -rf node_modules
rm -rf apps/web/.next
rm -rf apps/server/dist
pnpm install
```

---

## Useful Commands

### Development

```bash
# Start all services
pnpm dev

# Start specific service
pnpm dev:web     # Frontend only
pnpm dev:server  # Backend only

# Linting
pnpm lint        # All packages
pnpm lint:web    # Frontend only
pnpm lint:server # Backend only

# Type checking
pnpm type-check

# Build
pnpm build       # All packages
pnpm build:web   # Frontend only
pnpm build:server # Backend only
```

### Database (Prisma)

```bash
cd apps/server

# Push schema to database
npx prisma db push

# Generate Prisma client
npx prisma generate

# Open database GUI
npx prisma studio

# Create migration
npx prisma migrate dev --name migration_name

# Apply migrations (production)
npx prisma migrate deploy

# Format schema
npx prisma format
```

### Git

```bash
# View branches
git branch -a

# Switch to branch
git checkout dev

# Create and switch
git checkout -b feature/my-feature

# Update from remote
git fetch origin
git pull origin dev

# Rebase feature branch
git checkout feature/my-feature
git rebase dev
```

---

## Environment Variables

### Frontend (apps/web/.env.local)

```env
# API URL
NEXT_PUBLIC_API_URL=http://localhost:4001/api

# Other frontend configs
NEXT_PUBLIC_APP_NAME=EdgexCRM
```

### Backend (apps/server/.env)

```env
# Database
DATABASE_URL=postgresql://user:pass@host/db?sslmode=require

# Auth
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d

# Server
PORT=4001
NODE_ENV=development

# AWS S3
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_S3_BUCKET=
AWS_S3_REGION=

# Email
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=

# SMS
SMS_GATEWAY_URL=
SMS_API_KEY=

# WhatsApp
WHATSAPP_PHONE_NUMBER_ID=
WHATSAPP_ACCESS_TOKEN=
```

---

## Quick Reference

### Daily Workflow
1. `git checkout dev && git pull`
2. `git checkout -b feature/my-feature`
3. `pnpm dev` - start development
4. Make changes, test locally
5. `pnpm lint && pnpm type-check`
6. `git commit -m "feat: description"`
7. `git push origin feature/my-feature`
8. Create PR on GitHub

### Before PR
- [ ] `pnpm lint` passes
- [ ] `pnpm type-check` passes
- [ ] `pnpm build` succeeds
- [ ] Tested manually on localhost

### After Merge to Dev
- Check Vercel preview deployment
- Check Render dev deployment
- Test on dev URLs

### After Merge to Main
- Check production deployment
- Verify production works
- Monitor for errors

---

*Keep this document updated as the workflow evolves.*
