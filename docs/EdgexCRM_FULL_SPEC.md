# EdgexCRM_FULL_SPEC.md

# EdgexCRM — Full Specification (MVP + Phase 2 + SaaS Vision)
**Owner:** ZunkireeLabs / Sadin Shrestha  
**Client (initial):** Admizz  
**MVP Deadline:** 15 days (Phase 1, locked)  
**Purpose:** Clear, developer-ready specification for Claude Code and developers to implement the EdgexCRM MVP and to understand future phases. This single-file spec is intentionally structured with clear `@MVP`, `@PHASE2`, and `@SAAS` tags so Claude or any dev agent can follow instructions precisely.

---

## Table of Contents
1. Executive Summary
2. How to Use This File (Claude rules)
3. High-level Roadmap (MVP / Phase2 / SaaS)
4. MVP Scope (Locked) — @MVP
5. 15-Day Execution Plan (Day-by-day) — @MVP
6. Architecture (MVP + Future-ready)
7. Database Schema (Core) — @MVP
8. API Contracts (MVP endpoints) — @MVP
9. Frontend & Backend Folder Structure
10. UI / Navigation Model (MVP + Phase2)
11. UX Improvements & Competitive Differentiation (from Agentcis)
12. Text Wireframes (copyable to Figma) — annotated with phase tags
13. Workflows & Automation (JSON examples) — @MVP & @PHASE2
14. Communications Integration (Email/SMS/WhatsApp) — @MVP
15. Documents & Storage (S3) — @MVP
16. Testing, QA, and Acceptance Criteria — @MVP
17. CI/CD & Deployment Notes (Blueshark adapt) — @MVP
18. Coding Conventions & PR Templates
19. Feature Mapping Matrix (Agentcis vs EdgexCRM)
20. Phase 2 & SaaS Vision (detailed blueprints) — @PHASE2 / @SAAS
21. UX Principles & Design Tokens
22. Appendix: Claude Execution Templates (PR, Issue, Commands)
23. Appendix: Example Configs (.env samples)
24. CHANGELOG / VERSION NOTES

---

# 1. Executive Summary
EdgexCRM is a modular, education-focused CRM built for Admizz with a roadmap to mature into a multi-tenant SaaS product. The immediate priority is to deliver Phase 1 MVP in 15 days with a strict scope to avoid scope creep. The architecture and documentation must be future-proofed so Phase 2 and SaaS conversion are seamless.

Key Principles:
- Deliver MVP fast and stable.
- Make architecture modular and extensible.
- Keep UI minimal, modern, and intuitive.
- Do not build Phase 2 features during MVP — only scaffold where safe.
- Use `@MVP`, `@PHASE2`, and `@SAAS` tags throughout.

---

# 2. How to Use This File (Claude rules)
- **PRIMARY RULE:** Build only items marked `@MVP`. Anything marked `@PHASE2` or `@SAAS` is NOT to be implemented in the MVP sprint.
- **PR Workflow:** Each PR must include the section `Claude-Actions:` listing generated tasks the agent performed.
- **Scaffolding Rule:** It is acceptable to scaffold folders/modules for future features (empty files with TODOs) but do NOT implement behavior or DB columns for non-MVP features.
- **Tagging Convention:** Use tags in code comments and migrations:
  - `// @MVP` — implement now
  - `// @PHASE2` — do not implement now; placeholder only
  - `// @SAAS` — reserved for future multi-tenant changes
- **Testing Rule:** Implement unit tests for all MVP business logic. Integration tests for core flows (auth, lead->student conversion, document upload, communications).
- **Delivery Rule:** At end of each day, create a short "daily summary" commit with `daily-summary.md` describing progress and blockers.

---

# 3. High-level Roadmap (short)
- **Phase 1 (Days 1–15) @MVP**: Core CRM (Leads, Students, Contacts, Tasks, Documents, Dashboard, Email/SMS/WhatsApp integration, Auth & Roles).
- **Phase 2 (Months 2–4) @PHASE2**: Workflow visual builder, advanced analytics, calendar & scheduling, compliance checklists, quotation module, multi-branch support.
- **Phase 3 (Months 4–6) @PHASE2**: Client portal, invoices & payments, third-party integrations, advanced reports.
- **SaaS Version (post-MVP) @SAAS**: Multi-tenancy, subscription management, pricing tiers, partner PRM, AI features.

---

# 4. MVP Scope (Locked) — @MVP
**Implement now (no exceptions):**
- Auth & RBAC (Admin, Counsellor, Agent)
- Leads module (capture, list, pipeline, assignment, lead->student conversion)
- Contacts module (Students, Parents, Partners, Friends)
- Student & Application basic tracking
- Tasks module (create, assign, complete, reminders)
- Simple workflow engine (trigger → action, JSON-based, hardcoded triggers)
- Documents module: S3 signed uploads, attach to lead/student/application
- Communications: SMTP (email), SMS gateway (Nepal), WhatsApp Cloud API (send only)
- Dashboard: static KPIs (Total leads, Active students, Open tasks, Overdue)
- Frontend: Next.js pages for each MVP module
- Backend: NestJS modular services, PostgreSQL
- Testing: Unit tests + integration tests for core flows
- Deployment: staging + production basics

**Do NOT implement in MVP:**
- Drag-drop workflow builder, document versioning, client portal, invoices & payments, multi-tenant features, advanced reporting, AI features, classroom module.

---

# 5. 15-Day Execution Plan (Day-by-day) — @MVP
**Note:** Each day's deliverable should be a merged PR with tests and a sample dataset.

**Day 0 (Prep):**
- Repo creation: monorepo (pnpm workspaces or turborepo)
- Add basic README, CODEOWNERS, issue templates, PR templates
- Set up CI skeleton (lint & basic tests)

**Day 1 — Skeleton & Auth**
- Create backend scaffold (NestJS) and frontend scaffold (Next.js)
- Setup DB connection & migration tool (Prisma recommended; TypeORM acceptable)
- Implement Auth (JWT) + simple RBAC guards
- Deliverable: login API + login page

**Day 2 — Users & Roles**
- User management endpoints (Admin only): create user, list users, role assign
- Frontend: Admin Users page

**Day 3 — Contacts**
- Contacts CRUD API + DB
- Frontend: Contacts list & create
- Link contacts to leads/students

**Day 4 — Leads core**
- Leads table & API (create, list, update, assign)
- Frontend: Leads list + create modal
- Lead notes

**Day 5 — Lead pipeline & convert**
- Kanban-lite pipeline (drag/drop optional; can be simple stage change)
- Endpoint: POST /leads/:id/convert -> create student
- Frontend: convert flow

**Day 6 — Students & Applications**
- Students CRUD + profile page
- Applications list under student (basic add)
- Carry lead data into student

**Day 7 — Documents (S3)**
- Pre-signed upload URL endpoint
- Confirm upload endpoint
- Frontend: upload UI & attach to student/lead

**Day 8 — Tasks**
- Task CRUD, assign, due_date, status
- Task list & create UI
- Reminders (backend scheduled job stub — simple cron daily check to send reminders)

**Day 9 — Simple Workflow Engine**
- JSON-driven triggers/actions
- Implement example: when lead.status => 'FOLLOWUP' => create task + send email
- Admin UI to toggle workflows (basic list)

**Day 10 — Communications (Email)**
- SMTP integration & endpoint /communications/email
- Logging communications
- UI: compose modal on lead/student

**Day 11 — Communications (SMS)**
- SMS gateway integration (Nepal provider)
- Endpoint /communications/sms
- UI: send SMS

**Day 12 — Communications (WhatsApp)**
- WhatsApp Cloud API integration for send templates
- Endpoint /communications/whatsapp
- UI: send WA message

**Day 13 — Dashboard & KPIs**
- Backend endpoints returning KPI aggregates
- Frontend: dashboard with KPI cards + basic chart (leads/week)

**Day 14 — QA, polish, accessibility checks**
- Fix bugs, improve error messages, ensure RBAC rigor
- Verify env config, secrets, logging

**Day 15 — Deployment & Handover**
- Deploy to staging/production
- Create handover doc + training slides
- Demo session with Admizz

---

# 6. Architecture (MVP + Future-ready)
**Principles**
- Modular backend (one module per domain)
- Stateless APIs
- JWT authentication with refresh tokens
- Database-first with migrations
- Use feature flags for toggles
- Scaffolding for future modules but do not implement them

**Diagram (text)**
```
[ Next.js Frontend ] <--> [ NestJS API ] <--> [ Postgres ]
       |                      |
       |                      +--> S3 (documents)
       |                      +--> SMTP / SMS / WA APIs
       |                      +--> Background workers (cron/jobs)
```

**Notes**
- Background worker can be a lightweight NestJS process or BullMQ + Redis if needed later.
- For SaaS conversion, shift to schema-per-tenant or row-level tenancy; mark this `@SAAS`.

---

# 7. Database Schema (Core) — @MVP
(Keep types generic; use UUID PKs)

**users**, **contacts**, **leads**, **students**, **applications**, **tasks**, **documents**, **communications**, **workflows** tables as previously defined in earlier spec. (See Appendix for full DDL examples — below.)

---

# 8. API Contracts (MVP endpoints) — @MVP
Base: `/api/v1/...`  
List of endpoints with request/response examples. (Full set included in appendix.)

Examples:
- POST /api/v1/auth/login
- GET /api/v1/leads
- POST /api/v1/leads
- POST /api/v1/leads/:id/convert
- POST /api/v1/documents/upload-url
- POST /api/v1/communications/email

(Full API docs in Appendix section.)

---

# 9. Frontend & Backend Folder Structure
**Frontend (Next.js)**: `/web` with components, pages, lib, styles, hooks. Use TanStack Query for data fetching. Use Tailwind / Blueshark tokens for styles.

**Backend (NestJS)**: `/server/src/modules/{auth,users,leads,contacts,students,applications,tasks,documents,communications,workflows}`

---

# 10. UI / Navigation Model (MVP + Phase2)
**MVP Sidebar:**
- Dashboard
- Leads
- Students
- Contacts
- Tasks
- Documents
- Communications
- Settings (Admin)

**Phase2 additions:** Reports, Calendar, Workflow Builder, Integrations.

Navigation must be collapsible and searchable. Implement a command palette (CTRL+K) as a Phase2 nice-to-have but you can scaffold the route.

---

# 11. UX Improvements & Competitive Differentiation (from Agentcis)
**MVP UX choices:**
- Minimal tabs: Student page will have Overview / Applications / Documents / Communications
- Use cards and compact tables
- Add Quick Actions on hover
- Implement unified conversation thread in Communications
- Use white-space and spacing tokens
- Keyboard shortcuts: basic ("/" or "g l" to go to Leads) — optional

**Phase2 UX:** Kanban drag & drop, AI suggestions, command palette, compact/expanded table toggle.

---

# 12. Text Wireframes (annotated) — copy into Figma
**Leads List (MVP):**
Header: [Search] [Filters] [Add Lead]
Body: List rows with columns: Name, Phone, Email, Status, Assigned, Last Activity
Row actions: Quick buttons (Message, Call, Task, Convert)

**Lead/Student Profile (MVP):**
Left: avatar, contact info, status, quick actions
Right: Sections: Overview (timeline), Applications, Documents, Communications

(Full wireframes in Appendix for Designers.)

---

# 13. Workflows & Automation (JSON examples) — @MVP & @PHASE2
**MVP Example (lead followup):**
```json
{
  "id": "wf-lead-followup",
  "trigger": { "event": "lead.status_changed", "condition": {"to":"FOLLOWUP"} },
  "actions": [
    {"type":"create_task","payload":{"title":"Follow up with {{lead.name}}","assigned_to":"{{lead.assigned_to}}","due_in_days":2}},
    {"type":"send_email","payload":{"template":"lead_followup","to":"{{lead.email}}"}}
  ],
  "active": true
}
```
Store workflows in DB; runtime engine evaluates basic conditions.

---

# 14. Communications Integration (Email/SMS/WhatsApp) — @MVP
**Email**
- Send via SMTP
- Support templates (simple handlebars)
- Log communications in DB

**SMS**
- Integrate with Nepal SMS gateway (configurable)
- Endpoint to send + log

**WhatsApp Cloud API**
- Use template messaging for MVP
- Log messages; preserve template id & parameters

Security: store provider keys in env; do not log secrets.

---

# 15. Documents & Storage (S3) — @MVP
- Use pre-signed upload URLs
- Store metadata in DB (owner_type, owner_id, s3_key, filename, mime)
- Limit file size in the backend
- Implement virus scanning as `@PHASE2` (optional)

---

# 16. Testing, QA, and Acceptance Criteria — @MVP
**Unit tests:** services & utilities  
**Integration tests:** auth flow, lead->student conversion, doc upload confirm flow, send email endpoint  
**E2E tests (optional):** critical path using Playwright or Cypress for smoke tests  
**Acceptance:** All MVP endpoints passing CI, staging deployment stable, Admin demo.

---

# 17. CI/CD & Deployment Notes — @MVP (Blueshark adapt)
- GitHub Actions pipeline: lint → tests → build → deploy to staging
- Deploy options: Render, DigitalOcean App Platform, or AWS ECS
- Use managed Postgres for production
- Store secrets in provider vault
- Blueshark NOTE: If Blueshark uses Docker/K8s, generate Dockerfiles for frontend & backend and add a deployment manifest (k8s) scaffold `deploy/blueshark/*` (scaffold only, do not assume cluster exists)

---

# 18. Coding Conventions & PR Templates
- TypeScript across stack
- ESLint + Prettier
- Conventional commits
- PR template with checklist:
  - [ ] Tests added
  - [ ] Migration required? (Y/N)
  - [ ] Env vars documented
  - [ ] Manual test steps
  - [ ] Related issue

---

# 19. Feature Mapping Matrix (short)
(Condensed — full matrix in Appendix)
| Feature | Agentcis | EdgexCRM MVP | Phase2 | SaaS |
|---|---:|---:|---:|---:|
| Lead management | ✅ | ✅ | ✅ | ✅ |
| Documents & checklist | ✅ | ✅ (basic) | ✅ (versioning) | ✅ |
| Workflow builder | ✅ | simple | visual | marketplace |
| Client portal | ✅ | No | Yes | Yes |
| Invoicing | ✅ | No | Yes | Yes |
| WhatsApp | ✅ | ✅ | ✅ | ✅ |

---

# 20. Phase 2 & SaaS Vision (detailed blueprints) — @PHASE2 / @SAAS
**Phase 2 highlights**
- Visual workflow builder (drag-drop)
- Advanced analytics & custom reports
- Calendar & scheduling
- Compliance & checklists
- Quotation & invoice basics
- Multi-branch support
- Document versioning & e-sign

**SaaS highlights**
- Multi-tenancy architecture (row-level or schema-per-tenant)
- Subscription management (Stripe)
- Feature flags per plan
- Tenant onboarding wizard
- Usage billing for WhatsApp/SMS

---

# 21. UX Principles & Design Tokens
**Spacing**: 8px grid  
**Typography**: Inter (weights 400/600/700)  
**Primary color**: --brand-500: #1f7ed0 (example)  
**Neutral scale**: gray-50 ... gray-900  
(Provide Tailwind tokens in Appendix)

---

# 22. Appendix: Claude Execution Templates (PR, Issue, Commands)
**PR Title:** feat: leads module (CRUD + convert)  
**Description:** Implement leads table, service, controller, DTOs, migration, unit tests.  
**Checklist:** migration, tests, API docs, frontend pages, integration test.

**Command examples for Claude to run locally (linux)**:
```bash
pnpm install
pnpm --filter server dev
pnpm --filter web dev
pnpm prisma migrate dev --name init
```

---

# 23. Appendix: Example Configs (.env samples)
```
DATABASE_URL=postgresql://user:pass@localhost:5432/edgexcrm
JWT_SECRET=change_this
S3_ENDPOINT=https://s3.amazonaws.com
S3_BUCKET=edgexcrm-dev
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=...
SMTP_PASS=...
SMS_GATEWAY_URL=https://sms.example.com/api/send
SMS_API_KEY=...
WABA_TOKEN=...
```

---

# 24. CHANGELOG / VERSION NOTES
- v1.0 — Initial EdgexCRM FULL_SPEC created (includes MVP + Phase2 + SaaS vision).
- All changes must be tracked in `CHANGELOG.md` and referenced in PRs.

---

# Final Notes (Important)
- Claude and developers must **not** implement non-MVP items during the 15-day sprint. The spec contains many Phase2+ ideas — those are intentional and should only be used for scaffolding or planning.
- The file is intentionally verbose to avoid ambiguity. Use the tags and PR templates to enforce discipline.
- If you want, I will now:
  - (A) Write this file to `/mnt/data/EdgexCRM_FULL_SPEC.md` (done) and provide a download link, OR
  - (B) Expand any Appendix sections (DB DDL, full API JSON examples, Tailwind token file), or
  - (C) Generate individual PR templates for Claude.

