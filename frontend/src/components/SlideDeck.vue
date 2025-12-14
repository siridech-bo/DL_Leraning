<template>
  <Card>
    <div class="flex items-center justify-between mb-3">
      <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{{ slides[index].title }}</h3>
      <div class="text-xs text-neutral-600 dark:text-neutral-400">Slide {{ index + 1 }} of {{ slides.length }}</div>
    </div>
    <ul class="space-y-2">
      <li v-for="b in slides[index].bullets" :key="b" class="flex items-start gap-2">
        <span class="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100"></span>
        <span class="text-sm text-neutral-800 dark:text-neutral-200">{{ b }}</span>
      </li>
    </ul>
    <div class="mt-4 flex items-center justify-between">
      <Button variant="outline" size="sm" :disabled="index===0" @click="prev">Back</Button>
      <div class="flex items-center gap-2">
        <Button size="sm" variant="outline" @click="toggleText">{{ showText ? 'Hide Text' : 'Show Text' }}</Button>
        <Button size="sm" :disabled="index===slides.length-1" @click="next">Next</Button>
      </div>
    </div>
    <div v-if="showText" class="mt-4 text-xs text-neutral-600 dark:text-neutral-400">
      <slot />
    </div>
  </Card>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Card from '../ui/Card.vue'
import Button from '../ui/Button.vue'
import type { Slide } from '../content/lesson1_slides'
const props = defineProps<{ slides: Slide[] }>()
const index = ref(0)
const showText = ref(false)
const key = 'lesson-1-slide'
onMounted(() => {
  try {
    const raw = localStorage.getItem(key)
    if (raw) {
      const i = parseInt(raw)
      if (!Number.isNaN(i)) index.value = Math.min(Math.max(0, i), props.slides.length - 1)
    }
  } catch {}
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') next()
    if (e.key === 'ArrowLeft') prev()
  })
})
const next = () => {
  if (index.value < props.slides.length - 1) {
    index.value++
    localStorage.setItem(key, String(index.value))
  }
}
const prev = () => {
  if (index.value > 0) {
    index.value--
    localStorage.setItem(key, String(index.value))
  }
}
const toggleText = () => {
  showText.value = !showText.value
}
</script>
