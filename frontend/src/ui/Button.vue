<template>
  <button
    :class="[
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      variantClass, sizeClass
    ]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>
<script setup lang="ts">
const props = withDefaults(defineProps<{ variant?: 'default' | 'outline' | 'ghost'; size?: 'sm' | 'md' | 'lg' }>(), {
  variant: 'default',
  size: 'md'
})
const variantClass =
  props.variant === 'outline'
    ? 'border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800'
    : props.variant === 'ghost'
    ? 'bg-transparent text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800'
    : 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 hover:opacity-90 active:opacity-80'
const sizeClass =
  props.size === 'sm'
    ? 'px-2.5 py-1.5'
    : props.size === 'lg'
    ? 'px-5 py-2.5'
    : 'px-3 py-1.5'
</script>
