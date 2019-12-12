<template>
  <div id="controlList">
    <div class="music-play-list">
      <a-icon
        type="step-backward"
        theme="filled"
        :style="{ fontSize: '16px' }"
        class="leftOrRight"
      />
      <a-icon
        type="play-circle"
        :style="{ fontSize: '20px' }"
        v-show="isPaused"
        @click="playClick"
        class="playOrPause"
      />
      <a-icon
        type="pause-circle"
        :style="{ fontSize: '20px' }"
        v-show="isPlaying"
        @click="playClick"
        class="playOrPause"
      />
      <a-icon type="loading" v-show="isLoading" @click="playClick" class="playOrPause"/>
      <a-icon
        type="step-forward"
        theme="filled"
        :style="{ fontSize: '16px' }"
        class="leftOrRight"
      />
    </div>
    <span class="playOrder">
      <a-icon
        :component="CyclePlay"
        v-show="playStatus[0]"
        @click="changePlayStragety(0)"
      />
      <a-icon
        :component="RandomPlay"
        v-show="playStatus[1]"
        @click="changePlayStragety(1)"
      />
      <a-icon
        :component="OneSong"
        v-show="playStatus[2]"
        @click="changePlayStragety(2)"
      />
    </span>
    <a-icon
      type="bars"
      :style="{ fontSize: '18px' }"
      class="control-bars"
      @click="handleSongList"
    />
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import { Getter, Mutation, Action, State } from 'vuex-class'
  import RandomPlay from './userIcon/random.svg'
  import OneSong from './userIcon/onlyOne.svg'
  import CyclePlay from './userIcon/cycle.svg'
import { VuexDecorator } from 'vuex-class/lib/bindings'

  @Component
  export default class ControlList extends Vue {
    isPaused: boolean = true
    isPlaying: boolean = false
    isLoading: boolean = false
    RandomPlay: any = RandomPlay
    OneSong: any = OneSong
    CyclePlay: any = CyclePlay

    playStatus: Array<Boolean> = [true]
    changePlayStragety(index: number) {
      this.playStatus = []
      this.playStatus[(index + 1) % 3] = true
    }
    playClick() {
      if (this.isPlaying) {
        this.isPlaying = false
        this.isPaused = true
      } else if (this.isPaused) {
        this.isLoading = true
        this.isPaused = false
        setTimeout(() => {
          this.isPlaying = true
          this.isLoading = false
        }, 1000)
      }
    }

    @Mutation('changeSongListStatus')
    changeSongListStatus :any
    handleSongList() {
      this.changeSongListStatus()
    }
  }
</script>

<style scoped lang="scss">
  #controlList {
    position: relative;
    height: 30px;
    overflow: hidden;
    .music-play-list {
      display: inline-block;
      box-sizing: border-box;
      i {
        // width: 24px;
      }
      .leftOrRight {
        padding: 7px;
      }
      .playOrPause{
        padding: 5px;
      }
    }
    .control-bars {
      position: absolute;
      right: 0px;
      padding: 6px;
    }
    i {
      box-sizing: border-box;
      &:hover {
        cursor: pointer;
      }
    }

    .playOrder {
      position: absolute;
      right: 35px;
      i {
        padding: 3px;
      }
      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
</style>
