<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  setup() {},
})
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

* {
  user-select: none;
}

input,
button {
  outline: none;

  &:focus {
    border: 1px solid black;
  }
}
</style>
