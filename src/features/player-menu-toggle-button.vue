<template>
  <div>
    <button
      class="playerMenuToggleButton"
      @click="showMenu = !showMenu"
    >
      <slot />
    </button>
    <dropdown-menu
      class="playerDropdownMenu"
      :open="showMenu"
    >
      <ul>
        <li
          v-for="player in playerList"
          :key="player"
        >
          <slot name="menuItem">
            {{ player }}
          </slot>
        </li>
      </ul>
    </dropdown-menu>
  </div>
</template>

<script>
import DropdownMenu from 'components/dropdown-menu.vue';

export default {
  name: 'PlayerMenuToggleButton',
  components: {
    DropdownMenu,
  },
  props: {
    playerList: { type: Array, default: () => ([]) },
  },
  data: () => ({
    showMenu: false,
  }),
};
</script>

<style lang="scss" scoped>
.playerMenuToggleButton {
  display: flex;
}

@include screen-md {
  .playerMenuToggleButton {
    display: none;
  }
}

.playerDropdownMenu {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
@include screen-sm {
  .playerDropdownMenu {
    height: 85%;
    width: 75%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
@include screen-md {
  .playerDropdownMenu {
    display: none;
  }
  .playerDropdownMenu.show {
    display: none;
  }
}
</style>
