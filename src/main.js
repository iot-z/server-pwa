// Import Vue
import Vue from 'vue';

// Import Vue Plugins
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle';

// Import F7
import Framework7 from 'framework7/dist/framework7.esm.bundle';

// Import F7 Styles
import './css/framework7.css';
import './css/icons.css';
import './css/app.css';

// Import F7 Routes
import routes from './routes/';

// Import Vuex Store
import store from './store/';

// Import Vue Components
import App from './components/app';
import Splash from './components/iotz-splash';

// Init Plugins\
Vue.use(Framework7Vue, Framework7);

// Declare Vue components
Vue.component('app', App);
Vue.component('iotz-splash', Splash);

// Init App
new Vue({ // eslint-disable-line no-new
  el: '#app',
  template: '<app/>',

  // Init Framework7 by passing parameters here
  framework7: {
    id: 'io.framework7.iotz-pwa', // App bundle ID
    name: 'IOTZ PWA',
    theme: 'md',
    routes,
  },

  store,
});
