<template>
  <div class="flex flex-column position-relative">
    <div class="flex-1 flex align-items-center justify-center">
      gifts (image or animation)
    </div>
    <div class="playerQueueContainer position-absolute flex overflow-x-auto">
      <player-queue />
    </div>
    <div class="playersInPlayContainer position-absolute flex overflow-x-auto">
      <players-in-play />
    </div>
  </div>
</template>

<script>
import PlayerQueue from './player-queue.vue';
import PlayersInPlay from './players-in-play.vue';

export default {
  name: 'WhiteElephant',
  components: {
    PlayerQueue,
    PlayersInPlay,
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

.playersInPlayContainer {
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
