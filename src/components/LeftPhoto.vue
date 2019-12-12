<template>
  <div class="leftPhoto">
    <img src="http://p1.qhimg.com/t012c4776b2b0ce69c3.jpg" alt="" />
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator'
  @Component
  export default class LeftPhoto extends Vue {
    @Prop({
      type: Number
    })
    readonly sizeImg!: number
  }
</script>

<style scoped lang="scss">
  .leftPhoto {
    display: inline-block;
    width: 85px;
    height: 85px;
  }
  .leftPhoto img {
    width: 100%;
    height: 100%;
  }
</style>
