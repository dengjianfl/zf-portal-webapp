<template>
  <div class="home">
    <HomeHeader :category="category" @setCurrentCategory="setCurrentCategory"></HomeHeader>
    <!-- 轮播图 -->
    <Suspense>
      <template #default>
        <HomeSwiper></HomeSwiper>
      </template>
      <template #fallback>
        <div>loading...</div>
      </template>
    </Suspense>
    
    <!-- 课程列表 -->
    <HomeList></HomeList>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import HomeHeader from "@/components/home-header.vue";
import HomeSwiper from "@/components/home-swiper.vue";
import HomeList from "@/components/home-list.vue";
import { Store, useStore } from "vuex";
import { IGlobalState } from "@/store";
import { CATOGORY_TYPES } from "@/typings/home";
import * as Types from '@/store/action-types'

function useCategory(store: Store<IGlobalState>) {
  let category = computed(() => store.state.home.currentCategory);
  function setCurrentCategory(category: CATOGORY_TYPES) {
    store.commit(`home/${Types.SET_CATEGORY}`, category)
  }
  return {
    category,
    setCurrentCategory
  }
}

export default defineComponent({
  components:{
    HomeHeader,
    HomeSwiper,
    HomeList
  },
  setup() {
    
    let store = useStore<IGlobalState>();
    let { category, setCurrentCategory } = useCategory(store)

    return {
      category,
      setCurrentCategory
    }

  }
})

</script>
<style lang="scss" scope>
.home{
  padding-top: 64px;
  width: 100%;
}
</style>
