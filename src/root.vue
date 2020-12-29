<template>
  <div class="root flex flex-column">
    <div>navbar (reset)</div>
    <white-elephant class="flex-1" />
  </div>
</template>

<script>
import WhiteElephant from 'features/white-elepant';

export default {
  name: 'Root',
  components: {
    WhiteElephant,
  },
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.root {
  grid-template-rows: auto 1fr;
  height: 100vh;
  background-color: $color-white-main;
  color: $text-color-black;
}
</style>
