import { CATOGORY_TYPES, IHomeState, ISlider } from '@/typings/home';
import { Module } from 'vuex';
import { IGlobalState } from '../index';
import * as Types from '../action-types'
import { getSliders } from '@/api/home';


const state: IHomeState = {
  currentCategory: CATOGORY_TYPES.ALL,
  sliders: [],
  lessons: {
    hasMore: true,
    loading: false,
    offset: 0,
    limit: 5,
    list: []
  }
}

const home: Module<IHomeState, IGlobalState> = {
  namespaced: true,
  state,
  mutations: {
    [Types.SET_CATEGORY](state,payload: CATOGORY_TYPES) {
      state.currentCategory = payload
    },
    [Types.SET_SLIDER_LIST](state,payload: ISlider[]) {
      state.sliders = payload
    }
  },
  actions: {
    async [Types.SET_SLIDER_LIST]({commit}) {
      let sliders = await getSliders<ISlider>()
      commit(Types.SET_SLIDER_LIST, sliders)
    }
  }
}

export default home