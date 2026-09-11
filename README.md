# Signal — screenshot to maintainable app

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node >= 20](https://img.shields.io/badge/node-%3E%3D20-brightgreen.svg)](https://nodejs.org)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](docs/tasks.md)
[![No Docker required](https://img.shields.io/badge/docker-not_required-blue.svg)](docs/setup.md)

Screenshot in, maintainable Next.js app out. An open-source alternative to single-file screenshot-to-code tools — built for product teams who refuse throwaway code.

> **Status:** early MVP scaffold. Backend API + docs are in; workbench UI is under construction. See [Roadmap](docs/roadmap.md).

## Demo

> Coming soon: `3 shots → navigable app in 30s + region fix` GIF.

## Why Signal

| | Screenshot-to-code clones | Signal |
|---|---|---|
| Input | 1 screenshot | 3–10 screenshots → linked routes |
| Output | Single file, hardcoded styles | `components/*.tsx` + design tokens |
| Iteration | Full rewrite per prompt | Box-select a region → surgical patch |
| Proof of quality | None | Import graph, no hardcoded hex |

## Quickstart (no Docker)

**Backend** — `http://localhost:7001`

```powershell
cd backend
npm.cmd install
node src/server.js
```

**Frontend** — `http://localhost:3000`

```powershell
cd frontend
npm.cmd install
npm.cmd run dev
```

Set `NEXT_PUBLIC_API_URL=http://localhost:7001` in `frontend/.env.local`. Full guide: [docs/setup.md](docs/setup.md).

## Structure

```
signal/
├── frontend/          # Next.js 16 + Tailwind workbench (app/page.tsx)
├── backend/           # Express API (src/server.js)
│   └── src/
│       ├── routes/    # health, generate, projects
│       ├── services/  # llm (provider boundary), storage (JSON now, DB later)
│       └── middleware/
├── docs/              # plan, roadmap, tasks, architecture, api, setup
└── LICENSE
```

## API

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/health` | Service check |
| `POST` | `/api/generate` | Screenshot metadata → `{ route, code, components }` |
| `POST` | `/api/generate/patch-region` | Region fix → surgical `patch` |
| `GET` / `POST` | `/api/projects` | List / save projects |
| `GET` | `/api/projects/:id` | Load project |

Contract details: [docs/api.md](docs/api.md).

## Roadmap

- [x] **M0** — Scaffold (frontend init, Express API, docs)
- [ ] **M1** — Wire workbench: upload → generate → preview → save
- [ ] **M2** — Region edit + auto-componentize enforcement
- [ ] **M3** — Multi-route export + launch GIF

Tracking: [docs/roadmap.md](docs/roadmap.md) · [docs/tasks.md](docs/tasks.md) · [docs/architecture.md](docs/architecture.md)

## Contributing

Solo-friendly: pick one unchecked box in [docs/tasks.md](docs/tasks.md), open a PR. No Docker, no CLA, MIT.

## License

[MIT](LICENSE) — © 2026 signal contributors.
