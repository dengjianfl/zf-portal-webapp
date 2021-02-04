<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" v-if="sliderList.length > 0">
    <van-swipe-item v-for="item in sliderList" :key="item.url">
      <img :src="item.url" alt="">
    </van-swipe-item>
  </van-swipe>
</template>

<script lang="ts">
import { IGlobalState } from "@/store";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import * as Types from '@/store/action-types'

export default defineComponent({
  async setup(){
    let store = useStore<IGlobalState>();

    let sliderList = computed(() => store.state.home.sliders);
    if (sliderList.value.length == 0) {
      await store.dispatch(`home/${Types.SET_SLIDER_LIST}`)
    }
    return {
      sliderList
    }

  }
})
</script>

<style lang="scss" scope>

</style>