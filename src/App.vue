<!--
 * @Author:PeiChen Xia
 * @Date:2022-06-08 12:04:47
 * @LastEditors:PeiChen Xia
 * @LastEditTime:2022-06-08 18:45:18
 * @Description:
-->
<script setup>
import HelloWorld from './components/HelloWorld';
import MyTop from './components/my-top';
import MyFooter from './components/my-footer';
// import { userStore  } from '@/stores/info'
// const info = userStore ()
</script>
 
<template>
  <div class="wrap">
    <div class="todoList">
      <MyTop />
      <MyFooter />
    </div>
  </div>
  <HelloWorld/>
</template>

