<template>
  <div class="fullLayout grid">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FullLayout',
};
</script>

<style lang="scss" scoped>
.fullLayout {
  height: 100%;
  grid-template-rows: 1fr;
  background-color: $color-white-main;
  color: $text-color-black;
}
</style>
