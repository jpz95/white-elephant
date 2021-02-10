<template>
  <div
    class="dropdownMenu position-absolute"
    :class="{ show: open }"
  >
    <!-- TODO add back button -->
    <slot />
  </div>
</template>

<script>
export default {
  name: 'DropdownMenu',
  props: {
    open: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" scoped>
.dropdownMenu {
  display: none;
}
.dropdownMenu.show {
  display: block;
}
</style>
