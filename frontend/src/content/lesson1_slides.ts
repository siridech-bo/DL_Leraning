export type Slide = { title: string; bullets: string[] }
export const lesson1Slides: Slide[] = [
  {
    title: "Lesson 1 • Image Classification",
    bullets: [
      "Build a small classifier, serve predictions, wire a simple UI",
      "Learn by shipping first, then reflect and iterate",
      "Top‑down fast.ai approach for quick wins"
    ]
  },
  {
    title: "Core Concepts",
    bullets: [
      "Transfer learning with a pretrained CNN (resnet34)",
      "Dataloaders map images to class labels",
      "Accuracy summarizes validation; confidence is per‑sample",
      "Augmentation influences generalization"
    ]
  },
  {
    title: "Dataset Guidance",
    bullets: [
      "Cats vs Dogs with class‑named folders: cat/, dog/",
      "Use a tiny sample for fast local runs",
      "Image size ~256–512 px balances latency and accuracy"
    ]
  },
  {
    title: "Workflow",
    bullets: [
      "Train → save `models/model.pkl`",
      "API → `POST /predict` returns label, confidence, latency",
      "UI → upload, preview, predict, result card"
    ]
  },
  {
    title: "Prompt Packs",
    bullets: [
      "Training • Inference API • Web UI",
      "Debug • Evaluate • Reflect",
      "Performance • Reproducibility"
    ]
  },
  {
    title: "Next Steps",
    bullets: [
      "Run evaluation and inspect confusion counts",
      "Reflect on data → model → metrics",
      "Tune augmentations or switch to resnet18 for speed",
      "Log seeds and hyperparameters to `runs/`"
    ]
  }
]
