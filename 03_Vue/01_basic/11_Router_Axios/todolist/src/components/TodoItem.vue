<template>
  <li
    :class="
      todoItem.done
        ? 'list-group-item list-group-item-success'
        : 'list-group-item'
    "
  >
    <span
      :class="todoItem.done ? 'todo-done pointer' : 'pointer'"
      @click="toggleDone(todoItem.id)"
    >
      {{ todoItem.todo }}
      {{ todoItem.done ? '(완료)' : '' }}
    </span>
    <!-- <RouterLink :to="`/todos/edit/${todoItem.id}`">수정</RouterLink> -->
    <button @click="editButton">수정</button>
  </li>
</template>

<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// TodoList에서 전달받은 Props
const props = defineProps({
  todoItem: { type: Object, required: true },
});

//  <template> 안에서는 todoItem을 직접 쓸 수 있지만 ({{ todoItem.todo }}), <script setup> 안에서는 반드시 props.todoItem으로 접근해야 합니다.
const editButton = () => {
  router.push(`/todos/edit/${props.todoItem.id}`);
};

// actions 객체에서 toggleDone 함수 구조분해할당으로 꺼내기
const { toggleDone } = inject('actions');
</script>

<style scoped></style>
