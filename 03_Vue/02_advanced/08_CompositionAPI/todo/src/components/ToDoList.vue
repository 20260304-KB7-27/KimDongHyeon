<template>
  <ul>
    <ToDoListItem
      v-for="item in todolist"
      :key="item.id"
      :item="item"
    ></ToDoListItem>
  </ul>
</template>

<script setup>
import ToDoListItem from './ToDoListItem.vue';

const props = defineProps({
  todolist: Array,
});
</script>

<style scoped></style>
