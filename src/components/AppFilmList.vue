<template>
  <div class="film-list">
    <div v-for="film in filmList" :key="film">{{ film }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AppFilmList extends Vue {
  @Prop()
  public filmList!: string[];
}
</script>

<style scoped>
.film-list {
  margin-top: 20px;
}
</style>
