<script setup lang="ts">
import { inject } from "vue";
import { todoKey } from "../useTodo";

// const todos = inject("todos");
// // 名前が被らないように「_」追加
// const _addTodo = inject("addTodo");

// const { todos, addTodo: _addTodo } = inject("todos");
// injectでtodoKeyを渡す
// const { todos, addTodo: _addTodo } = inject(todoKey);

const state = inject(todoKey);
if (!state) {
  throw new Error("state is undefined!!");
}

/* 型エラーあり->大規模Appでは注意する */
const { todos, addTodo } = state;

// const addTodo = (title: string) => {
//   _addTodo(title);
//   // console.log(title);
// };
</script>

<template>
  <div>
    <ul :style="{ listStyle: 'none' }">
      <li
        :style="{ backgroundColor: 'aliceblue', marginBottom: '10px' }"
        v-for="todo in todos"
      >
        {{ todo.title }}
      </li>
    </ul>
    <button @click="addTodo('add!')">Add</button>
  </div>
</template>

<style scoped></style>
