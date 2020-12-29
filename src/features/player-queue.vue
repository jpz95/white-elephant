<template>
  <ul class="playerQueue flex">
    <li
      v-for="player in players"
      :key="player"
      class="playerQueueCard"
    >
      {{ player }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PlayerQueue',
  props: {
    players: {
      type: Array,
      default: () => (['one', 'two', 'three', 'four']),
    },
  },
};
</script>

<style lang="scss" scoped>
.playerQueue {
  border-bottom-width: 2px;
  border-right-width: 1px;
  background-image: linear-gradient(to top, #feada6 0%, #f5efef 100%);
  border-bottom-right-radius: 16px;
  border-color: $color-secondary-main;
}

.playerQueueCard {
  height: 6.5em;
  width: 9em;
}
</style>
