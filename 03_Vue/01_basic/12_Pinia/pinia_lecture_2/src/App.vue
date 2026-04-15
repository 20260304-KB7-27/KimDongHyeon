<template>
  <h1>App</h1>

  <h2>App에서 보는 counter: {{ counter.count }}</h2>
  <Counter></Counter>
  <likeCounter></likeCounter>
</template>

<script setup>
//import { useCounterStore } from './stores/counter';
import Counter from './components/Counter.vue';
import likeCounter from './components/Like.vue';
import { useCounterPersistStore } from './stores/persist/persist_counter';

//const counter = useCounterStore();

const counter = useCounterPersistStore();
</script>

<style scoped></style>
