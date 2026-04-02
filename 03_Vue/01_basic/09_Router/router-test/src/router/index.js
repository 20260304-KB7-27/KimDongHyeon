import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router';
import Home from '@/pages/Home.vue';

const membersIdGuard = (to, from) => {
  // /members인 경우 /members/:id인 경우
  if (from.name !== 'members' && from.name !== 'members/id') {
    return false;
  }
};

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),

  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },

    //지연로딩: 해당 경로에 처음 접근할떄 컴포넌트를 불러옴
    //초기로딩 속도 개선
    {
      path: '/members',
      name: 'members',
      component: () => import('@/pages/MemberList.vue'),
    },

    {
      path: '/members/:id',
      name: 'members/id',
      component: () => import('@/pages/MemberInfo.vue'),
      // memberrs에서만 접근해야 상세정보를 볼 수 있게 설정
      beforeEnter: membersIdGuard,
    },

    {
      path: '/members-nested',
      component: () => import('@/pages/nested/MembersLayout.vue'),
      children: [
        {
          path: '',
          name: 'members-nested',
          component: () => import('@/pages/nested/MemberDefault.vue'),
        },
        {
          path: ':id',
          name: 'members-nested/detail',
          component: () => import('@/pages/nested/MemberDetail.vue'),
        },
      ],
    },
  ],
});

export default router;
