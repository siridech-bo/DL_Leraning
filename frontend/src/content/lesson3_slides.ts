import type { Slide } from './lesson1_slides'
export const lesson3Slides: Slide[] = [
  { title: 'Data & Augmentation', bullets: [
    'Choose robust train/valid splits',
    'Apply augmentations to improve generalization',
    'Inspect transformed samples'
  ]},
  { title: 'Over/Underfitting', bullets: [
    'Watch loss and validation metrics',
    'Tune augmentation strength',
    'Adjust learning rate schedules'
  ]}
]
