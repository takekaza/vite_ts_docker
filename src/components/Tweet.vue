<script setup lang="ts">
import TweetPostForm from "./TweetPostForm.vue";
import TweetList from "./TweetList.vue";
import { ref } from "vue";
const tweets = ref([
  { id: 0, description: "Hello World!!" },
  { id: 1, description: "This is ..." },
]);
// 双方向バインディング
// const inputtingDescription = ref<string>("");

const postTweet = (description: string) => {
  const tweet = { id: Math.random(), description }; // 組み込み用JS関数: 適当な値が返ってくる
  tweets.value.push(tweet); // push: リアクティブな配列tweetsに対して新しいtweetという新しいオブジェクトを送る
  // inputtingDescription.value = "";
  // console.log("post......", tweets.value);
};

const deleteTweet = (id: number) => {
  // 配列の中のidプロパティを見て、deleteで押されたidでないものを全て返す->だから消されたように見える
  tweets.value = tweets.value.filter((t) => t.id !== id);
};
</script>

<template>
  <div class="container">
    <h1>Tweeter</h1>
    <TweetPostForm @post-tweet="postTweet" />
    <!-- <div class="form-container">
      <input v-model="inputtingDescription" />
      <button class="save-button" @click="postTweet()">post</button>
    </div> -->
    <div class="tweet-container">
      <p v-if="tweets.length <= 0">No tweets have been added</p>
      <ul v-else>
        <!-- 値を渡す元（先）-> Props -->
        <TweetList :tweets="tweets" @delete-tweet="deleteTweet" />
        <!-- ■コールバック形式はこちら■ -->
        <!-- <TweetList :tweets="tweets" :delete-tweet="deleteTweet" /> -->
        <!-- <li v-for="tweet in tweets" :key="tweet.id" class="tweet-list">
          <span>{{ tweet.description }}</span>
          <button @click="deleteTweet(tweet.id)" class="delete-button">
            delete
          </button>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* .form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aliceblue;
  padding: 24px 0;
  width: 60%;
  margin-bottom: 12px;
  border-radius: 4px;
} */
/* .tweet-list {
  list-style: none;
  margin-bottom: 12px;
  border-radius: 4px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(207, 220, 232);
  padding: 8px 20px;
  width: 300px;
} */

/* .save-button {
  color: #fff;
  font-weight: bold;
  background-color: #68c9c9;
  border-radius: 2px;
  border: none;
  width: 60px;
  height: 22px;
}
.save-button:hover {
  background-color: #37bdbd;
} */
/* .delete-button {
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
} */
input {
  margin-bottom: 16px;
}
label {
  font-size: 20px;
  font-weight: bold;
}
</style>
