<template>
  <div class="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
    <div v-if="title" class="px-4 pt-4">
      <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{{ title }}</h3>
    </div>
    <div class="p-4">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ title?: string }>()
</script>
