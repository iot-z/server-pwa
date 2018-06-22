import HomePage from '../pages/home';
import ModulesUiPage from '../pages/modules/ui';
import NotFoundPage from '../pages/not-found';
import ConfigurationsPage from '../pages/configurations';
import ConfigurationsModulesPage from '../pages/configurations/modules';
import ConfigurationsModulesModulePage from '../pages/configurations/modules/module';

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
    path: '/configurations/modules/:id/',
    component: ConfigurationsModulesModulePage,
  },
  {
    path: '/configurations/modules/',
    component: ConfigurationsModulesPage,
  },
  {
    path: '/configurations/',
    component: ConfigurationsPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
