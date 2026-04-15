import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const likeCounter = defineStore('like', () => {
  const like = ref(Number(sessionStorage.getItem('like-session') || 0));

  // getter
  // 여러 컴포넌트에서 사용하는(공유되는) 계산 값
  const fivetimes = computed(() => like.value * 5);

  function increaseLike() {
    like.value++;

    /*
    sessionStorage
    - 현재 탭에서만 유지됨(임시데이터, 일회성 상태)
    
    */
    sessionStorage.setItem('like-session', like.value);
  }

  return { like, fivetimes, increaseLike };
});

// export const test = defineStore('이름', () => {
//   변수, 함수
//   직접 storage에 저장해줘야 함
//   retrun {변수, 함수}
// })
