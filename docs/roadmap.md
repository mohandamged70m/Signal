# Roadmap — frontend/ + backend/

## M0 — Scaffold (done)
- [x] Next.js frontend init (`frontend/app/page.tsx`)
- [x] Express backend (`backend/src/server.js`, routes, services)
- [x] Base docs (`plan.md`, `architecture.md`, `api.md`, `setup.md`)

## M1 — Wire workbench (current)
Goal: upload shot in frontend, hit `POST /api/generate`, show stub code.
- Frontend workbench layout in `app/page.tsx`: shots / preview / code
- `NEXT_PUBLIC_API_URL` wiring to `http://localhost:7001`
- Upload + render `code` + `components` list
- Save to `POST /api/projects`

## M2 — Region edit + componentize
- Box-select in preview → `POST /api/generate/patch-region`
- Surgical patch apply, no full rewrite
- Enforce `components/*.tsx` split + token reuse from `app/globals.css`
- Show import graph in code pane

## M3 — Multi-route + star push
- 3-10 shots → routes + shared `layout.tsx` + nav
- Export ZIP / copy
- README GIF: 3 shots → app in 30s + region fix
- `Dockerfile` optional for self-hosters

## Out of MVP
Auth, Postgres, queue, Figma plugin, video input, collab.
