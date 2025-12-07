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
- **IMPORTANT**: Your preview URL shows `404: NOT_FOUND` because Vercel's preview protection is enabled, which returns a 401/404 to unauthorized visitors.
- The build succeeded with no errors — this is a **deployment access restriction**, not a code or build problem.

**How to fix (make previews publicly accessible):**
1. Go to https://vercel.com/truedazs-projects/rockvegas-2026
2. Click **Settings** (in the top navigation)
3. Click **Deployment Protection** (in the left sidebar)
4. Find the section "Vercel Authentication" or "Protection Method"
5. Click **Edit** or toggle to change the setting
6. Select **Only Production Deployments** (this will make preview/branch deployments public while keeping production protected if needed)
   - OR select **Disabled** to make all deployments public
7. Click **Save**
8. Refresh your preview URL: https://rockvegas-2026-git-master-truedazs-projects.vercel.app/

Alternative: bypass token approach (for automation/CI):
- To keep previews protected but access them programmatically, use Vercel's bypass token:
  ```text
  https://<preview-domain>/<path>?x-vercel-set-bypass-cookie=true&x-vercel-protection-bypass=<BYPASS_TOKEN>
  ```
- Get your bypass token from: Project Settings → Deployment Protection → Protection Bypass for Automation
- Docs: https://vercel.com/docs/deployment-protection/methods-to-bypass-deployment-protectionWhat I changed (fixes done)
- Fixed ESLint errors in `pages/index.js` (unescaped quotes and contraction) — these could cause build failures when ESLint is configured to fail the build.
- Replaced raw `<img>` tags with Next.js `<Image />` for better optimization and to clear the `@next/next/no-img-element` rule.

If anything still fails on Vercel, copy the failing deployment logs and paste them here — I can analyze them for missing environment variables, wrong root directory, or other deployment-specific problems.

