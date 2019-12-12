import { Module, VuexModule, Mutation } from 'vuex-module-decorators'


@Module
export default class MusicModule extends VuexModule {
  isSongListShow: boolean = false
  
  get songListStatus () {
    return this.isSongListShow
  }

  @Mutation
  changeSongListStatus() {
    this.isSongListShow = !this.isSongListShow
  }

}
