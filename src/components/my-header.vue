<!--
 * @Author:PeiChen Xia
 * @Date:2022-06-08 17:12:16
 * @LastEditors:PeiChen Xia
 * @LastEditTime:2022-06-08 22:21:13
 * @Description:
-->
<script setup>
import {ref} from 'vue'
import { todosDate  } from '@/stores/todolist'
const todos = todosDate ()
const newTodo = ref("");
function add(){
  if(!newTodo.value.trim()){return alert('請輸入數據')}
    todos.addTodo(newTodo)
    newTodo.value = ''
  }
</script>

<template>
  <div class="todoList-header">
    <div class="enter-group">
    <input type="text" v-model="newTodo" @keyup.enter="add">
      <button @click="add">+</button>
    </div>
  </div>
</template>