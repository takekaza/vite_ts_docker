<script setup lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
// import Payment from "./components/Payment.vue";
// import Tweet from "./components/Tweet.vue";
// import Persons from "./components/Persons.vue";
// import { ref, computed } from "vue";
// import CardList from "./components/CardList.vue";
// import SecondCardList from "./components/SecondCardList.vue";
import Form from "./components/Form.vue";

// import TodoList from "./components/TodoList.vue";
// import { provide } from "vue";
// // import { todos, addTodo } from "./useTodo";
// import { todos, todoKey } from "./useTodo";

// provide("todos", todos);
// provide("addTodo", addTodo);

// provide(todoKey, todos);

// const isActiveTabName = ref("1");
// // const isFirstTab = ref(true);
// const updateTab = (activeName: string) => {
//   isActiveTabName.value = activeName;
// };
// // const updateTab = (isFirst: boolean) => {
// //   isFirstTab.value = isFirst;
// // };

// const currentComponent = computed(() => {
//   switch (isActiveTabName.value) {
//     case "1":
//       return CardList;
//     case "2":
//       return SecondCardList;
//     case "3":
//       return CardList;
//     default:
//       return CardList;
//   }
// });
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <!-- <Persons /> -->
  <!-- <Tweet /> -->
  <!-- <Payment /> -->

  <!-- <div class="tab-changer">
    <button @click="updateTab('1')">Tab 1</button>
    <button @click="updateTab('2')">Tab 2</button>
    <button @click="updateTab('3')">Tab 3</button>
  </div>
  <div class="tab-contents">
    <CardList />
    <component :is="currentComponent"></component>
    <CardList v-if="isFirstTab"></CardList>
    <SecondCardList v-if="!isFirstTab"></SecondCardList>
  </div> -->

  <!-- <TodoList /> -->

  <Form />
</template>

<style scoped>
/* 基本的にはscoped設定 */
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.tab-contents {
  margin-top: 20px;
}

* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
  background-color: #292929;
}
</style>
