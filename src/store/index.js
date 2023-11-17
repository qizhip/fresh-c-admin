import Vue from 'vue';
import Vuex from 'vuex';
import { removeUserInfo, setUser, getUserInfo } from '../utils/user';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false,
    user: getUserInfo() || {
      username: '',
      appkey: '',
      role: '',
      email: ''
    }
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, payload) {
      state.user = payload;
    },
    logout(state) {
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: ''
      }
      removeUserInfo();
    }
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed');
    },
    setUserInfo({ commit }, payload) {
      commit('setUserInfo', payload);
      setUser(payload);
    },
    logout({ commit }) {
      commit('logout');
    }
  },
  modules: {
  },
});
