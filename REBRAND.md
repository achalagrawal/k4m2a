# Plan: Rebrand to K4M2A + Vercel Deployment

## Context

The user is forking the Bluesky social app and rebranding it as **K4M2A**, to be hosted at **k4m2a.app** on Vercel. The app is a React Native + Expo cross-platform app; the user wants web-only (no mobile app store publishing).

**Key distinction:**
- **Keep unchanged**: AT Protocol backend service URLs (bsky.social, api.bsky.app, etc.) — these are infrastructure the app connects to, not Bluesky's brand
- **Change**: App name, page titles, user-visible "Bluesky" strings, and the app's own domain (bsky.app → k4m2a.app)

---

## Part 1: Vercel Deployment Configuration

### Create `vercel.json` at repo root

The web build uses `yarn build-web` which runs `expo export:web` + a post-build script that copies to the bskyweb Go server (irrelevant for Vercel). Use just the Expo export step.

```json
{
  "buildCommand": "yarn expo export:web",
  "outputDirectory": "web-build",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

The `rewrites` rule makes this an SPA — all routes serve `index.html` so React Navigation handles routing client-side.

---

## Part 2: Branding Changes

### 1. `package.json` (line 2)
- `"name": "bsky.app"` → `"name": "k4m2a.app"`

### 2. `app.config.js` (lines 48–51)
- `name: 'Bluesky'` → `name: 'K4M2A'`
- `slug: 'bluesky'` → `slug: 'k4m2a'`
- `scheme: 'bluesky'` → `scheme: 'k4m2a'`
- `CFBundleSpokenName: 'Blue Sky'` → `'K4M2A'`
- Leave `owner`, `bundleIdentifier`, `package`, associated domains, and native extension names unchanged (web-only scope)

### 3. `src/lib/strings/headings.ts` (line 3)
- `return \`${unreadPrefix}${page} — Bluesky\`` → `return \`${unreadPrefix}${page} — K4M2A\``
- This controls browser tab titles throughout the app

### 4. `src/lib/strings/url-helpers.ts` (lines 10–17, 56)
- `export const BSKY_APP_HOST = 'https://bsky.app'` → `'https://k4m2a.app'`
- Add `'k4m2a\\.app'` to `BSKY_TRUSTED_HOSTS` array (so internal links work)
- `return 'Bluesky Social'` in `toNiceDomain()` → keep as-is (this labels the bsky.social PDS host accurately)

### 5. `web/index.html` (line 193–194)
- Update the SVG comment from `<!-- Bluesky SVG -->` to `<!-- K4M2A splash -->` (cosmetic)
- Keep `<link rel="preconnect" href="https://bsky.social">` — needed for AT Protocol API calls
- The Bluesky butterfly SVG splash logo should ideally be replaced with a K4M2A logo/icon. For now, plan to replace it with a simple text fallback or placeholder; a proper SVG logo can be swapped in later.

### 6. Bulk user-facing "Bluesky" string replacement in `src/`

Run a targeted grep for `"Bluesky"` in source files (excluding constants that reference actual infrastructure). Key files/patterns identified:

| File | What to change |
|------|----------------|
| `src/lib/strings/url-helpers.ts` | Already covered above |
| `src/lib/media/manip.ts:95` | `const ALBUM_NAME = 'Bluesky'` → `'K4M2A'` |
| `src/lib/moderation/useModerationCauseDescription.ts:143` | `'Bluesky Moderation Service'` → keep (it's Bluesky's actual service name) |
| `src/components/dialogs/Signin.tsx:47` | `"Sign in to Bluesky or create a new account"` → `"Sign in to K4M2A or create a new account"` |
| `src/components/verification/VerifierDialog.tsx` | "verification on Bluesky" references → "verification on K4M2A" |

For the remaining `src/components/` and `src/screens/` files with "Bluesky" in user-visible strings: do a grep-guided pass replacing brand name references. Internal/service references (like "Bluesky Moderation Service", "Bluesky Labs") should be left as-is since they name real services.

---

## Part 3: Implementation Order

1. Create `vercel.json`
2. Update `package.json` name
3. Update `app.config.js` (name, slug, scheme, CFBundleSpokenName)
4. Update `src/lib/strings/headings.ts`
5. Update `src/lib/strings/url-helpers.ts` (BSKY_APP_HOST + trusted hosts)
6. Update `web/index.html` (splash comment)
7. Update `src/lib/media/manip.ts` (ALBUM_NAME)
8. Update `src/components/dialogs/Signin.tsx`
9. Grep-and-replace remaining user-visible "Bluesky" strings in `src/components/` and `src/screens/`

---

## Verification

1. **Local web dev**: Run `yarn web` and check that browser tab shows "K4M2A", sign-in dialog shows correct name
2. **Web build**: Run `yarn expo export:web` — confirm it completes and `web-build/index.html` has the correct title
3. **Vercel**: Connect the GitHub repo to Vercel, it will detect `vercel.json` and run the build automatically. Set env var `EXPO_PUBLIC_ENV=production` in Vercel project settings.
4. **Routing**: Navigate to `/profile/someone` and refresh — page should load (not 404), confirming SPA rewrites work

---

## Notes

- The splash screen SVG in `web/index.html` is the Bluesky butterfly. For a proper rebrand, provide a custom SVG or remove it entirely.
- `HELP_DESK_URL` (blueskyweb.zendesk.com) points to Bluesky's support. Update this if K4M2A has its own support URL.
- `BSKY_DOWNLOAD_URL` (`https://bsky.app/download`) in `src/lib/constants.ts` points to Bluesky's app download page — update or remove if K4M2A won't have its own mobile app.
