<template>
  <div class="whiteElephant flex flex-column position-relative overflow-hidden">
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
      <div class="container-fill" />
      <div class="container-outer-ring" />
      <div class="container-inner-ring" />
      <button
        v-if="!isLastTurn"
        class="endTurnButton position-absolute"
        @click="goToNextPlayer"
      >
        End Turn
      </button>
      <span>{{ players[currentPlayer] }}</span>
    </div>

    <base-dialog
      v-if="isLastTurn"
      title="Last Turn"
    >
      The first player now has a chance to start the final chain of exchanges!

      <template v-slot:buttons>
        <button @click="goToLastTurn">
          Start!
        </button>
      </template>
    </base-dialog>
  </div>
</template>

<script>
import BaseDialog from 'components/base-dialog.vue';
import PlayerQueue from './player-queue.vue';
import PlayersInPlay from './players-in-play.vue';

export default {
  name: 'WhiteElephant',
  components: {
    BaseDialog,
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
  computed: {
    /**
     * Player one gets chance to initiate the final gift exchanges. All gifts
     * should be opened at this point. Players can continue swapping until satisfied.
     */
    isLastTurn() {
      const lastPlayer = this.players.length;
      return this.currentPlayer === lastPlayer;
    },
  },
  methods: {
    goToNextPlayer() {
      if (!this.isLastTurn) {
        this.currentPlayer += 1;
      }
    },
    goToLastTurn() {
      this.$router.push({ name: 'Last Turn' });
    },
  },
};
</script>

<style lang="scss" scoped>
.whiteElephant {
  background-image: url("./christmas-scene-sm.png"); // TODO make img smaller (size)
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #ffcda3; // TODO make color var
  background-position: center center;
}
@include screen-md {
  .whiteElephant {
    background-image: url("./christmas-scene-lg.png");
    background-size: cover;
  }
}

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
  top: -3.5em;
  right: -3.5em;
  width: 13em;
  height: 13em;
  border-radius: 50%;
}
@include screen-md {
  .currentPlayerContainer {
    top: initial;
    bottom: -12em;
    right: -8em;
    width: 28em;
    height: 28em;
  }
}

.container-fill {
  position: absolute;
  height: calc(100% - 0.25em);
  width: calc(100% - 0.25em);
  border: 1em solid $color-primary-main;
  border-radius: 50%;
}
@include screen-md {
  .container-fill {
    border-width: 2em;
  }
}

.container-outer-ring {
  position: absolute;
  height: 100%;
  width: 100%;
  border: 0.25em solid $color-primary-dark;
  border-radius: 50%;
}

.container-inner-ring {
  position: absolute;
  height: calc(100% - 2em);
  width: calc(100% - 2em);
  border: 0.25em solid $color-primary-dark;
  border-radius: 50%;
}
@include screen-md {
  .container-inner-ring {
    height: calc(100% - 4em);
    width: calc(100% - 4em);
    border-width: 0.25em;
  }
}

.endTurnButton {
  top: -4px;
}
</style>
