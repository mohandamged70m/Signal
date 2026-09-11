# Signal — screenshot to maintainable app

Screenshot in, maintainable Next.js app out. Not single-file clones.

## Why different
- **3-shots-to-app:** routes + shared layout + nav
- **Region re-gen:** box-select → surgical patch
- **Auto-componentize:** `components/*.tsx` + tokens, no hardcoded hex

## Structure
- `frontend/` — Next.js 16 workbench (`app/page.tsx`)
- `backend/` — Express API (`src/server.js`), no Docker required
- `docs/` — `plan.md`, `roadmap.md`, `tasks.md`, `architecture.md`, `api.md`, `setup.md`

## Run (no Docker)
Backend:
```powershell
cd backend
npm.cmd install
node src/server.js
```
Frontend:
```powershell
cd frontend
npm.cmd install
npm.cmd run dev
```
Details: `docs/setup.md`

## Roadmap
See `docs/roadmap.md` + `docs/tasks.md`.

## Star GIF (TODO)
`3 shots → app in 30s + region fix` — add to `docs/` + here for launch.
