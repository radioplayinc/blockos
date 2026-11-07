# BlockOS® — Motion Experience v0.2
### Baltimore NEXT | Interactive mayoral demonstration

BlockOS is a **portable, interactive static front-end prototype** for a proposed Baltimore redevelopment execution platform. This redesigned version is inspired by [Motion's official examples](https://motion.dev/examples) and uses the Motion JavaScript library for progressive animation enhancement.

## Live demo features

- **Executive Command Center** — animated KPI counters, sample development projects, the four-stage intelligence pipeline, and quick links to the rest of the product.
- **City Atlas** — interactive conceptual 12-parcel map, parcel status filtering, selectable properties, list view, synchronized dossier details.
- **Property 360** — property schematic, notes editor, diligence checklist, and linked projects.
- **Intelligence Studio** — user-adjustable contingency slider and cost-scenario builder, with transparent rules and project creation.
- **Vision Studio** — draggable before/after neighborhood comparison, housing potential, green-infrastructure and local-hiring design controls, with saved local scenario.
- **Projects** — add projects, edit progress, stage, budget and expenses; add linked tasks.
- **Capital** — funding ledger, new funding entries, and project-level indicative gap indicators.
- **Workforce** — add illustrative paid opportunities and increment sample placements.
- **Impact & Reports** — live calculations from browser-stored demo data, CSV and JSON exports, print view.
- **Community Portal** — demonstration updates and locally stored feedback form.
- **Command palette** — Cmd/Ctrl + K, search screen names and sample property addresses.
- **Mayor's briefing mode** — guided five-chapter story with next/back and exit actions.
- **Accessibility** — keyboard focus states, native form controls and reduced-motion support.

### Motion design patterns

Patterns adapted (not a direct copy of any proprietary source) from Motion's public example library:

| Pattern | BlockOS implementation |
|---|---|
| Stagger / enter animations | Section and KPI reveals on page navigation |
| Number counters | Animated executive metrics on screen entry |
| Modal dialog / presence | Animated editing dialogs |
| Layout / transitions | Navigational state, progress visualization, interactive cards |
| Hover and feedback | Tactile panels and parcel selection affordances |
| Image-reveal slider | Before/after concept comparison in Vision Studio |
| Slider-driven transforms | Adjustable scenario and neighborhood design controls |

**Animation runtime:** `motion-enhance.js` imports `motion@12.23.12` from the official package via jsDelivr ESM (per [Motion quick-start documentation](https://motion.dev/docs/quick-start)). Motion is *progressive enhancement*: if the CDN is unavailable, all application functions still run with basic CSS transitions. Google Fonts are also optional and have system font fallbacks.

## Deploy to GitHub + Cloudflare Pages (no build required)

1. Extract the ZIP. Upload **the contents** to the root of a GitHub repository (not an additional parent folder).
2. In Cloudflare, choose **Workers & Pages → Create → Pages → Connect to Git** and select your repository.
3. Select **Framework preset: None**.
4. **Build command:** leave empty.
5. **Output directory:** `.` (repository root). Some Cloudflare interfaces accept `/` as root instead; use `.` if prompted for a folder name.
6. Deploy. Cloudflare will serve `index.html` from the repository root.

To develop locally, run:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`. You can also open `index.html` directly with a browser, subject to browser security and external CDNs.

### Source file layout

```text
index.html            Entry point and loading order
styles.css            Responsive design system + UI states
app.js                All nine core workspaces + Vision Studio + local data
motion-enhance.js     Motion animations with reduced-motion fallback
FEATURE_SPEC.md       Original full BlockOS scope and roadmap
README.md             Build/deploy instructions
.gitignore            Git housekeeping
```

## What this prototype **is not**

This is a presentation and exploration prototype—not a live civic information system.

- Addresses, property status, map geometry, budgets, apprenticeships, funding, employment numbers, and charts are synthetic or illustrative.
- Atlas positions are **not accurate Baltimore parcel coordinates**.
- The scenario generator is a **transparent heuristic**, not a production AI model, engineering assessment, appraisal, underwriting result or contractor quote.
- The before/after comparison is **concept art**, not evidence of a real property's past or future condition.
- Data updates persist only in that browser's **localStorage**. There is no shared database, account system, secure data access, official city integration, or employer verification.
- Do not enter private, regulated or sensitive information.
- There is **no government endorsement** of this software.

### Production readiness requirements

Before real implementation: authenticated user/organization roles, backend services, PostGIS + vetted GIS pipelines, document source provenance, audit trails, human review of models, licensed professional signoff, security review, and resident privacy safeguards. Form submissions and local state in this prototype are not a substitute.

## Testing

The project uses plain HTML/CSS/JavaScript. To test locally, navigate through every workspace, try the Vision Studio controls, edit a project, export a CSV, and reset the demo from the sidebar. Sample data is immediately reset with the **Reset demo workspace** action.

## Attribution

Inspired by examples and documentation published by Motion: https://motion.dev/examples . Uses the `motion` package as an optional animation enhancement. BlockOS visualization, visual system, workflows, and source code in this ZIP are original to this prototype; no Motion+ premium snippet code is included.
