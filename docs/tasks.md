# Tasks — daily system (frontend/ + backend/)

## How to use (2 min/day)
1. Morning: pick 1-3 items into `Today`, move rest to `Next`.
2. Evening: check off Done, write `Should've done` if missed + why, move leftovers to tomorrow.
3. Keep this file as source of truth. One line per task.

## Today — 2026-09-11
- [ ] Wire `NEXT_PUBLIC_API_URL` in `frontend/.env.local` → test `GET /health`
- [ ] Build workbench skeleton in `frontend/app/page.tsx` (3 panes, no styling polish)
- [ ] POST test shot metadata to `/api/generate` from UI, render stub `code`

## Next (M1 rest)
- [ ] Image upload (base64) → backend `images[]`
- [ ] Render `components[]` list in code pane
- [ ] `POST /api/projects` save + `GET /api/projects/:id` load

## Later (M2-M3)
- [ ] Preview box-select → `POST /api/generate/patch-region`
- [ ] Component-split enforcement + token check
- [ ] Multi-shot → routes + `layout.tsx` nav
- [ ] Export ZIP + README GIF

## Backlog / ideas
- [ ] `Dockerfile` for self-hosters
- [ ] Real LLM call in `backend/src/services/llm.js`
- [ ] Postgres swap in `backend/src/services/storage.js`

## Daily log
### 2026-09-11
- Done: scaffold backend + base docs
- Should've done: _fill at EOD — what slipped and why_
- Blockers: _none / list here_

### Template (copy per day)
```
### YYYY-MM-DD
- Done:
- Should've done:
- Blockers:
- Tomorrow:
```
