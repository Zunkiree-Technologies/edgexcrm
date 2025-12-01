# EdgexCRM Documentation

**Last Updated:** December 1, 2025

This folder contains all project documentation organized by category.

---

## Quick Start

**Start here:** [`SESSION_LOG.md`](./SESSION_LOG.md) - Main entry point with current state, progress, and links to everything.

---

## Documentation Structure

```
docs/
├── SESSION_LOG.md              # Main entry point - start here!
├── ROADMAP.md                  # Project phases and milestones (15-day MVP + Phase 2 + SaaS)
├── DEVELOPER_WORKFLOW.md       # How to develop locally and deploy
├── README.md                   # This file
├── EdgexCRM_FULL_SPEC.md       # Complete MVP specification
│
├── product/                    # Product & Business Documentation
│   ├── MVP_SCOPE.md            # MVP feature scope (locked)
│   └── USER_STORIES.md         # User stories by role
│
├── technical/                  # Technical Architecture
│   ├── SYSTEM_ARCHITECTURE.md  # Technical architecture overview
│   ├── DATABASE_SCHEMA.md      # Database design & ERD
│   ├── API_CONTRACTS.md        # API endpoints & contracts
│   └── INFRASTRUCTURE.md       # Deployment configuration
│
├── quality/                    # Quality Assurance & Testing
│   ├── TEST_PLAN.md            # Testing strategy
│   └── QA_CHECKLIST.md         # QA verification checklist
│
└── features/                   # Feature Implementation Logs
    └── IMPLEMENTATION_LOG.md   # Daily progress tracking
```

---

## Document Categories

### Core Documents (Read First)
| Document | Description |
|----------|-------------|
| [SESSION_LOG.md](./SESSION_LOG.md) | Current state, recent sessions, what's next |
| [ROADMAP.md](./ROADMAP.md) | Project phases and milestones |
| [DEVELOPER_WORKFLOW.md](./DEVELOPER_WORKFLOW.md) | Local -> Dev -> Prod workflow |
| [EdgexCRM_FULL_SPEC.md](./EdgexCRM_FULL_SPEC.md) | Complete MVP specification |

### Product Documentation
| Document | Description |
|----------|-------------|
| [MVP_SCOPE.md](./product/MVP_SCOPE.md) | Locked MVP feature scope |
| [USER_STORIES.md](./product/USER_STORIES.md) | User stories by role (Admin, Counsellor, Agent) |

### Technical Documentation
| Document | Description |
|----------|-------------|
| [SYSTEM_ARCHITECTURE.md](./technical/SYSTEM_ARCHITECTURE.md) | Technical architecture, stack, data flow |
| [DATABASE_SCHEMA.md](./technical/DATABASE_SCHEMA.md) | Database design and relationships |
| [API_CONTRACTS.md](./technical/API_CONTRACTS.md) | API endpoints and contracts |
| [INFRASTRUCTURE.md](./technical/INFRASTRUCTURE.md) | Deployment configuration |

### Quality & Testing
| Document | Description |
|----------|-------------|
| [TEST_PLAN.md](./quality/TEST_PLAN.md) | Testing strategy and approach |
| [QA_CHECKLIST.md](./quality/QA_CHECKLIST.md) | QA verification checklist |

### Feature Documentation
| Document | Description |
|----------|-------------|
| [IMPLEMENTATION_LOG.md](./features/IMPLEMENTATION_LOG.md) | Daily implementation progress |

---

## For AI Assistants (Claude/Edge-X-CRM-Stark)

When starting a new session:
1. **Read [`SESSION_LOG.md`](./SESSION_LOG.md)** first
2. Check "What's Next" section for priorities
3. Read linked documents for full context
4. **Update SESSION_LOG.md** when done

---

## External Links

| Resource | URL |
|----------|-----|
| Production App | TBD (after deployment) |
| Dev App | TBD (after deployment) |
| GitHub Repo | TBD (after setup) |
| Vercel Dashboard | https://vercel.com/dashboard |
| Render Dashboard | https://dashboard.render.com |
| Neon Console | https://console.neon.tech |

---

## Project Info

| Attribute | Value |
|-----------|-------|
| **Project** | EdgexCRM |
| **Client** | Admizz |
| **MVP Deadline** | 15 days |
| **Tech Stack** | Next.js + NestJS + PostgreSQL + Prisma |
| **Deployment** | Vercel + Render + Neon |

---

*This documentation is maintained as part of the EdgexCRM project.*
