# BlockOS — Baltimore NEXT | Mayor-facing MVP

A self-contained **static demonstration app** for the BlockOS redevelopment execution platform. Includes Command Center, City Atlas, Property 360, feasibility scenario drafting, Projects, Capital, Workforce, Impact Reports, and Community Portal.

## Quick start

Open `index.html` in a modern browser. No package install, build step, environment variables, or paid APIs required.

For local development, optionally run `python3 -m http.server 8080` and open `http://localhost:8080`.

## Deploy to GitHub + Cloudflare Pages

1. Extract the ZIP and create a new GitHub repository. Upload `index.html`, `styles.css`, `app.js`, `README.md`, and `FEATURE_SPEC.md` to the **repository root**.
2. In Cloudflare Dashboard: **Workers & Pages → Create → Pages → Connect to Git**. Select the repository.
3. Choose **Framework preset: None**; **Build command:** leave blank; **Build output directory:** `/` (repository root). Cloudflare may display this as `.` depending on UI.
4. Deploy. Cloudflare will serve the root `index.html`. Future GitHub commits can trigger deployments.

## Data and security notes

- All included property names, budgets, placements, maps, project data, and metrics are **illustrative** and **not live City of Baltimore records**.
- The parcel map is a conceptual diagram, **not** geospatially accurate.
- Writes persist in the user's **own browser localStorage** only. No accounts, shared database, municipal integration, AI model, or backend.
- No sensitive personal information should be entered in this demonstration.
- Before public launch, add authentication, permission boundaries, PostGIS, audited import pipelines, validated estimates, and privacy protections.

## Project scope

This package is a **recreated, portable MVP** based on the BlockOS feature specification. It is **not an exact source-code export** of the previously hosted prototype.

For the full multi-phase roadmap and feature catalog, see `FEATURE_SPEC.md`.
