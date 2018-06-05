/* eslint-disable no-param-reassign */

import _ from 'lodash';
import socket from '../../socket';

const add = (list, value) => {
  list.push(value);
};

const remove = (list, value) => {
  list = _.remove(list, item => item === value.id);
};

const edit = (list, value) => {
  list.map(item => (item === value.id ? value : item));
};

export default {
  namespaced: true,

  state: {
    aliases: [],
    modules: [],
    scenes: [],
  },

  getters: {
    aliases: state => _.sortBy(state.aliases, [o => o.name]),
    modules: state => _.sortBy(state.modules, [o => o.name]),
    scenes: state => _.sortBy(state.scenes, [o => o.name]),
  },

  mutations: {
    aliases: (state, aliases) => {
      state.aliases = aliases;
    },
    modules: (state, modules) => {
      state.modules = modules;
    },
    scenes: (state, scenes) => {
      state.scenes = scenes;
    },

    addAlias(state, alias) {
      add(state.aliases, alias);
    },
    removeAlias(state, alias) {
      remove(state.aliases, alias);
    },
    editAlias(state, alias) {
      edit(state.aliases, alias);
    },

    addScene(state, scene) {
      add(state.scenes, scene);
    },
    removeScene(state, scene) {
      remove(state.scenes, scene);
    },
    editScene(state, scene) {
      edit(state.scenes, scene);
    },
  },

  actions: {
    addAlias({ commit, state }, alias) {
      commit('addAlias', alias);
      socket.emit('aliases', state.aliases);
    },
    removeAlias({ commit, state }, alias) {
      commit('removeAlias', alias);
      socket.emit('aliases', state.aliases);
    },
    editAlias({ commit, state }, alias) {
      commit('editAlias', alias);
      socket.emit('aliases', state.aliases);
    },

    addScene({ commit, state }, scene) {
      commit('addScene', scene);
      socket.emit('scenes', state.scenes);
    },
    removeScene({ commit, state }, scene) {
      commit('removeScene', scene);
      socket.emit('scenes', state.scenes);
    },
    editScene({ commit, state }, scene) {
      commit('editScene', scene);
      socket.emit('scenes', state.scenes);
    },
  },
};
