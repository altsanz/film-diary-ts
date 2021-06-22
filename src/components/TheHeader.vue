<template>
  <div>{{ title }}</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "TheHeader",
})
export default class TheHeader extends Vue {
  get title(): string {
    return this.$store.state.title;
  }
}
</script>

<style scoped></style>
