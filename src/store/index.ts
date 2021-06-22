import Vue from "vue";
import Vuex from "vuex";
import { RootState } from "./types";
import { films } from "./films";

Vue.use(Vuex);

const state: RootState = {
  title: "Film Diary"
}

export default new Vuex.Store<RootState>({
  state,
  mutations: {},
  actions: {},
  modules: {
    films
  },
});
