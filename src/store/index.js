import Vue from 'vue';
import Vuex from 'vuex';

import socket from '../socket';

import aliases from './aliases/';
import events from './events/';
import modules from './modules/';
import scenes from './scenes/';
import shedules from './shedules/';

Vue.use(Vuex);

const store = new Vuex.Store({ // eslint-disable-line no-new
  strict: true,

  modules: {
    aliases,
    events,
    modules,
    scenes,
    shedules,
  },
});

socket.on('modules/aliases', data => store.commit('modules/aliases', data));
socket.on('modules/modules', data => store.commit('modules/modules', data));
socket.on('modules/scenes', data => store.commit('modules/scenes', data));

export default store;
