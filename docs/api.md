# API — backend contract for frontend

Base: `http://localhost:7001`
Frontend calls via `NEXT_PUBLIC_API_URL` (see `docs/setup.md`).

## GET /health
Response: `{ ok: true, service: "signal-backend", time: ISO }`

## POST /api/generate
Body: `{ route: "/pricing", prompt: "...", images: [] }`
Response: `{ route, code, components: ["components/Navbar.tsx", ...] }`
Status: stubbed in `src/services/llm.js`, wire provider keys here.

## POST /api/generate/patch-region
Body: `{ file: "components/Hero.tsx", region: { x,y,w,h } | null, instruction: "..." }`
Response: `{ file, region, patch }`

## GET /api/projects
Response: `[{ id, createdAt, ... }]`

## POST /api/projects
Body: arbitrary project JSON
Response: `201 { id, createdAt, ... }`

## GET /api/projects/:id
Response: project or `404 { error: "not found" }`

## Frontend usage
- Workbench (`frontend/app/page.tsx`) sends shot metadata to `POST /api/generate`, renders `{ code, components }` in preview + code panes.
- Region edits send `{ file, region, instruction }` to `POST /api/generate/patch-region`, apply returned `patch` surgically.
- Persist via `POST /api/projects`, load via `GET /api/projects/:id`.
