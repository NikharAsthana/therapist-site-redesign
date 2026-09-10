# PROJECT_STATE.md — Therapist Website Redesign (Portfolio Edition)

> Checkpoint rules (binding for every session-end update):
> - Append-only: never rewrite history, only append new dated entries and promote facts to Tier 1 when confirmed.
> - Promote before compressing: repeated details move to Tier 1 Ledger, session log keeps only links.
> - Explicit cross-phase links: every new decision must note which prior decision/phase it connects to.
> - No invention: Dr. Maya Reynolds facts come only from `content/source-profile.md` once pasted. If missing, mark as `NEEDS INPUT`.

## Tier 1 — Ledger (cumulative, promoted facts)

### Active Phase
- Phase 0 — Environment & repo foundation — COMPLETED 2026-09-11. Next: Phase 1 — Design system foundations (awaits user confirm).

### Decisions
- [2026-09-11] Stack locked per blueprint: Next.js 16 App Router + Turbopack, TypeScript strict, Tailwind CSS v4 CSS-first `@theme`, shadcn/ui on Radix, react-hook-form + zod, typed `content/site.ts`, `next/image`, Vitest + RTL + Playwright smoke, GitHub Actions CI, Vercel hosting, pnpm package manager. (Phase 0 — no relitigation in later phases unless user explicitly reopens.)
- [2026-09-11] Solo-practitioner adaptation agreed: collapse reference multi-therapist "Our Team" dropdown into single "About Dr. Reynolds" nav item; footer roster becomes single bio/credentials line. Reason: real client work never maps 1:1 onto a template. (Phase 0 — affects Phase 2 nav/footer structure.)
- [2026-09-11] Environment: Fedora Linux, personal laptop. Give Fedora variants by default. (Phase 0)
- [2026-09-11] De-branded repo name candidate: `therapist-site-redesign` (fallback until practice name known from profile). No README/license template yet — will write own in Phase 11. (Phase 0)

### Environment (verified)
- [2026-09-11] `node -v` = v24.18.0 (meets Node 20+ requirement, no nvm install needed), `npm` 11.16.0, `pnpm` 11.20.0, `git` 2.55.0, workdir `/home/si1entwr4ith/Code/opencode/GMT` empty, no git repo yet.

### Content Source of Truth
- `content/source-profile.md` — SAVED VERBATIM 2026-09-11 from user paste. Single source of truth for all Dr. Reynolds facts (Santa Monica, anxiety/panic/trauma/burnout, CBT/EMDR/mindfulness/body-oriented, in-person + CA telehealth, calm office with natural light). No invention beyond this file. (Phase 0 — unblocks Phase 3 content module + Phase 4 copy/images.)

### Prior Phases
- [2026-09-11] Phase 0 completed: repo `therapist-site-redesign` (remote `https://github.com/NikharAsthana/therapist-site-redesign.git`, branch `main`), profile committed, Next.js 16.3.4 + React 19.2.8 + Tailwind v4.3.3 scaffolded via `/tmp/opencode/scaffold-therapist` workaround (folder `GMT` capitals violate npm naming, so scaffolded to lowercase temp dir then rsynced excluding `node_modules`/`.next`), `package.json` name fixed to `therapist-site-redesign`, default `README.md` removed per blueprint (own README in Phase 11), `pnpm lint` exit 0, `pnpm build` exit 0, `pnpm dev` HTTP 200 on `/`. Commit: `chore: scaffold Next.js 16 app with Tailwind v4 and TypeScript`.

## Tier 2 — Session Log (append-only)

### 2026-09-11 — Session 1 (Phase 0 start)
- Checked for `.state/PROJECT_STATE.md` — did not exist. Started new file.
- Checked for `.state/checkpoint-prompt.md` — did not exist. Using rules embedded above until user provides canonical prompt file.
- Verified toolchain versions (see Environment above).
- Created empty dirs `.state/` and `content/` via `mkdir -p`.
- Next: (1) init git + create GitHub repo, (2) add `.gitignore`, (3) paste profile to `content/source-profile.md`, (4) scaffold Next.js app, (5) verify `pnpm dev`.
- Links: Phase 0 foundation enables Phase 1 tokens + Phase 2 structure; profile file will unblock Phase 3 content architecture and Phase 4 copy/images.

### 2026-09-11 — Session 1 (Phase 0 complete)
- Saved pasted profile verbatim to `content/source-profile.md`.
- Scaffolded with `pnpm create next-app@latest /tmp/opencode/scaffold-therapist --typescript --tailwind --app --src-dir --eslint --use-pnpm --disable-git --yes` (no `--turbopack` flag in current CLI — Turbopack is default in Next 16), then `rsync -av --exclude=node_modules --exclude=.next` into GMT, fixed package name, `rm README.md`, `pnpm install`.
- Verified: `pnpm lint` exit 0, `pnpm build` compiled successfully + TypeScript pass, `pnpm dev` Ready in 437ms + HTTP 200 on `/`.
- Links: connects to Tier 1 Decisions (stack locked, solo-practitioner adaptation for Phase 2, Fedora default); profile facts now locked as source for Phase 3/4; scaffold output (src/app/page.tsx, layout.tsx, globals.css, next.config.ts, .gitignore) is base for Phase 1 token work.
