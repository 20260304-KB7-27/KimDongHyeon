import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const likePersistCounter = defineStore(
  'like-persist',
  () => {
    const like = ref(0);

    const fivetimes = computed(() => like.value * 5);

    function increaseLike() {
      like.value++;
    }

    return { like, fivetimes, increaseLike };
  },
  {
    persist: {
      key: 'like-persist-session', // storage에 저장될 key 이름(기본값 store ID)
      storage: sessionStorage, // 기본값은 localStorage
      pick: ['like'], // 저장하고 싶은 상태값 지정가능
    },
  },
);

// export const test  = defineStore('이름', () => {
//   변수,  함수
//   return {변수, 함수}
// },
// {
//   persist: {
//     key: '뭐라고 저장될지',
//     storage: 어디 저장,
//     pick: ['변수']
//   }
// },
// )