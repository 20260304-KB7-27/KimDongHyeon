<template>
  <h2>Like Counter</h2>
  <h3>like count : {{ like.like }}</h3>
  <h3>5배씩 좋아요 : {{ like.fivetimes }}</h3>
  <button @click="like.increaseLike">좋아요</button>
</template>

<script setup>
//import { likeCounter } from '@/stores/like';
import { likePersistCounter } from '@/stores/persist/persist_like';

// const like = likeCounter();
const like = likePersistCounter();
</script>

<style scoped></style>
