//import axios from 'axios';

import axios from '@/util/axios';

import { ref } from 'vue';

/* 
컴포저블 함수
훈련생 데이터를 관리하는 함수
*/

export const useStudent = () => {
  const students = ref([]);

  // 전체 조회
  const fetchAllStudents = async () => {
    try {
      // const response = await axios.get('/api/students');
      //baseURL 설정으로 /api사용 안함
      const response = await axios.get('/students');

      students.value = response.data;
    } catch (e) {
      console.log('err : ', e);
    }
  };

  // 추가
  // 조회, 삭제 등...

  return {
    fetchAllStudents,
    students,
  };
};
