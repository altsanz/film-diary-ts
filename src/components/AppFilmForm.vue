<template>
  <form @submit.prevent="addFilm(film)">
    <input v-model="film" type="text" />
    <button type="submit">Añadir</button>
  </form>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";

@Component({
  name: "AppFilmForm",
})
export default class AppFilmForm extends Vue {
  public film = "";

  @Emit()
  addFilm(film: string): string {
    console.log(film);
    this.film = "";
    return film;
  }
}
</script>

<style scoped></style>
