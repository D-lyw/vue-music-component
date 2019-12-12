<template>
  <div class="songListComponent" v-show="songListStatus">
    <a-table
      :columns="columns"
      :dataSource="songList"
      :pagination="false"
      :showHeader="false"
      size="small"
      :scroll="scrollHeight"
      :rowClassName="setRowStyle"
    ></a-table>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'
  import { State, Getter, Mutation} from 'vuex-class'
  @Component({})
  export default class SongList extends Vue {
    columns: Array<Object> = [
      {
        title: '',
        dataIndex: 'songIndex',
        align: 'center',
        width: '30px'
      },
      {
        title: '',
        dataIndex: 'songName',
        align: 'left',
        class: 'limit-word-songname'
      },
      {
        title: '',
        dataIndex: 'songSinger',
        align: 'center',
        class: 'limit-word-singer'
      }
    ]
    songList: Array<Object> = [
      {
        key: 0,
        songIndex: 0,
        songName: 'Waves',
        songSinger: 'Jesse Maranger'
      },
      {
        key: 1,
        songIndex: 1,
        songName: 'Waves',
        songSinger: 'Jesse Maranger'
      },
      {
        key: 2,
        songIndex: 2,
        songName: '歌名长度歌名长度歌名长度',
        songSinger: '歌手名字长度'
      },
      {
        key: 3,
        songIndex: 3,
        songName: 'Waves',
        songSinger: 'Jesse Maranger'
      },
      {
        key: 4,
        songIndex: 4,
        songName: 'Waves',
        songSinger: 'Jesse Maranger'
      },
      {
        key: 5,
        songIndex: 5,
        songName: '爱如潮水',
        songSinger: '张信哲'
      },
      {
        key: 6,
        songIndex: 6,
        songName: 'Waves',
        songSinger: 'Jesse Maranger'
      },
      {
        key: 7,
        songIndex: 7,
        songName: 'Waves',
        songSinger: 'Jesse Maranger'
      },
      {
        key: 8,
        songIndex: 8,
        songName: 'Waves',
        songSinger: 'Jesse Maranger'
      },
      {
        key: 9,
        songIndex: 9,
        songName: 'Waves',
        songSinger: 'Jesse Maranger'
      }
    ]
    scrollHeight: object = {
      y: 240
    }

    setRowStyle(record: object, index: number) {
      return index % 2 === 1 ? 'songListColor1' : 'songListColor2'
    }

    @Getter('songListStatus') 
    songListStatus: any

  }
</script>

<style lang="scss">
  .songListComponent {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    overflow: hidden;
    .ant-table-small > .ant-table-content > .ant-table-body {
      margin: 0px;
    }
    .ant-table-fixed-header > .ant-table-content > .ant-table-scroll {
      overflow: hidden;
    }
    .ant-table-fixed-header > .ant-table-content > .ant-table-scroll > .ant-table-body{
      // &::-webkit-scrollbar{
      //   display: none;
      // }
      // // IE
      // -ms-overflow-style: none;
      // // FireFox
      // overflow-x: -moz-hidden-unscrollable;
      // height: 100%;

      width: calc(100% + 18px);
      
    }
    .ant-table-small
      > .ant-table-content
      > .ant-table-scroll
      > .ant-table-body
      > table
      > .ant-table-tbody
      > tr
      > td {
      padding: 4px;
    }
    .songListColor1 {
      background-color: rgb(238, 233, 233);
    }
    .songListColor2 {
    }
  }
  .limit-word-songname {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 10em;
  }
  .limit-word-singer {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 6em;
  }
</style>
