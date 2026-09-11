# Setup — frontend/ + backend/, no Docker

Docker is not installed and not required.

## Prereqs
- Node v24 (verified), Python 3.11 optional
- Windows: use `npm.cmd`, not `npm` — `npm.ps1` is blocked by ExecutionPolicy

## Backend
```powershell
& "C:\Program Files\nodejs\npm.cmd" install
node src/server.js
# health: http://localhost:7001/health
```
Workdir: `backend/`. Env: copy `.env.example` to `.env`, set `PORT`, `FRONTEND_URL`.

## Frontend
```powershell
& "C:\Program Files\nodejs\npm.cmd" install
& "C:\Program Files\nodejs\npm.cmd" run dev
# app: http://localhost:3000
```
Workdir: `frontend/`.

## Run both (2 terminals)
- Terminal 1 — backend: `node src/server.js` → :7001
- Terminal 2 — frontend: `npm.cmd run dev` → :3000
- Frontend → backend via `NEXT_PUBLIC_API_URL=http://localhost:7001` in `frontend/.env.local`

## Deploy notes
- Frontend: Vercel from `frontend/`
- Backend: Render/Railway via `npm install + node src/server.js`, no local Docker build needed
- Add `Dockerfile` later only for self-hosters, optional for stars
