import axios from 'axios';

const instance = axios.create({
  baseURL: 'api/',

  // header
  //   headers: {
  //     //공통 헤더들
  //     Authorization : "Bearer + .."
  //   }
});

export default instance;
