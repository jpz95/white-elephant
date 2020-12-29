<template>
  <div class="flex flex-column position-relative">
    <div class="flex-1">
      gifts (image or animation)
    </div>
    <div class="playerQueueContainer position-absolute flex overflow-x-auto">
      <player-queue />
    </div>
    <div class="playersInPlay position-absolute">
      current and ppl gone
    </div>
  </div>
</template>

<script>
import PlayerQueue from './player-queue.vue';

export default {
  name: 'WhiteElephant',
  components: {
    PlayerQueue,
  },
  props: {
    players: {
      type: Array,
      default: () => (['one', 'two', 'three', 'four']),
    },
  },
  data: () => ({
    currentPlayer: 0,
  }),
};
</script>

<style lang="scss" scoped>
.playerQueueContainer {
  top: 0;
  left: 0;
  width: 100%;
}
</style>
