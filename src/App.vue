<template>
  <div id="nav">
    <router-view/>
    <van-tabbar route v-model="active">
      <van-tabbar-item replace to="/" icon="home-o">课程</van-tabbar-item>
      <van-tabbar-item replace to="/about" icon="search">分类</van-tabbar-item>
      <van-tabbar-item replace to="/profile" icon="search">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  setup() {
    const active = ref('home')
    return {
      active
    }
  }
}
</script>

<style lang="scss">

</style>
