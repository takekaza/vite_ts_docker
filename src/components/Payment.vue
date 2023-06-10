<script setup lang="ts">
// テンプレート再読み込み：リアクティブ->オブジェクト形式
// import { ref, reactive } from "vue";
import { ref } from "vue";
import { reactive } from "vue";
// import { computed } from "vue";
import { watch } from "vue";
import { toRefs } from "vue";
// ライフサイクルフック
import { onMounted, onBeforeMount, onUpdated } from "vue";

// const itemName1 = ref<string>("Desk");
const itemName2 = "Keybord";

// オブジェクトそのものをリアクティブにしたい -> reactive
const item1 = reactive({
  name: "desk",
  price: 40000,
});

// const price1 = 40000;
const price2 = 25000;

const url1 =
  "https://www.amazon.co.jp/FLEXISPOT-%E9%9B%BB%E5%8B%95%E5%BC%8F%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%87%E3%82%B9%E3%82%AF-%E5%B9%85120%C3%97%E5%A5%A5%E8%A1%8C60-%E3%83%A1%E3%83%A2%E3%83%AA%E3%83%BC%E6%A9%9F%E8%83%BD%E4%BB%98%E3%81%8D-%E8%B6%B3%EF%BC%88%E9%BB%92%EF%BC%89%EF%BC%8B%E5%A4%A9%E6%9D%BF%EF%BC%88%E3%83%A1%E3%82%A4%E3%83%97%E3%83%AB%EF%BC%89/dp/B092CZ467D/ref=sr_1_3_sspa?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=1AQNNXXP4M2SU&keywords=%E6%98%87%E9%99%8D%E3%83%87%E3%82%B9%E3%82%AF&qid=1685157241&sprefix=%E6%98%87%E9%99%8D%E3%83%87%E3%82%B9%E3%82%AF%2Caps%2C202&sr=8-3-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzNVRZUEJOWThKVURXJmVuY3J5cHRlZElkPUEwMDY4NDQxOVU0UjBNRUZNUTBSJmVuY3J5cHRlZEFkSWQ9QTM3ME5ZSURYWlc2NDMmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl";

const buy = (itemName: string) => {
  alert(itemName + "を本当に購入されますか？");
};

const clear = () => {
  item1.name = "";
  item1.price = 0;
};

// ref
// const input = (e: any) => {
//   console.log("event:", e.target.value);
//   itemName1.value = e.target.value;
// };

const input = (e: any) => {
  // console.log("event:", e.target.value);
  item1.name = e.target.value;
};
// const inputPrice = (e: any) => {
//   // console.log("event:", e.target.value);
//   item1.price = e.target.value;
// };

const budget = 50000;

// 何らかの条件のもとに値を生成する->基本的にVueではスクリプト側にロジックを記載する
// computed
// const priceLabel = computed(() => {
//   // return item1.price > budget ? "too expensive" : item1.price + "円";
//   if (item1.price > budget * 2) {
//     return "toooooo expentsive...";
//   } else if (item1.price > budget) {
//     return "to0 expensive...";
//   } else {
//     return item1.price + "円";
//   }
// });

// ライフサイクルフック
// 使う頻度は少ないかもしれない
onBeforeMount(() => {
  console.log("before mount");
});

onMounted(() => {
  console.log("mounted");
});

onUpdated(() => {
  console.log("updated");
});

// watchにする場合
// 何らかの値から何らからの処理をすることができる（computedの他のパターン）
const priceLabel = ref<string>(item1.price + "円");
// オブジェクトをリアクティブにする処理
const { price } = toRefs(item1);
// 第1引数が変わると第2引数で変わる
watch(price, () => {
  // console.log("watch");
  if (price.value > budget * 2) {
    priceLabel.value = "toooooo expentsive...";
    // return "toooooo expentsive...";
  } else if (price.value > budget) {
    priceLabel.value = "too expensive...";
    // return "too expensive...";
  } else {
    priceLabel.value = price.value + "円";
  }
});

// 関数を使用してもできるが推奨としてはconputedが質が良い
// const getPrcie;
</script>

<template>
  <div class="container">
    <h1>最近の支出</h1>
    <input v-model="item1.name" />
    <!-- <input @input="input" :value="item1.name" /> -->
    <input v-model="item1.price" />
    <!-- <input @input="inputPrice" :value="item1.price" /> -->
    <button @click="clear">Clear</button>

    <div class="payment">
      <label>{{ item1.name }}</label>
      <label>{{ priceLabel }}</label>
      <!-- <label>{{ item1.price }}円</label> -->
      <a v-bind:href="url1">bought a ..</a>
      <button @click="buy(item1.name)">buy</button>

      <!-- <label>{{ itemName1 }}</label>
      <label>{{ price1 }}円</label>
      <a v-bind:href="url1">bought a ..</a>
      <button @click="buy(itemName1)">buy</button> -->
    </div>
    <div class="payment">
      <label>{{ itemName2 }}</label>
      <label>{{ price2 }}円</label>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.payment {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 400px;
  background-color: aliceblue;
}

input {
  margin-bottom: 8px;
}
label {
  font-size: 20px;
  font-weight: bold;
}
</style>
