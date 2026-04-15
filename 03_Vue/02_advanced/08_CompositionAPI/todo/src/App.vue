<template>
  <h1>ToDo</h1>
  <ToDoList :todolist="todolist"></ToDoList>
</template>

<script setup>
import { ref } from 'vue';
import ToDoList from './components/ToDoList.vue';

const ts = new Date().getTime();

const todolist = ref([
  { id: ts, todo: '자전거 타기', completed: false },
  { id: ts + 1, todo: '딸과 공원 산책', completed: true },
  { id: ts + 2, todo: '일요일 애견 카페', completed: false },
  { id: ts + 3, todo: 'Vue 원고 집필', completed: false },
]);
</script>

<style scoped></style>
