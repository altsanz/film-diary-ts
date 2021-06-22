import { ActionTree } from 'vuex';
import { RootState } from '../types';
import { FilmsMutations } from './mutations';
import { FilmsState } from './types';

export enum FilmsActions {
    RETRIEVE_FILMS_FROM_API = 'retrieve_films_from_api'
}

export const actions: ActionTree<FilmsState, RootState> = {
    [FilmsActions.RETRIEVE_FILMS_FROM_API]({ commit }) {
        console.log('hola');
        setTimeout(() => {
            commit(FilmsMutations.UPDATE_FILM_LIST, ['Peliculas', 'desde', 'API'])
        }, 3000);
    }
}
