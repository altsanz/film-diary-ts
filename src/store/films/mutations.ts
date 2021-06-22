import { MutationTree } from 'vuex';
import { FilmsState } from './types';

export enum FilmsMutations {
    ADD_FILM = 'ADD_FILM',
    UPDATE_FILM_LIST = 'UPDATE_FILM_LIST',
}

export const mutations: MutationTree<FilmsState> = {
    [FilmsMutations.ADD_FILM](state, payload: string) {
        console.log(payload);
        state.list = [...state.list, payload];
    },
    [FilmsMutations.UPDATE_FILM_LIST](state, payload: string[]) {
        state.list = payload;
    }
}
