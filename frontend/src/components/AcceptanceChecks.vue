<template>
  <Card title="Acceptance Checks">
    <div class="space-y-3">
      <Checkbox v-model="state.training">Training: model.pkl created and accuracy printed</Checkbox>
      <Checkbox v-model="state.api">API: /health 200 and /predict returns label, confidence, latency</Checkbox>
      <Checkbox v-model="state.ui">UI: upload → preview → predict → result card with loading/error</Checkbox>
      <Checkbox v-model="state.reflection">Reflection: explain pipeline and propose one improvement</Checkbox>
    </div>
    <div class="mt-4 flex items-center justify-between">
      <p class="text-sm text-neutral-600 dark:text-neutral-400">Progress {{ progress }}%</p>
      <Button size="sm" variant="outline" @click="reset">Reset</Button>
    </div>
  </Card>
</template>
<script setup lang="ts">
import { reactive, watch, computed } from 'vue'
import Card from '../ui/Card.vue'
import Button from '../ui/Button.vue'
import Checkbox from '../ui/Checkbox.vue'
const props = defineProps<{ lessonKey?: string }>()
const key = props.lessonKey ? `${props.lessonKey}-acceptance` : 'lesson-1-acceptance'
const load = () => {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return { training: false, api: false, ui: false, reflection: false }
    return JSON.parse(raw)
  } catch {
    return { training: false, api: false, ui: false, reflection: false }
  }
}
const state = reactive(load())
watch(state, () => {
  localStorage.setItem(key, JSON.stringify(state))
}, { deep: true })
const progress = computed(() => {
  const vals = [state.training, state.api, state.ui, state.reflection]
  const done = vals.filter(Boolean).length
  return Math.round((done / vals.length) * 100)
})
const reset = () => {
  state.training = false
  state.api = false
  state.ui = false
  state.reflection = false
}
</script>
