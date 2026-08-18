# GitHub Pages Deployment Notes

## 2026-08-18

The GitHub Pages workflow completed successfully, but the deployed project path at `https://vishalkumaran2007.github.io/Portfolio/` currently resolves to the application’s internal 404 route. The Vite build uses the `/Portfolio/` base path, while the client router must also be configured to treat `/Portfolio` as its base. The next source update will make the router base derive from Vite’s deployment base path.

The requested custom domain `vishalkumaranportfolio.com` requires a separately registered and controlled domain before it can be assigned in GitHub Pages.

## Follow-up observation

The latest GitHub Pages bundle is being served after the repaired workflow completed, but the client still renders its internal 404 route at `/Portfolio/`. The routing configuration requires one further correction so the deployed pathname is normalized before Wouter matches the home route.
