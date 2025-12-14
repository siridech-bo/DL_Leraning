# Fast.ai Lesson‑Driven Web App Plan

## Vision
- Build a modern, attractive companion web app that converts fast.ai topics into structured “build the app” experiences where students use Trae and an Agent to generate code, run locally, and learn deep learning by shipping.
- Embrace top‑down learning: start from working pipelines, then unpack the “why” behind data, models, metrics, deployment, and iteration.

## Core Outcomes
- Curated Agent prompt packs that generate training scripts, inference APIs, and lightweight UIs; students focus on concepts, not boilerplate.
- Lesson modules aligned to practical applications across vision, NLP, tabular, and recommender systems, with reflection and evaluation.
- Seamless “Copy to Trae” workflow: students paste prompts, run locally, debug with the Agent, and explain what they built.

## Architecture
- Frontend: Vue 3 + Vite + TailwindCSS with shadcn‑vue components for clean, accessible UI and consistent UX.
- Content: JSON/Markdown frontmatter defining lessons, prompts, acceptance criteria, resources, and minimal code blocks; rendered by lesson pages.
- Optional demo services: Small pretrained models for live try‑outs; primary workflow remains local via Trae.

## Content Model
- Lesson: `id`, `title`, `summary`, `concepts`, `dataset guidance`, `prompts`, `acceptance criteria`, `resources`.
- Prompt Packs: `training`, `inference`, `ui`, `debug`, `evaluate`, `reflect`, `performance`, `reproducibility`, `extension`.
- Blocks: Copyable text (prompts), links to notebooks/repos, and minimal example code when necessary.

## Lesson Modules (Part 1 coverage)
- Vision intro: image classification with transfer learning (`resnet34`).
- Deployment basics: serve predictions with a minimal API.
- Data handling and augmentation: transforms, splits, overfitting diagnostics.
- NLP: text classification with fastai text dataloaders.
- Tabular: feature engineering, validation strategy, metrics.
- Collaborative filtering: simple recommender with embeddings.
- Classical ML: random forests/regression, fastai style.
- Ethics and practical considerations: data quality, bias, privacy.
- Project wrap‑up and showcase.

## Key Features
- Copy to Trae: one‑click copy for each prompt and essential code block.
- Fix this error: guided area to paste traceback into a pre‑framed debug prompt.
- Acceptance checks: per‑lesson checklist for training artifact, API health, UI round‑trip.
- Concept reflections: short explanations of dataloaders, transfer learning, metrics, tradeoffs.
- Performance mini‑lab: measure latency, compare `resnet18` vs `resnet34`, resize tradeoffs.

## Student Workflow
- Open Trae; paste prompts to the Agent to generate training code, inference API, and a simple UI.
- Run locally; copy errors to the debug prompt; apply fixes; rerun.
- Validate with acceptance checks; read reflections to connect app behavior to DL concepts.
- Iterate: modify data, hyperparameters, and model choice; observe accuracy/latency impacts.

## Agent Prompt System
- Training:
  - Request a fastai script using `resnet34` and `fine_tune`, with dataset path guidance, accuracy printout, and saving `models/model.pkl`.
- Inference:
  - Request a FastAPI app exposing `POST /predict` and `GET /health`, returning `label`, `confidence`, `latency_ms`, with CORS enabled for local frontend.
- UI:
  - Request a Vue 3 page using shadcn‑style components for upload, preview, predict, and result card; `.env` to configure API URL.
- Debugging:
  - Paste traceback; prompt to diagnose and provide a minimal, pasteable fix with rationale.
- Evaluate:
  - Prompt to run a small validation set, show accuracy and a simple confusion summary, suggest one improvement.
- Reflect:
  - Prompt to explain data → model → metric pipeline, transfer learning benefits, and two anti‑overfitting steps.
- Performance:
  - Prompt to measure mean latency over N runs and recommend model/input changes with expected accuracy impact.
- Reproducibility:
  - Prompt to set seeds, log hyperparameters, and save metrics to `runs/` CSV.
- Extension:
  - Prompt to export to TorchScript/TFLite and outline preprocessing, single‑inference steps, and differences vs server inference.

## UI Design Principles (Modern + Attractive)
- Visual language:
  - shadcn‑vue components with Tailwind design tokens for a clean, professional look.
  - Consistent spacing, typography scale, and color system; accessible contrast ratios.
- Interaction:
  - Smooth micro‑interactions: button press states, skeleton loaders, toast feedback, subtle transitions (`duration‑150/300`, `ease‑out`).
  - Drag‑and‑drop file upload with instant preview; optimistic UI patterns where safe.
- Theming:
  - First‑class dark mode (`prefers‑color‑scheme`) with theme toggle; shared tokens for color and elevations.
- Layout:
  - Clear lesson hierarchy: concept primer, prompts, acceptance checks, resources; sticky sidebar for navigation.
  - Mobile‑first responsive design; keyboard‑navigable controls and proper focus rings.
- Accessibility:
  - ARIA‑friendly components, semantic landmarks, skip links, and robust keyboard navigation.

## Datasets & Resources
- Provide guidance to small datasets or tiny samples for quick local runs.
- Link to fast.ai notebooks, book chapters, forums, and recommended setup guides.

## Deployment
- Host as a static site (Vite build) with content sourced from JSON/Markdown.
- Optional backend for demo predictions; primary workflow remains local via Trae.

## Assessment & Analytics
- Self‑checklists per lesson for artifact creation, API health, UI round‑trip.
- Optional instructor dashboard to review completion stats and common error patterns.

## Milestones
- M1: Define content schema; draft Lesson 1 page with prompt packs and acceptance checks.
- M2: Build Vue + shadcn‑vue scaffolding; implement Copy to Trae UX; render Lesson 1 from content files.
- M3: Add debug console and reflection blocks; refine prompts based on pilot feedback.
- M4: Expand to lessons 2–4 (deployment, data/aug, NLP); integrate tiny sample datasets guidance.
- M5: Complete remaining lessons; add performance mini‑lab and reproducibility prompts.
- M6: Optional demo inference service; polish UI, accessibility, and mobile responsiveness.

## Risks & Mitigations
- Environment setup friction:
  - Provide short venv/conda prompts and dataset layout tips; keep datasets small.
- Over‑reliance on codegen:
  - Emphasize concept reflections and acceptance checks; prompts are concept‑first.
- Latency on low‑end hardware:
  - Encourage smaller models and input resizing; document expected tradeoffs clearly.

## Next Step
- Outline Lesson 1 content (prompts, acceptance checks, resources) and minimal site structure.
- When approved, scaffold the initial lesson page and content files, then expand to remaining lessons.

