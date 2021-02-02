<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
    <HomeList></HomeList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeHeader from "@/components/home-header.vue";
import HomeSwiper from "@/components/home-swiper.vue";
import HomeList from "@/components/home-list.vue";
export default defineComponent({
  components:{
    HomeHeader,
    HomeSwiper,
    HomeList
  }
})

</script>
