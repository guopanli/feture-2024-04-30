<template>
    <dv class="outmain">
    <header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="Story">Story</el-menu-item>
            <el-menu-item index="read">read</el-menu-item>
        </el-menu>
    </header>
    <main>
      <component :is="component" :title="title" @changeComponent="changeComponent" />
    </main>
  </dv>
</template>
<script setup>
import Story from './Story.vue'
import read from './read.vue'
import {ref,reactive,shallowRef} from 'vue';

let component = shallowRef(Story)
let title = ref('普通按钮') // 按钮文本
const tabs = reactive([
  {
    name: 'Story',
    comName: shallowRef(Story)
  },
  {
    name: 'read',
    comName: shallowRef(read)
  },
])
function handleSelect(key, keyPath) {
    changeComponent(keyPath[0])
}
function changeComponent(comP){
  for (let i = 0; i < tabs.length; i++) {
    const e = tabs[i];
    if (e.name === comP) {
      component.value = e.comName
    }
  }
}

</script>
<style scoped>
.outmain{
  height: 100%;
  width: 100%;
  /* border: steelblue 1px solid; */
}
header {
  height: 10%;
  width: 100%;
  float: left;
  /* border: rgb(255, 30, 1) 1px solid; */
}
main {
  height: 85%;
  width: 100%;
  float: left;
  /* border: rgb(160, 53, 76) 1px solid; */
}
</style>