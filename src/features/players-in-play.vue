<template>
  <div>
    <ul class="playersInPlay">
      <li
        v-for="player in playersInPlay"
        :key="player"
        class="playersInPlayCard flex justify-content-center align-items-center"
      >
        {{ player }}
      </li>
    </ul>
    <player-menu-toggle-button :player-list="playersInPlay">
      Players in play
    </player-menu-toggle-button>
  </div>
</template>

<script>
import PlayerMenuToggleButton from './player-menu-toggle-button.vue';

export default {
  name: 'PlayersInPlay',
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
    playersInPlay() {
      return this.players.slice(0, this.currentPlayerIdx);
    },
  },
};
</script>

<style lang="scss" scoped>
.playersInPlay {
  display: none;
}
@include screen-md {
  .playersInPlay {
    display: flex;
    border-top-width: 2px;
    border-left-width: 0;
    background-image: linear-gradient(to top, #f5efef 0%, #c1dfc4 100%);
    border-top-left-radius: 0;
    border-color: $color-primary-main;
  }
}

.playersInPlayCard {
  height: 6.5em;
  width: 9em;
}
</style>
