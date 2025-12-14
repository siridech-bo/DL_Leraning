# Lesson 2: Deployment Basics

## Summary
- Serve trained models via a minimal API and validate end‑to‑end behavior.
- Address input formats, CORS, and basic performance considerations.

## Key Points
- Load artifacts safely at startup; expose `/health` for readiness.
- `POST /predict` accepts standard image types and returns `{label, confidence, latency_ms}`.
- Measure latency and consider input resizing and lighter backbones for speed.

## Tasks
- Create FastAPI app; enable CORS for local frontend.
- Add quick test client and a small sample image set.
- Document simple error handling and status codes.

## Resources
- FastAPI `https://fastapi.tiangolo.com/`
- Uvicorn `https://www.uvicorn.org/`
- Sample images: Unsplash (CC0‑like) small images or your dataset samples
