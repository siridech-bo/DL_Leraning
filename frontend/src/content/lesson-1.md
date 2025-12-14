# Lesson 1: Image Classification (Top‑Down)

## Goal
- Build a small, working image classifier using transfer learning, serve predictions with a minimal API, and wire a simple UI. Learn core DL concepts by shipping first, then reflect and iterate.

## Concept Primer
- Top‑down approach: start with a complete, usable model, then dig into data, augmentation, and model internals.
- Transfer learning: reuse a pretrained CNN (e.g., resnet34) and fine‑tune on a small dataset to achieve strong results quickly.
- Metrics vs confidence: accuracy summarizes validation results; per‑sample confidence reflects model belief on a single image.

## Dataset Guidance
- Use a tiny cats vs dogs sample for fast iteration. Folder layout: `data/cats_vs_dogs/train/cat/...` and `data/cats_vs_dogs/train/dog/...` with class‑named subfolders.
- Keep images moderately sized (e.g., 256–512 px) to balance latency and accuracy during local development.

## Prompt Packs (Copy to Trae)

### Training
- I’m learning image classification the fast.ai way. Create a fastai script that:
  - Loads a small cats vs dogs dataset from `data/cats_vs_dogs`.
  - Uses `resnet34` and `fine_tune` for a few epochs.
  - Prints validation accuracy and saves the model to `models/model.pkl`.
  - Organize code so I can see data → model → training → metrics clearly.

### Inference API
- Build a minimal FastAPI service that:
  - Loads `models/model.pkl` at startup.
  - Exposes `POST /predict` accepting a JPEG/PNG image and returns JSON `{label, confidence, latency_ms}`.
  - Provides `GET /health` and enables CORS for a local Vue frontend.

### Web UI (Vue + shadcn‑style)
- Create a Vue 3 page using shadcn‑style components that:
  - Lets me upload an image and shows a preview.
  - Sends the file to `/predict` on click and displays the result in a Card.
  - Shows a loading skeleton during inference and a toast on error.
  - Reads the API base URL from `.env`.

### Debugging
- Diagnose and fix this error from my run. Explain briefly, then give pasteable changes:
  - Error: [paste full traceback]
  - Provide exact code or settings to update, with a one‑paragraph rationale.

### Evaluate
- Add a quick evaluation function that:
  - Runs the trained model on a small validation set.
  - Prints accuracy and a simple confusion‑style summary (counts per class).
  - Suggests one augmentation or learning rate tweak if accuracy is poor.

### Reflect
- Explain in 8–10 sentences what I built, focusing on:
  - How dataloaders map images to labels.
  - Why transfer learning helps with small datasets.
  - What accuracy means vs per‑prediction confidence.
  - Two concrete steps to reduce overfitting.

### Performance
- Measure average latency over 10 predictions with medium‑sized images. Recommend:
  - One model change (e.g., switch to `resnet18`).
  - One input change (e.g., resize to 256 px).
  - Describe expected accuracy impact for each change.

### Reproducibility
- Add reproducibility to the training script:
  - Set seeds, log key hyperparameters, and save metrics to a timestamped CSV under `runs/`.

## Resources
- Datasets: Oxford‑IIIT Pet (cats/dogs) `https://www.robots.ox.ac.uk/~vgg/data/pets/`
- Docs: fastai vision API `https://docs.fast.ai/vision.learner.html`
- Reference: FastAPI `https://fastapi.tiangolo.com/`

## Acceptance Checks
- Training: running the script prints validation accuracy and creates `models/model.pkl` without runtime errors.
- Backend: `GET /health` returns 200; `POST /predict` accepts JPEG/PNG and returns `{label, confidence, latency_ms}`.
- Frontend: upload → preview → predict → result card flow works with proper loading and error states.
- Reflection: student can describe the data → model → metric pipeline and propose one improvement.

## Common Pitfalls
- Dataset folder names must match class labels; adjust dataloaders if using a different structure.
- Paths on Windows: use `Path` or consistent separators; ensure backend points to `models/model.pkl`.
- CORS: allow the local frontend origin in FastAPI during development.
- Large images increase latency; resize inputs and consider lighter models for faster feedback.

## Resources
- Practical Deep Learning for Coders: course overview and book (free as Jupyter notebooks).
- Lesson 1: getting started with a complete end‑to‑end example and top‑down teaching approach.
- fastai library docs and forums for help on setup, datasets, and foundations.

