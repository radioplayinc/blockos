# BLOCKOS
## Full Feature Catalog & Mayor-Ready MVP Product Requirements

**Version:** 1.0  
**Date:** November 6, 2026  
**Status:** Proposed product specification—not deployed, funded, endorsed, or integrated with Baltimore City  
**Positioning:** *The operating system for rebuilding cities.*  
**Initial market:** Baltimore, Maryland  
**Program relationship:** BlockOS is the reusable technology product; Baltimore NEXT is the proposed community innovation, training, and employment initiative.

---

## 1. Executive product definition

**BlockOS is an AI-assisted redevelopment execution platform connecting property intelligence, rehabilitation planning, project delivery, funding coordination, local hiring, and community impact reporting.** It should leverage existing public and authorized partner data rather than duplicate Baltimore City's mapping systems.

### Product promise

> Take a redevelopment opportunity from *identified property* to *approved plan* to *funded and staffed project* to *measurable neighborhood outcomes* in one coordinated system.

### Differentiation

Baltimore already provides substantial property data and maps. CoDeMap, the Baltimore Open Land Data (BOLD) project, city GIS layers, and Reframe Baltimore dashboards cover many discovery and reporting needs. BlockOS must distinguish itself through the **work between discovery and completion**: case management, structured feasibility work, cross-party collaboration, verified project execution, and connection to paid resident jobs. The proposed Baltimore NEXT workforce initiative makes that link tangible.

### Product goals

1. Make redevelopment projects faster to evaluate and easier to coordinate, without claiming AI can replace licensed professionals, legal processes, or public approvals.
2. Improve access to paid local work, apprenticeships, and small-business contracting opportunities.
3. Give developers, community organizations, lenders, and city stakeholders a common project record, with appropriate permissions.
4. Produce trustworthy project and workforce evidence for neighborhood-level decision making.
5. Establish reusable software that could serve other cities after Baltimore validation.

### Non-goals for MVP

- No fully autonomous structural assessments, permit approvals, legal title determinations, or financing decisions.
- No citywide high-fidelity 3D twin, autonomous demolition, or robot-built housing.
- No private-property drone inspections without property-owner consent and other required approvals.
- No algorithmic neighborhood scoring that acts as a substitute for community consent or equitable planning.
- No claim that BlockOS is an official city system, has city data-sharing agreements, or has been endorsed by the Mayor.

---

## 2. Product tiers and priority definitions

| Priority | Meaning | Target |
|---|---|---|
| **P0 / MVP** | Required to demonstrate a complete end-to-end story and support a limited partner pilot | First 90–120 days, subject to staffing and data readiness |
| **P1 / Pilot** | Required for serious multi-party pilots and initial recurring customer value | Months 4–9 |
| **P2 / Scale** | Larger commercial product, deeper automation, partner integration | Months 9–18+ |
| **P3 / Vision** | R&D or complex infrastructure, robotics, underwriting, deeper city system interoperability | Feasibility-gated future releases |

**Design principle:** P0 must be functional, not a collection of animated mockups. However, it is acceptable to use visibly labeled *sample/simulated* property scenarios for the Mayor presentation when live information or partner approvals are unavailable. Verified and simulated metrics must never be mixed.

---

## 3. User types and permission model

| Role | Primary jobs to be done | Data boundary |
|---|---|---|
| Platform super administrator | Configure tenants, source connectors, permissions, AI policies | Restricted system access with full audit trail |
| Organization administrator | Invite teams, manage organization projects and settings | Own organization's data |
| Redevelopment project manager | Evaluate, plan, schedule, budget and report projects | Assigned projects |
| Developer / property owner | Submit documents, manage permissions, review proposals | Owned/authorized properties and projects |
| Licensed assessor / engineer | Upload findings, verify assumptions, approve technical reports | Assigned inspections |
| Contractor / fabricator | Review scopes, submit bids, receive work orders, record progress | Authorized work packages |
| Training partner / program coordinator | Manage eligible trainees, skills and placements | Opted-in workforce information |
| Resident / trainee | Find opportunities, consent to share qualifications, track applications | Own profile and publicly disclosed information |
| Funder / lender | Review permissioned projects, conditions and milestones | Authorized project data; no default personal access |
| Civic / mayoral viewer | View verified, aggregate progress and carefully marked demonstrations | Approved aggregate/public data |
| General public / community organization | Explore public project information, provide structured feedback | Public data only |

**Multi-tenancy requirement:** Every non-public data object belongs to an organization and/or project with explicit access grants. A citywide view may aggregate safe public metrics; it must not bypass project-level permissions.

---

## 4. Full feature catalog

### A. Core accounts, organizations and security

| ID | Feature | What it does | Priority |
|---|---|---|---|
| CORE-01 | Secure sign-in | Email/passwordless or SSO sign-in with protected sessions | P0 |
| CORE-02 | Role-based permissions | Enforce role and project-level access on server and UI | P0 |
| CORE-03 | Organization workspaces | Separate developer, nonprofit, training and vendor data | P0 |
| CORE-04 | Team invitations | Add and remove staff; revoke access immediately | P0 |
| CORE-05 | Demo environment | Clearly badge sample/simulated records and prevent mixing with production | P0 |
| CORE-06 | Change history | Timestamp and attribute edits to actors and sources | P0 |
| CORE-07 | MFA and SSO | Strengthen organizational accounts and enterprise sign-in | P1 |
| CORE-08 | Granular sharing | Time-bound project invitations, read/download/edit permission settings | P1 |
| CORE-09 | Data retention controls | Tenant-specific deletion, export and retention workflows | P1 |
| CORE-10 | Enterprise tenant provisioning | Branded organizations and optional custom domain | P2 |

### B. BLOCKOS ATLAS — map and property discovery

| ID | Feature | What it does | Priority |
|---|---|---|---|
| ATLAS-01 | Interactive Baltimore map | Pan, zoom and select parcel/building features | P0 |
| ATLAS-02 | Property search | Locate by address, parcel ID, neighborhood or known reference | P0 |
| ATLAS-03 | Vacant-building layer | Show city-published vacant notices with source and refresh date | P0 |
| ATLAS-04 | Permit/rehab layers | Add available permit and rehabilitation records | P0 |
| ATLAS-05 | Status legend | Distinguish city record, project status, missing data and demo data | P0 |
| ATLAS-06 | Property-to-project action | Create project case from a selected parcel without rewriting source records | P0 |
| ATLAS-07 | Multi-filter search | Filter by neighborhood, notice, stage, public funding geography or user tags | P1 |
| ATLAS-08 | Block-level selections | Group adjacent parcels into a candidate whole-block project | P1 |
| ATLAS-09 | Layer switcher | Overlay districts, lots, zoning, flood risk and investment areas where allowed | P1 |
| ATLAS-10 | Saved geographies | Save a block, corridor or neighborhood portfolio | P1 |
| ATLAS-11 | Map export | Export approved map images, PDF snapshots and source attribution | P1 |
| ATLAS-12 | Map comments | Coordinate spatial notes without modifying official records | P2 |
| ATLAS-13 | Heatmaps and clusters | Summarize concentrations of project stages, not opaque desirability scores | P2 |
| ATLAS-14 | 3D neighborhood visualization | Optional extruded buildings and modeled project status | P2 |
| ATLAS-15 | Citywide simulation | Compare future redevelopment scenarios in a separate, clearly simulated layer | P3 |

### C. PROPERTY 360 — individual property intelligence

| ID | Feature | What it does | Priority |
|---|---|---|---|
| PROP-01 | Property dossier | A single workspace for address, parcel, status, records and project activity | P0 |
| PROP-02 | Source provenance | Show the original data provider, fetched-at time and authoritative link | P0 |
| PROP-03 | Known vs. unknown flags | Mark ownership, title, access, structural condition and finance as unverified until confirmed | P0 |
| PROP-04 | Photo and document upload | Store authorized photos, reports and drawings with descriptions | P0 |
| PROP-05 | Property readiness checklist | Human-maintained diligence gates and blockers | P0 |
| PROP-06 | Activity feed | Track relevant updates, uploads, comments and decisions | P0 |
| PROP-07 | Ownership/parcel references | Display public data where lawfully available without asserting clear title | P1 |
| PROP-08 | Inspection scheduling | Assign site visits to authorized personnel | P1 |
| PROP-09 | Inspection forms | Standardized observations, conditions, hazards and sign-off | P1 |
| PROP-10 | Image location/annotations | Tag photos by floor, room or facade element | P1 |
| PROP-11 | Property grouping | Link adjacent parcels under one block project | P1 |
| PROP-12 | Historical record | Maintain source snapshots and project status over time | P2 |
| PROP-13 | 3D digital twin attachment | Embed uploaded scans/models with version and access control | P2 |
| PROP-14 | Asset lifecycle | Connect rehab history to ongoing building maintenance | P3 |

### D. BLOCKOS INTELLIGENCE — AI-assisted feasibility

| ID | Feature | What it does | Priority |
|---|---|---|---|
| AI-01 | Document summarization | Summarize uploaded property documents with source references | P0 |
| AI-02 | Feasibility checklist assistant | Identify missing inputs, risks and recommended next professional review | P0 |
| AI-03 | Preliminary scope generator | Draft an editable task list from authorized observations; no autonomous engineering conclusions | P0 |
| AI-04 | Assumption display | Clearly show which facts, estimates and human inputs shaped an output | P0 |
| AI-05 | Human review/approval | Require qualified review before reports can be marked approved | P0 |
| AI-06 | Cost scenario worksheet | Calculate user-entered quantities and rates for low/base/high estimates | P1 |
| AI-07 | Scenario comparison | Compare rehabilitation, stabilization, demolition/rebuild, or other lawful options | P1 |
| AI-08 | Permit checklist helper | Suggest likely permits and mark them as requiring official confirmation | P1 |
| AI-09 | Question-and-answer assistant | Answer permissioned questions grounded in property dossier documents | P1 |
| AI-10 | Model evaluation | Track error cases, corrections, confidence/uncertainty and quality checks | P1 |
| AI-11 | Computer-vision review | Assist qualified assessors in flagging potential visible issues from consented imagery | P2 |
| AI-12 | Portfolio planning assistant | Suggest human-reviewable task sequencing across related projects | P2 |
| AI-13 | Energy retrofit planning | Compare preliminary efficiency measures with appropriately qualified review | P2 |
| AI-14 | Neighborhood investment scenarios | Model infrastructure and housing plans with transparent assumptions | P3 |

### E. BLOCKOS PROJECTS — the central execution system

| ID | Feature | What it does | Priority |
|---|---|---|---|
| PROJ-01 | Create a project | Convert property or group into a managed redevelopment case | P0 |
| PROJ-02 | Project stage tracking | Intake → diligence → design → financing → permitting → execution → completed | P0 |
| PROJ-03 | Tasks and owners | Create assignments, due dates, priorities and task status | P0 |
| PROJ-04 | Milestones | Define expected dates and record actual completion | P0 |
| PROJ-05 | Project budget | Editable line items, planned/committed/actual amounts and variance | P0 |
| PROJ-06 | Notes and decisions | Record rationale, responsible person and approval status | P0 |
| PROJ-07 | Project dashboard | Summarize status, next actions, budget and blockers | P0 |
| PROJ-08 | Document folder | Store scopes, agreements and evidence with role access | P0 |
| PROJ-09 | Progress log | Record dated updates and photos | P0 |
| PROJ-10 | Kanban board | View projects by stage and filter by lead/status | P1 |
| PROJ-11 | Contractor work orders | Assign scopes to vetted organizations; capture acceptance | P1 |
| PROJ-12 | Procurement/RFQ workspace | Issue private requests for quotes; compare submissions | P1 |
| PROJ-13 | RFI/change orders | Track questions, scope changes and authorizations | P1 |
| PROJ-14 | Inspection and permit milestones | Record third-party findings and official permit reference numbers | P1 |
| PROJ-15 | Dependencies/Gantt | Visualize task dependencies and potential schedule delays | P1 |
| PROJ-16 | Payment milestone tracking | Record agreed milestones; avoid moving money in MVP | P1 |
| PROJ-17 | Portfolio reporting | Consolidate multi-property schedules, budgets and risk registers | P2 |
| PROJ-18 | Construction software integrations | Synchronize selected items with established field systems where authorized | P2 |

### F. BLOCKOS CAPITAL — funding and investor coordination

| ID | Feature | What it does | Priority |
|---|---|---|---|
| CAP-01 | Sources and uses table | Record project funding needs and proposed sources | P0 |
| CAP-02 | Funding pipeline status | Track prospective, applied, committed, closed and disbursed amounts | P0 |
| CAP-03 | Funding disclaimer/status | Distinguish potential eligibility from actual award, commitment or approval | P0 |
| CAP-04 | Funding program directory | Curated programs with requirements, owners, current dates and source links | P1 |
| CAP-05 | Eligibility checklist | Human-verifiable fit of a project to published requirements | P1 |
| CAP-06 | Grant/loan package workspace | Organize documents and requirements for applications | P1 |
| CAP-07 | Funder read-only room | Permissioned documents, updates and reports | P1 |
| CAP-08 | Capital gap visualization | Show remaining funding need under different cost assumptions | P1 |
| CAP-09 | Approved funding commitments | Store funding terms and approval evidence | P2 |
| CAP-10 | Scenario-level financial model | Investor-grade cash flow, sensitivity, affordability and debt assumptions | P2 |
| CAP-11 | Direct loan/grant submission | Agency-approved integration only, if ever authorized | P3 |

### G. BLOCKOS WORKFORCE — Baltimore NEXT connection

| ID | Feature | What it does | Priority |
|---|---|---|---|
| WORK-01 | Opportunity board | Display opt-in paid project roles, apprenticeships and training opportunities | P0 |
| WORK-02 | Local job tagging | Mark Baltimore-based employers, project locations and pay information | P0 |
| WORK-03 | Skills/qualification tags | Let workers and coordinators record verified and self-reported skills separately | P0 |
| WORK-04 | Assignment request | Allow a coordinator to link an opportunity to a project task | P0 |
| WORK-05 | Privacy and consent | Worker controls sharing of profile/contact information | P0 |
| WORK-06 | Applications and review | Manage applicant interest and human selection | P1 |
| WORK-07 | Training cohorts | Track enrollments, attendance and completion | P1 |
| WORK-08 | Verified credentials | Attach certifications, issuer and expiration where applicable | P1 |
| WORK-09 | Apprenticeship hours | Record supervised paid hours and role progression | P1 |
| WORK-10 | Employer profiles | Capture employer verification, job needs and contacts | P1 |
| WORK-11 | Placement tracking | Record offers, starts, wages and 30/90/180/365-day retention | P1 |
| WORK-12 | Support service referrals | Connect willing participants with training, transit or childcare support partners | P2 |
| WORK-13 | Contractor talent pool | Match qualified, consenting workers to project requirements with human review | P2 |
| WORK-14 | Small-business incubator | Connect resident-owned startups to mentors, contracts and resources | P2 |
| WORK-15 | Skills forecasting | Summarize project pipeline demands for future training cohorts | P3 |

### H. BLOCKOS FABRICATE — advanced manufacturing and robotics

| ID | Feature | What it does | Priority |
|---|---|---|---|
| FAB-01 | Manufacturing opportunity tag | Identify project components that may be suitable for controlled off-site fabrication | P1 |
| FAB-02 | Fabrication work package | Describe design, material, quantities, shop, due date and approvals | P1 |
| FAB-03 | Vendor/capability directory | Record approved CNC, 3D scanning and robotics shop capabilities | P1 |
| FAB-04 | Digital model attachment | Link approved CAD/BIM/model file to work package | P2 |
| FAB-05 | Shop task tracking | Track fabrication, quality inspection, transport and installation | P2 |
| FAB-06 | Component traceability | Document source, batch, inspector and installation location | P2 |
| FAB-07 | Robotic cell telemetry | Connect approved industrial systems through secure adapters | P3 |
| FAB-08 | Automated fabrication proposals | Human-approved suggestions from standardized component libraries | P3 |
| FAB-09 | Robotic retrofit demonstrator | Pilot one narrowly scoped, safe, code-compliant repeatable component | P3 |
| FAB-10 | Predictive equipment maintenance | Monitor approved factory equipment data | P3 |

### I. BLOCKOS IMPACT — public accountability and the Mayor's view

| ID | Feature | What it does | Priority |
|---|---|---|---|
| IMP-01 | Executive dashboard | High-level projects, stages, jobs and funding pipeline cards | P0 |
| IMP-02 | Verified vs. projected labeling | Prevent sample, planned and confirmed outcomes from appearing equivalent | P0 |
| IMP-03 | Property progress counts | Show property cases by stage with definitions | P0 |
| IMP-04 | Local work indicators | Show paid roles and hours only when backed by records | P0 |
| IMP-05 | Story view | Present a specific property/project's before-to-current timeline | P0 |
| IMP-06 | Exportable report | Generate a branded, timestamped pilot summary | P0 |
| IMP-07 | Project economics | Aggregate planned/committed/actual spend and variance | P1 |
| IMP-08 | Wage and retention outcomes | Analyze verified placements and job quality | P1 |
| IMP-09 | Neighborhood geography | Show output by selected area with small-count privacy protections | P1 |
| IMP-10 | Local vendor spend | Track verified awards and payments to Baltimore businesses | P1 |
| IMP-11 | Resident feedback | Aggregate opt-in feedback and documented responses | P1 |
| IMP-12 | Anti-displacement indicators | Track affordability, resident protections and relevant outcome measures | P2 |
| IMP-13 | Public open-data feed | Publish approved aggregated metrics with definitions and provenance | P2 |
| IMP-14 | Longitudinal evaluation | Compare pilot results to baselines and appropriate control/comparison cases | P2 |

### J. COMMUNITY PORTAL — resident transparency and participation

| ID | Feature | What it does | Priority |
|---|---|---|---|
| COMM-01 | Public project pages | Show approved status, goals, timelines and contact points | P0 |
| COMM-02 | Clear data labeling | Distinguish government data, developer claims and BlockOS estimates | P0 |
| COMM-03 | Resident opportunity links | Link public-facing jobs and learning opportunities without exposing private applicant information | P0 |
| COMM-04 | Community feedback intake | Provide feedback form with moderation and accessible alternative channels | P1 |
| COMM-05 | Feedback response tracking | Record issue category, response, owner and status | P1 |
| COMM-06 | Public meeting/event notices | Post project and neighborhood consultation dates | P1 |
| COMM-07 | Accessibility and translation | Screen-reader usability, plain language and prioritized language support | P1 |
| COMM-08 | Opt-in notifications | Email/SMS for public project updates | P2 |
| COMM-09 | Resident benefits/resources | Curated homeowner repair, anti-displacement and housing support links | P2 |
| COMM-10 | Community priorities | Record resident-defined success criteria before project prioritization | P2 |

### K. DATA, interoperability, governance and operations

| ID | Feature | What it does | Priority |
|---|---|---|---|
| OPS-01 | Official GIS ingestion | Read publicly available ArcGIS data with permitted API usage | P0 |
| OPS-02 | Source status dashboard | Surface failed imports, data freshness and missing fields | P0 |
| OPS-03 | Manual source review | Staff can correct mapping errors without altering authoritative source | P0 |
| OPS-04 | Audit log | Record logins, exports, project changes and AI approvals | P0 |
| OPS-05 | Error handling and observability | Alert on broken imports, failures and suspicious activity | P0 |
| OPS-06 | Encrypted file storage | Private project storage with signed, short-lived access | P0 |
| OPS-07 | Accessibility baseline | Target WCAG 2.2 AA for core web workflows | P0 |
| OPS-08 | Responsive screens | Desktop/tablet operations and mobile-friendly resident pages | P0 |
| OPS-09 | Data refresh scheduler | Scheduled retrieval, checkpoints and rate-aware API calls | P1 |
| OPS-10 | Source reconciliation | Detect changed address/parcels and de-duplicate safely | P1 |
| OPS-11 | API and webhooks | Integrate approved partner software and export authorized records | P1 |
| OPS-12 | Privacy requests | Process user access/correction/deletion requests as applicable | P1 |
| OPS-13 | Security testing | Dependency, application, penetration and access-control testing | P1 |
| OPS-14 | Backup/recovery | Tested backups, restores and incident response procedures | P1 |
| OPS-15 | Analytics dictionary | Define denominators and verification methods for every reported metric | P1 |
| OPS-16 | AI evaluation and prompt logging | Redaction, model versioning, human corrections and safety review | P1 |
| OPS-17 | Enterprise compliance package | Procurement, security, privacy, accessibility and vendor-review evidence | P2 |
| OPS-18 | Multi-city adapter framework | Configuration for other jurisdictions without Baltimore-specific hardcoding | P2 |
| OPS-19 | Partner-approved system integration | Bi-directional data exchange only with lawful authority and contractual agreements | P3 |

---

## 5. MVP: the exact screens to design and implement

**Release 0.1 should have nine polished screens.** Each must use consistent navigation, a coherent data model and obvious source/demo badges.

### Build in two cuts, not all at once

The full catalog contains **150 feature rows**, including foundational safeguards, administrative functions, and future capabilities. The **57 P0 rows define a pilot-capable MVP**, not 57 independent product launches. For the first Mayor meeting, ship one **thin vertical demonstration slice** before completing every P0 capability:

**Mayor demonstration slice (first priority):** `CORE-01, 02, 05`; `ATLAS-01, 02, 03, 06`; `PROP-01, 02, 04`; `AI-01, 02, 04, 05`; `PROJ-01, 02, 03, 05`; `CAP-01, 03`; `WORK-01, 04, 05`; `IMP-01, 02, 03, 04`; `OPS-01, 04, 06`. This is a connected experience, not a separate fake app. Each linked screen can initially be narrower than the complete final module.

**Pilot-capable MVP (second priority):** Complete remaining P0 requirements, harden security/accessibility, and validate with partner operations. Do not expose a partially secured prototype to real outside users or store real worker/financial records before the relevant P0 controls are tested.

| Screen | Purpose | Must function in Mayor demo |
|---|---|---|
| **01. Command Center** | Single executive overview | Click metrics to project lists; filter by demo pilot; clearly distinguish verified vs scenario |
| **02. City Atlas** | Geographic entry point | Load actual permitted GIS layer; search/select parcel; switch to visibly simulated pilot layer |
| **03. Property 360** | Individual parcel dossier | Show records, provenance, photos, diligence, ownership/access status and active project |
| **04. AI Feasibility Studio** | Assist professional workflow | Upload a sample report; generate reviewable scope, unknowns, assumptions and citations |
| **05. Project Workspace** | Execute rehab | Advance milestones, edit budget, assign task, upload progress, retain activity trail |
| **06. Capital Workspace** | Financial coordination | Edit sources/uses, status of potential vs committed funds, show gaps |
| **07. Workforce Exchange** | Link local jobs | Post paid work opportunity; assign a training partner and candidate with explicit consent |
| **08. Impact & Accountability** | Measurable outcomes | Show property progress, paid hours, project budgets and verification badges; export report |
| **09. Community View** | Public trust | Public project timeline, contacts, benefits, jobs; no private applicant or investor data |

**Stretch screen:** A visually impressive 3D block view with colored project stages. Build this only if the underlying map, project workflow and source labels are working; a simple extruded block model is enough for presentation. A full 3D reconstruction can wait.

### Suggested navigation

`Overview | Atlas | Properties | Projects | Intelligence | Capital | Workforce | Impact | Community | Admin`

### Product UI direction

- Premium command-center aesthetic: deep graphite/navy, restrained teal/cyan highlights, white data labels and occasional warm amber alerts.
- Design for municipal and construction professionals: clarity, speed, and low cognitive load, not ornamental animation.
- Map and property dossier form the spatial core; every metric links to an underlying record.
- Use subtle transitions and a single compelling property-to-project animation for the Mayor walkthrough.
- On-screen labels: **Official source**, **Partner-provided**, **Estimated**, **Proposed**, **Demonstration only**, **Verified**.

---

## 6. Demonstration scenario for Mayor Scott (six to eight minutes)

**Set the demo in one explicitly hypothetical 12-property block, or in a real partner-approved pilot block once available. Do not invent real ownership or city endorsements.**

1. **The problem (45 seconds):** Open Baltimore overview and explain that public systems identify many properties, but execution spans numerous participants.
2. **The map (60 seconds):** Select the sample block and navigate from GIS source to BlockOS project record.
3. **The assessment (90 seconds):** Open Property 360. Show factual source fields and a generated feasibility checklist grounded in an uploaded sample inspection document. Display an unanswered structural question, demonstrating human oversight.
4. **The plan (90 seconds):** Turn the reviewed tasks into a budget, milestones and funding-gap scenario. Move one milestone from planning to in progress.
5. **The jobs (60 seconds):** Open Workforce, create one paid trainee task, and show how a consenting worker can be linked to a supervisor or contractor.
6. **The accountability (60 seconds):** Show Impact dashboard separating confirmed activity from planned outcomes, then export the pilot report.
7. **The ask (30 seconds):** Invite a scoped pilot with selected redevelopment, workforce and technology partners—not an immediate citywide software purchase.

**Mayor demo sound bite:**

> “BlockOS turns property data into coordinated redevelopment projects—and connects those projects to paid opportunities for Baltimore residents. Baltimore NEXT supplies the workforce and technology capacity to execute.”

---

## 7. End-to-end MVP workflows and acceptance criteria

### Workflow 1 — Property → project

**Given** a map property linked to a public record, **when** an authorized developer selects *Create Project*, **then** a project case is created with source attribution, no official record is modified, and only invited users can see private notes.

Acceptance checks:

- Every imported fact has a visible source and fetch date.
- Missing information is not silently inferred.
- Newly created project appears in Project Workspace and project counts.
- An uninvited user cannot retrieve the case through UI or API.

### Workflow 2 — Documents → AI scope

**Given** an uploaded authorized sample report, **when** the assistant generates a scope draft, **then** each factual finding links to evidence, assumptions are labeled, and a human can edit/approve/reject the output.

Acceptance checks:

- No claim of licensed structural sign-off.
- No cost or code compliance guarantee.
- Source and model-version metadata persist.
- The original document remains unchanged.
- An assessor can record correction and sign-off status.

### Workflow 3 — Project → paid opportunity

**Given** a project task requiring labor, **when** a manager creates a workforce request, **then** the opportunity appears for authorized program staff with location, pay, duration, supervisor and required skills.

Acceptance checks:

- A trainee opts in before personal information is disclosed.
- Human coordinator approves placement; no automatic employment eligibility decision.
- Only verified paid hours count toward public metrics.
- Offer, start and retention states remain distinct.

### Workflow 4 — Budget → funding gap

**Given** manually validated budget inputs and financing sources, **when** amounts change, **then** uses/sources/gap recalculate and every source has a status: proposed, applied, committed, closed or disbursed.

Acceptance checks:

- Potential grant matches never appear as secured funding.
- Line item changes are timestamped and attributable.
- Export includes assumptions and currency units.

### Workflow 5 — Project → impact dashboard

**Given** milestones, project changes and paid work records, **when** a civic viewer loads the dashboard, **then** only authorized aggregate metrics appear and each figure can be traced to a documented definition.

Acceptance checks:

- Never sum simulated records with verified records.
- Small-count privacy thresholds protect individual workers.
- Project totals reconcile to detail views.
- Export identifies reporting window, source freshness and verification status.

---

## 8. Core data model

| Entity | Key fields / relationships |
|---|---|
| Organization | ID, type, permissions, members |
| User & membership | ID, role, tenant, access grants, consent |
| Parcel / property | Stable internal ID, city parcel reference, address, geography, source links |
| Source record | System, external ID, timestamp, field map, change/version history |
| Media / document | Property/project ID, owner, file type, consent, visibility |
| Inspection | Property, assessor, date, observations, professional review state |
| Feasibility scenario | Property, version, assumptions, scope, human approval, cost range |
| Project | Linked properties, owner, stage, team, target dates, risk |
| Task / milestone | Project, assignee, due date, status, evidence |
| Budget & funding source | Project, planned/actual amount, funding status, evidence |
| Vendor / work order | Organization, project, scope, terms, completion evidence |
| Worker / skill | Consent, qualifications, verification, visibility controls |
| Opportunity / placement | Project task, pay, applicant, employer, start/retention state |
| Impact observation | Defined metric, geography, window, source, verified/simulated status |
| Audit event | Actor, action, entity, timestamp, previous/new summary |

**Important:** `Property` and `Project` are not the same. One property may have multiple proposals over time; a project may cover multiple properties. Official municipal status is a source record, while BlockOS stage is a separate, private operational state.

---

## 9. Data sources and integration plan

The following are **prospective public sources to verify technically and legally before production use**, not existing BlockOS integrations.

| Source | Potential use | Implementation caution |
|---|---|---|
| Baltimore DHCD ArcGIS Housing/DHCD_Open_Baltimore_Datasets | Vacant Building Notices, rehabilitations, permits and related housing layers | Check official metadata, field semantics, rate limits, refresh cadence and permitted use |
| CoDeMap | City reference for property details and layers | Link to official interface; do not clone protected workflows |
| Baltimore Open Land Data (BOLD) | Cross-check parcel information and existing community analysis capabilities | Avoid replicating existing data product; investigate collaboration |
| Reframe Baltimore / BVRC dashboards | City/state policy and published program-level progress | Treat as reference for definitions; avoid unverifiable project joins |
| Maryland SDAT real property search | Human-verified ownership and assessment information | Public website availability does not imply authorized bulk API or scraping |
| Developer/contractor uploads | Actual scopes, budgets, inspection reports and progress evidence | Explicit authorization and project-level access control |
| Training/employer systems | Skills, opportunities and validated placements | Data sharing agreements, privacy, consent and human review |
| Drone/scan assets | Authorized images and future digital twins | Owner consent, approved operator and flight/site rules; no automated structural determination |

**Initial source strategy:** Ingest a narrow set of permitted city GIS layers, store source identifiers and refresh timestamps, allow manual reconciliation, then attach *project-owned* operational records. Do not build the MVP around unavailable agency credentials or restricted integrations.

---

## 10. Proposed technical architecture

| Layer | MVP approach | Why |
|---|---|---|
| Web app | TypeScript + React/Next.js | Maintainable dashboards, forms and maps |
| Mapping | MapLibre GL or comparable map SDK, with GeoJSON vector layers | Interactive property map without proprietary lock-in assumption |
| API | FastAPI (Python) or equivalent typed application service | Integrates geospatial records, workflows and AI |
| Database | PostgreSQL + PostGIS | Property geometry, project records, joins and spatial queries |
| Background jobs | Scheduled worker/queue | Incremental data import and document processing |
| File storage | Encrypted object storage | Reports, evidence, images and project files |
| AI service | Model provider behind a controlled service, retrieval from authorized files | Source-grounded drafting, assumptions, approvals and logging |
| Identity | Mature authentication service with organization roles | Reduces avoidable security risk |
| Event/audit | Immutable-style append-only audit records | Project accountability and reporting provenance |
| Analytics | Defined metric layer and aggregate queries | Reproducible dashboards |
| 3D (later) | Lightweight map extrusions, then consented BIM/scan viewer | Presentation impact without delaying core MVP |

### API boundary

Suggested endpoint areas: `/properties`, `/sources`, `/projects`, `/tasks`, `/documents`, `/assessments`, `/scenarios`, `/budgets`, `/funding`, `/opportunities`, `/placements`, `/impact`, `/organizations`, `/audit`.

The implementation should use structured schemas, data validation, permission checks on every private endpoint, idempotent ingestion, monitoring and automated tests. Architectural technology selections are recommendations, not vendor commitments.

---

## 11. Reliability, privacy, AI governance and accessibility

### MVP launch gates

- No unauthorized sharing or cross-tenant data exposure in role and API tests.
- No personally identifiable workforce information in the public dashboard.
- Data provenance and sample/verified label on all consequential facts and metrics.
- Explicit human approval before an AI-generated technical or cost report is shown as approved.
- Document/file upload malware scanning, size limits and encryption.
- No direct drone operation from BlockOS; imported assets must be authorized.
- Accessibility testing of navigation, keyboard controls, color contrast and forms; aim for WCAG 2.2 AA.
- Reliable error states when city source systems are unavailable; show last successful refresh.
- Audit logs for sensitive access, exports, approval changes and source refreshes.
- Backups and at least one tested restore before externally hosted production use.

### Design for equitable outcomes

- Property prioritization must remain human-governed with documented community criteria.
- Avoid hidden demographic proxies or algorithmic decisions that could reinforce housing discrimination.
- Residents can submit feedback, request corrections and view public project timelines.
- Explicitly track affordable housing, local contracts, wages, retention and displacement-prevention commitments where data is authorized.
- Provide non-digital and accessible routes for residents who cannot use the app.

---

## 12. Roadmap with exit gates

| Stage | Build | Gate to proceed |
|---|---|---|
| **0: Discovery (weeks 1–3)** | Partner interviews, source inventory, permission model, data model, pilot selection, design prototype | One potential redevelopment operator and one workforce partner agree to validate workflow |
| **1: MVP (weeks 4–12/16)** | Nine screens, official-data read integration, projects, basic AI drafting, budgets, jobs, impact and demo mode | Five complete acceptance workflows pass; no critical privacy/security failures |
| **2: Live pilot (months 4–9)** | Onboard real consented projects, reporting, inspection forms, funding tracking, applicant management | Measured time savings or stronger coordination, verified paid work outcomes, operator willingness to continue |
| **3: Expansion (months 9–18)** | 3D scans, deeper integrations, advanced analytics, multi-organization commercial subscriptions | Documented value, sustainable unit economics, repeatable partner onboarding |
| **4: R&D (after validation)** | Robotics telemetry, semi-automated fabrication planning, citywide digital twins | Independently demonstrated feasibility, safety, regulatory and commercial value |

### Indicative MVP team

- Product lead/business analyst (1)
- UX/UI and map designer (1)
- Full-stack/web developers (2–3)
- Data/GIS engineer (1)
- AI/backend engineer (1, may overlap)
- QA/security reviewer (fractional or independent)
- Community/development subject-matter advisor and workforce partner representatives

Planning range for a credible first 4–6 month software MVP and pilot preparation: **roughly $200,000–$500,000** depending on build approach, team rates, integrations and external partners. This is **not a vendor quote**. Building a separate robotic fabrication facility or rehabilitating properties is outside this range.

---

## 13. Metrics and evidence plan

| Outcome | Metric | Evidence |
|---|---|---|
| Faster decisions | Median days from property intake to a human-reviewed feasibility packet | Intake timestamps and approval dates |
| Better project delivery | Milestone adherence; number of unresolved blockers; budget variance | Project audit records and invoices |
| Actual redevelopment | Properties that move from planned to verified rehabilitation/occupancy milestones | Licensed/official documents where applicable |
| Job creation | Verified paid assignments, job starts, paid hours, starting wages | Employer/contractor records and participant consent |
| Sustainable opportunity | 90/180/365-day job retention and pay progression | Employer records or consented follow-up |
| Local business growth | Value of verified work awarded and paid to city-based contractors | Agreements, award and payment documentation |
| Community trust | Feedback resolved, affordability commitments, resident participation | Meeting records, reports, surveys |
| Commercial product value | Active paying organizations, retention, saved admin hours, onboarding time | Product analytics, contracts and workflow baselines |

**Reporting policy:** Show *planned*, *underway*, *completed*, and *verified outcome* as separate states. Measure changes against a pre-pilot baseline; do not label correlations as proof of causation.

---

## 14. Suggested first pilot package

**Size:** one block or tightly bounded portfolio of approximately 10–20 properties, one redevelopment operator, one workforce/training partner, one construction/fabrication partner, and a small resident advisory group.

**Outputs:**

1. A functioning BlockOS dashboard with permitted public data and consented project records.
2. A set of human-reviewed property dossiers and preliminary scopes.
3. Live tasks/milestones for actual partner operations.
4. At least one posted paid work opportunity with end-to-end consent and assignment workflow.
5. A verified pilot impact report with appropriately limited claims.
6. A bounded robotics or digital fabrication feasibility study—not a promise of autonomous housing construction.

**Mayor's ask:** Facilitate introductions and a scoped pilot evaluation with relevant agency and community partners, identify pathways to approved data collaboration, and consider a future public demonstration subject to ordinary procurement, privacy and partnership requirements.

---

## 15. Open decisions before sprint zero

1. **Ownership:** Is BlockOS a standalone company with separately governed Baltimore NEXT partnership, or a single parent venture with program partners?
2. **First paying customer:** Community developer, CDFI/lender, housing nonprofit, contractor consortium or municipal buyer?
3. **Pilot operator:** Which organization controls the first properties and can supply real documents and workflows?
4. **Data:** Which datasets have reliable identifiers, API conditions and enough quality for the initial geography?
5. **Scope:** Does the first release prioritize one-property project operations or block-level portfolio management?
6. **AI:** Which document types and professional reviews are appropriate for first public demonstration?
7. **Workforce:** Which training organization/employers will provide wage and placement verification?
8. **Presentation:** Will the Mayor receive a live login, a guided screen demo, a recorded walkthrough, or all three?
9. **Procurement:** How will paid vendor services be structured without implying government endorsement or sole-source rights?

### Proposed sprint-zero decision

**Build the nine-screen BlockOS MVP around a real, authorized property workflow. Make map discovery useful but keep the product's identity anchored in project execution, local paid work, and verifiable impact.**

---

## 16. Source register (public planning references; verify current access and terms)

- Baltimore DHCD public ArcGIS service: <https://egisdata.baltimorecity.gov/egis/rest/services/Housing/DHCD_Open_Baltimore_Datasets/FeatureServer>
- Baltimore City GIS map layers: <https://baltegis.baltimorecity.gov/mapping/rest/services/Housing/DHCD_Open_Baltimore_Datasets/MapServer>
- DHCD CoDeMap context: <https://dhcd.baltimorecity.gov/>
- Baltimore Open Land Data (BOLD): <https://bniajfi.org/bold/>
- Reframe Baltimore: <https://reframebaltimore.com/>
- Maryland Reinvest Baltimore: <https://dhcd.maryland.gov/neighborhood-revitalization/reinvest-baltimore>
- Mayor's 2026 Action Plan: <https://www.baltimorecity.gov/>
- U.S. EDA Baltimore Tech Hub: <https://www.eda.gov/funding/programs/regional-technology-and-innovation-hubs/2023/Baltimore-Tech-Hub>

**Research caveat:** Public search results indicated these sources and relevant data categories as of November 6, 2026. A live API schema, licensing, availability and update-frequency audit is a sprint-zero task. This specification intentionally does not assert that any integration is already functioning.

