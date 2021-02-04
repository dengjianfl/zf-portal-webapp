<template>
  <div class="home-header">
    <van-dropdown-menu>
      <van-dropdown-item :modelValue="category" :options="options" @change="change" />
    </van-dropdown-menu>
  </div>
</template>

<script lang="ts">
import { CATOGORY_TYPES } from "@/typings/home";
import { defineComponent, PropType, reactive, toRefs } from "vue";

export default defineComponent({
  props: {
    category: {
      type: Number as PropType<CATOGORY_TYPES>
    }
  },
  emits: ['setCurrentCategory'],
  setup(props, context) {
    let state = reactive({
      options: [
        { text: '全部课程', value: CATOGORY_TYPES.ALL },
        { text: 'react课程', value: CATOGORY_TYPES.REACT },
        { text: 'vue课程', value: CATOGORY_TYPES.VUE },
        { text: 'node课程', value: CATOGORY_TYPES.NODE }
      ]
    })
    function change(value: CATOGORY_TYPES) {
      context.emit('setCurrentCategory', value)
    }
    return {
      ...toRefs(state),
      change
    }
  }
})
</script>

<style lang="scss" scope>
.home-header{
  height: 64px;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #ccc;
}
</style>