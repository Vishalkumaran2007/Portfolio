# GitHub Pages Deployment Notes

## 2026-08-18

The GitHub Pages workflow completed successfully, but the deployed project path at `https://vishalkumaran2007.github.io/Portfolio/` currently resolves to the application’s internal 404 route. The Vite build uses the `/Portfolio/` base path, while the client router must also be configured to treat `/Portfolio` as its base. The next source update will make the router base derive from Vite’s deployment base path.

The requested custom domain `vishalkumaranportfolio.com` requires a separately registered and controlled domain before it can be assigned in GitHub Pages.
