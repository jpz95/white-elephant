<template>
  <div class="flex flex-column position-relative overflow-hidden">
    <div class="flex-1 flex align-items-center justify-content-center">
      gifts (image or animation)
    </div>
    <div class="playerQueueContainer position-absolute flex overflow-x-auto">
      <player-queue :current-player-idx="currentPlayer" />
    </div>
    <div class="playersInPlayContainer position-absolute flex flex-row-reverse overflow-x-auto">
      <players-in-play :current-player-idx="currentPlayer" />
    </div>
    <div
      class="
        currentPlayerContainer
        position-absolute flex align-items-center justify-content-center"
    >
      {{ players[currentPlayer] }}
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
  right: 6.5em;
  width: calc(100% - 6.5em);
}

.currentPlayerContainer {
  bottom: -1.5em;
  right: -2em;
  width: 10em;
  height: 10em;
  border-radius: 100px;
  border: 1px solid;
}
</style>
