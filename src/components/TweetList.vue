<script setup lang="ts">
import { defineProps } from "vue";
// 型を定義
type Tweet = {
  id: number;
  description: string;
};
type Props = {
  tweets: Tweet[];
  // Option コールバック: TypeScript形式 void
  // idという引数を受け取って何もリターンしない
  // deleteTweet: (id: number) => void; // これでPropsが決まる
};

// 元々仮で設定した定義を消す
// const tweets: any = [];

// 型を受け取るという宣言
defineProps<Props>();
const emit = defineEmits(["delete-tweet"]);
const deleteTweet = (id: number) => {
  emit("delete-tweet", id);
};
</script>

<template>
  <li v-for="tweet in tweets" :key="tweet.id" class="tweet-list">
    <span>{{ tweet.description }}</span>
    <button @click="deleteTweet(tweet.id)" class="delete-button">delete</button>
  </li>
</template>

<style scoped>
.tweet-list {
  list-style: none;
  margin-bottom: 12px;
  border-radius: 4px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(207, 220, 232);
  padding: 8px 20px;
  width: 300px;
}

.delete-button {
  color: #fff;
  font-weight: bold;
  background-color: #c99a68;
  border-radius: 2px;
  border: none;
  width: 60px;
  height: 22px;
}
.delete-button:hover {
  background-color: #ac783f;
}
</style>
