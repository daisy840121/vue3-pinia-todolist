<!--
 * @Author:PeiChen Xia
 * @Date:2022-06-08 17:16:45
 * @LastEditors:PeiChen Xia
 * @LastEditTime:2022-06-08 22:42:02
 * @Description:
-->
<script setup>
import {computed } from 'vue'
import { todosDate  } from '@/stores/todolist'
const todos = todosDate ()
console.log(todos.todos.length);
const total = computed(()=>{
  return todos.todos.length
})
const doneTotal = computed({
  get(){
      return todos.todos.reduce((pre,current) => pre + (current.done?1:0),0)
  },
})

const isAll = computed({
  get(){
    return todos.todos.reduce((pre,current) => pre + (current.done?1:0),0) === todos.todos.length && todos.todos.length > 0
    //return this.doneTotal === this.total && this.total > 0
  },
  set(value){
    todos.checkAllTodo(value)
  }
})

function clearAll(){
    todos.clearAllTodo()
  }

</script>
<template>
  <div class="todoList-footer">
    <div class="todoList-footer-text">
      <input type="checkbox" v-model="isAll" /> 
      <span>已完成 {{doneTotal}} / 全部 {{total}} </span>
    </div>
      <button @click="clearAll">清除已完成</button>
  </div>
</template>
