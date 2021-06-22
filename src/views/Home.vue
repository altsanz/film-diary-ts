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
@Component({
  components: {
    AppFilmForm,
    AppFilmList,
  },
})
export default class Home extends Vue {
  public filmList: string[] = [];

  /**
   *
   */
  constructor() {
    super();
  }
  public addFilm(film: string): void {
    this.filmList.push(film);
  }
}
</script>
