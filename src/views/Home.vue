<template>
  <div class="home">
    <AppFilmForm @add-film="addFilm"></AppFilmForm>
    <AppFilmList :filmList="filmList"></AppFilmList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppFilmForm from "../components/AppFilmForm.vue";
import AppFilmList from "../components/AppFilmList.vue";
import { FilmsActions } from "../store/films/actions";
import { FilmsMutations } from "../store/films/mutations";

@Component({
  components: {
    AppFilmForm,
    AppFilmList,
  },
})
export default class Home extends Vue {
  /**
   *
   */
  constructor() {
    super();
  }

  get filmList(): string[] {
    return this.$store.getters.getList;
  }

  public addFilm(film: string): void {
    this.$store.commit(FilmsMutations.ADD_FILM, film);
  }

  mounted(): void {
    this.$store.dispatch(FilmsActions.RETRIEVE_FILMS_FROM_API);
  }
}
</script>
