# NWA OpenClaw Meetup

Simple static Next.js landing page for the NWA OpenClaw Meetup in Northwest Arkansas.

## Local development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Build the static export:

   ```bash
   npm run build
   ```

The static site output is written to `out/`.

## GitHub Pages deployment

1. Push the repository to GitHub.
2. In the repository settings, enable GitHub Pages and set the source to GitHub Actions.
3. Keep the default branch as `main`, or update `.github/workflows/deploy.yml` if you deploy from another branch.
4. The workflow will build the site and publish the `out/` directory.

`next.config.mjs` automatically applies the repository name as the base path during GitHub Actions runs, so asset URLs work correctly for project-page deployments.
