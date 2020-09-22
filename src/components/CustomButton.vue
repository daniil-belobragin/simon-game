<template>
  <button class="button" v-bind:class="{upRight: buttonName === 'upSideRight', upLeft: buttonName === 'upSideLeft',
  downLeft: buttonName === 'downSideLeft', downRight: buttonName === 'downSideRight', active: isActive}"
          v-on:click="clicked" :disabled="this.isPlaying">
  </button>
</template>

<script>
export default {
  name: "CustomButton",

  data () {
    return  {
      audio: new Audio(require("../assets/audio/" + this.audioName + ".mp3")),
      isActive: false,
      isPlaying: false
    }
  },

  methods: {
    clicked (state=true) {
      this.audio.play()
      this.isActive = true

      setTimeout(() => {this.isActive = false}, this.timeout)

      if (state) {
        this.$emit("passId", this.buttonId)
      }
    },
    playing (val) {
      this.isPlaying = val
    }
  },

  props: {
    buttonName: {
      required: true
    },
    audioName: {
      required: true
    },
    timeout: {
      default: 1500
    },
    buttonId: {
      required: true
    }
  }
}
</script>

<style lang="scss">
  .button {
    outline: none;
    border: 2px;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    cursor: pointer;
    opacity: 0.5;
  }

  .upRight {
    background: #FF5643;
    border-radius: 0 100% 0 0;
  }

  .upRight:hover {
    border-right: 2px solid black;
    border-top: 2px solid black;
  }

  .upLeft {
    background: dodgerblue;
    border-radius: 100% 0 0 0;
  }

  .upLeft:hover {
    border-left: 2px solid black;
    border-top: 2px solid black;
  }

  .downLeft {
    background: #FEEF33;
    border-radius: 0 0 0 100%;
  }

  .downLeft:hover {
    border-left: 2px solid black;
    border-bottom: 2px solid black;
  }

  .downRight {
    background: #BEDE15;
    border-radius: 0 0 100% 0;
  }

  .downRight:hover {
    border-right: 2px solid black;
    border-bottom: 2px solid black;
  }

  .active {
    opacity: 1;
  }

</style>