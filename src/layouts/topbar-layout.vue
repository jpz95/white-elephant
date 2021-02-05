<template>
  <div class="topbarLayout grid">
    <div>navbar (reset)</div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'TopbarLayout',
};
</script>

<style lang="scss" scoped>
.topbarLayout {
  height: 100%;
  grid-template-rows: auto 1fr;
  background-color: $color-white-main;
  color: $text-color-black;
}
</style>
