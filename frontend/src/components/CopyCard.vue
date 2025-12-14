<template>
  <Card :title="title">
    <div class="flex items-center justify-end">
      <Button size="sm" @click="copy">Copy to Trae</Button>
    </div>
    <pre class="mt-3 whitespace-pre-wrap text-sm text-neutral-800 dark:text-neutral-200">{{ text }}</pre>
    <p v-if="copied" class="mt-2 text-xs text-green-600 dark:text-green-400">Copied</p>
  </Card>
  </template>
<script setup lang="ts">
import { ref } from 'vue'
import Card from '../ui/Card.vue'
import Button from '../ui/Button.vue'
const props = defineProps<{ title: string; text: string }>()
const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(props.text)
  copied.value = true
  setTimeout(() => copied.value = false, 1500)
}
</script>
