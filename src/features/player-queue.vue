<template>
  <ul class="playerQueue flex">
    <li
      v-for="player in playerQueue"
      :key="player"
      class="playerQueueCard flex justify-content-center align-items-center"
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
    currentPlayerIdx: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    playerQueue() {
      return this.players.slice(this.currentPlayerIdx + 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.playerQueue {
  border-bottom-width: 2px;
  border-right-width: 0;
  background-image: linear-gradient(to top, #feada6 0%, #f5efef 100%);
  border-bottom-right-radius: 0;
  border-color: $color-secondary-main;
}

.playerQueueCard {
  height: 6.5em;
  width: 9em;
}
</style>
