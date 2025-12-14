<template>
  <Card title="Resources">
    <ul class="space-y-2">
      <li v-for="r in resources" :key="r.url" class="flex items-center justify-between gap-2">
        <a :href="r.url" target="_blank" rel="noopener" class="text-sm text-blue-600 dark:text-blue-400 hover:underline">{{ r.label }}</a>
        <Button size="sm" variant="outline" @click="copy(r.url)">Copy link</Button>
      </li>
    </ul>
    <div v-if="pack" class="mt-4 flex items-center justify-between">
      <p class="text-sm text-neutral-700 dark:text-neutral-300">Download: {{ pack.label }}</p>
      <Button size="sm" @click="downloadPack">Download sample pack</Button>
    </div>
    <p v-if="copied" class="mt-2 text-xs text-green-600 dark:text-green-400">Copied</p>
  </Card>
</template>
<script setup lang="ts">
import JSZip from 'jszip'
import Card from '../ui/Card.vue'
import Button from '../ui/Button.vue'
import type { Resource, DownloadPack } from '../content/resources'
const props = defineProps<{ resources: Resource[]; pack?: DownloadPack }>()
const copied = ref(false)
import { ref } from 'vue'
const copy = async (url: string) => {
  await navigator.clipboard.writeText(url)
  copied.value = true
  setTimeout(() => (copied.value = false), 1500)
}
const downloadPack = async () => {
  if (!props.pack) return
  const zip = new JSZip()
  for (const f of props.pack.files) {
    const base = import.meta.env.BASE_URL
    const url = base + f.path.replace(/^\//, '')
    const res = await fetch(url)
    const blob = await res.blob()
    zip.file(f.name, blob)
  }
  const out = await zip.generateAsync({ type: 'blob' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(out)
  a.download = `${props.pack.label.replace(/\\s+/g, '_').toLowerCase()}.zip`
  document.body.appendChild(a)
  a.click()
  URL.revokeObjectURL(a.href)
  a.remove()
}
</script>
