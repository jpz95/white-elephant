<template>
  <div class="baseDialog position-fixed">
    <div class="titleBar flex">
      <h4>{{ title }}</h4>
      <span class="m-l-auto">x</span>
    </div>
    <div class="contentWrapper">
      <slot />
    </div>
    <div class="buttonContainer space-x-6">
      <slot name="buttons" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseDialog',
  props: {
    title: { type: String, default: '' },
  },
};
</script>

<style lang="scss" scoped>
.baseDialog {
  width: 90%;
  top: 50%;
  left: 50%;
  border-radius: 0.5rem;
  transform: translate(-50%, -50%);
  z-index: 100;
  background-color: $color-primary-light;
}

@include screen-sm {
  .baseDialog {
    width: initial;
    min-width: 360px;
  }
}

.titleBar {
  padding: 0.375rem 0.75rem;
}

.contentWrapper {
  padding: 0.375rem 0.75rem;
}

.buttonContainer {
  display: flex;
  justify-content: flex-end;
  padding: 0.375rem 0.75rem;
}
</style>
