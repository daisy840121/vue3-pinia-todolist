<!--
 * @Author:PeiChen Xia
 * @Date:2022-06-08 12:04:47
 * @LastEditors:PeiChen Xia
 * @LastEditTime:2022-06-08 17:03:24
 * @Description:
-->
<template>
 <div>
    {{info.name}}
 </div>
</template>

<script setup>
import { userStore  } from '@/stores/info'
const info = userStore ()
</script>
