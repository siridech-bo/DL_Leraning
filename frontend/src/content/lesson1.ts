export const lesson1Prompts = [
  {
    title: "Dataset Setup",
    text:
      "Set up a tiny cats vs dogs dataset:\n" +
      "- Use Oxford‑IIIT Pet: https://www.robots.ox.ac.uk/~vgg/data/pets/\n" +
      "- Prepare class‑named folders: cat/ and dog/\n" +
      "- Keep images ~256–512 px for fast local runs"
  },
  {
    title: "Training",
    text:
      "I’m learning image classification the fast.ai way. Create a fastai script that:\n" +
      "- Loads a small cats vs dogs dataset from `data/cats_vs_dogs`.\n" +
      "- Uses `resnet34` and `fine_tune` for a few epochs.\n" +
      "- Prints validation accuracy and saves the model to `models/model.pkl`.\n" +
      "- Organize code so I can see data → model → training → metrics clearly."
  },
  {
    title: "Inference API",
    text:
      "Build a minimal FastAPI service that:\n" +
      "- Loads `models/model.pkl` at startup.\n" +
      "- Exposes `POST /predict` accepting a JPEG/PNG image and returns JSON `{label, confidence, latency_ms}`.\n" +
      "- Provides `GET /health` and enables CORS for a local Vue frontend."
  },
  {
    title: "Web UI",
    text:
      "Create a Vue 3 page using shadcn‑style components that:\n" +
      "- Lets me upload an image and shows a preview.\n" +
      "- Sends the file to `/predict` on click and displays the result in a Card.\n" +
      "- Shows a loading skeleton during inference and a toast on error.\n" +
      "- Reads the API base URL from `.env`."
  },
  {
    title: "Debugging",
    text:
      "Diagnose and fix this error from my run. Explain briefly, then give pasteable changes:\n" +
      "- Error: [paste full traceback]\n" +
      "- Provide exact code or settings to update, with a one‑paragraph rationale."
  },
  {
    title: "Evaluate",
    text:
      "Add a quick evaluation function that:\n" +
      "- Runs the trained model on a small validation set.\n" +
      "- Prints accuracy and a simple confusion‑style summary (counts per class).\n" +
      "- Suggests one augmentation or learning rate tweak if accuracy is poor."
  },
  {
    title: "Reflect",
    text:
      "Explain in 8–10 sentences what I built, focusing on:\n" +
      "- How dataloaders map images to labels.\n" +
      "- Why transfer learning helps with small datasets.\n" +
      "- What accuracy means vs per‑prediction confidence.\n" +
      "- Two concrete steps to reduce overfitting."
  },
  {
    title: "Performance",
    text:
      "Measure average latency over 10 predictions with medium‑sized images. Recommend:\n" +
      "- One model change (e.g., switch to `resnet18`).\n" +
      "- One input change (e.g., resize to 256 px).\n" +
      "- Describe expected accuracy impact for each change."
  },
  {
    title: "Reproducibility",
    text:
      "Add reproducibility to the training script:\n" +
      "- Set seeds, log key hyperparameters, and save metrics to a timestamped CSV under `runs/`."
  }
]
