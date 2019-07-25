<template>
  <div class="home">
    <div draggable="true" class="drag-div"></div>
    <div draggable="true" class="drag-div"></div>
    <div class="drop-div" @drop.prevent="dropHandler" @dragover.prevent></div>
  </div>
</template>

<script>
export default {
  name: 'home',
  created() {
    this.init()
  },
  methods: {
    init() {

    },
    dropHandler(event) {
      console.log('-===============drop===========')
      console.log(event)
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  padding: 100px;
  .drag-div {
    width: 100px;
    height: 100px;
    background-color: aquamarine;
  }
  .drop-div {
    width: 200px;
    height: 200px;
    border: solid 1px black;
    background: oldlace;
  }
}
</style>
