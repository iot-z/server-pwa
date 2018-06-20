import HomePage from '../pages/home';
import ModulesUiPage from '../pages/modules/ui';
import DynamicRoutePage from '../pages/dynamic-route';
import NotFoundPage from '../pages/not-found';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/modules/ui/:id/',
    component: ModulesUiPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
];
