<template>
    <div>
        <button @click="change">{{title}}</button><br/>
        {{formData.type}}<br/>
        <button @click="$emit('changeComponent','read')">跳转</button>
    </div>
</template>
<script setup>
// 声明接收父组件传递的属性值：自定义属性
import { reactive } from 'vue' 

let formData = reactive({
    type:"233243245",
    number:0
})

let propsData = defineProps({
    title: {
        type: String,
        required: true
    },
    error: Boolean,
    flat: Boolean,
    tips: {
        type: String,
        default: '我是一个普通的按钮'
    }
})
const emit = defineEmits(["changeComponent"]);
function change(){
    emit("changeComponent","read")
}
</script>