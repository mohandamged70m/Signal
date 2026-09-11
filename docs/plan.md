# Signal — Plan (frontend/ + backend/)

## Positioning
screenshot-to-code clones output dead single files. Signal outputs maintainable Next.js apps.

Target: product teams. Pain to kill: throwaway code.

## 3 pillars
1. **3-shots-to-app:** 3-10 screenshots map to routes + shared layout + nav. Star GIF: drop 3 Dribbble shots, get navigable app in 30s.
2. **Region re-gen loop:** box-select in preview, re-prompt only that region, apply surgical patch. No full rewrite.
3. **Auto-componentize:** split into `components/Navbar.tsx, Hero.tsx, Card.tsx`, no hardcoded hex, reuse tokens from `frontend/app/globals.css`. Show import graph as proof.

## MVP scope
In:
- Workbench in `frontend/app/page.tsx`: shots left, preview center, code right
- Next.js 16 + Tailwind output only
- Express backend `backend/src/server.js`: LLM proxy + project save
- Export ZIP / copy

Out (explicit cuts):
- No auth, DB, deploy, collab, history
- No Figma plugin, video, URL import
- No token-config UI

## Moat
MIT + native setup + Next.js-native output + region-edit demo. Abi repo is Vite/single-file focused.
