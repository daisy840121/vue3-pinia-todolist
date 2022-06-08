/*
 * @Author:PeiChen Xia
 * @Date:2022-06-08 18:29:20
 * @LastEditors:PeiChen Xia
 * @LastEditTime:2022-06-08 22:26:14
 * @Description:
 */

import {
  nanoid
} from 'nanoid'

import { 
  defineStore
} from 'pinia'

export const todosDate = defineStore({
  id:'todosDate',
  state:() => ({
    todos:[
      {
          id:'01',
          title:'吃飯',
          done:false
      }
    ],
  }),
  actions:{
    addTodo(newTodo){
      const obj = { id:nanoid(),title:newTodo.value,done:false };
      this.todos.unshift(obj)
    },
    deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id !== id)
  },
    editTodo(id,title){
      this.todos.forEach((todo)=>{
          if(todo.id === id) todo.title = title
      })
  },
  checkTodo(id){
    this.todos.forEach((todo)=>{
        if(todo.id === id) todo.done = !todo.done
    })
  },
  
  checkAllTodo(done){
    this.todos.forEach((todo)=>{
      todo.done = done
    })
  },

  clearAllTodo(){
    this.todos = this.todos.filter((todo)=>{
      return !todo.done
    })
  }

  },
  getters:{},
})