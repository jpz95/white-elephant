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
  border-right-width: 1px;
  background-image: linear-gradient(to top, #f5efef 0%, #c1dfc4 100%);
  border-bottom-right-radius: 16px;
  border-color: $color-primary-main;
}

.playersInPlayCard {
  height: 6.5em;
  width: 6.5em;
}
</style>
