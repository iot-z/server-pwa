/* eslint-disable no-param-reassign */
/* eslint-disable-line no-new */

import Vue from 'vue';
import Vuex from 'vuex';

import socket from '../socket';

import aliases from './aliases/';
import events from './events/';
import modules from './modules/';
import scenes from './scenes/';
import shedules from './shedules/';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,

  state: {
    connected: false,
  },

  getters: {
    connected(state) {
      return state.connected;
    },
  },

  mutations: {
    connected: (state, connected) => {
      state.connected = connected;
    },
  },

  modules: {
    aliases,
    events,
    modules,
    scenes,
    shedules,
  },
});

socket.on('connect', () => store.commit('connected', true));
socket.on('disconnect', () => store.commit('connected', false));

socket.on('modules.aliases', payload => store.commit('modules/aliases', payload));
socket.on('modules.modules', payload => store.commit('modules/modules', payload));
socket.on('modules.scenes', payload => store.commit('modules/scenes', payload));

socket.on('modules.state', payload => store.commit('modules/state', payload));

export default store;
