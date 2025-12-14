# Lesson 3: Data Handling & Augmentation

## Summary
- Build better generalization with careful splits, transforms, and augmentation.
- Inspect samples to understand how the pipeline changes inputs.

## Key Points
- Train/valid split strategy impacts metrics stability.
- Augmentations (flip, rotate, crop, color jitter) change sample distribution.
- Monitor over/underfitting; adjust augmentations and learning rate.

## Tasks
- Visualize a batch after transforms.
- Add a configurable augmentation block.
- Compare validation accuracy with/without augmentation.

## Resources
- fastai transforms `https://docs.fast.ai/vision.augment.html`
- Albumentations (optional) `https://albumentations.ai/docs/`
