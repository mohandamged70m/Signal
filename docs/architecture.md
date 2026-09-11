# Architecture (frontend/ + backend/)

## Frontend — `frontend/`
- Next.js 16.3.4, React 19, Tailwind 4
- `app/page.tsx`: workbench entry, to be replaced with shots/preview/code layout
- `app/layout.tsx`: shared shell, future generated-app preview target
- `app/globals.css`: token source of truth for generated code

## Backend — `backend/` (Express, no Docker required)
- `src/server.js`: app wiring, CORS to `FRONTEND_URL`, JSON 10mb, mounts routes
- `src/routes/health.js`: `GET /health`
- `src/routes/generate.js`: `POST /api/generate`, `POST /api/generate/patch-region`
- `src/routes/projects.js`: `GET /api/projects`, `POST /api/projects`, `GET /api/projects/:id`
- `src/services/llm.js`: sole LLM boundary. Stubbed now, plug `GEMINI_API_KEY`/`OPENAI_API_KEY` here later
- `src/services/storage.js`: file JSON in `backend/data/projects.json` now, swap to Postgres later without route changes
- `src/middleware/errorHandler.js`: uniform 500 shape

## Data flow
1. Frontend uploads shot metadata to `POST /api/generate`
2. Backend calls LLM via `services/llm.js`, returns `{ route, code, components }`
3. Frontend renders preview + code, region edits go to `POST /api/generate/patch-region`
4. Projects persisted via `services/storage.js`

## Scaling seams
- Add DB: replace `storage.js` internals only
- Add auth: add `middleware/auth.js`, mount before `/api/*`
- Add queue: move `llm.js` calls to worker, keep route signatures
