<template>
  <li>{{ item.todo }} {{ item.completed ? '[완료]' : '' }}</li>
</template>

<script setup>
const props = defineProps({
  item: Object,
});
</script>

<style scoped></style>
