<template>
  <label class="flex items-start gap-3 cursor-pointer select-none">
    <input type="checkbox" :checked="modelValue" @change="onChange" class="peer sr-only" />
    <span
      class="h-5 w-5 rounded-md border border-neutral-300 dark:border-neutral-700 flex items-center justify-center
             peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2
             bg-white dark:bg-neutral-900"
    >
      <span v-if="modelValue" class="h-3 w-3 rounded-sm bg-neutral-900 dark:bg-neutral-100"></span>
    </span>
    <span class="text-sm text-neutral-800 dark:text-neutral-200">
      <slot />
    </span>
  </label>
</template>
<script setup lang="ts">
const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits<{'update:modelValue':[boolean]}>()
const onChange = (e: Event) => {
  const t = e.target as HTMLInputElement
  emit('update:modelValue', t.checked)
}
</script>
