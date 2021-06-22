import { GetterTree } from 'vuex';
import { RootState } from '../types';
import { FilmsState } from './types';


export const getters: GetterTree<FilmsState, RootState> = {
    getList(state): string[] {
        return state.list.map((film) => 'Nombre: ' + film);
    }
}
