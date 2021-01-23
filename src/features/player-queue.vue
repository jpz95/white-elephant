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
    <button
      class="playerQueueButton"
      @click="showMenu = !showMenu"
    >
      Player queue
    </button>
    <dropdown-menu
      class="playerQueueDropdownMenu"
      :open="showMenu"
    >
      <ul>
        <li
          v-for="player in playerQueue"
          :key="player"
          class="playerQueueMenuItem"
        >
          {{ player }}
        </li>
      </ul>
    </dropdown-menu>
  </div>
</template>

<script>
import DropdownMenu from 'components/dropdown-menu.vue';

export default {
  name: 'PlayerQueue',
  components: {
    DropdownMenu,
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
  data: () => ({
    showMenu: false,
  }),
  computed: {
    playerQueue() {
      return this.players.slice(this.currentPlayerIdx + 1);
    },
  },
};
</script>

<style lang="scss" scoped>
@include screen-xs {
  .playerQueue {
    display: none;
  }
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

@include screen-xs {
  .playerQueueButton {
    display: flex;
  }
}
@include screen-md {
  .playerQueueButton {
    display: none;
  }
}

.playerQueueDropdownMenu {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
@include screen-sm {
  .playerQueueDropdownMenu {
    height: 85%;
    width: 75%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
@include screen-md {
  .playerQueueDropdownMenu {
    display: none;
  }
  .playerQueueDropdownMenu.show {
    display: none;
  }
}
</style>
