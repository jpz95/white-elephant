<template>
  <ul class="playersInPlay flex">
    <li
      v-for="player in players"
      :key="player"
      class="playersInPlayCard"
    >
      {{ player }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PlayersInPlay',
  props: {
    players: {
      type: Array,
      default: () => (['one', 'two', 'three', 'four']),
    },
  },
};
</script>

<style lang="scss" scoped>
.playersInPlay {
  border-top-width: 2px;
  border-left-width: 0;
  background-image: linear-gradient(to top, #f5efef 0%, #c1dfc4 100%);
  border-top-left-radius: 0;
  border-color: $color-primary-main;
}

.playersInPlayCard {
  height: 6.5em;
  width: 9em;
}
</style>
