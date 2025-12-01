# EdgexCRM Development Roadmap

**Project:** EdgexCRM - Education-focused CRM
**Client:** Admizz
**Repository:** TBD (Zunkiree-Technologies/edge-x-crm)
**Last Updated:** December 1, 2025

---

## Vision

Build a modular, education-focused CRM for Admizz with a roadmap to mature into a multi-tenant SaaS product. The immediate priority is to deliver Phase 1 MVP in 15 days with a strict scope to avoid scope creep.

---

## Current Status Overview

| Component | Status | URL/Location |
|-----------|--------|--------------|
| **Frontend (Prod)** | Not Started | TBD |
| **Frontend (Dev)** | Not Started | TBD |
| **Backend (Prod)** | Not Started | TBD |
| **Backend (Dev)** | Not Started | TBD |
| **Database (Prod)** | Not Started | Neon production branch |
| **Database (Dev)** | Not Started | Neon development branch |
| **CI/CD** | Not Started | GitHub Actions |
| **Documentation** | In Progress | This folder |

---

## Roadmap Phases

### Phase 0: Infrastructure Setup (Day 0) - IN PROGRESS

**Goal:** Set up professional development environment before coding

#### 0.1 Documentation
- [x] Create docs/ folder structure
- [x] Create README.md (documentation index)
- [x] Create ROADMAP.md (this file)
- [ ] Create SESSION_LOG.md (session tracking)
- [ ] Create DEVELOPER_WORKFLOW.md (dev guide)

#### 0.2 Repository Setup
- [ ] Initialize monorepo (Turborepo + pnpm)
- [ ] Create root package.json
- [ ] Create pnpm-workspace.yaml
- [ ] Create turbo.json
- [ ] Create .gitignore and .vercelignore
- [ ] Create .env.example templates

#### 0.3 Project Scaffolding
- [ ] Scaffold Next.js 15 frontend (apps/web)
- [ ] Scaffold NestJS backend (apps/server)
- [ ] Create shared types package (packages/shared)

#### 0.4 CI/CD Pipeline
- [ ] Create GitHub Actions workflow
- [ ] Configure lint and build checks
- [ ] Set up TypeScript checking

#### 0.5 Database Setup
- [ ] Create Neon project: `edgexcrm`
- [ ] Create `main` branch (production)
- [ ] Create `dev` branch (development)

#### 0.6 Deployment Setup
- [ ] Deploy frontend to Vercel
- [ ] Deploy backend to Render (dev + prod)
- [ ] Configure environment variables

**Deliverables:**
- Monorepo with frontend + backend scaffolds
- CI/CD pipeline running
- Dev and prod environments configured
- Documentation complete

---

### Phase 1: MVP Development (Days 1-15) @MVP

**Goal:** Deliver core CRM functionality for Admizz

#### Day 1: Skeleton & Auth
- [ ] Backend: Auth module (JWT + RBAC)
- [ ] Backend: Database connection + Prisma setup
- [ ] Frontend: Login page
- [ ] Frontend: Auth context + protected routes
- **Deliverable:** Login API + login page working

#### Day 2: Users & Roles
- [ ] Backend: User CRUD (Admin only)
- [ ] Backend: Role assignment endpoints
- [ ] Frontend: Admin users page
- [ ] Frontend: User management UI
- **Deliverable:** User management working

#### Day 3: Contacts
- [ ] Backend: Contacts CRUD API
- [ ] Backend: Contact types (Student, Parent, Partner, Friend)
- [ ] Frontend: Contacts list page
- [ ] Frontend: Create/edit contact modal
- **Deliverable:** Contacts module complete

#### Day 4: Leads Core
- [ ] Backend: Leads CRUD API
- [ ] Backend: Lead notes functionality
- [ ] Frontend: Leads list page
- [ ] Frontend: Create lead modal
- **Deliverable:** Basic leads working

#### Day 5: Lead Pipeline & Convert
- [ ] Backend: Lead pipeline stages
- [ ] Backend: Lead to student conversion endpoint
- [ ] Frontend: Pipeline/kanban view (basic)
- [ ] Frontend: Convert lead flow
- **Deliverable:** Lead conversion working

#### Day 6: Students & Applications
- [ ] Backend: Students CRUD API
- [ ] Backend: Applications under student
- [ ] Frontend: Student profile page
- [ ] Frontend: Applications list
- **Deliverable:** Student management working

#### Day 7: Documents (S3)
- [ ] Backend: Pre-signed upload URL endpoint
- [ ] Backend: Document metadata storage
- [ ] Frontend: Upload component
- [ ] Frontend: Document attachment to student/lead
- **Deliverable:** Document uploads working

#### Day 8: Tasks
- [ ] Backend: Task CRUD API
- [ ] Backend: Task assignment + due dates
- [ ] Backend: Reminder cron job (stub)
- [ ] Frontend: Task list page
- [ ] Frontend: Create task modal
- **Deliverable:** Task management working

#### Day 9: Simple Workflow Engine
- [ ] Backend: Workflow JSON parser
- [ ] Backend: Trigger -> action execution
- [ ] Backend: Example: lead.status -> create task + send email
- [ ] Frontend: Workflow list (admin view)
- **Deliverable:** Basic workflows working

#### Day 10: Communications (Email)
- [ ] Backend: SMTP integration
- [ ] Backend: Email templates (handlebars)
- [ ] Backend: Communication logging
- [ ] Frontend: Compose email modal
- **Deliverable:** Email sending working

#### Day 11: Communications (SMS)
- [ ] Backend: Nepal SMS gateway integration
- [ ] Backend: SMS sending endpoint
- [ ] Frontend: Send SMS modal
- **Deliverable:** SMS sending working

#### Day 12: Communications (WhatsApp)
- [ ] Backend: WhatsApp Cloud API integration
- [ ] Backend: Template message sending
- [ ] Frontend: Send WhatsApp modal
- **Deliverable:** WhatsApp working

#### Day 13: Dashboard & KPIs
- [ ] Backend: KPI aggregation endpoints
- [ ] Backend: Dashboard data API
- [ ] Frontend: Dashboard with KPI cards
- [ ] Frontend: Basic chart (leads/week)
- **Deliverable:** Dashboard complete

#### Day 14: QA & Polish
- [ ] Fix bugs from QA
- [ ] Improve error messages
- [ ] Verify RBAC is correct
- [ ] Accessibility checks
- [ ] Performance review
- **Deliverable:** Polished application

#### Day 15: Deployment & Handover
- [ ] Final deployment to production
- [ ] Create handover documentation
- [ ] Training slides
- [ ] Demo session with Admizz
- **Deliverable:** Production live + handover complete

---

### Phase 2: Advanced Features (Months 2-4) @PHASE2

**Goal:** Add advanced features requested by Admizz

- [ ] Visual workflow builder (drag-drop)
- [ ] Advanced analytics & reports
- [ ] Calendar & scheduling
- [ ] Compliance checklists
- [ ] Quotation module
- [ ] Multi-branch support
- [ ] Document versioning

---

### Phase 3: Extended Features (Months 4-6) @PHASE2

**Goal:** Complete feature set

- [ ] Client portal
- [ ] Invoices & payments
- [ ] Third-party integrations
- [ ] Advanced reports
- [ ] E-signatures

---

### SaaS Version (Future) @SAAS

**Goal:** Multi-tenant SaaS platform

- [ ] Multi-tenancy architecture
- [ ] Subscription management (Stripe)
- [ ] Feature flags per plan
- [ ] Tenant onboarding wizard
- [ ] Usage billing for WhatsApp/SMS
- [ ] Partner PRM
- [ ] AI features

---

## Environment URLs

| Environment | Frontend | Backend | Database | Git Branch |
|-------------|----------|---------|----------|------------|
| **Production** | TBD | TBD | Neon main | `main` |
| **Development** | TBD | TBD | Neon dev | `dev` |
| **Local** | localhost:4000 | localhost:4001 | Neon dev | feature/* |

---

## Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Frontend** | Next.js 15 | React framework |
| **Styling** | Tailwind CSS 4 | UI styling |
| **Backend** | NestJS | Modular API framework |
| **ORM** | Prisma | Database access |
| **Database** | PostgreSQL (Neon) | Serverless database |
| **Frontend Hosting** | Vercel | Auto-deploy, CDN |
| **Backend Hosting** | Render | Node.js hosting |
| **Monorepo** | Turborepo + pnpm | Build orchestration |
| **CI/CD** | GitHub Actions | Automated checks |

---

## Key Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2025-12-01 | Use Turborepo + pnpm monorepo | Professional standard, shared types, atomic commits |
| 2025-12-01 | Vercel + Render + Neon | Same as BlueShark, proven pattern, free tiers |
| 2025-12-01 | Ports 4000/4001 for local | Avoid conflict with BlueShark (3000/5000) |
| 2025-12-01 | Two environments (dev/prod) | Simple, sufficient for current team size |
| 2025-12-01 | 15-day MVP scope | Locked to prevent scope creep |

---

## Team & Contacts

| Role | Name | Responsibilities |
|------|------|------------------|
| Tech Lead | Sadin | Full-stack development, architecture |
| AI Assistant | Edge-X-CRM-Stark (Claude) | Development support, documentation |

---

## Quick Links

- **Specification:** [`docs/EdgexCRM_FULL_SPEC.md`](./EdgexCRM_FULL_SPEC.md)
- **Session Log:** [`docs/SESSION_LOG.md`](./SESSION_LOG.md)
- **Developer Guide:** [`docs/DEVELOPER_WORKFLOW.md`](./DEVELOPER_WORKFLOW.md)

---

## How to Update This Roadmap

1. When starting a new phase, change status from `[ ]` to `[x]`
2. Add completion notes and dates
3. Update "Current Status Overview" table
4. Update "Last Updated" date at top
5. Log major decisions in "Key Decisions Log"

---

*This roadmap is a living document. Update it as the project evolves.*
