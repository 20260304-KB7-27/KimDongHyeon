<template>
  <h1>{{ postContent.title }}</h1>
  <div class="post-item">{{ postContent.content }}</div>
  <button @click="fixPost(postContent)">수정</button>
  <button @click="deletePost(postContent.no)">삭제</button>
  <button @click="closePost(postContent.no)">닫기</button>
</template>

<script setup>
const emit = defineEmits(['close', 'delete', 'fix']);

const closePost = (no) => {
  emit('close', no);
};

const deletePost = (no) => {
  let result = confirm('정말로 삭제하시겠습니까?');

  if (result === true) emit('delete', no);
  else return;
};

const fixPost = (fixPost) => {
  emit('fix', fixPost);
};

const props = defineProps({
  postContent: Object,
});
</script>

<style lang="scss" scoped></style>
