<template>
  <div>
    <ul class="playerQueue">
      <li
        v-for="player in playerQueue"
        :key="player"
        class="playerQueueCard flex justify-content-center align-items-center"
      >
        {{ player }}
      </li>
    </ul>
    <player-menu-toggle-button :player-list="playerQueue">
      Player queue
    </player-menu-toggle-button>
  </div>
</template>

<script>
import PlayerMenuToggleButton from './player-menu-toggle-button.vue';

export default {
  name: 'PlayerQueue',
  components: {
    PlayerMenuToggleButton,
  },
  props: {
    players: {
      type: Array,
      default: () => (['one', 'two', 'three', 'four']),
    },
    currentPlayerIdx: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({}),
  computed: {
    playerQueue() {
      return this.players.slice(this.currentPlayerIdx + 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.playerQueue {
  display: none;
}
@include screen-md {
  .playerQueue {
    display: flex;
    border-bottom-width: 2px;
    border-right-width: 0;
    background-image: linear-gradient(to top, #feada6 0%, #f5efef 100%);
    border-bottom-right-radius: 0;
    border-color: $color-secondary-main;
  }
}

.playerQueueCard {
  height: 6.5em;
  width: 9em;
}
</style>
