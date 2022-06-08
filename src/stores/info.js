/*
 * @Author:PeiChen Xia
 * @Date:2022-06-08 16:09:19
 * @LastEditors:PeiChen Xia
 * @LastEditTime:2022-06-08 17:05:34
 * @Description:
 */

import { 
  defineStore
} from 'pinia'

export const userStore = defineStore({
  id:'info',
  state:() => ({
    name: 'XiaBlossom'
  }),
  actions:{},
  getters:{},
})