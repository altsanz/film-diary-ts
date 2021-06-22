import { Module } from 'vuex';
import { RootState } from '../types';
import { FilmsState } from './types';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

const state: FilmsState = {
    list: ['star wars']
}
export const films: Module<FilmsState, RootState> = {
    state,
    getters,
    mutations,
    actions
}
