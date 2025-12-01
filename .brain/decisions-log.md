# Edge-X CRM - Decisions Log

**Purpose:** Track technical and architectural decisions
**Last Updated:** December 1, 2025

---

## Decision Format

```
### [Date]: [Decision Title]
**Context:** Why this decision was needed
**Options Considered:** What alternatives were evaluated
**Decision:** What was chosen
**Rationale:** Why this option was selected
**Impact:** What this affects
**Status:** Active / Superseded / Pending
```

---

## Decisions

### December 1, 2025: Initialize Project Brain

**Context:** New CRM project starting, need AI memory system
**Options Considered:**
1. No brain system (lose context between sessions)
2. Simple notes (no structure)
3. Full Sadin-Stark brain system (proven pattern)

**Decision:** Use full Sadin-Stark hierarchical brain system

**Rationale:**
- Proven pattern from Avantra, WhatsApp, BlueShark projects
- Maintains context across sessions
- Connects to portfolio-level intelligence
- Enables pattern reuse

**Impact:**
- Project has dedicated AI instance (Edge-X-CRM-Stark)
- Connected to Global Sadin-Stark
- /sync and /memorize commands available

**Status:** Active

---

### December 1, 2025: Monorepo Structure

**Context:** Need to organize frontend (Next.js) and backend (NestJS) codebases
**Options Considered:**
1. Separate repositories (like BlueShark)
2. pnpm workspaces only
3. Turborepo + pnpm monorepo

**Decision:** Turborepo + pnpm monorepo

**Rationale:**
- Professional standard used by Netflix, Vercel, AWS, Uber
- Shared TypeScript types between frontend and backend
- Atomic commits (API + frontend in single commit)
- Single PR for features
- Better developer experience
- Free and open source

**Impact:**
- Project structure: `apps/web`, `apps/server`, `packages/shared`
- Root workspace orchestration with Turborepo
- Shared types package for type safety

**Status:** Active

---

### December 1, 2025: Deployment Platform Selection

**Context:** Need hosting for frontend, backend, and database
**Options Considered:**
1. Vercel + Render + Neon (same as BlueShark)
2. Vercel + Railway + Neon
3. All on Render

**Decision:** Vercel + Render + Neon

**Rationale:**
- Same pattern as BlueShark (proven, known workflow)
- All have free tiers
- Auto-deploy from git branches
- Neon has branch-based databases (dev/prod isolation)

**Impact:**
- Frontend: Vercel (auto-deploy from main/dev)
- Backend: Render (two services - dev and prod)
- Database: Neon PostgreSQL (two branches)

**Status:** Active

---

### December 1, 2025: Port Allocation

**Context:** Need local development ports that don't conflict with BlueShark
**Options Considered:**
1. Default ports (3000/3001) - conflicts with BlueShark
2. Custom ports (4000/4001) - no conflicts

**Decision:** Use ports 4000 (frontend) and 4001 (backend)

**Rationale:**
- BlueShark uses 3000/5000
- Allows running both projects simultaneously
- Easy to remember pattern

**Impact:**
- Frontend runs on localhost:4000
- Backend runs on localhost:4001
- Configured in package.json scripts and .env files

**Status:** Active

---

### December 1, 2025: Tech Stack Selection

**Context:** Need to finalize tech stack for MVP
**Options Considered:**
- Frontend: Next.js vs React + Vite
- Backend: NestJS vs Express.js
- Database: PostgreSQL vs MongoDB
- ORM: Prisma vs TypeORM

**Decision:** Next.js 15 + NestJS + PostgreSQL + Prisma

**Rationale:**
- Next.js 15: Latest features, excellent DX, Vercel integration
- NestJS: Modular architecture, TypeScript-first, enterprise-grade
- PostgreSQL: Relational data perfect for CRM, Neon serverless
- Prisma: Type-safe queries, excellent DX, schema-first approach

**Impact:**
- Full TypeScript stack
- Shared types between frontend/backend via packages/shared
- Database schema defined in Prisma

**Status:** Active

---

### December 1, 2025: Documentation-First Approach

**Context:** Need to prevent context loss during AI-assisted development
**Options Considered:**
1. Code first, document later
2. Documentation first, then code

**Decision:** Documentation first

**Rationale:**
- BlueShark's documentation structure prevents context loss
- Clear roadmap prevents scope creep
- Session logs enable continuity across AI sessions
- Professional practice for team collaboration

**Impact:**
- Created docs/ folder before any code
- ROADMAP.md, SESSION_LOG.md, DEVELOPER_WORKFLOW.md
- Brain system for AI context preservation

**Status:** Active

---

## Pending Decisions

- [x] ~~Tech stack selection (Frontend framework)~~ - Next.js 15
- [x] ~~Tech stack selection (Backend framework)~~ - NestJS
- [x] ~~Database choice~~ - Neon PostgreSQL
- [x] ~~Deployment strategy~~ - Vercel + Render + Neon
- [ ] Authentication approach (JWT strategy details)
- [ ] S3 bucket configuration
- [ ] SMS gateway provider (Nepal)
- [ ] WhatsApp Business API setup

---

## Decision Categories

### Architecture
- Monorepo with Turborepo + pnpm
- Modular NestJS backend
- Prisma ORM with PostgreSQL

### Tech Stack
- Next.js 15, React 19, Tailwind CSS 4
- NestJS, Prisma, PostgreSQL
- TypeScript across all packages

### Integration
- TBD: S3 for documents
- TBD: SMTP for email
- TBD: Nepal SMS gateway
- TBD: WhatsApp Cloud API

### Process
- Documentation-first development
- Three-tier environment (local/dev/prod)
- GitHub Actions CI/CD
- PR-based workflow

---

**Log all significant decisions for future reference.**
