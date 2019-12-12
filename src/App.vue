<template>
  <div id="app">
    <a-layout id="m-mainContent" v-show="isMainShow">
      <a-layout-sider :width="85">
        <left-photo></left-photo>
      </a-layout-sider>
      <a-layout-content>
        <a-layout-header :style="{ height: '20px' }"></a-layout-header>
        <a-layout-content :style="{ height: '35px' }"></a-layout-content>
        <a-layout-footer :style="{ height: '30px', padding: '0px' }">
          <control-list></control-list>
        </a-layout-footer>
      </a-layout-content>
    </a-layout>
    <div id="m-handlePart" v-show="isHandleShow" @click="handleClicked"></div>
    <song-list id="songList"></song-list>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import HelloWorld from './components/HelloWorld.vue'
  import LeftPhoto from './components/LeftPhoto.vue'
  import ControlList from './components/ControlList.vue'
  import SongList from './components/SongList.vue'
  @Component({
    components: {
      HelloWorld,
      LeftPhoto,
      ControlList,
      SongList
    }
  })
  export default class App extends Vue {
    // netease music play lists id
    @Prop(String)
    readonly playListsId!: string

    isMainShow: boolean = true
    isHandleShow: boolean = false

    isSongListShow: boolean = false

    handleClicked() {
      this.isHandleShow = !this.isHandleShow
      this.isMainShow = !this.isMainShow
    }
  }
</script>

<style lang="scss">
  $contentHeight: 85px;
  $mainContentWidth: 320px;

  #app {
    position: fixed;
    z-index: 999;
    top: 50%;
    left: 0px;
    height: auto;
    width: auto;
    box-shadow: 4px 3px 5px 1px #ddcfe1;
    border-radius: 4px;
    background: transparent;
  }

  #m-mainContent {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    overflow: hidden;
    width: $mainContentWidth;
    height: $contentHeight;
    background-color: antiquewhite;
  }
  #m-handlePart {
    float: right;
    width: 30px;
    height: $contentHeight;
    background: rgb(175, 235, 163);
  }
  #songList {
    width: $mainContentWidth;
  }
</style>
