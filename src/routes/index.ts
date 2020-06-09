import Hello from '@components/Hello/index';
import World from '@components/World/index';

export const routes = [
  {
    component: Hello,
    exact: true,
    path: '/',
  },
  {
    component: World,
    exact: false,
    path: '/world',
  },
];
