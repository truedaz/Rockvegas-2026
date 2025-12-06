# Rock Vegas — homepage

Live / Hosting
- Vercel project: https://vercel.com/truedazs-projects/rockvegas-2026
- Preview URL: https://rockvegas-2026-git-master-truedazs-projects.vercel.app/

Local development
1. Install dependencies
```bash
npm install
```
2. Run dev server
```bash
npm run dev
```
3. Test production build locally
```bash
npm run build
npm run start
# then open http://localhost:3000
```

Linting
- ESLint is configured using the Next.js recommended rules (`.eslintrc.json` extends `next/core-web-vitals`).
- Run `npm run lint` to view and fix issues.

Deployment notes
- Framework preset on Vercel should be set to **Next.js**.
- Build command: `npm run build`
- Install command: `npm install`
- Output directory: leave empty for Next.js projects (do not use `/out` unless you are exporting static files).

Preview protection / 401 on Vercel
- Your preview deployments currently returned `401 Authentication Required` on the preview URL — that is Vercel's preview protection / SSO feature (not a runtime or build failure).
- To make preview deployments public: Project → Settings → Security → disable "Protect Preview Deployments".
- To keep previews protected but access them programmatically or from CI, follow Vercel's bypass-token approach:

	Example (replace with a valid token):

	```text
	https://<preview-domain>/<path>?x-vercel-set-bypass-cookie=true&x-vercel-protection-bypass=<BYPASS_TOKEN>
	```

What I changed (fixes done)
- Fixed ESLint errors in `pages/index.js` (unescaped quotes and contraction) — these could cause build failures when ESLint is configured to fail the build.
- Replaced raw `<img>` tags with Next.js `<Image />` for better optimization and to clear the `@next/next/no-img-element` rule.

If anything still fails on Vercel, copy the failing deployment logs and paste them here — I can analyze them for missing environment variables, wrong root directory, or other deployment-specific problems.

