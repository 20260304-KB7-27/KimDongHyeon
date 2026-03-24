<template>
  <PostItem
    v-for="post in posts"
    :key="post.no"
    :post="post"
    @delete="deletePost"
    @fix="fixedPost"
  ></PostItem>
</template>

<script setup>
import PostItem from './PostItem.vue';

//-----emit 선언----
const emit = defineEmits(['delete', 'fix']);

const deletePost = (no) => {
  emit('delete', no);
};

const fixedPost = (fixPost) => {
  emit('fix', fixPost);
};

//-----porps 선언------
const props = defineProps({
  posts: Array,
});
</script>

<style lang="scss" scoped></style>
