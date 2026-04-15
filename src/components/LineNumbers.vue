<template>
  <div class="line-numbers">
    <span v-for="n in count" :key="n">
      {{ String(n + start - 1).padStart(2, "0") }}<br />
    </span>
  </div>
</template>

<script setup>
defineProps({
  count: {
    type: Number,
    default: 5,
  },
  start: {
    type: Number,
    default: 1,
  },
});
</script>
