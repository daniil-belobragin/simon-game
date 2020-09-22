<template>
  <div id="app">
    <div class="wrapper">
      <ul class="buttons-wrapper">
        <li class="button-wrapper" v-for="(button, id) in buttons" :key="id">
          <custom-button @passId="setYourQueue" ref="customButton" :button-id="id" :button-name="button.name"
                         :audio-name="button.soundName" :timeout="modeTimeout" />
        </li>
      </ul>
      <div class="menu-wrapper">
        <span>Round:  {{ gameRound }} </span>
        <div class="lost-title-wrapper" v-show="gameLost">
          <span>You lost with {{ gameRound - 1 }} points.</span>
          <span>Try again</span>
        </div>
        <button class="start-button" v-on:click="startGame">
          Start
        </button>

        <span>Game options: </span>
        <ul>
          <li v-for="mode in modes" :key="mode.id">
            <input type="radio" :value="mode.value" v-model="modeTimeout" v-on:change="startGame">
            <label class="radio-label"> {{ mode.name }} </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import CustomButton from "@/components/CustomButton";
export default {
  name: 'App',

  data () {
    return {
      buttons: [
          {name: 'upSideLeft', soundName: 'upSideLeftSound'},
          {name: 'upSideRight', soundName: 'upSideRightSound'},
          {name: 'downSideLeft', soundName: 'downSideLeftSound'},
          {name: 'downSideRight', soundName: 'downSideRightSound'}
        ],
      modes: [
          {name: 'easy', value: 1500},
          {name: 'medium', value: 1000},
          {name: 'hard', value: 400}
      ],
      modeTimeout: 1000,
      requiredQueue: [],
      yourQueue: [],
      gameStarted: false,
      gameLost: false,
      gameRound: 0,
    }
  },

  components: {
    'custom-button': CustomButton
  },

  methods: {
    startGame () {
      if (this.gameStarted) {
        this.resetQueue()
      }
      this.gameStarted = true
      this.gameLost = false
      this.playQueue()
    },
    playQueue () {
      this.requiredQueue.push(this.getRandomIndex())
      this.playing(true)
      for (let i in this.requiredQueue) {
        setTimeout(() => {
          this.$refs.customButton[this.requiredQueue[i]].clicked(false)
        }, 1.6 * i * this.modeTimeout)
      }
      setTimeout(() => {
        this.playing(false)
      }, this.requiredQueue.length * this.modeTimeout)
      this.gameRound = this.requiredQueue.length
    },
    getRandomIndex () {
      return Math.floor(Math.random() * (this.buttons.length))
    },
    resetQueue () {
      this.yourQueue = []
      this.requiredQueue = []
    },
    setYourQueue (index) {
      if (!this.gameStarted) return
      this.yourQueue.push(index)

      if (this.yourQueue.length === this.requiredQueue.length) {
        if (this.arrayEquals()) {
          setTimeout(() => {
            this.playQueue()
          }, 2 * this.modeTimeout)
          this.yourQueue = []
        }
        else {
          this.resetQueue()
          this.gameStarted = false
          this.gameLost = true
        }
      }
      else {
        if(!this.arrayEquals()) {
          this.resetQueue()
          this.gameStarted = false
          this.gameLost = true
        }
      }
    },
    arrayEquals () {
      for (let i in this.yourQueue) {
        if (this.yourQueue[i] !== this.requiredQueue[i]) {
          return false
        }
      }
      return true
    },
    playing (val) {
      for (let i in this.buttons) {
        this.$refs.customButton[i].playing(val)
      }
    }
  }
}
</script>

<style lang="scss">
  @import "./assets/style/style";

  .wrapper{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    font-size: 24px;
    font-weight: 700;
  }

  .buttons-wrapper {
    display: inline-grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
  }

  .button-wrapper {
    width: 150px;
    height: 150px;
  }
  .menu-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 40px;
    width: 260px;
  }

  .radio-label {
    font-size: 16px;
    font-weight: normal;
  }
  .start-button {
    font-size: 22px;
    background: #78BCFF;
    width: 112px;
    margin: 20px 0;
    height: 40px;
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .lost-title-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>
