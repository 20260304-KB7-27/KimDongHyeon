<template>
  <li>
    <div
      style="
        display: flex;
        justify-content: space-between;
        text-align: center;
        align-items: center;
      "
    >
      <h2>{{ post.no }}. {{ post.title }}</h2>
      <div class="arrow" v-on:click="toggle(post.no)" style="cursor: pointer">
        {{ openedNo === post.no ? '▲' : '▼' }}
      </div>
    </div>

    <br />

    <div class="post-content" v-if="openedNo === post.no && post.no !== fixNo">
      <PostContent
        :postContent="post"
        @close="closePost"
        @delete="deletePost"
        @fix="fixPost"
      ></PostContent>
    </div>

    <div class="post-content" v-if="fixNo === post.no && openedNo === post.no">
      <PostFixContent
        :fixingPost="post"
        @cancel-fix="cancelFix"
        @save-fix="fixSave"
      ></PostFixContent>
    </div>
  </li>
</template>

<script setup>
import { ref } from 'vue';
import PostContent from './PostContent.vue';
import PostFixContent from './PostFixContent.vue';

const openedNo = ref(null);
const fixNo = ref(null);

const toggle = (no) => {
  openedNo.value = openedNo.value === no ? null : no;
};

const closePost = (no) => {
  openedNo.value = openedNo.value === no ? null : no;
};

const fixPost = (post) => {
  fixNo.value = post.no;
};

const cancelFix = () => {
  fixNo.value = null;
};

const emit = defineEmits('delete', 'fix');

const deletePost = (no) => {
  emit('delete', no);
};

const fixSave = (post) => {
  emit('fix', {
    no: post.no,
    content: post.content,
    title: post.title,
  });

  fixNo.value = null;
};

const props = defineProps({
  post: Object,
});
</script>

<style lang="scss" scoped></style>
