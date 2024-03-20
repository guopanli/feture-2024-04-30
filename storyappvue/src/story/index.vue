<template>
    <dv class="outmain">
    <header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
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
  border: rgb(255, 30, 1) 1px solid;
}
main {
  height: 85%;
  width: 100%;
  float: left;
  /* border: rgb(160, 53, 76) 1px solid; */
}
</style>