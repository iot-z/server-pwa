import HomePage from '../pages/home';
import ModulePage from '../pages/module';
import DynamicRoutePage from '../pages/dynamic-route';
import NotFoundPage from '../pages/not-found';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/modules/:id/',
    component: ModulePage,
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
