# Edge-X CRM - Workflow Patterns

**Last Updated:** December 1, 2025
**Purpose:** Project-specific patterns and learnings

---

## Inherited Patterns

From Global Brain (`cross-project-patterns.md`):
- Mobile responsive patterns
- AI API integration patterns
- Git workflow patterns
- Deployment patterns
- UI/UX patterns

---

## Project-Specific Patterns

### Monorepo Structure Pattern

**Pattern:** Turborepo + pnpm workspace monorepo
**Used By:** Netflix, Vercel, AWS, Uber

```
project-root/
├── apps/
│   ├── web/        # Next.js frontend
│   └── server/     # NestJS backend
├── packages/
│   └── shared/     # Shared TypeScript types
├── package.json    # Root workspace config
├── pnpm-workspace.yaml
└── turbo.json
```

**Key Files:**
- `pnpm-workspace.yaml` - Defines workspace packages
- `turbo.json` - Build orchestration and caching
- `packages/shared` - Shared types for type safety

**Commands:**
```bash
pnpm dev          # Start all services
pnpm dev:web      # Start frontend only
pnpm dev:server   # Start backend only
pnpm build        # Build all
pnpm lint         # Lint all
pnpm type-check   # TypeScript check all
```

**Cross-Project Value:** HIGH - Reusable for any full-stack project

---

### Three-Tier Environment Pattern

**Pattern:** Local → Dev → Production with auto-deploy

| Environment | Frontend | Backend | Database | Branch |
|-------------|----------|---------|----------|--------|
| Local | localhost:4000 | localhost:4001 | Neon dev | feature/* |
| Dev | Vercel preview | Render dev | Neon dev | `dev` |
| Production | Vercel prod | Render prod | Neon main | `main` |

**Git Flow:**
```
feature/xxx → dev → main
     ↓         ↓      ↓
   local    preview  production
```

**Cross-Project Value:** HIGH - Same pattern used in BlueShark

---

### Port Allocation Pattern

**Pattern:** Unique ports per project to enable parallel development

| Project | Frontend | Backend |
|---------|----------|---------|
| BlueShark | 3000 | 5000 |
| EdgexCRM | 4000 | 4001 |
| Future Project | 4100 | 4101 |

**Cross-Project Value:** MEDIUM - Portfolio-level coordination

---

### Documentation-First Pattern

**Pattern:** Create documentation structure before writing code

```
docs/
├── README.md               # Index
├── ROADMAP.md              # Phases and milestones
├── SESSION_LOG.md          # AI session tracking
├── DEVELOPER_WORKFLOW.md   # Dev guide
└── [FULL_SPEC.md]         # Full specification
```

**Benefits:**
- Prevents context loss in AI-assisted development
- Clear roadmap prevents scope creep
- Session logs enable continuity
- Professional practice

**Cross-Project Value:** HIGH - Essential for AI-assisted development

---

## Code Patterns

### Frontend Patterns (Next.js 15)

**App Router Structure:**
```
src/app/
├── layout.tsx          # Root layout
├── page.tsx            # Home page
├── globals.css         # Global styles
├── (auth)/             # Auth route group
│   ├── login/
│   └── register/
└── (dashboard)/        # Protected route group
    ├── layout.tsx
    └── ...
```

### Backend Patterns (NestJS)

**Modular Structure:**
```
src/
├── main.ts
├── app.module.ts
├── prisma/
│   ├── prisma.module.ts
│   └── prisma.service.ts
└── modules/
    ├── auth/
    ├── users/
    ├── leads/
    └── ...
```

**Module Pattern:**
```typescript
// Each module follows:
module/
├── module.module.ts    # Module definition
├── module.controller.ts # HTTP endpoints
├── module.service.ts   # Business logic
├── dto/                # Data transfer objects
└── entities/           # Prisma types or interfaces
```

### Database Patterns (Prisma)

**Schema Organization:**
- Group related models with comments
- Use enums for status fields
- Add indexes for common queries
- Use UUID primary keys

---

## Testing Patterns

*TBD - Will be added during MVP implementation*

---

## Deployment Patterns

### Vercel Frontend Deployment

**Configuration:**
- Root directory: `apps/web`
- Build command: `pnpm build:web`
- Install command: `pnpm install`
- Framework: Next.js (auto-detected)

### Render Backend Deployment

**Configuration:**
- Root directory: `apps/server`
- Build command: `npm install && npm run build`
- Start command: `npm run start:prod`
- Environment: Node

### Neon Database

**Branch Strategy:**
- `main` branch → Production data
- `dev` branch → Development data
- Reset dev from main when needed

---

## Lessons Learned

### Session 1 (December 1, 2025)

1. **Documentation before code** - Creating docs structure first prevents context loss
2. **Study existing projects** - BlueShark patterns accelerated setup
3. **Port planning early** - Avoid conflicts by assigning ports upfront
4. **Comprehensive brain files** - SESSION_LOG is invaluable for AI continuity

---

**Patterns updated after discovering reusable solutions.**
