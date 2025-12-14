<template>
  <div class="container">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100">{{ title }}</h1>
      <div class="flex items-center gap-2">
        <select v-model="lessonId" @change="navigate" class="px-3 py-1.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
          <option v-for="n in 9" :key="n" :value="n">Lesson {{ n }}</option>
        </select>
        <button @click="toggleTheme" class="px-3 py-1.5 rounded-md bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 hover:opacity-90 active:opacity-80 transition">
          Toggle Theme
        </button>
      </div>
    </div>
    <img :src="bannerError ? base + 'images/placeholder.svg' : imgSrc" :alt="`Lesson ${lessonId} banner`" @error="onBannerError" class="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 mb-6" />
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="space-y-4">
        <SlideDeck :slides="slides">
          <div class="prose prose-neutral dark:prose-invert max-w-none">
            <div v-html="html"></div>
          </div>
        </SlideDeck>
      </div>
      <div class="space-y-4">
        <AcceptanceChecks :lessonKey="`lesson-${lessonId}`" />
        <ResourceList :resources="resources" :pack="pack" />
        <CopyCard v-for="p in prompts" :key="p.title" :title="p.title" :text="p.text" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import CopyCard from '../components/CopyCard.vue'
import AcceptanceChecks from '../components/AcceptanceChecks.vue'
import { lesson1Prompts } from '../content/lesson1'
import SlideDeck from '../components/SlideDeck.vue'
import { lesson1Slides } from '../content/lesson1_slides'
import ResourceList from '../components/ResourceList.vue'
import { lessonResources, lessonDownloadPacks } from '../content/resources'
import { onMounted, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const md = new MarkdownIt({ html: false, linkify: true })
const route = useRoute()
const router = useRouter()
const lessonId = ref<number>(1)
const title = computed(() => `Lesson ${lessonId.value}: ${lessonTitles[lessonId.value]}`)
const base = import.meta.env.BASE_URL
const bannerSrc = computed(() => base + `images/lesson-${lessonId.value}.svg`)
const bannerPngSrc = ref<string | null>(null)
const preferPng = new Set([3, 8, 9])
const imgSrc = computed(() => (preferPng.has(lessonId.value) && bannerPngSrc.value ? bannerPngSrc.value : bannerSrc.value))
const bannerError = ref(false)
const lessonTitles: Record<number, string> = {
  1: 'Image Classification',
  2: 'Deployment Basics',
  3: 'Data Handling & Augmentation',
  4: 'NLP Classification',
  5: 'Tabular Modeling',
  6: 'Collaborative Filtering',
  7: 'Classical ML',
  8: 'Ethics & Practice',
  9: 'Project Wrap‑up'
}
const html = ref('')
const prompts = ref(lesson1Prompts)
const slides = ref(lesson1Slides)
const resources = ref(lessonResources[1] || [])
const pack = ref(lessonDownloadPacks[1])
const mdModules = import.meta.glob('../content/lesson-*.md', { as: 'raw' })
const slideModules = import.meta.glob('../content/lesson*_slides.ts')
const promptModules = import.meta.glob('../content/lesson*.ts')
const loadLesson = async (id: number) => {
  const mdPath = `../content/lesson-${id}.md`
  if (mdModules[mdPath]) {
    const raw = await mdModules[mdPath]()
    html.value = md.render(String(raw))
  } else {
    html.value = md.render(`# Lesson ${id}\n\nContent coming soon.`)
  }
  const slidePath = `../content/lesson${id}_slides.ts`
  if (slideModules[slidePath]) {
    const mod: any = await slideModules[slidePath]()
    slides.value = mod[`lesson${id}Slides`] || mod.default || []
  } else {
    slides.value = []
  }
  const promptPath = `../content/lesson${id}.ts`
  if (promptModules[promptPath]) {
    const mod: any = await promptModules[promptPath]()
    prompts.value = mod[`lesson${id}Prompts`] || mod.default || []
  } else {
    prompts.value = []
  }
  resources.value = lessonResources[id] || []
  pack.value = lessonDownloadPacks[id]
}
onMounted(() => {
  const idParam = parseInt(route.params.id as string)
  lessonId.value = Number.isNaN(idParam) ? 1 : idParam
  bannerError.value = false
  loadLesson(lessonId.value)
  checkBanner()
  makeBannerPng()
})
const navigate = () => {
  router.push(`/lesson/${lessonId.value}`)
  bannerError.value = false
  loadLesson(lessonId.value)
  checkBanner()
  makeBannerPng()
}
const toggleTheme = () => {
  const e = document.documentElement
  e.classList.toggle('dark')
}
const onBannerError = () => {
  bannerError.value = true
}
const checkBanner = async () => {
  try {
    const res = await fetch(bannerSrc.value, { method: 'GET' })
    bannerError.value = !res.ok
  } catch {
    bannerError.value = true
  }
}
const makeBannerPng = () => {
  try {
    const canvas = document.createElement('canvas')
    canvas.width = 1200
    canvas.height = 360
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const palette: Record<number, [string, string]> = {
      1: ['#111827', '#1f2937'],
      2: ['#0f172a', '#1e293b'],
      3: ['#0f172a', '#172554'],
      4: ['#111827', '#1f2937'],
      5: ['#0f172a', '#111827'],
      6: ['#0f172a', '#1f2937'],
      7: ['#0f172a', '#111827'],
      8: ['#0f172a', '#1f2937'],
      9: ['#0f172a', '#111827']
    }
    const colors = palette[lessonId.value] || ['#111827', '#1f2937']
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    grad.addColorStop(0, colors[0])
    grad.addColorStop(1, colors[1])
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'rgba(11,18,32,0.6)'
    const x = 80, y = 60, w = canvas.width - 160, h = 240, r = 24
    ctx.beginPath()
    ctx.moveTo(x + r, y)
    ctx.lineTo(x + w - r, y)
    ctx.quadraticCurveTo(x + w, y, x + w, y + r)
    ctx.lineTo(x + w, y + h - r)
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
    ctx.lineTo(x + r, y + h)
    ctx.quadraticCurveTo(x, y + h, x, y + h - r)
    ctx.lineTo(x, y + r)
    ctx.quadraticCurveTo(x, y, x + r, y)
    ctx.closePath()
    ctx.fill()
    ctx.fillStyle = '#e5e7eb'
    ctx.font = '600 28px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'
    ctx.textAlign = 'center'
    ctx.fillText(`Lesson ${lessonId.value} • ${lessonTitles[lessonId.value]}`, canvas.width / 2, 112)
    ctx.strokeStyle = '#374151'
    ctx.lineWidth = 2
    ctx.strokeRect(x, y, w, h)
    bannerPngSrc.value = canvas.toDataURL('image/png')
  } catch {
    bannerPngSrc.value = null
  }
}
</script>
