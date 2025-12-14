import type { Slide } from './lesson1_slides'
export const lesson2Slides: Slide[] = [
  { title: 'Deployment Basics', bullets: [
    'Serve predictions with a minimal API',
    'Ensure health and readiness endpoints',
    'Handle common input formats and errors'
  ]},
  { title: 'Model Lifecycle', bullets: [
    'Load artifact once on startup',
    'Warm paths and cache where helpful',
    'Return stable JSON payloads'
  ]},
  { title: 'Performance', bullets: [
    'Measure latency per request',
    'Resize inputs to balance speed/accuracy',
    'Consider lighter backbones for faster inference'
  ]}
]
