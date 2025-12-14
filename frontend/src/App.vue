<template>
  <main>
    <section class="bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
      <div class="container py-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="h-8 w-8 rounded-lg bg-neutral-900 dark:bg-neutral-100"></div>
            <div>
              <p class="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">Fast.ai Companion</p>
              <h2 class="text-xl font-semibold text-neutral-900 dark:text-neutral-100">Lesson Builder</h2>
            </div>
          </div>
          <a href="https://course.fast.ai/" target="_blank" class="text-sm px-3 py-1.5 rounded-md bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 hover:opacity-90 transition">Course</a>
        </div>
      </div>
    </section>
    <router-view />
  </main>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
</script>
